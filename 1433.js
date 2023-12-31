var module24 = require('./24'),
  module25 = require('./25'),
  module1401 = require('./1401'),
  n = (function () {
    function t(l, s) {
      module24.default(this, t);
      this.key = s.key;
      if (l.key !== s.key) this.ref = l.child(s.key);
      else this.ref = l;
      this._value = s.value;
      this._priority = undefined === s.priority ? null : s.priority;
      this._childKeys = s.childKeys || [];
    }

    module25.default(t, [
      {
        key: 'val',
        value: function () {
          return module1401.isObject(this._value) || Array.isArray(this._value) ? JSON.parse(JSON.stringify(this._value)) : this._value;
        },
      },
      {
        key: 'exportVal',
        value: function () {
          var t = this._value;
          if (module1401.isObject(this._value) || Array.isArray(this._value)) t = JSON.parse(JSON.stringify(this._value));
          return {
            '.value': t,
            '.priority': this._priority,
          };
        },
      },
      {
        key: 'child',
        value: function (u) {
          var l = module1401.deepGet(this._value, u);
          if (undefined === l) l = null;
          var n = this.ref.child(u);
          return new t(n, {
            value: l,
            key: n.key,
            exists: null !== l,
            childKeys: module1401.isObject(l) && null !== l ? Object.keys(l) : [],
          });
        },
      },
      {
        key: 'exists',
        value: function () {
          return null !== this._value;
        },
      },
      {
        key: 'forEach',
        value: function (t) {
          if (!this._childKeys.length) return false;

          for (var u = false, l = 0, s = this._childKeys.length; l < s; l++) {
            var n = this._childKeys[l];

            if (true === t(this.child(n))) {
              u = true;
              break;
            }
          }

          return u;
        },
      },
      {
        key: 'getPriority',
        value: function () {
          return this._priority;
        },
      },
      {
        key: 'hasChild',
        value: function (t) {
          return module1401.deepExists(this._value, t);
        },
      },
      {
        key: 'hasChildren',
        value: function () {
          return this.numChildren() > 0;
        },
      },
      {
        key: 'numChildren',
        value: function () {
          return module1401.isObject(this._value) ? Object.keys(this._value).length : 0;
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return this.val();
        },
      },
    ]);
    return t;
  })();

exports.default = n;
