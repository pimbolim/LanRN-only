var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1399 = require('./1399'),
  module1400 = require('./1400'),
  module1403 = require('./1403'),
  module1405 = require('./1405'),
  module1404 = require('./1404'),
  module1401 = require('./1401'),
  module1472 = require('./1472'),
  module1473 = require('./1473');

function _() {
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

var p = ['messaging_message_received', 'messaging_token_refreshed'],
  S = 'RNFirebaseMessaging';
exports.MODULE_NAME = S;
var b = 'messaging';
exports.NAMESPACE = b;

var N = (function (t) {
  module35.default(P, t);

  var module1405 = P,
    N = _(),
    O = function () {
      var t,
        n = module34.default(module1405);

      if (N) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var s;
    module24.default(this, P);
    (s = O.call(this, t, {
      events: p,
      moduleName: S,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: b,
    }))._ios = new module1472.default(module39.default(s));
    module1399.SharedEventEmitter.addListener('messaging_message_received', function (t) {
      module1399.SharedEventEmitter.emit('onMessage', new module1473.default(t));
    });
    module1399.SharedEventEmitter.addListener('messaging_token_refreshed', function (t) {
      module1399.SharedEventEmitter.emit('onTokenRefresh', t);
    });
    if ('ios' === ReactNative.Platform.OS) module1404.getNativeModule(module39.default(s)).jsInitialised();
    return s;
  }

  module25.default(P, [
    {
      key: 'ios',
      get: function () {
        return this._ios;
      },
    },
    {
      key: 'getToken',
      value: function () {
        return module1404.getNativeModule(this).getToken();
      },
    },
    {
      key: 'deleteToken',
      value: function () {
        return module1404.getNativeModule(this).deleteToken();
      },
    },
    {
      key: 'onMessage',
      value: function (t) {
        var n,
          s = this;
        if (module1401.isFunction(t)) n = t;
        else {
          if (!module1401.isObject(t) || !module1401.isFunction(t.next))
            throw new Error('Messaging.onMessage failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module1403.getLogger(this).info('Creating onMessage listener');
        module1399.SharedEventEmitter.addListener('onMessage', n);
        return function () {
          module1403.getLogger(s).info('Removing onMessage listener');
          module1399.SharedEventEmitter.removeListener('onMessage', n);
        };
      },
    },
    {
      key: 'onTokenRefresh',
      value: function (t) {
        var n,
          s = this;
        if (module1401.isFunction(t)) n = t;
        else {
          if (!module1401.isObject(t) || !module1401.isFunction(t.next))
            throw new Error('Messaging.onTokenRefresh failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module1403.getLogger(this).info('Creating onTokenRefresh listener');
        module1399.SharedEventEmitter.addListener('onTokenRefresh', n);
        return function () {
          module1403.getLogger(s).info('Removing onTokenRefresh listener');
          module1399.SharedEventEmitter.removeListener('onTokenRefresh', n);
        };
      },
    },
    {
      key: 'requestPermission',
      value: function () {
        return module1404.getNativeModule(this).requestPermission();
      },
    },
    {
      key: 'hasPermission',
      value: function () {
        return module1404.getNativeModule(this).hasPermission();
      },
    },
    {
      key: 'sendMessage',
      value: function (t) {
        if (!(t instanceof module1473.default)) return Promise.reject(new Error("Messaging:sendMessage expects a 'RemoteMessage' but got type " + typeof t));

        try {
          return module1404.getNativeModule(this).sendMessage(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'subscribeToTopic',
      value: function (t) {
        return module1404.getNativeModule(this).subscribeToTopic(t);
      },
    },
    {
      key: 'unsubscribeFromTopic',
      value: function (t) {
        return module1404.getNativeModule(this).unsubscribeFromTopic(t);
      },
    },
    {
      key: 'setBackgroundMessageHandler',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'setBackgroundMessageHandler'));
      },
    },
    {
      key: 'useServiceWorker',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'useServiceWorker'));
      },
    },
  ]);
  return P;
})(module1405.default);

exports.default = N;
var O = {
  RemoteMessage: module1473.default,
};
exports.statics = O;
