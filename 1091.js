var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47');

function p() {
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
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      h(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
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
          rotationChange: t.rotation,
        }
      : {
          rotationChange: t.rotation - n.rotation,
        };
  return y(y({}, t), module25);
}

var module1080 = (function (t) {
  module35.default(v, t);

  var module47 = v,
    h = p(),
    y = function () {
      var t,
        n = module34.default(module47);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);
    (t = y.call(this)).handlerName = 'RotationGestureHandler';
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

exports.RotationGesture = module1080;
