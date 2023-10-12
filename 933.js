var module903 = require('./903'),
  t = module903.proc(function (t) {
    return module903.cond(module903.lessThan(t, 0), module903.multiply(-1, t), t);
  });

exports.default = t;
