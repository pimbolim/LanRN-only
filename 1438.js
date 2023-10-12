require('./1459');

var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1399 = require('./1399'),
  module1405 = require('./1405'),
  module1439 = require('./1439'),
  module1445 = require('./1445'),
  module1441 = require('./1441'),
  module1452 = require('./1452'),
  module1454 = require('./1454'),
  module1450 = require('./1450'),
  module1455 = require('./1455'),
  module1457 = require('./1457'),
  module1458 = require('./1458'),
  module1456 = require('./1456'),
  module1401 = require('./1401'),
  module1404 = require('./1404');

function M() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var B = ['firestore_transaction_event', 'firestore_document_sync_event', 'firestore_collection_sync_event'],
  F = ['debug', 'error', 'silent'],
  j = 'RNFirebaseFirestore';
exports.MODULE_NAME = j;
var D = 'firestore';
exports.NAMESPACE = D;

var I = (function (t) {
  module35.default(y, t);

  var ReactNative = y,
    module1405 = M(),
    b = function () {
      var t,
        n = module34.default(ReactNative);

      if (module1405) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y(t) {
    var s;
    module24.default(this, y);
    (s = b.call(this, t, {
      events: B,
      moduleName: j,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: D,
    }))._referencePath = new module1455.default([]);
    s._transactionHandler = new module1458.default(module39.default(s));
    module1399.SharedEventEmitter.addListener(
      module1399.getAppEventName(module39.default(s), 'firestore_collection_sync_event'),
      s._onCollectionSyncEvent.bind(module39.default(s))
    );
    module1399.SharedEventEmitter.addListener(module1399.getAppEventName(module39.default(s), 'firestore_document_sync_event'), s._onDocumentSyncEvent.bind(module39.default(s)));
    return s;
  }

  module25.default(y, [
    {
      key: 'batch',
      value: function () {
        return new module1457.default(this);
      },
    },
    {
      key: 'collection',
      value: function (t) {
        var n = this._referencePath.child(t);

        if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
        return new module1439.default(this, n);
      },
    },
    {
      key: 'disableNetwork',
      value: function () {
        return module1404.getNativeModule(this).disableNetwork();
      },
    },
    {
      key: 'doc',
      value: function (t) {
        var n = this._referencePath.child(t);

        if (!n.isDocument) throw new Error('Argument "documentPath" must point to a document.');
        return new module1445.default(this, n);
      },
    },
    {
      key: 'enableNetwork',
      value: function () {
        return module1404.getNativeModule(this).enableNetwork();
      },
    },
    {
      key: 'runTransaction',
      value: function (t) {
        return this._transactionHandler._add(t);
      },
    },
    {
      key: 'settings',
      value: function (t) {
        if (!module1401.isObject(t)) return Promise.reject(new Error('Firestore.settings failed: settings must be an object.'));
        if (module1401.hop(t, 'host') && !module1401.isString(t.host)) return Promise.reject(new Error('Firestore.settings failed: settings.host must be a string.'));
        if (module1401.hop(t, 'persistence') && !module1401.isBoolean(t.persistence))
          return Promise.reject(new Error('Firestore.settings failed: settings.persistence must be boolean.'));

        if (module1401.hop(t, 'cacheSizeBytes')) {
          if (!module1401.isNumber(t.cacheSizeBytes)) return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be number.'));
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be set to 1048576 at least bytes.'));
        }

        return module1401.hop(t, 'ssl') && !module1401.isBoolean(t.ssl)
          ? Promise.reject(new Error('Firestore.settings failed: settings.ssl must be boolean.'))
          : module1401.hop(t, 'timestampsInSnapshots') && !module1401.isBoolean(t.timestampsInSnapshots)
          ? Promise.reject(new Error('Firestore.settings failed: settings.timestampsInSnapshots must be boolean.'))
          : module1404.getNativeModule(this).settings(t);
      },
    },
    {
      key: 'enablePersistence',
      value: function () {
        console.warn('Due to restrictions in the native SDK, persistence must be configured in firebase.firestore().settings()');
        return Promise.resolve();
      },
    },
    {
      key: '_onCollectionSyncEvent',
      value: function (t) {
        if (t.error) module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onQuerySnapshotError:' + t.listenerId), t);
        else module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onQuerySnapshot:' + t.listenerId), t.querySnapshot);
      },
    },
    {
      key: '_onDocumentSyncEvent',
      value: function (t) {
        if (t.error) module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onDocumentSnapshotError:' + t.listenerId), t);
        else module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onDocumentSnapshot:' + t.listenerId), t.documentSnapshot);
      },
    },
  ]);
  return y;
})(module1405.default);

exports.default = I;
var C = {
  Blob: module1450.default,
  FieldPath: module1441.default,
  FieldValue: module1452.default,
  GeoPoint: module1454.default,
  Timestamp: module1456.default,
  CACHE_SIZE_UNLIMITED: -1,
  enableLogging: function (t) {
    console.warn('firebase.firestore.enableLogging is deprecated, use firebase.firestore().setLogLevel instead.');
    this.setLogLevel(t ? 'debug' : 'silent');
  },
  setLogLevel: function (t) {
    if (-1 === F.indexOf(t)) throw new Error('Argument `logLevel` must be one of: `debug`, `error`, `silent`');
    if (ReactNative.NativeModules[j]) ReactNative.NativeModules[j].setLogLevel(t);
  },
};
exports.statics = C;
