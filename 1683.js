var module1681 = require('./1681').isDigit,
  module1681 = require('./1681').cmpChar,
  module1681 = require('./1681').TYPE,
  l = module1681.Delim,
  f = module1681.WhiteSpace,
  v = module1681.Comment,
  c = module1681.Ident,
  o = module1681.Number,
  h = module1681.Dimension,
  p = 43,
  C = 45;

function A(t, u) {
  return null !== t && t.type === l && t.value.charCodeAt(0) === u;
}

function s(t, u, n) {
  for (; null !== t && (t.type === f || t.type === v); ) t = n(++u);

  return u;
}

function y(u, n, l, f) {
  if (!u) return 0;
  var v = u.value.charCodeAt(n);

  if (v === p || v === C) {
    if (l) return 0;
    n++;
  }

  for (; n < u.value.length; n++) if (!module1681(u.value.charCodeAt(n))) return 0;

  return f + 1;
}

function D(t, u, n) {
  var l = false,
    f = s(t, u, n);
  if (null === (t = n(f))) return u;

  if (t.type !== o) {
    if (!A(t, p) && !A(t, C)) return u;
    if (((l = true), null === (t = n((f = s(n(++f), f, n)))) && t.type !== o)) return 0;
  }

  if (!l) {
    var v = t.value.charCodeAt(0);
    if (v !== p && v !== C) return 0;
  }

  return y(t, l ? 0 : 1, l, f);
}

module.exports = function (n, l) {
  var f = 0;
  if (!n) return 0;
  if (n.type === o) return y(n, 0, false, f);

  if (n.type === c && n.value.charCodeAt(0) === C) {
    if (!module1681(n.value, 1, 110)) return 0;

    switch (n.value.length) {
      case 2:
        return D(l(++f), f, l);

      case 3:
        return n.value.charCodeAt(2) !== C ? 0 : y((n = l((f = s(l(++f), f, l)))), 0, true, f);

      default:
        return n.value.charCodeAt(2) !== C ? 0 : y(n, 3, true, f);
    }
  } else if (n.type === c || (A(n, p) && l(f + 1).type === c)) {
    if ((n.type !== c && (n = l(++f)), null === n || !module1681(n.value, 0, 110))) return 0;

    switch (n.value.length) {
      case 1:
        return D(l(++f), f, l);

      case 2:
        return n.value.charCodeAt(1) !== C ? 0 : y((n = l((f = s(l(++f), f, l)))), 0, true, f);

      default:
        return n.value.charCodeAt(1) !== C ? 0 : y(n, 2, true, f);
    }
  } else if (n.type === h) {
    for (var v = n.value.charCodeAt(0), w = v === p || v === C ? 1 : 0, _ = w; _ < n.value.length && module1681(n.value.charCodeAt(_)); _++);

    return _ === w
      ? 0
      : module1681(n.value, _, 110)
      ? _ + 1 === n.value.length
        ? D(l(++f), f, l)
        : n.value.charCodeAt(_ + 1) !== C
        ? 0
        : _ + 2 === n.value.length
        ? y((n = l((f = s(l(++f), f, l)))), 0, true, f)
        : y(n, _ + 2, true, f)
      : 0;
  }

  return 0;
};
