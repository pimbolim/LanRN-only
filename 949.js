var module903 = require('./903'),
  module932 = require('./932'),
  n = 5;

function l(l, c, s) {
  var u = module903.cond(c.time, c.time, l),
    v = module903.sub(l, u),
    f = module903.pow(s.deceleration, v),
    p = module903.divide(module903.multiply(s.deceleration, module903.sub(1, f)), module903.sub(1, s.deceleration)),
    y = module903.divide(c.velocity, 1e3),
    b = module903.multiply(y, f, 1e3),
    h = module903.add(c.position, module903.multiply(y, p));
  return module903.block([
    module903.set(c.position, h),
    module903.set(c.velocity, b),
    module903.set(c.time, l),
    module903.cond(module903.lessThan(module932.abs(b), n), module903.set(c.finished, 1)),
  ]);
}

var c = module903.proc(function (t, o, n, c, s, u) {
  return l(
    t,
    {
      time: o,
      velocity: n,
      position: c,
      finished: s,
    },
    {
      deceleration: u,
    }
  );
});

exports.default = function (t, o, n) {
  var l = o.time,
    s = o.velocity,
    u = o.position,
    v = o.finished,
    f = n.deceleration;
  return c(t, l, s, u, v, f);
};
