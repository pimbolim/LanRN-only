var module1320 = require('./1320'),
  o = Object.prototype.hasOwnProperty,
  l = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: module1320.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1e3,
    plainObjects: false,
    strictNullHandling: false,
  },
  n = function (t, n) {
    for (
      var c = {}, p = n.ignoreQueryPrefix ? t.replace(/^\?/, '') : t, s = n.parameterLimit === 1 / 0 ? undefined : n.parameterLimit, u = p.split(n.delimiter, s), y = 0;
      y < u.length;
      ++y
    ) {
      var f,
        b,
        O = u[y],
        h = O.indexOf(']='),
        j = -1 === h ? O.indexOf('=') : h + 1;

      if (-1 === j) {
        f = n.decoder(O, l.decoder);
        b = n.strictNullHandling ? null : '';
      } else {
        f = n.decoder(O.slice(0, j), l.decoder);
        b = n.decoder(O.slice(j + 1), l.decoder);
      }

      if (o.call(c, f)) c[f] = [].concat(c[f]).concat(b);
      else c[f] = b;
    }

    return c;
  },
  c = function (t, o, l) {
    for (var n = o, c = t.length - 1; c >= 0; --c) {
      var p,
        s = t[c];
      if ('[]' === s) p = (p = []).concat(n);
      else {
        p = l.plainObjects ? Object.create(null) : {};
        var u = '[' === s.charAt(0) && ']' === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
          y = parseInt(u, 10);
        if (!isNaN(y) && s !== u && String(y) === u && y >= 0 && l.parseArrays && y <= l.arrayLimit) (p = [])[y] = n;
        else p[u] = n;
      }
      n = p;
    }

    return n;
  },
  p = function (t, l, n) {
    if (t) {
      var p = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
        s = /(\[[^[\]]*])/g,
        u = /(\[[^[\]]*])/.exec(p),
        y = u ? p.slice(0, u.index) : p,
        f = [];

      if (y) {
        if (!n.plainObjects && o.call(Object.prototype, y) && !n.allowPrototypes) return;
        f.push(y);
      }

      for (var b = 0; null !== (u = s.exec(p)) && b < n.depth; ) {
        if (((b += 1), !n.plainObjects && o.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)) return;
        f.push(u[1]);
      }

      if (u) f.push('[' + p.slice(u.index) + ']');
      return c(f, l, n);
    }
  };

module.exports = function (o, c) {
  var s = c ? module1320.assign({}, c) : {};
  if (null !== s.decoder && undefined !== s.decoder && 'function' != typeof s.decoder) throw new TypeError('Decoder has to be a function.');
  if (
    ((s.ignoreQueryPrefix = true === s.ignoreQueryPrefix),
    (s.delimiter = 'string' == typeof s.delimiter || module1320.isRegExp(s.delimiter) ? s.delimiter : l.delimiter),
    (s.depth = 'number' == typeof s.depth ? s.depth : l.depth),
    (s.arrayLimit = 'number' == typeof s.arrayLimit ? s.arrayLimit : l.arrayLimit),
    (s.parseArrays = false !== s.parseArrays),
    (s.decoder = 'function' == typeof s.decoder ? s.decoder : l.decoder),
    (s.allowDots = 'boolean' == typeof s.allowDots ? s.allowDots : l.allowDots),
    (s.plainObjects = 'boolean' == typeof s.plainObjects ? s.plainObjects : l.plainObjects),
    (s.allowPrototypes = 'boolean' == typeof s.allowPrototypes ? s.allowPrototypes : l.allowPrototypes),
    (s.parameterLimit = 'number' == typeof s.parameterLimit ? s.parameterLimit : l.parameterLimit),
    (s.strictNullHandling = 'boolean' == typeof s.strictNullHandling ? s.strictNullHandling : l.strictNullHandling),
    '' === o || null === o || undefined === o)
  )
    return s.plainObjects ? Object.create(null) : {};

  for (var u = 'string' == typeof o ? n(o, s) : o, y = s.plainObjects ? Object.create(null) : {}, f = Object.keys(u), b = 0; b < f.length; ++b) {
    var O = f[b],
      h = p(O, u[O], s);
    y = module1320.merge(y, h, s);
  }

  return module1320.compact(y);
};
