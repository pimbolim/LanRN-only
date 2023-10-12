var module999 = require('./999'),
  module1005 = require('./1005'),
  o = '[object AsyncFunction]',
  c = '[object Function]',
  u = '[object GeneratorFunction]',
  b = '[object Proxy]';

module.exports = function (j) {
  if (!module1005(j)) return false;
  var f = module999(j);
  return f == c || f == u || f == o || f == b;
};
