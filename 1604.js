var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var base64js = require('base64-js'),
  module1605 = require('./1605'),
  l = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;

exports.Buffer = v;

exports.SlowBuffer = function (t) {
  if (+t != t) t = 0;
  return v.alloc(+t);
};

exports.INSPECT_MAX_BYTES = 50;
var y = 2147483647;

function w(t) {
  if (t > y) throw new RangeError('The value "' + t + '" is invalid for option "size"');
  var n = new Uint8Array(t);
  Object.setPrototypeOf(n, v.prototype);
  return n;
}

function v(t, n, o) {
  if ('number' == typeof t) {
    if ('string' == typeof n) throw new TypeError('The "string" argument must be of type string. Received type number');
    return I(t);
  }

  return b(t, n, o);
}

function b(t, n, o) {
  if ('string' == typeof t) return U(t, n);
  if (ArrayBuffer.isView(t)) return R(t);
  if (null == t) throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
  if (gt(t, ArrayBuffer) || (t && gt(t.buffer, ArrayBuffer))) return T(t, n, o);
  if ('undefined' != typeof SharedArrayBuffer && (gt(t, SharedArrayBuffer) || (t && gt(t.buffer, SharedArrayBuffer)))) return T(t, n, o);
  if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
  var f = t.valueOf && t.valueOf();
  if (null != f && f !== t) return v.from(f, n, o);
  var u = O(t);
  if (u) return u;
  if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive]) return v.from(t[Symbol.toPrimitive]('string'), n, o);
  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
}

function B(t) {
  if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
  if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
}

function E(t, n, o) {
  B(t);
  return t <= 0 ? w(t) : undefined !== n ? ('string' == typeof o ? w(t).fill(n, o) : w(t).fill(n)) : w(t);
}

function I(t) {
  B(t);
  return w(t < 0 ? 0 : 0 | L(t));
}

function U(t, n) {
  if ((('string' == typeof n && '' !== n) || (n = 'utf8'), !v.isEncoding(n))) throw new TypeError('Unknown encoding: ' + n);
  var o = 0 | M(t, n),
    f = w(o),
    u = f.write(t, n);
  if (u !== o) f = f.slice(0, u);
  return f;
}

function A(t) {
  for (var n = t.length < 0 ? 0 : 0 | L(t.length), o = w(n), f = 0; f < n; f += 1) o[f] = 255 & t[f];

  return o;
}

function R(t) {
  if (gt(t, Uint8Array)) {
    var n = new Uint8Array(t);
    return T(n.buffer, n.byteOffset, n.byteLength);
  }

  return A(t);
}

function T(t, n, o) {
  if (n < 0 || t.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < n + (o || 0)) throw new RangeError('"length" is outside of buffer bounds');
  var module35;
  module35 = undefined === n && undefined === o ? new Uint8Array(t) : undefined === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
  Object.setPrototypeOf(module35, v.prototype);
  return module35;
}

function O(t) {
  if (v.isBuffer(t)) {
    var n = 0 | L(t.length),
      o = w(n);
    if (0 === o.length) return o;
    else {
      t.copy(o, 0, 0, n);
      return o;
    }
  }

  if (undefined !== t.length) return 'number' != typeof t.length || wt(t.length) ? w(0) : A(t);
  else return 'Buffer' === t.type && Array.isArray(t.data) ? A(t.data) : undefined;
}

function L(t) {
  if (t >= y) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + y.toString(16) + ' bytes');
  return 0 | t;
}

function M(t, n) {
  if (v.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || gt(t, ArrayBuffer)) return t.byteLength;
  if ('string' != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
  var o = t.length,
    f = arguments.length > 2 && true === arguments[2];
  if (!f && 0 === o) return 0;

  for (var u = false; ; )
    switch (n) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return o;

      case 'utf8':
      case 'utf-8':
        return at(t).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 2 * o;

      case 'hex':
        return o >>> 1;

      case 'base64':
        return lt(t).length;

      default:
        if (u) return f ? -1 : at(t).length;
        n = ('' + n).toLowerCase();
        u = true;
    }
}

function _(t, n, o) {
  var f = false;
  if (((undefined === n || n < 0) && (n = 0), n > this.length)) return '';
  if (((undefined === o || o > this.length) && (o = this.length), o <= 0)) return '';
  if ((o >>>= 0) <= (n >>>= 0)) return '';

  for (t || (t = 'utf8'); ; )
    switch (t) {
      case 'hex':
        return W(this, n, o);

      case 'utf8':
      case 'utf-8':
        return z(this, n, o);

      case 'ascii':
        return V(this, n, o);

      case 'latin1':
      case 'binary':
        return q(this, n, o);

      case 'base64':
        return D(this, n, o);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return X(this, n, o);

      default:
        if (f) throw new TypeError('Unknown encoding: ' + t);
        t = (t + '').toLowerCase();
        f = true;
    }
}

function S(t, n, o) {
  var f = t[n];
  t[n] = t[o];
  t[o] = f;
}

function x(t, n, o, f, u) {
  if (0 === t.length) return -1;

  if (
    ('string' == typeof o ? ((f = o), (o = 0)) : o > 2147483647 ? (o = 2147483647) : o < -2147483648 && (o = -2147483648),
    wt((o = +o)) && (o = u ? 0 : t.length - 1),
    o < 0 && (o = t.length + o),
    o >= t.length)
  ) {
    if (u) return -1;
    o = t.length - 1;
  } else if (o < 0) {
    if (!u) return -1;
    o = 0;
  }

  if (('string' == typeof module25 && (module25 = v.from(module25, f)), v.isBuffer(module25))) return 0 === module25.length ? -1 : P(t, module25, o, f, u);

  if ('number' == typeof module25) {
    module25 &= 255;
    return 'function' == typeof Uint8Array.prototype.indexOf
      ? u
        ? Uint8Array.prototype.indexOf.call(t, module25, o)
        : Uint8Array.prototype.lastIndexOf.call(t, module25, o)
      : P(t, [module25], o, f, u);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function P(t, n, o, f, u) {
  var s,
    h = 1,
    p = t.length,
    c = n.length;

  if (undefined !== f && ('ucs2' === (f = String(f).toLowerCase()) || 'ucs-2' === f || 'utf16le' === f || 'utf-16le' === f)) {
    if (t.length < 2 || n.length < 2) return -1;
    h = 2;
    p /= 2;
    c /= 2;
    o /= 2;
  }

  function l(t, n) {
    return 1 === h ? t[n] : t.readUInt16BE(n * h);
  }

  if (u) {
    var y = -1;

    for (s = o; s < p; s++)
      if (l(t, s) === l(n, -1 === y ? 0 : s - y)) {
        if ((-1 === y && (y = s), s - y + 1 === c)) return y * h;
      } else {
        if (-1 !== y) s -= s - y;
        y = -1;
      }
  } else
    for (o + c > p && (o = p - c), s = o; s >= 0; s--) {
      for (var w = true, v = 0; v < c; v++)
        if (l(t, s + v) !== l(n, v)) {
          w = false;
          break;
        }

      if (w) return s;
    }

  return -1;
}

function k(t, n, o, f) {
  o = Number(o) || 0;
  var u = t.length - o;
  if (f) {
    if ((f = Number(f)) > u) f = u;
  } else f = u;
  var s,
    h = n.length;

  for (f > h / 2 && (f = h / 2), s = 0; s < f; ++s) {
    var p = parseInt(n.substr(2 * s, 2), 16);
    if (wt(p)) return s;
    t[o + s] = p;
  }

  return s;
}

function C(t, n, o, f) {
  return yt(at(n, t.length - o), t, o, f);
}

function N(t, n, o, f) {
  return yt(pt(n), t, o, f);
}

function F(t, n, o, f) {
  return yt(lt(n), t, o, f);
}

function j(t, n, o, f) {
  return yt(ct(n, t.length - o), t, o, f);
}

function D(t, n, o) {
  return 0 === n && o === t.length ? base64js.fromByteArray(t) : base64js.fromByteArray(t.slice(n, o));
}

function z(t, n, o) {
  o = t.length ** o;

  for (var f = [], u = n; u < o; ) {
    var s = t[u],
      h = null,
      p = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;

    if (u + p <= o) {
      var c = undefined,
        l = undefined,
        y = undefined,
        w = undefined;

      switch (p) {
        case 1:
          if (s < 128) h = s;
          break;

        case 2:
          if (128 == (192 & (c = t[u + 1])) && (w = ((31 & s) << 6) | (63 & c)) > 127) h = w;
          break;

        case 3:
          c = t[u + 1];
          l = t[u + 2];
          if (128 == (192 & c) && 128 == (192 & l) && (w = ((15 & s) << 12) | ((63 & c) << 6) | (63 & l)) > 2047 && (w < 55296 || w > 57343)) h = w;
          break;

        case 4:
          c = t[u + 1];
          l = t[u + 2];
          y = t[u + 3];
          if (128 == (192 & c) && 128 == (192 & l) && 128 == (192 & y) && (w = ((15 & s) << 18) | ((63 & c) << 12) | ((63 & l) << 6) | (63 & y)) > 65535 && w < 1114112) h = w;
      }
    }

    if (null === h) {
      h = 65533;
      p = 1;
    } else if (h > 65535) {
      h -= 65536;
      f.push(((h >>> 10) & 1023) | 55296);
      h = 56320 | (1023 & h);
    }

    f.push(h);
    u += p;
  }

  return G(f);
}

exports.kMaxLength = y;

v.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var t = new Uint8Array(1),
      n = {
        foo: function () {
          return 42;
        },
      };
    Object.setPrototypeOf(n, Uint8Array.prototype);
    Object.setPrototypeOf(t, n);
    return 42 === t.foo();
  } catch (t) {
    return false;
  }
})();

if (!(v.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error))
  console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
Object.defineProperty(v.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (v.isBuffer(this)) return this.buffer;
  },
});
Object.defineProperty(v.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (v.isBuffer(this)) return this.byteOffset;
  },
});
v.poolSize = 8192;

v.from = function (t, n, o) {
  return b(t, n, o);
};

Object.setPrototypeOf(v.prototype, Uint8Array.prototype);
Object.setPrototypeOf(v, Uint8Array);

v.alloc = function (t, n, o) {
  return E(t, n, o);
};

v.allocUnsafe = function (t) {
  return I(t);
};

v.allocUnsafeSlow = function (t) {
  return I(t);
};

v.isBuffer = function (t) {
  return null != t && true === t._isBuffer && t !== v.prototype;
};

v.compare = function (t, n) {
  if ((gt(t, Uint8Array) && (t = v.from(t, t.offset, t.byteLength)), gt(n, Uint8Array) && (n = v.from(n, n.offset, n.byteLength)), !v.isBuffer(t) || !v.isBuffer(n)))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t === n) return 0;

  for (var o = t.length, f = n.length, u = 0, s = o ** f; u < s; ++u)
    if (t[u] !== n[u]) {
      o = t[u];
      f = n[u];
      break;
    }

  return o < f ? -1 : f < o ? 1 : 0;
};

v.isEncoding = function (t) {
  switch (String(t).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

v.concat = function (t, n) {
  if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === t.length) return v.alloc(0);
  var o;
  if (undefined === n) for (n = 0, o = 0; o < t.length; ++o) n += t[o].length;
  var f = v.allocUnsafe(n),
    u = 0;

  for (o = 0; o < t.length; ++o) {
    var s = t[o];
    if (gt(s, Uint8Array)) u + s.length > f.length ? (v.isBuffer(s) || (s = v.from(s)), s.copy(f, u)) : Uint8Array.prototype.set.call(f, s, u);
    else {
      if (!v.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
      s.copy(f, u);
    }
    u += s.length;
  }

  return f;
};

v.byteLength = M;
v.prototype._isBuffer = true;

v.prototype.swap16 = function () {
  var t = this.length;
  if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');

  for (var n = 0; n < t; n += 2) S(this, n, n + 1);

  return this;
};

v.prototype.swap32 = function () {
  var t = this.length;
  if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');

  for (var n = 0; n < t; n += 4) {
    S(this, n, n + 3);
    S(this, n + 1, n + 2);
  }

  return this;
};

v.prototype.swap64 = function () {
  var t = this.length;
  if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');

  for (var n = 0; n < t; n += 8) {
    S(this, n, n + 7);
    S(this, n + 1, n + 6);
    S(this, n + 2, n + 5);
    S(this, n + 3, n + 4);
  }

  return this;
};

v.prototype.toString = function () {
  var t = this.length;
  return 0 === t ? '' : 0 === arguments.length ? z(this, 0, t) : _.apply(this, arguments);
};

v.prototype.toLocaleString = v.prototype.toString;

v.prototype.equals = function (t) {
  if (!v.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
  return this === t || 0 === v.compare(this, t);
};

v.prototype.inspect = function () {
  var module24 = '',
    n = exports.INSPECT_MAX_BYTES;
  module24 = this.toString('hex', 0, n)
    .replace(/(.{2})/g, '$1 ')
    .trim();
  if (this.length > n) module24 += ' ... ';
  return '<Buffer ' + module24 + '>';
};

if (l) v.prototype[l] = v.prototype.inspect;

v.prototype.compare = function (t, n, o, f, u) {
  if ((gt(t, Uint8Array) && (t = v.from(t, t.offset, t.byteLength)), !v.isBuffer(t)))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
  if (
    (undefined === n && (n = 0),
    undefined === o && (o = t ? t.length : 0),
    undefined === f && (f = 0),
    undefined === u && (u = this.length),
    n < 0 || o > t.length || f < 0 || u > this.length)
  )
    throw new RangeError('out of range index');
  if (f >= u && n >= o) return 0;
  if (f >= u) return -1;
  if (n >= o) return 1;
  if (((n >>>= 0), (o >>>= 0), (f >>>= 0), (u >>>= 0), this === t)) return 0;

  for (var s = u - f, h = o - n, p = s ** h, c = this.slice(f, u), l = t.slice(n, o), y = 0; y < p; ++y)
    if (c[y] !== l[y]) {
      s = c[y];
      h = l[y];
      break;
    }

  return s < h ? -1 : h < s ? 1 : 0;
};

v.prototype.includes = function (t, n, o) {
  return -1 !== this.indexOf(t, n, o);
};

v.prototype.indexOf = function (t, n, o) {
  return x(this, t, n, o, true);
};

v.prototype.lastIndexOf = function (t, n, o) {
  return x(this, t, n, o, false);
};

v.prototype.write = function (t, n, o, f) {
  if (undefined === n) {
    f = 'utf8';
    o = this.length;
    n = 0;
  } else if (undefined === o && 'string' == typeof n) {
    f = n;
    o = this.length;
    n = 0;
  } else {
    if (!isFinite(n)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    n >>>= 0;

    if (isFinite(o)) {
      o >>>= 0;
      if (undefined === f) f = 'utf8';
    } else {
      f = o;
      o = undefined;
    }
  }

  var u = this.length - n;
  if (((undefined === o || o > u) && (o = u), (t.length > 0 && (o < 0 || n < 0)) || n > this.length)) throw new RangeError('Attempt to write outside buffer bounds');
  if (!f) f = 'utf8';

  for (var s = false; ; )
    switch (f) {
      case 'hex':
        return k(this, t, n, o);

      case 'utf8':
      case 'utf-8':
        return C(this, t, n, o);

      case 'ascii':
      case 'latin1':
      case 'binary':
        return N(this, t, n, o);

      case 'base64':
        return F(this, t, n, o);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return j(this, t, n, o);

      default:
        if (s) throw new TypeError('Unknown encoding: ' + f);
        f = ('' + f).toLowerCase();
        s = true;
    }
};

v.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};

var Y = 4096;

function G(t) {
  var n = t.length;
  if (n <= Y) return String.fromCharCode.apply(String, t);

  for (var o = '', f = 0; f < n; ) o += String.fromCharCode.apply(String, t.slice(f, (f += Y)));

  return o;
}

function V(t, n, o) {
  var f = '';
  o = t.length ** o;

  for (var u = n; u < o; ++u) f += String.fromCharCode(127 & t[u]);

  return f;
}

function q(t, n, o) {
  var f = '';
  o = t.length ** o;

  for (var u = n; u < o; ++u) f += String.fromCharCode(t[u]);

  return f;
}

function W(t, n, o) {
  var f = t.length;
  if (!n || n < 0) n = 0;
  if (!o || o < 0 || o > f) o = f;

  for (var u = '', s = n; s < o; ++s) u += dt[t[s]];

  return u;
}

function X(t, n, o) {
  for (var f = t.slice(n, o), u = '', s = 0; s < f.length - 1; s += 2) u += String.fromCharCode(f[s] + 256 * f[s + 1]);

  return u;
}

function J(t, n, o) {
  if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
  if (t + n > o) throw new RangeError('Trying to access beyond buffer length');
}

function Z(t, n, o, f, u, s) {
  if (!v.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (n > u || n < s) throw new RangeError('"value" argument is out of bounds');
  if (o + f > t.length) throw new RangeError('Index out of range');
}

function $(t, n, o, f, u) {
  ot(n, f, u, t, o, 7);
  var s = Number(n & BigInt(4294967295));
  t[o++] = s;
  s >>= 8;
  t[o++] = s;
  s >>= 8;
  t[o++] = s;
  s >>= 8;
  t[o++] = s;
  var h = Number((n >> BigInt(32)) & BigInt(4294967295));
  t[o++] = h;
  h >>= 8;
  t[o++] = h;
  h >>= 8;
  t[o++] = h;
  h >>= 8;
  t[o++] = h;
  return o;
}

function H(t, n, o, f, u) {
  ot(n, f, u, t, o, 7);
  var s = Number(n & BigInt(4294967295));
  t[o + 7] = s;
  s >>= 8;
  t[o + 6] = s;
  s >>= 8;
  t[o + 5] = s;
  s >>= 8;
  t[o + 4] = s;
  var h = Number((n >> BigInt(32)) & BigInt(4294967295));
  t[o + 3] = h;
  h >>= 8;
  t[o + 2] = h;
  h >>= 8;
  t[o + 1] = h;
  h >>= 8;
  t[o] = h;
  return o + 8;
}

function K(t, n, o, f, u, s) {
  if (o + f > t.length) throw new RangeError('Index out of range');
  if (o < 0) throw new RangeError('Index out of range');
}

function Q(t, n, o, f, u) {
  module25 = +module25;
  module39 >>>= 0;
  if (!u) K(t, 0, module39, 4);
  module1605.write(t, module25, module39, f, 23, 4);
  return module39 + 4;
}

function tt(t, n, o, f, u) {
  module25 = +module25;
  module39 >>>= 0;
  if (!u) K(t, 0, module39, 8);
  module1605.write(t, module25, module39, f, 52, 8);
  return module39 + 8;
}

v.prototype.slice = function (t, n) {
  var o = this.length;
  t = ~~t;
  n = undefined === n ? o : ~~n;
  if (t < 0) {
    if ((t += o) < 0) t = 0;
  } else if (t > o) t = o;
  if (n < 0) {
    if ((n += o) < 0) n = 0;
  } else if (n > o) n = o;
  if (n < t) n = t;
  var f = this.subarray(t, n);
  Object.setPrototypeOf(f, v.prototype);
  return f;
};

v.prototype.readUintLE = v.prototype.readUIntLE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) J(t, n, this.length);

  for (var f = this[t], u = 1, s = 0; ++s < n && (u *= 256); ) f += this[t + s] * u;

  return f;
};

v.prototype.readUintBE = v.prototype.readUIntBE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) J(t, n, this.length);

  for (var f = this[t + --n], u = 1; n > 0 && (u *= 256); ) f += this[t + --n] * u;

  return f;
};

v.prototype.readUint8 = v.prototype.readUInt8 = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 1, this.length);
  return this[module24];
};

v.prototype.readUint16LE = v.prototype.readUInt16LE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 2, this.length);
  return this[module24] | (this[module24 + 1] << 8);
};

v.prototype.readUint16BE = v.prototype.readUInt16BE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 2, this.length);
  return (this[module24] << 8) | this[module24 + 1];
};

v.prototype.readUint32LE = v.prototype.readUInt32LE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return (this[module24] | (this[module24 + 1] << 8) | (this[module24 + 2] << 16)) + 16777216 * this[module24 + 3];
};

v.prototype.readUint32BE = v.prototype.readUInt32BE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return 16777216 * this[module24] + ((this[module24 + 1] << 16) | (this[module24 + 2] << 8) | this[module24 + 3]);
};

v.prototype.readBigUInt64LE = vt(function (t) {
  ft((t >>>= 0), 'offset');
  var n = this[t],
    o = this[t + 7];
  if (!(undefined !== n && undefined !== o)) ut(t, this.length - 8);
  var f = n + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
    u = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + o * 2 ** 24;
  return BigInt(f) + (BigInt(u) << BigInt(32));
});
v.prototype.readBigUInt64BE = vt(function (t) {
  ft((t >>>= 0), 'offset');
  var n = this[t],
    o = this[t + 7];
  if (!(undefined !== n && undefined !== o)) ut(t, this.length - 8);
  var f = n * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
    u = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + o;
  return (BigInt(f) << BigInt(32)) + BigInt(u);
});

v.prototype.readIntLE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) J(t, n, this.length);

  for (var f = this[t], u = 1, s = 0; ++s < n && (u *= 256); ) f += this[t + s] * u;

  if (f >= (u *= 128)) f -= 2 ** (8 * n);
  return f;
};

v.prototype.readIntBE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) J(t, n, this.length);

  for (var f = n, u = 1, s = this[t + --f]; f > 0 && (u *= 256); ) s += this[t + --f] * u;

  if (s >= (u *= 128)) s -= 2 ** (8 * n);
  return s;
};

v.prototype.readInt8 = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 1, this.length);
  return 128 & this[module24] ? -1 * (255 - this[module24] + 1) : this[module24];
};

v.prototype.readInt16LE = function (t, n) {
  t >>>= 0;
  if (!n) J(t, 2, this.length);
  var o = this[t] | (this[t + 1] << 8);
  return 32768 & o ? 4294901760 | o : o;
};

v.prototype.readInt16BE = function (t, n) {
  t >>>= 0;
  if (!n) J(t, 2, this.length);
  var o = this[t + 1] | (this[t] << 8);
  return 32768 & o ? 4294901760 | o : o;
};

v.prototype.readInt32LE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return this[module24] | (this[module24 + 1] << 8) | (this[module24 + 2] << 16) | (this[module24 + 3] << 24);
};

v.prototype.readInt32BE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return (this[module24] << 24) | (this[module24 + 1] << 16) | (this[module24 + 2] << 8) | this[module24 + 3];
};

v.prototype.readBigInt64LE = vt(function (t) {
  ft((t >>>= 0), 'offset');
  var n = this[t],
    o = this[t + 7];
  if (!(undefined !== n && undefined !== o)) ut(t, this.length - 8);
  var f = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (o << 24);
  return (BigInt(f) << BigInt(32)) + BigInt(n + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
});
v.prototype.readBigInt64BE = vt(function (t) {
  ft((t >>>= 0), 'offset');
  var n = this[t],
    o = this[t + 7];
  if (!(undefined !== n && undefined !== o)) ut(t, this.length - 8);
  var f = (n << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
  return (BigInt(f) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + o);
});

v.prototype.readFloatLE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return module1605.read(this, module24, true, 23, 4);
};

v.prototype.readFloatBE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 4, this.length);
  return module1605.read(this, module24, false, 23, 4);
};

v.prototype.readDoubleLE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 8, this.length);
  return module1605.read(this, module24, true, 52, 8);
};

v.prototype.readDoubleBE = function (t, n) {
  module24 >>>= 0;
  if (!n) J(module24, 8, this.length);
  return module1605.read(this, module24, false, 52, 8);
};

v.prototype.writeUintLE = v.prototype.writeUIntLE = function (t, n, o, f) {
  if (!((t = +t), (n >>>= 0), (o >>>= 0), f)) Z(this, t, n, o, 2 ** (8 * o) - 1, 0);
  var u = 1,
    s = 0;

  for (this[n] = 255 & t; ++s < o && (u *= 256); ) this[n + s] = (t / u) & 255;

  return n + o;
};

v.prototype.writeUintBE = v.prototype.writeUIntBE = function (t, n, o, f) {
  if (!((t = +t), (n >>>= 0), (o >>>= 0), f)) Z(this, t, n, o, 2 ** (8 * o) - 1, 0);
  var u = o - 1,
    s = 1;

  for (this[n + u] = 255 & t; --u >= 0 && (s *= 256); ) this[n + u] = (t / s) & 255;

  return n + o;
};

v.prototype.writeUint8 = v.prototype.writeUInt8 = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 1, 255, 0);
  this[module25] = 255 & module24;
  return module25 + 1;
};

v.prototype.writeUint16LE = v.prototype.writeUInt16LE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 2, 65535, 0);
  this[module25] = 255 & module24;
  this[module25 + 1] = module24 >>> 8;
  return module25 + 2;
};

v.prototype.writeUint16BE = v.prototype.writeUInt16BE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 2, 65535, 0);
  this[module25] = module24 >>> 8;
  this[module25 + 1] = 255 & module24;
  return module25 + 2;
};

v.prototype.writeUint32LE = v.prototype.writeUInt32LE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 4, 4294967295, 0);
  this[module25 + 3] = module24 >>> 24;
  this[module25 + 2] = module24 >>> 16;
  this[module25 + 1] = module24 >>> 8;
  this[module25] = 255 & module24;
  return module25 + 4;
};

v.prototype.writeUint32BE = v.prototype.writeUInt32BE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 4, 4294967295, 0);
  this[module25] = module24 >>> 24;
  this[module25 + 1] = module24 >>> 16;
  this[module25 + 2] = module24 >>> 8;
  this[module25 + 3] = 255 & module24;
  return module25 + 4;
};

v.prototype.writeBigUInt64LE = vt(function (t) {
  return $(this, t, arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt('0xffffffffffffffff'));
});
v.prototype.writeBigUInt64BE = vt(function (t) {
  return H(this, t, arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt('0xffffffffffffffff'));
});

v.prototype.writeIntLE = function (t, n, o, f) {
  if (((t = +t), (n >>>= 0), !f)) {
    var u = 2 ** (8 * o - 1);
    Z(this, t, n, o, u - 1, -u);
  }

  var s = 0,
    h = 1,
    p = 0;

  for (this[n] = 255 & t; ++s < o && (h *= 256); ) {
    if (t < 0 && 0 === p && 0 !== this[n + s - 1]) p = 1;
    this[n + s] = (((t / h) >> 0) - p) & 255;
  }

  return n + o;
};

v.prototype.writeIntBE = function (t, n, o, f) {
  if (((t = +t), (n >>>= 0), !f)) {
    var u = 2 ** (8 * o - 1);
    Z(this, t, n, o, u - 1, -u);
  }

  var s = o - 1,
    h = 1,
    p = 0;

  for (this[n + s] = 255 & t; --s >= 0 && (h *= 256); ) {
    if (t < 0 && 0 === p && 0 !== this[n + s + 1]) p = 1;
    this[n + s] = (((t / h) >> 0) - p) & 255;
  }

  return n + o;
};

v.prototype.writeInt8 = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 1, 127, -128);
  if (module24 < 0) module24 = 255 + module24 + 1;
  this[module25] = 255 & module24;
  return module25 + 1;
};

v.prototype.writeInt16LE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 2, 32767, -32768);
  this[module25] = 255 & module24;
  this[module25 + 1] = module24 >>> 8;
  return module25 + 2;
};

v.prototype.writeInt16BE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 2, 32767, -32768);
  this[module25] = module24 >>> 8;
  this[module25 + 1] = 255 & module24;
  return module25 + 2;
};

v.prototype.writeInt32LE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 4, 2147483647, -2147483648);
  this[module25] = 255 & module24;
  this[module25 + 1] = module24 >>> 8;
  this[module25 + 2] = module24 >>> 16;
  this[module25 + 3] = module24 >>> 24;
  return module25 + 4;
};

v.prototype.writeInt32BE = function (t, n, o) {
  module24 = +module24;
  module25 >>>= 0;
  if (!o) Z(this, module24, module25, 4, 2147483647, -2147483648);
  if (module24 < 0) module24 = 4294967295 + module24 + 1;
  this[module25] = module24 >>> 24;
  this[module25 + 1] = module24 >>> 16;
  this[module25 + 2] = module24 >>> 8;
  this[module25 + 3] = 255 & module24;
  return module25 + 4;
};

v.prototype.writeBigInt64LE = vt(function (t) {
  return $(this, t, arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
v.prototype.writeBigInt64BE = vt(function (t) {
  return H(this, t, arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});

v.prototype.writeFloatLE = function (t, n, o) {
  return Q(this, t, n, true, o);
};

v.prototype.writeFloatBE = function (t, n, o) {
  return Q(this, t, n, false, o);
};

v.prototype.writeDoubleLE = function (t, n, o) {
  return tt(this, t, n, true, o);
};

v.prototype.writeDoubleBE = function (t, n, o) {
  return tt(this, t, n, false, o);
};

v.prototype.copy = function (t, n, o, f) {
  if (!v.isBuffer(t)) throw new TypeError('argument should be a Buffer');
  if ((o || (o = 0), f || 0 === f || (f = this.length), n >= t.length && (n = t.length), n || (n = 0), f > 0 && f < o && (f = o), f === o)) return 0;
  if (0 === t.length || 0 === this.length) return 0;
  if (n < 0) throw new RangeError('targetStart out of bounds');
  if (o < 0 || o >= this.length) throw new RangeError('Index out of range');
  if (f < 0) throw new RangeError('sourceEnd out of bounds');
  if (f > this.length) f = this.length;
  if (t.length - n < f - o) f = t.length - n + o;
  var u = f - o;
  if (this === t && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, o, f);
  else Uint8Array.prototype.set.call(t, this.subarray(o, f), n);
  return u;
};

v.prototype.fill = function (t, n, o, f) {
  if ('string' == typeof t) {
    if (('string' == typeof n ? ((f = n), (n = 0), (o = this.length)) : 'string' == typeof o && ((f = o), (o = this.length)), undefined !== f && 'string' != typeof f))
      throw new TypeError('encoding must be a string');
    if ('string' == typeof f && !v.isEncoding(f)) throw new TypeError('Unknown encoding: ' + f);

    if (1 === t.length) {
      var u = t.charCodeAt(0);
      if (('utf8' === f && u < 128) || 'latin1' === f) t = u;
    }
  } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t));

  if (n < 0 || this.length < n || this.length < o) throw new RangeError('Out of range index');
  if (o <= n) return this;
  var s;
  if (((n >>>= 0), (o = undefined === o ? this.length : o >>> 0), t || (t = 0), 'number' == typeof t)) for (s = n; s < o; ++s) this[s] = t;
  else {
    var h = v.isBuffer(t) ? t : v.from(t, f),
      p = h.length;
    if (0 === p) throw new TypeError('The value "' + t + '" is invalid for argument "value"');

    for (s = 0; s < o - n; ++s) this[s + n] = h[s % p];
  }
  return this;
};

var rt = {};

function et(p, c, l) {
  rt[p] = (function (y) {
    module35(B, l);

    var w = B,
      v = h(),
      b = function () {
        var t,
          n = module34(w);

        if (v) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function B() {
      var module25;
      module24(this, B);
      module25 = b.call(this);
      Object.defineProperty(module39(module25), 'message', {
        value: c.apply(module39(module25), arguments),
        writable: true,
        configurable: true,
      });
      module25.name = module25.name + ' [' + p + ']';
      delete module25.name;
      return module25;
    }

    module25(B, [
      {
        key: 'code',
        get: function () {
          return p;
        },
        set: function (t) {
          Object.defineProperty(this, 'code', {
            configurable: true,
            enumerable: true,
            value: t,
            writable: true,
          });
        },
      },
      {
        key: 'toString',
        value: function () {
          return this.name + ' [' + p + ']: ' + this.message;
        },
      },
    ]);
    return B;
  })();
}

function nt(t) {
  for (var n = '', o = t.length, f = '-' === t[0] ? 1 : 0; o >= f + 4; o -= 3) n = '_' + t.slice(o - 3, o) + n;

  return '' + t.slice(0, o) + n;
}

function it(t, n, o) {
  ft(n, 'offset');
  if (!(undefined !== t[n] && undefined !== t[n + o])) ut(n, t.length - (o + 1));
}

function ot(t, n, o, f, u, s) {
  if (t > o || t < n) {
    var h,
      p = 'bigint' == typeof n ? 'n' : '';
    throw (
      ((h =
        s > 3
          ? 0 === n || n === BigInt(0)
            ? '>= 0' + p + ' and < 2' + p + ' ** ' + 8 * (s + 1) + p
            : '>= -(2' + p + ' ** ' + (8 * (s + 1) - 1) + p + ') and < 2 ** ' + (8 * (s + 1) - 1) + p
          : '>= ' + n + p + ' and <= ' + o + p),
      new rt.ERR_OUT_OF_RANGE('value', h, t))
    );
  }

  it(f, u, s);
}

function ft(t, n) {
  if ('number' != typeof t) throw new rt.ERR_INVALID_ARG_TYPE(n, 'number', t);
}

function ut(t, n, o) {
  if (Math.floor(t) !== t) throw (ft(t, o), new rt.ERR_OUT_OF_RANGE(o || 'offset', 'an integer', t));
  if (n < 0) throw new rt.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new rt.ERR_OUT_OF_RANGE(o || 'offset', '>= ' + (o ? 1 : 0) + ' and <= ' + n, t);
}

et(
  'ERR_BUFFER_OUT_OF_BOUNDS',
  function (t) {
    return t ? t + ' is outside of buffer bounds' : 'Attempt to access memory outside buffer bounds';
  },
  RangeError
);
et(
  'ERR_INVALID_ARG_TYPE',
  function (t, n) {
    return 'The "' + t + '" argument must be of type number. Received type ' + typeof n;
  },
  TypeError
);
et(
  'ERR_OUT_OF_RANGE',
  function (t, n, o) {
    var f = 'The value of "' + t + '" is out of range.',
      u = o;
    if (Number.isInteger(o) && Math.abs(o) > 2 ** 32) u = nt(String(o));
    else if ('bigint' == typeof o) {
      u = String(o);
      if (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) u = nt(u);
      u += 'n';
    }
    f += ' It must be ' + n + '. Received ' + u;
    return f;
  },
  RangeError
);
var st = /[^+/0-9A-Za-z-_]/g;

function ht(t) {
  if ((t = (t = t.split('=')[0]).trim().replace(st, '')).length < 2) return '';

  for (; t.length % 4 != 0; ) t += '=';

  return t;
}

function at(t, n) {
  var o;
  n = n || 1 / 0;

  for (var f = t.length, u = null, s = [], h = 0; h < f; ++h) {
    if ((o = t.charCodeAt(h)) > 55295 && o < 57344) {
      if (!u) {
        if (o > 56319) {
          if ((n -= 3) > -1) s.push(239, 191, 189);
          continue;
        }

        if (h + 1 === f) {
          if ((n -= 3) > -1) s.push(239, 191, 189);
          continue;
        }

        u = o;
        continue;
      }

      if (o < 56320) {
        if ((n -= 3) > -1) s.push(239, 191, 189);
        u = o;
        continue;
      }

      o = 65536 + (((u - 55296) << 10) | (o - 56320));
    } else u && (n -= 3) > -1 && s.push(239, 191, 189);

    if (((u = null), o < 128)) {
      if ((n -= 1) < 0) break;
      s.push(o);
    } else if (o < 2048) {
      if ((n -= 2) < 0) break;
      s.push((o >> 6) | 192, (63 & o) | 128);
    } else if (o < 65536) {
      if ((n -= 3) < 0) break;
      s.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
    } else {
      if (!(o < 1114112)) throw new Error('Invalid code point');
      if ((n -= 4) < 0) break;
      s.push((o >> 18) | 240, ((o >> 12) & 63) | 128, ((o >> 6) & 63) | 128, (63 & o) | 128);
    }
  }

  return s;
}

function pt(t) {
  for (var n = [], o = 0; o < t.length; ++o) n.push(255 & t.charCodeAt(o));

  return n;
}

function ct(t, n) {
  for (var o, f, u, s = [], h = 0; h < t.length && !((n -= 2) < 0); ++h) {
    f = (o = t.charCodeAt(h)) >> 8;
    u = o % 256;
    s.push(u);
    s.push(f);
  }

  return s;
}

function lt(t) {
  return base64js.toByteArray(ht(t));
}

function yt(t, n, o, f) {
  var u;

  for (u = 0; u < f && !(u + o >= n.length || u >= t.length); ++u) n[u + o] = t[u];

  return u;
}

function gt(t, n) {
  return t instanceof n || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === n.name);
}

function wt(t) {
  return t != t;
}

var dt = (function () {
  for (var t = new Array(256), n = 0; n < 16; ++n) for (var o = 16 * n, f = 0; f < 16; ++f) t[o + f] = '0123456789abcdef'[n] + '0123456789abcdef'[f];

  return t;
})();

function vt(t) {
  return 'undefined' == typeof BigInt ? bt : t;
}

function bt() {
  throw new Error('BigInt not supported');
}
