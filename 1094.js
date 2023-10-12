var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function s() {
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

function h(t, n) {
  'worklet';

  return t;
}

var module1080 = (function (t) {
  module35.default(R, t);

  var module1080 = R,
    p = s(),
    y = function () {
      var t,
        n = module34.default(module1080);

      if (p) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R() {
    var t;
    module24.default(this, R);
    (t = y.call(this)).handlerName = 'ManualGestureHandler';
    return t;
  }

  module25.default(R, [
    {
      key: 'onChange',
      value: function (t) {
        this.handlers.changeEventCalculator = h;
        return module32.default(module34.default(R.prototype), 'onChange', this).call(this, t);
      },
    },
  ]);
  return R;
})(require('./1080').ContinousBaseGesture);

exports.ManualGesture = module1080;
