exports.default = function (t, l) {
  var f,
    p = module540.default(l),
    v = module12.default(p, 2),
    h = v[0],
    y = v[1],
    b = [];
  if (null != y && y.initialRouteName)
    b.push({
      initialRouteName: y.initialRouteName,
      parentScreens: [],
    });
  var O = null == y ? undefined : y.screens,
    P = t.replace(/\/+/g, '/').replace(/^\//, '').replace(/\?.*$/, '');

  if (((P = P.endsWith('/') ? P : P + '/'), undefined === O)) {
    var k = P.split('/')
      .filter(Boolean)
      .map(function (n, o, u) {
        var s = decodeURIComponent(n);
        return o === u.length - 1
          ? {
              name: s,
              params: W(t),
            }
          : {
              name: s,
            };
      });
    return k.length ? S(k, b) : undefined;
  }

  var R,
    A,
    D = (f = []).concat
      .apply(
        f,
        module20.default(
          Object.keys(O).map(function (t) {
            return x(h, t, O, [], b, []);
          })
        )
      )
      .sort(function (t, n) {
        if (t.pattern === n.pattern) return n.routeNames.join('>').localeCompare(t.routeNames.join('>'));
        if (t.pattern.startsWith(n.pattern)) return -1;
        if (n.pattern.startsWith(t.pattern)) return 1;
        var o = t.pattern.split('/'),
          u = n.pattern.split('/'),
          s = o.indexOf('*'),
          l = u.indexOf('*');
        return -1 === s && -1 !== l ? -1 : -1 !== s && -1 === l ? 1 : s === l ? u.length - o.length : l - s;
      });

  if (
    (D.reduce(function (t, u) {
      if (t[u.pattern]) {
        var s = t[u.pattern].routeNames,
          l = u.routeNames;
        if (
          !(s.length > l.length
            ? l.every(function (t, n) {
                return s[n] === t;
              })
            : s.every(function (t, n) {
                return l[n] === t;
              }))
        )
          throw new Error(
            "Found conflicting screens with the same pattern. The pattern '" +
              u.pattern +
              "' resolves to both '" +
              s.join(' > ') +
              "' and '" +
              l.join(' > ') +
              "'. Patterns must be unique and cannot resolve to more than one screen."
          );
      }

      return module11.default(t, module47.default({}, u.pattern, u));
    }, {}),
    '/' === P)
  ) {
    var I = D.find(function (t) {
      return (
        '' === t.path &&
        t.routeNames.every(function (t) {
          var n;
          return !(
            null !=
              (n = D.find(function (n) {
                return n.screen === t;
              })) && n.path
          );
        })
      );
    });
    return I
      ? S(
          I.routeNames.map(function (n, o, u) {
            return o === u.length - 1
              ? {
                  name: n,
                  params: W(t, I.parse),
                }
              : {
                  name: n,
                };
          }),
          b
        )
      : undefined;
  }

  if (false === h) {
    var M = w(
        P,
        D.map(function (t) {
          return j(
            j({}, t),
            {},
            {
              regex: t.regex ? new RegExp(t.regex.source + '$') : undefined,
            }
          );
        })
      ),
      _ = M.routes,
      C = M.remainingPath;

    if (undefined !== _) {
      A = S(_, b);
      P = C;
      R = A;
    }
  } else
    for (; P; ) {
      var U = w(P, D),
        $ = U.routes,
        B = U.remainingPath;

      if (((P = B), undefined === $)) {
        var T = P.split('/');
        $ = [
          {
            name: decodeURIComponent(T[0]),
          },
        ];
        T.shift();
        P = T.join('/');
      }

      var q = S($, b);

      if (A) {
        for (var F; null != (L = A) && L.routes[A.index || 0].state; ) {
          var L;
          A = A.routes[A.index || 0].state;
        }

        A.routes[(null == (F = A) ? undefined : F.index) || 0].state = q;
      } else R = q;

      A = q;
    }

  if (null == A || null == R) return;
  var z = E(A),
    G = W(t, N(z.name, D));
  if (G) z.params = j(j({}, z.params), G);
  return R;
};

var module47 = require('./47'),
  module11 = require('./11'),
  module20 = require('./20'),
  module12 = require('./12'),
  module534 = require('./534'),
  module535 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./535')),
  module540 = require('./540');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function v(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = h(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function h(t, n) {
  if (t) {
    if ('string' == typeof t) return y(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? y(t, n) : undefined;
  }
}

function y(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

function b(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      b(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      b(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var O = function (...args) {
    return (t = []).concat
      .apply(
        t,
        module20.default(
          args.map(function (t) {
            return t.split('/');
          })
        )
      )
      .filter(Boolean)
      .join('/');
  },
  w = function (t, u) {
    for (
      var module12,
        l,
        module535 = t,
        c = function (t) {
          if (!t.regex) return 'continue';
          var l = module535.match(t.regex);

          if (l) {
            var c,
              p =
                null == (c = t.pattern)
                  ? undefined
                  : c
                      .split('/')
                      .filter(function (t) {
                        return t.startsWith(':');
                      })
                      .reduce(function (t, u, s) {
                        return module11.default(t, module47.default({}, u, l[2 * (s + 1)].replace(/\//, '')));
                      }, {});
            module12 = t.routeNames.map(function (t) {
              var n,
                o = u.find(function (n) {
                  return n.screen === t;
                }),
                s =
                  null == o
                    ? undefined
                    : null == (n = o.path)
                    ? undefined
                    : n
                        .split('/')
                        .filter(function (t) {
                          return t.startsWith(':');
                        })
                        .reduce(function (t, n) {
                          var u = p[n];

                          if (u) {
                            var s,
                              l = n.replace(/^:/, '').replace(/\?$/, '');
                            t[l] = null != (s = o.parse) && s[l] ? o.parse[l](u) : u;
                          }

                          return t;
                        }, {});
              return s && Object.keys(s).length
                ? {
                    name: t,
                    params: s,
                  }
                : {
                    name: t,
                  };
            });
            module535 = module535.replace(l[1], '');
            return 'break';
          }
        },
        p = v(u);
      !(l = p()).done;

    ) {
      var h = c(l.value);
      if ('continue' !== h && 'break' === h) break;
    }

    return {
      routes: module12,
      remainingPath: module535,
    };
  },
  x = function t(n, o, s) {
    var l = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : [],
      f = arguments.length > 4 ? arguments[4] : undefined,
      c = arguments.length > 5 ? arguments[5] : undefined,
      p = arguments.length > 6 ? arguments[6] : undefined,
      v = [];
    l.push(o);
    c.push(o);
    var h = s[o];

    if ('string' == typeof h) {
      var y = p ? O(p, h) : h;
      v.push(P(n, o, l, y, h));
    } else if ('object' == typeof h) {
      var b;

      if ('string' == typeof h.path) {
        if (n) b = true !== h.exact && p ? O(p, h.path) : h.path;
        else {
          if (h.exact && undefined === h.path)
            throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
          b = true !== h.exact ? O(p || '', h.path || '') : h.path || '';
        }
        v.push(P(n, o, l, b, h.path, h.parse));
      }

      if (h.screens) {
        if (h.initialRouteName)
          f.push({
            initialRouteName: h.initialRouteName,
            parentScreens: c,
          });
        Object.keys(h.screens).forEach(function (o) {
          var s,
            y = t(n, o, h.screens, l, f, module20.default(c), null != (s = b) ? s : p);
          v.push.apply(v, module20.default(y));
        });
      }
    }

    l.pop();
    return v;
  },
  P = function (t, n, o, s, f, c) {
    return {
      screen: n,
      regex: (s = s.split('/').filter(Boolean).join('/'))
        ? new RegExp(
            '^(' +
              s
                .split('/')
                .map(function (n) {
                  if (t && '*' === n)
                    throw new Error(
                      "Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/5.x/configuring-links/#updating-config"
                    );
                  return n.startsWith(':') ? '(([^/]+\\/)' + (n.endsWith('?') ? '?' : '') + ')' : ('*' === n ? '.*' : module534.default(n)) + '\\/';
                })
                .join('') +
              ')'
          )
        : undefined,
      pattern: s,
      path: f,
      routeNames: module20.default(o),
      parse: c,
    };
  },
  N = function (t, n) {
    for (var o, u = v(n); !(o = u()).done; ) {
      var s = o.value;
      if (t === s.routeNames[s.routeNames.length - 1]) return s.parse;
    }
  },
  k = function (t, n, o) {
    for (var u, s = v(o); !(u = s()).done; ) {
      var l = u.value;

      if (n.length === l.parentScreens.length) {
        for (var f = true, c = 0; c < n.length; c++)
          if (0 !== n[c].localeCompare(l.parentScreens[c])) {
            f = false;
            break;
          }

        if (f) return t !== l.initialRouteName ? l.initialRouteName : undefined;
      }
    }
  },
  R = function (t, n, o) {
    if (o)
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              n,
            ],
          }
        : {
            routes: [n],
          };
    else
      return t
        ? {
            index: 1,
            routes: [
              {
                name: t,
              },
              j(
                j({}, n),
                {},
                {
                  state: {
                    routes: [],
                  },
                }
              ),
            ],
          }
        : {
            routes: [
              j(
                j({}, n),
                {},
                {
                  state: {
                    routes: [],
                  },
                }
              ),
            ],
          };
  },
  S = function (t, n) {
    var o,
      u = t.shift(),
      s = [],
      l = k(u.name, s, n);
    if ((s.push(u.name), (o = R(l, u, 0 === t.length)), t.length > 0))
      for (var f = o; (u = t.shift()); ) {
        l = k(u.name, s, n);
        var c = f.index || f.routes.length - 1;
        f.routes[c].state = R(l, u, 0 === t.length);
        if (t.length > 0) f = f.routes[c].state;
        s.push(u.name);
      }
    return o;
  },
  E = function (t) {
    for (var n, o = t; null != (u = o) && u.routes[o.index || 0].state; ) {
      var u;
      o = o.routes[o.index || 0].state;
    }

    return o.routes[(null == (n = o) ? undefined : n.index) || 0];
  },
  W = function (t, n) {
    var o = t.split('?')[1],
      u = module535.parse(o);
    if (n)
      Object.keys(u).forEach(function (t) {
        if (n[t] && 'string' == typeof u[t]) u[t] = n[t](u[t]);
      });
    return Object.keys(u).length ? u : undefined;
  };
