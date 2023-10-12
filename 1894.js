var module47 = require('./47'),
  ReactNative = require('react-native'),
  module474 = require('./474');

function c(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function b(t) {
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

var module480 = require('./480').CreateStyles({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: module474.ms(20),
  },
  mainText: {
    fontFamily: module474.FontFamily.regular,
    fontSize: module474.FontSize.xl,
    color: module474.Color.black,
    lineHeight: module474.ms(22),
  },
  loaderContent: b(
    b({}, ReactNative.StyleSheet.absoluteFill),
    {},
    {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    }
  ),
});

exports.CStyles = module480;
