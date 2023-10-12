exports.createAnimatedStartClock = function (t) {
  return new k(t);
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

var k = (function (t) {
  module35.default(p, t);

  var module907 = p,
    k = h(),
    _ = function () {
      var t,
        n = module34.default(module907);

      if (k) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t) {
    var c;
    module24.default(this, p);
    module218.default(
      t instanceof module912.default || t instanceof module913.AnimatedParam,
      'Reanimated: Animated.startClock argument should be of type AnimatedClock but got ' + t
    );
    (c = _.call(this, {
      type: 'clockStart',
      clock: t,
    }))._clockNode = t;
    return c;
  }

  module25.default(p, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStartClock, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._clockNode.start();

        return 0;
      },
    },
  ]);
  return p;
})(module907.default);
