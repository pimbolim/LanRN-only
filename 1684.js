var module1681 = require('./1681').isHexDigit,
  module1681 = require('./1681').cmpChar,
  module1681 = require('./1681').TYPE,
  f = module1681.Ident,
  l = module1681.Delim,
  o = module1681.Number,
  c = module1681.Dimension,
  v = 45,
  p = 63;

function y(n, t) {
  return null !== n && n.type === l && n.value.charCodeAt(0) === t;
}

function h(n, t) {
  return n.value.charCodeAt(0) === t;
}

function C(t, u, f) {
  for (var l = u, o = 0; l < t.value.length; l++) {
    var c = t.value.charCodeAt(l);
    if (c === v && f && 0 !== o) return C(t, u + o + 1, false) > 0 ? 6 : 0;
    if (!module1681(c)) return 0;
    if (++o > 6) return 0;
  }

  return o;
}

function s(n, t, u) {
  if (!n) return 0;

  for (; y(u(t), p); ) {
    if (++n > 6) return 0;
    t++;
  }

  return t;
}

module.exports = function (n, u) {
  var l = 0;
  if (null === n || n.type !== f || !module1681(n.value, 0, 117)) return 0;
  if (null === (n = u(++l))) return 0;
  if (y(n, 43)) return null === (n = u(++l)) ? 0 : n.type === f ? s(C(n, 0, true), ++l, u) : y(n, p) ? s(1, ++l, u) : 0;

  if (n.type === o) {
    if (!h(n, 43)) return 0;
    var A = C(n, 1, true);
    return 0 === A ? 0 : null === (n = u(++l)) ? l : n.type === c || n.type === o ? (h(n, v) && C(n, 1, false) ? l + 1 : 0) : s(A, l, u);
  }

  return n.type === c && h(n, 43) ? s(C(n, 1, true), ++l, u) : 0;
};
