var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1400 = require('./1400'),
  module1401 = require('./1401'),
  module1405 = require('./1405'),
  module1492 = require('./1492');

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

var P = ReactNative.NativeModules.RNFirebase,
  O = 'RNFirebaseUtils';
exports.MODULE_NAME = O;
var A = 'utils';
exports.NAMESPACE = A;

var b = (function (t) {
  module35.default(h, t);

  var ReactNative = h,
    module1405 = p(),
    b = function () {
      var t,
        l = module34.default(ReactNative);

      if (module1405) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, s);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function h(t) {
    module24.default(this, h);
    return b.call(this, t, {
      moduleName: O,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: A,
    });
  }

  module25.default(h, [
    {
      key: 'database',
      get: function () {
        return module1492.default;
      },
    },
    {
      key: 'checkPlayServicesAvailability',
      value: function () {
        if (!module1401.isIOS) {
          var t = this.playServicesAvailability.status;
          if (!this.playServicesAvailability.isAvailable)
            if (module1400.default.OPTIONS.promptOnMissingPlayServices && this.playServicesAvailability.isUserResolvableError) this.promptForPlayServices();
            else {
              var l = module1400.default.STRINGS.ERROR_PLAY_SERVICES(t);

              if (module1400.default.OPTIONS.errorOnMissingPlayServices) {
                if (2 !== t) throw new Error(l);
                console.warn(l);
              } else console.warn(l);
            }
        }
      },
    },
    {
      key: 'getPlayServicesStatus',
      value: function () {
        return module1401.isIOS ? Promise.resolve(null) : P.getPlayServicesStatus();
      },
    },
    {
      key: 'promptForPlayServices',
      value: function () {
        return module1401.isIOS ? null : P.promptForPlayServices();
      },
    },
    {
      key: 'resolutionForPlayServices',
      value: function () {
        return module1401.isIOS ? null : P.resolutionForPlayServices();
      },
    },
    {
      key: 'makePlayServicesAvailable',
      value: function () {
        return module1401.isIOS ? null : P.makePlayServicesAvailable();
      },
    },
    {
      key: 'logLevel',
      set: function (t) {
        module1400.default.OPTIONS.logLevel = t;
      },
    },
    {
      key: 'playServicesAvailability',
      get: function () {
        return (
          P.playServicesAvailability || {
            isAvailable: true,
            status: 0,
          }
        );
      },
    },
    {
      key: 'errorOnMissingPlayServices',
      set: function (t) {
        module1400.default.OPTIONS.errorOnMissingPlayServices = t;
      },
    },
    {
      key: 'promptOnMissingPlayServices',
      set: function (t) {
        module1400.default.OPTIONS.promptOnMissingPlayServices = t;
      },
    },
  ]);
  return h;
})(module1405.default);

exports.default = b;
exports.statics = {};
