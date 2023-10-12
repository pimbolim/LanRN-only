exports.createOrReusePropsNode = function (t, n, o) {
  if (t.style)
    t = P(
      P({}, t),
      {},
      {
        style: module946.createOrReuseStyleNode(t.style, o && o._props.style),
      }
    );
  var c = V(t);
  if (o && module948.default(c, o._config)) return o;
  return new k(t, c, n);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  ReactNative = require('react-native'),
  module907 = require('./907'),
  module919 = require('./919'),
  module946 = require('./946'),
  module218 = require('./218'),
  module948 = require('./948'),
  module906 = require('./906');

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

function j(t, n) {
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

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      j(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      j(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function V(t) {
  var n = {};

  for (var o in t) {
    var c = t[o];
    if (c instanceof module907.default && !(c instanceof module919.default)) n[o] = c.__nodeID;
  }

  return n;
}

var k = (function (t) {
  module35.default(j, t);

  var module47 = j,
    module946 = w(),
    O = function () {
      var t,
        n = module34.default(module47);

      if (module946) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j(t, o, c) {
    var u;
    module24.default(this, j);
    (u = O.call(
      this,
      {
        type: 'props',
        props: o,
      },
      Object.values(t).filter(function (t) {
        return !(t instanceof module919.default);
      })
    ))._config = o;
    u._props = t;
    u._callback = c;

    u.__attach();

    return u;
  }

  module25.default(j, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedProps, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = {};

        for (var n in this._props) {
          var o = this._props[n];
          if (o instanceof module907.default) t[n] = o.__getValue();
        }

        return t;
      },
    },
    {
      key: '__detach',
      value: function () {
        var t = ReactNative.findNodeHandle(this._animatedView);
        module218.default(null != t, 'Unable to locate attached view in the native tree');

        this._disconnectAnimatedView(t);

        module32.default(module34.default(j.prototype), '__detach', this).call(this);
      },
    },
    {
      key: 'update',
      value: function () {
        this._callback();

        if (this._animatedView) module906.val(this);
      },
    },
    {
      key: 'setNativeView',
      value: function (t) {
        if (this._animatedView !== t) {
          this._animatedView = t;
          var n = ReactNative.findNodeHandle(this._animatedView);
          module218.default(null != n, 'Unable to locate attached view in the native tree');

          this._connectAnimatedView(n);
        }
      },
    },
  ]);
  return j;
})(module907.default);
