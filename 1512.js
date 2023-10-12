var ReactNative = require('react-native').NativeModules.ImagePickerManager;

if (!ReactNative)
  throw new Error(
    'react-native-image-picker: NativeModule.ImagePickerManager is null. To fix this issue try these steps:\n\u2022 Run `react-native link react-native-image-picker` in the project root.\n\u2022 Rebuild and re-run the app.\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 Check that the library was linked correctly when you used the link command by running through the manual installation instructions in the README.\n* If you are getting this error while unit testing you need to mock the native module. Follow the guide in the README.\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-image-picker'
  );
var n = ReactNative;
exports.default = n;
