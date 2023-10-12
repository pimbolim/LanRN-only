var module25 = require('./25'),
  module24 = require('./24'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

!(function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = l(n);
  if (o && o.has(t)) return o.get(t);
  var f = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(f, c, s);
      else f[c] = t[c];
    }

  f.default = t;
  if (o) o.set(t, f);
})(require('react'));

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

function s() {
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

var ReactNative = (function (t, ...args) {
  module35.default(v, t);

  var l = v,
    ReactNative = s(),
    y = function () {
      var t,
        n = module34.default(l);

      if (ReactNative) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);

    (t = y.call(this, ...args)).scrollToXY = function (n, o) {
      t._listRef._scrollRef.scrollTo({
        x: n,
        y: o,
        animated: false,
      });
    };

    return t;
  }

  return module25.default(v);
})(require('react-native').FlatList);

exports.default = ReactNative;
