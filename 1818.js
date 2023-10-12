var module1819 = require('./1819'),
  module1820 = require('./1820');

module.exports = function (n) {
  return module1820(module1819(n));
};

module.exports.parse = module1819;
module.exports.compile = module1820;
