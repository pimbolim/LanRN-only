var module47 = require('./47'),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);
    if (n)
      f = f.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, f);
  }

  return o;
}

function u(t) {
  for (var o = 1; o < arguments.length; o++) {
    var f = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(f), true).forEach(function (o) {
        module47.default(t, o, f[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(f));
    else
      l(Object(f)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(f, n));
      });
  }

  return t;
}

var c = {
    fadeToColor: PropTypes.default.string,
    androidVariant: PropTypes.default.oneOf(['iosClone', 'nativeAndroid']),
    dividerHeight: PropTypes.default.number,
    is24hourSource: PropTypes.default.oneOf(['locale', 'device']),
  },
  s = {
    modal: PropTypes.default.bool,
    open: PropTypes.default.bool,
    onConfirm: PropTypes.default.func,
    onCancel: PropTypes.default.func,
    confirmText: PropTypes.default.string,
    cancelText: PropTypes.default.string,
    title: PropTypes.default.string,
  },
  O = PropTypes.default.instanceOf(Date),
  p = u(
    u({}, 'android' === ReactNative.Platform ? c : {}),
    {},
    {
      date: O.isRequired,
      onChange: PropTypes.default.func,
      minimumDate: O,
      maximumDate: O,
      mode: PropTypes.default.oneOf(['date', 'time', 'datetime']),
      minuteInterval: PropTypes.default.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),
      locale: PropTypes.default.string,
      textColor: PropTypes.default.string,
      timeZoneOffsetInMinutes: PropTypes.default.number,
      testID: ReactNative.ViewPropTypes.testID,
      style: ReactNative.ViewPropTypes.style,
    },
    s
  );
exports.default = p;
