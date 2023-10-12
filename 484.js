var n = {
  CommonActions: true,
  BaseRouter: true,
  StackRouter: true,
  StackActions: true,
  TabRouter: true,
  TabActions: true,
  DrawerRouter: true,
  DrawerActions: true,
};
Object.defineProperty(exports, 'BaseRouter', {
  enumerable: true,
  get: function () {
    return module486.default;
  },
});
Object.defineProperty(exports, 'DrawerActions', {
  enumerable: true,
  get: function () {
    return module490.DrawerActions;
  },
});
Object.defineProperty(exports, 'DrawerRouter', {
  enumerable: true,
  get: function () {
    return module490.default;
  },
});
Object.defineProperty(exports, 'StackActions', {
  enumerable: true,
  get: function () {
    return module488.StackActions;
  },
});
Object.defineProperty(exports, 'StackRouter', {
  enumerable: true,
  get: function () {
    return module488.default;
  },
});
Object.defineProperty(exports, 'TabActions', {
  enumerable: true,
  get: function () {
    return module489.TabActions;
  },
});
Object.defineProperty(exports, 'TabRouter', {
  enumerable: true,
  get: function () {
    return module489.default;
  },
});
var module485 = s(require('./485'));
exports.CommonActions = module485;

var module486 = require('./486'),
  module488 = s(require('./488')),
  module489 = s(require('./489')),
  module490 = s(require('./490')),
  l = require(d[6]);

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function s(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = p(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var b = c ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (b && (b.get || b.set)) Object.defineProperty(u, f, b);
      else u[f] = t[f];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

Object.keys(l).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === l[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return l[t];
        },
      });
});
