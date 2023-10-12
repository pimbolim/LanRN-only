var module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native').NativeModules.PdfManager,
  o = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'loadFile',
        value: function (t, u) {
          if ('string' != typeof t) throw new TypeError('path must be a valid string.');
          if (undefined === u) u = '';
          return ReactNative.loadFile(t, u);
        },
      },
    ]);
    return t;
  })();

exports.default = o;
