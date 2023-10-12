module.exports = function (n) {
  var f = n[0],
    c = n[1] - 1;
  if (c < 0 && f <= 0) return t;
  if (-1 === f)
    return function (n) {
      return n <= c;
    };
  if (0 === f)
    return function (n) {
      return n === c;
    };
  if (1 === f)
    return c < 0
      ? u
      : function (n) {
          return n >= c;
        };
  var o = c % f;
  if (o < 0) o += f;
  if (f > 1)
    return function (n) {
      return n >= c && n % f === o;
    };
  f *= -1;
  return function (n) {
    return n <= c && n % f === o;
  };
};

var module1808 = require('./1808'),
  u = module1808.trueFunc,
  t = module1808.falseFunc;
