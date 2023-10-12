exports.default = function (t, o) {
  var s = o.inputRange,
    c = o.outputRange,
    E = o.extrapolate,
    A = undefined === E ? h.EXTEND : E,
    C = o.extrapolateLeft,
    R = o.extrapolateRight;
  v('inputRange', s);
  T('inputRange', s);
  v('outputRange', c);
  T('outputRange', c);
  p('inputRange', s);
  module218.default(s.length === c.length, 'inputRange and outputRange must be the same length.');
  var N = C || A,
    b = R || A,
    D = f(t, s, c);
  if (!(N === h.EXTEND))
    N === h.CLAMP
      ? (D = module904.createAnimatedCond(module922.lessThan(t, s[0]), c[0], D))
      : N === h.IDENTITY && (D = module904.createAnimatedCond(module922.lessThan(t, s[0]), t, D));
  if (!(b === h.EXTEND))
    b === h.CLAMP
      ? (D = module904.createAnimatedCond(module922.greaterThan(t, s[s.length - 1]), c[c.length - 1], D))
      : b === h.IDENTITY && (D = module904.createAnimatedCond(module922.greaterThan(t, s[s.length - 1]), t, D));
  return D;
};

var module922 = require('./922'),
  module218 = require('./218'),
  module907 = require('./907'),
  module904 = require('./904'),
  module924 = require('./924').createAnimatedFunction(function (t, u, o, s, c) {
    var f = module922.divide(module922.sub(t, u), module922.sub(o, u)),
      h = module922.add(s, module922.multiply(f, module922.sub(c, s)));
    return module904.createAnimatedCond(module922.eq(u, o), module904.createAnimatedCond(module922.lessOrEq(t, u), s, c), h);
  });

function c(t, n, u, o) {
  var l = n[o],
    c = n[o + 1],
    f = u[o],
    h = u[o + 1];
  return module924(t, l, c, f, h);
}

function f(t, u, o) {
  var s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0;
  return u.length - s == 2 ? c(t, u, o, s) : module904.createAnimatedCond(module922.lessThan(t, u[s + 1]), c(t, u, o, s), f(t, u, o, s + 1));
}

var h = {
  EXTEND: 'extend',
  CLAMP: 'clamp',
  IDENTITY: 'identity',
};

function p(t, n) {
  for (var l = 1; l < n.length; ++l)
    n[l] instanceof module907.default || n[l - 1] instanceof module907.default || module218.default(n[l] >= n[l - 1], '%s must be monotonically non-decreasing. (%s)', t, n);
}

function v(t, n) {
  module218.default(n.length >= 2, '%s must have at least 2 elements. (%s)', t, n);
}

function T(t, n) {
  for (var l = 0; l < n.length; l++) n[l] instanceof module907.default || module218.default(Number.isFinite(n[l]), '%s cannot include %s. (%s)', t, n[l], n);
}

exports.Extrapolate = h;
