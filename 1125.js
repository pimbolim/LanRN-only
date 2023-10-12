var t = require('@babel/runtime/helpers/slicedToArray'),
  n = 2 * Math.PI,
  o = function (t, n, o, u, h, M, c) {
    var s = t.x,
      y = t.y;
    return {
      x: u * (s *= n) - h * (y *= o) + M,
      y: h * s + u * y + c,
    };
  },
  u = function (t, n) {
    var o = 1.5707963267948966 === n ? 0.551915024494 : -1.5707963267948966 === n ? -0.551915024494 : 1.3333333333333333 * Math.tan(n / 4),
      u = Math.cos(t),
      h = Math.sin(t),
      M = Math.cos(t + n),
      c = Math.sin(t + n);
    return [
      {
        x: u - h * o,
        y: h + u * o,
      },
      {
        x: M + c * o,
        y: c - M * o,
      },
      {
        x: M,
        y: c,
      },
    ];
  },
  h = function (t, n, o, u) {
    var h = t * o + n * u;
    if (h > 1) h = 1;
    if (h < -1) h = -1;
    return (t * u - n * o < 0 ? -1 : 1) * Math.acos(h);
  },
  M = function (t, o, u, M, c, s, y, f, v, x, l, p) {
    var w = c ** 2,
      b = s ** 2,
      A = l ** 2,
      _ = p ** 2,
      q = w * b - w * _ - b * A;

    if (q < 0) q = 0;
    q /= w * _ + b * A;
    var j = (((q = Math.sqrt(q) * (y === f ? -1 : 1)) * c) / s) * p,
      F = ((q * -s) / c) * l,
      I = x * j - v * F + (t + u) / 2,
      O = v * j + x * F + (o + M) / 2,
      P = (l - j) / c,
      S = (p - F) / s,
      E = (-l - j) / c,
      R = (-p - F) / s,
      T = h(1, 0, P, S),
      k = h(P, S, E, R);
    if (0 === f && k > 0) k -= n;
    if (1 === f && k < 0) k += n;
    return [I, O, T, k];
  };

exports.default = function (h) {
  var c = h.px,
    s = h.py,
    y = h.cx,
    f = h.cy,
    v = h.rx,
    x = h.ry,
    l = h.xAxisRotation,
    p = undefined === l ? 0 : l,
    w = h.largeArcFlag,
    b = undefined === w ? 0 : w,
    A = h.sweepFlag,
    _ = undefined === A ? 0 : A,
    q = [];

  if (0 === v || 0 === x) return [];
  var j = Math.sin((p * n) / 360),
    F = Math.cos((p * n) / 360),
    I = (F * (c - y)) / 2 + (j * (s - f)) / 2,
    O = (-j * (c - y)) / 2 + (F * (s - f)) / 2;
  if (0 === I && 0 === O) return [];
  v = Math.abs(v);
  x = Math.abs(x);
  var P = I ** 2 / v ** 2 + O ** 2 / x ** 2;

  if (P > 1) {
    v *= Math.sqrt(P);
    x *= Math.sqrt(P);
  }

  var S = M(c, s, y, f, v, x, b, _, j, F, I, O),
    E = t(S, 4),
    R = E[0],
    T = E[1],
    k = E[2],
    z = E[3],
    B = Math.abs(z) / (n / 4);
  if (Math.abs(1 - B) < 1e-7) B = 1;
  var C = Math.ceil(B) ** 1;
  z /= C;

  for (var D = 0; D < C; D++) {
    q.push(u(k, z));
    k += z;
  }

  return q.map(function (t) {
    var n = o(t[0], v, x, F, j, R, T),
      u = n.x,
      h = n.y,
      M = o(t[1], v, x, F, j, R, T),
      c = M.x,
      s = M.y,
      y = o(t[2], v, x, F, j, R, T);
    return {
      x1: u,
      y1: h,
      x2: c,
      y2: s,
      x: y.x,
      y: y.y,
    };
  });
};

module.exports = exports.default;
