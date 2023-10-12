exports.createAnimatedCall = function (t, n) {
  return new k(t, n);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module918 = require('./918'),
  module906 = require('./906'),
  module907 = require('./907');

function y() {
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

var p = new Map();

function R(t) {
  var n = p.get(t.id);
  if (n) n._callback(t.args);
}

var k = (function (t) {
  module35.default(C, t);

  var k = C,
    A = y(),
    b = function () {
      var t,
        n = module34.default(k);

      if (A) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t, l) {
    var u;
    module24.default(this, C);
    module218.default(
      t.every(function (t) {
        return t instanceof module907.default;
      }),
      'Reanimated: Animated.call node args should be an array with elements of type AnimatedNode. One or more of them are not AnimatedNodes'
    );
    (u = b.call(
      this,
      {
        type: 'call',
        input: t,
      },
      t
    ))._callback = l;
    u._args = t;
    return u;
  }

  module25.default(C, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCall, id: ' + this.__nodeID;
      },
    },
    {
      key: '__attach',
      value: function () {
        module32.default(module34.default(C.prototype), '__attach', this).call(this);
        p.set(this.__nodeID, this);
        if (1 === p.size) module918.default.addListener('onReanimatedCall', R);
      },
    },
    {
      key: '__detach',
      value: function () {
        p.delete(this.__nodeID);
        if (0 === p.size) module918.default.removeAllListeners('onReanimatedCall');
        module32.default(module34.default(C.prototype), '__detach', this).call(this);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this._callback(this._args.map(module906.val));

        return 0;
      },
    },
  ]);
  return C;
})(module907.default);
