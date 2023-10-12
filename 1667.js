module.exports = require('./1668').create(
  (function () {
    for (var n = {}, o = 0; o < arguments.length; o++) {
      var t = arguments[o];

      for (var v in t) n[v] = t[v];
    }

    return n;
  })(require('./1711'), require('./1758'), require('./1786'))
);
module.exports.version = require('./1787').version;
