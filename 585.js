var module47 = require('./47'),
  ReactNative = require('react-native');

function c(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function l(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      c(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      c(Object(l)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
      });
  }

  return t;
}

var b = ReactNative.StyleSheet.create({
  line: l(
    {
      position: 'absolute',
      bottom: 0,
    },
    ReactNative.Platform.select({
      android: {
        borderRadius: Number.EPSILON,
      },
    })
  ),
  container: l(
    l({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      overflow: 'hidden',
    }
  ),
});
exports.default = b;
