var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1397 = require('./1397'),
  module1399 = require('./1399'),
  module1400 = require('./1400'),
  module1401 = require('./1401'),
  module1402 = k(require('./1402')),
  module1414 = k(require('./1414')),
  module1427 = k(require('./1427')),
  module1428 = k(require('./1428')),
  module1429 = k(require('./1429')),
  module1430 = k(require('./1430')),
  module1438 = k(require('./1438')),
  module1460 = k(require('./1460')),
  module1462 = k(require('./1462')),
  module1463 = k(require('./1463')),
  module1471 = k(require('./1471')),
  module1474 = k(require('./1474')),
  module1485 = k(require('./1485')),
  module1488 = k(require('./1488')),
  module1491 = k(require('./1491'));

function j(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (j = function (t) {
    return t ? u : n;
  })(t);
}

function k(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = j(n);
  if (u && u.has(t)) return u.get(t);
  var l = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var o in t)
    if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
      var f = s ? Object.getOwnPropertyDescriptor(t, o) : null;
      if (f && (f.get || f.set)) Object.defineProperty(l, o, f);
      else l[o] = t[o];
    }

  l.default = t;
  if (u) u.set(t, l);
  return l;
}

var z = ReactNative.NativeModules.RNFirebase,
  I = (function () {
    function t(l, s) {
      var p = this,
        h = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      module24.default(this, t);
      this._initialized = false;
      this._nativeInitialized = false;
      this._name = l;
      this._options = module11.default({}, s);

      if (h) {
        this._initialized = true;
        this._nativeInitialized = true;
      } else if (s.databaseURL && s.apiKey)
        z.initializeApp(this._name, this._options, function (t, n) {
          p._initialized = true;
          module1399.SharedEventEmitter.emit('AppReady:' + p._name, {
            error: t,
            result: n,
          });
        });

      this.admob = module1397.default.appModule(this, module1402.NAMESPACE, module1402.default);
      this.analytics = module1397.default.appModule(this, module1427.NAMESPACE, module1427.default);
      this.auth = module1397.default.appModule(this, module1414.NAMESPACE, module1414.default);
      this.config = module1397.default.appModule(this, module1428.NAMESPACE, module1428.default);
      this.crashlytics = module1397.default.appModule(this, module1429.NAMESPACE, module1429.default);
      this.database = module1397.default.appModule(this, module1430.NAMESPACE, module1430.default);
      this.firestore = module1397.default.appModule(this, module1438.NAMESPACE, module1438.default);
      this.functions = module1397.default.appModule(this, module1460.NAMESPACE, module1460.default);
      this.iid = module1397.default.appModule(this, module1462.NAMESPACE, module1462.default);
      this.links = module1397.default.appModule(this, module1463.NAMESPACE, module1463.default);
      this.messaging = module1397.default.appModule(this, module1471.NAMESPACE, module1471.default);
      this.notifications = module1397.default.appModule(this, module1474.NAMESPACE, module1474.default);
      this.perf = module1397.default.appModule(this, module1485.NAMESPACE, module1485.default);
      this.storage = module1397.default.appModule(this, module1488.NAMESPACE, module1488.default);
      this.utils = module1397.default.appModule(this, module1491.NAMESPACE, module1491.default);
      this._extendedProps = {};
    }

    module25.default(t, [
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'options',
        get: function () {
          return module11.default({}, this._options);
        },
      },
      {
        key: 'extendApp',
        value: function (t) {
          if (!module1401.isObject(t)) throw new Error(module1400.default.STRINGS.ERROR_MISSING_ARG('Object', 'extendApp'));

          for (var n = Object.keys(t), u = 0, l = n.length; u < l; u++) {
            var s = n[u];
            if (!this._extendedProps[s] && Object.hasOwnProperty.call(this, s)) throw new Error(module1400.default.STRINGS.ERROR_PROTECTED_PROP(s));
            this[s] = t[s];
            this._extendedProps[s] = true;
          }
        },
      },
      {
        key: 'delete',
        value: function () {
          var t = this;
          return this._name === module1397.default.DEFAULT_APP_NAME && this._nativeInitialized
            ? Promise.reject(new Error('Unable to delete the default native firebase app instance.'))
            : z.deleteApp(this._name).then(function () {
                return module1397.default.deleteApp(t._name);
              });
        },
      },
      {
        key: 'onReady',
        value: function () {
          var t = this;
          return this._initialized
            ? Promise.resolve(this)
            : new Promise(function (n, u) {
                module1399.SharedEventEmitter.once('AppReady:' + t._name, function (l) {
                  var s = l.error;
                  return s ? u(new Error(s)) : n(t);
                });
              });
        },
      },
      {
        key: 'toString',
        value: function () {
          return this._name;
        },
      },
    ]);
    return t;
  })();

exports.default = I;
