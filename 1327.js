Object.defineProperty(exports, 'CardAnimationContext', {
  enumerable: true,
  get: function () {
    return module1366.default;
  },
});
Object.defineProperty(exports, 'GestureHandlerRefContext', {
  enumerable: true,
  get: function () {
    return module1338.default;
  },
});
Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function () {
    return module1373.default;
  },
});
Object.defineProperty(exports, 'HeaderBackButton', {
  enumerable: true,
  get: function () {
    return module1343.default;
  },
});
Object.defineProperty(exports, 'HeaderBackground', {
  enumerable: true,
  get: function () {
    return module1351.default;
  },
});
Object.defineProperty(exports, 'HeaderHeightContext', {
  enumerable: true,
  get: function () {
    return module1369.default;
  },
});
Object.defineProperty(exports, 'HeaderTitle', {
  enumerable: true,
  get: function () {
    return module1374.default;
  },
});
Object.defineProperty(exports, 'StackView', {
  enumerable: true,
  get: function () {
    return module1335.default;
  },
});
Object.defineProperty(exports, 'createStackNavigator', {
  enumerable: true,
  get: function () {
    return module1334.default;
  },
});
Object.defineProperty(exports, 'useCardAnimation', {
  enumerable: true,
  get: function () {
    return module1377.default;
  },
});
Object.defineProperty(exports, 'useGestureHandlerRef', {
  enumerable: true,
  get: function () {
    return module1379.default;
  },
});
Object.defineProperty(exports, 'useHeaderHeight', {
  enumerable: true,
  get: function () {
    return module1378.default;
  },
});
var module1328 = C(require('./1328'));
exports.CardStyleInterpolators = module1328;
var module1331 = C(require('./1331'));
exports.HeaderStyleInterpolators = module1331;
var module1332 = C(require('./1332'));
exports.TransitionSpecs = module1332;
var module1333 = C(require('./1333'));
exports.TransitionPresets = module1333;

var module1334 = require('./1334'),
  module1335 = require('./1335'),
  module1373 = require('./1373'),
  module1374 = require('./1374'),
  module1343 = require('./1343'),
  module1351 = require('./1351'),
  module1366 = require('./1366'),
  module1369 = require('./1369'),
  module1338 = require('./1338'),
  module1377 = require('./1377'),
  module1378 = require('./1378'),
  module1379 = require('./1379');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (k = function (t) {
    return t ? u : n;
  })(t);
}

function C(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = k(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
      else o[l] = t[l];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}

var module1350 = [require('./1349'), require('./1350')];
exports.Assets = module1350;
