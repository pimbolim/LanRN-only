exports.createAnimatedConcat = function (...args) {
  return new h(args.map(module905.adapt));
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module905 = require('./905'),
  module907 = require('./907'),
  module906 = require('./906');

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

var h = (function (t) {
  module35.default(R, t);

  var module905 = R,
    h = v(),
    _ = function () {
      var t,
        n = module34.default(module905);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R(t) {
    var u;
    module24.default(this, R);
    module218.default(
      t.every(function (t) {
        return t instanceof module907.default || 'number' == typeof t || 'string' == typeof t;
      }),
      'Reanimated: Animated.concat node arguments should be of type AnimatedNode or String or Number. One or more of them are not of that type. Node: ' + t
    );
    (u = _.call(
      this,
      {
        type: 'concat',
        input: t,
      },
      t
    ))._input = t;
    return u;
  }

  module25.default(R, [
    {
      key: '__onEvaluate',
      value: function () {
        return this._input.reduce(function (t, n) {
          return t + module906.val(n);
        }, '');
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedConcat, id: ' + this.__nodeID;
      },
    },
  ]);
  return R;
})(module907.default);
