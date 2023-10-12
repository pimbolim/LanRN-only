var module24 = require('./24'),
  module25 = require('./25'),
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

var module1080 = (function (t) {
  module35.default(y, t);

  var module1080 = y,
    h = s(),
    v = function () {
      var t,
        n = module34.default(module1080);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y() {
    var t;
    module24.default(this, y);
    (t = v.call(this)).config = {};
    t.handlerName = 'LongPressGestureHandler';
    return t;
  }

  module25.default(y, [
    {
      key: 'minDuration',
      value: function (t) {
        this.config.minDurationMs = t;
        return this;
      },
    },
    {
      key: 'maxDistance',
      value: function (t) {
        this.config.maxDist = t;
        return this;
      },
    },
  ]);
  return y;
})(require('./1080').BaseGesture);

exports.LongPressGesture = module1080;
