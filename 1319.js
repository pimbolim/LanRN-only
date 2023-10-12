var module1320 = require('./1320'),
  module1321 = require('./1321'),
  o = {
    brackets: function (n) {
      return n + '[]';
    },
    indices: function (n, t) {
      return n + '[' + t + ']';
    },
    repeat: function (n) {
      return n;
    },
  },
  l = Date.prototype.toISOString,
  c = {
    delimiter: '&',
    encode: true,
    encoder: module1320.encode,
    encodeValuesOnly: false,
    serializeDate: function (n) {
      return l.call(n);
    },
    skipNulls: false,
    strictNullHandling: false,
  },
  f = function t(o, l, f, s, u, y, p, v, b, O, k, w) {
    var D = o;
    if ('function' == typeof p) D = p(l, D);
    else if (D instanceof Date) D = O(D);
    else if (null === D) {
      if (s) return y && !w ? y(l, c.encoder) : l;
      D = '';
    }
    if ('string' == typeof D || 'number' == typeof D || 'boolean' == typeof D || module1320.isBuffer(D))
      return y ? [k(w ? l : y(l, c.encoder)) + '=' + k(y(D, c.encoder))] : [k(l) + '=' + k(String(D))];
    var N,
      h = [];
    if (undefined === D) return h;
    if (Array.isArray(p)) N = p;
    else {
      var A = Object.keys(D);
      N = v ? A.sort(v) : A;
    }

    for (var j = 0; j < N.length; ++j) {
      var z = N[j];
      if (!(u && null === D[z]))
        h = Array.isArray(D) ? h.concat(t(D[z], f(l, z), f, s, u, y, p, v, b, O, k, w)) : h.concat(t(D[z], l + (b ? '.' + z : '[' + z + ']'), f, s, u, y, p, v, b, O, k, w));
    }

    return h;
  };

module.exports = function (l, s) {
  var u = l,
    y = s ? module1320.assign({}, s) : {};
  if (null !== y.encoder && undefined !== y.encoder && 'function' != typeof y.encoder) throw new TypeError('Encoder has to be a function.');
  var p = undefined === y.delimiter ? c.delimiter : y.delimiter,
    v = 'boolean' == typeof y.strictNullHandling ? y.strictNullHandling : c.strictNullHandling,
    b = 'boolean' == typeof y.skipNulls ? y.skipNulls : c.skipNulls,
    O = 'boolean' == typeof y.encode ? y.encode : c.encode,
    k = 'function' == typeof y.encoder ? y.encoder : c.encoder,
    w = 'function' == typeof y.sort ? y.sort : null,
    D = undefined !== y.allowDots && y.allowDots,
    N = 'function' == typeof y.serializeDate ? y.serializeDate : c.serializeDate,
    h = 'boolean' == typeof y.encodeValuesOnly ? y.encodeValuesOnly : c.encodeValuesOnly;
  if (undefined === y.format) y.format = module1321.default;
  else if (!Object.prototype.hasOwnProperty.call(module1321.formatters, y.format)) throw new TypeError('Unknown format option provided.');
  var A,
    j,
    z = module1321.formatters[y.format];
  if ('function' == typeof y.filter) u = (j = y.filter)('', u);
  else if (Array.isArray(y.filter)) A = j = y.filter;
  var H,
    V = [];
  if ('object' != typeof u || null === u) return '';
  H = y.arrayFormat in o ? y.arrayFormat : 'indices' in y ? (y.indices ? 'indices' : 'repeat') : 'indices';
  var E = o[H];
  if (!A) A = Object.keys(u);
  if (w) A.sort(w);

  for (var S = 0; S < A.length; ++S) {
    var x = A[S];
    if (!(b && null === u[x])) V = V.concat(f(u[x], x, E, v, b, O ? k : null, j, w, D, N, z, h));
  }

  var F = V.join(p),
    P = true === y.addQueryPrefix ? '?' : '';
  return F.length > 0 ? P + F : '';
};
