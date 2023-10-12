exports.createAnimatedCond = function (t, n, o) {
  return new p(module905.adapt(t), module905.adapt(n), undefined === o ? undefined : module905.adapt(o));
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module905 = require('./905'),
  module906 = require('./906'),
  module907 = require('./907');

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

var p = (function (t) {
  module35.default(k, t);

  var module905 = k,
    p = _(),
    y = function () {
      var t,
        n = module34.default(module905);

      if (p) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t, o, u) {
    var l;
    module24.default(this, k);
    module218.default(t instanceof module907.default, 'Reanimated: Animated.cond node first argument should be of type AnimatedNode but got ' + t);
    module218.default(o instanceof module907.default, 'Reanimated: Animated.cond node second argument should be of type AnimatedNode but got ' + o);
    module218.default(
      u instanceof module907.default || undefined === u,
      'Reanimated: Animated.cond node third argument should be of type AnimatedNode or should be undefined but got ' + u
    );
    (l = y.call(
      this,
      {
        type: 'cond',
        cond: t,
        ifBlock: o,
        elseBlock: u,
      },
      [t, o, u]
    ))._condition = t;
    l._ifBlock = o;
    l._elseBlock = u;
    return l;
  }

  module25.default(k, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCond, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return module906.val(this._condition) ? module906.val(this._ifBlock) : undefined !== this._elseBlock ? module906.val(this._elseBlock) : undefined;
      },
    },
  ]);
  return k;
})(module907.default);
