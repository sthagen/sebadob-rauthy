import { G as V, h as f, u as R, Y as x, y as M, au as m, av as T, aw as H, O as C, ar as $, $ as G, I as j, d as U, ax as J, z as q, m as S, C as b, q as k, i as v, ay as N, H as A, b as K, L as Q, o as X, az as Z, N as ee, aA as te, g as re, p as ae, aB as ne, a as oe } from "./w0HvPX0p.js";
import { b as ie } from "./BxmJRzoY.js";
function ye(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const se = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
function ge(e) {
  return se.includes(e);
}
const ue = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
function be(e) {
  return e = e.toLowerCase(), ue[e] ?? e;
}
const le = ["touchstart", "touchmove"];
function ce(e) {
  return le.includes(e);
}
function we(e, t) {
  if (t) {
    const a = document.body;
    e.autofocus = true, V(() => {
      document.activeElement === a && e.focus();
    });
  }
}
function Ee(e) {
  f && R(e) !== null && x(e);
}
let D = false;
function fe() {
  D || (D = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a;
      if (!e.defaultPrevented) for (const t of e.target.elements) (_a = t.__on_r) == null ? void 0 : _a.call(t);
    });
  }, { capture: true }));
}
function me(e, t, a, n = true) {
  n && a();
  for (var o of t) e.addEventListener(o, a);
  M(() => {
    for (var r of t) e.removeEventListener(r, a);
  });
}
function B(e) {
  var t = H, a = C;
  m(null), T(null);
  try {
    return e();
  } finally {
    m(t), T(a);
  }
}
function Te(e, t, a, n = a) {
  e.addEventListener(t, () => B(a));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(true);
  } : e.__on_r = () => n(true), fe();
}
const W = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
function ke(e) {
  if (!f) return;
  e.onload && e.removeAttribute("onload"), e.onerror && e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t);
  }));
}
function de(e, t, a, n = {}) {
  function o(r) {
    if (n.capture || w.call(t, r), !r.cancelBubble) return B(() => a == null ? void 0 : a.call(this, r));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? V(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function Le(e, t, a, n, o) {
  var r = { capture: n, passive: o }, l = de(e, t, a, r);
  (t === document.body || t === window || t === document) && M(() => {
    t.removeEventListener(e, l, r);
  });
}
function Ae(e) {
  for (var t = 0; t < e.length; t++) W.add(e[t]);
  for (var a of I) a(e);
}
function w(e) {
  var _a;
  var t = this, a = t.ownerDocument, n = e.type, o = ((_a = e.composedPath) == null ? void 0 : _a.call(e)) || [], r = o[0] || e.target, l = 0, h = e.__root;
  if (h) {
    var d = o.indexOf(h);
    if (d !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var p = o.indexOf(t);
    if (p === -1) return;
    d <= p && (l = d);
  }
  if (r = o[l] || e.target, r !== t) {
    $(e, "currentTarget", { configurable: true, get() {
      return r || a;
    } });
    var L = H, c = C;
    m(null), T(null);
    try {
      for (var i, s = []; r !== null; ) {
        var y = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var _ = r["__" + n];
          if (_ != null && (!r.disabled || e.target === r)) if (G(_)) {
            var [z, ...F] = _;
            z.apply(r, [e, ...F]);
          } else _.call(r, e);
        } catch (E) {
          i ? s.push(E) : i = E;
        }
        if (e.cancelBubble || y === t || y === null) break;
        r = y;
      }
      if (i) {
        for (let E of s) queueMicrotask(() => {
          throw E;
        });
        throw i;
      }
    } finally {
      e.__root = t, delete e.currentTarget, m(L), T(c);
    }
  }
}
let u;
function _e() {
  u = void 0;
}
function Se(e) {
  let t = null, a = f;
  var n;
  if (f) {
    for (t = v, u === void 0 && (u = R(document.head)); u !== null && (u.nodeType !== 8 || u.data !== q); ) u = S(u);
    u === null ? b(false) : u = k(S(u));
  }
  f || (n = document.head.appendChild(j()));
  try {
    U(() => e(n), J);
  } finally {
    a && (b(true), u = v, k(t));
  }
}
let P = true;
function Ne(e, t) {
  var a = t == null ? "" : typeof t == "object" ? t + "" : t;
  a !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = a, e.nodeValue = a + "");
}
function ve(e, t) {
  return Y(e, t);
}
function Ie(e, t) {
  N(), t.intro = t.intro ?? false;
  const a = t.target, n = f, o = v;
  try {
    for (var r = R(a); r && (r.nodeType !== 8 || r.data !== q); ) r = S(r);
    if (!r) throw A;
    b(true), k(r), K();
    const l = Y(e, { ...t, anchor: r });
    if (v === null || v.nodeType !== 8 || v.data !== Q) throw X(), A;
    return b(false), l;
  } catch (l) {
    if (l === A) return t.recover === false && Z(), N(), x(a), b(false), ve(e, t);
    throw l;
  } finally {
    b(n), k(o), _e();
  }
}
const g = /* @__PURE__ */ new Map();
function Y(e, { target: t, anchor: a, props: n = {}, events: o, context: r, intro: l = true }) {
  N();
  var h = /* @__PURE__ */ new Set(), d = (c) => {
    for (var i = 0; i < c.length; i++) {
      var s = c[i];
      if (!h.has(s)) {
        h.add(s);
        var y = ce(s);
        t.addEventListener(s, w, { passive: y });
        var _ = g.get(s);
        _ === void 0 ? (document.addEventListener(s, w, { passive: y }), g.set(s, 1)) : g.set(s, _ + 1);
      }
    }
  };
  d(ee(W)), I.add(d);
  var p = void 0, L = te(() => {
    var c = a ?? t.appendChild(j());
    return re(() => {
      if (r) {
        ae({});
        var i = ne;
        i.c = r;
      }
      o && (n.$$events = o), f && ie(c, null), P = l, p = e(c, n) || {}, P = true, f && (C.nodes_end = v), r && oe();
    }), () => {
      var _a;
      for (var i of h) {
        t.removeEventListener(i, w);
        var s = g.get(i);
        --s === 0 ? (document.removeEventListener(i, w), g.delete(i)) : g.set(i, s);
      }
      I.delete(d), c !== a && ((_a = c.parentNode) == null ? void 0 : _a.removeChild(c));
    };
  });
  return O.set(p, L), p;
}
let O = /* @__PURE__ */ new WeakMap();
function Oe(e, t) {
  const a = O.get(e);
  return a ? (O.delete(e), a(t)) : Promise.resolve();
}
export {
  Te as a,
  ke as b,
  de as c,
  Ae as d,
  Le as e,
  we as f,
  fe as g,
  Se as h,
  ye as i,
  ge as j,
  Ie as k,
  me as l,
  ve as m,
  be as n,
  P as o,
  Ee as r,
  Ne as s,
  Oe as u,
  B as w
};
