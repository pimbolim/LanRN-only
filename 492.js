require('./505');

var module12 = require('./12'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = j(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module484 = require('./484'),
  module493 = require('./493'),
  module494 = require('./494'),
  module495 = require('./495'),
  module496 = require('./496'),
  module497 = require('./497'),
  module498 = require('./498'),
  module499 = require('./499'),
  module500 = require('./500'),
  module501 = require('./501'),
  module502 = require('./502'),
  module503 = require('./503'),
  module504 = require('./504'),
  E = ['key', 'routeNames'];

function j(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (j = function (t) {
    return t ? o : n;
  })(t);
}

function S(t, n) {
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

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      S(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var R =
  "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/5.x/navigating-without-navigation-prop#handling-initialization for more details.";

try {
  Object.defineProperty(globals, 'REACT_NAVIGATION_REDUX_DEVTOOLS_EXTENSION_INTEGRATION_ENABLED', {
    set: function (t) {
      console.warn(
        "Redux devtools extension integration can be enabled with the '@react-navigation/devtools' package. For more details, see https://reactnavigation.org/docs/5.x/devtools"
      );
    },
  });
} catch (t) {}

var N = function t(n) {
    if (undefined !== n) {
      return _(
        _({}, module53.default(n, E)),
        {},
        {
          stale: true,
          routes: n.routes.map(function (n) {
            return undefined === n.state
              ? n
              : _(
                  _({}, n),
                  {},
                  {
                    state: t(n.state),
                  }
                );
          }),
        }
      );
    }
  },
  A = React.forwardRef(function (t, o) {
    var u = t.initialState,
      E = t.onStateChange,
      j = t.onUnhandledAction,
      S = t.independent,
      A = t.children;
    if (!React.useContext(module496.default).isDefault && !S)
      throw new Error(
        "Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitely. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them."
      );

    var D = module504.default(function () {
        return N(null == u ? undefined : u);
      }),
      x = module12.default(D, 5),
      I = x[0],
      G = x[1],
      L = x[2],
      M = x[3],
      T = x[4],
      U = React.useRef(true),
      K = React.useRef(),
      B = React.useCallback(function () {
        return K.current;
      }, []),
      W = React.useCallback(function (t) {
        K.current = t;
      }, []),
      z = module500.default(),
      V = z.listeners,
      X = z.addListener,
      F = module501.default(),
      H = F.keyedListeners,
      q = F.addKeyedListener,
      J = function (t) {
        if (null == V.focus[0]) throw new Error(R);
        V.focus[0](function (n) {
          return n.dispatch(t);
        });
      },
      Q = function () {
        if (null == V.focus[0]) return false;
        var t = V.focus[0](function (t) {
            return t.canGoBack();
          }),
          n = t.result;
        return !!t.handled && n;
      },
      Y = React.useCallback(
        function (t) {
          var n,
            o = null != (n = null == t ? undefined : t.key) ? n : null == H.getState.root ? undefined : H.getState.root().key;
          if (null == o) throw new Error(R);
          V.focus[0](function (n) {
            return n.dispatch(
              _(
                _({}, module484.CommonActions.reset(t)),
                {},
                {
                  target: o,
                }
              )
            );
          });
        },
        [H.getState, V.focus]
      ),
      Z = React.useCallback(
        function () {
          return null == H.getState.root ? undefined : H.getState.root();
        },
        [H.getState]
      ),
      $ = React.useCallback(
        function () {
          var t = Z();

          if (undefined !== t) {
            for (; undefined !== t.routes[t.index].state; ) t = t.routes[t.index].state;

            return t.routes[t.index];
          }
        },
        [Z]
      ),
      ee = module503.default(),
      te = module502.default({}),
      ne = te.addOptionsGetter,
      re = te.getCurrentOptions;

    React.useImperativeHandle(o, function () {
      return _(
        _(
          _(
            {},
            Object.keys(module484.CommonActions).reduce(function (t, n) {
              t[n] = function () {
                return J(module484.CommonActions[n].apply(module484.CommonActions, arguments));
              };

              return t;
            }, {})
          ),
          ee.create('root')
        ),
        {},
        {
          resetRoot: Y,
          dispatch: J,
          canGoBack: Q,
          getRootState: Z,
          getState: function () {
            return I;
          },
          getParent: function () {},
          dangerouslyGetState: function () {
            return I;
          },
          dangerouslyGetParent: function () {},
          getCurrentRoute: $,
          getCurrentOptions: re,
        }
      );
    });
    var oe = React.useCallback(
        function (t, n) {
          ee.emit({
            type: '__unsafe_action__',
            data: {
              action: t,
              noop: n,
            },
          });
        },
        [ee]
      ),
      ae = React.useRef(),
      ue = React.useCallback(
        function (t) {
          if (ae.current !== t) {
            ae.current = t;
            ee.emit({
              type: 'options',
              data: {
                options: t,
              },
            });
          }
        },
        [ee]
      ),
      ie = React.useMemo(
        function () {
          return {
            addListener: X,
            addKeyedListener: q,
            onDispatchAction: oe,
            onOptionsChange: ue,
          };
        },
        [X, q, oe, ue]
      ),
      ce = React.useMemo(
        function () {
          return {
            scheduleUpdate: M,
            flushUpdates: T,
          };
        },
        [M, T]
      ),
      se = React.useRef(true),
      le = React.useCallback(function () {
        return se.current;
      }, []),
      fe = React.useMemo(
        function () {
          return {
            state: I,
            getState: G,
            setState: L,
            getKey: B,
            setKey: W,
            getIsInitial: le,
            addOptionsGetter: ne,
          };
        },
        [I, G, L, B, W, le, ne]
      ),
      de = React.useRef(E);
    React.useEffect(function () {
      se.current = false;
      de.current = E;
    });
    React.useEffect(
      function () {
        ee.emit({
          type: 'state',
          data: {
            state: I,
          },
        });
        if (!U.current && de.current) de.current(Z());
        U.current = false;
      },
      [Z, ee, I]
    );
    var pe = React.useCallback(function (t) {}, []),
      ve = React.createElement(
        module499.ScheduleUpdateContext.Provider,
        {
          value: ce,
        },
        React.createElement(
          module495.default.Provider,
          {
            value: ie,
          },
          React.createElement(
            module496.default.Provider,
            {
              value: fe,
            },
            React.createElement(
              module494.default.Provider,
              {
                value: null != j ? j : pe,
              },
              React.createElement(module493.default, null, A)
            )
          )
        )
      );
    if (S)
      ve = React.createElement(
        module497.default.Provider,
        {
          value: undefined,
        },
        React.createElement(
          module498.default.Provider,
          {
            value: undefined,
          },
          ve
        )
      );
    return ve;
  });

exports.default = A;
