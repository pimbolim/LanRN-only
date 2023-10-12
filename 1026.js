var module1010 = require('./1010'),
  module1027 = require('./1027'),
  module1028 = require('./1028');

function n(o) {
  var p = -1,
    n = null == o ? 0 : o.length;

  for (this.__data__ = new module1010(); ++p < n; ) this.add(o[p]);
}

n.prototype.add = n.prototype.push = module1027;
n.prototype.has = module1028;
module.exports = n;
