var module998 = require('./998'),
  module1006 = require('./1006'),
  module1005 = require('./1005'),
  module1008 = require('./1008'),
  p = /^\[object .+?Constructor\]$/,
  u = Function.prototype,
  s = Object.prototype,
  $ = u.toString,
  f = s.hasOwnProperty,
  l = RegExp(
    '^' +
      $.call(f)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

module.exports = function (u) {
  return !(!module1005(u) || module1006(u)) && (module998(u) ? l : p).test(module1008(u));
};
