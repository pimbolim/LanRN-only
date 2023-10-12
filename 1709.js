var module1669 = require('./1669');

module.exports = function t(o) {
  var c = {};

  for (var f in o) {
    var s = o[f];
    if (s) Array.isArray(s) || s instanceof module1669 ? (s = s.map(t)) : s.constructor === Object && (s = t(s));
    c[f] = s;
  }

  return c;
};
