exports.default = function () {
  var t = React.useContext(module483.NavigationHelpersContext),
    n = React.useContext(module548.default);
  return React.useCallback(
    function (o, c) {
      var f = n.options;

      if (false !== (null == f ? undefined : f.enabled)) {
        var l = t
            ? s(t, {
                index: 0,
                routes: [
                  {
                    name: o,
                    params: c,
                  },
                ],
              })
            : {
                index: 0,
                routes: [
                  {
                    name: o,
                    params: c,
                  },
                ],
              },
          p = null != f && f.getPathFromState ? f.getPathFromState(l, null == f ? undefined : f.config) : module483.getPathFromState(l, null == f ? undefined : f.config);
        return p;
      }
    },
    [n, t]
  );
};

var module47 = require('./47'),
  React = (function (t, n) {
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
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, l, p);
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

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function p(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var s = function t(n, o) {
  var u = n.getParent();

  if (u) {
    var c = u.getState();
    return t(u, {
      index: 0,
      routes: [
        p(
          p({}, c.routes[c.index]),
          {},
          {
            state: o,
          }
        ),
      ],
    });
  }

  return o;
};
