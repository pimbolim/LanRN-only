var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module953 = require('./953'),
  module949 = require('./949'),
  module903 = require('./903'),
  module912 = require('./912'),
  module909 = require('./909');

function _() {
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

var k = (function (t) {
  module35.default(w, t);

  var module953 = w,
    k = _(),
    p = function () {
      var t,
        n = module34.default(module953);

      if (k) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, c);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var c;
    module24.default(this, w);
    (c = p.call(this))._deceleration = undefined !== t.deceleration ? t.deceleration : 0.998;
    c._velocity = t.velocity;
    return c;
  }

  module25.default(
    w,
    [
      {
        key: 'start',
        value: function (t) {
          this._clock = new module912.default();
          var n = {
              finished: new module909.default(0),
              velocity: new module909.default(this._velocity),
              position: t,
              time: new module909.default(0),
            },
            c = {
              deceleration: this._deceleration,
            };
          return module903.block([
            module903.cond(module903.clockRunning(this._clock), 0, [module903.startClock(this._clock)]),
            module949.default(this._clock, n, c),
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
            velocity: new module909.default(0),
          };
        },
      },
    ]
  );
  return w;
})(module953.default);

exports.default = k;
