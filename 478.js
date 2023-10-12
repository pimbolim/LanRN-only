var n = function (n, t) {
    return Object.keys(n).reduce(function (u, o) {
      u[o] = t(n[o]);
      return u;
    }, {});
  },
  t = function (n) {
    return n && 'object' == typeof n;
  },
  u = function u(o, c) {
    var f = function (n) {
      return t(n) ? u(n, c) : c(n);
    };

    return Array.isArray(o) ? o.map(f) : t(o) ? n(o, f) : o;
  };

exports.default = u;
