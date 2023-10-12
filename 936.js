exports.default = function (n) {
  var t = new module909.default(0),
    o = new module909.default();
  return f(n, t, o);
};

var module903 = require('./903'),
  module909 = require('./909'),
  f = module903.proc(function (n, u, f) {
    return module903.block([module903.set(u, module903.cond(module903.defined(f), module903.sub(n, f), 0)), module903.set(f, n), u]);
  });
