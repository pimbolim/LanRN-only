var module24 = require('./24'),
  module25 = require('./25'),
  module1404 = require('./1404'),
  module1401 = require('./1401'),
  f = (function () {
    function t(o) {
      module24.default(this, t);
      this._messaging = o;
    }

    module25.default(t, [
      {
        key: 'getAPNSToken',
        value: function () {
          return module1401.isIOS ? module1404.getNativeModule(this._messaging).getAPNSToken() : null;
        },
      },
      {
        key: 'registerForRemoteNotifications',
        value: function () {
          if (module1401.isIOS) return module1404.getNativeModule(this._messaging).registerForRemoteNotifications();
        },
      },
    ]);
    return t;
  })();

exports.default = f;
