exports.createAnimatedCallFunc = function (t, n, u) {
  return new C(
    t,
    n.map(function (t) {
      return module905.adapt(t);
    }),
    u
  );
};

var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = y(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./907')),
  module905 = require('./905'),
  module906 = require('./906'),
  module218 = require('./218');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}

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

var C = (function (t) {
  module35.default(b, t);

  var module905 = b,
    y = _(),
    C = function () {
      var t,
        n = module34.default(module905);

      if (y) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b(t, o, l) {
    var f;
    module24.default(this, b);
    module218.default(t instanceof module907.default, "Reanimated: AnimatedCallFunc 'what' argument should be of type AnimatedNode but got " + t);
    module218.default(
      o.every(function (t) {
        return t instanceof module907.default;
      }),
      "Reanimated: every AnimatedCallFunc 'args' argument should be of type AnimatedNode but got " + o
    );
    module218.default(
      l.every(function (t) {
        return t instanceof module907.default;
      }),
      "Reanimated: every AnimatedCallFunc 'params' argument should be of type AnimatedNode but got " + l
    );
    (f = C.call(
      this,
      {
        type: 'callfunc',
        what: t,
        args: o,
        params: l,
      },
      module20.default(o)
    ))._what = t;
    f._args = o;
    f._params = l;
    return f;
  }

  module25.default(b, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedCallFunc, id: ' + this.__nodeID;
      },
    },
    {
      key: 'beginContext',
      value: function () {
        var t = this;
        this._previousCallID = module907.getCallID();
        module907.setCallID(module907.getCallID() + '/' + this.__nodeID);

        this._params.forEach(function (n, u) {
          n.beginContext(t._args[u], t._previousCallID);
        });
      },
    },
    {
      key: 'endContext',
      value: function () {
        this._params.forEach(function (t, n) {
          t.endContext();
        });

        module907.setCallID(this._previousCallID);
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        this.beginContext();
        var t = module906.val(this._what);
        this.endContext();
        return t;
      },
    },
  ]);
  return b;
})(module907.default);
