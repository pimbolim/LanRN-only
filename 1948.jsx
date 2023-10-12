exports.default = function (t) {
  var o = t.state,
    p = t.navigation,
    P = t.descriptors,
    S = t.lazy,
    M = undefined === S || S,
    W = t.drawerContent,
    B =
      undefined === W
        ? function (t) {
            return <module1954.default />;
          }
        : W,
    x = t.drawerPosition,
    H = undefined === x ? (ReactNative.I18nManager.isRTL ? 'right' : 'left') : x,
    _ = t.keyboardDismissMode,
    R = undefined === _ ? 'on-drag' : _,
    T = t.overlayColor,
    A = undefined === T ? 'rgba(0, 0, 0, 0.5)' : T,
    L = t.drawerType,
    V = undefined === L ? 'front' : L,
    G = t.hideStatusBar,
    I = undefined !== G && G,
    z = t.statusBarAnimation,
    F = undefined === z ? 'slide' : z,
    N = t.drawerContentOptions,
    q = t.drawerStyle,
    J = t.edgeWidth,
    K = t.gestureHandlerProps,
    Q = t.minSwipeDistance,
    U = t.sceneContainerStyle,
    X = t.detachInactiveScreens,
    Y = undefined === X || X,
    Z = React.useState([o.routes[o.index].key]),
    $ = module12.default(Z, 2),
    ee = $[0],
    te = $[1],
    re = module1963.default(),
    ne = module482.useTheme().colors,
    oe = o.history.some(function (t) {
      return 'drawer' === t.type;
    }),
    ae = React.useCallback(
      function () {
        p.dispatch(
          E(
            E({}, module482.DrawerActions.openDrawer()),
            {},
            {
              target: o.key,
            }
          )
        );
      },
      [p, o.key]
    ),
    ie = React.useCallback(
      function () {
        p.dispatch(
          E(
            E({}, module482.DrawerActions.closeDrawer()),
            {},
            {
              target: o.key,
            }
          )
        );
      },
      [p, o.key]
    );
  React.useEffect(
    function () {
      if (oe)
        p.emit({
          type: 'drawerOpen',
        });
      else
        p.emit({
          type: 'drawerClose',
        });
    },
    [oe, p]
  );
  React.useEffect(
    function () {
      var t;
      if (oe)
        t = ReactNative.BackHandler.addEventListener('hardwareBackPress', function () {
          ie();
          return true;
        });
      return function () {
        var n;
        return null == (n = t) ? undefined : n.remove();
      };
    },
    [ie, oe, p, o.key]
  );
  var le = o.routes[o.index].key;
  if (!ee.includes(le)) te([].concat(module20.default(ee), [le]));
  var de = o.routes[o.index].key,
    ue = P[de].options,
    se = ue.gestureEnabled,
    ce = ue.swipeEnabled;
  return React.createElement(
    module482.NavigationHelpersContext.Provider,
    {
      value: p,
    },
    React.createElement(
      C,
      {
        style: D.content,
      },
      React.createElement(
        module1952.default,
        null,
        React.createElement(
          module1962.default.Provider,
          {
            value: oe,
          },
          React.createElement(module1960.default, {
            open: oe,
            gestureEnabled: se,
            swipeEnabled: ce,
            onOpen: ae,
            onClose: ie,
            gestureHandlerProps: K,
            drawerType: V,
            drawerPosition: H,
            sceneContainerStyle: [
              {
                backgroundColor: ne.background,
              },
              U,
            ],
            drawerStyle: [
              {
                width: j(re),
                backgroundColor: ne.card,
              },
              'permanent' === V &&
                ('left' === H
                  ? {
                      borderRightColor: ne.border,
                      borderRightWidth: ReactNative.StyleSheet.hairlineWidth,
                    }
                  : {
                      borderLeftColor: ne.border,
                      borderLeftWidth: ReactNative.StyleSheet.hairlineWidth,
                    }),
              q,
            ],
            overlayStyle: {
              backgroundColor: A,
            },
            swipeEdgeWidth: J,
            swipeDistanceThreshold: Q,
            hideStatusBar: I,
            statusBarAnimation: F,
            renderDrawerContent: function (t) {
              var n = t.progress;
              return React.createElement(
                module1959.default.Provider,
                {
                  value: H,
                },
                B(
                  E(
                    E({}, N),
                    {},
                    {
                      progress: n,
                      state: o,
                      navigation: p,
                      descriptors: P,
                    }
                  )
                )
              );
            },
            renderSceneContent: function () {
              return React.createElement(
                module1340.ScreenContainer,
                {
                  enabled: Y,
                  style: D.content,
                },
                o.routes.map(function (t, n) {
                  var l = P[t.key],
                    c = l.options.unmountOnBlur,
                    f = o.index === n;
                  return c && !f
                    ? null
                    : !M || ee.includes(t.key) || f
                    ? React.createElement(
                        module1953.default,
                        {
                          key: t.key,
                          style: [
                            ReactNative.StyleSheet.absoluteFill,
                            {
                              opacity: f ? 1 : 0,
                            },
                          ],
                          isVisible: f,
                          enabled: Y,
                        },
                        l.render()
                      )
                    : null;
                })
              );
            },
            keyboardDismissMode: R,
            dimensions: re,
          })
        )
      )
    )
  );
};

var module20 = require('./20'),
  module47 = require('./47'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1340 = require('./1340'),
  module482 = require('./482'),
  module1949 = require('./1949'),
  module1952 = require('./1952'),
  module1953 = require('./1953'),
  module1954 = require('./1954'),
  module1960 = require('./1960'),
  module1962 = require('./1962'),
  module1959 = require('./1959'),
  module1963 = require('./1963');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function S(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function E(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      S(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var j = function (t) {
    var n = t.height,
      o = t.width,
      l = n ** o,
      u = o > n,
      c = l >= 600,
      f = 'ios' === ReactNative.Platform.OS ? (u ? 32 : 44) : 56,
      p = c ? 320 : 280;
    return (l - f) ** p;
  },
  C = null != module1949.GestureHandlerRootView ? module1949.GestureHandlerRootView : ReactNative.View;

var D = ReactNative.StyleSheet.create({
  content: {
    flex: 1,
  },
});
