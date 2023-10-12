var module901 = require('./901'),
  module1109 = require('./1109'),
  s = module901.default.sub,
  v = module901.default.multiply,
  o = module901.default.add,
  l = module901.default.cos,
  c = module901.default.sin,
  f = module901.default.pow,
  y = module901.default.sqrt,
  x = function (t, n) {
    var u = t.x,
      o = t.y;
    return {
      x: s(u, n.x),
      y: v(s(o, n.y), -1),
    };
  };

exports.canvas2Cartesian = x;

var C = function (t, n) {
  var u = t.x,
    s = t.y;
  return {
    x: o(u, n.x),
    y: o(v(s, -1), n.y),
  };
};

exports.cartesian2Canvas = C;

var p = function (t) {
  var n = t.x,
    s = t.y;
  return {
    theta: module1109.atan2(s, n),
    radius: y(o(f(n, 2), f(s, 2))),
  };
};

exports.cartesian2Polar = p;

var P = function (t) {
  var n = t.theta,
    u = t.radius;
  return {
    x: v(u, l(n)),
    y: v(u, c(n)),
  };
};

exports.polar2Cartesian = P;

exports.polar2Canvas = function (t, n) {
  var u = t.theta,
    s = t.radius;
  return C(
    P({
      theta: u,
      radius: s,
    }),
    n
  );
};

exports.canvas2Polar = function (t, n) {
  var u = t.x,
    s = t.y;
  return p(
    x(
      {
        x: u,
        y: s,
      },
      n
    )
  );
};
