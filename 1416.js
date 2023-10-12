var module24 = require('./24'),
  module25 = require('./25'),
  module1404 = require('./1404'),
  o = (function () {
    function t(u, f) {
      module24.default(this, t);
      this._auth = u;
      this._verificationId = f;
    }

    module25.default(t, [
      {
        key: 'confirm',
        value: function (t) {
          var n = this;
          return module1404
            .getNativeModule(this._auth)
            ._confirmVerificationCode(t)
            .then(function (t) {
              return n._auth._setUser(t);
            });
        },
      },
      {
        key: 'verificationId',
        get: function () {
          return this._verificationId;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
