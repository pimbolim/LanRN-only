var ReactNative = require('react-native'),
  o = ReactNative.NativeModules.RNCGeolocation;

if (!o)
  throw new Error(
    '@react-native-community/geolocation: NativeModule.RNCGeolocation is null. To fix this issue try these steps:\n\u2022 Run `react-native link @react-native-community/geolocation` in the project root.\n\u2022 Rebuild and re-run the app.\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-geolocation'
  );
var n = null;
module.exports = {
  RNCGeolocation: o,

  get GeolocationEventEmitter() {
    if (!n) n = new ReactNative.NativeEventEmitter(o);
    return n;
  },
};
