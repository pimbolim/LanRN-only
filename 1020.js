var module1021 = require('./1021');

module.exports = function (n, _) {
  var o = n.__data__;
  return module1021(_) ? o['string' == typeof _ ? 'string' : 'hash'] : o.map;
};
