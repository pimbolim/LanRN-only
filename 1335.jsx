var module20 = require('./20'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = j(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module431 = require('./431'),
  module482 = require('./482'),
  module1336 = require('./1336'),
  module1339 = require('./1339'),
  module1371 = require('./1371'),
  module1372 = require('./1372'),
  module1376 = require('./1376'),
  module1352 = require('./1352'),
  w = ['state', 'navigation', 'keyboardHandlingEnabled', 'mode', 'headerMode', 'descriptors'];

function j(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (j = function (t) {
    return t ? o : n;
  })(t);
}

function G(t, n) {
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

function D(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      G(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      G(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function C() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var H = null != module1336.GestureHandlerRootView ? module1336.GestureHandlerRootView : ReactNative.View,
  M = (function (t, ...args) {
    module35.default(G, t);

    var module47 = G,
      module1336 = C(),
      j = function () {
        var t,
          n = module34.default(module47);

        if (module1336) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function G() {
      var t;
      module24.default(this, G);
      (t = j.call(this, ...args)).state = {
        routes: [],
        previousRoutes: [],
        previousDescriptors: {},
        openingRouteKeys: [],
        closingRouteKeys: [],
        replacingRouteKeys: [],
        descriptors: {},
      };

      t.getGesturesEnabled = function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key];

        if (u) {
          var s = u.options,
            c = s.gestureEnabled;
          return false !== s.animationEnabled && false !== c;
        }

        return false;
      };

      t.getPreviousRoute = function (n) {
        var o = n.route,
          u = t.state,
          s = u.closingRouteKeys,
          c = u.replacingRouteKeys,
          l = t.state.routes.filter(function (t) {
            return t.key === o.key || (!s.includes(t.key) && !c.includes(t.key));
          });
        return l[
          l.findIndex(function (t) {
            return t.key === o.key;
          }) - 1
        ];
      };

      t.renderScene = function (n) {
        var o = n.route,
          u = t.state.descriptors[o.key] || t.props.descriptors[o.key];
        return u ? u.render() : null;
      };

      t.renderHeader = function (t) {
        return <module1372.default />;
      };

      t.handleOpenRoute = function (n) {
        var o = n.route,
          u = t.props,
          s = u.state,
          c = u.navigation,
          l = t.state,
          f = l.closingRouteKeys,
          p = l.replacingRouteKeys;
        if (
          f.some(function (t) {
            return t === o.key;
          }) &&
          p.every(function (t) {
            return t !== o.key;
          }) &&
          s.routeNames.includes(o.name) &&
          !s.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          c.navigate(o);
        else
          t.setState(function (t) {
            return {
              routes: t.replacingRouteKeys.length
                ? t.routes.filter(function (n) {
                    return !t.replacingRouteKeys.includes(n.key);
                  })
                : t.routes,
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              replacingRouteKeys: [],
            };
          });
      };

      t.handleCloseRoute = function (n) {
        var o = n.route,
          u = t.props,
          s = u.state,
          c = u.navigation;
        if (
          s.routes.some(function (t) {
            return t.key === o.key;
          })
        )
          c.dispatch(
            D(
              D({}, module482.StackActions.pop()),
              {},
              {
                source: o.key,
                target: s.key,
              }
            )
          );
        else
          t.setState(function (t) {
            return {
              routes: t.routes.filter(function (t) {
                return t.key !== o.key;
              }),
              openingRouteKeys: t.openingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
              closingRouteKeys: t.closingRouteKeys.filter(function (t) {
                return t !== o.key;
              }),
            };
          });
      };

      t.handleTransitionStart = function (n, o) {
        var u = n.route;
        return t.props.navigation.emit({
          type: 'transitionStart',
          data: {
            closing: o,
          },
          target: u.key,
        });
      };

      t.handleTransitionEnd = function (n, o) {
        var u = n.route;
        return t.props.navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: o,
          },
          target: u.key,
        });
      };

      t.handleGestureStart = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureStart',
          target: o.key,
        });
      };

      t.handleGestureEnd = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureEnd',
          target: o.key,
        });
      };

      t.handleGestureCancel = function (n) {
        var o = n.route;
        t.props.navigation.emit({
          type: 'gestureCancel',
          target: o.key,
        });
      };

      return t;
    }

    module25.default(
      G,
      [
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              s = n.state,
              c = n.navigation,
              l = n.keyboardHandlingEnabled,
              f = n.mode,
              p = undefined === f ? 'card' : f,
              y = n.headerMode,
              b = undefined === y ? ('card' === p && 'ios' === ReactNative.Platform.OS ? 'float' : 'screen') : y,
              E = module53.default(n, w),
              j = this.state,
              G = j.routes,
              D = j.descriptors,
              C = j.openingRouteKeys,
              M = j.closingRouteKeys;
            return React.createElement(
              module482.NavigationHelpersContext.Provider,
              {
                value: c,
              },
              React.createElement(
                H,
                {
                  style: T.container,
                },
                React.createElement(
                  module1376.default,
                  null,
                  React.createElement(module431.SafeAreaConsumer, null, function (n) {
                    return React.createElement(
                      module1371.default,
                      {
                        enabled: false !== l,
                      },
                      function (u) {
                        return React.createElement(module1352.default.Consumer, null, function (c) {
                          return React.createElement(
                            module1339.default,
                            module11.default(
                              {
                                mode: p,
                                insets: n,
                                isParentHeaderShown: c,
                                getPreviousRoute: t.getPreviousRoute,
                                getGesturesEnabled: t.getGesturesEnabled,
                                routes: G,
                                openingRouteKeys: C,
                                closingRouteKeys: M,
                                onOpenRoute: t.handleOpenRoute,
                                onCloseRoute: t.handleCloseRoute,
                                onTransitionStart: t.handleTransitionStart,
                                onTransitionEnd: t.handleTransitionEnd,
                                renderHeader: t.renderHeader,
                                renderScene: t.renderScene,
                                headerMode: b,
                                state: s,
                                descriptors: D,
                                onGestureStart: t.handleGestureStart,
                                onGestureEnd: t.handleGestureEnd,
                                onGestureCancel: t.handleGestureCancel,
                              },
                              E,
                              u
                            )
                          );
                        });
                      }
                    );
                  })
                )
              )
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            if (
              (t.state.routes === o.previousRoutes ||
                ((p = t.state.routes.map(function (t) {
                  return t.key;
                })),
                (y = o.previousRoutes.map(function (t) {
                  return t.key;
                })),
                p.length === y.length &&
                  p.every(function (t, n) {
                    return t === y[n];
                  }))) &&
              o.routes.length
            ) {
              var u = o.routes,
                s = o.previousRoutes,
                c = t.descriptors,
                l = o.previousDescriptors;

              if (
                (t.descriptors !== o.previousDescriptors &&
                  ((c = o.routes.reduce(function (n, u) {
                    n[u.key] = t.descriptors[u.key] || o.descriptors[u.key];
                    return n;
                  }, {})),
                  (l = t.descriptors)),
                t.state.routes !== o.previousRoutes)
              ) {
                var f = t.state.routes.reduce(function (t, n) {
                  t[n.key] = n;
                  return t;
                }, {});
                u = o.routes.map(function (t) {
                  return f[t.key] || t;
                });
                s = t.state.routes;
              }

              return {
                routes: u,
                previousRoutes: s,
                descriptors: c,
                previousDescriptors: l,
              };
            }

            var p,
              y,
              v,
              k,
              h = t.state.index < t.state.routes.length - 1 ? t.state.routes.slice(0, t.state.index + 1) : t.state.routes,
              R = o.openingRouteKeys,
              b = o.closingRouteKeys,
              O = o.replacingRouteKeys,
              K = o.previousRoutes,
              E = K[K.length - 1],
              P = h[h.length - 1],
              S = function (n) {
                var u = t.descriptors[n] || o.descriptors[n];
                return !u || false !== u.options.animationEnabled;
              };

            if (E && E.key !== P.key)
              K.some(function (t) {
                return t.key === P.key;
              })
                ? h.some(function (t) {
                    return t.key === E.key;
                  }) ||
                  (S(E.key) &&
                    !b.includes(E.key) &&
                    ((b = [].concat(module20.default(b), [E.key])),
                    (R = R.filter(function (t) {
                      return t !== E.key;
                    })),
                    (O = O.filter(function (t) {
                      return t !== E.key;
                    })),
                    (h = [].concat(module20.default(h), [E]))))
                : S(P.key) &&
                  !R.includes(P.key) &&
                  ((R = [].concat(module20.default(R), [P.key])),
                  (b = b.filter(function (t) {
                    return t !== P.key;
                  })),
                  (O = O.filter(function (t) {
                    return t !== P.key;
                  })),
                  h.some(function (t) {
                    return t.key === E.key;
                  }) ||
                    ((R = R.filter(function (t) {
                      return t !== E.key;
                    })),
                    'pop' === ((v = P.key), null != (k = (t.descriptors[v] || o.descriptors[v]).options.animationTypeForReplace) ? k : 'push')
                      ? ((b = [].concat(module20.default(b), [E.key])),
                        (R = R.filter(function (t) {
                          return t !== P.key;
                        })),
                        (h = [].concat(module20.default(h), [E])))
                      : ((O = [].concat(module20.default(O), [E.key])),
                        (b = b.filter(function (t) {
                          return t !== E.key;
                        })),
                        (h = h.slice()).splice(h.length - 1, 0, E))));
            else if (O.length || b.length) {
              var w;
              (w = h = h.slice()).splice.apply(
                w,
                [h.length - 1, 0].concat(
                  module20.default(
                    o.routes.filter(function (t) {
                      var n = t.key;
                      return !!S(n) && (O.includes(n) || b.includes(n));
                    })
                  )
                )
              );
            }
            if (!h.length) throw new Error('There should always be at least one route in the navigation state.');
            var j = h.reduce(function (n, u) {
              n[u.key] = t.descriptors[u.key] || o.descriptors[u.key];
              return n;
            }, {});
            return {
              routes: h,
              previousRoutes: t.state.routes,
              previousDescriptors: t.descriptors,
              openingRouteKeys: R,
              closingRouteKeys: b,
              replacingRouteKeys: O,
              descriptors: j,
            };
          },
        },
      ]
    );
    return G;
  })(React.Component);

exports.default = M;
var T = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
