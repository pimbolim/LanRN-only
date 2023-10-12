function n(n) {
  return n;
}

function t(n) {
  switch (n.type) {
    case 'Range':
      return ' [' + (null === n.min ? '-\u221e' : n.min) + ',' + (null === n.max ? '\u221e' : n.max) + ']';

    default:
      throw new Error('Unknown node type `' + n.type + '`');
  }
}

function o(n, t, o, u) {
  var p = ' ' === n.combinator || u ? n.combinator : ' ' + n.combinator + ' ',
    s = n.terms
      .map(function (n) {
        return c(n, t, o, u);
      })
      .join(p);
  if (n.explicit || o) s = (u || ',' === s[0] ? '[' : '[ ') + s + (u ? ']' : ' ]');
  return s;
}

function c(n, u, p, s) {
  var f, l;

  switch (n.type) {
    case 'Group':
      f = o(n, u, p, s) + (n.disallowEmpty ? '!' : '');
      break;

    case 'Multiplier':
      return (
        c(n.term, u, p, s) +
        u(
          0 === (l = n).min && 0 === l.max
            ? '*'
            : 0 === l.min && 1 === l.max
            ? '?'
            : 1 === l.min && 0 === l.max
            ? l.comma
              ? '#'
              : '+'
            : 1 === l.min && 1 === l.max
            ? ''
            : (l.comma ? '#' : '') + (l.min === l.max ? '{' + l.min + '}' : '{' + l.min + ',' + (0 !== l.max ? l.max : '') + '}'),
          n
        )
      );

    case 'Type':
      f = '<' + n.name + (n.opts ? u(t(n.opts), n.opts) : '') + '>';
      break;

    case 'Property':
      f = "<'" + n.name + "'>";
      break;

    case 'Keyword':
      f = n.name;
      break;

    case 'AtKeyword':
      f = '@' + n.name;
      break;

    case 'Function':
      f = n.name + '(';
      break;

    case 'String':
    case 'Token':
      f = n.value;
      break;

    case 'Comma':
      f = ',';
      break;

    default:
      throw new Error('Unknown node type `' + n.type + '`');
  }

  return u(f, n);
}

module.exports = function (t, o) {
  var u = n,
    p = false,
    s = false;
  if ('function' == typeof o) u = o;
  else if (o) {
    p = Boolean(o.forceBraces);
    s = Boolean(o.compact);
    if ('function' == typeof o.decorate) u = o.decorate;
  }
  return c(t, u, p, s);
};
