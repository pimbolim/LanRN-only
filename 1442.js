var module24 = require('./24'),
  module25 = require('./25'),
  module1443 = require('./1443'),
  module1444 = require('./1444'),
  s = (function () {
    function t(u, s, f) {
      module24.default(this, t);
      this._changes = f.changes.map(function (t) {
        return new module1443.default(u, t);
      });
      this._docs = f.documents.map(function (t) {
        return new module1444.default(u, t);
      });
      this._metadata = f.metadata;
      this._query = s;
    }

    module25.default(t, [
      {
        key: 'docChanges',
        get: function () {
          return this._changes;
        },
      },
      {
        key: 'docs',
        get: function () {
          return this._docs;
        },
      },
      {
        key: 'empty',
        get: function () {
          return 0 === this._docs.length;
        },
      },
      {
        key: 'metadata',
        get: function () {
          return this._metadata;
        },
      },
      {
        key: 'query',
        get: function () {
          return this._query;
        },
      },
      {
        key: 'size',
        get: function () {
          return this._docs.length;
        },
      },
      {
        key: 'forEach',
        value: function (t) {
          this._docs.forEach(function (n) {
            t(n);
          });
        },
      },
    ]);
    return t;
  })();

exports.default = s;
