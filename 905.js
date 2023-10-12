exports.adapt = k;

exports.createAnimatedBlock = function (t) {
  return k(t);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module906 = require('./906'),
  module907 = require('./907'),
  module909 = require('./909');

function _() {
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

var h = (function (t) {
  module35.default(k, t);

  var module909 = k,
    h = _(),
    p = function () {
      var t,
        n = module34.default(module909);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    var o;
    module24.default(this, k);
    module218.default(
      t.every(function (t) {
        return t instanceof module907.default;
      }),
      'Reanimated: Animated.block node argument should be an array with elements of type AnimatedNode. One or more of them are not AnimatedNodes'
    );
    (o = p.call(
      this,
      {
        type: 'block',
        block: t,
      },
      t
    ))._array = t;
    return o;
  }

  module25.default(k, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedBlock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t;

        this._array.forEach(function (n) {
          t = module906.val(n);
        });

        return t;
      },
    },
  ]);
  return k;
})(module907.default);

function p(t) {
  if ('object' == typeof t && t.__isProxy) {
    if (!t.__val) t.__val = new module909.default(0);
    return t.__val;
  } else return t instanceof module907.default ? t : module909.default.valueForConstant(t);
}

function k(t) {
  return Array.isArray(t)
    ? new h(
        t.map(function (t) {
          return k(t);
        })
      )
    : p(t);
}
