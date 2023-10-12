exports.createAnimatedDebug = function (t, n) {
  return n;
};

require('./12');

require('./905');

require('./917');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module906 = require('./906'),
  module907 = require('./907');

function y() {
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

!(function (t) {
  module35.default(b, t);

  var h = b,
    _ = y(),
    p = function () {
      var t,
        n = module34.default(h);

      if (_) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t, u) {
    var o;
    module24.default(this, b);
    module218.default('string' == typeof t, 'Reanimated: Animated.debug node first argument should be of type string but got ' + t);
    module218.default(u instanceof module907.default, 'Reanimated: Animated.debug node second argument should be of type AnimatedNode but got ' + u);
    (o = p.call(
      this,
      {
        type: 'debug',
        message: t,
        value: u,
      },
      [u]
    ))._message = t;
    o._value = u;
    return o;
  }

  module25.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedDebug, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module906.val(this._value);
        console.log(this._message, t);
        return t;
      },
    },
  ]);
})(module907.default);
