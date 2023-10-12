exports.default = function () {
  var t = React.useContext(module483.NavigationContext),
    f = React.useContext(module548.default);
  return React.useCallback(
    function (n) {
      if (!n.startsWith('/')) throw new Error("The path must start with '/' (" + n + ').');
      if (undefined === t) throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
      var u = f.options,
        c = null != u && u.getStateFromPath ? u.getStateFromPath(n, u.config) : module483.getStateFromPath(n, null == u ? undefined : u.config);
      if (!c) throw new Error('Failed to parse the path to a navigation state.');

      for (var l, s = t; (l = s.getParent()); ) s = l;

      var p = module483.getActionFromState(c, null == u ? undefined : u.config);
      if (undefined !== p) s.dispatch(p);
      else s.reset(c);
    },
    [f, t]
  );
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, l, s);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module483 = require('./483'),
  module548 = require('./548');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}
