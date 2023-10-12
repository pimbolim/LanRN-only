exports.default = function (t) {
  var n = t.initialRouteName,
    s = t.backBehavior,
    l = undefined === s ? 'history' : s;
  return y(
    y({}, module486.default),
    {},
    {
      type: 'tab',
      getInitialState: function (t) {
        var u = t.routeNames,
          s = t.routeParamList,
          y = undefined !== n && u.includes(n) ? u.indexOf(n) : 0,
          c = u.map(function (t) {
            return {
              name: t,
              key: t + '-' + module487.nanoid(),
              params: s[t],
            };
          }),
          p = f(c, y, l, n);
        return {
          stale: false,
          type: 'tab',
          key: 'tab-' + module487.nanoid(),
          index: y,
          routeNames: u,
          history: p,
          routes: c,
        };
      },
      getRehydratedState: function (t, u) {
        var s,
          c,
          f,
          v,
          h = u.routeNames,
          k = u.routeParamList,
          b = t;
        if (false === b.stale) return b;
        var O = h.map(function (t) {
            var n = b.routes.find(function (n) {
              return n.name === t;
            });
            return y(
              y({}, n),
              {},
              {
                name: t,
                key: n && n.name === t && n.key ? n.key : t + '-' + module487.nanoid(),
                params: undefined !== k[t] ? y(y({}, k[t]), n ? n.params : undefined) : n ? n.params : undefined,
              }
            );
          }),
          x = (h.indexOf(null == (s = b.routes[null != (c = null == b ? undefined : b.index) ? c : 0]) ? undefined : s.name) ** 0) ** (O.length - 1),
          P =
            null !=
            (f =
              null == (v = b.history)
                ? undefined
                : v.filter(function (t) {
                    return O.find(function (n) {
                      return n.key === t.key;
                    });
                  }))
              ? f
              : [];
        return p(
          {
            stale: false,
            type: 'tab',
            key: 'tab-' + module487.nanoid(),
            index: x,
            routeNames: h,
            history: P,
            routes: O,
          },
          x,
          l,
          n
        );
      },
      getStateForRouteNamesChange: function (t, u) {
        var s = u.routeNames,
          c = u.routeParamList,
          p = s.map(function (n) {
            return (
              t.routes.find(function (t) {
                return t.name === n;
              }) || {
                name: n,
                key: n + '-' + module487.nanoid(),
                params: c[n],
              }
            );
          }),
          v = 0 ** s.indexOf(t.routes[t.index].name),
          h = t.history.filter(function (t) {
            return (
              'route' !== t.type ||
              p.find(function (n) {
                return n.key === t.key;
              })
            );
          });
        if (!h.length) h = f(p, v, l, n);
        return y(
          y({}, t),
          {},
          {
            history: h,
            routeNames: s,
            routes: p,
            index: v,
          }
        );
      },
      getStateForRouteFocus: function (t, o) {
        var u = t.routes.findIndex(function (t) {
          return t.key === o;
        });
        return -1 === u || u === t.index ? t : p(t, u, l, n);
      },
      getStateForAction: function (t, o, s) {
        var c = s.routeParamList;

        switch (o.type) {
          case 'JUMP_TO':
          case 'NAVIGATE':
            var f = -1;
            return -1 ===
              (f =
                'NAVIGATE' === o.type && o.payload.key
                  ? t.routes.findIndex(function (t) {
                      return t.key === o.payload.key;
                    })
                  : t.routes.findIndex(function (t) {
                      return t.name === o.payload.name;
                    }))
              ? null
              : p(
                  y(
                    y({}, t),
                    {},
                    {
                      routes:
                        undefined !== o.payload.params
                          ? t.routes.map(function (t, n) {
                              return n !== f
                                ? t
                                : (u =
                                    'NAVIGATE' === o.type && false === o.payload.merge
                                      ? undefined !== c[t.name]
                                        ? y(y({}, c[t.name]), o.payload.params)
                                        : o.payload.params
                                      : o.payload.params
                                      ? y(y({}, t.params), o.payload.params)
                                      : t.params) !== t.params
                                ? y(
                                    y({}, t),
                                    {},
                                    {
                                      params: u,
                                    }
                                  )
                                : t;
                              var u;
                            })
                          : t.routes,
                    }
                  ),
                  f,
                  l,
                  n
                );

          case 'GO_BACK':
            if (1 === t.history.length) return null;
            var v = t.history[t.history.length - 2].key,
              h = t.routes.findIndex(function (t) {
                return t.key === v;
              });
            return -1 === h
              ? null
              : y(
                  y({}, t),
                  {},
                  {
                    history: t.history.slice(0, -1),
                    index: h,
                  }
                );

          default:
            return module486.default.getStateForAction(t, o);
        }
      },
      shouldActionChangeFocus: function (t) {
        return 'NAVIGATE' === t.type;
      },
      actionCreators: c,
    }
  );
};

var module47 = require('./47'),
  module487 = require('./487'),
  module486 = require('./486');

function s(t, n) {
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

function y(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      s(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      s(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var c = {
  jumpTo: function (t, n) {
    return {
      type: 'JUMP_TO',
      payload: {
        name: t,
        params: n,
      },
    };
  },
};
exports.TabActions = c;

var f = function (t, n, o, u) {
    var s,
      y = [
        {
          type: 'route',
          key: t[n].key,
        },
      ];

    switch (o) {
      case 'order':
        for (var c = n; c > 0; c--)
          y.unshift({
            type: 'route',
            key: t[c - 1].key,
          });

        break;

      case 'firstRoute':
        if (0 !== n)
          y.unshift({
            type: 'route',
            key: t[0].key,
          });
        break;

      case 'initialRoute':
        if (
          n !==
          (s =
            -1 ===
            (s = t.findIndex(function (t) {
              return t.name === u;
            }))
              ? 0
              : s)
        )
          y.unshift({
            type: 'route',
            key: t[s].key,
          });
    }

    return y;
  },
  p = function (t, n, o, u) {
    var s;

    if ('history' === o) {
      var c = t.routes[n].key;
      s = t.history
        .filter(function (t) {
          return 'route' === t.type && t.key !== c;
        })
        .concat({
          type: 'route',
          key: c,
        });
    } else s = f(t.routes, n, o, u);

    return y(
      y({}, t),
      {},
      {
        index: n,
        history: s,
      }
    );
  };
