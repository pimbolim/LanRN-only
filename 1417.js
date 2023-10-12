var module24 = require('./24'),
  module25 = require('./25'),
  module1400 = require('./1400'),
  module1399 = require('./1399'),
  module1401 = require('./1401'),
  module1404 = require('./1404'),
  v = (function () {
    function t(s, o, u, v) {
      module24.default(this, t);
      this._auth = s;
      this._reject = null;
      this._resolve = null;
      this._promise = null;
      this._credential = null;
      this._timeout = u || 20;
      this._forceResending = v || false;
      this._phoneAuthRequestKey = module1401.generatePushID();
      this._internalEvents = {
        codeSent: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeSent',
        verificationFailed: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationFailed',
        verificationComplete: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationComplete',
        codeAutoRetrievalTimeout: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeAutoRetrievalTimeout',
      };
      this._publicEvents = {
        error: 'phone:auth:' + this._phoneAuthRequestKey + ':error',
        event: 'phone:auth:' + this._phoneAuthRequestKey + ':event',
        success: 'phone:auth:' + this._phoneAuthRequestKey + ':success',
      };

      this._subscribeToEvents();

      if (module1401.isAndroid) module1404.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey, this._timeout, this._forceResending);
      if (module1401.isIOS) module1404.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey);
    }

    module25.default(t, [
      {
        key: '_subscribeToEvents',
        value: function () {
          for (var t = Object.keys(this._internalEvents), n = 0, s = t.length; n < s; n++) {
            var o = t[n];
            module1399.SharedEventEmitter.once(this._internalEvents[o], this['_' + o + 'Handler'].bind(this));
          }
        },
      },
      {
        key: '_addUserObserver',
        value: function (t) {
          module1399.SharedEventEmitter.addListener(this._publicEvents.event, t);
        },
      },
      {
        key: '_emitToObservers',
        value: function (t) {
          module1399.SharedEventEmitter.emit(this._publicEvents.event, t);
        },
      },
      {
        key: '_emitToErrorCb',
        value: function (t) {
          var n = t.error;
          if (this._reject) this._reject(n);
          module1399.SharedEventEmitter.emit(this._publicEvents.error, n);
        },
      },
      {
        key: '_emitToSuccessCb',
        value: function (t) {
          if (this._resolve) this._resolve(t);
          module1399.SharedEventEmitter.emit(this._publicEvents.success, t);
        },
      },
      {
        key: '_removeAllListeners',
        value: function () {
          var t = this;
          setTimeout(function () {
            Object.values(t._internalEvents).forEach(function (t) {
              module1399.SharedEventEmitter.removeAllListeners(t);
            });
            Object.values(t._publicEvents).forEach(function (t) {
              module1399.SharedEventEmitter.removeAllListeners(t);
            });
          }, 0);
        },
      },
      {
        key: '_promiseDeferred',
        value: function () {
          var t = this;
          if (!this._promise)
            this._promise = new Promise(function (n, s) {
              t._resolve = function (s) {
                t._resolve = null;
                return n(s);
              };

              t._reject = function (n) {
                t._reject = null;
                return s(n);
              };
            });
        },
      },
      {
        key: '_codeSentHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: null,
            error: null,
            state: 'sent',
          };

          this._emitToObservers(n);

          if (module1401.isIOS) this._emitToSuccessCb(n);
        },
      },
      {
        key: '_codeAutoRetrievalTimeoutHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: null,
            error: null,
            state: 'timeout',
          };

          this._emitToObservers(n);

          this._emitToSuccessCb(n);
        },
      },
      {
        key: '_verificationCompleteHandler',
        value: function (t) {
          var n = {
            verificationId: t.verificationId,
            code: t.code || null,
            error: null,
            state: 'verified',
          };

          this._emitToObservers(n);

          this._emitToSuccessCb(n);

          this._removeAllListeners();
        },
      },
      {
        key: '_verificationFailedHandler',
        value: function (t) {
          var n = {
              verificationId: t.verificationId,
              code: null,
              error: null,
              state: 'error',
            },
            s = t.error,
            o = s.code,
            u = s.message,
            c = s.nativeErrorMessage;
          n.error = module1401.nativeToJSError(o, u, {
            nativeErrorMessage: c,
          });

          this._emitToObservers(n);

          this._emitToErrorCb(n);

          this._removeAllListeners();
        },
      },
      {
        key: 'on',
        value: function (t, n, s, c) {
          if (!module1401.isString(t)) throw new Error(module1400.default.STRINGS.ERROR_MISSING_ARG_NAMED('event', 'string', 'on'));
          if ('state_changed' !== t) throw new Error(module1400.default.STRINGS.ERROR_ARG_INVALID_VALUE('event', 'state_changed', t));
          if (!module1401.isFunction(n)) throw new Error(module1400.default.STRINGS.ERROR_MISSING_ARG_NAMED('observer', 'function', 'on'));

          this._addUserObserver(n);

          if (module1401.isFunction(s)) module1399.SharedEventEmitter.once(this._publicEvents.error, s);
          if (module1401.isFunction(c)) module1399.SharedEventEmitter.once(this._publicEvents.success, c);
          return this;
        },
      },
      {
        key: 'then',
        value: function (t) {
          if ((this._promiseDeferred(), this._promise)) return this._promise.then.bind(this._promise)(t);
        },
      },
      {
        key: 'catch',
        value: function (t) {
          if ((this._promiseDeferred(), this._promise)) return this._promise.catch.bind(this._promise)(t);
        },
      },
    ]);
    return t;
  })();

exports.default = v;
