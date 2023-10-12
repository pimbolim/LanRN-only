exports.createAnimatedParam = function () {
  return new k();
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module218 = require('./218'),
  module907 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./907')),
  module912 = require('./912'),
  module906 = require('./906');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

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

var k = (function (t) {
  module35.default(b, t);

  var h = b,
    k = y(),
    _ = function () {
      var t,
        n = module34.default(h);

      if (k) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    var t;
    module24.default(this, b);
    (t = _.call(
      this,
      {
        type: 'param',
      },
      []
    )).argsStack = [];

    t.__attach();

    return t;
  }

  module25.default(b, [
    {
      key: 'beginContext',
      value: function (t, n) {
        this._prevCallID = n;
        this.argsStack.push(t);
      },
    },
    {
      key: 'endContext',
      value: function () {
        this.argsStack.pop();
      },
    },
    {
      key: '_getTopNode',
      value: function () {
        if (0 === this.argsStack.length) throw new Error('param: Invocation failed because argsStack is empty');
        return this.argsStack[this.argsStack.length - 1];
      },
    },
    {
      key: 'setValue',
      value: function (t) {
        var n = this._getTopNode();

        if (!n.setValue) throw new Error('param: setValue(' + t + ") failed because the top element has no known method for updating it's current value.");
        var o = module907.getCallID();
        module907.setCallID(this._prevCallID);
        n.setValue(t);
        module907.setCallID(o);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        var t = module907.getCallID();
        module907.setCallID(this._prevCallID);

        var n = this._getTopNode(),
          o = module906.val(n);

        module907.setCallID(t);
        return o;
      },
    },
    {
      key: 'start',
      value: function () {
        var t = this._getTopNode();

        module218.default(t instanceof module912.default || t instanceof b, 'param: top node should be of type AnimatedClock but got ' + t);
        t.start();
      },
    },
    {
      key: 'stop',
      value: function () {
        var t = this._getTopNode();

        module218.default(t instanceof module912.default || t instanceof b, 'param: top node should be of type AnimatedClock but got ' + t);
        t.stop();
      },
    },
    {
      key: 'isRunning',
      value: function () {
        var t = this._getTopNode();

        if (t instanceof b) return t.isRunning();
        else {
          module218.default(t instanceof module912.default, 'param: top node should be of type AnimatedClock but got ' + t);
          return t.isStarted();
        }
      },
    },
  ]);
  return b;
})(module907.default);

exports.AnimatedParam = k;
