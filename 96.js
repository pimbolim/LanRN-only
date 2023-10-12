var module36 = require('./36'),
  module97 = require('./97');

function p(s, u, n) {
  if (module97()) {
    module.exports = p = Reflect.construct;
    module.exports.__esModule = true;
    module.exports.default = module.exports;
  } else {
    module.exports = p = function (o, p, s) {
      var u = [null];
      u.push.apply(u, p);
      var n = new (Function.bind.apply(o, u))();
      if (s) module36(n, s.prototype);
      return n;
    };

    module.exports.__esModule = true;
    module.exports.default = module.exports;
  }

  return p.apply(null, arguments);
}

module.exports = p;
module.exports.__esModule = true;
module.exports.default = module.exports;
