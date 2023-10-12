var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module906 = require('./906'),
  module907 = require('./907'),
  module218 = require('./218');

function y() {
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

var h = 4,
  _ = 0.001,
  p = 1e-7,
  b = 10,
  R = 11,
  z = 0.1,
  A = 'function' == typeof Float32Array;

function B(t, n) {
  return 1 - 3 * n + 3 * t;
}

function w(t, n) {
  return 3 * n - 6 * t;
}

function k(t) {
  return 3 * t;
}

function F(t, n, u) {
  return ((B(n, u) * t + w(n, u)) * t + k(n)) * t;
}

function M(t, n, u) {
  return 3 * B(n, u) * t * t + 2 * w(n, u) * t + k(n);
}

function O(t, n, u, o, f) {
  var c = 0,
    l = 0,
    v = 0;

  do {
    if ((c = F((l = n + (u - n) / 2), o, f) - t) > 0) u = l;
    else n = l;
  } while (Math.abs(c) > p && ++v < b);

  return l;
}

function P(t, n, u, o) {
  for (var f = 0; f < h; ++f) {
    var c = M(n, u, o);
    if (0 === c) return n;
    n -= (F(n, u, o) - t) / c;
  }

  return n;
}

function X(t, n, u, o) {
  var f = A ? new Float32Array(R) : new Array(R);
  if (t !== n || u !== o) for (var c = 0; c < R; ++c) f[c] = F(c * z, t, u);

  function l(n) {
    for (var o = 0, c = 1; 10 !== c && f[c] <= n; ++c) o += z;

    var l = o + ((n - f[--c]) / (f[c + 1] - f[c])) * z,
      v = M(l, t, u);
    return v >= _ ? P(n, l, t, u) : 0 === v ? l : O(n, o, o + z, t, u);
  }

  return function (f) {
    return t === n && u === o ? f : 0 === f ? 0 : 1 === f ? 1 : F(l(f), n, o);
  };
}

var Y = (function (t) {
  module35.default(b, t);

  var h = b,
    _ = y(),
    p = function () {
      var t,
        n = module34.default(h);

      if (_) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t, u, o, f, c) {
    var l;
    module24.default(this, b);
    module218.default(t instanceof module907.default, 'Reanimated: Bezier node argument should be of type AnimatedNode but got ' + t);
    (l = p.call(
      this,
      {
        type: 'bezier',
        mX1: u,
        mY1: o,
        mX2: f,
        mY2: c,
        input: t,
      },
      [t]
    ))._value = t;
    l._bezier = X(u, o, f, c);
    return l;
  }

  module25.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedBezier, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._bezier(module906.val(this._value));
      },
    },
  ]);
  return b;
})(module907.default);

exports.default = Y;
