var module1244 = require('./1244'),
  module1245 = require('./1245');

module.exports = function (u, c) {
  return u && !module1244(c) ? module1245(u, c) : c;
};
