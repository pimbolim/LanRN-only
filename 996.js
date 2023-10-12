var module997 = require('./997'),
  module1009 = require('./1009');

module.exports = function (t, u) {
  var v = module1009(t, u);
  return module997(v) ? v : undefined;
};
