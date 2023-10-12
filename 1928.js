var ReactNative = require('react-native'),
  n = ReactNative.NativeModules.ReactNativeBlobUtil;

function o(o, u) {
  return 'ios' === ReactNative.Platform.OS ? n.presentOptionsMenu('file://' + o, u) : Promise.reject('ReactNativeBlobUtil.openDocument only supports IOS.');
}

function u(o, u) {
  return 'ios' === ReactNative.Platform.OS ? n.presentPreview('file://' + o, u) : Promise.reject('ReactNativeBlobUtil.previewDocument only supports IOS.');
}

var l = {
  presentPreview: u,
  openDocument: u,
  presentOptionsMenu: o,
  previewDocument: o,
  presentOpenInMenu: function (o, u) {
    return 'ios' === ReactNative.Platform.OS ? n.presentOpenInMenu('file://' + o, u) : Promise.reject('ReactNativeBlobUtil.openDocument only supports IOS.');
  },
  excludeFromBackupKey: function (t) {
    return n.excludeFromBackupKey('file://' + t);
  },
};
exports.default = l;
