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

function l(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      c(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      c(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var module480 = require('./480').CreateStyles({
  root: l(
    l({}, ReactNative.StyleSheet.absoluteFill),
    {},
    {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1e3,
    }
  ),
});

exports.CStyles = module480;
