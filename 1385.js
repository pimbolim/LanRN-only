exports.default = function (t) {
  var o,
    l,
    p,
    S,
    A = t.state,
    j = t.navigation,
    T = t.descriptors,
    x = t.activeBackgroundColor,
    E = t.activeTintColor,
    L = t.adaptive,
    D = t.allowFontScaling,
    V = t.inactiveBackgroundColor,
    W = t.inactiveTintColor,
    H = t.keyboardHidesTabBar,
    I = undefined !== H && H,
    N = t.labelPosition,
    R = t.labelStyle,
    _ = t.iconStyle,
    M = t.safeAreaInsets,
    z = t.showLabel,
    F = t.style,
    Y = t.tabStyle,
    q = module482.useTheme().colors,
    G = module482.useLinkBuilder(),
    J = A.routes[A.index],
    K = T[J.key].options,
    Q = module1390.default(),
    U = module1391.default(),
    X = React.default.useContext(module1389.default),
    Z = false !== K.tabBarVisible && !(I && U),
    $ = React.default.useRef(K.tabBarVisibilityAnimationConfig);
  React.default.useEffect(function () {
    $.current = K.tabBarVisibilityAnimationConfig;
  });
  var tt = React.default.useState(!Z),
    et = module12.default(tt, 2),
    it = et[0],
    at = et[1],
    nt = React.default.useState(function () {
      return new ReactNative.Animated.Value(Z ? 1 : 0);
    }),
    ot = module12.default(nt, 1)[0];
  React.default.useEffect(
    function () {
      var t = $.current;

      if (Z) {
        var n,
          o,
          l = 'spring' === (null == t ? undefined : null == (n = t.show) ? undefined : n.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        l(
          ot,
          w(
            {
              toValue: 1,
              useNativeDriver: B,
              duration: 250,
            },
            null == t ? undefined : null == (o = t.show) ? undefined : o.config
          )
        ).start(function (t) {
          var n = t.finished;
          if (n) at(false);
        });
      } else {
        var u, f;
        at(true);
        var c = 'spring' === (null == t ? undefined : null == (u = t.hide) ? undefined : u.animation) ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        c(
          ot,
          w(
            {
              toValue: 0,
              useNativeDriver: B,
              duration: 200,
            },
            null == t ? undefined : null == (f = t.hide) ? undefined : f.config
          )
        ).start();
      }
    },
    [ot, Z]
  );
  var rt = React.default.useState({
      height: 0,
      width: Q.width,
    }),
    lt = module12.default(rt, 2),
    ut = lt[0],
    dt = lt[1],
    st = A.routes,
    ft = module431.useSafeArea(),
    ct = {
      top: null != (o = null == M ? undefined : M.top) ? o : ft.top,
      right: null != (l = null == M ? undefined : M.right) ? l : ft.right,
      bottom: null != (p = null == M ? undefined : M.bottom) ? p : ft.bottom,
      left: null != (S = null == M ? undefined : M.left) ? S : ft.left,
    },
    bt = O(ct),
    vt = k({
      state: A,
      insets: ct,
      dimensions: Q,
      layout: ut,
      adaptive: L,
      labelPosition: N,
      tabStyle: Y,
      style: F,
    }),
    ht = P({
      state: A,
      dimensions: Q,
      layout: ut,
      adaptive: L,
      labelPosition: N,
      tabStyle: Y,
    });
  return React.default.createElement(
    ReactNative.Animated.View,
    {
      style: [
        C.tabBar,
        {
          backgroundColor: q.card,
          borderTopColor: q.border,
        },
        {
          transform: [
            {
              translateY: ot.interpolate({
                inputRange: [0, 1],
                outputRange: [ut.height + bt + ReactNative.StyleSheet.hairlineWidth, 0],
              }),
            },
          ],
          position: it ? 'absolute' : null,
        },
        {
          height: vt,
          paddingBottom: bt,
          paddingHorizontal: ct.left ** ct.right,
        },
        F,
      ],
      pointerEvents: it ? 'none' : 'auto',
    },
    React.default.createElement(
      ReactNative.View,
      {
        style: C.content,
        onLayout: function (t) {
          var n,
            o = t.nativeEvent.layout,
            l = o.height,
            u = o.width,
            f = null == (n = ReactNative.StyleSheet.flatten([C.tabBar, F])) ? undefined : n.borderTopWidth;
          if (!(null == X)) X(l + bt + ('number' == typeof f ? f : 0));
          dt(function (t) {
            return l === t.height && u === t.width
              ? t
              : {
                  height: l,
                  width: u,
                };
          });
        },
      },
      st.map(function (t, n) {
        var o = n === A.index,
          l = T[t.key].options,
          s = undefined !== l.tabBarLabel ? l.tabBarLabel : undefined !== l.title ? l.title : t.name,
          c = undefined !== l.tabBarAccessibilityLabel ? l.tabBarAccessibilityLabel : 'string' == typeof s ? s + ', tab, ' + (n + 1) + ' of ' + st.length : undefined;
        return React.default.createElement(
          module482.NavigationContext.Provider,
          {
            key: t.key,
            value: T[t.key].navigation,
          },
          React.default.createElement(
            module482.NavigationRouteContext.Provider,
            {
              value: t,
            },
            React.default.createElement(module1386.default, {
              route: t,
              focused: o,
              horizontal: ht,
              onPress: function () {
                var n = j.emit({
                  type: 'tabPress',
                  target: t.key,
                  canPreventDefault: true,
                });
                if (!(o || n.defaultPrevented))
                  j.dispatch(
                    w(
                      w({}, module482.CommonActions.navigate(t.name)),
                      {},
                      {
                        target: A.key,
                      }
                    )
                  );
              },
              onLongPress: function () {
                j.emit({
                  type: 'tabLongPress',
                  target: t.key,
                });
              },
              accessibilityLabel: c,
              to: G(t.name, t.params),
              testID: l.tabBarTestID,
              allowFontScaling: D,
              activeTintColor: E,
              inactiveTintColor: W,
              activeBackgroundColor: x,
              inactiveBackgroundColor: V,
              button: l.tabBarButton,
              icon: l.tabBarIcon,
              badge: l.tabBarBadge,
              badgeStyle: l.tabBarBadgeStyle,
              label: s,
              showLabel: z,
              labelStyle: R,
              iconStyle: _,
              style: Y,
            })
          )
        );
      })
    )
  );
};

var module12 = require('./12'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module482 = require('./482'),
  module431 = require('./431'),
  module1386 = require('./1386'),
  module1389 = require('./1389'),
  module1390 = require('./1390'),
  module1391 = require('./1391'),
  p = ['dimensions', 'insets', 'style'];

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

function w(t) {
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

var B = 'web' !== ReactNative.Platform.OS,
  P = function (t) {
    var n = t.state,
      o = t.layout,
      l = t.dimensions,
      u = t.adaptive,
      f = undefined === u || u,
      c = t.labelPosition,
      b = t.tabStyle;
    if (c) return 'beside-icon' === c;
    if (!f) return false;

    if (o.width >= 768) {
      var v = 125,
        h = ReactNative.StyleSheet.flatten(b);
      if (h) 'number' == typeof h.width ? (v = h.width) : 'number' == typeof h.maxWidth && (v = h.maxWidth);
      return n.routes.length * v <= o.width;
    }

    return l.width > l.height;
  },
  O = function (t) {
    return (
      (t.bottom -
        ReactNative.Platform.select({
          ios: 4,
          default: 0,
        })) **
      0
    );
  },
  k = function (t) {
    var n,
      o = t.dimensions,
      u = t.insets,
      f = t.style,
      c = module53.default(t, p),
      b = null == (n = ReactNative.StyleSheet.flatten(f)) ? undefined : n.height;
    if ('number' == typeof b) return b;
    var v = o.width > o.height,
      h = P(
        w(
          {
            dimensions: o,
          },
          c
        )
      ),
      y = O(u);
    return 'ios' === ReactNative.Platform.OS && !ReactNative.Platform.isPad && v && h ? 32 + y : 49 + y;
  };

exports.getTabBarHeight = k;
var C = ReactNative.StyleSheet.create({
  tabBar: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
    elevation: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
