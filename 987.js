var module985 = require('./985');

module.exports = function (_) {
  var n = this.__data__,
    o = module985(n, _);
  return o < 0 ? undefined : n[o][1];
};
