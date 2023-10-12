exports.default = function (u, o) {
  u = module905.adapt(u);
  o = module905.adapt(o);
  return module903.cond(module903.lessThan(u, o), u, o);
};

var module903 = require('./903'),
  module905 = require('./905');
