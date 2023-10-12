var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module906 = require('./906'),
  module908 = require('./908');

function v() {
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

function p(t) {
  return null === t || undefined === t || 'string' == typeof t ? t : Number(t);
}

var y = new Map();

function k() {
  if (0 === y.size)
    [0, -1, 1, -2, 2].forEach(function (t) {
      return y.set(t, new V(t, true));
    });
}

var V = (function (t) {
  module35.default(R, t);

  var module907 = R,
    V = v(),
    A = function () {
      var t,
        n = module34.default(module907);

      if (V) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R(t) {
    var u,
      o = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    module24.default(this, R);
    (u = A.call(this, {
      type: 'value',
      value: p(t),
    }))._startingValue = u._value = t;
    u._animation = null;
    u._constant = o;
    return u;
  }

  module25.default(
    R,
    [
      {
        key: '__detach',
        value: function () {
          var t = this;
          if (!this._constant)
            module908.default.getValue
              ? module908.default.getValue(this.__nodeID, function (n) {
                  return (t.__nodeConfig.value = n);
                })
              : (this.__nodeConfig.value = this.__getValue());

          this.__detachAnimation(this._animation);

          module32.default(module34.default(R.prototype), '__detach', this).call(this);
        },
      },
      {
        key: '__detachAnimation',
        value: function (t) {
          if (t) t.__detach();
          if (this._animation === t) this._animation = null;
        },
      },
      {
        key: '__attachAnimation',
        value: function (t) {
          this.__detachAnimation(this._animation);

          this._animation = t;
        },
      },
      {
        key: '__onEvaluate',
        value: function () {
          if (this.__inputNodes && this.__inputNodes.length) this.__inputNodes.forEach(module906.val);
          return this._value;
        },
      },
      {
        key: 'setValue',
        value: function (t) {
          this.__detachAnimation(this._animation);

          this._updateValue(t);
        },
      },
      {
        key: '_updateValue',
        value: function (t) {
          this._value = t;

          this.__forceUpdateCache(t);
        },
      },
    ],
    [
      {
        key: 'valueForConstant',
        value: function (t) {
          k();
          return y.get(t) || new R(t, true);
        },
      },
    ]
  );
  return R;
})(module907.default);

exports.default = V;
