var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function t() {
      throw (module24.default(this, t), new Error('`new FacebookAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module25.default(t, null, [
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'facebook.com';
        },
      },
      {
        key: 'credential',
        value: function (t) {
          return {
            token: t,
            secret: '',
            providerId: 'facebook.com',
          };
        },
      },
    ]);
    return t;
  })();

exports.default = u;
