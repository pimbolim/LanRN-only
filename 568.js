var ReactNative = require('react-native');

Object.keys(ReactNative).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.defineProperty(exports, n, {
      enumerable: true,
      get: function () {
        return ReactNative[n];
      },
    });
});
