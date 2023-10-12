var module1014 = require('./1014'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (n) {
  var _ = this.__data__;
  return module1014 ? undefined !== _[n] : o.call(_, n);
};
