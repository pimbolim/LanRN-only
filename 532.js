exports.default = function (t) {
  var o = module528.default(),
    c = React.useState(function () {
      return t(o.getState());
    }),
    l = module12.default(c, 2)[1],
    p = React.useRef(t);
  React.useEffect(function () {
    p.current = t;
  });
  React.useEffect(
    function () {
      return o.addListener('state', function (t) {
        l(p.current(t.data.state));
      });
    },
    [o]
  );
  return t(o.getState());
};

var module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  module528 = require('./528');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}
