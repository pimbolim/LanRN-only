Object.defineProperty(exports, 'GestureHandlerRootView', {
  enumerable: true,
  get: function () {
    return module961.GestureHandlerRootView;
  },
});
Object.defineProperty(exports, 'GestureState', {
  enumerable: true,
  get: function () {
    return module961.State;
  },
});

exports.PanGestureHandler = function (t) {
  var f = React.useRef(null);
  return React.createElement(
    module1951.default.Provider,
    {
      value: f,
    },
    React.createElement(module961.PanGestureHandler, t)
  );
};

Object.defineProperty(exports, 'PanGestureHandlerGestureEvent', {
  enumerable: true,
  get: function () {
    return module961.PanGestureHandlerGestureEvent;
  },
});
Object.defineProperty(exports, 'TapGestureHandler', {
  enumerable: true,
  get: function () {
    return module961.TapGestureHandler;
  },
});

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
  module961 = require('./961'),
  module1951 = require('./1951');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}
