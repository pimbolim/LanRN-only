var module24 = require('./24'),
  module25 = require('./25'),
  module1448 = require('./1448'),
  module1449 = require('./1449'),
  module1404 = require('./1404'),
  o = (function () {
    function t(s) {
      module24.default(this, t);
      this._firestore = s;
      this._writes = [];
    }

    module25.default(t, [
      {
        key: 'commit',
        value: function () {
          return module1404.getNativeModule(this._firestore).documentBatch(this._writes);
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._writes.push({
            path: t.path,
            type: 'DELETE',
          });

          return this;
        },
      },
      {
        key: 'set',
        value: function (t, u, s) {
          var n = module1449.buildNativeMap(u);

          this._writes.push({
            data: n,
            options: s,
            path: t.path,
            type: 'SET',
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++) s[p - 1] = arguments[p];

          var o = module1448.parseUpdateArgs(s, 'WriteBatch.update');

          this._writes.push({
            data: module1449.buildNativeMap(o),
            path: t.path,
            type: 'UPDATE',
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
