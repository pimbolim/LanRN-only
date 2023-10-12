var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  ReactNative = require('react-native'),
  module437 = require('./437'),
  c = ['portrait', 'landscape'];

exports.DynamicColor = function (t, n) {
  return {
    dark: t,
    light: n,
  };
};

var f = function (t, n) {
  return 'string' == typeof n || 'number' == typeof n ? n : n[ReactNative.Appearance.getColorScheme() || 'light'] || n;
};

exports.ConvertTheme = f;

exports.CreateStyles = function (t) {
  return function () {
    var v = 'PORTRAIT' === module437.Store.getState().orientation.value,
      p = {};

    for (var y in t) {
      var C = t[y],
        S = C.portrait,
        h = C.landscape,
        s = module53.default(C, c);

      for (var T in ((p[y] = module11.default({}, s, v ? S : h)), p[y])) p[y][T] = f(0, p[y][T]);
    }

    return ReactNative.StyleSheet.create(p);
  };
};
