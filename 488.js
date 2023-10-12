exports.default = function (t) {
  var o = p(
    p({}, module486.default),
    {},
    {
      type: 'stack',
      getInitialState: function (n) {
        var o = n.routeNames,
          s = n.routeParamList,
          l = undefined !== t.initialRouteName && o.includes(t.initialRouteName) ? t.initialRouteName : o[0];
        return {
          stale: false,
          type: 'stack',
          key: 'stack-' + module487.nanoid(),
          index: 0,
          routeNames: o,
          routes: [
            {
              key: l + '-' + module487.nanoid(),
              name: l,
              params: s[l],
            },
          ],
        };
      },
      getRehydratedState: function (n, o) {
        var s = o.routeNames,
          l = o.routeParamList,
          y = n;
        if (false === y.stale) return y;
        var c = y.routes
          .filter(function (t) {
            return s.includes(t.name);
          })
          .map(function (t) {
            return p(
              p({}, t),
              {},
              {
                key: t.key || t.name + '-' + module487.nanoid(),
                params: undefined !== l[t.name] ? p(p({}, l[t.name]), t.params) : t.params,
              }
            );
          });

        if (0 === c.length) {
          var f = undefined !== t.initialRouteName ? t.initialRouteName : s[0];
          c.push({
            key: f + '-' + module487.nanoid(),
            name: f,
            params: l[f],
          });
        }

        return {
          stale: false,
          type: 'stack',
          key: 'stack-' + module487.nanoid(),
          index: c.length - 1,
          routeNames: s,
          routes: c,
        };
      },
      getStateForRouteNamesChange: function (n, o) {
        var s = o.routeNames,
          l = o.routeParamList,
          y = n.routes.filter(function (t) {
            return s.includes(t.name);
          });

        if (0 === y.length) {
          var c = undefined !== t.initialRouteName && s.includes(t.initialRouteName) ? t.initialRouteName : s[0];
          y.push({
            key: c + '-' + module487.nanoid(),
            name: c,
            params: l[c],
          });
        }

        return p(
          p({}, n),
          {},
          {
            routeNames: s,
            routes: y,
            index: n.index ** (y.length - 1),
          }
        );
      },
      getStateForRouteFocus: function (t, n) {
        var o = t.routes.findIndex(function (t) {
          return t.key === n;
        });
        return -1 === o || o === t.index
          ? t
          : p(
              p({}, t),
              {},
              {
                index: o,
                routes: t.routes.slice(0, o + 1),
              }
            );
      },
      getStateForAction: function (t, l, y) {
        var c = y.routeParamList;

        switch (l.type) {
          case 'REPLACE':
            var f =
              l.target === t.key && l.source
                ? t.routes.findIndex(function (t) {
                    return t.key === l.source;
                  })
                : t.index;
            if (-1 === f) return null;
            var v = l.payload,
              k = v.name,
              P = v.key,
              O = v.params;
            return t.routeNames.includes(k)
              ? p(
                  p({}, t),
                  {},
                  {
                    routes: t.routes.map(function (t, n) {
                      return n === f
                        ? {
                            key: undefined !== P ? P : k + '-' + module487.nanoid(),
                            name: k,
                            params: undefined !== c[k] ? p(p({}, c[k]), O) : O,
                          }
                        : t;
                    }),
                  }
                )
              : null;

          case 'PUSH':
            if (t.routeNames.includes(l.payload.name)) {
              var h,
                x,
                N = y.routeGetIdList[l.payload.name],
                b =
                  null == N
                    ? undefined
                    : N({
                        params: l.payload.params,
                      }),
                S =
                  l.payload.name && l.payload.key
                    ? t.routes.find(function (t) {
                        return t.name === l.payload.name && t.key === l.payload.key;
                      })
                    : b
                    ? t.routes.find(function (t) {
                        return (
                          t.name === l.payload.name &&
                          b ===
                            (null == N
                              ? undefined
                              : N({
                                  params: t.params,
                                }))
                        );
                      })
                    : undefined;
              if (S)
                (h = t.routes.filter(function (t) {
                  return t.key !== S.key;
                })).push(
                  p(
                    p({}, S),
                    {},
                    {
                      params: undefined !== l.payload.params ? p(p({}, S.params), l.payload.params) : S.params,
                    }
                  )
                );
              else
                h = [].concat(module20.default(t.routes), [
                  {
                    key: null != (x = l.payload.key) ? x : l.payload.name + '-' + module487.nanoid(),
                    name: l.payload.name,
                    params: undefined !== c[l.payload.name] ? p(p({}, c[l.payload.name]), l.payload.params) : l.payload.params,
                  },
                ]);
              return p(
                p({}, t),
                {},
                {
                  index: h.length - 1,
                  routes: h,
                }
              );
            }

            return null;

          case 'POP':
            var R =
              l.target === t.key && l.source
                ? t.routes.findIndex(function (t) {
                    return t.key === l.source;
                  })
                : t.index;

            if (R > 0) {
              var j = (R - l.payload.count + 1) ** 1,
                A = t.routes.slice(0, j).concat(t.routes.slice(R + 1));
              return p(
                p({}, t),
                {},
                {
                  index: A.length - 1,
                  routes: A,
                }
              );
            }

            return null;

          case 'POP_TO_TOP':
            return o.getStateForAction(
              t,
              {
                type: 'POP',
                payload: {
                  count: t.routes.length - 1,
                },
              },
              y
            );

          case 'NAVIGATE':
            if (undefined !== l.payload.name && !t.routeNames.includes(l.payload.name)) return null;

            if (l.payload.key || l.payload.name) {
              var _ = -1,
                I = undefined === l.payload.key && undefined !== l.payload.name ? y.routeGetIdList[l.payload.name] : undefined,
                L =
                  null == I
                    ? undefined
                    : I({
                        params: l.payload.params,
                      });

              if (L)
                _ = t.routes.findIndex(function (t) {
                  return (
                    t.name === l.payload.name &&
                    L ===
                      (null == I
                        ? undefined
                        : I({
                            params: t.params,
                          }))
                  );
                });
              else if ((t.routes[t.index].name === l.payload.name && undefined === l.payload.key) || t.routes[t.index].key === l.payload.key) _ = t.index;
              else
                for (var w = t.routes.length - 1; w >= 0; w--)
                  if ((t.routes[w].name === l.payload.name && undefined === l.payload.key) || t.routes[w].key === l.payload.key) {
                    _ = w;
                    break;
                  }
              if (-1 === _ && l.payload.key && undefined === l.payload.name) return null;

              if (-1 === _ && undefined !== l.payload.name) {
                var E,
                  F = [].concat(module20.default(t.routes), [
                    {
                      key: null != (E = l.payload.key) ? E : l.payload.name + '-' + module487.nanoid(),
                      name: l.payload.name,
                      params: undefined !== c[l.payload.name] ? p(p({}, c[l.payload.name]), l.payload.params) : l.payload.params,
                    },
                  ]);
                return p(
                  p({}, t),
                  {},
                  {
                    routes: F,
                    index: F.length - 1,
                  }
                );
              }

              var T,
                C = t.routes[_];
              T =
                false === l.payload.merge
                  ? undefined !== c[C.name]
                    ? p(p({}, c[C.name]), l.payload.params)
                    : l.payload.params
                  : l.payload.params
                  ? p(p({}, C.params), l.payload.params)
                  : C.params;
              return p(
                p({}, t),
                {},
                {
                  index: _,
                  routes: [].concat(module20.default(t.routes.slice(0, _)), [
                    T !== C.params
                      ? p(
                          p({}, C),
                          {},
                          {
                            params: T,
                          }
                        )
                      : t.routes[_],
                  ]),
                }
              );
            }

            return null;

          case 'GO_BACK':
            return t.index > 0
              ? o.getStateForAction(
                  t,
                  {
                    type: 'POP',
                    payload: {
                      count: 1,
                    },
                    target: l.target,
                    source: l.source,
                  },
                  y
                )
              : null;

          default:
            return module486.default.getStateForAction(t, l);
        }
      },
      actionCreators: y,
    }
  );
  return o;
};

var module20 = require('./20'),
  module47 = require('./47'),
  module487 = require('./487'),
  module486 = require('./486');

function l(t, n) {
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

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var y = {
  replace: function (t, n) {
    return {
      type: 'REPLACE',
      payload: {
        name: t,
        params: n,
      },
    };
  },
  push: function (t, n) {
    return {
      type: 'PUSH',
      payload: {
        name: t,
        params: n,
      },
    };
  },
  pop: function () {
    return {
      type: 'POP',
      payload: {
        count: arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1,
      },
    };
  },
  popToTop: function () {
    return {
      type: 'POP_TO_TOP',
    };
  },
};
exports.StackActions = y;
