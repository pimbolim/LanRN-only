var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1405 = require('./1405'),
  module1404 = require('./1404');

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

var y = 'RNFirebaseCrashlytics';
exports.MODULE_NAME = y;
var v = 'crashlytics';
exports.NAMESPACE = v;

var h = (function (t) {
  module35.default(w, t);

  var module1405 = w,
    h = p(),
    E = function () {
      var t,
        o = module34.default(module1405);

      if (h) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    module24.default(this, w);
    return E.call(this, t, {
      moduleName: y,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: v,
    });
  }

  module25.default(w, [
    {
      key: 'crash',
      value: function () {
        module1404.getNativeModule(this).crash();
      },
    },
    {
      key: 'log',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).log(t);
      },
    },
    {
      key: 'recordError',
      value: function (t, o) {
        if ('number' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).recordError(t, o);
      },
    },
    {
      key: 'recordCustomError',
      value: function (t, o, n) {
        if (undefined === n) {
          if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
          module1404.getNativeModule(this).recordCustomError(t, o, []);
        } else {
          if ('string' != typeof t || 'string' != typeof o || !Array.isArray(n)) throw new Error('Invalid parameter type!');
          var l = true;
          if (
            (n.forEach(function (t) {
              if (!Object.prototype.hasOwnProperty.call(t, 'fileName')) l = false;
            }),
            !l)
          )
            throw new Error('Missing required argument fileName!');
          module1404.getNativeModule(this).recordCustomError(t, o, n);
        }
      },
    },
    {
      key: 'setBoolValue',
      value: function (t, o) {
        if ('string' != typeof t || 'boolean' != typeof o) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setBoolValue(t, o);
      },
    },
    {
      key: 'setFloatValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setFloatValue(t, o);
      },
    },
    {
      key: 'setIntValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setIntValue(t, o);
      },
    },
    {
      key: 'setStringValue',
      value: function (t, o) {
        if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setStringValue(t, o);
      },
    },
    {
      key: 'setUserIdentifier',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setUserIdentifier(t);
      },
    },
    {
      key: 'setUserName',
      value: function (t) {
        if ('string' == typeof t) return module1404.getNativeModule(this).setUserName(t);
        throw new Error('Invalid parameter type!');
      },
    },
    {
      key: 'setUserEmail',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module1404.getNativeModule(this).setUserEmail(t);
      },
    },
    {
      key: 'enableCrashlyticsCollection',
      value: function () {
        module1404.getNativeModule(this).enableCrashlyticsCollection();
      },
    },
  ]);
  return w;
})(module1405.default);

exports.default = h;
exports.statics = {};
