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

function y(t, n) {
  var f = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    f.push.apply(f, c);
  }

  return f;
}

function v(t) {
  for (var n = 1; n < arguments.length; n++) {
    var f = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(f), true).forEach(function (n) {
        module47.default(t, n, f[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(f));
    else
      y(Object(f)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(f, n));
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
          changeX: t.translationX,
          changeY: t.translationY,
        }
      : {
          changeX: t.translationX - n.translationX,
          changeY: t.translationY - n.translationY,
        };
  return v(v({}, t), module25);
}

var module1080 = (function (t) {
  module35.default(p, t);

  var module47 = p,
    y = h(),
    v = function () {
      var t,
        n = module34.default(module47);

      if (y) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, f);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p() {
    var t;
    module24.default(this, p);
    (t = v.call(this)).config = {};
    t.handlerName = 'PanGestureHandler';
    return t;
  }

  module25.default(p, [
    {
      key: 'activeOffsetY',
      value: function (t) {
        if (Array.isArray(t)) {
          this.config.activeOffsetYStart = t[0];
          this.config.activeOffsetYEnd = t[1];
        } else if (t < 0) this.config.activeOffsetYStart = t;
        else this.config.activeOffsetYEnd = t;

        return this;
      },
    },
    {
      key: 'activeOffsetX',
      value: function (t) {
        if (Array.isArray(t)) {
          this.config.activeOffsetXStart = t[0];
          this.config.activeOffsetXEnd = t[1];
        } else if (t < 0) this.config.activeOffsetXStart = t;
        else this.config.activeOffsetXEnd = t;

        return this;
      },
    },
    {
      key: 'failOffsetY',
      value: function (t) {
        if (Array.isArray(t)) {
          this.config.failOffsetYStart = t[0];
          this.config.failOffsetYEnd = t[1];
        } else if (t < 0) this.config.failOffsetYStart = t;
        else this.config.failOffsetYEnd = t;

        return this;
      },
    },
    {
      key: 'failOffsetX',
      value: function (t) {
        if (Array.isArray(t)) {
          this.config.failOffsetXStart = t[0];
          this.config.failOffsetXEnd = t[1];
        } else if (t < 0) this.config.failOffsetXStart = t;
        else this.config.failOffsetXEnd = t;

        return this;
      },
    },
    {
      key: 'minPointers',
      value: function (t) {
        this.config.minPointers = t;
        return this;
      },
    },
    {
      key: 'maxPointers',
      value: function (t) {
        this.config.maxPointers = t;
        return this;
      },
    },
    {
      key: 'minDistance',
      value: function (t) {
        this.config.minDist = t;
        return this;
      },
    },
    {
      key: 'minVelocity',
      value: function (t) {
        this.config.minVelocity = t;
        return this;
      },
    },
    {
      key: 'minVelocityX',
      value: function (t) {
        this.config.minVelocityX = t;
        return this;
      },
    },
    {
      key: 'minVelocityY',
      value: function (t) {
        this.config.minVelocityY = t;
        return this;
      },
    },
    {
      key: 'averageTouches',
      value: function (t) {
        this.config.avgTouches = t;
        return this;
      },
    },
    {
      key: 'enableTrackpadTwoFingerGesture',
      value: function (t) {
        this.config.enableTrackpadTwoFingerGesture = t;
        return this;
      },
    },
    {
      key: 'activateAfterLongPress',
      value: function (t) {
        this.config.activateAfterLongPress = t;
        return this;
      },
    },
    {
      key: 'onChange',
      value: function (t) {
        this.handlers.changeEventCalculator = O;
        return module32.default(module34.default(p.prototype), 'onChange', this).call(this, t);
      },
    },
  ]);
  return p;
})(require('./1080').ContinousBaseGesture);

exports.PanGesture = module1080;
