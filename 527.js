exports.default = function (t) {
  var u = t.state,
    f = t.navigation,
    c = t.descriptors,
    p = React.useContext(module509.default);
  if (p && f.isFocused()) p.options = c[u.routes[u.index].key].options;
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, p, s);
        else f[p] = t[p];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('react')),
  module509 = require('./509');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}
