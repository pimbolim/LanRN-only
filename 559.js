exports.default = function (t) {
  var l = t.to,
    c = t.action,
    s = React.useContext(module483.NavigationHelpersContext),
    p = module560.default();
  return {
    href: l,
    accessibilityRole: 'link',
    onPress: function (t) {
      var n,
        u = false;
      if (
        ('web' === ReactNative.Platform.OS && t
          ? t.defaultPrevented ||
            t.metaKey ||
            t.altKey ||
            t.ctrlKey ||
            t.shiftKey ||
            (null != t.button && 0 !== t.button) ||
            ![undefined, null, '', 'self'].includes(null == (n = t.currentTarget) ? undefined : n.target) ||
            (t.preventDefault(), (u = true))
          : (u = !t || !t.defaultPrevented),
        u)
      )
        if (c) {
          if (!s) throw new Error("Couldn't find a navigation object.");
          s.dispatch(c);
        } else {
          if ('string' != typeof l) throw new Error("To 'to' option is invalid (found '" + String(l) + "'. It must be a valid string for navigation.");
          p(l);
        }
    },
  };
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module483 = require('./483'),
  module560 = require('./560');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}
