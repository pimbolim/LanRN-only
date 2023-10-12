var module20 = require('./20'),
  module901 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./901')),
  module1109 = require('./1109'),
  module1113 = require('./1113');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

var c = module901.default.Value,
  s = module901.default.set,
  p = module901.default.add,
  v = module901.default.multiply,
  y = module901.default.cond,
  b = module901.default.eq,
  w = module901.default.abs,
  T = module901.default.sub,
  O = module901.default.not,
  h = module901.default.lessThan,
  P = module901.default.greaterThan,
  j = module901.default.divide,
  X = module901.default.modulo,
  Y = module901.default.proc,
  Z = Y(function (t, n, o) {
    return p(n, v(t, T(o, n)));
  });
exports.mix = Z;

var _ = Y(function (t, n) {
  return h(t, n);
});

exports.step = _;
var M = Y(function (t, n, o) {
  var f = module1109.clamp(j(T(t, n), T(o, n)), 0, 1);
  return v(f, f, T(3, v(2, f)));
});
exports.smoothstep = M;

exports.tween2d = function (t, n, o) {
  var u = module1113.decompose2d(n),
    l = module1113.decompose2d(o);
  return [
    {
      translateX: Z(t, u[0].translateX, l[0].translateX),
    },
    {
      translateY: Z(t, u[1].translateY, l[1].translateY),
    },
    {
      rotateZ: Z(t, u[2].rotateZ, l[2].rotateZ),
    },
    {
      scaleX: Z(t, u[3].scaleX, l[3].scaleX),
    },
    {
      scaleY: Z(t, u[4].scaleY, l[4].scaleY),
    },
    {
      rotateZ: Z(t, u[5].rotateZ, l[5].rotateZ),
    },
  ];
};

var k = function (t) {
  var n = new c(0),
    u = new c();
  return module901.block([s(n, y(module901.defined(u), T(t, u), 0)), s(u, t), n]);
};

exports.diff = k;

exports.diffClamp = function (t, n, f) {
  var l = new c();
  return s(l, module1109.min(module1109.max(p(y(module901.defined(l), l, t), k(t)), n), f));
};

exports.moving = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0.001,
    o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 5,
    u = k(t),
    f = new c(0);
  return y(h(w(u), n), [s(f, p(f, 1)), O(P(f, o))], [s(f, 0), 1]);
};

exports.snapPoint = function (t, o, f) {
  var l = p(t, v(0.2, o)),
    s = function (t) {
      return w(T(l, t));
    },
    O = f.map(function (t) {
      return s(t);
    }),
    h = module1109.min.apply(undefined, module20.default(O));

  return f.reduce(function (t, n) {
    return y(b(s(n), h), n, t);
  }, new c());
};

var x = Y(function (t, n) {
  return s(t, p(t, n));
});
exports.addTo = x;
var W = Y(function (t, n) {
  return s(t, T(t, n));
});
exports.subTo = W;
var C = Y(function (t, n) {
  return s(t, v(t, n));
});
exports.multiplyTo = C;
var D = Y(function (t, n) {
  return s(t, j(t, n));
});
exports.divideTo = D;
var q = Y(function (t, n) {
  return s(t, X(t, n));
});
exports.moduloTo = q;
