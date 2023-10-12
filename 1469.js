var module24 = require('./24'),
  module25 = require('./25'),
  l = (function () {
    function t(u) {
      module24.default(this, t);
      this._link = u;
    }

    module25.default(t, [
      {
        key: 'setForcedRedirectEnabled',
        value: function (t) {
          this._forcedRedirectEnabled = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            forcedRedirectEnabled: this._forcedRedirectEnabled,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = l;
