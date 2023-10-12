var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function n() {
      throw (module24.default(this, n), new Error('`new PhoneAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module25.default(n, null, [
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'phone';
        },
      },
      {
        key: 'credential',
        value: function (n, t) {
          return {
            token: n,
            secret: t,
            providerId: 'phone',
          };
        },
      },
    ]);
    return n;
  })();

exports.default = u;
