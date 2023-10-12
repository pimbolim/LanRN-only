var module901 = require('./901'),
  ReactNative = require('react-native'),
  module1112 = require('./1112'),
  module1109 = require('./1109'),
  c = module901.default.add,
  l = module901.default.multiply,
  f = module901.default.abs,
  v = module901.default.round,
  x = module901.default.interpolate,
  R = module901.default.sub,
  s = module901.default.proc,
  b = module901.default.color,
  h = module901.default.Extrapolate,
  C = module901.default.greaterThan,
  M = module901.default.cond,
  y = function (t) {
    return ((t >> 24) & 255) / 255;
  };

exports.opacity = y;

var P = function (t) {
  return (t >> 16) & 255;
};

exports.red = P;

var A = function (t) {
  return (t >> 8) & 255;
};

exports.green = A;

var L = function (t) {
  return 255 & t;
};

exports.blue = L;

var k = function (t, n, u) {
  var x = 1,
    s = 0.6666666666666666,
    b = 0.3333333333333333,
    h = 3,
    C = {
      x: f(R(l(module1109.fract(c(t, x)), 6), h)),
      y: f(R(l(module1109.fract(c(t, s)), 6), h)),
      z: f(R(l(module1109.fract(c(t, b)), 6), h)),
    },
    M = {
      x: l(u, module1112.mix(n, x, module1109.clamp(R(C.x, x), 0, 1))),
      y: l(u, module1112.mix(n, x, module1109.clamp(R(C.y, x), 0, 1))),
      z: l(u, module1112.mix(n, x, module1109.clamp(R(C.z, x), 0, 1))),
    };
  return {
    r: v(l(M.x, 255)),
    g: v(l(M.y, 255)),
    b: v(l(M.z, 255)),
  };
};

exports.hsv2rgb = k;
var z = s(function (t, n, u) {
  var o = k(t, n, u),
    p = o.r,
    c = o.g,
    l = o.b;
  return b(p, c, l);
});
exports.hsv2color = z;

var _ = s(function (t, n, u) {
  var o = c(l(0.299, t), l(0.587, n), l(0.114, u));
  return M(C(o, 186), b(0, 0, 0), b(255, 255, 255));
});

exports.colorForBackground = _;

var B = function (t) {
    var n = P(t) / 255,
      u = A(t) / 255,
      o = L(t) / 255,
      p = n ** u,
      c = n ** u,
      l = 0,
      f = p,
      v = p - c,
      x = 0 === p ? 0 : v / p;
    if (p === c) l = 0;
    else {
      switch (p) {
        case n:
          l = (u - o) / v + (u < o ? 6 : 0);
          break;

        case u:
          l = (o - n) / v + 2;
          break;

        case o:
          l = (n - u) / v + 4;
      }

      l /= 6;
    }
    return {
      h: l,
      s: x,
      v: f,
    };
  },
  F = function (t, n, u) {
    var o = u.map(function (t) {
        return B(t);
      }),
      p = x(t, {
        inputRange: n,
        outputRange: o.map(function (t) {
          return t.h;
        }),
        extrapolate: h.CLAMP,
      }),
      c = x(t, {
        inputRange: n,
        outputRange: o.map(function (t) {
          return t.s;
        }),
        extrapolate: h.CLAMP,
      }),
      l = x(t, {
        inputRange: n,
        outputRange: o.map(function (t) {
          return t.v;
        }),
        extrapolate: h.CLAMP,
      });
    return z(p, c, l);
  },
  j = function (t, n, u) {
    var o = v(
        x(t, {
          inputRange: n,
          outputRange: u.map(function (t) {
            return P(t);
          }),
          extrapolate: h.CLAMP,
        })
      ),
      p = v(
        x(t, {
          inputRange: n,
          outputRange: u.map(function (t) {
            return A(t);
          }),
          extrapolate: h.CLAMP,
        })
      ),
      c = v(
        x(t, {
          inputRange: n,
          outputRange: u.map(function (t) {
            return L(t);
          }),
          extrapolate: h.CLAMP,
        })
      ),
      l = x(t, {
        inputRange: n,
        outputRange: u.map(function (t) {
          return y(t);
        }),
        extrapolate: h.CLAMP,
      });
    return b(o, p, c, l);
  },
  w = function (t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'rgb',
      p = n.inputRange,
      c = n.outputRange.map(function (t) {
        return 'number' == typeof t ? t : ReactNative.processColor(t);
      });
    return 'hsv' === o ? F(t, p, c) : j(t, p, c);
  };

exports.interpolateColor = w;

exports.mixColor = function (t, n, u) {
  var o = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 'rgb';
  return w(
    t,
    {
      inputRange: [0, 1],
      outputRange: [n, u],
    },
    o
  );
};
