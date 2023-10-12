var module1041 = require('./1041'),
  module1042 = require('./1042'),
  o = Object.prototype.propertyIsEnumerable,
  c = Object.getOwnPropertySymbols,
  u = c
    ? function (n) {
        if (null == n) return [];
        else {
          n = Object(n);
          return module1041(c(n), function (t) {
            return o.call(n, t);
          });
        }
      }
    : module1042;

module.exports = u;
