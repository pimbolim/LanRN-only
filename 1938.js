var t, n;
t = this;

n = function () {
  var t =
    t ||
    (function (t, n) {
      c.Hasher = v.extend({
        cfg: u.extend(),
        init: function (t) {
          this.cfg = this.cfg.extend(t);
          this.reset();
        },
        reset: function () {
          v.reset.call(this);

          this._doReset();
        },
        update: function (t) {
          this._append(t);

          this._process();

          return this;
        },
        finalize: function (t) {
          if (t) this._append(t);
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (t) {
          return function (n, o) {
            return new t.init(o).finalize(n);
          };
        },
        _createHmacHelper: function (t) {
          return function (n, o) {
            return new w.HMAC.init(t, o).finalize(n);
          };
        },
      });

      var o =
          Object.create ||
          (function () {
            function t() {}

            return function (n) {
              var o;
              t.prototype = n;
              o = new t();
              t.prototype = null;
              return o;
            };
          })(),
        s = {},
        c = (s.lib = {}),
        u = (c.Base = {
          extend: function (t) {
            var n = o(this);
            if (t) n.mixIn(t);
            if (!(n.hasOwnProperty('init') && this.init !== n.init))
              n.init = function () {
                n.$super.init.apply(this, arguments);
              };
            n.init.prototype = n;
            n.$super = this;
            return n;
          },
          create: function () {
            var t = this.extend();
            t.init.apply(t, arguments);
            return t;
          },
          init: function () {},
          mixIn: function (t) {
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);

            if (t.hasOwnProperty('toString')) this.toString = t.toString;
          },
          clone: function () {
            return this.init.prototype.extend(this);
          },
        }),
        f = (c.WordArray = u.extend({
          init: function (t, n) {
            t = this.words = t || [];
            this.sigBytes = undefined != n ? n : 4 * t.length;
          },
          toString: function (t) {
            return (t || p).stringify(this);
          },
          concat: function (t) {
            var n = this.words,
              o = t.words,
              s = this.sigBytes,
              c = t.sigBytes;
            if ((this.clamp(), s % 4))
              for (var u = 0; u < c; u++) {
                var f = (o[u >>> 2] >>> (24 - (u % 4) * 8)) & 255;
                n[(s + u) >>> 2] |= f << (24 - ((s + u) % 4) * 8);
              }
            else for (u = 0; u < c; u += 4) n[(s + u) >>> 2] = o[u >>> 2];
            this.sigBytes += c;
            return this;
          },
          clamp: function () {
            var n = this.words,
              o = this.sigBytes;
            n[o >>> 2] &= 4294967295 << (32 - (o % 4) * 8);
            n.length = t.ceil(o / 4);
          },
          clone: function () {
            var t = u.clone.call(this);
            t.words = this.words.slice(0);
            return t;
          },
          random: function (n) {
            for (
              var o,
                s = [],
                c = function (n) {
                  n = n;
                  var o = 987654321,
                    s = 4294967295;
                  return function () {
                    var c = (((o = (36969 * (65535 & o) + (o >> 16)) & s) << 16) + (n = (18e3 * (65535 & n) + (n >> 16)) & s)) & s;
                    c /= 4294967296;
                    return (c += 0.5) * (t.random() > 0.5 ? 1 : -1);
                  };
                },
                u = 0;
              u < n;
              u += 4
            ) {
              var h = c(4294967296 * (o || t.random()));
              o = 987654071 * h();
              s.push((4294967296 * h()) | 0);
            }

            return new f.init(s, n);
          },
        })),
        h = (s.enc = {}),
        p = (h.Hex = {
          stringify: function (t) {
            for (var n = t.words, o = t.sigBytes, s = [], c = 0; c < o; c++) {
              var u = (n[c >>> 2] >>> (24 - (c % 4) * 8)) & 255;
              s.push((u >>> 4).toString(16));
              s.push((15 & u).toString(16));
            }

            return s.join('');
          },
          parse: function (t) {
            for (var n = t.length, o = [], s = 0; s < n; s += 2) o[s >>> 3] |= parseInt(t.substr(s, 2), 16) << (24 - (s % 8) * 4);

            return new f.init(o, n / 2);
          },
        }),
        l = (h.Latin1 = {
          stringify: function (t) {
            for (var n = t.words, o = t.sigBytes, s = [], c = 0; c < o; c++) {
              var u = (n[c >>> 2] >>> (24 - (c % 4) * 8)) & 255;
              s.push(String.fromCharCode(u));
            }

            return s.join('');
          },
          parse: function (t) {
            for (var n = t.length, o = [], s = 0; s < n; s++) o[s >>> 2] |= (255 & t.charCodeAt(s)) << (24 - (s % 4) * 8);

            return new f.init(o, n);
          },
        }),
        y = (h.Utf8 = {
          stringify: function (t) {
            try {
              return decodeURIComponent(escape(l.stringify(t)));
            } catch (t) {
              throw new Error('Malformed UTF-8 data');
            }
          },
          parse: function (t) {
            return l.parse(unescape(encodeURIComponent(t)));
          },
        }),
        v = (c.BufferedBlockAlgorithm = u.extend({
          reset: function () {
            this._data = new f.init();
            this._nDataBytes = 0;
          },
          _append: function (t) {
            if ('string' == typeof t) t = y.parse(t);

            this._data.concat(t);

            this._nDataBytes += t.sigBytes;
          },
          _process: function (n) {
            var o = this._data,
              s = o.words,
              c = o.sigBytes,
              u = this.blockSize,
              h = c / (4 * u),
              p = (h = n ? t.ceil(h) : t.max((0 | h) - this._minBufferSize, 0)) * u,
              l = t.min(4 * p, c);

            if (p) {
              for (var y = 0; y < p; y += u) this._doProcessBlock(s, y);

              var v = s.splice(0, p);
              o.sigBytes -= l;
            }

            return new f.init(v, l);
          },
          clone: function () {
            var t = u.clone.call(this);
            t._data = this._data.clone();
            return t;
          },
          _minBufferSize: 0,
        })),
        w = (s.algo = {});

      return s;
    })(Math);

  return t;
};

if ('object' == typeof exports) module.exports = exports = n();
else if ('function' == typeof define && define.amd) define([], n);
else t.CryptoJS = n();
