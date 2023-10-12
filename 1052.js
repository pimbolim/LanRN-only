var module1053 = require('./1053'),
  module1055 = require('./1055'),
  module1056 = require('./1056'),
  s = module1056 && module1056.isTypedArray,
  t = s ? module1055(s) : module1053;

module.exports = t;
