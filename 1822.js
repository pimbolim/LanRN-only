var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1617 = require('./1617'),
  b = ['fill', 'prefill'];

function A(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function C(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      A(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      A(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
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

var P = ReactNative.Animated.createAnimatedComponent(module1617.default),
  D = (function (t) {
    module35.default(A, t);

    var module47 = A,
      PropTypes = j(),
      O = function () {
        var t,
          o = module34.default(module47);

        if (PropTypes) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function A(t) {
      var n;
      module24.default(this, A);
      (n = O.call(this, t)).state = {
        fillAnimation: new ReactNative.Animated.Value(t.prefill),
      };
      if (t.onFillChange)
        n.state.fillAnimation.addListener(function (n) {
          var o = n.value;
          return t.onFillChange(o);
        });
      return n;
    }

    module25.default(A, [
      {
        key: 'componentDidMount',
        value: function () {
          this.animate();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (t.fill !== this.props.fill) this.animate();
        },
      },
      {
        key: 'reAnimate',
        value: function (t, n, o, l) {
          var u = this;
          this.setState(
            {
              fillAnimation: new ReactNative.Animated.Value(t),
            },
            function () {
              return u.animate(n, o, l);
            }
          );
        },
      },
      {
        key: 'animate',
        value: function (t, n, o) {
          var l = t >= 0 ? t : this.props.fill,
            u = n || this.props.duration,
            f = o || this.props.easing,
            s = this.props.useNativeDriver,
            p = ReactNative.Animated.timing(this.state.fillAnimation, {
              useNativeDriver: s,
              toValue: l,
              easing: f,
              duration: u,
            });
          p.start(this.props.onAnimationComplete);
          return p;
        },
      },
      {
        key: 'animateColor',
        value: function () {
          return this.props.tintColorSecondary
            ? this.state.fillAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [this.props.tintColor, this.props.tintColorSecondary],
              })
            : this.props.tintColor;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = module53.default(t, b);
          return React.default.createElement(
            P,
            module11.default({}, n, {
              fill: this.state.fillAnimation,
              tintColor: this.animateColor(),
            })
          );
        },
      },
    ]);
    return A;
  })(React.default.PureComponent);

exports.default = D;
D.propTypes = C(
  C({}, module1617.default.propTypes),
  {},
  {
    prefill: PropTypes.default.number,
    duration: PropTypes.default.number,
    easing: PropTypes.default.func,
    onAnimationComplete: PropTypes.default.func,
    useNativeDriver: PropTypes.default.bool,
  }
);
D.defaultProps = {
  duration: 500,
  easing: ReactNative.Easing.out(ReactNative.Easing.ease),
  prefill: 0,
  useNativeDriver: false,
};
