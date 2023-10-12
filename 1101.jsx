var module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var f = o(n);
    if (f && f.has(t)) return f.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (f) f.set(t, u);
    return u;
  })(require('react')),
  module1100 = require('./1100');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    f = new WeakMap();
  return (o = function (t) {
    return t ? f : n;
  })(t);
}

var l = React.forwardRef(function (t, o) {
  return <module1100.default />;
});
l.defaultProps = module1100.default.defaultProps;
var c = l;
exports.default = c;
