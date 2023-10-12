var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

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

var y = (function (t) {
  module35.default(O, t);

  var p = O,
    y = v(),
    h = function () {
      var t,
        n = module34.default(p);

      if (y) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var u;
    module24.default(this, O);
    (u = h.call(this, t))._animated = new ReactNative.Animated.Value(0);
    return u;
  }

  module25.default(O, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props.duration;
        ReactNative.Animated.timing(this._animated, {
          toValue: 1,
          duration: t || 200,
          useNativeDriver: true,
          easing: ReactNative.Easing.linear,
        }).start();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = t.children;
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: [
              n,
              {
                opacity: this._animated,
              },
            ],
          },
          u
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = y;
