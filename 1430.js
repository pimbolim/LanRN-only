var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1431 = require('./1431'),
  module1437 = require('./1437'),
  module1405 = require('./1405'),
  module1404 = require('./1404'),
  module1396 = require('./1396');

function h() {
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

var N = ['database_transaction_event'],
  y = 'RNFirebaseDatabase';
exports.MODULE_NAME = y;
var O = 'database';
exports.NAMESPACE = O;

var R = (function (t) {
  module35.default(T, t);

  var ReactNative = T,
    module1405 = h(),
    R = function () {
      var t,
        n = module34.default(ReactNative);

      if (module1405) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T(t, s) {
    var f, o, module34;
    module24.default(this, T);

    if ('string' == typeof t) {
      o = module1396.default.app();
      module34 = t;
    } else {
      o = t;
      module34 = s || o.options.databaseURL;
    }

    module34 = module34.endsWith('/') ? module34 : module34 + '/';
    (f = R.call(
      this,
      o,
      {
        events: N,
        moduleName: y,
        hasMultiAppSupport: true,
        hasCustomUrlSupport: true,
        namespace: O,
      },
      module34
    ))._serverTimeOffset = 0;
    f._databaseURL = module34;
    f._transactionHandler = new module1437.default(module39.default(f));
    if (o.options.persistence) module1404.getNativeModule(module39.default(f)).setPersistence(o.options.persistence);
    setTimeout(function () {
      f._offsetRef = f.ref('.info/serverTimeOffset');

      f._offsetRef.on('value', function (t) {
        f._serverTimeOffset = t.val() || f._serverTimeOffset;
      });
    }, 1);
    return f;
  }

  module25.default(T, [
    {
      key: 'getServerTime',
      value: function () {
        return new Date(Date.now() + this._serverTimeOffset);
      },
    },
    {
      key: 'goOnline',
      value: function () {
        module1404.getNativeModule(this).goOnline();
      },
    },
    {
      key: 'goOffline',
      value: function () {
        module1404.getNativeModule(this).goOffline();
      },
    },
    {
      key: 'ref',
      value: function (t) {
        return new module1431.default(this, t);
      },
    },
    {
      key: 'databaseUrl',
      get: function () {
        return this._databaseURL;
      },
    },
  ]);
  return T;
})(module1405.default);

exports.default = R;
var T = {
  ServerValue: ReactNative.NativeModules.RNFirebaseDatabase
    ? {
        TIMESTAMP: ReactNative.NativeModules.RNFirebaseDatabase.serverValueTimestamp || {
          '.sv': 'timestamp',
        },
      }
    : {},
  enableLogging: function (t) {
    if (ReactNative.NativeModules[y]) ReactNative.NativeModules[y].enableLogging(t);
  },
};
exports.statics = T;
