var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1432 = require('./1432'),
  module1433 = require('./1433'),
  module1434 = require('./1434'),
  module1403 = require('./1403'),
  module1404 = require('./1404'),
  module1435 = require('./1435'),
  module1401 = require('./1401'),
  module1436 = require('./1436');

function O(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, u);
  }

  return s;
}

function R(t) {
  for (var s = 1; s < arguments.length; s++) {
    var u = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      O(Object(u), true).forEach(function (s) {
        module47.default(t, s, u[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      O(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function j() {
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

var F = 0,
  P = {
    value: 'value',
    child_added: 'child_added',
    child_removed: 'child_removed',
    child_changed: 'child_changed',
    child_moved: 'child_moved',
  },
  q = (function (t) {
    module35.default(q, t);

    var module47 = q,
      module1435 = j(),
      O = function () {
        var t,
          s = module34.default(module47);

        if (module1435) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(s, arguments, u);
        } else t = s.apply(this, arguments);

        return module37.default(this, t);
      };

    function q(t, n, u) {
      var l;
      module24.default(this, q);
      (l = O.call(this, n))._refListeners = {};
      l._database = t;
      l._query = new module1432.default(module39.default(l), u);
      module1403.getLogger(t).debug('Created new Reference', l._getRefKey());
      return l;
    }

    module25.default(q, [
      {
        key: 'keepSynced',
        value: function (t) {
          return module1404.getNativeModule(this._database).keepSynced(this._getRefKey(), this.path, this._query.getModifiers(), t);
        },
      },
      {
        key: 'set',
        value: function (t, n) {
          return module1401.promiseOrCallback(module1404.getNativeModule(this._database).set(this.path, this._serializeAnyType(t)), n);
        },
      },
      {
        key: 'setPriority',
        value: function (t, n) {
          var s = this._serializeAnyType(t);

          return module1401.promiseOrCallback(module1404.getNativeModule(this._database).setPriority(this.path, s), n);
        },
      },
      {
        key: 'setWithPriority',
        value: function (t, n, s) {
          var u = this._serializeAnyType(t),
            o = this._serializeAnyType(n);

          return module1401.promiseOrCallback(module1404.getNativeModule(this._database).setWithPriority(this.path, u, o), s);
        },
      },
      {
        key: 'update',
        value: function (t, n) {
          var s = this._serializeObject(t);

          return module1401.promiseOrCallback(module1404.getNativeModule(this._database).update(this.path, s), n);
        },
      },
      {
        key: 'remove',
        value: function (t) {
          return module1401.promiseOrCallback(module1404.getNativeModule(this._database).remove(this.path), t);
        },
      },
      {
        key: 'transaction',
        value: function (t, n) {
          var s = this,
            u = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          return module1401.isFunction(t)
            ? new Promise(function (o, l) {
                s._database._transactionHandler.add(
                  s,
                  t,
                  function (t, u, c) {
                    if (module1401.isFunction(n)) t ? n(t, u, null) : n(null, u, new module1433.default(s, c));
                    return t
                      ? l(t)
                      : o({
                          committed: u,
                          snapshot: new module1433.default(s, c),
                        });
                  },
                  u
                );
              })
            : Promise.reject(new Error('Missing transactionUpdate function argument.'));
        },
      },
      {
        key: 'once',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 'value',
            s = arguments.length > 1 ? arguments[1] : undefined,
            u = arguments.length > 2 ? arguments[2] : undefined,
            o = arguments.length > 3 ? arguments[3] : undefined;
          return module1404
            .getNativeModule(this._database)
            .once(this._getRefKey(), this.path, this._query.getModifiers(), n)
            .then(function (n) {
              var l = n.snapshot,
                c = new module1433.default(t, l);

              if (module1401.isFunction(s)) {
                if (module1401.isObject(u)) s.bind(u)(c);
                if (o && module1401.isObject(o)) s.bind(o)(c);
                s(c);
              }

              return c;
            })
            .catch(function (t) {
              if (module1401.isFunction(u)) return u(t);
              throw t;
            });
        },
      },
      {
        key: 'push',
        value: function (t, n) {
          var module24,
            u = module1401.generatePushID(this._database._serverTimeOffset),
            o = this.child(u),
            l = this.child(u);
          module24 =
            null != t
              ? l.set(t, n).then(function () {
                  return o;
                })
              : Promise.resolve(o);
          l.then = module24.then.bind(module24);
          l.catch = module24.catch.bind(module24);
          if (module1401.isFunction(n)) module24.catch(function () {});
          return l;
        },
      },
      {
        key: 'orderByKey',
        value: function () {
          return this.orderBy('orderByKey');
        },
      },
      {
        key: 'orderByPriority',
        value: function () {
          return this.orderBy('orderByPriority');
        },
      },
      {
        key: 'orderByValue',
        value: function () {
          return this.orderBy('orderByValue');
        },
      },
      {
        key: 'orderByChild',
        value: function (t) {
          return this.orderBy('orderByChild', t);
        },
      },
      {
        key: 'orderBy',
        value: function (t, n) {
          var s = new q(this._database, this.path, this._query.getModifiers());

          s._query.orderBy(t, n);

          return s;
        },
      },
      {
        key: 'limitToLast',
        value: function (t) {
          return this.limit('limitToLast', t);
        },
      },
      {
        key: 'limitToFirst',
        value: function (t) {
          return this.limit('limitToFirst', t);
        },
      },
      {
        key: 'limit',
        value: function (t, n) {
          var s = new q(this._database, this.path, this._query.getModifiers());

          s._query.limit(t, n);

          return s;
        },
      },
      {
        key: 'equalTo',
        value: function (t, n) {
          return this.filter('equalTo', t, n);
        },
      },
      {
        key: 'endAt',
        value: function (t, n) {
          return this.filter('endAt', t, n);
        },
      },
      {
        key: 'startAt',
        value: function (t, n) {
          return this.filter('startAt', t, n);
        },
      },
      {
        key: 'filter',
        value: function (t, n, s) {
          var u = new q(this._database, this.path, this._query.getModifiers());

          u._query.filter(t, n, s);

          return u;
        },
      },
      {
        key: 'onDisconnect',
        value: function () {
          return new module1434.default(this);
        },
      },
      {
        key: 'child',
        value: function (t) {
          return new q(this._database, this.path + '/' + t);
        },
      },
      {
        key: 'toString',
        value: function () {
          return '' + this._database.databaseUrl + this.path;
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return this.toString();
        },
      },
      {
        key: 'isEqual',
        value: function (t) {
          return !!t && t.constructor === q && t.key === this.key && this._query.queryIdentifier() === t._query.queryIdentifier();
        },
      },
      {
        key: 'parent',
        get: function () {
          return '/' === this.path ? null : new q(this._database, this.path.substring(0, this.path.lastIndexOf('/')));
        },
      },
      {
        key: 'ref',
        get: function () {
          return this;
        },
      },
      {
        key: 'root',
        get: function () {
          return new q(this._database, '/');
        },
      },
      {
        key: '_getRegistrationKey',
        value: function (t) {
          return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier() + '$' + F + '$' + t;
        },
      },
      {
        key: '_getRefKey',
        value: function () {
          return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier();
        },
      },
      {
        key: '_serializeObject',
        value: function (t) {
          return module1401.isObject(t) ? module1401.tryJSONParse(module1401.tryJSONStringify(t)) : t;
        },
      },
      {
        key: '_serializeAnyType',
        value: function (t) {
          return module1401.isObject(t)
            ? {
                type: 'object',
                value: this._serializeObject(t),
              }
            : {
                type: typeof t,
                value: t,
              };
        },
      },
      {
        key: 'on',
        value: function (t, n, s, u) {
          if (!t) throw new Error('Query.on failed: Function called with 0 arguments. Expects at least 2.');
          if (!module1401.isString(t) || !P[t]) throw new Error('Query.on failed: First argument must be a valid string event type: "' + Object.keys(P).join(', ') + '"');
          if (!n) throw new Error('Query.on failed: Function called with 1 argument. Expects at least 2.');
          if (!module1401.isFunction(n)) throw new Error('Query.on failed: Second argument must be a valid function.');
          if (s && !module1401.isFunction(s) && !module1401.isObject(u) && !module1401.isObject(s))
            throw new Error('Query.on failed: Function called with 3 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');
          if (s && !module1401.isFunction(s) && u)
            throw new Error('Query.on failed: Function called with 4 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');

          var o = this._getRegistrationKey(t),
            l = o + '$cancelled',
            c = s && !module1401.isFunction(s) ? s : u,
            h = {
              eventType: t,
              ref: this,
              path: this.path,
              key: this._getRefKey(),
              appName: this._database.app.name,
              dbURL: this._database.databaseUrl,
              eventRegistrationKey: o,
            };

          module1436.default.addRegistration(
            R(
              R({}, h),
              {},
              {
                listener: c ? n.bind(c) : n,
              }
            )
          );
          if (s && module1401.isFunction(s))
            module1436.default.addRegistration({
              ref: this,
              once: true,
              path: this.path,
              key: this._getRefKey(),
              appName: this._database.app.name,
              dbURL: this._database.databaseUrl,
              eventType: t + '$cancelled',
              eventRegistrationKey: l,
              listener: c ? s.bind(c) : s,
            });
          module1404.getNativeModule(this._database).on({
            eventType: t,
            path: this.path,
            key: this._getRefKey(),
            appName: this._database.app.name,
            modifiers: this._query.getModifiers(),
            hasCancellationCallback: module1401.isFunction(s),
            registration: {
              eventRegistrationKey: o,
              key: h.key,
              registrationCancellationKey: l,
            },
          });
          F += 1;
          return n;
        },
      },
      {
        key: 'off',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
            n = arguments.length > 1 ? arguments[1] : undefined;
          if (!arguments.length) return module1436.default.removeListenersForRegistrations(module1436.default.getRegistrationsByPath(this.path));
          if (t && (!module1401.isString(t) || !P[t])) throw new Error('Query.off failed: First argument must be a valid string event type: "' + Object.keys(P).join(', ') + '"');
          if (n && !module1401.isFunction(n)) throw new Error('Query.off failed: Function called with 2 arguments, but second optional argument was not a function.');

          if (t && n) {
            var s = module1436.default.getOneByPathEventListener(this.path, t, n);

            if (s) {
              module1436.default.removeListenersForRegistrations([s + '$cancelled']);
              return module1436.default.removeListenerRegistrations(n, [s]);
            } else return [];
          }

          var u = module1436.default.getRegistrationsByPathEvent(this.path, t);
          module1436.default.removeListenersForRegistrations(module1436.default.getRegistrationsByPathEvent(this.path, t + '$cancelled'));
          return module1436.default.removeListenersForRegistrations(u);
        },
      },
    ]);
    return q;
  })(module1435.default);

exports.default = q;
