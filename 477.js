var module12 = require('./12'),
  ReactNative = require('react-native').Dimensions.get('window'),
  l = ReactNative.width,
  c = ReactNative.height,
  u = l < c ? [l, c] : [c, l],
  f = module12.default(u, 2),
  h = f[0],
  v = f[1],
  s = function (t) {
    return Math.floor((h / 350) * t);
  };

exports.scale = s;

exports.verticalScale = function (t) {
  return Math.floor((v / 680) * t);
};

exports.moderateScale = function (t) {
  var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0.125,
    n = t + (s(t) - t) * o,
    l = Math.floor(100 * n);
  return Math.round(l / 100);
};
