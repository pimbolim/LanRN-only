var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module482 = require('./482'),
  module1382 = require('./1382'),
  f = ['initialRouteName', 'backBehavior', 'children', 'screenOptions', 'sceneContainerStyle'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var p = module482.createNavigatorFactory(function (t) {
  var s = t.initialRouteName,
    p = t.backBehavior,
    v = t.children,
    y = t.screenOptions,
    O = t.sceneContainerStyle,
    b = module53.default(t, f),
    h = module482.useNavigationBuilder(module482.TabRouter, {
      initialRouteName: s,
      backBehavior: p,
      children: v,
      screenOptions: y,
    }),
    j = h.state,
    k = h.descriptors,
    P = h.navigation;
  return <module1382.default />;
});
exports.default = p;
