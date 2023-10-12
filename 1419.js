var module24 = require('./24'),
  module25 = require('./25'),
  o = (function () {
    function t() {
      throw (module24.default(this, t), new Error('`new EmailAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module25.default(t, null, [
      {
        key: 'EMAIL_LINK_SIGN_IN_METHOD',
        get: function () {
          return 'emailLink';
        },
      },
      {
        key: 'EMAIL_PASSWORD_SIGN_IN_METHOD',
        get: function () {
          return 'password';
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'password';
        },
      },
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'password',
          };
        },
      },
      {
        key: 'credentialWithLink',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'emailLink',
          };
        },
      },
    ]);
    return t;
  })();

exports.default = o;
