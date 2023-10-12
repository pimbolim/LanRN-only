var module24 = require('./24'),
  module25 = require('./25'),
  module1444 = require('./1444'),
  f = (function () {
    function t(u, f) {
      module24.default(this, t);
      this._document = new module1444.default(u, f.document);
      this._newIndex = f.newIndex;
      this._oldIndex = f.oldIndex;
      this._type = f.type;
    }

    module25.default(t, [
      {
        key: 'doc',
        get: function () {
          return this._document;
        },
      },
      {
        key: 'newIndex',
        get: function () {
          return this._newIndex;
        },
      },
      {
        key: 'oldIndex',
        get: function () {
          return this._oldIndex;
        },
      },
      {
        key: 'type',
        get: function () {
          return this._type;
        },
      },
    ]);
    return t;
  })();

exports.default = f;
