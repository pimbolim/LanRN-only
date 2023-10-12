var module981 = require('./981'),
  module1025 = require('./1025'),
  module1031 = require('./1031'),
  module1035 = require('./1035'),
  module1062 = require('./1062'),
  module1039 = require('./1039'),
  module1049 = require('./1049'),
  module1052 = require('./1052'),
  l = 1,
  v = '[object Arguments]',
  w = '[object Array]',
  b = '[object Object]',
  j = Object.prototype.hasOwnProperty;

module.exports = function (s, y, O, A, h, x) {
  var P = module1039(s),
    k = module1039(y),
    q = P ? w : module1062(s),
    z = k ? w : module1062(y),
    B = (q = q == v ? b : q) == b,
    C = (z = z == v ? b : z) == b,
    D = q == z;

  if (D && module1049(s)) {
    if (!module1049(y)) return false;
    P = true;
    B = false;
  }

  if (D && !B) {
    if (!x) x = new module981();
    return P || module1052(s) ? module1025(s, y, O, A, h, x) : module1031(s, y, q, O, A, h, x);
  }

  if (!(O & l)) {
    var E = B && j.call(s, '__wrapped__'),
      F = C && j.call(y, '__wrapped__');

    if (E || F) {
      var G = E ? s.value() : s,
        H = F ? y.value() : y;
      if (!x) x = new module981();
      return h(G, H, O, A, x);
    }
  }

  return !!D && (x || (x = new module981()), module1035(s, y, O, A, h, x));
};
