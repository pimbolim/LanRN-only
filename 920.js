var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module910 = require('./910'),
  module921 = require('./921'),
  module909 = require('./909'),
  ReactNative = require('react-native'),
  module926 = require('./926'),
  module908 = require('./908');

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

var R = (function (t) {
  module35.default(O, t);

  var module909 = O,
    R = _(),
    V = function () {
      var t,
        n = module34.default(module909);

      if (R) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    module24.default(this, O);
    return V.apply(this, arguments);
  }

  module25.default(O, [
    {
      key: 'setValue',
      value: function (t) {
        this.__detachAnimation(this._animation);

        if ('web' === ReactNative.Platform.OS) this._updateValue(t);
        else if (module908.default.setValue && 'number' == typeof t) module908.default.setValue(this.__nodeID, t);
        else module926.evaluateOnce(module910.createAnimatedSet(this, t), this);
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedValue, id: ' + this.__nodeID;
      },
    },
    {
      key: 'interpolate',
      value: function (t) {
        return module921.default(this, t);
      },
    },
  ]);
  return O;
})(module909.default);

exports.default = R;
