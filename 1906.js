var module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native').NativeModules.ReactNativeBlobUtil,
  c = (function () {
    function t(o, u, c) {
      module24.default(this, t);
      this.id = o;
      this.encoding = u;
      this.append = c;
    }

    module25.default(t, [
      {
        key: 'write',
        value: function (t) {
          var n = this;
          return new Promise(function (o, c) {
            try {
              var s = 'ascii' === n.encoding ? 'writeArrayChunk' : 'writeChunk';
              if ('ascii' === n.encoding.toLocaleLowerCase() && !Array.isArray(t)) return void c(new Error('ascii input data must be an Array'));
              ReactNative[s](n.id, t, function (t) {
                if (t) c(new Error(t));
                else o(n);
              });
            } catch (t) {
              c(new Error(t));
            }
          });
        },
      },
      {
        key: 'close',
        value: function () {
          var t = this;
          return new Promise(function (n, o) {
            try {
              ReactNative.closeStream(t.id, function () {
                n();
              });
            } catch (t) {
              o(new Error(t));
            }
          });
        },
      },
    ]);
    return t;
  })();

exports.default = c;
