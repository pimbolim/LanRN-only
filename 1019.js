var module1020 = require('./1020');

module.exports = function (n) {
  var s = module1020(this, n).delete(n);
  this.size -= s ? 1 : 0;
  return s;
};
