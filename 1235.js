var module1229 = require('./1229'),
  module1236 = require('./1236');

module.exports = function (c, o, u) {
  var f = this || module1236;
  module1229.forEach(u, function (t) {
    c = t.call(f, c, o);
  });
  return c;
};
