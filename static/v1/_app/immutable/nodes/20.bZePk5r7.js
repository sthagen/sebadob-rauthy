import { t as S, e as H, a as l, d as le } from "../chunks/BH6NCLk-.js";
import { p as Q, k as b, aa as J, l as a, f as E, a7 as U, t as L, s as C, j as e, a9 as te, c as q, r as j, a as X, a5 as pe } from "../chunks/CvlvO1XB.js";
import { s as F } from "../chunks/CTI4QPiR.js";
import { i as M } from "../chunks/BUO_AUgz.js";
import { e as _e } from "../chunks/BpWRzPRQ.js";
import { B as se, a as ge } from "../chunks/DMkkW5Nn.js";
import { p as s } from "../chunks/Wh68IIk2.js";
import { u as Y } from "../chunks/D8mHI_K9.js";
import { O as he } from "../chunks/CONsTX1L.js";
import { d as xe, c as be, b as Se, f as ne } from "../chunks/BO1A6s0c.js";
import { C as ye } from "../chunks/BnPoFdx3.js";
import { N as Pe } from "../chunks/D-L0o8jR.js";
import { B as we } from "../chunks/ClvgHNP_.js";
import { N as Ce } from "../chunks/DZ-K8XgE.js";
import { u as Ae } from "../chunks/BYZsu9rB.js";
import { O as K } from "../chunks/B21bTIl7.js";
import { I as de } from "../chunks/BZu_mjh1.js";
import { I as Te } from "../chunks/Nks81rMs.js";
import { u as re } from "../chunks/CUqQZdNU.js";
import { F as ce } from "../chunks/CsaAZyUr.js";
import { L as Ie } from "../chunks/nnFaiMsH.js";
import { S as ie } from "../chunks/w8oBH_pH.js";
import { f as me } from "../chunks/BRCxk8by.js";
import { T as Oe } from "../chunks/_OE2Cq0B.js";
var De = S("<p> </p>"), Ne = S("<p> </p> <p> </p> <!> <!>", 1), Fe = S('<div class="err"> </div>'), Me = S('<div class="flex gap-05"><!> <!></div> <!>', 1), ke = S("<!> <!> <!> <!>", 1);
function Be(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b(""), f = b(false), y = te(() => K(r.scope.name)), d = b(s(r.scope.name)), m = b(void 0), A = b(void 0);
  J(() => {
    r.scope.id && a(d, s(r.scope.name));
  }), J(() => {
    K(r.scope.name) ? (a(m, void 0), a(A, void 0)) : (a(m, s(r.attrs.map((i) => {
      var _a;
      return { name: i.name, selected: ((_a = r.scope.attr_include_access) == null ? void 0 : _a.includes(i.name)) || false };
    }).toSorted((i, n) => i.name.localeCompare(n.name)))), a(A, s(r.attrs.map((i) => {
      var _a;
      return { name: i.name, selected: ((_a = r.scope.attr_include_id) == null ? void 0 : _a.includes(i.name)) || false };
    }).toSorted((i, n) => i.name.localeCompare(n.name)))));
  });
  async function v(i, n) {
    if (a(c, ""), K(e(d)) || r.scope.name !== e(d) && r.scopes.find((P) => P.name === e(d))) {
      a(c, s(g.common.nameExistsAlready));
      return;
    }
    let h = { scope: e(d) };
    if (e(m)) {
      let P = e(m).filter((o) => o.selected).map((o) => o.name);
      P.length > 0 && (h.attr_include_access = P);
    }
    if (e(A)) {
      let P = e(A).filter((o) => o.selected).map((o) => o.name);
      P.length > 0 && (h.attr_include_id = P);
    }
    let O = await xe(i.action, h);
    O.error ? a(c, s(O.error.message)) : (a(f, true), r.onSave(), setTimeout(() => {
      a(f, false);
    }, 2e3));
  }
  const T = te(() => `/auth/v1/scopes/${r.scope.id}`);
  ce(V, { get action() {
    return e(T);
  }, onSubmit: v, children: (i, n) => {
    var h = ke(), O = E(h);
    Ie(O, { label: "ID", mono: true, children: (t, p) => {
      U();
      var u = H();
      L(() => F(u, r.scope.id)), l(t, u);
    } });
    var P = C(O, 2);
    de(P, { autocomplete: "off", get label() {
      return g.scopes.name;
    }, get placeholder() {
      return g.scopes.name;
    }, get disabled() {
      return e(y);
    }, width: "14.5rem", required: true, pattern: me, get value() {
      return e(d);
    }, set value(t) {
      a(d, s(t));
    } });
    var o = C(P, 2);
    {
      var k = (t) => {
        var p = De(), u = q(p, true);
        j(p), L(() => F(u, g.scopes.defaultNoMod)), l(t, p);
      }, D = (t) => {
        var p = Ne(), u = E(p), x = q(u, true);
        j(u);
        var w = C(u, 2), R = q(w, true);
        j(w);
        var B = C(w, 2);
        {
          var N = (I) => {
            ie(I, { get items() {
              return e(m);
            }, set items(z) {
              a(m, s(z));
            }, children: (z, ee) => {
              U();
              var W = H("Access Token Mappings");
              l(z, W);
            }, $$slots: { default: true } });
          };
          M(B, (I) => {
            e(m) && I(N);
          });
        }
        var _ = C(B, 2);
        {
          var G = (I) => {
            ie(I, { get items() {
              return e(A);
            }, set items(z) {
              a(A, s(z));
            }, children: (z, ee) => {
              U();
              var W = H("Id Token Mappings");
              l(z, W);
            }, $$slots: { default: true } });
          };
          M(_, (I) => {
            e(A) && I(G);
          });
        }
        L(() => {
          F(x, g.scopes.mapping1), F(R, g.scopes.mapping2);
        }), l(t, p);
      };
      M(o, (t) => {
        e(y) ? t(k) : t(D, false);
      });
    }
    var Z = C(o, 2);
    {
      var ae = (t) => {
        var p = Me(), u = E(p), x = q(u);
        se(x, { type: "submit", children: (_, G) => {
          U();
          var I = H();
          L(() => F(I, $.common.save)), l(_, I);
        }, $$slots: { default: true } });
        var w = C(x, 2);
        {
          var R = (_) => {
            Te(_, {});
          };
          M(w, (_) => {
            e(f) && _(R);
          });
        }
        j(u);
        var B = C(u, 2);
        {
          var N = (_) => {
            var G = Fe(), I = q(G, true);
            j(G), L(() => F(I, e(c))), l(_, G);
          };
          M(B, (_) => {
            e(c) && _(N);
          });
        }
        l(t, p);
      };
      M(Z, (t) => {
        e(y) || t(ae);
      });
    }
    l(i, h);
  }, $$slots: { default: true } }), X();
}
var Ee = S("<p> </p>"), Le = S('<div class="err"> </div>'), qe = S("<p> </p> <!> <!>", 1);
function je(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b("");
  async function f() {
    a(c, "");
    let v = await be(`/auth/v1/scopes/${r.scope.id}`);
    v.error ? a(c, s(v.error.message)) : r.onSave();
  }
  var y = le(), d = E(y);
  {
    var m = (v) => {
      var T = Ee(), i = q(T, true);
      j(T), L(() => F(i, g.scopes.deleteDefault)), l(v, T);
    }, A = (v) => {
      var T = qe(), i = E(T), n = q(i, true);
      j(i);
      var h = C(i, 2);
      se(h, { level: -1, onclick: f, children: (o, k) => {
        U();
        var D = H();
        L(() => F(D, $.common.delete)), l(o, D);
      }, $$slots: { default: true } });
      var O = C(h, 2);
      {
        var P = (o) => {
          var k = Le(), D = q(k, true);
          j(k), L(() => F(D, e(c))), l(o, k);
        };
        M(O, (o) => {
          e(c) && o(P);
        });
      }
      L(() => F(n, g.scopes.delete1)), l(v, T);
    };
    M(d, (v) => {
      K(r.scope.name) ? v(m) : v(A, false);
    });
  }
  l(V, y), X();
}
var Re = S('<div class="flex"><!></div> <!>', 1);
function Ge(V, r) {
  Q(r, true);
  let $ = re(), g = Y();
  const c = [g.nav.config, $.common.delete];
  let f = b(s(c[0])), y = b(void 0);
  J(() => {
    r.scope.id && requestAnimationFrame(() => {
      var _a;
      (_a = e(y)) == null ? void 0 : _a();
    });
  });
  var d = Re(), m = E(d), A = q(m);
  Oe(A, { tabs: c, get selected() {
    return e(f);
  }, set selected(n) {
    a(f, s(n));
  }, get focusFirst() {
    return e(y);
  }, set focusFirst(n) {
    a(y, s(n));
  } }), j(m);
  var v = C(m, 2);
  {
    var T = (n) => {
      Be(n, { get attrs() {
        return r.attrs;
      }, get scope() {
        return r.scope;
      }, get scopes() {
        return r.scopes;
      }, get onSave() {
        return r.onSave;
      } });
    }, i = (n) => {
      var h = le(), O = E(h);
      {
        var P = (o) => {
          je(o, { get scope() {
            return r.scope;
          }, get onSave() {
            return r.onSave;
          } });
        };
        M(O, (o) => {
          e(f) === $.common.delete && o(P);
        }, true);
      }
      l(n, h);
    };
    M(v, (n) => {
      e(f) === g.nav.config ? n(T) : n(i, false);
    });
  }
  l(V, d), X();
}
var Ve = S('<div class="err"> </div>'), $e = S("<!> <!> <!>", 1), ze = S('<div class="container svelte-s1196z"><!></div>');
function Ue(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b(void 0), f = b(""), y = b("");
  J(() => {
    requestAnimationFrame(() => {
      var _a;
      (_a = e(c)) == null ? void 0 : _a.focus();
    });
  });
  async function d(v, T) {
    var _a;
    if (r.scopes.find((h) => h.name === e(y))) {
      a(f, s(g.common.nameExistsAlready));
      return;
    }
    a(f, "");
    let i = { scope: e(y) }, n = await Se(v.action, i);
    n.body ? r.onSave(n.body.id) : a(f, s(((_a = n.error) == null ? void 0 : _a.message) || "Error"));
  }
  var m = ze(), A = q(m);
  ce(A, { action: "/auth/v1/scopes", onSubmit: d, children: (v, T) => {
    var i = $e(), n = E(i);
    de(n, { autocomplete: "off", get label() {
      return g.scopes.name;
    }, get placeholder() {
      return g.scopes.name;
    }, required: true, pattern: me, get ref() {
      return e(c);
    }, set ref(o) {
      a(c, s(o));
    }, get value() {
      return e(y);
    }, set value(o) {
      a(y, s(o));
    } });
    var h = C(n, 2);
    se(h, { type: "submit", children: (o, k) => {
      U();
      var D = H();
      L(() => F(D, $.common.save)), l(o, D);
    }, $$slots: { default: true } });
    var O = C(h, 2);
    {
      var P = (o) => {
        var k = Ve(), D = q(k, true);
        j(k), L(() => F(D, e(f))), l(o, k);
      };
      M(O, (o) => {
        e(f) && o(P);
      });
    }
    l(v, i);
  }, $$slots: { default: true } }), j(m), l(V, m), X();
}
var We = S('<span class="default svelte-1bjjcss"><i>default</i></span>'), He = S(" <!>", 1), Je = S("<div></div> <!>", 1), Ke = S("<!> <!>", 1), Qe = S('<div class="err"> </div>'), Xe = S('<!> <div id="scopes"><!></div>', 1), Ye = S("<!> <!>", 1);
function Ze(V, r) {
  Q(r, true);
  let $ = Y(), g = b(void 0), c = b(""), f = Ae("sid"), y = b(s([])), d = b(s([])), m = b(s([])), A = b(void 0);
  const v = [$.common.name, "ID"];
  let T = b(s(v[0])), i = b("");
  const n = [$.common.name, "ID"];
  pe(() => {
    O(), h();
  }), J(() => {
    a(A, s(e(d).find((t) => t.id === f.get())));
  }), J(() => {
    let t = e(i).toLowerCase();
    t ? e(T) === v[0] ? a(m, s(e(d).filter((p) => {
      var _a;
      return (_a = p.name) == null ? void 0 : _a.toLowerCase().includes(t);
    }))) : e(T) === v[1] && a(m, s(e(d).filter((p) => p.id.toLowerCase().includes(t)))) : a(m, s(e(d)));
  });
  async function h() {
    var _a;
    let t = await ne("/auth/v1/users/attr");
    t.body ? a(y, s(t.body.values)) : a(c, s(((_a = t.error) == null ? void 0 : _a.message) || "Error"));
  }
  async function O() {
    var _a;
    let t = await ne("/auth/v1/scopes");
    t.body ? a(d, s(t.body)) : a(c, s(((_a = t.error) == null ? void 0 : _a.message) || "Error"));
  }
  function P(t, p) {
    let u = p === "up";
    t === n[0] ? e(d).sort((x, w) => u ? x.name.localeCompare(w.name) : w.name.localeCompare(x.name)) : t === n[1] && e(d).sort((x, w) => u ? x.id.localeCompare(w.id) : w.id.localeCompare(x.id));
  }
  function o() {
    O();
  }
  async function k(t) {
    var _a;
    (_a = e(g)) == null ? void 0 : _a(), await O(), f.set(t);
  }
  var D = Ye(), Z = E(D);
  Ce(Z, { paddingTop: "2.1rem", buttonTilesAriaControls: "scopes", width: "min(20rem, 100dvw)", thresholdNavSub: 700, buttonTiles: (p) => {
    var u = Je(), x = E(u);
    ge(x, "height", ".5rem");
    var w = C(x, 2);
    _e(w, 17, () => e(m), (R) => R.id, (R, B, N, _) => {
      const G = te(() => f.get() === e(B).id);
      Pe(R, { onclick: () => f.set(e(B).id), get selected() {
        return e(G);
      }, children: (I, z) => {
        U();
        var ee = He(), W = E(ee), ve = C(W);
        {
          var ue = (oe) => {
            var fe = We();
            l(oe, fe);
          };
          M(ve, (oe) => {
            K(e(B).name) && oe(ue);
          });
        }
        L(() => F(W, `${e(B).name ?? ""} `)), l(I, ee);
      } });
    }), l(p, u);
  }, children: (p, u) => {
    var x = Ke(), w = E(x);
    const R = te(() => e(d).length === 0 ? 1 : 2);
    we(w, { get level() {
      return e(R);
    }, alignRight: true, get closeModal() {
      return e(g);
    }, set closeModal(N) {
      a(g, s(N));
    }, children: (N, _) => {
      Ue(N, { onSave: k, get scopes() {
        return e(d);
      } });
    }, $$slots: { default: true } });
    var B = C(w, 2);
    he(B, { searchOptions: v, orderOptions: n, onChangeOrder: P, searchWidth: "min(19.5rem, 100dvw - .5rem)", get searchOption() {
      return e(T);
    }, set searchOption(N) {
      a(T, s(N));
    }, get value() {
      return e(i);
    }, set value(N) {
      a(i, s(N));
    } }), l(p, x);
  }, $$slots: { buttonTiles: true, default: true } });
  var ae = C(Z, 2);
  ye(ae, { children: (t, p) => {
    var u = Xe(), x = E(u);
    {
      var w = (_) => {
        var G = Qe(), I = q(G, true);
        j(G), L(() => F(I, e(c))), l(_, G);
      };
      M(x, (_) => {
        e(c) && _(w);
      });
    }
    var R = C(x, 2), B = q(R);
    {
      var N = (_) => {
        Ge(_, { get attrs() {
          return e(y);
        }, get scope() {
          return e(A);
        }, get scopes() {
          return e(d);
        }, onSave: o });
      };
      M(B, (_) => {
        e(A) && _(N);
      });
    }
    j(R), l(t, u);
  } }), l(V, D), X();
}
function wt(V) {
  Ze(V, {});
}
export {
  wt as component
};
