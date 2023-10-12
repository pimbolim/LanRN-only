var t = 0;

function n(t) {
  return t >= 48 && t <= 57;
}

function u(t) {
  return t >= 65 && t <= 90;
}

function c(t) {
  return t >= 97 && t <= 122;
}

function o(t) {
  return u(t) || c(t);
}

function s(t) {
  return t >= 128;
}

function f(t) {
  return o(t) || s(t) || 95 === t;
}

function N(t) {
  return (t >= 0 && t <= 8) || 11 === t || (t >= 14 && t <= 31) || 127 === t;
}

function S(t) {
  return 10 === t || 13 === t || 12 === t;
}

function b(t) {
  return S(t) || 32 === t || 9 === t;
}

function l(n, u) {
  return 92 === n && !S(u) && u !== t;
}

var p = new Array(128);
k.Eof = 128;
k.WhiteSpace = 130;
k.Digit = 131;
k.NameStart = 132;
k.NonPrintable = 133;

for (var h = 0; h < p.length; h++)
  switch (true) {
    case b(h):
      p[h] = k.WhiteSpace;
      break;

    case n(h):
      p[h] = k.Digit;
      break;

    case f(h):
      p[h] = k.NameStart;
      break;

    case N(h):
      p[h] = k.NonPrintable;
      break;

    default:
      p[h] = h || k.Eof;
  }

function k(t) {
  return t < 128 ? p[t] : k.NameStart;
}

module.exports = {
  isDigit: n,
  isHexDigit: function (t) {
    return n(t) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
  },
  isUppercaseLetter: u,
  isLowercaseLetter: c,
  isLetter: o,
  isNonAscii: s,
  isNameStart: f,
  isName: function (t) {
    return f(t) || n(t) || 45 === t;
  },
  isNonPrintable: N,
  isNewline: S,
  isWhiteSpace: b,
  isValidEscape: l,
  isIdentifierStart: function (t, n, u) {
    return 45 === t ? f(n) || 45 === n || l(n, u) : !!f(t) || (92 === t && l(t, n));
  },
  isNumberStart: function (t, u, c) {
    if (43 === t || 45 === t) return n(u) ? 2 : 46 === u && n(c) ? 3 : 0;
    else if (46 === t) return n(u) ? 2 : 0;
    else return n(t) ? 1 : 0;
  },
  isBOM: function (t) {
    return 65279 === t ? 1 : 65534 === t ? 1 : 0;
  },
  charCodeCategory: k,
};
