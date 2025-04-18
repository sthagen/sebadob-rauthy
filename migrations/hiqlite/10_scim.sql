CREATE TABLE failed_scim_tasks
(
    client_id   TEXT    NOT NULL
        CONSTRAINT failed_scim_tasks_clients_id_fk
            REFERENCES clients
            ON DELETE CASCADE,
    action      TEXT    NOT NULL,
    retry_count INTEGER NOT NULL,
    CONSTRAINT failed_scim_tasks_pk
        PRIMARY KEY (client_id, action)
) STRICT;

CREATE INDEX failed_scim_tasks_client_id_index
    ON failed_scim_tasks (client_id);

CREATE TABLE clients_scim
(
    client_id         TEXT    NOT NULL
        CONSTRAINT clients_scim_pk
            PRIMARY KEY
        CONSTRAINT clients_scim_clients_id_fk
            REFERENCES clients
            ON DELETE CASCADE ON UPDATE CASCADE,
    bearer_token      BLOB    NOT NULL,
    base_endpoint     TEXT    NOT NULL,
    sync_groups       INTEGER NOT NULL,
    group_sync_prefix TEXT
) STRICT;

CREATE UNIQUE INDEX clients_scim_client_id_uindex
    ON clients_scim (client_id);
