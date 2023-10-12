var module11 = require('./11'),
  module1671 = require('./1671'),
  module1678 = require('./1678'),
  l = {
    offset: 0,
    line: 1,
    column: 1,
  };

function c(n, t) {
  for (var s, c, u = n.tokens, h = n.longestMatch, v = (h < u.length && u[h].node) || null, y = v !== t ? v : null, x = 0, p = 0, E = 0, M = '', O = 0; O < u.length; O++) {
    var S = u[O].value;

    if (O === h) {
      p = S.length;
      x = M.length;
    }

    if (null !== y && u[O].node === y) O <= h ? E++ : (E = 0);
    M += S;
  }

  if (h === u.length || E > 1) c = f((s = o(y || t, 'end') || f(l, M)));
  else {
    s = o(y, 'start') || f(o(t, 'start') || l, M.slice(0, x));
    c = o(y, 'end') || f(s, M.substr(x, p));
  }
  return {
    css: M,
    mismatchOffset: x,
    mismatchLength: p,
    start: s,
    end: c,
  };
}

function o(n, t) {
  var s = n && n.loc && n.loc[t];
  return s ? ('line' in s ? f(s) : s) : null;
}

function f(n, t) {
  var s = {
    offset: n.offset,
    line: n.line,
    column: n.column,
  };

  if (t) {
    var l = t.split(/\n|\r\n?|\f/);
    s.offset += t.length;
    s.line += l.length - 1;
    s.column = 1 === l.length ? s.column + t.length : l.pop().length + 1;
  }

  return s;
}

module.exports = {
  SyntaxReferenceError: function (n, s) {
    var l = module1671('SyntaxReferenceError', n + (s ? ' `' + s + '`' : ''));
    l.reference = s;
    return l;
  },
  SyntaxMatchError: function (l, o, f, u) {
    var h = module1671('SyntaxMatchError', l),
      v = c(u, f),
      y = v.css,
      x = v.mismatchOffset,
      p = v.mismatchLength,
      E = v.start,
      M = v.end;
    h.rawMessage = l;
    h.syntax = o ? module1678(o) : '<generic>';
    h.css = y;
    h.mismatchOffset = x;
    h.mismatchLength = p;
    h.message = l + '\n  syntax: ' + h.syntax + '\n   value: ' + (y || '<empty string>') + '\n  --------' + new Array(h.mismatchOffset + 1).join('-') + '^';
    module11(h, E);
    h.loc = {
      source: (f && f.loc && f.loc.source) || '<unknown>',
      start: E,
      end: M,
    };
    return h;
  },
};
