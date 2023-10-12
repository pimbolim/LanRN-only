exports.createAnimatedEvent = function (t, n) {
  return new E(t, n);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module908 = require('./908'),
  module907 = require('./907'),
  module920 = require('./920'),
  module927 = require('./927'),
  module218 = require('./218'),
  module928 = require('./928');

function w() {
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

function N(t) {
  var n = [],
    o = [],
    u = function (t) {
      return 'web' === ReactNative.Platform.OS ? t : t.__nodeID;
    },
    f = function t(f, c) {
      if (f instanceof module920.default) n.push(c.concat(u(f)));
      else if ('object' == typeof f && f.__val) n.push(c.concat(u(f.__val)));
      else if ('function' == typeof f) {
        var l = new module920.default(0);
        o.push(module927.createAnimatedAlways(f(l)));
        n.push(c.concat(u(l)));
      } else if ('object' == typeof f) for (var s in f) t(f[s], c.concat(s));
    };

  module218.default(t[0] && t[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');
  var c = t[0].nativeEvent;
  if ('object' == typeof c) f(c, []);
  else if ('function' == typeof c) {
    var s = {
        get: function (t, n) {
          return '__isProxy' === n || (t[n] || '__val' === n || (t[n] = new Proxy({}, s)), t[n]);
        },
        set: function (t, n, o) {
          return '__val' === n && ((t[n] = o), true);
        },
      },
      v = 'function' == typeof Proxy ? new Proxy({}, s) : module928.default();
    o.push(module927.createAnimatedAlways(c(v)));
    f(v, []);
  }
  return {
    eventMappings: n,
    alwaysNodes: o,
  };
}

var E = (function (t) {
  module35.default(h, t);

  var module907 = h,
    module920 = w(),
    y = function () {
      var t,
        n = module34.default(module907);

      if (module920) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function h(t) {
    var o;
    if (arguments.length > 1 && undefined !== arguments[1]) arguments[1];
    module24.default(this, h);
    var u = N(t),
      f = u.eventMappings,
      c = u.alwaysNodes;
    (o = y.call(this, {
      type: 'event',
      argMapping: f,
    })).__isNative = true;
    o._alwaysNodes = c;
    return o;
  }

  module25.default(h, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedEvent, id: ' + this.__nodeID;
      },
    },
    {
      key: 'attachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].__attach();

        this.__attach();

        var u = ReactNative.findNodeHandle(t);
        module908.default.attachEvent(u, n, this.__nodeID);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return 0;
      },
    },
    {
      key: 'detachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].isNativelyInitialized() && this._alwaysNodes[o].__detach();

        var u = ReactNative.findNodeHandle(t);
        module908.default.detachEvent(u, n, this.__nodeID);

        this.__detach();
      },
    },
  ]);
  return h;
})(module907.default);

exports.default = E;
