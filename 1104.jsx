var module47 = require('./47'),
  module12 = require('./12'),
  module11 = require('./11'),
  module20 = require('./20'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = y(n);
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
  module1077 = require('./1077'),
  module1078 = require('./1078'),
  module967 = require('./967'),
  h = ['refreshControl', 'waitFor'],
  v = ['waitFor', 'refreshControl'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function b(t, n) {
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

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      b(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      b(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var P = module1077.default(ReactNative.RefreshControl, {
  disallowInterruption: true,
  shouldCancelWhenOutside: false,
});
exports.RefreshControl = P;
var C = module1077.default(ReactNative.ScrollView, {
    disallowInterruption: true,
    shouldCancelWhenOutside: false,
  }),
  S = React.forwardRef(function (t, n) {
    var o = React.useRef(null),
      s = t.refreshControl,
      p = t.waitFor,
      w = module53.default(t, h);
    return <C />;
  });
exports.ScrollView = S;
var D = module1077.default(ReactNative.Switch, {
  shouldCancelWhenOutside: false,
  shouldActivateOnStart: true,
  disallowInterruption: true,
});
exports.Switch = D;
var F = module1077.default(ReactNative.TextInput);
exports.TextInput = F;
var E = module1077.default(ReactNative.DrawerLayoutAndroid, {
  disallowInterruption: true,
});
exports.DrawerLayoutAndroid = E;
var I = React.forwardRef(function (t, n) {
  for (var p = React.useRef(null), h = t.waitFor, y = t.refreshControl, b = module53.default(t, v), P = {}, C = {}, D = 0, F = Object.entries(b); D < F.length; D++) {
    var E = F[D],
      I = module12.default(E, 2),
      R = I[0],
      A = I[1];
    if (module1078.nativeViewProps.includes(R)) C[R] = A;
    else P[R] = A;
  }

  return <ReactNative.FlatList />;
});
exports.FlatList = I;
