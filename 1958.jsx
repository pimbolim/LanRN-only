exports.default = function (t) {
  var y = t.contentContainerStyle,
    v = t.style,
    O = t.children,
    h = module53.default(t, p),
    b = React.useContext(module1959.default),
    j = module431.useSafeArea();
  return <ReactNative.ScrollView>{O}</ReactNative.ScrollView>;
};

var module11 = require('./11'),
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
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module431 = require('./431'),
  module1959 = require('./1959'),
  p = ['contentContainerStyle', 'style', 'children'];

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

var s = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
