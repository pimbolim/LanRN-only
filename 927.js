exports.createAnimatedAlways = function (t) {
  return new v(t);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module218 = require('./218'),
  module906 = require('./906');

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

var v = (function (t) {
  module35.default(w, t);

  var v = w,
    _ = h(),
    p = function () {
      var t,
        n = module34.default(v);

      if (_) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var u;
    module24.default(this, w);
    module218.default(t instanceof module907.default, 'Reanimated: Animated.always node argument should be of type AnimatedNode but got ' + t);
    (u = p.call(
      this,
      {
        type: 'always',
        what: t,
      },
      [t]
    ))._what = t;
    return u;
  }

  module25.default(w, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedAlways, id: ' + this.__nodeID;
      },
    },
    {
      key: 'update',
      value: function () {
        this.__getValue();
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        module906.val(this._what);
        return 0;
      },
    },
  ]);
  return w;
})(module907.default);
