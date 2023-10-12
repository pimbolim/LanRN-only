var module47 = require('./47'),
  module901 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, u, s);
        else f[u] = t[u];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./901'));

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function f(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function l(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      f(Object(c), true).forEach(function (o) {
        module47.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      f(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var u = module901.default.Clock,
  s = module901.default.Value,
  p = module901.default.block,
  w = module901.default.cond,
  y = module901.default.stopClock,
  v = module901.default.set,
  O = module901.default.startClock,
  b = module901.default.clockRunning,
  k = module901.default.not,
  j = module901.default.and,
  h = module901.default.timing,
  P = module901.default.decay,
  V = module901.default.spring,
  D = module901.default.SpringUtils.makeDefaultConfig(),
  _ = function (t) {
    var n = t.fn,
      o = t.clock,
      c = t.state,
      f = t.config,
      l = t.from;
    return p([w(k(b(o)), [v(c.finished, 0), v(c.time, 0), v(c.position, l), O(o)]), n(o, c, f), w(c.finished, y(o)), c.position]);
  },
  M = function (t) {
    var n = l(
        {
          clock: new u(),
          easing: module901.Easing.linear,
          duration: 250,
          from: 0,
          to: 1,
        },
        t
      ),
      c = n.clock,
      f = n.easing,
      y = n.duration,
      O = n.from,
      j = n.to,
      P = {
        finished: new s(0),
        position: new s(0),
        time: new s(0),
        frameTime: new s(0),
      },
      V = {
        toValue: new s(0),
        duration: y,
        easing: f,
      };
    return p([
      w(k(b(c)), [v(V.toValue, j), v(P.frameTime, 0)]),
      _({
        clock: c,
        fn: h,
        state: P,
        config: V,
        from: O,
      }),
    ]);
  };

exports.timing = M;

exports.decay = function (t) {
  var n = l(
      {
        clock: new u(),
        velocity: new s(0),
        deceleration: 0.998,
        from: 0,
      },
      t
    ),
    o = n.clock,
    c = n.from,
    f = n.velocity,
    y = n.deceleration,
    O = {
      finished: new s(0),
      position: new s(0),
      time: new s(0),
      velocity: new s(0),
    },
    j = {
      deceleration: y,
    };
  return p([
    w(k(b(o)), [v(O.velocity, f)]),
    _({
      clock: o,
      fn: P,
      state: O,
      config: j,
      from: c,
    }),
  ]);
};

exports.spring = function (t) {
  var n = l(
      {
        clock: new u(),
        velocity: new s(0),
        from: 0,
      },
      t
    ),
    o = n.clock,
    c = n.from,
    f = n.velocity,
    y = n.config,
    O = n.to,
    j = {
      finished: new s(0),
      position: new s(0),
      time: new s(0),
      velocity: new s(0),
    },
    h = l(
      l({}, D),
      {},
      {
        toValue: new s(0),
      },
      y
    );
  return p([
    w(k(b(o)), [v(h.toValue, O), v(j.velocity, f)]),
    _({
      clock: o,
      fn: V,
      state: j,
      config: h,
      from: c,
    }),
  ]);
};

exports.delay = function (t, n) {
  var o = new u();
  return p([
    M({
      clock: o,
      from: 0,
      to: 1,
      duration: n,
    }),
    w(k(b(o)), t),
  ]);
};

exports.loop = function (t) {
  var n = l(
      {
        clock: new u(),
        easing: module901.Easing.linear,
        duration: 250,
        boomerang: false,
        autoStart: true,
      },
      t
    ),
    c = n.clock,
    f = n.easing,
    y = n.duration,
    P = n.boomerang,
    V = n.autoStart,
    D = {
      finished: new s(0),
      position: new s(0),
      time: new s(0),
      frameTime: new s(0),
    },
    _ = {
      toValue: new s(1),
      duration: y,
      easing: f,
    };
  return p([
    w(j(k(b(c)), V ? 1 : 0), O(c)),
    h(c, D, _),
    w(D.finished, [v(D.finished, 0), v(D.time, 0), v(D.frameTime, 0), P ? v(_.toValue, w(_.toValue, 0, 1)) : v(D.position, 0)]),
    D.position,
  ]);
};
