var module211 = require('./211'),
  o = module211.twoArgumentPooler;

function n(t, o) {
  this.width = t;
  this.height = o;
}

n.prototype.destructor = function () {
  this.width = null;
  this.height = null;
};

n.getPooledFromElement = function (t) {
  return n.getPooled(t.offsetWidth, t.offsetHeight);
};

module211.addPoolingTo(n, o);
module.exports = n;
