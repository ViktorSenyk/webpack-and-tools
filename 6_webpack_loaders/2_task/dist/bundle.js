!(function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ''),
    t((t.s = 0));
})([
  function (e, r, t) {
    'use strict';
    t.r(r);
    function n(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function o(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? n(Object(t), !0).forEach(function (r) {
              i(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : n(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r)
              );
            });
      }
      return e;
    }
    function i(e, r, t) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ('object' != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, r || 'default');
              if ('object' != typeof n) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == typeof r ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    ((e) => {
      const { name: r, company: t } = e;
      console.log(`${r} from ${t}`);
    })(o(o({}, { name: 'Tom', age: 17 }), {}, { company: 'Gromcode' }));
    const u = [1, 2, [3, 4, [5, 6]]].flat(2);
    console.log(u), Promise.resolve().finally();
  },
]);
