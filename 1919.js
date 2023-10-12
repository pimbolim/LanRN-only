var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1916 = require('./1916');

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

var module1914 = new (require('./1914').default)('XMLHttpRequestEventTarget');
module1914.disable();

var p = (function (t) {
  module35.default(v, t);

  var module1916 = v,
    p = h(),
    b = function () {
      var t,
        o = module34.default(module1916);

      if (p) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);

    (t = b.call(this))._onabort = function () {};

    t._onerror = function () {};

    t._onload = function () {};

    t._onloadstart = function () {};

    t._onprogress = function () {};

    t._ontimeout = function () {};

    t._onloadend = function () {};

    module1914.info('constructor called');
    return t;
  }

  module25.default(v, [
    {
      key: 'dispatchEvent',
      value: function (t, o) {
        switch ((module1914.debug('dispatch event', t, o), module32.default(module34.default(v.prototype), 'dispatchEvent', this).call(this, t, o), t)) {
          case 'abort':
            this._onabort(o);

            break;

          case 'error':
            this._onerror(o);

            break;

          case 'load':
            this._onload(o);

            break;

          case 'loadstart':
            this._onloadstart(o);

            break;

          case 'loadend':
            this._onloadend(o);

            break;

          case 'progress':
            this._onprogress(o);

            break;

          case 'timeout':
            this._ontimeout(o);
        }
      },
    },
    {
      key: 'onabort',
      get: function () {
        return this._onabort;
      },
      set: function (t) {
        module1914.info('set onabort');
        this._onabort = t;
      },
    },
    {
      key: 'onerror',
      get: function () {
        return this._onerror;
      },
      set: function (t) {
        module1914.info('set onerror');
        this._onerror = t;
      },
    },
    {
      key: 'onload',
      get: function () {
        return this._onload;
      },
      set: function (t) {
        module1914.info('set onload', t);
        this._onload = t;
      },
    },
    {
      key: 'onloadstart',
      get: function () {
        return this._onloadstart;
      },
      set: function (t) {
        module1914.info('set onloadstart');
        this._onloadstart = t;
      },
    },
    {
      key: 'onprogress',
      get: function () {
        return this._onprogress;
      },
      set: function (t) {
        module1914.info('set onprogress');
        this._onprogress = t;
      },
    },
    {
      key: 'ontimeout',
      get: function () {
        return this._ontimeout;
      },
      set: function (t) {
        module1914.info('set ontimeout');
        this._ontimeout = t;
      },
    },
    {
      key: 'onloadend',
      get: function () {
        return this._onloadend;
      },
      set: function (t) {
        module1914.info('set onloadend');
        this._onloadend = t;
      },
    },
  ]);
  return v;
})(module1916.default);

exports.default = p;
