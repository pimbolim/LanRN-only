exports.createAnimatedClockTest = function (t) {
  return new module907(t);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function f() {
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

var module907 = (function (t) {
  module35.default(_, t);

  var module907 = _,
    v = f(),
    y = function () {
      var t,
        n = module34.default(module907);

      if (v) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _(t) {
    var c;
    module24.default(this, _);
    (c = y.call(this, {
      type: 'clockTest',
      clock: t,
    }))._clockNode = t;
    return c;
  }

  module25.default(_, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedClockTest, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._clockNode.isStarted() ? 1 : 0;
      },
    },
  ]);
  return _;
})(require('./907').default);
