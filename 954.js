var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module909 = require('./909'),
  module953 = require('./953'),
  module955 = require('./955'),
  module951 = require('./951'),
  module903 = require('./903'),
  module912 = require('./912'),
  module218 = require('./218');

function b() {
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

function k(t, s) {
  return undefined === t || null === t ? s : t;
}

var T = (function (t) {
  module35.default(S, t);

  var module953 = S,
    T = b(),
    w = function () {
      var t,
        s = module34.default(module953);

      if (T) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(s, arguments, n);
      } else t = s.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var n;

    if (
      (module24.default(this, S),
      ((n = w.call(this))._overshootClamping = k(t.overshootClamping, false)),
      (n._restDisplacementThreshold = k(t.restDisplacementThreshold, 0.001)),
      (n._restSpeedThreshold = k(t.restSpeedThreshold, 0.001)),
      (n._initialVelocity = k(t.velocity, 0)),
      (n._lastVelocity = k(t.velocity, 0)),
      (n._toValue = t.toValue),
      (n._delay = k(t.delay, 0)),
      undefined !== t.stiffness || undefined !== t.damping || undefined !== t.mass)
    ) {
      module218.default(
        undefined === t.bounciness && undefined === t.speed && undefined === t.tension && undefined === t.friction,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      n._stiffness = k(t.stiffness, 100);
      n._damping = k(t.damping, 10);
      n._mass = k(t.mass, 1);
    } else if (undefined !== t.bounciness || undefined !== t.speed) {
      module218.default(
        undefined === t.tension && undefined === t.friction && undefined === t.stiffness && undefined === t.damping && undefined === t.mass,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      var o = module955.default.fromBouncinessAndSpeed(k(t.bounciness, 8), k(t.speed, 12));
      n._stiffness = o.stiffness;
      n._damping = o.damping;
      n._mass = 1;
    } else {
      var f = module955.default.fromOrigamiTensionAndFriction(k(t.tension, 40), k(t.friction, 7));
      n._stiffness = f.stiffness;
      n._damping = f.damping;
      n._mass = 1;
    }

    module218.default(n._stiffness > 0, 'Stiffness value must be greater than 0');
    module218.default(n._damping > 0, 'Damping value must be greater than 0');
    module218.default(n._mass > 0, 'Mass value must be greater than 0');
    return n;
  }

  module25.default(
    S,
    [
      {
        key: 'start',
        value: function (t) {
          this._clock = new module912.default();
          var s = {
              finished: new module909.default(0),
              velocity: new module909.default(this._initialVelocity),
              position: t,
              time: new module909.default(0),
            },
            n = {
              damping: this._damping,
              mass: this._mass,
              stiffness: this._stiffness,
              toValue: this._toValue,
              overshootClamping: this._overshootClamping,
              restSpeedThreshold: this._restSpeedThreshold,
              restDisplacementThreshold: this._restDisplacementThreshold,
            };
          return module903.block([
            module903.cond(module903.clockRunning(this._clock), 0, [module903.startClock(this._clock)]),
            module951.default(this._clock, s, n),
            module903.cond(s.finished, module903.stopClock(this._clock)),
          ]);
        },
      },
      {
        key: 'stop',
        value: function () {},
      },
    ],
    [
      {
        key: 'getDefaultState',
        value: function () {
          return {
            position: new module909.default(0),
            finished: new module909.default(0),
            velocity: new module909.default(0),
            time: new module909.default(0),
          };
        },
      },
    ]
  );
  return S;
})(module953.default);

exports.default = T;
