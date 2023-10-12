var n = {
  decay: true,
  timing: true,
  spring: true,
  Easing: true,
  Clock: true,
  Value: true,
  Node: true,
  Transition: true,
  Transitioning: true,
  createTransitioningComponent: true,
  SpringUtils: true,
};
Object.defineProperty(exports, 'Clock', {
  enumerable: true,
  get: function () {
    return module912.default;
  },
});
Object.defineProperty(exports, 'Easing', {
  enumerable: true,
  get: function () {
    return module902.default;
  },
});
Object.defineProperty(exports, 'Node', {
  enumerable: true,
  get: function () {
    return module907.default;
  },
});
Object.defineProperty(exports, 'SpringUtils', {
  enumerable: true,
  get: function () {
    return module960.default;
  },
});
Object.defineProperty(exports, 'Transition', {
  enumerable: true,
  get: function () {
    return module959.Transition;
  },
});
Object.defineProperty(exports, 'Transitioning', {
  enumerable: true,
  get: function () {
    return module959.Transitioning;
  },
});
Object.defineProperty(exports, 'Value', {
  enumerable: true,
  get: function () {
    return module920.default;
  },
});
Object.defineProperty(exports, 'createTransitioningComponent', {
  enumerable: true,
  get: function () {
    return module959.createTransitioningComponent;
  },
});

var module47 = require('./47'),
  ReactNative = require('react-native'),
  module902 = require('./902'),
  module912 = require('./912'),
  module920 = require('./920'),
  module907 = require('./907'),
  module931 = require('./931'),
  module903 = V(require('./903'));

Object.keys(module903).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === module903[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module903[t];
        },
      });
});
var module932 = V(require('./932'));
Object.keys(module932).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === module932[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module932[t];
        },
      });
});

var module944 = require('./944'),
  module949 = require('./949'),
  module950 = require('./950'),
  module951 = require('./951'),
  module952 = require('./952'),
  module954 = require('./954'),
  module956 = require('./956'),
  module957 = require('./957'),
  module958 = require('./958'),
  module959 = require('./959'),
  module960 = require('./960');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function V(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = S(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
      else u[l] = t[l];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

function W(t, n) {
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

function D(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      W(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      W(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var E = module958.default(module949.default, module956.default);
exports.decay = E;
var N = module958.default(module950.default, module952.default);
exports.timing = N;
var U = module958.default(module951.default, module954.default);
exports.spring = U;
var I = D(
  D(
    D(
      {
        View: module944.default(ReactNative.View),
        Text: module944.default(ReactNative.Text),
        Image: module944.default(ReactNative.Image),
        ScrollView: module944.default(ReactNative.ScrollView),
        Code: module931.default,
        createAnimatedComponent: module944.default,
        Clock: module912.default,
        Value: module920.default,
        Node: module907.default,
      },
      module903
    ),
    module932
  ),
  {},
  {
    decay: E,
    timing: N,
    spring: U,
    SpringUtils: module960.default,
    addWhitelistedNativeProps: module957.addWhitelistedNativeProps,
    addWhitelistedUIProps: module957.addWhitelistedUIProps,
  }
);
exports.default = I;
