var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1916 = require('./1916');

require('./1913');

function v() {
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

var module1914 = new (require('./1914').default)('FileReader');
module1914.level(3);

var h = (function (t) {
  module35.default(k, t);

  var module1916 = k,
    h = v(),
    p = function () {
      var t,
        n = module34.default(module1916);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k() {
    var t;
    module24.default(this, k);
    (t = p.call(this))._readState = 0;
    module1914.verbose('file reader const');
    t._result = null;
    return t;
  }

  module25.default(
    k,
    [
      {
        key: 'isRNFBPolyFill',
        get: function () {
          return true;
        },
      },
      {
        key: 'abort',
        value: function () {
          module1914.verbose('abort');
        },
      },
      {
        key: 'readAsArrayBuffer',
        value: function (t) {
          module1914.verbose('readAsArrayBuffer', t);
        },
      },
      {
        key: 'readAsBinaryString',
        value: function (t) {
          module1914.verbose('readAsBinaryString', t);
        },
      },
      {
        key: 'readAsText',
        value: function (t, n) {
          module1914.verbose('readAsText', t, n);
        },
      },
      {
        key: 'readAsDataURL',
        value: function (t) {
          module1914.verbose('readAsDataURL', t);
        },
      },
      {
        key: 'dispatchEvent',
        value: function (t, n) {
          module1914.verbose('dispatch event', t, n);
          module32.default(module34.default(k.prototype), 'dispatchEvent', this).call(this, t, n);
          if ('function' == typeof this['on' + t]) this['on' + t](n);
        },
      },
      {
        key: 'readyState',
        get: function () {
          return this._readyState;
        },
      },
      {
        key: 'result',
        get: function () {
          return this._result;
        },
      },
    ],
    [
      {
        key: 'EMPTY',
        get: function () {
          return 0;
        },
      },
      {
        key: 'LOADING',
        get: function () {
          return 1;
        },
      },
      {
        key: 'DONE',
        get: function () {
          return 2;
        },
      },
    ]
  );
  return k;
})(module1916.default);

exports.default = h;
