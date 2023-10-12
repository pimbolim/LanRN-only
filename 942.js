var module903 = require('./903'),
  n = module903.proc(function (n) {
    return module903.sub(1, module903.round(module903.sub(0.5, n)));
  });

exports.default = n;
