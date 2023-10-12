var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module1401 = require('./1401'),
  l = (function () {
    function t(f, o) {
      module24.default(this, t);
      this.modifiers = o ? module20.default(o) : [];
      this._reference = f;
    }

    module25.default(t, [
      {
        key: 'orderBy',
        value: function (t, n) {
          this.modifiers.push({
            id: 'orderBy-' + t + ':' + (n || ''),
            type: 'orderBy',
            name: t,
            key: n,
          });
          return this._reference;
        },
      },
      {
        key: 'limit',
        value: function (t, n) {
          this.modifiers.push({
            id: 'limit-' + t + ':' + n,
            type: 'limit',
            name: t,
            limit: n,
          });
          return this._reference;
        },
      },
      {
        key: 'filter',
        value: function (t, n, u) {
          this.modifiers.push({
            id: 'filter-' + t + ':' + module1401.objectToUniqueId(n) + ':' + (u || ''),
            type: 'filter',
            name: t,
            value: n,
            valueType: typeof n,
            key: u,
          });
          return this._reference;
        },
      },
      {
        key: 'getModifiers',
        value: function () {
          return module20.default(this.modifiers);
        },
      },
      {
        key: 'queryIdentifier',
        value: function () {
          for (
            var t = this.getModifiers().sort(function (t, n) {
                return t.id < n.id ? -1 : t.id > n.id ? 1 : 0;
              }),
              n = '{',
              u = 0;
            u < t.length;
            u++
          ) {
            if (0 !== u) n += ',';
            n += t[u].id;
          }

          n += '}';
          return n;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
