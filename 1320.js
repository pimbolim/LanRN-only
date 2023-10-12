var t = Object.prototype.hasOwnProperty,
  o = (function () {
    for (var t = [], o = 0; o < 256; ++o) t.push('%' + ((o < 16 ? '0' : '') + o.toString(16)).toUpperCase());

    return t;
  })(),
  n = function (t) {
    for (var o; t.length; ) {
      var n = t.pop();

      if (((o = n.obj[n.prop]), Array.isArray(o))) {
        for (var c = [], u = 0; u < o.length; ++u) undefined !== o[u] && c.push(o[u]);

        n.obj[n.prop] = c;
      }
    }

    return o;
  },
  c = function (t, o) {
    for (var n = o && o.plainObjects ? Object.create(null) : {}, c = 0; c < t.length; ++c) undefined !== t[c] && (n[c] = t[c]);

    return n;
  };

module.exports = {
  arrayToObject: c,
  assign: function (t, o) {
    return Object.keys(o).reduce(function (t, n) {
      t[n] = o[n];
      return t;
    }, t);
  },
  compact: function (t) {
    for (
      var o = [
          {
            obj: {
              o: t,
            },
            prop: 'o',
          },
        ],
        c = [],
        u = 0;
      u < o.length;
      ++u
    )
      for (var f = o[u], p = f.obj[f.prop], s = Object.keys(p), y = 0; y < s.length; ++y) {
        var l = s[y],
          b = p[l];

        if ('object' == typeof b && null !== b && -1 === c.indexOf(b)) {
          o.push({
            obj: p,
            prop: l,
          });
          c.push(b);
        }
      }

    return n(o);
  },
  decode: function (t) {
    try {
      return decodeURIComponent(t.replace(/\+/g, ' '));
    } catch (o) {
      return t;
    }
  },
  encode: function (t) {
    if (0 === t.length) return t;

    for (var n = 'string' == typeof t ? t : String(t), c = '', u = 0; u < n.length; ++u) {
      var f = n.charCodeAt(u);
      if (45 === f || 46 === f || 95 === f || 126 === f || (f >= 48 && f <= 57) || (f >= 65 && f <= 90) || (f >= 97 && f <= 122)) c += n.charAt(u);
      else if (f < 128) c += o[f];
      else if (f < 2048) c += o[192 | (f >> 6)] + o[128 | (63 & f)];
      else if (f < 55296 || f >= 57344) c += o[224 | (f >> 12)] + o[128 | ((f >> 6) & 63)] + o[128 | (63 & f)];
      else {
        u += 1;
        f = 65536 + (((1023 & f) << 10) | (1023 & n.charCodeAt(u)));
        c += o[240 | (f >> 18)] + o[128 | ((f >> 12) & 63)] + o[128 | ((f >> 6) & 63)] + o[128 | (63 & f)];
      }
    }

    return c;
  },
  isBuffer: function (t) {
    return null !== t && undefined !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
  },
  isRegExp: function (t) {
    return '[object RegExp]' === Object.prototype.toString.call(t);
  },
  merge: function o(n, u, f) {
    if (!u) return n;

    if ('object' != typeof u) {
      if (Array.isArray(n)) n.push(u);
      else {
        if ('object' != typeof n) return [n, u];
        if (f.plainObjects || f.allowPrototypes || !t.call(Object.prototype, u)) n[u] = true;
      }
      return n;
    }

    if ('object' != typeof n) return [n].concat(u);
    var p = n;
    if (Array.isArray(n) && !Array.isArray(u)) p = c(n, f);

    if (Array.isArray(n) && Array.isArray(u)) {
      u.forEach(function (c, u) {
        if (t.call(n, u)) n[u] && 'object' == typeof n[u] ? (n[u] = o(n[u], c, f)) : n.push(c);
        else n[u] = c;
      });
      return n;
    } else
      return Object.keys(u).reduce(function (n, c) {
        var p = u[c];
        if (t.call(n, c)) n[c] = o(n[c], p, f);
        else n[c] = p;
        return n;
      }, p);
  },
};
