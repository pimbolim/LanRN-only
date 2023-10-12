exports.default = function (t, f, c) {
  var p = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1;
  if ('web' === ReactNative.Platform.OS) return module903.concat('rgba(', t, ',', f, ',', c, ',', p, ')');
  p = p instanceof module907.default ? module903.round(module903.multiply(p, 255)) : Math.round(255 * p);
  return o(t, f, c, p);
};

var ReactNative = require('react-native'),
  module903 = require('./903'),
  module907 = require('./907'),
  o = module903.proc(function (t, l, o, f) {
    var c = module903.add(module903.multiply(f, 16777216), module903.multiply(t, 65536), module903.multiply(l, 256), o);
    return 'android' === ReactNative.Platform.OS ? module903.cond(module903.lessThan(c, 2147483648), c, module903.sub(c, 2 ** 32)) : c;
  });
