var module999 = require('./999'),
  module1048 = require('./1048'),
  o = '[object Arguments]';

module.exports = function (u) {
  return module1048(u) && module999(u) == o;
};
