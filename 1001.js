var module1002 = require('./1002'),
  f = 'object' == typeof self && self && self.Object === Object && self,
  s = module1002 || f || Function('return this')();

module.exports = s;
