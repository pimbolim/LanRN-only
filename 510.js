exports.default = function (t, O) {
  var M = module512.default(),
    _ = React.useContext(module497.default),
    K = O.children,
    V = module53.default(O, G),
    W = React.useRef(
      t(
        x(
          x({}, V),
          null != _ && _.params && null == _.params.state && false !== _.params.initial && 'string' == typeof _.params.screen
            ? {
                initialRouteName: _.params.screen,
              }
            : null
        )
      )
    ).current,
    T = F(K),
    H = T.reduce(function (t, n) {
      if (n.name in t) throw new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + n.name + "')");
      t[n.name] = n;
      return t;
    }, {}),
    J = T.map(function (t) {
      return t.name;
    }),
    q = J.reduce(function (t, n) {
      var o,
        u,
        s,
        l = H[n].initialParams,
        c =
          null == (null == _ ? undefined : null == (o = _.params) ? undefined : o.state) &&
          false !== (null == _ ? undefined : null == (u = _.params) ? undefined : u.initial) &&
          (null == _ ? undefined : null == (s = _.params) ? undefined : s.screen) === n
            ? _.params.params
            : undefined;
      t[n] = undefined !== l || undefined !== c ? x(x({}, l), c) : undefined;
      return t;
    }, {}),
    z = J.reduce(function (t, n) {
      return module11.default(t, module47.default({}, n, H[n].getId));
    }, {});

  if (!J.length) throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  var B = React.useCallback(
      function (t) {
        return undefined === t.type || t.type === W.type;
      },
      [W.type]
    ),
    Q = React.useCallback(
      function (t) {
        return undefined !== t && false === t.stale && B(t);
      },
      [B]
    ),
    U = React.useContext(module496.default),
    X = U.state,
    Y = U.getState,
    Z = U.setState,
    $ = U.setKey,
    ee = U.getKey,
    te = U.getIsInitial,
    re = React.useMemo(
      function () {
        var t, n, o;
        return (undefined !== X && B(X)) || null != (null == _ ? undefined : null == (t = _.params) ? undefined : t.state)
          ? [
              W.getRehydratedState(null != (n = null == _ ? undefined : null == (o = _.params) ? undefined : o.state) ? n : X, {
                routeNames: J,
                routeParamList: q,
                routeGetIdList: z,
              }),
              false,
            ]
          : [
              W.getInitialState({
                routeNames: J,
                routeParamList: q,
                routeGetIdList: z,
              }),
              true,
            ];
      },
      [X, W, B]
    ),
    ne = module12.default(re, 2),
    ae = ne[0],
    oe = ne[1],
    ie = Q(X) ? X : ae,
    ue = ie;
  if (!module526.default(ie.routeNames, J))
    ue = W.getStateForRouteNamesChange(ie, {
      routeNames: J,
      routeParamList: q,
      routeGetIdList: z,
    });
  var se = React.useRef(null == _ ? undefined : _.params);

  if (
    (React.useEffect(
      function () {
        se.current = null == _ ? undefined : _.params;
      },
      [null == _ ? undefined : _.params]
    ),
    null != _ && _.params)
  ) {
    var le,
      ce = se.current;
    if ('object' == typeof _.params.state && null != _.params.state && _.params.state !== (null == ce ? undefined : ce.state)) le = module484.CommonActions.reset(_.params.state);
    else if ('string' == typeof _.params.screen && ((false === _.params.initial && oe) || _.params !== ce)) le = module484.CommonActions.navigate(_.params.screen, _.params.params);
    var fe = le
      ? W.getStateForAction(ue, le, {
          routeNames: J,
          routeParamList: q,
          routeGetIdList: z,
        })
      : null;
    ue =
      null !== fe
        ? W.getRehydratedState(fe, {
            routeNames: J,
            routeParamList: q,
            routeGetIdList: z,
          })
        : ue;
  }

  var de = ie !== ue;
  module499.default(function () {
    if (de) Z(ue);
  });
  ie = ue;
  React.useEffect(function () {
    $(M);
    if (!te()) Z(ue);
    return function () {
      setTimeout(function () {
        if (undefined !== Y() && ee() === M) Z(undefined);
      }, 0);
    };
  }, []);
  var pe = React.useRef();
  pe.current = ae;
  var me = React.useCallback(
      function () {
        var t = Y();
        return Q(t) ? t : pe.current;
      },
      [Y, Q]
    ),
    ve = module503.default(function (t) {
      var n,
        o,
        u,
        s = [];

      if (t.target) {
        o = ie.routes.find(function (n) {
          return n.key === t.target;
        });
        if (null != (u = o) && u.name) s.push(o.name);
      } else {
        o = ie.routes[ie.index];
        s.push.apply(
          s,
          module20.default(
            Object.keys(H).filter(function (t) {
              var n;
              return (null == (n = o) ? undefined : n.name) === t;
            })
          )
        );
      }

      if (null != o) {
        var c = we[o.key].navigation,
          f = (n = []).concat
            .apply(
              n,
              module20.default(
                s.map(function (n) {
                  var u = H[n].listeners,
                    s =
                      'function' == typeof u
                        ? u({
                            route: o,
                            navigation: c,
                          })
                        : u;
                  return s
                    ? Object.keys(s)
                        .filter(function (n) {
                          return n === t.type;
                        })
                        .map(function (t) {
                          return null == s ? undefined : s[t];
                        })
                    : undefined;
                })
              )
            )
            .filter(function (t, n, o) {
              return t && o.lastIndexOf(t) === n;
            });
        f.forEach(function (n) {
          return null == n ? undefined : n(t);
        });
      }
    });
  module522.default({
    state: ie,
    emitter: ve,
  });
  React.useEffect(
    function () {
      ve.emit({
        type: 'state',
        data: {
          state: ie,
        },
      });
    },
    [ve, ie]
  );
  var ye = module500.default(),
    ge = ye.listeners,
    Oe = ye.addListener,
    he = module501.default(),
    be = he.keyedListeners,
    Se = he.addKeyedListener,
    Pe = module520.default({
      router: W,
      getState: me,
      setState: Z,
      key: null == _ ? undefined : _.key,
      actionListeners: ge.action,
      beforeRemoveListeners: be.beforeRemove,
      routerConfigOptions: {
        routeNames: J,
        routeParamList: q,
        routeGetIdList: z,
      },
      emitter: ve,
    }),
    je = module523.default({
      router: W,
      key: null == _ ? undefined : _.key,
      getState: me,
      setState: Z,
    }),
    Le = module518.default({
      onAction: Pe,
      getState: me,
      emitter: ve,
      router: W,
    });
  module524.default({
    navigation: Le,
    focusedListeners: ge.focus,
  });
  module525.default({
    getState: me,
    getStateListeners: be.getState,
  });
  var we = module513.default({
    state: ie,
    screens: H,
    navigation: Le,
    screenOptions: O.screenOptions,
    defaultScreenOptions: O.defaultScreenOptions,
    onAction: Pe,
    getState: me,
    setState: Z,
    onRouteFocus: je,
    addListener: Oe,
    addKeyedListener: Se,
    router: W,
    emitter: ve,
  });
  module527.default({
    state: ie,
    navigation: Le,
    descriptors: we,
  });
  var ke = module511.default(module508.default.Provider, {
    value: Le,
  });
  return {
    state: ie,
    navigation: Le,
    descriptors: we,
    NavigationContent: ke,
  };
};

require('./409');

var module12 = require('./12'),
  module11 = require('./11'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = M(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module484 = require('./484'),
  module496 = require('./496'),
  module497 = require('./497'),
  module508 = require('./508'),
  module507 = require('./507'),
  module511 = require('./511'),
  module503 = require('./503'),
  module512 = require('./512'),
  module513 = require('./513'),
  module518 = require('./518'),
  module520 = require('./520'),
  module522 = require('./522'),
  module523 = require('./523'),
  module500 = require('./500'),
  module524 = require('./524'),
  module501 = require('./501'),
  module525 = require('./525'),
  module499 = require('./499'),
  module527 = require('./527'),
  module526 = require('./526'),
  G = ['children'];

function M(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (M = function (t) {
    return t ? o : n;
  })(t);
}

function _(t, n) {
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

function x(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      _(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      _(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

require('./519').PrivateValueStore;

var F = function t(n) {
  return React.Children.toArray(n).reduce(function (n, o) {
    var u, s;

    if (React.isValidElement(o)) {
      if (o.type === module507.default) {
        n.push(o.props);
        return n;
      }

      if (o.type === React.Fragment) {
        n.push.apply(n, module20.default(t(o.props.children)));
        return n;
      }
    }

    throw new Error(
      "A navigator can only contain 'Screen' components as its direct children (found " +
        (React.isValidElement(o)
          ? "'" +
            ('string' == typeof o.type ? o.type : null == (u = o.type) ? undefined : u.name) +
            "'" +
            (null != (s = o.props) && s.name ? " for the screen '" + o.props.name + "'" : '')
          : 'object' == typeof o
          ? JSON.stringify(o)
          : "'" + String(o) + "'") +
        "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'."
    );
  }, []);
};
