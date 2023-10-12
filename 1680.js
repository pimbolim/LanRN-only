var n,
  module1681 = require('./1681'),
  u = module1681.isIdentifierStart,
  l = module1681.isHexDigit,
  o = module1681.isDigit,
  c = module1681.cmpStr,
  s = module1681.consumeNumber,
  f = module1681.TYPE,
  module1683 = require('./1683'),
  module1684 = require('./1684'),
  k = ['unset', 'initial', 'inherit'],
  b = ['calc(', '-moz-calc(', '-webkit-calc('];

function p(n, t) {
  return t < n.length ? n.charCodeAt(t) : 0;
}

function y(n, t) {
  return c(n, 0, n.length, t);
}

function C(n, t) {
  for (var u = 0; u < t.length; u++) if (y(n, t[u])) return true;

  return false;
}

function x(n, t) {
  return t === n.length - 2 && 92 === n.charCodeAt(t) && o(n.charCodeAt(t + 1));
}

function B(n, t, u) {
  if (n && 'Range' === n.type) {
    var l = Number(undefined !== u && u !== t.length ? t.substr(0, u) : t);
    if (isNaN(l)) return true;
    if (null !== n.min && l < n.min) return true;
    if (null !== n.max && l > n.max) return true;
  }

  return false;
}

function S(n, t) {
  var u = n.index,
    l = 0;

  do {
    if ((l++, n.balance <= u)) break;
  } while ((n = t(l)));

  return l;
}

function w(n) {
  return function (t, u, l) {
    return null === t ? 0 : t.type === f.Function && C(t.value, b) ? S(t, u) : n(t, u, l);
  };
}

function D(n) {
  return function (t) {
    return null === t || t.type !== n ? 0 : 1;
  };
}

function R(n) {
  return function (t, u, l) {
    if (null === t || t.type !== f.Dimension) return 0;
    var o = s(t.value, 0);

    if (null !== n) {
      var c = t.value.indexOf('\\', o),
        h = -1 !== c && x(t.value, c) ? t.value.substring(o, c) : t.value.substr(o);
      if (false === n.hasOwnProperty(h.toLowerCase())) return 0;
    }

    return B(l, t.value, o) ? 0 : 1;
  };
}

function P(n) {
  if ('function' != typeof n)
    n = function () {
      return 0;
    };
  return function (t, u, l) {
    return null !== t && t.type === f.Number && 0 === Number(t.value) ? 1 : n(t, u, l);
  };
}

module.exports = {
  'ident-token': D(f.Ident),
  'function-token': D(f.Function),
  'at-keyword-token': D(f.AtKeyword),
  'hash-token': D(f.Hash),
  'string-token': D(f.String),
  'bad-string-token': D(f.BadString),
  'url-token': D(f.Url),
  'bad-url-token': D(f.BadUrl),
  'delim-token': D(f.Delim),
  'number-token': D(f.Number),
  'percentage-token': D(f.Percentage),
  'dimension-token': D(f.Dimension),
  'whitespace-token': D(f.WhiteSpace),
  'CDO-token': D(f.CDO),
  'CDC-token': D(f.CDC),
  'colon-token': D(f.Colon),
  'semicolon-token': D(f.Semicolon),
  'comma-token': D(f.Comma),
  '[-token': D(f.LeftSquareBracket),
  ']-token': D(f.RightSquareBracket),
  '(-token': D(f.LeftParenthesis),
  ')-token': D(f.RightParenthesis),
  '{-token': D(f.LeftCurlyBracket),
  '}-token': D(f.RightCurlyBracket),
  string: D(f.String),
  ident: D(f.Ident),
  'custom-ident': function (n) {
    if (null === n || n.type !== f.Ident) return 0;
    var t = n.value.toLowerCase();
    return C(t, k) ? 0 : y(t, 'default') ? 0 : 1;
  },
  'custom-property-name': function (n) {
    return null === n || n.type !== f.Ident ? 0 : 45 !== p(n.value, 0) || 45 !== p(n.value, 1) ? 0 : 1;
  },
  'hex-color': function (n) {
    if (null === n || n.type !== f.Hash) return 0;
    var t = n.value.length;
    if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;

    for (var u = 1; u < t; u++) if (!l(n.value.charCodeAt(u))) return 0;

    return 1;
  },
  'id-selector': function (n) {
    return null === n || n.type !== f.Hash ? 0 : u(p(n.value, 1), p(n.value, 2), p(n.value, 3)) ? 1 : 0;
  },
  'an-plus-b': module1683,
  urange: module1684,
  'declaration-value': function (n, t) {
    if (!n) return 0;
    var u = 0,
      l = 0,
      o = n.index;

    e: do {
      switch (n.type) {
        case f.BadString:
        case f.BadUrl:
          break e;

        case f.RightCurlyBracket:
        case f.RightParenthesis:
        case f.RightSquareBracket:
          if (n.balance > n.index || n.balance < o) break e;
          l--;
          break;

        case f.Semicolon:
          if (0 === l) break e;
          break;

        case f.Delim:
          if ('!' === n.value && 0 === l) break e;
          break;

        case f.Function:
        case f.LeftParenthesis:
        case f.LeftSquareBracket:
        case f.LeftCurlyBracket:
          l++;
      }

      if ((u++, n.balance <= o)) break;
    } while ((n = t(u)));

    return u;
  },
  'any-value': function (n, t) {
    if (!n) return 0;
    var u = n.index,
      l = 0;

    e: do {
      switch (n.type) {
        case f.BadString:
        case f.BadUrl:
          break e;

        case f.RightCurlyBracket:
        case f.RightParenthesis:
        case f.RightSquareBracket:
          if (n.balance > n.index || n.balance < u) break e;
      }

      if ((l++, n.balance <= u)) break;
    } while ((n = t(l)));

    return l;
  },
  dimension: w(R(null)),
  angle: w(
    R({
      deg: true,
      grad: true,
      rad: true,
      turn: true,
    })
  ),
  decibel: w(
    R({
      db: true,
    })
  ),
  frequency: w(
    R({
      hz: true,
      khz: true,
    })
  ),
  flex: w(
    R({
      fr: true,
    })
  ),
  length: w(
    P(
      R({
        px: true,
        mm: true,
        cm: true,
        in: true,
        pt: true,
        pc: true,
        q: true,
        em: true,
        ex: true,
        ch: true,
        rem: true,
        vh: true,
        vw: true,
        vmin: true,
        vmax: true,
        vm: true,
      })
    )
  ),
  resolution: w(
    R({
      dpi: true,
      dpcm: true,
      dppx: true,
      x: true,
    })
  ),
  semitones: w(
    R({
      st: true,
    })
  ),
  time: w(
    R({
      s: true,
      ms: true,
    })
  ),
  percentage: w(function (n, t, u) {
    return null === n || n.type !== f.Percentage ? 0 : B(u, n.value, n.value.length - 1) ? 0 : 1;
  }),
  zero: P(),
  number: w(function (n, t, u) {
    if (null === n) return 0;
    var l = s(n.value, 0);
    return l === n.value.length || x(n.value, l) ? (B(u, n.value, l) ? 0 : 1) : 0;
  }),
  integer: w(function (n, t, u) {
    if (null === n || n.type !== f.Number) return 0;

    for (var l = 43 === n.value.charCodeAt(0) || 45 === n.value.charCodeAt(0) ? 1 : 0; l < n.value.length; l++) if (!o(n.value.charCodeAt(l))) return 0;

    return B(u, n.value, l) ? 0 : 1;
  }),
  '-ms-legacy-expression':
    ((n = 'expression'),
    (n += '('),
    function (t, u) {
      return null !== t && y(t.value, n) ? S(t, u) : 0;
    }),
};
