var module47 = require('./47'),
  module901 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('./901')),
  module961 = require('./961'),
  ReactNative = require('react-native'),
  module1112 = require('./1112'),
  module1116 = require('./1116');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function v(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      p(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var E = module901.default.proc,
  w = module901.default.Clock,
  y = module901.default.Value,
  h = module901.default.event,
  S = module901.default.add,
  O = module901.default.block,
  D = module901.default.cond,
  b = module901.default.eq,
  N = module901.default.multiply,
  P = module901.default.set,
  G = module901.default.stopClock,
  j = module901.default.and,
  A = module901.default.not,
  H = module901.default.clockRunning,
  C = module901.default.startClock,
  T = module901.default.neq,
  V = module901.default.call,
  I = module901.default.decay,
  x = module901.default.spring,
  M = module901.default.onChange,
  k = module901.default.debug,
  B = E(function (t) {
    return 'android' === ReactNative.Platform.OS
      ? D(b(module901.diff(t), module961.State.ACTIVE - module961.State.BEGAN), b(t, module961.State.ACTIVE))
      : b(t, module961.State.BEGAN);
  });
exports.pinchBegan = B;
var R = E(function (t, n) {
  return j(b(t, module961.State.ACTIVE), b(n, 2), 'android' === ReactNative.Platform.OS ? A(B(t)) : 1);
});
exports.pinchActive = R;
var U = E(function (t, n) {
  return 'android' === ReactNative.Platform.OS ? module901.or(b(t, module961.State.END), module901.lessThan(n, 2)) : b(t, module961.State.END);
});
exports.pinchEnd = U;

exports.withScaleOffset = function (t, n) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : new y(1);
  return D(b(n, module961.State.END), [P(o, N(o, t)), o], N(o, t));
};

exports.withOffset = function (t, n) {
  var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : new y(0);
  return D(b(n, module961.State.END), [P(o, S(o, t)), o], S(o, t));
};

exports.withSpring = function (t) {
  var n = v(
      {
        offset: new y(0),
      },
      t
    ),
    o = n.value,
    u = n.velocity,
    s = n.state,
    f = n.snapPoints,
    p = n.offset,
    E = n.config,
    h = n.onSnap,
    N = new w(),
    I = {
      finished: new y(0),
      velocity: new y(0),
      position: new y(0),
      time: new y(0),
    },
    M = v(
      {
        toValue: new y(0),
        damping: 6,
        mass: 1,
        stiffness: 64,
        overshootClamping: false,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.01,
      },
      E
    ),
    k = new y(1),
    B = j(b(s, module961.State.BEGAN), H(N)),
    R = [P(p, I.position), G(N), P(k, 1)],
    U = h ? [D(H(N), V([I.position], h))] : [];
  return O([
    D(B, R),
    D(k, P(I.position, p)),
    D(T(s, module961.State.END), [P(k, 0), P(I.finished, 0), P(I.position, S(p, o))]),
    D(j(b(s, module961.State.END), A(k)), [
      D(j(A(H(N)), A(I.finished)), [P(I.velocity, u), P(I.time, 0), P(M.toValue, module1112.snapPoint(I.position, u, f)), C(N)]),
      x(N, I, M),
      D(I.finished, [].concat(U, R)),
    ]),
    I.position,
  ]);
};

exports.withDecay = function (t) {
  var n = v(
      {
        offset: new y(0),
        deceleration: 0.998,
      },
      t
    ),
    o = n.value,
    u = n.velocity,
    c = n.state,
    s = n.offset,
    f = n.deceleration,
    p = new w(),
    E = {
      finished: new y(0),
      velocity: new y(0),
      position: new y(0),
      time: new y(0),
    },
    h = j(b(c, module961.State.BEGAN), H(p)),
    N = [P(s, E.position), G(p)];
  return O([
    D(h, N),
    D(T(c, module961.State.END), [P(E.finished, 0), P(E.position, S(s, o))]),
    D(b(c, module961.State.END), [
      D(j(A(H(p)), A(E.finished)), [P(E.velocity, u), P(E.time, 0), C(p)]),
      I(p, E, {
        deceleration: f,
      }),
      D(E.finished, N),
    ]),
    E.position,
  ]);
};

var _ = function (t) {
  return h([
    {
      nativeEvent: {
        contentOffset: t,
      },
    },
  ]);
};

exports.onScrollEvent = _;

var L = function (t) {
  var n = h([
    {
      nativeEvent: t,
    },
  ]);
  return {
    onHandlerStateChange: n,
    onGestureEvent: n,
  };
};

exports.onGestureEvent = L;

exports.tapGestureHandler = function () {
  var t = new y(module961.State.UNDETERMINED),
    n = module1116.vec.createValue(0),
    o = module1116.vec.createValue(0);
  return {
    gestureHandler: L({
      state: t,
      x: n.x,
      y: n.y,
      absoluteX: o.x,
      absoluteY: o.y,
    }),
    position: n,
    absolutePosition: o,
    state: t,
  };
};

exports.panGestureHandler = function () {
  var t = module1116.vec.createValue(0),
    n = module1116.vec.createValue(0),
    o = module1116.vec.createValue(0),
    u = new y(module961.State.UNDETERMINED);
  return {
    position: t,
    translation: n,
    velocity: o,
    state: u,
    gestureHandler: L({
      x: t.x,
      translationX: n.x,
      velocityX: o.x,
      y: t.y,
      translationY: n.y,
      velocityY: o.y,
      state: u,
    }),
  };
};

exports.pinchGestureHandler = function () {
  var t = module1116.vec.createValue(0, 0),
    n = new y(1),
    o = new y(0),
    u = new y(module961.State.UNDETERMINED);
  return {
    numberOfPointers: o,
    scale: n,
    state: u,
    gestureHandler: L({
      numberOfPointers: o,
      focalX: t.x,
      focalY: t.y,
      scale: n,
      state: u,
    }),
    focal: t,
  };
};

exports.rotationGestureHandler = function () {
  var t = module1116.vec.createValue(0, 0),
    n = new y(0),
    o = new y(module961.State.UNDETERMINED);
  return {
    rotation: n,
    state: o,
    gestureHandler: L({
      anchorX: t.x,
      anchorY: t.y,
      rotation: n,
      state: o,
    }),
    anchor: t,
  };
};

exports.scrollHandler = function () {
  var t = new y(0),
    n = new y(0);
  return {
    x: t,
    y: n,
    scrollHandler: {
      onScroll: _({
        x: t,
        y: n,
      }),
      scrollEventThrottle: 1,
    },
  };
};

exports.debugGestureState = function (t, n) {
  var o = function (n) {
    return k(t, new y(n));
  };

  return M(
    n,
    D(
      b(n, module961.State.UNDETERMINED),
      o('UNDETERMINED'),
      D(
        b(n, module961.State.BEGAN),
        o('BEGAN'),
        D(b(n, module961.State.ACTIVE), o('ACTIVE'), D(b(n, module961.State.END), o('END'), D(b(n, module961.State.CANCELLED), o('CANCELLED'), o('FAILED'))))
      )
    )
  );
};
