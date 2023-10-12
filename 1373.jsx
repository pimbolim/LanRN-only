var module11 = require('./11'),
  module47 = require('./47'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = s(o);
    if (n && n.has(t)) return n.get(t);
    var c = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(c, u, f);
        else c[u] = t[u];
      }

    c.default = t;
    if (n) n.set(t, c);
    return c;
  })(require('react')),
  module482 = require('./482'),
  module1342 = require('./1342'),
  module1374 = require('./1374'),
  module1375 = require('./1375');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (s = function (t) {
    return t ? n : o;
  })(t);
}

function y(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function O(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      y(Object(c), true).forEach(function (o) {
        module47.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      y(Object(c)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(c, o));
      });
  }

  return t;
}

var v = React.memo(function (t) {
  var n,
    s = t.scene,
    y = t.previous,
    v = t.layout,
    b = t.insets,
    h = t.navigation,
    j = t.styleInterpolator,
    P = s.descriptor.options,
    k = 'function' != typeof P.headerTitle && undefined !== P.headerTitle ? P.headerTitle : undefined !== P.title ? P.title : s.route.name;
  if (undefined !== P.headerBackTitle) n = P.headerBackTitle;
  else if (y) {
    var w = y.descriptor.options;
    n = 'function' != typeof w.headerTitle && undefined !== w.headerTitle ? w.headerTitle : undefined !== w.title ? w.title : y.route.name;
  }
  var T = React.useCallback(
    module1375.default(function () {
      if (h.isFocused() && h.canGoBack())
        h.dispatch(
          O(
            O({}, module482.StackActions.pop()),
            {},
            {
              source: s.route.key,
            }
          )
        );
    }, 50),
    [h, s.route.key]
  );
  return <module1342.default />;
});
exports.default = v;
