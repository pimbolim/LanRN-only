var module24 = require('./24'),
  module25 = require('./25'),
  module1440 = require('./1440'),
  module1445 = require('./1445'),
  module1401 = require('./1401'),
  l = (function () {
    function t(o, s) {
      module24.default(this, t);
      this._collectionPath = s;
      this._firestore = o;
      this._query = new module1440.default(o, s);
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
          return this._collectionPath.id;
        },
      },
      {
        key: 'parent',
        get: function () {
          var t = this._collectionPath.parent();

          return t ? new module1445.default(this._firestore, t) : null;
        },
      },
      {
        key: 'path',
        get: function () {
          return this._collectionPath.relativeName;
        },
      },
      {
        key: 'isEqual',
        value: function (n) {
          if (!(n instanceof t)) throw new Error('firebase.firestore.CollectionReference.isEqual(*) expects an instance of CollectionReference.');
          return this.path === n.path && this._firestore.app.name === n._firestore.app.name && this._firestore.app.options.projectId === n._firestore.app.options.projectId;
        },
      },
      {
        key: 'add',
        value: function (t) {
          var n = this.doc();
          return n.set(t).then(function () {
            return Promise.resolve(n);
          });
        },
      },
      {
        key: 'doc',
        value: function (t) {
          var n = t || module1401.firestoreAutoId(),
            o = this._collectionPath.child(n);

          if (!o.isDocument) throw new Error('Argument "documentPath" must point to a document.');
          return new module1445.default(this._firestore, o);
        },
      },
      {
        key: 'endAt',
        value: function (...args) {
          return this._query.endAt(args);
        },
      },
      {
        key: 'endBefore',
        value: function (...args) {
          return this._query.endBefore(args);
        },
      },
      {
        key: 'get',
        value: function (t) {
          return this._query.get(t);
        },
      },
      {
        key: 'limit',
        value: function (t) {
          return this._query.limit(t);
        },
      },
      {
        key: 'onSnapshot',
        value: function (t, n, o) {
          return this._query.onSnapshot(t, n, o);
        },
      },
      {
        key: 'orderBy',
        value: function (t, n) {
          return this._query.orderBy(t, n);
        },
      },
      {
        key: 'startAfter',
        value: function (...args) {
          return this._query.startAfter(args);
        },
      },
      {
        key: 'startAt',
        value: function (...args) {
          return this._query.startAt(args);
        },
      },
      {
        key: 'where',
        value: function (t, n, o) {
          return this._query.where(t, n, o);
        },
      },
    ]);
    return t;
  })();

exports.default = l;
