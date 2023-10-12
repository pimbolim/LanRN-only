exports.default = function (t) {
  var n = t.state,
    l = t.navigation,
    f = t.descriptors,
    s = t.activeTintColor,
    y = t.inactiveTintColor,
    v = t.activeBackgroundColor,
    O = t.inactiveBackgroundColor,
    b = t.itemStyle,
    j = t.labelStyle,
    w = module482.useLinkBuilder();
  return n.routes.map(function (t, P) {
    var k = P === n.index,
      C = f[t.key].options,
      D = C.title,
      h = C.drawerLabel,
      _ = C.drawerIcon;
    return (
      <module1956.default
        key={t.key}
        label={undefined !== h ? h : undefined !== D ? D : t.name}
        icon={_}
        focused={k}
        activeTintColor={s}
        inactiveTintColor={y}
        activeBackgroundColor={v}
        inactiveBackgroundColor={O}
        labelStyle={j}
        style={b}
        to={w(t.name, t.params)}
        onPress={function () {
          l.dispatch(
            p(
              p({}, k ? module482.DrawerActions.closeDrawer() : module482.CommonActions.navigate(t.name)),
              {},
              {
                target: n.key,
              }
            )
          );
        }}
      />
    );
  });
};

var module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(c, f, p);
        else c[f] = t[f];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  module482 = require('./482'),
  module1956 = require('./1956');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

function f(t, n) {
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

function p(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      f(Object(c), true).forEach(function (o) {
        module47.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      f(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}
