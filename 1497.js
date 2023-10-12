require('./1502');

var module11 = require('./11'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1498 = require('./1498'),
  module1499 = require('./1499'),
  module1500 = require('./1500'),
  module1501 = require('./1501'),
  module458 = require('./458'),
  x = ReactNative.Platform.select({
    android: module1499.default,
    ios: module1498.default,
  });

x.propTypes = module1500.default;

var s = function (t) {
    var o = t.modal,
      n = t.androidVariant;
    return n || (o ? 'nativeAndroid' : 'iosClone');
  },
  C = function (t) {
    var o = t.title,
      n = t.mode;
    return null === o ? '' : o || ('time' === n ? 'Select time' : module458.default.authentication.selectDate);
  },
  p = React.default.memo(function (t) {
    return React.default.createElement(
      x,
      module11.default(
        {
          ref: t.innerRef,
        },
        t,
        {
          textColor: module1501.colorToHex(t.textColor),
          fadeToColor: module1501.colorToHex(t.fadeToColor),
          title: C(t),
          confirmText: t.confirmText ? t.confirmText : module458.default.generic.confirm,
          cancelText: t.cancelText ? t.cancelText : module458.default.generic.cancel,
          androidVariant: s(t),
          minuteInterval: t.minuteInterval ? t.minuteInterval : 1,
          mode: t.mode ? t.mode : 'datetime',
        }
      )
    );
  });

exports.default = p;
