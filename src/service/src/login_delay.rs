use actix_web::{HttpResponse, web};
use chrono::Utc;
use rauthy_common::constants::IDX_LOGIN_TIME;
use rauthy_error::{ErrorResponse, ErrorResponseType};
use rauthy_models::app_state::AppState;
use rauthy_models::database::{Cache, DB};
use rauthy_models::events::event::Event;
use rauthy_models::events::ip_blacklist_handler::{IpBlacklistReq, IpFailedLoginCheck};
use rauthy_models::html::templates::TooManyRequestsHtml;
use std::net::IpAddr;
use std::ops::{Add, Sub};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tokio::sync::oneshot;
use tracing::{debug, error};

/**
Handles the login delay.

With every successful login, a new average login time is calculated for how
long it took for a successful login. If a login failed though, the answer will be delayed by the
current average for a successful login, to prevent things like username enumeration.
 */
pub async fn handle_login_delay(
    data: &web::Data<AppState>,
    peer_ip: IpAddr,
    start: Duration,
    res: Result<HttpResponse, ErrorResponse>,
    has_password_been_hashed: bool,
) -> Result<HttpResponse, ErrorResponse> {
    let client = DB::hql();
    let success_time: i64 = client
        .get(Cache::App, IDX_LOGIN_TIME)
        .await?
        .unwrap_or(2000);

    let end = SystemTime::now().duration_since(UNIX_EPOCH).unwrap();
    let delta = end - start;

    match res {
        Ok(resp) => {
            data.tx_ip_blacklist
                .send_async(IpBlacklistReq::LoginFailedDelete(peer_ip.to_string()))
                .await
                .expect("ip blacklist recv not to be closed");

            if has_password_been_hashed {
                let new_time = (success_time + delta.as_millis() as i64) / 2;

                client
                    .put(Cache::App, IDX_LOGIN_TIME, &new_time, Some(i64::MAX))
                    .await?;

                debug!("New login_success_time: {}", new_time);
            }

            Ok(resp)
        }
        Err(err) => {
            let mut failed_logins = 1;

            // check possibly blacklisted IP
            let (tx, rx) = oneshot::channel();
            data.tx_ip_blacklist
                .send_async(IpBlacklistReq::LoginCheck(IpFailedLoginCheck {
                    ip: peer_ip.to_string(),
                    increase_counter: true,
                    tx,
                }))
                .await
                .expect("ip blacklist recv not to be closed");

            match rx.await {
                Ok(res) => {
                    if let Some(counter) = res {
                        failed_logins = counter;
                    }
                }
                Err(err) => {
                    error!(
                        "oneshot recv error in login delay handler - this should never happen: {:?}",
                        err
                    );
                }
            }

            // event for failed login
            data.tx_events
                .send_async(Event::invalid_login(failed_logins, peer_ip.to_string()))
                .await
                .unwrap();

            let sleep_time_median = {
                let time_taken = end.sub(start).as_millis() as u64;
                let mut sleep_time_median = 0;
                let su64 = success_time as u64;
                if time_taken < su64 {
                    sleep_time_median = su64 - time_taken;
                }
                sleep_time_median
            };

            let sleep_time = match failed_logins as u64 {
                // n-th blacklist -> blocks for 24h with each invalid request
                t if t >= 25 => {
                    return build_send_event(data, &peer_ip, 86400).await;
                }
                t if t > 20 => sleep_time_median + t * 20_000,
                20 => {
                    return build_send_event(data, &peer_ip, 3600).await;
                }
                t if t > 15 => sleep_time_median + t * 15_000,
                15 => {
                    return build_send_event(data, &peer_ip, 900).await;
                }
                t if t > 10 => sleep_time_median + t * 10_000,
                10 => {
                    return build_send_event(data, &peer_ip, 600).await;
                }
                t if t > 7 => sleep_time_median + t * 5_000,
                7 => {
                    return build_send_event(data, &peer_ip, 60).await;
                }
                t if t >= 5 => sleep_time_median + t * 3_000,
                t if t >= 3 => sleep_time_median + t * 2_000,
                _ => sleep_time_median,
            };

            debug!("Failed login - sleeping for {}ms now", sleep_time);
            tokio::time::sleep(Duration::from_millis(sleep_time)).await;

            Err(err)
        }
    }
}

#[inline]
async fn build_send_event(
    data: &web::Data<AppState>,
    peer_ip: &IpAddr,
    nbf_seconds: u32,
) -> Result<HttpResponse, ErrorResponse> {
    let not_before = Utc::now().add(chrono::Duration::seconds(nbf_seconds as i64));
    let ts = not_before.timestamp();
    let html = TooManyRequestsHtml::build(peer_ip.to_string(), ts);

    data.tx_events
        .send_async(Event::ip_blacklisted(not_before, peer_ip.to_string()))
        .await
        .unwrap();

    Err(ErrorResponse::new(
        ErrorResponseType::TooManyRequests(ts),
        html,
    ))
}
