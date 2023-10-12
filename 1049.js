var module1001 = require('./1001'),
  module1050 = require('./1050'),
  t = 'object' == typeof exports && exports && !exports.nodeType && exports,
  p = t && 'object' == typeof module && module && !module.nodeType && module,
  n = p && p.exports === t ? module1001.Buffer : undefined,
  y = (n ? n.isBuffer : undefined) || module1050;

module.exports = y;
