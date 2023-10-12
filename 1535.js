exports.createError = function (t) {
  return {
    code: t.code,
    message: t.message,
    localizedMessage: t.localizedMessage,
    declineCode: t.declineCode,
    stripeErrorCode: t.stripeErrorCode,
    type: t.type,
  };
};

var ReactNative = require('react-native'),
  module174 = require('./174');

exports.shouldAttributeExpo = function () {
  try {
    return !!ReactNative.NativeModules.NativeUnimoduleProxy;
  } catch (t) {
    return false;
  }
};

var u = 'ios' === ReactNative.Platform.OS;
exports.isiOS = u;
var o = 'android' === ReactNative.Platform.OS;
exports.isAndroid = o;

exports.unsupportedMethodMessage = function (t) {
  return t + ' method is not supported. Consider to upgrade react-native version to 0.63.x or higher';
};

exports.focusInput = function (t) {
  if ('focusInput' in module174) module174.focusInput(t);
};

exports.registerInput = function (t) {
  if ('registerInput' in module174) module174.registerInput(t);
};

exports.unregisterInput = function (t) {
  if ('unregisterInput' in module174) module174.unregisterInput(t);
};

exports.currentlyFocusedInput = function () {
  if ('currentlyFocusedInput' in module174) return module174.currentlyFocusedInput();
};
