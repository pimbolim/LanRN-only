var module11 = require('./11'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(c, f, l);
        else c[f] = t[f];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  ReactNative = require('react-native'),
  module482 = require('./482'),
  module1335 = require('./1335'),
  p = ['initialRouteName', 'children', 'screenOptions'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(c), true).forEach(function (n) {
        module47.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      y(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var v = module482.createNavigatorFactory(function (t) {
  var o = t.initialRouteName,
    O = t.children,
    y = t.screenOptions,
    v = module53.default(t, p),
    P = {
      gestureEnabled: 'ios' === ReactNative.Platform.OS,
      animationEnabled: 'web' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'macos' !== ReactNative.Platform.OS,
    },
    j = module482.useNavigationBuilder(module482.StackRouter, {
      initialRouteName: o,
      children: O,
      screenOptions:
        'function' == typeof y
          ? function () {
              return b(b({}, P), y.apply(undefined, arguments));
            }
          : b(b({}, P), y),
    }),
    w = j.state,
    h = j.descriptors,
    k = j.navigation;
  React.useEffect(
    function () {
      return null == k.addListener
        ? undefined
        : k.addListener('tabPress', function (t) {
            var n = k.isFocused();
            requestAnimationFrame(function () {
              if (w.index > 0 && n && !t.defaultPrevented)
                k.dispatch(
                  b(
                    b({}, module482.StackActions.popToTop()),
                    {},
                    {
                      target: w.key,
                    }
                  )
                );
            });
          });
    },
    [k, w.index, w.key]
  );
  return <module1335.default />;
});
exports.default = v;
