var module211 = require('./211'),
  o = module211.twoArgumentPooler;

function n(t, o) {
  this.left = t;
  this.top = o;
}

n.prototype.destructor = function () {
  this.left = null;
  this.top = null;
};

module211.addPoolingTo(n, o);
module.exports = n;
