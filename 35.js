var module36 = require('./36');

module.exports = function (o, n) {
  if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');
  Object.defineProperty(o, 'prototype', {
    value: Object.create(n && n.prototype, {
      constructor: {
        value: o,
        writable: true,
        configurable: true,
      },
    }),
    writable: false,
  });
  if (n) module36(o, n);
};

module.exports.__esModule = true;
module.exports.default = module.exports;
