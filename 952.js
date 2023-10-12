var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module909 = require('./909'),
  module950 = require('./950'),
  module903 = require('./903'),
  module912 = require('./912'),
  module902 = require('./902'),
  module953 = require('./953');

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

var y = module902.default.inOut(module902.default.ease),
  w = (function (t) {
    module35.default(R, t);

    var module902 = R,
      module953 = p(),
      w = function () {
        var t,
          n = module34.default(module902);

        if (module953) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var u;
      module24.default(this, R);
      (u = w.call(this))._toValue = t.toValue;
      u._easing = undefined !== t.easing ? t.easing : y;
      u._duration = undefined !== t.duration ? t.duration : 500;
      return u;
    }

    module25.default(
      R,
      [
        {
          key: 'start',
          value: function (t) {
            this._clock = new module912.default();
            var n = {
                finished: new module909.default(0),
                position: t,
                time: new module909.default(0),
                frameTime: new module909.default(0),
              },
              u = {
                duration: this._duration,
                toValue: this._toValue,
                easing: this._easing,
              };
            return module903.block([
              module903.cond(module903.clockRunning(this._clock), 0, [module903.startClock(this._clock)]),
              module950.default(this._clock, n, u),
              module903.cond(n.finished, module903.stopClock(this._clock)),
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
              time: new module909.default(0),
              frameTime: new module909.default(0),
            };
          },
        },
      ]
    );
    return R;
  })(module953.default);

exports.default = w;
