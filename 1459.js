var module24 = require('./24'),
  module25 = require('./25'),
  module1448 = require('./1448'),
  module1449 = require('./1449'),
  module1444 = require('./1444'),
  module1404 = require('./1404'),
  p = (function () {
    function t(u, s) {
      module24.default(this, t);
      this._meta = s;
      this._commandBuffer = [];
      this._firestore = u;
      this._pendingResult = undefined;
    }

    module25.default(t, [
      {
        key: '_prepare',
        value: function () {
          this._commandBuffer = [];
          this._pendingResult = undefined;
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n = this;
          return module1404
            .getNativeModule(this._firestore)
            .transactionGetDocument(this._meta.id, t.path)
            .then(function (t) {
              return new module1444.default(n._firestore, t);
            });
        },
      },
      {
        key: 'set',
        value: function (t, n, u) {
          this._commandBuffer.push({
            type: 'set',
            path: t.path,
            data: module1449.buildNativeMap(n),
            options: u || {},
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) u[o - 1] = arguments[o];

          var h = module1448.parseUpdateArgs(u, 'Transaction.update');

          this._commandBuffer.push({
            type: 'update',
            path: t.path,
            data: module1449.buildNativeMap(h),
          });

          return this;
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._commandBuffer.push({
            type: 'delete',
            path: t.path,
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = p;
