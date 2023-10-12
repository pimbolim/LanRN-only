exports.createAnimatedStopClock = function (t) {
  return new h(t);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module912 = require('./912'),
  module913 = require('./913'),
  module218 = require('./218');

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

var h = (function (t) {
  module35.default(_, t);

  var module907 = _,
    h = y(),
    k = function () {
      var t,
        n = module34.default(module907);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _(t) {
    var o;
    module24.default(this, _);
    module218.default(
      t instanceof module912.default || t instanceof module913.AnimatedParam,
      'Reanimated: Animated.stopClock argument should be of type AnimatedClock but got ' + t
    );
    (o = k.call(this, {
      type: 'clockStop',
      clock: t,
    }))._clockNode = t;
    return o;
  }

  module25.default(_, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStopClock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._clockNode.stop();

        return 0;
      },
    },
  ]);
  return _;
})(module907.default);
