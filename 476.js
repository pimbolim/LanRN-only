var ReactNative = require('react-native'),
  module477 = require('./477'),
  module478 = require('./478'),
  n = /^(\-?\d+(\.\d{1,2})?)@(ms(\d+(\.\d{1,2})?)?|s|vs)$/,
  c = /^(\-?\d+(\.\d{1,2})?)@s$/,
  f = /^(\-?\d+(\.\d{1,2})?)@vs$/,
  o = /^(\-?\d+(\.\d{1,2})?)@ms(\d+(\.\d{1,2})?)?$/,
  v = function (t) {
    if (!n.test('' + t)) return t;
    var s = parseFloat(('' + t).split('@')[0]);
    if (c.test('' + t)) return module477.scale(s);
    if (f.test('' + t)) return module477.verticalScale(s);
    if (!o.test('' + t)) return t;
    var u = ('' + t).split('ms')[1];
    return u ? module477.moderateScale(s, parseFloat(u)) : module477.moderateScale(s);
  },
  p = {
    create: function (t) {
      return ReactNative.StyleSheet.create(module478.default(t, v));
    },
  };

exports.default = p;
