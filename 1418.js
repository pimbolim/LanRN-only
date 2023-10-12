var module24 = require('./24'),
  module25 = require('./25'),
  module1404 = require('./1404'),
  module1401 = require('./1401'),
  l = (function () {
    function t(n) {
      module24.default(this, t);
      this._auth = n;
      this._appVerificationDisabledForTesting = false;
    }

    module25.default(t, [
      {
        key: 'appVerificationDisabledForTesting',
        get: function () {
          return this._appVerificationDisabledForTesting;
        },
        set: function (t) {
          if (module1401.isIOS) {
            this._appVerificationDisabledForTesting = t;
            module1404.getNativeModule(this._auth).setAppVerificationDisabledForTesting(t);
          }
        },
      },
      {
        key: 'setAutoRetrievedSmsCodeForPhoneNumber',
        value: function (t, o) {
          return module1401.isAndroid ? module1404.getNativeModule(this._auth).setAutoRetrievedSmsCodeForPhoneNumber(t, o) : Promise.resolve(null);
        },
      },
    ]);
    return t;
  })();

exports.default = l;
