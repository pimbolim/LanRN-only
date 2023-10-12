var module24 = require('./24'),
  module25 = require('./25'),
  module1446 = require('./1446'),
  module1444 = require('./1444'),
  module1439 = require('./1439'),
  module1448 = require('./1448'),
  module1449 = require('./1449'),
  module1404 = require('./1404'),
  module1401 = require('./1401'),
  module1399 = require('./1399'),
  w = (function () {
    function t(o, u) {
      module24.default(this, t);
      this._documentPath = u;
      this._firestore = o;
    }

    module25.default(t, [
      {
        key: 'firestore',
        get: function () {
          return this._firestore;
        },
      },
      {
        key: 'id',
        get: function () {
          return this._documentPath.id;
        },
      },
      {
        key: 'parent',
        get: function () {
          var t = this._documentPath.parent();

          return new module1439.default(this._firestore, t);
        },
      },
      {
        key: 'path',
        get: function () {
          return this._documentPath.relativeName;
        },
      },
      {
        key: 'isEqual',
        value: function (n) {
          if (!(n instanceof t)) throw new Error('firebase.firestore.DocumentReference.isEqual(*) expects an instance of DocumentReference.');
          return this.path === n.path && this._firestore.app.name === n._firestore.app.name && this._firestore.app.options.projectId === n._firestore.app.options.projectId;
        },
      },
      {
        key: 'collection',
        value: function (t) {
          var n = this._documentPath.child(t);

          if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
          return new module1439.default(this._firestore, n);
        },
      },
      {
        key: 'delete',
        value: function () {
          return module1404.getNativeModule(this._firestore).documentDelete(this.path);
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n = this;

          if (t) {
            if (!module1401.isObject(t)) return Promise.reject(new Error('DocumentReference.get failed: First argument must be an object.'));
            if (t.source && 'default' !== t.source && 'server' !== t.source && 'cache' !== t.source)
              return Promise.reject(new Error('DocumentReference.get failed: GetOptions.source must be one of `default`, `server` or `cache`.'));
          }

          return module1404
            .getNativeModule(this._firestore)
            .documentGet(this.path, t)
            .then(function (t) {
              return new module1444.default(n._firestore, t);
            });
        },
      },
      {
        key: 'onSnapshot',
        value: function (t, n, o) {
          var c,
            f = this,
            h = {};

          if (module1401.isFunction(t)) {
            if (n && !module1401.isFunction(n)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a valid function.');
            c = {
              next: t,
              error: n,
            };
          } else {
            if (!t || !module1401.isObject(t)) throw new Error('DocumentReference.onSnapshot failed: Called with invalid arguments.');

            if (t.next) {
              if (!module1401.isFunction(t.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
              if (t.error && !module1401.isFunction(t.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
              c = {
                next: t.next,
                error: t.error,
              };
            } else {
              if (!Object.prototype.hasOwnProperty.call(t, 'includeMetadataChanges'))
                throw new Error('DocumentReference.onSnapshot failed: First argument must be a function, observer or options.');

              if (((h = t), module1401.isFunction(n))) {
                if (o && !module1401.isFunction(o)) throw new Error('DocumentReference.onSnapshot failed: Third argument must be a valid function.');
                c = {
                  next: n,
                  error: o,
                };
              } else {
                if (!(n && module1401.isObject(n) && n.next)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a function or observer.');
                if (!module1401.isFunction(n.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
                if (n.error && !module1401.isFunction(n.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
                c = {
                  next: n.next,
                  error: n.error,
                };
              }
            }
          }

          var w,
            _ = module1401.firestoreAutoId(),
            b = module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this._firestore, 'onDocumentSnapshot:' + _), function (t) {
              var n = new module1444.default(f.firestore, t);
              c.next(n);
            }),
            E = module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this._firestore, 'onDocumentSnapshotError:' + _), function (t) {
              if (w) w();
              var n = new module1446.default(t);
              if (c.error) c.error(n);
              else f.firestore.log.error(n);
            });

          module1404.getNativeModule(this._firestore).documentOnSnapshot(this.path, _, h);

          w = function () {
            b.remove();
            E.remove();
            module1404.getNativeModule(f._firestore).documentOffSnapshot(f.path, _);
          };

          return w;
        },
      },
      {
        key: 'set',
        value: function (t, n) {
          var o = module1449.buildNativeMap(t);
          return module1404.getNativeModule(this._firestore).documentSet(this.path, o, n);
        },
      },
      {
        key: 'update',
        value: function (...args) {
          var u = module1448.parseUpdateArgs(args, 'DocumentReference.update'),
            s = module1449.buildNativeMap(u);
          return module1404.getNativeModule(this._firestore).documentUpdate(this.path, s);
        },
      },
    ]);
    return t;
  })();

exports.default = w;
