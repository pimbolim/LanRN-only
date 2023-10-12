var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function l() {
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
  module35.default(p, t);

  var module1080 = p,
    v = l(),
    h = function () {
      var t,
        n = module34.default(module1080);

      if (v) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p() {
    var t;
    module24.default(this, p);
    (t = h.call(this)).config = {};
    t.handlerName = 'NativeViewGestureHandler';
    return t;
  }

  module25.default(p, [
    {
      key: 'shouldActivateOnStart',
      value: function (t) {
        this.config.shouldActivateOnStart = t;
        return this;
      },
    },
    {
      key: 'disallowInterruption',
      value: function (t) {
        this.config.disallowInterruption = t;
        return this;
      },
    },
  ]);
  return p;
})(require('./1080').BaseGesture);

exports.NativeGesture = module1080;
