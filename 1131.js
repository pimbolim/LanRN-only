var module901 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var f = n(u);
  if (f && f.has(t)) return f.get(t);
  var o = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var v = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (v && (v.get || v.set)) Object.defineProperty(o, l, v);
      else o[l] = t[l];
    }

  o.default = t;
  if (f) f.set(t, o);
  return o;
})(require('./901'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    f = new WeakMap();
  return (n = function (t) {
    return t ? f : u;
  })(t);
}

var u = module901.default.add,
  f = module901.default.multiply,
  o = module901.default.cos,
  c = module901.default.sin,
  l = module901.default.divide,
  v = function (t) {
    throw new Error('Unexhaustive handling for ' + t);
  },
  s = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];

exports.identityMatrix4 = s;

var p = function (t) {
    return [
      [t, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
  },
  y = function (n) {
    return [
      [1, module901.tan(n), 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
  },
  O = function (n) {
    return [
      [1, 0, 0, 0],
      [module901.tan(n), 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
  },
  w = function (t) {
    return [
      [1, 0, 0, 0],
      [0, t, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
  },
  M = function (t, n) {
    return u(f(t[0], n[0]), f(t[1], n[1]), f(t[2], n[2]), f(t[3], n[3]));
  };

exports.dot4 = M;

exports.matrixVecMul4 = function (t, n) {
  return [M(t[0], n), M(t[1], n), M(t[2], n), M(t[3], n)];
};

var b = function (t, n) {
  var u = [n[0][0], n[1][0], n[2][0], n[3][0]],
    f = [n[0][1], n[1][1], n[2][1], n[3][1]],
    o = [n[0][2], n[1][2], n[2][2], n[3][2]],
    c = [n[0][3], n[1][3], n[2][3], n[3][3]];
  return [
    [M(t[0], u), M(t[0], f), M(t[0], o), M(t[0], c)],
    [M(t[1], u), M(t[1], f), M(t[1], o), M(t[1], c)],
    [M(t[2], u), M(t[2], f), M(t[2], o), M(t[2], c)],
    [M(t[3], u), M(t[3], f), M(t[3], o), M(t[3], c)],
  ];
};

exports.multiply4 = b;

exports.processTransform3d = function (t) {
  return t.reduce(function (t, n) {
    var u,
      s,
      M,
      j,
      k = Object.keys(n)[0];

    if ('translateX' === k) {
      var x = n[k];
      return b(t, [
        [1, 0, 0, x],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('translateY' === k) {
      var P = n[k];
      return b(t, [
        [1, 0, 0, 0],
        [0, 1, 0, P],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('translateZ' === k) {
      var _ = n[k];
      return b(t, [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, _],
        [0, 0, 0, 1],
      ]);
    }

    if ('scale' === k) {
      var h = n[k];
      return b(t, [
        [(u = h), 0, 0, 0],
        [0, u, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('scaleX' === k) {
      var X = n[k];
      return b(t, p(X));
    }

    if ('scaleY' === k) {
      var Y = n[k];
      return b(t, w(Y));
    }

    if ('skewX' === k) {
      var W = n[k];
      return b(t, y(W));
    }

    if ('skewY' === k) {
      var D = n[k];
      return b(t, O(D));
    }

    if ('rotateX' === k) {
      var T = n[k];
      return b(t, [
        [1, 0, 0, 0],
        [0, o((s = T)), f(-1, c(s)), 0],
        [0, c(s), o(s), 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('rotateY' === k) {
      var V = n[k];
      return b(t, [
        [o((M = V)), 0, c(M), 0],
        [0, 1, 0, 0],
        [f(-1, c(M)), 0, o(M), 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('perspective' === k) {
      var Z = n[k];
      return b(t, [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, l(-1, Z), 1],
      ]);
    }

    if ('rotate' === k || 'rotateZ' === k) {
      var E = n[k];
      return b(t, [
        [o((j = E)), f(-1, c(j)), 0, 0],
        [c(j), o(j), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    }

    if ('matrix' === k) {
      var U = n[k];
      return b(t, U);
    }

    return v(k);
  }, s);
};
