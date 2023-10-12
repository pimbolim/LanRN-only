var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function t() {
      throw (module24.default(this, t), new Error('`new TwitterAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module25.default(t, null, [
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'twitter.com';
        },
      },
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'twitter.com',
          };
        },
      },
    ]);
    return t;
  })();

exports.default = u;
