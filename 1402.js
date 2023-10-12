var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1399 = require('./1399'),
  module1403 = require('./1403'),
  module1404 = require('./1404'),
  module1405 = require('./1405'),
  module1406 = require('./1406'),
  module1408 = require('./1408'),
  module1407 = require('./1407'),
  module1409 = require('./1409'),
  module1410 = require('./1410'),
  module1413 = require('./1413'),
  module1412 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = A(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = t[s];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./1412'));

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (A = function (t) {
    return t ? u : n;
  })(t);
}

function N() {
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

var R = ['interstitial_event', 'rewarded_video_event'],
  S = 'RNFirebaseAdMob';
exports.MODULE_NAME = S;
var k = 'admob';
exports.NAMESPACE = k;

var P = (function (t) {
  module35.default(M, t);

  var module1405 = M,
    module1407 = N(),
    b = function () {
      var t,
        n = module34.default(module1405);

      if (module1407) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M(t) {
    var u;
    module24.default(this, M);
    (u = b.call(this, t, {
      events: R,
      moduleName: S,
      hasMultiAppSupport: false,
      hasCustomUrlSupport: false,
      namespace: k,
    }))._initialized = false;
    u._appId = null;
    module1399.SharedEventEmitter.addListener('interstitial_event', u._onInterstitialEvent.bind(module39.default(u)));
    module1399.SharedEventEmitter.addListener('rewarded_video_event', u._onRewardedVideoEvent.bind(module39.default(u)));
    return u;
  }

  module25.default(M, [
    {
      key: '_onInterstitialEvent',
      value: function (t) {
        var n = 'interstitial_' + t.adUnit;
        module1399.SharedEventEmitter.listeners(n).length;
        module1399.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: '_onRewardedVideoEvent',
      value: function (t) {
        var n = 'rewarded_video_' + t.adUnit;
        module1399.SharedEventEmitter.listeners(n).length;
        module1399.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: 'initialize',
      value: function (t) {
        if (this._initialized) module1403.getLogger(this).warn('AdMob has already been initialized!');
        else {
          this._initialized = true;
          this._appId = t;
          module1404.getNativeModule(this).initialize(t);
        }
      },
    },
    {
      key: 'openDebugMenu',
      value: function () {
        if (this._initialized) {
          module1403.getLogger(this).info('Opening debug menu');
          module1404.getNativeModule(this).openDebugMenu(this._appId);
        } else module1403.getLogger(this).warn('AdMob needs to be initialized before opening the dev menu!');
      },
    },
    {
      key: 'interstitial',
      value: function (t) {
        return new module1406.default(this, t);
      },
    },
    {
      key: 'rewarded',
      value: function (t) {
        return new module1408.default(this, t);
      },
    },
  ]);
  return M;
})(module1405.default);

exports.default = P;
var z = {
  Banner: module1410.default,
  NativeExpress: module1413.default,
  AdRequest: module1407.default,
  VideoOptions: module1409.default,
  EventTypes: module1412.default,
  RewardedVideoEventTypes: module1412.RewardedVideoEventTypes,
  NativeExpressEventTypes: module1412.NativeExpressEventTypes,
};
exports.statics = z;
