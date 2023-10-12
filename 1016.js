var module1014 = require('./1014'),
  t = '__lodash_hash_undefined__',
  n = Object.prototype.hasOwnProperty;

module.exports = function (o) {
  var h = this.__data__;

  if (module1014) {
    var s = h[o];
    return s === t ? undefined : s;
  }

  return n.call(h, o) ? h[o] : undefined;
};
