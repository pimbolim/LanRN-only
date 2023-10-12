var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function t(l) {
      module24.default(this, t);
      this._link = l;
    }

    module25.default(t, [
      {
        key: 'setFallbackUrl',
        value: function (t) {
          this._fallbackUrl = t;
          return this._link;
        },
      },
      {
        key: 'setMinimumVersion',
        value: function (t) {
          this._minimumVersion = t;
          return this._link;
        },
      },
      {
        key: 'setPackageName',
        value: function (t) {
          this._packageName = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          if ((this._fallbackUrl || this._minimumVersion) && !this._packageName) throw new Error('AndroidParameters: Missing required `packageName` property');
          return {
            fallbackUrl: this._fallbackUrl,
            minimumVersion: this._minimumVersion,
            packageName: this._packageName,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = u;
