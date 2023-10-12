var module218 = require('./218');

module.exports = function (t) {
  var o,
    s = {};

  for (o in ((t instanceof Object && !Array.isArray(t)) || module218(false), t)) t.hasOwnProperty(o) && (s[o] = o);

  return s;
};
