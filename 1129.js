var module47 = require('./47'),
  module20 = require('./20'),
  module901 = require('./901'),
  React = require('react'),
  module1115 = require('./1115'),
  module1116 = require('./1116'),
  module1114 = require('./1114');

function p(n, t) {
  var u = Object.keys(n);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    if (t)
      o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function v(n) {
  for (var u = 1; u < arguments.length; u++) {
    var o = null != arguments[u] ? arguments[u] : {};
    if (u % 2)
      p(Object(o), true).forEach(function (u) {
        module47.default(n, u, o[u]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
      });
  }

  return n;
}

var y = module901.default.Clock,
  b = module901.default.Value,
  h = module901.default.diff,
  O = module901.default.set,
  H = module901.default.useCode,
  G = module901.default.debug,
  P = module901.default.block,
  w = function (n) {
    var t = React.useRef();
    if (undefined === t.current)
      t.current = {
        value: 'function' == typeof n ? n() : n,
      };
    return t.current.value;
  };

exports.useConst = w;

exports.useGestureHandler = function (n) {
  return w(function () {
    return module1115.onGestureEvent(n);
  });
};

exports.usePanGestureHandler = function () {
  return w(function () {
    return module1115.panGestureHandler();
  });
};

exports.useRotationGestureHandler = function () {
  return w(function () {
    return module1115.rotationGestureHandler();
  });
};

exports.usePinchGestureHandler = function () {
  return w(function () {
    return module1115.pinchGestureHandler();
  });
};

exports.useTapGestureHandler = function () {
  return w(function () {
    return module1115.tapGestureHandler();
  });
};

exports.useScrollHandler = function () {
  return w(function () {
    return module1115.scrollHandler();
  });
};

exports.useVector = function (...args) {
  return w(function () {
    return module1116.vec.createValue.apply(module1116.vec, args);
  });
};

exports.useVectors = function (...args) {
  return w(function () {
    return args.map(function (n) {
      return module1116.vec.createValue.apply(module1116.vec, module20.default(n));
    });
  });
};

exports.useClock = function () {
  return w(function () {
    return new y();
  });
};

var j = function (n) {
  return w(function () {
    return new b(n);
  });
};

exports.useValue = j;

exports.usePhysicsState = function () {
  return {
    time: j(0),
    position: j(0),
    velocity: j(0),
    finished: j(0),
  };
};

exports.useSpringConfig = function (n) {
  return v(
    {
      toValue: j(0),
      damping: 15,
      mass: 1,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 1,
    },
    n
  );
};

exports.useLoop = function () {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1e3,
    t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
    u = j(0);
  H(
    function () {
      return O(
        u,
        module1114.loop({
          duration: n,
          boomerang: t,
        })
      );
    },
    [u]
  );
  return u;
};

exports.useValues = function (...args) {
  return w(function () {
    return args.map(function (n) {
      return new b(n);
    });
  });
};

exports.useClocks = function (n) {
  return w(function () {
    return new Array(n).fill(0).map(function () {
      return new y();
    });
  });
};

exports.useDiff = function (n) {
  var t = j(0);
  H(
    function () {
      return O(t, h(n));
    },
    [t, n]
  );
  return t;
};

exports.useDebug = function (n) {
  var t = Object.keys(n);
  H(
    function () {
      return P(
        t.map(function (t) {
          return G(t, n[t]);
        })
      );
    },
    [t, n]
  );
};
