var module1002 = require('./1002'),
  n = 'object' == typeof exports && exports && !exports.nodeType && exports,
  o = n && 'object' == typeof module && module && !module.nodeType && module,
  p = o && o.exports === n && module1002.process,
  c = (function () {
    try {
      var t = o && o.require && o.require('util').types;

      return t || (p && p.binding && p.binding('util'));
    } catch (t) {}
  })();

module.exports = c;
