var module1020 = require('./1020');

module.exports = function (t, n) {
  var h = module1020(this, t),
    o = h.size;
  h.set(t, n);
  this.size += h.size == o ? 0 : 1;
  return this;
};
