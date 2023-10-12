var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function c() {
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

var module1921 = (function (t) {
  module35.default(p, t);

  var module1921 = p,
    h = c(),
    _ = function () {
      var t,
        n = module34.default(module1921);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t, u, l) {
    var o;
    module24.default(this, p);
    (o = _.call(this))._lengthComputable = false;
    o._loaded = -1;
    o._total = -1;
    o._lengthComputable = t;
    o._loaded = u;
    o._total = l;
    return o;
  }

  module25.default(p, [
    {
      key: 'lengthComputable',
      get: function () {
        return this._lengthComputable;
      },
    },
    {
      key: 'loaded',
      get: function () {
        return this._loaded;
      },
    },
    {
      key: 'total',
      get: function () {
        return this._total;
      },
    },
  ]);
  return p;
})(require('./1921').default);

exports.default = module1921;
