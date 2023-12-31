var module12 = require('./12'),
  module11 = require('./11'),
  module20 = require('./20');

function u(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = c(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function c(t, n) {
  if (t) {
    if ('string' == typeof t) return s(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, n) : undefined;
  }
}

function s(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var module536 = require('./536'),
  module537 = require('./537'),
  module538 = require('./538'),
  module539 = require('./539');

function v(t) {
  switch (t.arrayFormat) {
    case 'index':
      return function (n) {
        return function (u, c) {
          var s = u.length;
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? u
            : [].concat(module20(u), null === c ? [[h(n, t), '[', s, ']'].join('')] : [[h(n, t), '[', h(s, t), ']=', h(c, t)].join('')]);
        };
      };

    case 'bracket':
      return function (n) {
        return function (u, c) {
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? u
            : [].concat(module20(u), null === c ? [[h(n, t), '[]'].join('')] : [[h(n, t), '[]=', h(c, t)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
      return function (n) {
        return function (o, u) {
          return null === u || undefined === u || 0 === u.length ? o : 0 === o.length ? [[h(n, t), '=', h(u, t)].join('')] : [[o, h(u, t)].join(t.arrayFormatSeparator)];
        };
      };

    default:
      return function (n) {
        return function (u, c) {
          return undefined === c || (t.skipNull && null === c) || (t.skipEmptyString && '' === c)
            ? u
            : [].concat(module20(u), null === c ? [h(n, t)] : [[h(n, t), '=', h(c, t)].join('')]);
        };
      };
  }
}

function b(t) {
  var n;

  switch (t.arrayFormat) {
    case 'index':
      return function (t, o, u) {
        n = /\[(\d*)\]$/.exec(t);
        t = t.replace(/\[\d*\]$/, '');

        if (n) {
          if (undefined === u[t]) u[t] = {};
          u[t][n[1]] = o;
        } else u[t] = o;
      };

    case 'bracket':
      return function (t, o, u) {
        n = /(\[\])$/.exec(t);
        t = t.replace(/\[\]$/, '');
        if (n) undefined !== u[t] ? (u[t] = [].concat(u[t], o)) : (u[t] = [o]);
        else u[t] = o;
      };

    case 'comma':
    case 'separator':
      return function (n, o, u) {
        var c = 'string' == typeof o && o.includes(t.arrayFormatSeparator),
          s = 'string' == typeof o && !c && k(o, t).includes(t.arrayFormatSeparator);
        o = s ? k(o, t) : o;
        var l =
          c || s
            ? o.split(t.arrayFormatSeparator).map(function (n) {
                return k(n, t);
              })
            : null === o
            ? o
            : k(o, t);
        u[n] = l;
      };

    default:
      return function (t, n, o) {
        if (undefined !== o[t]) o[t] = [].concat(o[t], n);
        else o[t] = n;
      };
  }
}

function j(t) {
  if ('string' != typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string');
}

function h(t, n) {
  return n.encode ? (n.strict ? module536(t) : encodeURIComponent(t)) : t;
}

function k(t, n) {
  return n.decode ? module537(t) : t;
}

function S(t) {
  return Array.isArray(t)
    ? t.sort()
    : 'object' == typeof t
    ? S(Object.keys(t))
        .sort(function (t, n) {
          return Number(t) - Number(n);
        })
        .map(function (n) {
          return t[n];
        })
    : t;
}

function F(t) {
  var n = t.indexOf('#');
  if (-1 !== n) t = t.slice(0, n);
  return t;
}

function A(t) {
  var n = '',
    o = t.indexOf('#');
  if (-1 !== o) n = t.slice(o);
  return n;
}

function O(t) {
  var n = (t = F(t)).indexOf('?');
  return -1 === n ? '' : t.slice(n + 1);
}

function N(t, n) {
  if (n.parseNumbers && !Number.isNaN(Number(t)) && 'string' == typeof t && '' !== t.trim()) t = Number(t);
  else if (!(!n.parseBooleans || null === t || ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()))) t = 'true' === t.toLowerCase();
  return t;
}

function x(o, c) {
  j(
    (c = module11(
      {
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false,
      },
      c
    )).arrayFormatSeparator
  );
  var s = b(c),
    l = Object.create(null);
  if ('string' != typeof o) return l;
  if (!(o = o.trim().replace(/^[?#&]/, ''))) return l;

  for (var f, y = u(o.split('&')); !(f = y()).done; ) {
    var v = f.value;

    if ('' !== v) {
      var h = module538(c.decode ? v.replace(/\+/g, ' ') : v, '='),
        F = module12(h, 2),
        A = F[0],
        O = F[1];
      O = undefined === O ? null : ['comma', 'separator'].includes(c.arrayFormat) ? O : k(O, c);
      s(k(A, c), O, l);
    }
  }

  for (var x = 0, I = Object.keys(l); x < I.length; x++) {
    var w = I[x],
      E = l[w];
    if ('object' == typeof E && null !== E)
      for (var U = 0, C = Object.keys(E); U < C.length; U++) {
        var $ = C[U];
        E[$] = N(E[$], c);
      }
    else l[w] = N(E, c);
  }

  return false === c.sort
    ? l
    : (true === c.sort ? Object.keys(l).sort() : Object.keys(l).sort(c.sort)).reduce(function (t, n) {
        var o = l[n];
        if (Boolean(o) && 'object' == typeof o && !Array.isArray(o)) t[n] = S(o);
        else t[n] = o;
        return t;
      }, Object.create(null));
}

exports.extract = O;
exports.parse = x;

exports.stringify = function (t, o) {
  if (!t) return '';
  j(
    (o = module11(
      {
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
      },
      o
    )).arrayFormatSeparator
  );

  for (
    var u = function (n) {
        return o.skipNull ? null === (u = t[n]) || undefined === u : o.skipEmptyString && '' === t[n];
        var u;
      },
      c = v(o),
      s = {},
      l = 0,
      f = Object.keys(t);
    l < f.length;
    l++
  ) {
    var p = f[l];
    if (!u(p)) s[p] = t[p];
  }

  var y = Object.keys(s);
  if (false !== o.sort) y.sort(o.sort);
  return y
    .map(function (n) {
      var u = t[n];
      return undefined === u ? '' : null === u ? h(n, o) : Array.isArray(u) ? u.reduce(c(n), []).join('&') : h(n, o) + '=' + h(u, o);
    })
    .filter(function (t) {
      return t.length > 0;
    })
    .join('&');
};

exports.parseUrl = function (o, u) {
  u = module11(
    {
      decode: true,
    },
    u
  );
  var c = module538(o, '#'),
    s = module12(c, 2),
    l = s[0],
    f = s[1];
  return module11(
    {
      url: l.split('?')[0] || '',
      query: x(O(o), u),
    },
    u && u.parseFragmentIdentifier && f
      ? {
          fragmentIdentifier: k(f, u),
        }
      : {}
  );
};

exports.stringifyUrl = function (t, o) {
  o = module11(
    {
      encode: true,
      strict: true,
    },
    o
  );
  var u = F(t.url).split('?')[0] || '',
    c = exports.extract(t.url),
    s = exports.parse(c, {
      sort: false,
    }),
    l = module11(s, t.query),
    f = exports.stringify(l, o);
  if (f) f = '?' + f;
  var p = A(t.url);
  if (t.fragmentIdentifier) p = '#' + h(t.fragmentIdentifier, o);
  return '' + u + f + p;
};

exports.pick = function (t, o, u) {
  u = module11(
    {
      parseFragmentIdentifier: true,
    },
    u
  );
  var c = exports.parseUrl(t, u),
    s = c.url,
    l = c.query,
    f = c.fragmentIdentifier;
  return exports.stringifyUrl(
    {
      url: s,
      query: module539(l, o),
      fragmentIdentifier: f,
    },
    u
  );
};

exports.exclude = function (t, n, o) {
  var u = Array.isArray(n)
    ? function (t) {
        return !n.includes(t);
      }
    : function (t, o) {
        return !n(t, o);
      };
  return exports.pick(t, u, o);
};
