var module20 = require('./20'),
  module901 = require('./901'),
  module1109 = require('./1109'),
  o = module901.default.Value,
  f = module901.default.block,
  c = function (n, t) {
    var u;
    return {
      x: null != n ? n : 0,
      y: null != (u = null != t ? t : n) ? u : 0,
    };
  },
  y = function (n) {
    return 'number' == typeof n || n instanceof module901.default.Node || n instanceof module901.default.Value;
  },
  p = function (n, t) {
    return n.map(function (n) {
      return y(n) ? n : n[t];
    });
  },
  v = function (n) {
    for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), o = 1; o < u; o++) l[o - 1] = arguments[o];

    return {
      x: n.apply(undefined, module20.default(p(l, 'x'))),
      y: n.apply(undefined, module20.default(p(l, 'y'))),
    };
  },
  s = function (...args) {
    return v.apply(undefined, [module901.default.add].concat(args));
  },
  w = function (...args) {
    return v.apply(undefined, [module901.default.sub].concat(args));
  },
  h = function (...args) {
    return v.apply(undefined, [module901.default.divide].concat(args));
  },
  x = function (...args) {
    return v.apply(undefined, [module901.default.multiply].concat(args));
  },
  A = function (n) {
    return module901.default.sqrt(module901.default.add(module901.default.pow(n.x, 2), module901.default.pow(n.y, 2)));
  },
  b = {
    create: c,
    createValue: function () {
      var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : undefined;
      return c(new o(n), new o(null != t ? t : n));
    },
    minus: function (n) {
      return x(-1, n);
    },
    add: s,
    sub: w,
    dot: function (n, t) {
      return s(module901.default.multiply(n.x, t.x), module901.default.multiply(n.y, t.y));
    },
    div: h,
    mul: x,
    multiply: x,
    divide: h,
    pow: function (...args) {
      return v.apply(undefined, [module901.default.pow].concat(args));
    },
    sqrt: function (...args) {
      return v.apply(undefined, [module901.default.sqrt].concat(args));
    },
    set: function (n, t) {
      return f([module901.default.set(n.x, y(t) ? t : t.x), module901.default.set(n.y, y(t) ? t : t.y)]);
    },
    clamp: function (n, t, u) {
      return v(module1109.clamp, n, t, u);
    },
    apply: v,
    min: function (n, t) {
      return v(module901.default.min, n, t);
    },
    max: function (n, t) {
      return v(module901.default.max, n, t);
    },
    cos: function (...args) {
      return v.apply(undefined, [module901.default.cos].concat(args));
    },
    sin: function (...args) {
      return v.apply(undefined, [module901.default.sin].concat(args));
    },
    length: A,
    normalize: function (n) {
      return h(n, A(n));
    },
    cross: function (n, t) {
      return w(module901.default.multiply(n.x, t.y), module901.default.multiply(n.y, t.x));
    },
  };

exports.vec = b;
