exports.default = function (t, n) {
  if (null == t) throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");

  var o = module540.default(n),
    p = module12.default(o, 2),
    l = p[0],
    O = p[1],
    j = O ? w(l, O.screens) : {},
    P = '/',
    x = t,
    E = {},
    k = function () {
      for (var n = 'number' == typeof x.index ? x.index : 0, o = x.routes[n], c = undefined, p = undefined, O = y(t), w = j, k = [], D = true; o.name in w && D; )
        if (
          ((c = w[o.name].pattern),
          k.push(o.name),
          o.params &&
            (function () {
              var t,
                n,
                s = null == (t = w[o.name]) ? undefined : t.stringify,
                l = h(
                  Object.entries(o.params).map(function (t) {
                    var n = module12.default(t, 2),
                      o = n[0],
                      u = n[1];
                    return [o, null != s && s[o] ? s[o](u) : String(u)];
                  })
                );

              if ((c && module11.default(E, l), O === o)) {
                p = v({}, l);
                if (!(null == (n = c)))
                  n.split('/')
                    .filter(function (t) {
                      return t.startsWith(':');
                    })
                    .forEach(function (t) {
                      var n = b(t);
                      if (p) delete p[n];
                    });
              }
            })(),
          w[o.name].screens && undefined !== o.state)
        ) {
          n = 'number' == typeof o.state.index ? o.state.index : o.state.routes.length - 1;
          var W = o.state.routes[n],
            _ = w[o.name].screens;

          if (_ && W.name in _) {
            o = W;
            w = _;
          } else D = false;
        } else D = false;

      if (
        (undefined === c && (c = k.join('/')),
        undefined !== w[o.name]
          ? (P += c
              .split('/')
              .map(function (t) {
                var n = b(t);

                if ('*' === t) {
                  if (l)
                    throw new Error(
                      "Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/5.x/configuring-links/#updating-config"
                    );
                  return o.name;
                }

                if (t.startsWith(':')) {
                  var u = E[n];
                  return undefined === u && t.endsWith('?') ? '' : encodeURIComponent(u);
                }

                return encodeURIComponent(t);
              })
              .join('/'))
          : (P += encodeURIComponent(o.name)),
        p || (p = O.params),
        o.state)
      )
        P += '/';
      else if (p) {
        for (var M in p) 'undefined' === p[M] && delete p[M];

        var I = module535.stringify(p);
        if (I) P += '?' + I;
      }
      x = o.state;
    };

  for (; x; ) k();

  P = (P = P.replace(/\/+/g, '/')).length > 1 ? P.replace(/\/$/, '') : P;
  return P;
};

var module20 = require('./20'),
  module47 = require('./47'),
  module11 = require('./11'),
  module12 = require('./12'),
  module535 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, s, c);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./535')),
  module540 = require('./540');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
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

function v(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var y = function t(n) {
  var o = 'number' == typeof n.index ? n.routes[n.index] : n.routes[n.routes.length - 1];
  return o.state ? t(o.state) : o;
};

var h = function (t) {
    return t.reduce(function (t, n) {
      var o = module12.default(n, 2),
        u = o[0],
        s = o[1];
      if (t.hasOwnProperty(u)) throw new Error("A value for key '" + u + "' already exists in the object.");
      t[u] = s;
      return t;
    }, {});
  },
  b = function (t) {
    return t.replace(/^:/, '').replace(/\?$/, '');
  },
  O = function (...args) {
    return (t = []).concat
      .apply(
        t,
        module20.default(
          args.map(function (t) {
            return t.split('/');
          })
        )
      )
      .filter(Boolean)
      .join('/');
  },
  j = function (t, n, o) {
    var u, f;
    if ('string' == typeof n)
      return {
        pattern: o ? O(o, n) : n,
      };
    if (t) f = true !== n.exact && o && n.path ? O(o, n.path) : n.path;
    else {
      if (n.exact && undefined === n.path)
        throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
      f = true !== n.exact ? O(o || '', n.path || '') : n.path || '';
    }
    var s = n.screens ? w(t, n.screens, f) : undefined;
    return {
      pattern: null == (u = f) ? undefined : u.split('/').filter(Boolean).join('/'),
      stringify: n.stringify,
      screens: s,
    };
  },
  w = function (t, n, o) {
    return h(
      Object.entries(n).map(function (n) {
        var u = module12.default(n, 2),
          s = u[0],
          c = u[1];
        return [s, j(t, c, o)];
      })
    );
  };
