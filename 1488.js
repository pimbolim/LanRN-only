var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1489 = require('./1489'),
  module1399 = require('./1399'),
  module1403 = require('./1403'),
  module1401 = require('./1401'),
  module1405 = require('./1405'),
  module1404 = require('./1404');

function A() {
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

var S = ReactNative.NativeModules.RNFirebaseStorage,
  N = ['storage_event', 'storage_error'],
  p = 'RNFirebaseStorage';
exports.MODULE_NAME = p;
var C = 'storage';
exports.NAMESPACE = C;

var L = (function (t) {
  module35.default(S, t);

  var ReactNative = S,
    module1401 = A(),
    c = function () {
      var t,
        n = module34.default(ReactNative);

      if (module1401) {
        var E = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, E);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var module25;
    module24.default(this, S);
    module25 = c.call(this, t, {
      events: N,
      moduleName: p,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: C,
    });
    module1399.SharedEventEmitter.addListener(
      module1399.getAppEventName(module39.default(module25), 'storage_event'),
      module25._handleStorageEvent.bind(module39.default(module25))
    );
    module1399.SharedEventEmitter.addListener(
      module1399.getAppEventName(module39.default(module25), 'storage_error'),
      module25._handleStorageEvent.bind(module39.default(module25))
    );
    return module25;
  }

  module25.default(S, [
    {
      key: 'ref',
      value: function (t) {
        return new module1489.default(this, t);
      },
    },
    {
      key: 'refFromURL',
      value: function (t) {
        return new module1489.default(this, 'url::' + t);
      },
    },
    {
      key: 'setMaxOperationRetryTime',
      value: function (t) {
        module1404.getNativeModule(this).setMaxOperationRetryTime(t);
      },
    },
    {
      key: 'setMaxUploadRetryTime',
      value: function (t) {
        module1404.getNativeModule(this).setMaxUploadRetryTime(t);
      },
    },
    {
      key: 'setMaxDownloadRetryTime',
      value: function (t) {
        module1404.getNativeModule(this).setMaxDownloadRetryTime(t);
      },
    },
    {
      key: '_getSubEventName',
      value: function (t, n) {
        return module1399.getAppEventName(this, t + '-' + n);
      },
    },
    {
      key: '_handleStorageEvent',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          u = t.body || {};
        module1403.getLogger(this).debug('_handleStorageEvent: ', n, E, u);
        module1399.SharedEventEmitter.emit(this._getSubEventName(n, E), u);
      },
    },
    {
      key: '_handleStorageError',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          u = t.body || {};
        module1403.getLogger(this).debug('_handleStorageError ->', t);
        module1399.SharedEventEmitter.emit(this._getSubEventName(n, E), u);
      },
    },
    {
      key: '_addListener',
      value: function (t, n, E) {
        module1399.SharedEventEmitter.addListener(this._getSubEventName(t, n), E);
      },
    },
    {
      key: '_removeListener',
      value: function (t, n, E) {
        module1399.SharedEventEmitter.removeListener(this._getSubEventName(t, n), E);
      },
    },
  ]);
  return S;
})(module1405.default);

exports.default = L;
var y = {
  TaskEvent: {
    STATE_CHANGED: 'state_changed',
  },
  TaskState: {
    RUNNING: 'running',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELLED: 'cancelled',
    ERROR: 'error',
  },
  Native: S
    ? {
        MAIN_BUNDLE_PATH: module1401.stripTrailingSlash(S.MAIN_BUNDLE_PATH),
        CACHES_DIRECTORY_PATH: module1401.stripTrailingSlash(S.CACHES_DIRECTORY_PATH),
        DOCUMENT_DIRECTORY_PATH: module1401.stripTrailingSlash(S.DOCUMENT_DIRECTORY_PATH),
        EXTERNAL_DIRECTORY_PATH: module1401.stripTrailingSlash(S.EXTERNAL_DIRECTORY_PATH),
        EXTERNAL_STORAGE_DIRECTORY_PATH: module1401.stripTrailingSlash(S.EXTERNAL_STORAGE_DIRECTORY_PATH),
        TEMP_DIRECTORY_PATH: module1401.stripTrailingSlash(S.TEMP_DIRECTORY_PATH),
        LIBRARY_DIRECTORY_PATH: module1401.stripTrailingSlash(S.LIBRARY_DIRECTORY_PATH),
        FILETYPE_REGULAR: module1401.stripTrailingSlash(S.FILETYPE_REGULAR),
        FILETYPE_DIRECTORY: module1401.stripTrailingSlash(S.FILETYPE_DIRECTORY),
      }
    : {},
};
exports.statics = y;
