var module47 = require('./47'),
  ReactNative = require('react-native');

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

var O = ReactNative.StyleSheet.create({
  container: (function (t) {
    for (var o = 1; o < arguments.length; o++) {
      var O = null != arguments[o] ? arguments[o] : {};
      if (o % 2)
        c(Object(O), true).forEach(function (o) {
          module47.default(t, o, O[o]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(O));
      else
        c(Object(O)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(O, n));
        });
    }

    return t;
  })({}, ReactNative.StyleSheet.absoluteFillObject),
});
exports.styles = O;
