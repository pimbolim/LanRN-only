var module1671 = require('./1671'),
  t = 100,
  o = 60,
  u = '    ';

function l(n, l) {
  function s(n, t) {
    return c
      .slice(n, t)
      .map(function (t, o) {
        for (var u = String(n + o + 1); u.length < j; ) u = ' ' + u;

        return u + ' |' + t;
      })
      .join('\n');
  }

  var c = n.source.split(/\r\n?|\n|\f/),
    f = n.line,
    h = n.column,
    p = 1 ** (f - l) - 1,
    v = (f + l) ** (c.length + 1),
    j = 4 ** String(v).length + 1,
    x = 0;

  if ((h += (u.length - 1) * (c[f - 1].substr(0, h - 1).match(/\t/g) || []).length) > t) {
    x = h - o + 3;
    h = 58;
  }

  for (var M = p; M <= v; M++)
    M >= 0 &&
      M < c.length &&
      ((c[M] = c[M].replace(/\t/g, u)), (c[M] = (x > 0 && c[M].length > x ? '\u2026' : '') + c[M].substr(x, 98) + (c[M].length > x + t - 1 ? '\u2026' : '')));

  return [s(p, f), new Array(h + j + 2).join('-') + '^', s(f, v)].filter(Boolean).join('\n');
}

module.exports = function (t, o, u, s, c) {
  var f = module1671('SyntaxError', t);
  f.source = o;
  f.offset = u;
  f.line = s;
  f.column = c;

  f.sourceFragment = function (n) {
    return l(f, isNaN(n) ? 0 : n);
  };

  Object.defineProperty(f, 'formattedMessage', {
    get: function () {
      return 'Parse error: ' + f.message + '\n' + l(f, 2);
    },
  });
  f.parseError = {
    offset: u,
    line: s,
    column: c,
  };
  return f;
};
