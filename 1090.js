var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47');

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

function p(t, n) {
  var c = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    c.push.apply(c, o);
  }

  return c;
}

function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(c), true).forEach(function (n) {
        module47.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      p(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

function O(t, n) {
  'worklet';

  var module25;
  module25 =
    undefined === n
      ? {
          scaleChange: t.scale,
        }
      : {
          scaleChange: t.scale / n.scale,
        };
  return y(y({}, t), module25);
}

var module1080 = (function (t) {
  module35.default(v, t);

  var module47 = v,
    p = h(),
    y = function () {
      var t,
        n = module34.default(module47);

      if (p) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);
    (t = y.call(this)).handlerName = 'PinchGestureHandler';
    return t;
  }

  module25.default(v, [
    {
      key: 'onChange',
      value: function (t) {
        this.handlers.changeEventCalculator = O;
        return module32.default(module34.default(v.prototype), 'onChange', this).call(this, t);
      },
    },
  ]);
  return v;
})(require('./1080').ContinousBaseGesture);

exports.PinchGesture = module1080;
