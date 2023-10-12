var module24 = require('./24'),
  module25 = require('./25'),
  o = (function () {
    function n(t) {
      module24.default(this, n);
      this._isEnable = true;
      this._level = 0;
      this._name = t;
    }

    module25.default(n, [
      {
        key: 'level',
        value: function (n) {
          this._isEnable = true;
          this._level = n;
        },
      },
      {
        key: 'enable',
        value: function () {
          this._isEnable = true;
        },
      },
      {
        key: 'disable',
        value: function () {
          this._isEnable = false;
        },
      },
      {
        key: 'verbose',
        value: function (...args) {
          if (this._isEnable && this._level > 2) (n = console).log.apply(n, [this._name, 'verbose:'].concat(args));
        },
      },
      {
        key: 'debug',
        value: function (...args) {
          if (this._isEnable && this._level > 1) (n = console).log.apply(n, [this._name, 'debug:'].concat(args));
        },
      },
      {
        key: 'info',
        value: function (...args) {
          if (this._isEnable && this._level > 0) (n = console).log.apply(n, [this._name, 'info:'].concat(args));
        },
      },
      {
        key: 'error',
        value: function (...args) {
          if (this._isEnable && this._level > -1) (n = console).warn.apply(n, [this._name, 'error:'].concat(args));
        },
      },
    ]);
    return n;
  })();

exports.default = o;
