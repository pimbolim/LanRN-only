exports.getDefaultStatusBarBackgroundColor = function () {
  if (ReactNative.StatusBar._defaultProps) return ReactNative.StatusBar._defaultProps.backgroundColor.value;
  return 'black';
};

exports.getDefaultStatusBarStyle = function () {
  if (ReactNative.StatusBar._defaultProps) return ReactNative.StatusBar._defaultProps.barStyle.value;
  return 'default';
};

var ReactNative = require('react-native');

exports.DEFAULT_IMAGE_DIMENSIONS = 36;
var o = ReactNative.Dimensions.get('window');
exports.WINDOW = o;
var u = o.height;
exports.HEIGHT = u;
var n = o.width;
exports.WIDTH = n;
var s = 'android' === ReactNative.Platform.OS;
exports.IS_ANDROID = s;
var I = 'ios' === ReactNative.Platform.OS,
  c = parseInt(ReactNative.Platform.Version, 10),
  l = I && c < 11;
exports.IS_IOS_BELOW_11 = l;
exports.TYPE = {
  info: 'info',
  warn: 'warn',
  error: 'error',
  success: 'success',
  custom: 'custom',
};
exports.ACTION = {
  automatic: 'automatic',
  cancel: 'cancel',
  pan: 'pan',
  programmatic: 'programmatic',
  tap: 'tap',
};
