var module1058 = require('./1058'),
  module1059 = require('./1059'),
  o = Object.prototype.hasOwnProperty;

module.exports = function (c) {
  if (!module1058(c)) return module1059(c);
  var u = [];

  for (var p in Object(c)) o.call(c, p) && 'constructor' != p && u.push(p);

  return u;
};
