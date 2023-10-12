var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1405 = require('./1405'),
  module1401 = require('./1401'),
  module1404 = require('./1404'),
  module1396 = require('./1396'),
  module1461 = require('./1461');

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

var v = 'functions';
exports.NAMESPACE = v;
var D = 'RNFirebaseFunctions';

function O(t) {
  if (module1401.isObject(t) && t.__error) {
    var n = t.code,
      u = t.message,
      o = t.details;
    return Promise.reject(new module1461.default(h.HttpsErrorCode[n] || h.HttpsErrorCode.UNKNOWN, u, o));
  }

  return Promise.resolve(t);
}

exports.MODULE_NAME = D;

var _ = (function (t) {
  module35.default(_, t);

  var module1405 = _,
    module1401 = A(),
    p = function () {
      var t,
        n = module34.default(module1405);

      if (module1401) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _(t, u) {
    module24.default(this, _);
    var o = t,
      l = u || 'us-central1';

    if ('string' == typeof o) {
      l = o;
      o = module1396.default.app();
    }

    return p.call(
      this,
      o,
      {
        hasMultiAppSupport: true,
        hasCustomUrlSupport: false,
        hasRegionsSupport: true,
        namespace: v,
        moduleName: D,
      },
      l
    );
  }

  module25.default(_, [
    {
      key: 'httpsCallable',
      value: function (t) {
        var n = this;
        return function (u) {
          return module1404
            .getNativeModule(n)
            .httpsCallable(t, {
              data: u,
            })
            .then(O);
        };
      },
    },
    {
      key: 'useFunctionsEmulator',
      value: function (t) {
        return module1404.getNativeModule(this).useFunctionsEmulator(t);
      },
    },
  ]);
  return _;
})(module1405.default);

exports.default = _;
var h = {
  HttpsErrorCode: {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss',
  },
};
exports.statics = h;
