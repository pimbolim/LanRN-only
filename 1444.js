var module24 = require('./24'),
  module25 = require('./25'),
  module1445 = require('./1445'),
  module1441 = require('./1441'),
  module1455 = require('./1455'),
  module1401 = require('./1401'),
  module1449 = require('./1449'),
  h = function t(n, u) {
    if (n && module1401.isObject(n)) {
      var f = n[u[0]];
      return 1 === u.length ? f : t(f, u.slice(1));
    }
  },
  l = (function () {
    function t(u, l) {
      var v = this;
      module24.default(this, t);

      this.data = function () {
        return v._data;
      };

      this.get = function (t) {
        return t instanceof module1441.default ? h(v._data, t._segments) : module1401.deepGet(v._data, t, '.');
      };

      this._data = module1449.parseNativeMap(u, l.data);
      this._metadata = l.metadata;
      this._ref = new module1445.default(u, module1455.default.fromName(l.path));
    }

    module25.default(t, [
      {
        key: 'exists',
        get: function () {
          return undefined !== this._data;
        },
      },
      {
        key: 'id',
        get: function () {
          return this._ref.id;
        },
      },
      {
        key: 'metadata',
        get: function () {
          return this._metadata;
        },
      },
      {
        key: 'ref',
        get: function () {
          return this._ref;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
