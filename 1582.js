var ReactNative = require('react-native').NativeModules.CardIOModule,
  t = {
    scanCard: function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return ReactNative.scanCard(t);
    },
  };

exports.default = t;
