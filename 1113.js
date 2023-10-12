var module901 = require('./901'),
  module1109 = require('./1109'),
  o = module901.default.add,
  c = module901.default.multiply,
  f = module901.default.sqrt,
  l = module901.default.cos,
  s = module901.default.sin,
  v = module901.default.sub,
  p = module901.default.divide,
  y = module901.default.pow,
  x = module901.default.tan,
  w = function (t) {
    throw new Error('Unexhaustive handling for ' + t);
  },
  X = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  Y = function (t) {
    return [
      [t, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
  },
  h = function (t) {
    return [
      [1, 0, 0],
      [0, t, 0],
      [0, 0, 1],
    ];
  },
  _ = function (t) {
    return [
      [1, x(t), 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
  },
  b = function (t) {
    return [
      [1, 0, 0],
      [x(t), 1, 0],
      [0, 0, 1],
    ];
  },
  j = function (t, n) {
    return o(c(t[0], n[0]), c(t[1], n[1]), c(t[2], n[2]));
  };

exports.dot3 = j;

var k = function (t, n) {
  return [j(t[0], n), j(t[1], n), j(t[2], n)];
};

exports.matrixVecMul3 = k;

var M = function (t, n) {
  var u = [n[0][0], n[1][0], n[2][0]],
    o = [n[0][1], n[1][1], n[2][1]],
    c = [n[0][2], n[1][2], n[2][2]];
  return [
    [j(t[0], u), j(t[0], o), j(t[0], c)],
    [j(t[1], u), j(t[1], o), j(t[1], c)],
    [j(t[2], u), j(t[2], o), j(t[2], c)],
  ];
};

exports.multiply3 = M;

var Z = function (t) {
  return t.reduce(function (t, n) {
    var u,
      o,
      f = Object.keys(n)[0],
      v = n[f];
    return 'translateX' === f
      ? M(t, [
          [1, 0, v],
          [0, 1, 0],
          [0, 0, 1],
        ])
      : 'translateY' === f
      ? M(t, [
          [1, 0, 0],
          [0, 1, v],
          [0, 0, 1],
        ])
      : 'scale' === f
      ? M(t, [
          [(u = v), 0, 0],
          [0, u, 0],
          [0, 0, 1],
        ])
      : 'scaleX' === f
      ? M(t, Y(v))
      : 'scaleY' === f
      ? M(t, h(v))
      : 'skewX' === f
      ? M(t, _(v))
      : 'skewY' === f
      ? M(t, b(v))
      : 'rotate' === f || 'rotateZ' === f
      ? M(t, [
          [l((o = v)), c(-1, s(o)), 0],
          [s(o), l(o), 0],
          [0, 0, 1],
        ])
      : w(f);
  }, X);
};

exports.processTransform2d = Z;

var O = function (t) {
  return 3 === t.length && t[0] instanceof Array;
};

exports.decompose2d = function (t) {
  var n = O(t) ? t : Z(t),
    l = n[0][0],
    s = n[1][0],
    x = n[0][1],
    w = n[1][1],
    X = n[0][2],
    Y = n[1][2],
    h = p(o(l, w), 2),
    _ = p(v(l, w), 2),
    b = p(o(x, s), 2),
    j = p(v(x, s), 2),
    k = f(o(y(h, 2), y(j, 2))),
    M = f(o(y(_, 2), y(b, 2))),
    T = o(k, M),
    V = v(k, M),
    q = module1109.atan2(b, _),
    A = module1109.atan2(j, h),
    E = p(v(A, q), 2),
    P = p(o(A, q), 2);

  return [
    {
      translateX: X,
    },
    {
      translateY: Y,
    },
    {
      rotateZ: c(-1, E),
    },
    {
      scaleX: T,
    },
    {
      scaleY: V,
    },
    {
      rotateZ: c(-1, P),
    },
  ];
};

var T = function (t) {
    return [
      [v(c(t[1][1], t[2][2]), c(t[1][2], t[2][1])), v(c(t[0][2], t[2][1]), c(t[0][1], t[2][2])), v(c(t[0][1], t[1][2]), c(t[0][2], t[1][1]))],
      [v(c(t[1][2], t[2][0]), c(t[1][0], t[2][2])), v(c(t[0][0], t[2][2]), c(t[0][2], t[2][0])), v(c(t[0][2], t[1][0]), c(t[0][0], t[1][2]))],
      [v(c(t[1][0], t[2][1]), c(t[1][1], t[2][0])), v(c(t[0][1], t[2][0]), c(t[0][0], t[2][1])), v(c(t[0][0], t[1][1]), c(t[0][1], t[1][0]))],
    ];
  },
  V = function (t) {
    var n = t.p1,
      u = t.p2,
      o = t.p3,
      c = t.p4,
      f = [
        [n.x, u.x, o.x],
        [n.y, u.y, o.y],
        [1, 1, 1],
      ],
      l = k(T(f), [c.x, c.y, 1]);
    return M(f, [
      [l[0], 0, 0],
      [0, l[1], 0],
      [0, 0, l[2]],
    ]);
  };

exports.transform2d = function (t) {
  var n = V(t.canvas),
    u = V(t.projected),
    o = M(u, T(n));
  return [
    [p(o[0][0], o[2][2]), p(o[0][1], o[2][2]), p(o[0][2], o[2][2])],
    [p(o[1][0], o[2][2]), p(o[1][1], o[2][2]), p(o[1][2], o[2][2])],
    [p(o[2][0], o[2][2]), p(o[2][1], o[2][2]), 1],
  ];
};
