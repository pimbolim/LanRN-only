var module1671 = require('./1671');

module.exports = function (t, s, o) {
  var f = module1671('SyntaxError', t);
  f.input = s;
  f.offset = o;
  f.rawMessage = t;
  f.message = f.rawMessage + '\n  ' + f.input + '\n--' + new Array((f.offset || f.input.length) + 1).join('-') + '^';
  return f;
};
