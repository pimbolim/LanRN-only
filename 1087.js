var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module20 = require('./20'),
  module1080 = require('./1080');

function v(t, n) {
  var u = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (u) return (u = u.call(t)).next.bind(u);

  if (Array.isArray(t) || (u = y(t)) || (n && t && 'number' == typeof t.length)) {
    if (u) t = u;
    var o = 0;
    return function () {
      return o >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[o++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function y(t, n) {
  if (t) {
    if ('string' == typeof t) return h(t, n);
    var u = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === u && t.constructor) u = t.constructor.name;
    return 'Map' === u || 'Set' === u ? Array.from(t) : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? h(t, n) : undefined;
  }
}

function h(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var u = 0, o = new Array(n); u < n; u++) o[u] = t[u];

  return o;
}

function b(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function G(t) {
  for (var u = 1; u < arguments.length; u++) {
    var o = null != arguments[u] ? arguments[u] : {};
    if (u % 2)
      b(Object(o), true).forEach(function (u) {
        module47.default(t, u, o[u]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function O(t) {
  var n = j();
  return function () {
    var u,
      o = module34.default(t);

    if (n) {
      var s = module34.default(this).constructor;
      u = Reflect.construct(o, arguments, s);
    } else u = o.apply(this, arguments);

    return module37.default(this, u);
  };
}

function j() {
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

function S(t, n) {
  return undefined === t ? module20.default(n) : [].concat(module20.default(t), module20.default(n));
}

var A = (function (t, ...args) {
  module35.default(l, t);
  var n = O(l);

  function l() {
    var t;
    module24.default(this, l);
    (t = n.call(this)).gestures = [];
    t.simultaneousGestures = [];
    t.requireGesturesToFail = [];
    t.gestures = args;
    return t;
  }

  module25.default(l, [
    {
      key: 'prepareSingleGesture',
      value: function (t, n, u) {
        if (t instanceof module1080.BaseGesture) {
          var o = G({}, t.config);
          o.simultaneousWith = S(o.simultaneousWith, n);
          o.requireToFail = S(o.requireToFail, u);
          t.config = o;
        } else t instanceof l && ((t.simultaneousGestures = n), (t.requireGesturesToFail = u), t.prepare());
      },
    },
    {
      key: 'prepare',
      value: function () {
        for (var t, n = v(this.gestures); !(t = n()).done; ) {
          var u = t.value;
          this.prepareSingleGesture(u, this.simultaneousGestures, this.requireGesturesToFail);
        }
      },
    },
    {
      key: 'initialize',
      value: function () {
        for (var t, n = v(this.gestures); !(t = n()).done; ) {
          t.value.initialize();
        }
      },
    },
    {
      key: 'toGestureArray',
      value: function () {
        return this.gestures.flatMap(function (t) {
          return t.toGestureArray();
        });
      },
    },
  ]);
  return l;
})(module1080.Gesture);

exports.ComposedGesture = A;

var w = (function (t) {
  module35.default(l, t);
  var n = O(l);

  function l() {
    module24.default(this, l);
    return n.apply(this, arguments);
  }

  module25.default(l, [
    {
      key: 'prepare',
      value: function () {
        for (
          var t,
            n = this.gestures
              .flatMap(function (t) {
                return t.toGestureArray();
              })
              .concat(this.simultaneousGestures),
            u = v(this.gestures);
          !(t = u()).done;

        ) {
          var o = t.value;
          this.prepareSingleGesture(o, n, this.requireGesturesToFail);
        }
      },
    },
  ]);
  return l;
})(A);

exports.SimultaneousGesture = w;

var P = (function (t) {
  module35.default(l, t);
  var n = O(l);

  function l() {
    module24.default(this, l);
    return n.apply(this, arguments);
  }

  module25.default(l, [
    {
      key: 'prepare',
      value: function () {
        for (
          var t = this.gestures.map(function (t) {
              return t.toGestureArray();
            }),
            n = [],
            u = 0;
          u < this.gestures.length;
          u++
        ) {
          this.prepareSingleGesture(this.gestures[u], this.simultaneousGestures, this.requireGesturesToFail.concat(n));
          n = n.concat(t[u]);
        }
      },
    },
  ]);
  return l;
})(A);

exports.ExclusiveGesture = P;
