var module1014 = require('./1014'),
  s = '__lodash_hash_undefined__';

module.exports = function (t, h) {
  var n = this.__data__;
  this.size += this.has(t) ? 0 : 1;
  n[t] = module1014 && undefined === h ? s : h;
  return this;
};
