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

var v = 'iid';
exports.NAMESPACE = v;
var h = 'RNFirebaseInstanceId';
exports.MODULE_NAME = h;

var M = (function (t) {
  module35.default(N, t);

  var module1405 = N,
    M = p(),
    y = function () {
      var t,
        n = module34.default(module1405);

      if (M) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function N(t) {
    module24.default(this, N);
    return y.call(this, t, {
      hasCustomUrlSupport: false,
      moduleName: h,
      hasMultiAppSupport: false,
      namespace: v,
    });
  }

  module25.default(N, [
    {
      key: 'get',
      value: function () {
        return module1404.getNativeModule(this).get();
      },
    },
    {
      key: 'delete',
      value: function () {
        return module1404.getNativeModule(this).delete();
      },
    },
    {
      key: 'getToken',
      value: function (t, n) {
        return module1404.getNativeModule(this).getToken(t || this.app.options.messagingSenderId, n || '*');
      },
    },
    {
      key: 'deleteToken',
      value: function (t, n) {
        return module1404.getNativeModule(this).deleteToken(t || this.app.options.messagingSenderId, n || '*');
      },
    },
  ]);
  return N;
})(module1405.default);

exports.default = M;
exports.statics = {};
