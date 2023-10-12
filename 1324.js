var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module474 = require('./474');

function h(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function v(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      h(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function O() {
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

var module1325 = (function (t, ...args) {
  module35.default(v, t);

  var module47 = v,
    module474 = O(),
    h = function () {
      var t,
        o = module34.default(module47);

      if (module474) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    var t;
    module24.default(this, v);
    (t = h.call(this, ...args)).animation = new ReactNative.Animated.Value(0);

    t.animate = function () {
      ReactNative.Animated.sequence([
        ReactNative.Animated.timing(t.animation, {
          delay: 250,
          toValue: 1,
          duration: 1250,
          easing: ReactNative.Easing.ease,
          useNativeDriver: true,
        }),
        ReactNative.Animated.timing(t.animation, {
          toValue: 0,
          delay: 2e3,
          duration: 1250,
          easing: ReactNative.Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(function () {
        var n = t.props.onHideSplash;
        if ('function' == typeof n) n();
      });
      setTimeout(function () {
        var n = t.props.onLoaded;
        if ('function' == typeof n) n();
      }, 3e3);
    };

    return t;
  }

  module25.default(v, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.View,
          {
            style: [j.root],
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: j.logoWrapper,
            },
            React.default.createElement(ReactNative.Image, {
              source: require('./1325'),
              style: j.logo,
              onLoadEnd: this.animate,
            })
          )
        );
      },
    },
  ]);
  return v;
})(React.default.Component);

exports.default = module1325;
var j = ReactNative.StyleSheet.create({
  root: v(
    v({}, ReactNative.StyleSheet.absoluteFill),
    {},
    {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }
  ),
  logoWrapper: {
    height: module474.ms(175, 1),
    width: module474.ms(250, 1),
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
