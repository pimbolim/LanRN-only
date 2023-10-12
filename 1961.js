var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module901 = require('./901'),
  p = ['progress', 'style'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
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

function O(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      y(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      y(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var b = module901.default.interpolate,
  j = module901.default.interpolateNode,
  v = module901.default.cond,
  P = module901.default.greaterThan,
  w = null != j ? j : b,
  h = React.forwardRef(function (t, n) {
    var s = t.progress,
      y = t.style,
      O = module53.default(t, p),
      b = {
        opacity: w(s, {
          inputRange: 'windows' === ReactNative.Platform.OS || 'macos' === ReactNative.Platform.OS ? [0, 1] : [0.05, 1],
          outputRange: [0, 1],
        }),
        zIndex: v(P(s, 0.05), 0, -1),
      };
    return React.createElement(
      module901.default.View,
      module11.default({}, O, {
        ref: n,
        style: [k.overlay, S, b, y],
      })
    );
  }),
  S = ReactNative.Platform.select({
    web: {
      WebkitTapHighlightColor: 'transparent',
    },
    default: {},
  }),
  k = ReactNative.StyleSheet.create({
    overlay: O(
      O({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
    ),
  }),
  D = h;
exports.default = D;
