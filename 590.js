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
    var o = v(n);
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
  })(require('react')),
  ReactNative = require('react-native'),
  module591 = require('./591');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
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

var h = (function (t) {
  module35.default(O, t);

  var v = O,
    h = y(),
    b = function () {
      var t,
        n = module34.default(v);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O(t) {
    var o;
    module24.default(this, O);
    var u = (o = b.call(this, t)).props,
      l = u.error,
      f = u.focusAnimation.interpolate({
        inputRange: [-1, -0.5, 0],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp',
      });
    o.state = {
      errored: !!l,
      opacity: f,
    };
    return o;
  }

  module25.default(O, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props.focusAnimation;
        this.listener = t.addListener(this.onAnimation.bind(this));
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.props.focusAnimation.removeListener(this.listener);
      },
    },
    {
      key: 'onAnimation',
      value: function (t) {
        var n = t.value;
        if (this.animationValue > -0.5 && n <= -0.5)
          this.setState({
            errored: true,
          });
        if (this.animationValue < -0.5 && n >= -0.5)
          this.setState({
            errored: false,
          });
        this.animationValue = n;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.state,
          n = t.errored,
          o = t.opacity,
          u = this.props,
          l = u.style,
          f = u.title,
          v = u.error,
          y = u.disabled,
          h = u.baseColor,
          b = u.errorColor,
          O = n ? v : f;
        if (null == O) return null;
        var P = {
          opacity: o,
          color: !y && n ? b : h,
        };
        return React.default.createElement(
          ReactNative.Animated.Text,
          {
            style: [module591.default.text, l, P],
          },
          O
        );
      },
    },
  ]);
  return O;
})(React.PureComponent);

exports.default = h;
