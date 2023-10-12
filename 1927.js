var ReactNative = require('react-native'),
  o = ReactNative.NativeModules.ReactNativeBlobUtil;

var n = {
  actionViewIntent: function (n, l, c) {
    if (undefined === c) c = null;
    return 'android' === ReactNative.Platform.OS ? o.actionViewIntent(n, l, c) : Promise.reject('ReactNativeBlobUtil.android.actionViewIntent only supports Android.');
  },
  getContentIntent: function (n) {
    return 'android' === ReactNative.Platform.OS ? o.getContentIntent(n) : Promise.reject('ReactNativeBlobUtil.android.getContentIntent only supports Android.');
  },
  addCompleteDownload: function (n) {
    return 'android' === ReactNative.Platform.OS ? o.addCompleteDownload(n) : Promise.reject('ReactNativeBlobUtil.android.addCompleteDownload only supports Android.');
  },
  getSDCardDir: function () {
    return 'android' === ReactNative.Platform.OS ? o.getSDCardDir() : Promise.reject('ReactNativeBlobUtil.android.getSDCardDir only supports Android.');
  },
  getSDCardApplicationDir: function () {
    return 'android' === ReactNative.Platform.OS ? o.getSDCardApplicationDir() : Promise.reject('ReactNativeBlobUtil.android.getSDCardApplicationDir only supports Android.');
  },
};
exports.default = n;
