var module1045 = require('./1045'),
  module1046 = require('./1046'),
  module1039 = require('./1039'),
  module1049 = require('./1049'),
  module1051 = require('./1051'),
  module1052 = require('./1052'),
  l = Object.prototype.hasOwnProperty;

module.exports = function (s, u) {
  var b = module1039(s),
    c = !b && module1046(s),
    y = !b && !c && module1049(s),
    v = !b && !c && !y && module1052(s),
    O = b || c || y || v,
    _ = O ? module1045(s.length, String) : [],
    j = _.length;

  for (var w in s)
    (!u && !l.call(s, w)) ||
      (O && ('length' == w || (y && ('offset' == w || 'parent' == w)) || (v && ('buffer' == w || 'byteLength' == w || 'byteOffset' == w)) || module1051(w, j))) ||
      _.push(w);

  return _;
};
