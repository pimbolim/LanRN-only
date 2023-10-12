exports.default = function (t, n, f) {
  var l = new module909.default();
  return c(t, n, f, l);
};

var module903 = require('./903'),
  module909 = require('./909'),
  module938 = require('./938'),
  module939 = require('./939'),
  module936 = require('./936'),
  c = module903.proc(function (t, u, c, v) {
    return module903.set(v, module938.default(module939.default(module903.add(module903.cond(module903.defined(v), v, t), module936.default(t)), u), c));
  });
