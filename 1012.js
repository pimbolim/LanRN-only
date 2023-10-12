var module1013 = require('./1013'),
  module1015 = require('./1015'),
  module1016 = require('./1016'),
  module1017 = require('./1017'),
  module1018 = require('./1018');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module1013;
s.prototype.delete = module1015;
s.prototype.get = module1016;
s.prototype.has = module1017;
s.prototype.set = module1018;
module.exports = s;
