exports.default = function (t) {
  var n = t.children;
  return (
    <module431.SafeAreaConsumer>
      {function (t) {
        return t ? n : <module431.SafeAreaProvider initialSafeAreaInsets={l}>{n}</module431.SafeAreaProvider>;
      }}
    </module431.SafeAreaConsumer>
  );
};

var module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (l && (l.get || l.set)) Object.defineProperty(c, p, l);
        else c[p] = t[p];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  module431 = require('./431'),
  module1329 = require('./1329');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

function p(t, n) {
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

var l = (function (t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(c), true).forEach(function (o) {
        module47.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      p(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
})(
  {
    top: module1329.getStatusBarHeight(true),
    bottom: module1329.getBottomSpace(),
    right: 0,
    left: 0,
  },
  module431.initialWindowSafeAreaInsets
);
