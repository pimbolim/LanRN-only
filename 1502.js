exports.throwIfInvalidProps = function (t) {
  u.forEach(function (n) {
    return n.validate(t);
  });
};

var module25 = require('./25'),
  module24 = require('./24');

var s = module25.default(function t(n, s) {
    var u = this;
    module24.default(this, t);

    this.validate = function (t) {
      if (u.isInvalid(t)) throw new Error(u.errorText + ' Check usage of react-native-date-picker.');
    };

    this.isInvalid = n;
    this.errorText = s;
  }),
  u = [
    new s(function (t) {
      return t && !(t.date instanceof Date);
    }, 'Invalid or missing Date prop. Must be a Date object.'),
    new s(function (t) {
      return t && t.style && t.style.width && 'number' != typeof t.style.width;
    }, 'Invalid style: width. Width needs to be a number. Percentages or other values are not supported.'),
    new s(function (t) {
      return t && t.style && t.style.height && 'number' != typeof t.style.height;
    }, 'Invalid style: height. Height needs to be a number. Percentages or other values are not supported.'),
    new s(function (t) {
      return t && t.mode && !['datetime', 'date', 'time'].includes(t.mode);
    }, "Invalid mode. Valid modes: 'datetime', 'date', 'time'"),
    new s(function (t) {
      return t && t.androidVariant && !['nativeAndroid', 'iosClone'].includes(t.androidVariant);
    }, "Invalid android variant. Valid modes: 'nativeAndroid', 'iosClone'"),
  ];
