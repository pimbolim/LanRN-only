var module982 = require('./982'),
  module990 = require('./990'),
  module991 = require('./991'),
  module992 = require('./992'),
  module993 = require('./993'),
  module994 = require('./994');

function y(o) {
  var p = (this.__data__ = new module982(o));
  this.size = p.size;
}

y.prototype.clear = module990;
y.prototype.delete = module991;
y.prototype.get = module992;
y.prototype.has = module993;
y.prototype.set = module994;
module.exports = y;
