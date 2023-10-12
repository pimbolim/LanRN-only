var module986 = require('./986');

module.exports = function (t, f) {
  for (var o = t.length; o--; ) if (module986(t[o][0], f)) return o;

  return -1;
};
