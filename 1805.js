var module1791 = require('./1791').isTag;

function t(n, l, h, f) {
  for (
    var u, c = [], o = 0, s = l.length;
    o < s && !(n(l[o]) && (c.push(l[o]), --f <= 0)) && ((u = l[o].children), !(h && u && u.length > 0 && ((u = t(n, u, h, f)), (c = c.concat(u)), (f -= u.length) <= 0)));
    o++
  );

  return c;
}

module.exports = {
  filter: function (n, l, h, f) {
    if (!Array.isArray(l)) l = [l];
    if (!('number' == typeof f && isFinite(f))) f = 1 / 0;
    return t(n, l, false !== h, f);
  },
  find: t,
  findOneChild: function (n, t) {
    for (var l = 0, h = t.length; l < h; l++) if (n(t[l])) return t[l];

    return null;
  },
  findOne: function t(l, h) {
    var f = null;

    for (var u = 0, c = h.length; u < c && !f; u++) module1791(h[u]) && (l(h[u]) ? (f = h[u]) : h[u].children.length > 0 && (f = t(l, h[u].children)));

    return f;
  },
  existsOne: function t(l, h) {
    for (var f = 0, u = h.length; f < u; f++) if (module1791(h[f]) && (l(h[f]) || (h[f].children.length > 0 && t(l, h[f].children)))) return true;

    return false;
  },
  findAll: function (t, l) {
    var h = [],
      f = l.slice();

    for (; f.length; ) {
      var u = f.shift();

      if (module1791(u)) {
        if (u.children && u.children.length > 0) f.unshift.apply(f, u.children);
        if (t(u)) h.push(u);
      }
    }

    return h;
  },
};
