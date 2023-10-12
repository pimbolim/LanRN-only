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

var module480 = require('./480').CreateStyles({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: module474.ms(20),
  },
  halfSizedInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: module474.ms(10),
  },
  button: {
    height: module474.ms(40),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: module474.ms(10),
    marginBottom: module474.ms(15),
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: module474.FontSize.m,
    fontFamily: module474.FontFamily.bold,
  },
  countryItem: {
    width: '100%',
    height: module474.ms(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
    borderTopColor: module474.Color.veryLightGray,
    paddingHorizontal: module474.ms(20),
  },
  countryText: {
    color: 'black',
    fontFamily: module474.FontFamily.regular,
    fontSize: module474.FontSize.m,
  },
  termsText: {
    marginTop: module474.ms(15),
    fontFamily: module474.FontFamily.regular,
    fontSize: module474.FontSize.xs,
    color: 'gray',
  },
  datePicker: (function (t) {
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
  })(
    {
      opacity: 0,
      width: '100%',
    },
    ReactNative.StyleSheet.absoluteFill
  ),
  inputExtraStyle: {
    position: 'absolute',
    left: '100%',
  },
});

exports.CStyles = module480;
