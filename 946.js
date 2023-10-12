exports.createOrReuseStyleNode = function (t, n) {
  if ((t = ReactNative.StyleSheet.flatten(t) || {}).transform)
    t = b(
      b({}, t),
      {},
      {
        transform: module947.createOrReuseTransformNode(t.transform, n && n._style.transform),
      }
    );
  var o = h(t);
  if (n && module948.default(o, n._config)) return n;
  return new j(t, o);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  ReactNative = require('react-native'),
  module907 = require('./907'),
  module947 = require('./947'),
  module948 = require('./948');

function O() {
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

function _(t, n) {
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

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      _(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      _(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function h(t) {
  var n = {};

  for (var o in t) {
    var u = t[o];
    if (u instanceof module907.default) n[o] = u.__nodeID;
  }

  return n;
}

var j = (function (t) {
  module35.default(p, t);

  var module47 = p,
    ReactNative = O(),
    v = function () {
      var t,
        n = module34.default(module47);

      if (ReactNative) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t, o) {
    var u;
    module24.default(this, p);
    (u = v.call(
      this,
      {
        type: 'style',
        style: o,
      },
      Object.values(t)
    ))._config = o;
    u._style = t;
    return u;
  }

  module25.default(p, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedStyle, id: ' + this.__nodeID;
      },
    },
    {
      key: '_walkStyleAndGetAnimatedValues',
      value: function (t) {
        var n = {};

        for (var o in t) {
          var u = t[o];
          if (u instanceof module907.default) n[o] = u.__getValue();
          else if (u && !Array.isArray(u) && 'object' == typeof u) n[o] = this._walkStyleAndGetAnimatedValues(u);
        }

        return n;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._walkStyleAndGetAnimatedValues(this._style);
      },
    },
  ]);
  return p;
})(module907.default);

exports.default = j;
