var ReactNative = require('react-native'),
  module399 = require('./399'),
  module1966 = require('./1966'),
  module1394 = require('./1394');

require('./961');

ReactNative.LogBox.ignoreAllLogs();
ReactNative.AppRegistry.registerComponent(module1966.name, function () {
  return module399.default;
});
ReactNative.AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', function () {
  return module1394.BgNotification;
});
