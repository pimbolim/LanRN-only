var n,
  module1007 = require('./1007'),
  o = (n = /[^.]+$/.exec((module1007 && module1007.keys && module1007.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';

module.exports = function (n) {
  return !!o && o in n;
};
