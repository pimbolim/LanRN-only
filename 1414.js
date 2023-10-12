var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1415 = require('./1415'),
  module1405 = require('./1405'),
  module1399 = require('./1399'),
  module1401 = require('./1401'),
  module1403 = require('./1403'),
  module1404 = require('./1404'),
  module1400 = require('./1400'),
  module1416 = require('./1416'),
  module1417 = require('./1417'),
  module1418 = require('./1418'),
  module1419 = require('./1419'),
  module1420 = require('./1420'),
  module1421 = require('./1421'),
  module1422 = require('./1422'),
  module1423 = require('./1423'),
  module1424 = require('./1424'),
  module1425 = require('./1425'),
  module1426 = require('./1426');

function D() {
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

var T = ['auth_state_changed', 'auth_id_token_changed', 'phone_auth_state_changed'],
  L = 'RNFirebaseAuth';
exports.MODULE_NAME = L;
var W = 'auth';
exports.NAMESPACE = W;

var O = (function (t) {
  module35.default(U, t);

  var module1405 = U,
    module1419 = D(),
    k = function () {
      var t,
        n = module34.default(module1405);

      if (module1419) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function U(t) {
    var s;
    module24.default(this, U);
    s = k.call(this, t, {
      events: T,
      moduleName: L,
      hasMultiAppSupport: true,
      hasCustomUrlSupport: false,
      namespace: W,
    });
    var o = module1404.getNativeModule(module39.default(s));
    s._user = null;
    s._settings = null;
    s._authResult = false;
    s._languageCode = o.APP_LANGUAGE[t._name] || o.APP_LANGUAGE['[DEFAULT]'];
    if (o.APP_USER[t._name]) s._setUser(o.APP_USER[t._name]);
    module1399.SharedEventEmitter.addListener(module1399.getAppEventName(module39.default(s), 'auth_state_changed'), function (t) {
      s._setUser(t.user);

      module1399.SharedEventEmitter.emit(module1399.getAppEventName(module39.default(s), 'onAuthStateChanged'), s._user);
    });
    module1399.SharedEventEmitter.addListener(module1399.getAppEventName(module39.default(s), 'phone_auth_state_changed'), function (t) {
      var n = 'phone:auth:' + t.requestKey + ':' + t.type;
      module1399.SharedEventEmitter.emit(n, t.state);
    });
    module1399.SharedEventEmitter.addListener(module1399.getAppEventName(module39.default(s), 'auth_id_token_changed'), function (t) {
      s._setUser(t.user);

      module1399.SharedEventEmitter.emit(module1399.getAppEventName(module39.default(s), 'onIdTokenChanged'), s._user);
    });
    o.addAuthStateListener();
    o.addIdTokenListener();
    return s;
  }

  module25.default(U, [
    {
      key: '_setUser',
      value: function (t) {
        this._user = t ? new module1415.default(this, t) : null;
        this._authResult = true;
        module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onUserChanged'), this._user);
        return this._user;
      },
    },
    {
      key: '_setUserCredential',
      value: function (t) {
        var n = new module1415.default(this, t.user);
        this._user = n;
        this._authResult = true;
        module1399.SharedEventEmitter.emit(module1399.getAppEventName(this, 'onUserChanged'), this._user);
        return {
          additionalUserInfo: t.additionalUserInfo,
          user: n,
        };
      },
    },
    {
      key: 'onAuthStateChanged',
      value: function (t) {
        var n = this;
        module1403.getLogger(this).info('Creating onAuthStateChanged listener');
        module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this, 'onAuthStateChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module1403.getLogger(n).info('Removing onAuthStateChanged listener');
          module1399.SharedEventEmitter.removeListener(module1399.getAppEventName(n, 'onAuthStateChanged'), t);
        };
      },
    },
    {
      key: 'onIdTokenChanged',
      value: function (t) {
        var n = this;
        module1403.getLogger(this).info('Creating onIdTokenChanged listener');
        module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this, 'onIdTokenChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module1403.getLogger(n).info('Removing onIdTokenChanged listener');
          module1399.SharedEventEmitter.removeListener(module1399.getAppEventName(n, 'onIdTokenChanged'), t);
        };
      },
    },
    {
      key: 'onUserChanged',
      value: function (t) {
        var n = this;
        module1403.getLogger(this).info('Creating onUserChanged listener');
        module1399.SharedEventEmitter.addListener(module1399.getAppEventName(this, 'onUserChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module1403.getLogger(n).info('Removing onUserChanged listener');
          module1399.SharedEventEmitter.removeListener(module1399.getAppEventName(n, 'onUserChanged'), t);
        };
      },
    },
    {
      key: 'signOut',
      value: function () {
        var t = this;
        return module1404
          .getNativeModule(this)
          .signOut()
          .then(function () {
            t._setUser();
          });
      },
    },
    {
      key: 'signInAnonymously',
      value: function () {
        var t = this;
        return module1404
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'signInAnonymouslyAndRetrieveData',
      value: function () {
        var t = this;
        console.warn('Deprecated signInAnonymouslyAndRetrieveData in favor of signInAnonymously.');
        return module1404
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'createUserWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module1404
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'createUserAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated createUserAndRetrieveDataWithEmailAndPassword in favor of createUserWithEmailAndPassword.');
        return module1404
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module1404
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated signInAndRetrieveDataWithEmailAndPassword in favor of signInWithEmailAndPassword.');
        return module1404
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCustomToken',
      value: function (t) {
        var n = this;
        return module1404
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCustomToken',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCustomToken in favor of signInWithCustomToken.');
        return module1404
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCredential',
      value: function (t) {
        var n = this;
        return module1404
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCredential',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCredential in favor of signInWithCredential.');
        return module1404
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithPhoneNumber',
      value: function (t, n) {
        var s = this;
        return module1401.isAndroid
          ? module1404
              .getNativeModule(this)
              .signInWithPhoneNumber(t, n || false)
              .then(function (t) {
                return new module1416.default(s, t.verificationId);
              })
          : module1404
              .getNativeModule(this)
              .signInWithPhoneNumber(t)
              .then(function (t) {
                return new module1416.default(s, t.verificationId);
              });
      },
    },
    {
      key: 'verifyPhoneNumber',
      value: function (t, n, s) {
        var u = s,
          o = 60;
        if (module1401.isBoolean(n)) u = n;
        else o = n;
        return new module1417.default(this, t, o, u);
      },
    },
    {
      key: 'sendPasswordResetEmail',
      value: function (t, n) {
        return module1404.getNativeModule(this).sendPasswordResetEmail(t, n);
      },
    },
    {
      key: 'sendSignInLinkToEmail',
      value: function (t, n) {
        return module1404.getNativeModule(this).sendSignInLinkToEmail(t, n);
      },
    },
    {
      key: 'isSignInWithEmailLink',
      value: function (t) {
        return 'string' == typeof t && (t.includes('mode=signIn') || t.includes('mode%3DsignIn')) && (t.includes('oobCode=') || t.includes('oobCode%3D'));
      },
    },
    {
      key: 'signInWithEmailLink',
      value: function (t, n) {
        var s = this;
        return module1404
          .getNativeModule(this)
          .signInWithEmailLink(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'confirmPasswordReset',
      value: function (t, n) {
        return module1404.getNativeModule(this).confirmPasswordReset(t, n);
      },
    },
    {
      key: 'applyActionCode',
      value: function (t) {
        var n = this;
        return module1404
          .getNativeModule(this)
          .applyActionCode(t)
          .then(function (t) {
            n._setUser(t);
          });
      },
    },
    {
      key: 'checkActionCode',
      value: function (t) {
        return module1404.getNativeModule(this).checkActionCode(t);
      },
    },
    {
      key: 'fetchSignInMethodsForEmail',
      value: function (t) {
        return module1404.getNativeModule(this).fetchSignInMethodsForEmail(t);
      },
    },
    {
      key: 'verifyPasswordResetCode',
      value: function (t) {
        return module1404.getNativeModule(this).verifyPasswordResetCode(t);
      },
    },
    {
      key: 'languageCode',
      get: function () {
        return this._languageCode;
      },
      set: function (t) {
        this._languageCode = t;
        module1404.getNativeModule(this).setLanguageCode(t);
      },
    },
    {
      key: 'settings',
      get: function () {
        if (!this._settings) this._settings = new module1418.default(this);
        return this._settings;
      },
    },
    {
      key: 'currentUser',
      get: function () {
        return this._user;
      },
    },
    {
      key: 'getRedirectResult',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'getRedirectResult'));
      },
    },
    {
      key: 'setPersistence',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'setPersistence'));
      },
    },
    {
      key: 'signInWithPopup',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithPopup'));
      },
    },
    {
      key: 'signInWithRedirect',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithRedirect'));
      },
    },
    {
      key: 'useDeviceLanguage',
      value: function () {
        throw new Error(module1400.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'useDeviceLanguage'));
      },
    },
  ]);
  return U;
})(module1405.default);

exports.default = O;
var G = {
  EmailAuthProvider: module1419.default,
  PhoneAuthProvider: module1420.default,
  GoogleAuthProvider: module1421.default,
  GithubAuthProvider: module1422.default,
  TwitterAuthProvider: module1424.default,
  FacebookAuthProvider: module1425.default,
  AppleAuthProvider: module1426.default,
  OAuthProvider: module1423.default,
  PhoneAuthState: {
    CODE_SENT: 'sent',
    AUTO_VERIFY_TIMEOUT: 'timeout',
    AUTO_VERIFIED: 'verified',
    ERROR: 'error',
  },
};
exports.statics = G;
