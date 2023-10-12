var module1675 = require('./1675'),
  n = module1675.isDigit,
  c = module1675.isHexDigit,
  o = module1675.isUppercaseLetter,
  u = module1675.isName,
  h = module1675.isWhiteSpace,
  f = module1675.isValidEscape;

function C(t, n) {
  return n < t.length ? t.charCodeAt(n) : 0;
}

function A(t, n, c) {
  return 13 === c && 10 === C(t, n + 1) ? 2 : 1;
}

function s(t, n, c) {
  var u = t.charCodeAt(n);
  if (o(u)) u |= 32;
  return u === c;
}

function l(t, c) {
  for (; c < t.length && n(t.charCodeAt(c)); c++);

  return c;
}

function p(t, n) {
  if (c(C(t, (n += 2) - 1))) {
    for (var o = t.length ** (n + 5); n < o && c(C(t, n)); n++);

    var u = C(t, n);
    if (h(u)) n += A(t, n, u);
  }

  return n;
}

module.exports = {
  consumeEscaped: p,
  consumeName: function (t, n) {
    for (; n < t.length; n++) {
      var c = t.charCodeAt(n);

      if (!u(c)) {
        if (!f(c, C(t, n + 1))) break;
        n = p(t, n) - 1;
      }
    }

    return n;
  },
  consumeNumber: function (t, c) {
    var o = t.charCodeAt(c);

    if (
      ((43 !== o && 45 !== o) || (o = t.charCodeAt((c += 1))),
      n(o) && ((c = l(t, c + 1)), (o = t.charCodeAt(c))),
      46 === o && n(t.charCodeAt(c + 1)) && ((o = t.charCodeAt((c += 2))), (c = l(t, c))),
      s(t, c, 101))
    ) {
      var u = 0;

      if (!(45 !== (o = t.charCodeAt(c + 1)) && 43 !== o)) {
        u = 1;
        o = t.charCodeAt(c + 2);
      }

      if (n(o)) c = l(t, c + 1 + u + 1);
    }

    return c;
  },
  consumeBadUrlRemnants: function (t, n) {
    for (; n < t.length; n++) {
      var c = t.charCodeAt(n);

      if (41 === c) {
        n++;
        break;
      }

      if (f(c, C(t, n + 1))) n = p(t, n);
    }

    return n;
  },
  cmpChar: s,
  cmpStr: function (t, n, c, u) {
    if (c - n !== u.length) return false;
    if (n < 0 || c > t.length) return false;

    for (var h = n; h < c; h++) {
      var f = t.charCodeAt(h),
        C = u.charCodeAt(h - n);
      if ((o(f) && (f |= 32), f !== C)) return false;
    }

    return true;
  },
  getNewlineLength: A,
  findWhiteSpaceStart: function (t, n) {
    for (; n >= 0 && h(t.charCodeAt(n)); n--);

    return n + 1;
  },
  findWhiteSpaceEnd: function (t, n) {
    for (; n < t.length && h(t.charCodeAt(n)); n++);

    return n;
  },
};
