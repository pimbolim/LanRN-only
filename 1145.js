var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, c, p);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module900 = require('./900'),
  module961 = require('./961');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

var l = React.forwardRef(function (t, u) {
    var f = t.children,
      l = t.initialMaxDeltaY,
      c = t.onGestureEvent,
      p = t.onHandlerStateChange;
    return React.default.createElement(
      module961.TapGestureHandler,
      {
        ref: u,
        maxDurationMs: 1e6,
        maxDeltaY: l,
        shouldCancelWhenOutside: false,
        onGestureEvent: c,
        onHandlerStateChange: p,
      },
      f
    );
  }),
  c = React.memo(l, module900.default);
exports.default = c;
