var module12 = require('./12'),
  module11 = require('./11'),
  o = Object.prototype.hasOwnProperty,
  u = {
    generic: true,
    types: l,
    atrules: {
      prelude: p,
      descriptors: p,
    },
    properties: l,
    parseContext: function (n, o) {
      return module11(n, o);
    },
    scope: function n(t, u) {
      for (var s in u) o.call(u, s) && (c(t[s]) ? n(t[s], f(u[s])) : (t[s] = f(u[s])));

      return t;
    },
    atrule: ['parse'],
    pseudo: ['parse'],
    node: ['name', 'structure', 'parse', 'generate', 'walkContext'],
  };

function c(n) {
  return n && n.constructor === Object;
}

function f(n) {
  return c(n) ? module11({}, n) : n;
}

function s(n, t) {
  return 'string' == typeof t && /^\s*\|/.test(t) ? ('string' == typeof n ? n + t : t.replace(/^\s*\|\s*/, '')) : t || null;
}

function l(n, u) {
  if ('string' == typeof u) return s(n, u);
  var c = module11({}, n);

  for (var f in u) o.call(u, f) && (c[f] = s(o.call(n, f) ? n[f] : undefined, u[f]));

  return c;
}

function p(n, t) {
  var o = l(n, t);
  return !c(o) || Object.keys(o).length ? o : null;
}

function v(t, u, s) {
  for (var l in s)
    if (false !== o.call(s, l))
      if (true === s[l]) l in u && o.call(u, l) && (t[l] = f(u[l]));
      else if (s[l])
        if ('function' == typeof s[l]) {
          var p = s[l];
          t[l] = p({}, t[l]);
          t[l] = p(t[l] || {}, u[l]);
        } else if (c(s[l])) {
          var y = {};

          for (var O in t[l]) y[O] = v({}, t[l][O], s[l]);

          for (var b in u[l]) y[b] = v(y[b] || {}, u[l][b], s[l]);

          t[l] = y;
        } else if (Array.isArray(s[l])) {
          for (
            var j = {},
              h = s[l].reduce(function (n, t) {
                n[t] = true;
                return n;
              }, {}),
              x = 0,
              k = Object.entries(t[l] || {});
            x < k.length;
            x++
          ) {
            var w = k[x],
              A = module12(w, 2),
              C = A[0],
              _ = A[1];
            j[C] = {};
            if (_) v(j[C], _, h);
          }

          for (var P in u[l]) o.call(u[l], P) && (j[P] || (j[P] = {}), u[l] && u[l][P] && v(j[P], u[l][P], h));

          t[l] = j;
        }

  return t;
}

module.exports = function (n, t) {
  return v(n, t, u);
};
