var module47 = require('./47'),
  ReactNative = require('react-native'),
  module480 = require('./480'),
  module474 = require('./474'),
  module1262 = require('./1262');

function s(t, o) {
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

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(c), true).forEach(function (n) {
        module47.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      s(Object(c)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(c, o));
      });
  }

  return t;
}

var module472 = require('./472').HeaderHeight,
  O = module480.CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingBottom: module1262.getBottomSpace,
    },
    rootLoading: {
      paddingTop: module472 - module474.ms(16),
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
    header: b(
      b(
        {
          width: '100%',
          paddingTop: module1262.paddingTop,
          height: module472,
          paddingHorizontal: module474.ms(12),
          backgroundColor: 'white',
        },
        module474.Shadow.small
      ),
      {},
      {
        position: 'absolute',
        zIndex: 100,
      }
    ),
  });

exports.CStyles = O;
