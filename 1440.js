var module96 = require('./96'),
  module20 = require('./20'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module1441 = require('./1441'),
  module1442 = require('./1442'),
  module1446 = require('./1446'),
  module1444 = require('./1444'),
  module1404 = require('./1404'),
  module1449 = require('./1449'),
  module1401 = require('./1401'),
  module1399 = require('./1399');

function w(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(s), true).forEach(function (n) {
        module47.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      w(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var E = {
    ASC: 'ASCENDING',
    asc: 'ASCENDING',
    DESC: 'DESCENDING',
    desc: 'DESCENDING',
  },
  P = {
    '=': 'EQUAL',
    '==': 'EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
  };

function A(t) {
  return t instanceof module1441.default
    ? {
        elements: t._segments,
        type: 'fieldpath',
      }
    : {
        string: t,
        type: 'string',
      };
}

var S = (function () {
  function t(n, s, o, l, u) {
    module24.default(this, t);
    this._fieldFilters = o || [];
    this._fieldOrders = l || [];
    this._firestore = n;
    this._queryOptions = u || {};
    this._referencePath = s;
  }

  module25.default(t, [
    {
      key: 'firestore',
      get: function () {
        return this._firestore;
      },
    },
    {
      key: 'endAt',
      value: function (...args) {
        var f = b(
          b({}, this._queryOptions),
          {},
          {
            endAt: this._buildOrderByOption(args),
          }
        );
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'endBefore',
      value: function (...args) {
        var f = b(
          b({}, this._queryOptions),
          {},
          {
            endBefore: this._buildOrderByOption(args),
          }
        );
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'get',
      value: function (t) {
        var n = this;

        if (t) {
          if (!module1401.isObject(t)) return Promise.reject(new Error('Query.get failed: First argument must be an object.'));
          if (t.source && 'default' !== t.source && 'server' !== t.source && 'cache' !== t.source)
            return Promise.reject(new Error('Query.get failed: GetOptions.source must be one of `default`, `server` or `cache`.'));
        }

        return module1404
          .getNativeModule(this._firestore)
          .collectionGet(this._referencePath.relativeName, this._fieldFilters, this._fieldOrders, this._queryOptions, t)
          .then(function (t) {
            return new module1442.default(n._firestore, n, t);
          });
      },
    },
    {
      key: 'isEqual',
      value: function (n) {
        if (!(n instanceof t)) throw new Error('firebase.firestore.Query.isEqual(*) expects an instance of Query.');
        if (this._firestore.app.name !== n._firestore.app.name) return false;
        if (this._firestore.app.options.projectId !== n._firestore.app.options.projectId) return false;
        if (this._fieldFilters.length !== n._fieldFilters.length) return false;

        for (var s = 0; s < this._fieldFilters.length; s++) {
          var o = this._fieldFilters[s],
            f = n._fieldFilters[s];
          if (o.fieldPath.string !== f.fieldPath.string) return false;
          if (o.fieldPath.type !== f.fieldPath.type) return false;
          if (o.value.type !== f.value.type) return false;
          if (o.value.value !== f.value.value) return false;
          if (o.operator !== f.operator) return false;
        }

        if (this._fieldOrders.length !== n._fieldOrders.length) return false;

        for (var l = 0; l < this._fieldOrders.length; l++) {
          var u = this._fieldOrders[l],
            h = n._fieldOrders[l];
          if (u.direction !== h.direction) return false;
          if (u.fieldPath.string !== h.fieldPath.string) return false;
          if (u.fieldPath.type !== h.fieldPath.type) return false;
        }

        return true;
      },
    },
    {
      key: 'limit',
      value: function (n) {
        var s = b(
          b({}, this._queryOptions),
          {},
          {
            limit: n,
          }
        );
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, s);
      },
    },
    {
      key: 'onSnapshot',
      value: function (t, n, s) {
        var o,
          f = this,
          l = {};

        if (module1401.isFunction(t)) {
          if (n && !module1401.isFunction(n)) throw new Error('Query.onSnapshot failed: Second argument must be a valid function.');
          o = {
            next: t,
            error: n,
          };
        } else {
          if (!t || !module1401.isObject(t)) throw new Error('Query.onSnapshot failed: Called with invalid arguments.');

          if (t.next) {
            if (!module1401.isFunction(t.next)) throw new Error('Query.onSnapshot failed: Observer.next must be a valid function.');
            if (t.error && !module1401.isFunction(t.error)) throw new Error('Query.onSnapshot failed: Observer.error must be a valid function.');
            o = {
              next: t.next,
              error: t.error,
            };
          } else {
            if (!Object.prototype.hasOwnProperty.call(t, 'includeMetadataChanges'))
              throw new Error('Query.onSnapshot failed: First argument must be a function, observer or options.');

            if (((l = t), module1401.isFunction(n))) {
              if (s && !module1401.isFunction(s)) throw new Error('Query.onSnapshot failed: Third argument must be a valid function.');
              o = {
                next: n,
                error: s,
              };
            } else {
              if (!(n && module1401.isObject(n) && n.next)) throw new Error('Query.onSnapshot failed: Second argument must be a function or observer.');
              if (!module1401.isFunction(n.next)) throw new Error('Query.onSnapshot failed: Observer.next must be a valid function.');
              if (n.error && !module1401.isFunction(n.error)) throw new Error('Query.onSnapshot failed: Observer.error must be a valid function.');
              o = {
                next: n.next,
                error: n.error,
              };
            }
          }
        }

        var u,
          _ = module1401.firestoreAutoId(),
          v = module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this._firestore, 'onQuerySnapshot:' + _), function (t) {
            var n = new module1442.default(f._firestore, f, t);
            o.next(n);
          }),
          w = module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this._firestore, 'onQuerySnapshotError:' + _), function (t) {
            if (u) u();
            var n = new module1446.default(t);
            if (o.error) o.error(n);
            else f.firestore.log.error(n);
          });

        module1404.getNativeModule(this._firestore).collectionOnSnapshot(this._referencePath.relativeName, this._fieldFilters, this._fieldOrders, this._queryOptions, _, l);

        u = function () {
          v.remove();
          w.remove();
          module1404.getNativeModule(f._firestore).collectionOffSnapshot(f._referencePath.relativeName, f._fieldFilters, f._fieldOrders, f._queryOptions, _);
        };

        return u;
      },
    },
    {
      key: 'orderBy',
      value: function (n) {
        var s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'asc';
        if (this._queryOptions.startAt || this._queryOptions.startAfter || this._queryOptions.endAt || this._queryOptions.endBefore)
          throw new Error('Cannot specify an orderBy() constraint after calling startAt(), startAfter(), endBefore() or endAt().');

        var o = {
            direction: E[s],
            fieldPath: A(n),
          },
          f = this._fieldOrders.concat(o);

        return new t(this.firestore, this._referencePath, this._fieldFilters, f, this._queryOptions);
      },
    },
    {
      key: 'startAfter',
      value: function (...args) {
        var f = b(
          b({}, this._queryOptions),
          {},
          {
            startAfter: this._buildOrderByOption(args),
          }
        );
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'startAt',
      value: function (...args) {
        var f = b(
          b({}, this._queryOptions),
          {},
          {
            startAt: this._buildOrderByOption(args),
          }
        );
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'where',
      value: function (n, s, o) {
        var f = module1449.buildTypeMap(o),
          l = {
            fieldPath: A(n),
            operator: P[s],
            value: f,
          },
          u = this._fieldFilters.concat(l);

        return new t(this.firestore, this._referencePath, u, this._fieldOrders, this._queryOptions);
      },
    },
    {
      key: '_buildOrderByOption',
      value: function (t) {
        var o;

        if (1 === t.length && t[0] instanceof module1444.default) {
          var f = t[0];
          o = [];

          for (var l = 0; l < this._fieldOrders.length; l++) {
            var h = this._fieldOrders[l];
            if ('string' === h.fieldPath.type && h.fieldPath.string) o.push(f.get(h.fieldPath.string));
            else if (h.fieldPath.elements) {
              var c = module96.default(module1441.default, module20.default(h.fieldPath.elements));
              o.push(f.get(c));
            }
          }
        } else o = t;

        return module1449.buildNativeArray(o);
      },
    },
  ]);
  return t;
})();

exports.default = S;
