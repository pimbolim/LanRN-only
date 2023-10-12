var module47 = require('./47'),
  React = require('react'),
  module901 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./901')),
  module1129 = require('./1129');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function c(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var p = module901.default.Value,
  w = module901.default.cond,
  v = module901.default.block,
  h = module901.default.set,
  O = module901.default.Clock,
  y = module901.default.spring,
  b = module901.default.startClock,
  T = module901.default.stopClock,
  j = module901.default.timing,
  P = module901.default.neq,
  k = module901.default.SpringUtils.makeDefaultConfig(),
  C = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
      o = new p(0),
      s = new O(),
      f = {
        finished: new p(0),
        frameTime: new p(0),
        position: new p(0),
        time: new p(0),
      },
      l = c(
        {
          toValue: new p(0),
          duration: 150,
          easing: module901.Easing.linear,
        },
        n
      );
    return v([
      w(module901.not(o), [h(o, 1), h(f.position, t)]),
      w(P(l.toValue, t), [h(f.frameTime, 0), h(f.time, 0), h(f.finished, 0), h(l.toValue, t), b(s)]),
      j(s, f, l),
      w(f.finished, T(s)),
      f.position,
    ]);
  };

exports.withTransition = C;

var V = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : k,
    o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0,
    s = new p(0),
    f = new O(),
    l = {
      finished: new p(0),
      velocity: new p(0),
      position: new p(0),
      time: new p(0),
    },
    j = c(
      {
        toValue: new p(0),
        damping: 15,
        mass: 1,
        stiffness: 150,
        overshootClamping: false,
        restSpeedThreshold: 1,
        restDisplacementThreshold: 1,
      },
      n
    );
  return v([
    w(module901.not(s), [h(s, 1), h(l.position, t)]),
    w(P(j.toValue, t), [h(l.velocity, o), h(l.time, 0), h(l.finished, 0), h(j.toValue, t), b(f)]),
    y(f, l, j),
    w(l.finished, T(f)),
    l.position,
  ]);
};

exports.withSpringTransition = V;
var D = C;
exports.withTimingTransition = D;

var S = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    u = module1129.useConst(function () {
      return new p(0);
    });
  React.useEffect(
    function () {
      u.setValue('boolean' == typeof t ? (t ? 1 : 0) : t);
    },
    [u, t]
  );
  return module1129.useConst(function () {
    return C(u, n);
  });
};

exports.useTransition = S;

exports.useSpringTransition = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : k,
    u = module1129.useConst(function () {
      return new p(0);
    });
  React.useEffect(
    function () {
      u.setValue('boolean' == typeof t ? (t ? 1 : 0) : t);
    },
    [u, t]
  );
  return module1129.useConst(function () {
    return V(u, n);
  });
};

var _ = S;
exports.useTimingTransition = _;
