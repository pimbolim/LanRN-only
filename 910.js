exports.createAnimatedSet = function (t, n) {
  return new y(t, module905.adapt(n));
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module218 = require('./218'),
  module906 = require('./906'),
  module905 = require('./905');

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

var y = (function (t) {
  module35.default(b, t);

  var module905 = b,
    y = _(),
    p = function () {
      var t,
        n = module34.default(module905);

      if (y) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t, u) {
    var module35;
    module24.default(this, b);
    module218.default(t instanceof module907.default, 'Reanimated: Animated.set first argument should be of type AnimatedNode but got ' + t);
    module218.default(u instanceof module907.default, 'Reanimated: Animated.set second argument should be of type AnimatedNode, String or Number but got ' + u);
    module35 = p.call(
      this,
      {
        type: 'set',
        what: t,
        value: u,
      },
      [u]
    );
    module218.default(!t._constant, 'Value to be set cannot be constant');
    module35._what = t;
    module35._value = u;
    return module35;
  }

  module25.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedSet, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module906.val(this._value);

        this._what.setValue(t);

        return t;
      },
    },
  ]);
  return b;
})(module907.default);
