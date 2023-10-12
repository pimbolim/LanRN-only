var module1011 = require('./1011'),
  module1019 = require('./1019'),
  module1022 = require('./1022'),
  module1023 = require('./1023'),
  module1024 = require('./1024');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module1011;
s.prototype.delete = module1019;
s.prototype.get = module1022;
s.prototype.has = module1023;
s.prototype.set = module1024;
module.exports = s;
