var module1026 = require('./1026'),
  module1029 = require('./1029'),
  module1030 = require('./1030'),
  u = 1,
  o = 2;

module.exports = function (v, l, s, c, b, h) {
  var k = s & u,
    p = v.length,
    _ = l.length;
  if (p != _ && !(k && _ > p)) return false;
  var w = h.get(v),
    x = h.get(l);
  if (w && x) return w == l && x == v;
  var j = -1,
    q = true,
    y = s & o ? new module1026() : undefined;

  for (h.set(v, l), h.set(l, v); ++j < p; ) {
    var z = v[j],
      A = l[j];
    if (c) var B = k ? c(A, z, j, l, v, h) : c(z, A, j, v, l, h);

    if (undefined !== B) {
      if (B) continue;
      q = false;
      break;
    }

    if (y) {
      if (
        !module1029(l, function (t, n) {
          if (!module1030(y, n) && (z === t || b(z, t, s, c, h))) return y.push(n);
        })
      ) {
        q = false;
        break;
      }
    } else if (z !== A && !b(z, A, s, c, h)) {
      q = false;
      break;
    }
  }

  h.delete(v);
  h.delete(l);
  return q;
};
