var module980 = require('./980'),
  module1048 = require('./1048');

module.exports = function l(t, o, c, f, _) {
  return t === o || (null == t || null == o || (!module1048(t) && !module1048(o)) ? t != t && o != o : module980(t, o, c, f, l, _));
};
