var module1686 = require('./1686'),
  n = 9,
  o = 10,
  s = 12,
  u = 13,
  c = 32,
  p = 33,
  l = 35,
  f = 38,
  h = 39,
  y = 40,
  C = 41,
  b = 42,
  v = 43,
  x = 44,
  k = 45,
  w = 60,
  A = 62,
  E = 63,
  T = 64,
  P = 91,
  U = 93,
  N = 123,
  S = 124,
  G = 125,
  K = 8734,
  O = (function (t) {
    for (var n = 'function' == typeof Uint32Array ? new Uint32Array(128) : new Array(128), o = 0; o < 128; o++) n[o] = t(String.fromCharCode(o)) ? 1 : 0;

    return n;
  })(function (t) {
    return /[a-zA-Z0-9\-]/.test(t);
  }),
  W = {
    ' ': 1,
    '&&': 2,
    '||': 3,
    '|': 4,
  };

function _(t) {
  return t.substringToPos(t.findWsEnd(t.pos));
}

function j(t) {
  for (var n = t.pos; n < t.str.length; n++) {
    var o = t.str.charCodeAt(n);
    if (o >= 128 || 0 === O[o]) break;
  }

  if (t.pos === n) t.error('Expect a keyword');
  return t.substringToPos(n);
}

function z(t) {
  for (var n = t.pos; n < t.str.length; n++) {
    var o = t.str.charCodeAt(n);
    if (o < 48 || o > 57) break;
  }

  if (t.pos === n) t.error('Expect a number');
  return t.substringToPos(n);
}

function F(t) {
  var n = t.str.indexOf("'", t.pos + 1);

  if (-1 === n) {
    t.pos = t.str.length;
    t.error('Expect an apostrophe');
  }

  return t.substringToPos(n + 1);
}

function M(t) {
  var n,
    o = null;
  t.eat(N);
  n = z(t);

  if (t.charCode() === x) {
    t.pos++;
    if (t.charCode() !== G) o = z(t);
  } else o = n;

  t.eat(G);
  return {
    min: Number(n),
    max: o ? Number(o) : 0,
  };
}

function R(t) {
  var n = null,
    o = false;

  switch (t.charCode()) {
    case b:
      t.pos++;
      n = {
        min: 0,
        max: 0,
      };
      break;

    case v:
      t.pos++;
      n = {
        min: 1,
        max: 0,
      };
      break;

    case E:
      t.pos++;
      n = {
        min: 0,
        max: 1,
      };
      break;

    case l:
      t.pos++;
      o = true;
      n =
        t.charCode() === N
          ? M(t)
          : {
              min: 1,
              max: 0,
            };
      break;

    case N:
      n = M(t);
      break;

    default:
      return null;
  }

  return {
    type: 'Multiplier',
    comma: o,
    min: n.min,
    max: n.max,
    term: null,
  };
}

function Z(t, n) {
  var o = R(t);

  if (null !== o) {
    o.term = n;
    return o;
  } else return n;
}

function q(t) {
  var n = t.peek();
  return '' === n
    ? null
    : {
        type: 'Token',
        value: n,
      };
}

function B(t) {
  var n;
  t.eat(w);
  t.eat(h);
  n = j(t);
  t.eat(h);
  t.eat(A);
  return Z(t, {
    type: 'Property',
    name: n,
  });
}

function D(t) {
  var n = null,
    o = null,
    s = 1;
  t.eat(P);

  if (t.charCode() === k) {
    t.peek();
    s = -1;
  }

  if (-1 == s && t.charCode() === K) t.peek();
  else n = s * Number(z(t));

  _(t);

  t.eat(x);

  _(t);

  if (t.charCode() === K) t.peek();
  else {
    s = 1;

    if (t.charCode() === k) {
      t.peek();
      s = -1;
    }

    o = s * Number(z(t));
  }
  t.eat(U);
  return null === n && null === o
    ? null
    : {
        type: 'Range',
        min: n,
        max: o,
      };
}

function H(t) {
  var n,
    o = null;
  t.eat(w);
  n = j(t);

  if (t.charCode() === y && t.nextCharCode() === C) {
    t.pos += 2;
    n += '()';
  }

  if (t.charCodeAt(t.findWsEnd(t.pos)) === P) {
    _(t);

    o = D(t);
  }

  t.eat(A);
  return Z(t, {
    type: 'Type',
    name: n,
    opts: o,
  });
}

function I(t) {
  var n;
  n = j(t);

  if (t.charCode() === y) {
    t.pos++;
    return {
      type: 'Function',
      name: n,
    };
  } else
    return Z(t, {
      type: 'Keyword',
      name: n,
    });
}

function J(t, n) {
  function o(t, n) {
    return {
      type: 'Group',
      terms: t,
      combinator: n,
      disallowEmpty: false,
      explicit: false,
    };
  }

  for (
    n = Object.keys(n).sort(function (t, n) {
      return W[t] - W[n];
    });
    n.length > 0;

  ) {
    for (var s = n.shift(), u = 0, c = 0; u < t.length; u++) {
      var p = t[u];
      if ('Combinator' === p.type)
        p.value === s ? (-1 === c && (c = u - 1), t.splice(u, 1), u--) : (-1 !== c && u - c > 1 && (t.splice(c, u - c, o(t.slice(c, u), s)), (u = c + 1)), (c = -1));
    }

    if (-1 !== c && n.length) t.splice(c, u - c, o(t.slice(c, u), s));
  }

  return s;
}

function L(t) {
  for (var n, o = [], s = {}, u = null, c = t.pos; (n = V(t)); )
    'Spaces' !== n.type &&
      ('Combinator' === n.type
        ? ((null !== u && 'Combinator' !== u.type) || ((t.pos = c), t.error('Unexpected combinator')), (s[n.value] = true))
        : null !== u &&
          'Combinator' !== u.type &&
          ((s[' '] = true),
          o.push({
            type: 'Combinator',
            value: ' ',
          })),
      o.push(n),
      (u = n),
      (c = t.pos));

  if (null !== u && 'Combinator' === u.type) {
    t.pos -= c;
    t.error('Unexpected combinator');
  }

  return {
    type: 'Group',
    terms: o,
    combinator: J(o, s) || ' ',
    disallowEmpty: false,
    explicit: false,
  };
}

function Q(t) {
  var n;
  t.eat(P);
  n = L(t);
  t.eat(U);
  n.explicit = true;

  if (t.charCode() === p) {
    t.pos++;
    n.disallowEmpty = true;
  }

  return n;
}

function V(t) {
  var y = t.charCode();
  if (y < 128 && 1 === O[y]) return I(t);

  switch (y) {
    case U:
      break;

    case P:
      return Z(t, Q(t));

    case w:
      return t.nextCharCode() === h ? B(t) : H(t);

    case S:
      return {
        type: 'Combinator',
        value: t.substringToPos(t.nextCharCode() === S ? t.pos + 2 : t.pos + 1),
      };

    case f:
      t.pos++;
      t.eat(f);
      return {
        type: 'Combinator',
        value: '&&',
      };

    case x:
      t.pos++;
      return {
        type: 'Comma',
      };

    case h:
      return Z(t, {
        type: 'String',
        value: F(t),
      });

    case c:
    case n:
    case o:
    case u:
    case s:
      return {
        type: 'Spaces',
        value: _(t),
      };

    case T:
      if ((y = t.nextCharCode()) < 128 && 1 === O[y]) {
        t.pos++;
        return {
          type: 'AtKeyword',
          name: j(t),
        };
      } else return q(t);

    case b:
    case v:
    case E:
    case l:
    case p:
      break;

    case N:
      if ((y = t.nextCharCode()) < 48 || y > 57) return q(t);
      break;

    default:
      return q(t);
  }
}

function X(n) {
  var o = new module1686(n),
    s = L(o);
  if (o.pos !== n.length) o.error('Unexpected input');
  if (1 === s.terms.length && 'Group' === s.terms[0].type) s = s.terms[0];
  return s;
}

X("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");
module.exports = X;
