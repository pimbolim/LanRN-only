var module34 = require('./34'),
  module36 = require('./36'),
  module95 = require('./95'),
  module96 = require('./96');

function p(s) {
  var f = 'function' == typeof Map ? new Map() : undefined;

  module.exports = p = function (p) {
    if (null === p || !module95(p)) return p;
    if ('function' != typeof p) throw new TypeError('Super expression must either be null or a function');

    if (undefined !== f) {
      if (f.has(p)) return f.get(p);
      f.set(p, s);
    }

    function s() {
      return module96(p, arguments, module34(this).constructor);
    }

    s.prototype = Object.create(p.prototype, {
      constructor: {
        value: s,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return module36(s, p);
  };

  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return p(s);
}

module.exports = p;
module.exports.__esModule = true;
module.exports.default = module.exports;
