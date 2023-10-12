var module1047 = require('./1047'),
  module1048 = require('./1048'),
  l = Object.prototype,
  c = l.hasOwnProperty,
  o = l.propertyIsEnumerable,
  p = module1047(
    (function () {
      return arguments;
    })()
  )
    ? module1047
    : function (t) {
        return module1048(t) && c.call(t, 'callee') && !o.call(t, 'callee');
      };

module.exports = p;
