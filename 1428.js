var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1403 = require('./1403'),
  module1405 = require('./1405'),
  module1404 = require('./1404');

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

var V = 'RNFirebaseRemoteConfig';
exports.MODULE_NAME = V;
var p = 'config';
exports.NAMESPACE = p;

var M = (function (t) {
  module35.default(b, t);

  var module1405 = b,
    M = h(),
    y = function () {
      var t,
        u = module34.default(module1405);

      if (M) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t) {
    var n;
    module24.default(this, b);
    (n = y.call(this, t, {
      moduleName: V,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: p,
    }))._developerModeEnabled = false;
    return n;
  }

  module25.default(b, [
    {
      key: '_nativeValueToJS',
      value: function (t) {
        return {
          source: t.source,
          val: function () {
            return null === t.boolValue || ('true' !== t.stringValue && 'false' !== t.stringValue && null !== t.stringValue)
              ? null === t.numberValue || undefined === t.numberValue || (null != t.stringValue && '' !== t.stringValue && t.numberValue.toString() !== t.stringValue)
                ? t.dataValue === t.stringValue || (null != t.stringValue && '' !== t.stringValue)
                  ? t.stringValue
                  : t.dataValue
                : t.numberValue
              : t.boolValue;
          },
        };
      },
    },
    {
      key: 'enableDeveloperMode',
      value: function () {
        if (!this._developerModeEnabled) {
          module1403.getLogger(this).debug('Enabled developer mode');
          module1404.getNativeModule(this).enableDeveloperMode();
          this._developerModeEnabled = true;
        }
      },
    },
    {
      key: 'fetch',
      value: function (t) {
        if (undefined !== t) {
          module1403.getLogger(this).debug('Fetching remote config data with expiration ' + t.toString());
          return module1404.getNativeModule(this).fetchWithExpirationDuration(t);
        } else {
          module1403.getLogger(this).debug('Fetching remote config data');
          return module1404.getNativeModule(this).fetch();
        }
      },
    },
    {
      key: 'activateFetched',
      value: function () {
        module1403.getLogger(this).debug('Activating remote config');
        return module1404.getNativeModule(this).activateFetched();
      },
    },
    {
      key: 'getValue',
      value: function (t) {
        return module1404
          .getNativeModule(this)
          .getValue(t || '')
          .then(this._nativeValueToJS);
      },
    },
    {
      key: 'getValues',
      value: function (t) {
        var u = this;
        return module1404
          .getNativeModule(this)
          .getValues(t || [])
          .then(function (n) {
            for (var l = {}, o = 0, s = t.length; o < s; o++) l[t[o]] = u._nativeValueToJS(n[o]);

            return l;
          });
      },
    },
    {
      key: 'getKeysByPrefix',
      value: function (t) {
        return module1404.getNativeModule(this).getKeysByPrefix(t);
      },
    },
    {
      key: 'setDefaults',
      value: function (t) {
        module1404.getNativeModule(this).setDefaults(t);
      },
    },
    {
      key: 'setDefaultsFromResource',
      value: function (t) {
        module1404.getNativeModule(this).setDefaultsFromResource(t);
      },
    },
  ]);
  return b;
})(module1405.default);

exports.default = M;
exports.statics = {};
