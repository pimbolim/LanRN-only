var React = require('react'),
  module901 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./901')),
  module961 = require('./961'),
  module1107 = require('./1107'),
  module1147 = require('./1147');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

exports.useTransition = function (c) {
  var l = c.animationDuration,
    f = c.animationEasing,
    E = c.contentPanGestureState,
    T = c.contentPanGestureTranslationY,
    p = c.contentPanGestureVelocityY,
    V = c.handlePanGestureState,
    M = c.handlePanGestureTranslationY,
    P = c.handlePanGestureVelocityY,
    N = c.scrollableContentOffsetY,
    O = c.snapPoints,
    G = c.initialPosition,
    S = module1107.useValue(module1147.GESTURE.UNDETERMINED),
    h = module1107.useValue(G),
    q = React.useMemo(
      function () {
        return module901.eq(E, module961.State.ACTIVE);
      },
      [E]
    ),
    y = React.useMemo(
      function () {
        return module901.eq(V, module961.State.ACTIVE);
      },
      [V]
    ),
    R = React.useMemo(
      function () {
        return module901.or(q, y);
      },
      [q, y]
    ),
    C = module1107.useValue(0),
    D = module1107.useValue(-1),
    w = module1107.useClock(),
    U = React.useMemo(
      function () {
        return {
          toValue: new module901.default.Value(0),
          duration: l,
          easing: f,
        };
      },
      [f, l]
    ),
    b = React.useMemo(
      function () {
        return {
          finished: new module901.default.Value(0),
          position: new module901.default.Value(G),
          frameTime: new module901.default.Value(0),
          time: new module901.default.Value(0),
        };
      },
      [G]
    ),
    k = React.useMemo(
      function () {
        return [
          module901.set(S, module1147.GESTURE.UNDETERMINED),
          module901.set(C, 0),
          module901.set(h, U.toValue),
          module901.set(b.frameTime, 0),
          module901.set(b.time, 0),
          module901.stopClock(w),
        ];
      },
      [b.frameTime, b.time, w, U.toValue, S, h, C]
    ),
    v = React.useMemo(
      function () {
        return module901.cond(module901.eq(S, module1147.GESTURE.CONTENT), module901.cond(module901.eq(h, 0), module901.add(T, module901.multiply(N, -1)), T), M);
      },
      [T, S, h, M, N]
    ),
    j = React.useMemo(
      function () {
        return module901.cond(module901.eq(S, module1147.GESTURE.CONTENT), p, P);
      },
      [p, S, P]
    ),
    _ = React.useMemo(
      function () {
        return module901.and(module901.clockRunning(w), module901.or(R, module901.neq(D, -1)));
      },
      [w, R, D]
    );

  return {
    position: React.useMemo(
      function () {
        return module901.block([
          module901.cond(_, [k, module901.set(h, b.position)]),
          module901.cond(R, [
            module901.set(S, module901.cond(q, module1147.GESTURE.CONTENT, module1147.GESTURE.HANDLE)),
            module901.cond(
              module901.not(module901.greaterOrEq(module901.add(h, v), 0)),
              [module901.set(b.position, 0), module901.set(b.finished, 0)],
              module901.cond(
                module901.not(module901.lessOrEq(module901.add(h, v), O[0])),
                [module901.set(b.position, O[0]), module901.set(b.finished, 0)],
                [module901.set(b.position, module901.add(h, v)), module901.set(b.finished, 0)]
              )
            ),
          ]),
          module901.onChange(
            module901.add(E, V),
            module901.cond(
              module901.or(
                module901.and(module901.eq(S, module1147.GESTURE.CONTENT), module901.eq(E, module961.State.END)),
                module901.and(module901.eq(S, module1147.GESTURE.HANDLE), module901.eq(V, module961.State.END))
              ),
              [module901.set(U.toValue, module1107.snapPoint(module901.add(h, v), j, O)), module901.set(C, 1)]
            )
          ),
          module901.cond(module901.neq(D, -1), [module901.set(U.toValue, D), module901.set(b.finished, 0), module901.set(C, 1), module901.set(D, -1)]),
          module901.cond(C, [
            module901.cond(module901.and(module901.not(module901.clockRunning(w)), module901.not(b.finished)), [
              module901.set(b.finished, 0),
              module901.set(b.frameTime, 0),
              module901.set(b.time, 0),
              module901.startClock(w),
            ]),
            module901.timing(w, b, U),
            module901.cond(b.finished, k),
          ]),
          b.position,
        ]);
      },
      [O]
    ),
    manualSnapToPoint: D,
    currentPosition: h,
    currentGesture: S,
  };
};
