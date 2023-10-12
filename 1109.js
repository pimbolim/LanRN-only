var module901 = require('./901'),
  u = module901.default.eq,
  f = module901.default.set,
  o = module901.default.cond,
  c = module901.default.atan,
  l = module901.default.add,
  v = module901.default.multiply,
  s = module901.default.lessThan,
  p = module901.default.abs,
  h = module901.default.divide,
  b = module901.default.sub,
  w = module901.default.min,
  x = module901.default.max,
  y = module901.default.round,
  M = module901.default.greaterThan,
  P = module901.default.pow,
  _ = module901.default.and,
  q = module901.default.greaterOrEq,
  I = module901.default.lessOrEq,
  O = module901.default.proc,
  z = module901.default.floor;

exports.bin = function (n) {
  return n ? 1 : 0;
};

exports.fract = function (n) {
  return b(n, z(n));
};

exports.sign = function (n) {
  return o(s(n, 0), -1, o(u(n, 0), 0, 1));
};

exports.min = function (...args) {
  return args.reduce(function (n, t) {
    return w(n, t);
  });
};

exports.max = function (...args) {
  return args.reduce(function (n, t) {
    return x(n, t);
  });
};

exports.minus = function (n) {
  return v(-1, n);
};

exports.avg = function () {
  return h(l.apply(undefined, arguments), arguments.length);
};

var A = O(function (n, t, u) {
  return w(x(t, n), u);
});
exports.clamp = A;

exports.between = function (n, t, u) {
  return arguments.length > 3 && undefined !== arguments[3] && !arguments[3] ? _(M(n, t), s(n, u)) : _(q(n, t), I(n, u));
};

var B = O(function (n, t) {
  var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0.001;
  return s(p(b(n, t)), u);
});
exports.approximates = B;
var D = O(function (n) {
  return v(n, Math.PI / 180);
});
exports.toRad = D;
var E = O(function (n) {
  return v(n, 180 / Math.PI);
});
exports.toDeg = E;
var R = O(function (n, t) {
  var f = c(h(n, t)),
    v = Math.PI;
  return o(M(t, 0), f, o(_(s(t, 0), q(n, 0)), l(f, v), o(_(s(t, 0), s(n, 0)), b(f, v), o(_(u(t, 0), M(n, 0)), v / 2, o(_(u(t, 0), s(n, 0)), -v / 2, 0)))));
});
exports.atan2 = R;
var T = O(function (n, t, u, f, o) {
  var c = b(1, n),
    s = v(1, P(c, 3), P(n, 0), t),
    p = v(3, P(c, 2), P(n, 1), u),
    h = v(3, P(c, 1), P(n, 2), f),
    w = v(1, P(c, 0), P(n, 3), o);
  return l(s, p, h, w);
});
exports.cubicBezier = T;
var j = O(function (n) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
    u = P(10, t);
  return h(y(v(n, u)), u);
});
exports.round = j;
var k = O(function (n) {
  return f(n, l(n, 1));
});
exports.inc = k;
var C = O(function (n) {
  return f(n, b(n, 1));
});
exports.dec = C;
