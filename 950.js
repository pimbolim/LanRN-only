exports.default = function (n, u, s) {
  var f = module903.cond(u.time, u.time, n),
    l = module903.add(u.frameTime, module903.sub(n, f)),
    c = s.easing(module903.divide(l, s.duration)),
    p = s.easing(module903.divide(u.frameTime, s.duration));
  return o(n, u.time, u.frameTime, u.position, u.finished, s.toValue, s.duration, c, p, l);
};

var module903 = require('./903'),
  o = module903.proc(function (o, n, u, s, f, l, c, p, v, b) {
    var T = {
        time: n,
        finished: f,
        frameTime: u,
        position: s,
      },
      V = {
        duration: c,
        toValue: l,
      },
      _ = module903.sub(V.toValue, T.position),
      h = module903.divide(_, module903.sub(1, v)),
      y = module903.sub(V.toValue, h),
      O = module903.add(y, module903.multiply(h, p));

    return module903.block([
      module903.cond(module903.greaterOrEq(b, V.duration), [module903.set(T.position, V.toValue), module903.set(T.finished, 1)], module903.set(T.position, O)),
      module903.set(T.frameTime, b),
      module903.set(T.time, o),
    ]);
  });
