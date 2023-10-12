var module1038 = require('./1038'),
  module1039 = require('./1039');

module.exports = function (o, u, c) {
  var f = u(o);
  return module1039(o) ? f : module1038(f, c(o));
};
