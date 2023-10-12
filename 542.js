exports.default = function (t, n) {
  var l,
    u,
    v = n ? c(n) : {},
    f = null != t.index ? t.routes.slice(0, t.index + 1) : t.routes;
  if (0 === f.length) return;
  if (
    !(
      (1 === f.length && undefined === f[0].key) ||
      (2 === f.length && undefined === f[0].key && f[0].name === (null == v ? undefined : v.initialRouteName) && undefined === f[1].key)
    )
  )
    return {
      type: 'RESET',
      payload: t,
    };
  var p = t.routes[null != (l = t.index) ? l : t.routes.length - 1],
    y = null == p ? undefined : p.state,
    O = null == v ? undefined : null == (u = v.screens) ? undefined : u[null == p ? undefined : p.name],
    b = s({}, p.params),
    j = p
      ? {
          name: p.name,
          params: b,
        }
      : undefined;

  for (; y; ) {
    var h, P, k;
    if (0 === y.routes.length) return;
    var w = null != y.index ? y.routes.slice(0, y.index + 1) : y.routes,
      x = w[w.length - 1];

    if (
      (module11.default(b, {
        initial: undefined,
        screen: undefined,
        params: undefined,
        state: undefined,
      }),
      1 === w.length && undefined === w[0].key)
    ) {
      b.initial = true;
      b.screen = x.name;
    } else {
      if (2 !== w.length || undefined !== w[0].key || w[0].name !== (null == (h = O) ? undefined : h.initialRouteName) || undefined !== w[1].key) {
        b.state = y;
        break;
      }

      b.initial = false;
      b.screen = x.name;
    }

    if (x.state) {
      b.params = s({}, x.params);
      b = b.params;
    } else b.params = x.params;

    y = x.state;
    O = null == (P = O) ? undefined : null == (k = P.screens) ? undefined : k[x.name];
  }

  if (!j) return;
  return {
    type: 'NAVIGATE',
    payload: j,
  };
};

var module12 = require('./12'),
  module11 = require('./11'),
  module47 = require('./47');

function u(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      u(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      u(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var c = function (t) {
    return 'object' == typeof t && null != t
      ? {
          initialRouteName: t.initialRouteName,
          screens: null != t.screens ? v(t.screens) : undefined,
        }
      : {};
  },
  v = function (t) {
    return Object.entries(t).reduce(function (t, o) {
      var l = module12.default(o, 2),
        u = l[0],
        s = l[1];
      t[u] = c(s);
      return t;
    }, {});
  };
