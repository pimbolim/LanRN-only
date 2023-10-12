var module1229 = require('./1229');

module.exports = function (o, n) {
  module1229.forEach(o, function (t, c) {
    if (c !== n && c.toUpperCase() === n.toUpperCase()) {
      o[n] = t;
      delete o[c];
    }
  });
};
