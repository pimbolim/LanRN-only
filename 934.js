exports.default = function (n) {
  var t = new module909.default(0);
  return f(n, t);
};

var module903 = require('./903'),
  module909 = require('./909'),
  f = module903.proc(function (n, u) {
    return module903.set(u, module903.add(u, n));
  });
