var module982 = require('./982'),
  module995 = require('./995'),
  module1010 = require('./1010');

module.exports = function (n, h) {
  var f = this.__data__;

  if (f instanceof module982) {
    var u = f.__data__;

    if (!module995 || u.length < 199) {
      u.push([n, h]);
      this.size = ++f.size;
      return this;
    }

    f = this.__data__ = new module1010(u);
  }

  f.set(n, h);
  this.size = f.size;
  return this;
};
