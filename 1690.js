var module1685 = require('./1685'),
  n = {
    type: 'Match',
  },
  u = {
    type: 'Mismatch',
  },
  y = {
    type: 'DisallowEmpty',
  },
  o = 40,
  l = 41;

function c(t, y, o) {
  return y === n && o === u
    ? t
    : t === n && y === n && o === n
    ? t
    : ('If' === t.type && t.else === u && y === n && ((y = t.then), (t = t.match)),
      {
        type: 'If',
        match: t,
        then: y,
        else: o,
      });
}

function p(t) {
  return t.length > 2 && t.charCodeAt(t.length - 2) === o && t.charCodeAt(t.length - 1) === l;
}

function s(t) {
  return 'Keyword' === t.type || 'AtKeyword' === t.type || 'Function' === t.type || ('Type' === t.type && p(t.name));
}

function h(t, y, o) {
  switch (t) {
    case ' ':
      for (var l = n, f = y.length - 1; f >= 0; f--) {
        l = c((x = y[f]), l, u);
      }

      return l;

    case '|':
      l = u;
      var v = null;

      for (f = y.length - 1; f >= 0; f--) {
        if (
          s((x = y[f])) &&
          (null === v &&
            f > 0 &&
            s(y[f - 1]) &&
            (l = c(
              {
                type: 'Enum',
                map: (v = Object.create(null)),
              },
              n,
              l
            )),
          null !== v)
        ) {
          var w = (p(x.name) ? x.name.slice(0, -1) : x.name).toLowerCase();

          if (w in v == false) {
            v[w] = x;
            continue;
          }
        }

        v = null;
        l = c(x, n, l);
      }

      return l;

    case '&&':
      if (y.length > 5)
        return {
          type: 'MatchOnce',
          terms: y,
          all: true,
        };

      for (l = u, f = y.length - 1; f >= 0; f--) {
        var x = y[f];
        C =
          y.length > 1
            ? h(
                t,
                y.filter(function (t) {
                  return t !== x;
                }),
                false
              )
            : n;
        l = c(x, C, l);
      }

      return l;

    case '||':
      if (y.length > 5)
        return {
          type: 'MatchOnce',
          terms: y,
          all: false,
        };

      for (l = o ? n : u, f = y.length - 1; f >= 0; f--) {
        var C;
        x = y[f];
        C =
          y.length > 1
            ? h(
                t,
                y.filter(function (t) {
                  return t !== x;
                }),
                true
              )
            : n;
        l = c(x, C, l);
      }

      return l;
  }
}

function f(t) {
  var o = n,
    l = v(t.term);

  if (0 === t.max) {
    (o = c((l = c(l, y, u)), null, u)).then = c(n, n, o);
    if (t.comma)
      o.then.else = c(
        {
          type: 'Comma',
          syntax: t,
        },
        o,
        u
      );
  } else
    for (var p = t.min || 1; p <= t.max; p++) {
      if (t.comma && o !== n)
        o = c(
          {
            type: 'Comma',
            syntax: t,
          },
          o,
          u
        );
      o = c(l, c(n, n, o), u);
    }

  if (0 === t.min) o = c(n, n, o);
  else
    for (p = 0; p < t.min - 1; p++) {
      if (t.comma && o !== n)
        o = c(
          {
            type: 'Comma',
            syntax: t,
          },
          o,
          u
        );
      o = c(l, o, u);
    }
  return o;
}

function v(t) {
  if ('function' == typeof t)
    return {
      type: 'Generic',
      fn: t,
    };

  switch (t.type) {
    case 'Group':
      var n = h(t.combinator, t.terms.map(v), false);
      if (t.disallowEmpty) n = c(n, y, u);
      return n;

    case 'Multiplier':
      return f(t);

    case 'Type':
    case 'Property':
      return {
        type: t.type,
        name: t.name,
        syntax: t,
      };

    case 'Keyword':
      return {
        type: t.type,
        name: t.name.toLowerCase(),
        syntax: t,
      };

    case 'AtKeyword':
      return {
        type: t.type,
        name: '@' + t.name.toLowerCase(),
        syntax: t,
      };

    case 'Function':
      return {
        type: t.type,
        name: t.name.toLowerCase() + '(',
        syntax: t,
      };

    case 'String':
      return 3 === t.value.length
        ? {
            type: 'Token',
            value: t.value.charAt(1),
            syntax: t,
          }
        : {
            type: t.type,
            value: t.value.substr(1, t.value.length - 2).replace(/\\'/g, "'"),
            syntax: t,
          };

    case 'Token':
      return {
        type: t.type,
        value: t.value,
        syntax: t,
      };

    case 'Comma':
      return {
        type: t.type,
        syntax: t,
      };

    default:
      throw new Error('Unknown node type:', t.type);
  }
}

module.exports = {
  MATCH: n,
  MISMATCH: u,
  DISALLOW_EMPTY: y,
  buildMatchGraph: function (n, u) {
    if ('string' == typeof n) n = module1685(n);
    return {
      type: 'MatchGraph',
      match: v(n),
      syntax: u || null,
      source: n,
    };
  },
};
