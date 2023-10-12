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
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function v(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function y(t, n) {
  'worklet';

  var module25;
  module25 =
    undefined === n
      ? {
          forceChange: t.force,
        }
      : {
          forceChange: t.force - n.force,
        };
  return v(v({}, t), module25);
}

var module1080 = (function (t) {
  module35.default(O, t);

  var module47 = O,
    p = h(),
    v = function () {
      var t,
        n = module34.default(module47);

      if (p) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    var t;
    module24.default(this, O);
    (t = v.call(this)).config = {};
    t.handlerName = 'ForceTouchGestureHandler';
    return t;
  }

  module25.default(O, [
    {
      key: 'minForce',
      value: function (t) {
        this.config.minForce = t;
        return this;
      },
    },
    {
      key: 'maxForce',
      value: function (t) {
        this.config.maxForce = t;
        return this;
      },
    },
    {
      key: 'feedbackOnActivation',
      value: function (t) {
        this.config.feedbackOnActivation = t;
        return this;
      },
    },
    {
      key: 'onChange',
      value: function (t) {
        this.handlers.changeEventCalculator = y;
        return module32.default(module34.default(O.prototype), 'onChange', this).call(this, t);
      },
    },
  ]);
  return O;
})(require('./1080').ContinousBaseGesture);

exports.ForceTouchGesture = module1080;
