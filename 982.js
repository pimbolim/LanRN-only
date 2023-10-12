var module983 = require('./983'),
  module984 = require('./984'),
  module987 = require('./987'),
  module988 = require('./988'),
  module989 = require('./989');

function s(t) {
  var o = -1,
    p = null == t ? 0 : t.length;

  for (this.clear(); ++o < p; ) {
    var l = t[o];
    this.set(l[0], l[1]);
  }
}

s.prototype.clear = module983;
s.prototype.delete = module984;
s.prototype.get = module987;
s.prototype.has = module988;
s.prototype.set = module989;
module.exports = s;
