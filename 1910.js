var ReactNative = require('react-native').NativeModules.ReactNativeBlobUtil;

var o = {
  createMediafile: function (o, n) {
    if (false in o) o.parentFolder = '';
    return ReactNative.createMediaFile(o, n);
  },
  writeToMediafile: function (o, n) {
    return ReactNative.writeToMediaFile(o, n, false);
  },
  writeToMediafileWithTransform: function (o, n) {
    return ReactNative.writeToMediaFile(o, n, true);
  },
  copyToInternal: function (o, n) {
    return ReactNative.copyToInternal(o, n);
  },
  getBlob: function (o, n) {
    return ReactNative.getBlob(o, n);
  },
  copyToMediaStore: function (o, n, l) {
    return ReactNative.copyToMediaStore(o, n, l);
  },
};
exports.default = o;
