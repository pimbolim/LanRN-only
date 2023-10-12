var module24 = require('./24'),
  module25 = require('./25'),
  l = (function () {
    function t(n, l) {
      module24.default(this, t);
      this._latitude = n;
      this._longitude = l;
    }

    module25.default(t, [
      {
        key: 'latitude',
        get: function () {
          return this._latitude;
        },
      },
      {
        key: 'longitude',
        get: function () {
          return this._longitude;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
