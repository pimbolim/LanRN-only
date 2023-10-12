var module1000 = require('./1000'),
  module1003 = require('./1003'),
  module1004 = require('./1004'),
  c = '[object Null]',
  u = '[object Undefined]',
  l = module1000 ? module1000.toStringTag : undefined;

module.exports = function (n) {
  if (null == n) return undefined === n ? u : c;
  else return l && l in Object(n) ? module1003(n) : module1004(n);
};
