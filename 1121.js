var module13 = require('./13'),
  module22 = require('./22'),
  module15 = require('./15'),
  module17 = require('./17');

module.exports = function (u) {
  return module13(u) || module22(u) || module15(u) || module17();
};

module.exports.__esModule = true;
module.exports.default = module.exports;
