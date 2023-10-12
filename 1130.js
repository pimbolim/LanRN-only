var module901 = require('./901'),
  module1116 = require('./1116'),
  s = module901.default.divide,
  u = module901.default.sub,
  o = module901.default.multiply,
  f = module901.default.add,
  c = module901.default.cos,
  y = module901.default.sin;

exports.translateZ = function (t, n) {
  return {
    scale: s(t, u(t, n)),
  };
};

exports.translate = function (t) {
  return [
    {
      translateX: t.x,
    },
    {
      translateY: t.y,
    },
  ];
};

exports.transformOrigin = function (t) {
  for (var n = t.x, l = t.y, s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) u[f - 1] = arguments[f];

  return [
    {
      translateX: n,
    },
    {
      translateY: l,
    },
  ].concat(u, [
    {
      translateX: o(n, -1),
    },
    {
      translateY: o(l, -1),
    },
  ]);
};

exports.rotateTranslation = function (t, n) {
  return {
    x: u(o(t.x, c(n)), o(t.y, y(n))),
    y: f(o(t.x, y(n)), o(t.y, c(n))),
  };
};

exports.scaleTranslation = function (t, n) {
  return module1116.vec.multiply(t, n);
};
