var t = {
  check: true,
  checkLocationAccuracy: true,
  checkMultiple: true,
  checkNotifications: true,
  openLimitedPhotoLibraryPicker: true,
  openSettings: true,
  request: true,
  requestLocationAccuracy: true,
  requestMultiple: true,
  requestNotifications: true,
  PERMISSIONS: true,
  RESULTS: true,
};
Object.defineProperty(exports, 'PERMISSIONS', {
  enumerable: true,
  get: function () {
    return module1267.PERMISSIONS;
  },
});
Object.defineProperty(exports, 'RESULTS', {
  enumerable: true,
  get: function () {
    return module1268.RESULTS;
  },
});

var ReactNative = require('react-native'),
  module1264 = require('./1264'),
  module1267 = require('./1267'),
  module1268 = require('./1268'),
  module1269 = require('./1269');

if (
  (Object.keys(module1269).forEach(function (o) {
    if ('default' !== o && '__esModule' !== o)
      Object.prototype.hasOwnProperty.call(t, o) ||
        (o in exports && exports[o] === module1269[o]) ||
        Object.defineProperty(exports, o, {
          enumerable: true,
          get: function () {
            return module1269[o];
          },
        });
  }),
  null == ReactNative.NativeModules.RNPermissions)
)
  throw new Error(
    'react-native-permissions: NativeModule.RNPermissions is null. To fix this issue try these steps:\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then clean, rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 If you are getting this error while unit testing you need to mock the native module. You can use this to get started: https://github.com/zoontek/react-native-permissions/blob/master/mock.js\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/zoontek/react-native-permissions'
  );
var h = module1264.methods.check;
exports.check = h;
var l = module1264.methods.checkLocationAccuracy;
exports.checkLocationAccuracy = l;
var p = module1264.methods.checkMultiple;
exports.checkMultiple = p;
var S = module1264.methods.checkNotifications;
exports.checkNotifications = S;
var f = module1264.methods.openLimitedPhotoLibraryPicker;
exports.openLimitedPhotoLibraryPicker = f;
var k = module1264.methods.openSettings;
exports.openSettings = k;
var y = module1264.methods.request;
exports.request = y;
var L = module1264.methods.requestLocationAccuracy;
exports.requestLocationAccuracy = L;
var P = module1264.methods.requestMultiple;
exports.requestMultiple = P;
var v = module1264.methods.requestNotifications;
exports.requestNotifications = v;
var b = {
  PERMISSIONS: module1267.PERMISSIONS,
  RESULTS: module1268.RESULTS,
  check: h,
  checkLocationAccuracy: l,
  checkMultiple: p,
  checkNotifications: S,
  openLimitedPhotoLibraryPicker: f,
  openSettings: k,
  request: y,
  requestLocationAccuracy: L,
  requestMultiple: P,
  requestNotifications: v,
};
exports.default = b;
