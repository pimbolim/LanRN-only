var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module482 = require('./482'),
  module1948 = require('./1948'),
  l = ['initialRouteName', 'openByDefault', 'backBehavior', 'children', 'screenOptions'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var s = module482.createNavigatorFactory(function (t) {
  var p = t.initialRouteName,
    s = t.openByDefault,
    v = t.backBehavior,
    y = t.children,
    O = t.screenOptions,
    b = module53.default(t, l),
    h = module482.useNavigationBuilder(module482.DrawerRouter, {
      initialRouteName: p,
      openByDefault: s,
      backBehavior: v,
      children: y,
      screenOptions: O,
    }),
    j = h.state,
    B = h.descriptors,
    k = h.navigation;
  return <module1948.default />;
});
exports.default = s;
