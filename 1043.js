var module1044 = require('./1044'),
  module1057 = require('./1057'),
  module1061 = require('./1061');

module.exports = function (u) {
  return module1061(u) ? module1044(u) : module1057(u);
};
