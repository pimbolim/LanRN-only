exports.default = function (n, t) {
  var c = new module909.default();
  return u(n, t, c);
};

var module903 = require('./903'),
  module909 = require('./909'),
  u = module903.proc(function (n, o, u) {
    return module903.block([module903.cond(module903.not(module903.defined(u)), module903.set(u, n)), module903.cond(module903.neq(n, u), [module903.set(u, n), o])]);
  });
