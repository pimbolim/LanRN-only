var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1486 = require('./1486'),
  module1487 = require('./1487'),
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

var v = 'RNFirebasePerformance';
exports.MODULE_NAME = v;
var w = 'perf';
exports.NAMESPACE = w;

var y = {
    CONNECT: true,
    DELETE: true,
    GET: true,
    HEAD: true,
    OPTIONS: true,
    PATCH: true,
    POST: true,
    PUT: true,
    TRACE: true,
  },
  M = (function (t) {
    module35.default(P, t);

    var module1405 = P,
      M = h(),
      b = function () {
        var t,
          n = module34.default(module1405);

        if (M) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      module24.default(this, P);
      return b.call(this, t, {
        moduleName: v,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: w,
      });
    }

    module25.default(P, [
      {
        key: 'setPerformanceCollectionEnabled',
        value: function (t) {
          if ('boolean' != typeof t) throw new Error('firebase.perf().setPerformanceCollectionEnabled() requires a boolean value');
          return module1404.getNativeModule(this).setPerformanceCollectionEnabled(t);
        },
      },
      {
        key: 'newTrace',
        value: function (t) {
          if ('string' != typeof t) throw new Error('firebase.perf().newTrace() requires a string value');
          return new module1486.default(this, t);
        },
      },
      {
        key: 'newHttpMetric',
        value: function (t, n) {
          if ('string' != typeof t || 'string' != typeof n) throw new Error('firebase.perf().newHttpMetric() requires url and httpMethod string values');
          if (!y[n]) throw new Error('firebase.perf().newHttpMetric() httpMethod should be one of ' + Object.keys(y).join(', '));
          return new module1487.default(this, t, n);
        },
      },
    ]);
    return P;
  })(module1405.default);

exports.default = M;
exports.statics = {};
