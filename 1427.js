var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1405 = require('./1405'),
  module1404 = require('./1404'),
  module1401 = require('./1401');

function p() {
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

var h = /^[a-zA-Z0-9_]+$/,
  y = [
    'app_clear_data',
    'app_uninstall',
    'app_update',
    'error',
    'first_open',
    'in_app_purchase',
    'notification_dismiss',
    'notification_foreground',
    'notification_open',
    'notification_receive',
    'os_update',
    'session_start',
    'user_engagement',
  ],
  E = 'RNFirebaseAnalytics';
exports.MODULE_NAME = E;
var _ = 'analytics';
exports.NAMESPACE = _;

var M = (function (t) {
  module35.default(b, t);

  var module1405 = b,
    M = p(),
    w = function () {
      var t,
        n = module34.default(module1405);

      if (M) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t) {
    module24.default(this, b);
    return w.call(this, t, {
      moduleName: E,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: _,
    });
  }

  module25.default(b, [
    {
      key: 'logEvent',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if (!module1401.isString(t)) throw new Error("analytics.logEvent(): First argument 'name' is required and must be a string value.");
        if (undefined !== n && !module1401.isObject(n)) throw new Error("analytics.logEvent(): Second optional argument 'params' must be an object if provided.");
        if (y.includes(t)) throw new Error("analytics.logEvent(): event name '" + t + "' is a reserved event name and can not be used.");
        if (!h.test(t)) throw new Error("analytics.logEvent(): Event name '" + t + "' is invalid. Names should contain 1 to 32 alphanumeric characters or underscores.");
        if (n && Object.keys(n).length > 25) throw new Error('analytics.logEvent(): Maximum number of parameters exceeded (25).');
        module1404.getNativeModule(this).logEvent(t, n);
      },
    },
    {
      key: 'setAnalyticsCollectionEnabled',
      value: function (t) {
        module1404.getNativeModule(this).setAnalyticsCollectionEnabled(t);
      },
    },
    {
      key: 'setCurrentScreen',
      value: function (t, n) {
        module1404.getNativeModule(this).setCurrentScreen(t, n);
      },
    },
    {
      key: 'setMinimumSessionDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1e4;
        module1404.getNativeModule(this).setMinimumSessionDuration(t);
      },
    },
    {
      key: 'setSessionTimeoutDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 18e5;
        module1404.getNativeModule(this).setSessionTimeoutDuration(t);
      },
    },
    {
      key: 'setUserId',
      value: function (t) {
        if (null !== t && !module1401.isString(t)) throw new Error('analytics.setUserId(): The supplied userId must be a string value or null.');
        module1404.getNativeModule(this).setUserId(t);
      },
    },
    {
      key: 'setUserProperty',
      value: function (t, n) {
        if (null !== n && !module1401.isString(n)) throw new Error('analytics.setUserProperty(): The supplied property must be a string value or null.');
        module1404.getNativeModule(this).setUserProperty(t, n);
      },
    },
    {
      key: 'setUserProperties',
      value: function (t) {
        var n = this;
        Object.keys(t).forEach(function (o) {
          var s = t[o];
          if (null !== s && !module1401.isString(s)) throw new Error("analytics.setUserProperties(): The property with name '" + o + "' must be a string value or null.");
          module1404.getNativeModule(n).setUserProperty(o, t[o]);
        });
      },
    },
  ]);
  return b;
})(module1405.default);

exports.default = M;
exports.statics = {};
