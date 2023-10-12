var module24 = require('./24'),
  module25 = require('./25'),
  o = (function () {
    function t() {
      throw (module24.default(this, t), new Error('`new OAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module25.default(t, null, [
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'oauth';
        },
      },
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'oauth',
          };
        },
      },
    ]);
    return t;
  })();

exports.default = o;
