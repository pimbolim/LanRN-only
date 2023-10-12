exports.useAsyncStorage = function (t) {
  return {
    getItem: function (...args) {
      return module453.default.getItem.apply(module453.default, [t].concat(args));
    },
    setItem: function (...args) {
      return module453.default.setItem.apply(module453.default, [t].concat(args));
    },
    mergeItem: function (...args) {
      return module453.default.mergeItem.apply(module453.default, [t].concat(args));
    },
    removeItem: function (...args) {
      return module453.default.removeItem.apply(module453.default, [t].concat(args));
    },
  };
};

var module453 = require('./453');
