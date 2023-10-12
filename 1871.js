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
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
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

var v = ReactNative.StyleSheet.create({
    fullOverlay: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
      position: 'absolute',
    },
    emptyOverlay: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      position: 'absolute',
    },
  }),
  h = (function (t, ...args) {
    module35.default(O, t);

    var p = O,
      h = y(),
      b = function () {
        var t,
          n = module34.default(p);

        if (h) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O() {
      var t;
      module24.default(this, O);
      (t = b.call(this, ...args)).state = {
        fadeAnim: new ReactNative.Animated.Value(0),
        overlayStyle: v.emptyOverlay,
      };
      return t;
    }

    module25.default(O, [
      {
        key: 'onAnimatedEnd',
        value: function () {
          if (!this.props.visible)
            this.setState({
              overlayStyle: v.emptyOverlay,
            });
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (t.visible)
            this.setState({
              overlayStyle: v.fullOverlay,
            });
          return ReactNative.Animated.timing(this.state.fadeAnim, {
            toValue: t.visible ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
          }).start(this.onAnimatedEnd.bind(this));
        },
      },
      {
        key: 'render',
        value: function () {
          return React.createElement(
            ReactNative.Animated.View,
            {
              style: [
                this.state.overlayStyle,
                {
                  opacity: this.state.fadeAnim,
                },
              ],
            },
            this.props.children
          );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = h;
