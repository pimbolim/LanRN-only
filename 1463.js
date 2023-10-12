var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1464 = require('./1464'),
  module1399 = require('./1399'),
  module1403 = require('./1403'),
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

var E = ['links_link_received'],
  M = 'RNFirebaseLinks';
exports.MODULE_NAME = M;
var S = 'links';
exports.NAMESPACE = S;

var D = (function (t) {
  module35.default(_, t);

  var module1405 = _,
    D = p(),
    N = function () {
      var t,
        n = module34.default(module1405);

      if (D) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _(t) {
    var module25;
    module24.default(this, _);
    module25 = N.call(this, t, {
      events: E,
      moduleName: M,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: S,
    });
    module1399.SharedEventEmitter.addListener('links_link_received', function (t) {
      module1399.SharedEventEmitter.emit('onLink', t);
    });
    if ('ios' === ReactNative.Platform.OS) module1404.getNativeModule(module39.default(module25)).jsInitialised();
    return module25;
  }

  module25.default(_, [
    {
      key: 'createDynamicLink',
      value: function (t) {
        if (!(t instanceof module1464.default)) return Promise.reject(new Error("Links:createDynamicLink expects a 'DynamicLink' but got type " + typeof t));

        try {
          return module1404.getNativeModule(this).createDynamicLink(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'createShortDynamicLink',
      value: function (t, n) {
        if (!(t instanceof module1464.default)) return Promise.reject(new Error("Links:createShortDynamicLink expects a 'DynamicLink' but got type " + typeof t));

        try {
          return module1404.getNativeModule(this).createShortDynamicLink(t.build(), n);
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'getInitialLink',
      value: function () {
        return module1404.getNativeModule(this).getInitialLink();
      },
    },
    {
      key: 'onLink',
      value: function (t) {
        var n = this;
        module1403.getLogger(this).info('Creating onLink listener');
        module1399.SharedEventEmitter.addListener('onLink', t);
        return function () {
          module1403.getLogger(n).info('Removing onLink listener');
          module1399.SharedEventEmitter.removeListener('onLink', t);
        };
      },
    },
  ]);
  return _;
})(module1405.default);

exports.default = D;
var N = {
  DynamicLink: module1464.default,
};
exports.statics = N;
