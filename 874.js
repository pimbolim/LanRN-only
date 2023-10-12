var module20 = require('./20'),
  module24 = require('./24'),
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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module875 = require('./875'),
  module458 = require('./458'),
  module474 = require('./474'),
  module876 = require('./876'),
  module565 = require('./565');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function P() {
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

var T = ReactNative.Animated.createAnimatedComponent(module565.default),
  w = (function (t) {
    module35.default(w, t);

    var module400 = w,
      module565 = P(),
      b = function () {
        var t,
          n = module34.default(module400);

        if (module565) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w(t) {
      var n;
      module24.default(this, w);
      (n = b.call(this, t)).animation = new ReactNative.Animated.Value(0);

      n.onPress = function () {
        var t = n.props.onPress;
        if ('function' == typeof t) t();
      };

      n.state = {};
      return n;
    }

    module25.default(w, [
      {
        key: 'componentDidMount',
        value: function () {
          this.startAnimation();
        },
      },
      {
        key: 'startAnimation',
        value: function () {
          var t = this.props.animationType;
          if ('scale' === t)
            ReactNative.Animated.loop(
              ReactNative.Animated.sequence([
                ReactNative.Animated.timing(this.animation, {
                  toValue: 1.05,
                  duration: 1e3,
                  easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
                  useNativeDriver: true,
                }),
                ReactNative.Animated.timing(this.animation, {
                  toValue: 0.95,
                  duration: 800,
                  easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
                  useNativeDriver: true,
                }),
              ])
            ).start();
          else if ('translateY' === t)
            ReactNative.Animated.loop(
              ReactNative.Animated.sequence([
                ReactNative.Animated.timing(this.animation, {
                  toValue: -module474.ms(20),
                  duration: 1e3,
                  easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
                  useNativeDriver: true,
                }),
                ReactNative.Animated.timing(this.animation, {
                  toValue: module474.ms(0),
                  duration: 800,
                  easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
                  useNativeDriver: true,
                }),
              ])
            ).start();
        },
      },
      {
        key: 'renderButton',
        value: function () {
          var t = module875.CStyles(),
            n = this.props,
            o = n.showButton,
            u = undefined === o || o,
            s = n.buttonText;
          return u
            ? React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [t.button, {}],
                  onPress: this.onPress,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.buttonText,
                  },
                  s || module458.default.authentication.login
                )
              )
            : null;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module875.CStyles(),
            o = this.props,
            u = o.title,
            s = o.message,
            l = o.icon,
            f = o.iconStyle,
            y = o.animationType,
            h = [
              {
                scale: this.animation,
              },
            ];
          if ('translateY' === y)
            h = [
              {
                translateY: this.animation,
              },
            ];
          if (f && f.transform && Array.isArray(f.transform)) h = [].concat(module20.default(h), module20.default(f.transform));
          return React.default.createElement(
            module876.default,
            {
              style: [t.root],
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [t.content],
              },
              l &&
                React.default.createElement(T, {
                  name: l,
                  style: [
                    t.icon,
                    f,
                    {
                      transform: h,
                    },
                  ],
                }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.title,
                  numberOfLines: 2,
                },
                u
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.message,
                  numberOfLines: 3,
                },
                s
              )
            ),
            this.renderButton()
          );
        },
      },
    ]);
    return w;
  })(React.Component);

w.defaultProps = {
  animationType: 'scale',
};
var j = module400.connect(function (t) {
  return {
    orientation: t.orientation,
  };
})(w);
exports.default = j;
