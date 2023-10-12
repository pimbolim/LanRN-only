var module24 = require('./24'),
  module25 = require('./25'),
  module1401 = require('./1401'),
  module1404 = require('./1404'),
  c = (function () {
    function t(u) {
      module24.default(this, t);
      this.ref = u;
      this.path = u.path;
      this._database = u._database;
    }

    module25.default(t, [
      {
        key: 'set',
        value: function (t) {
          return module1404.getNativeModule(this._database).onDisconnectSet(this.path, {
            type: module1401.typeOf(t),
            value: t,
          });
        },
      },
      {
        key: 'update',
        value: function (t) {
          return module1404.getNativeModule(this._database).onDisconnectUpdate(this.path, t);
        },
      },
      {
        key: 'remove',
        value: function () {
          return module1404.getNativeModule(this._database).onDisconnectRemove(this.path);
        },
      },
      {
        key: 'cancel',
        value: function () {
          return module1404.getNativeModule(this._database).onDisconnectCancel(this.path);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
