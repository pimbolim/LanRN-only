var module47 = require('./47'),
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
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, u, s);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1577 = require('./1577');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function h(t, n) {
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

function b(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      h(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
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

var w = (function (t) {
  module35.default(h, t);

  var module47 = h,
    PropTypes = P(),
    O = function () {
      var t,
        o = module34.default(module47);

      if (PropTypes) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function h(t) {
    var n;
    module24.default(this, h);
    (n = O.call(this, t)).state = {
      animColor: new ReactNative.Animated.Value(0),
      animOpacity: new ReactNative.Animated.Value(0),
      animTransform: new ReactNative.Animated.Value(0),
    };
    return n;
  }

  module25.default(h, [
    {
      key: 'componentDidMount',
      value: function () {
        if (this.props.active) this._animate(1);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        if (t.active !== this.props.active) this._animate(this.props.active ? 1 : 0);
      },
    },
    {
      key: '_animate',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
          n = this.state,
          o = n.animColor,
          l = n.animOpacity,
          c = n.animTransform,
          u = this.props,
          s = u.animatedDuration,
          p = u.animatedFriction,
          y = u.animatedTension,
          v = {
            toValue: t,
            duration: s,
            isInteraction: false,
            useNativeDriver: !this._shouldAnimateColor,
          },
          O = [
            ReactNative.Animated.timing(
              l,
              b(
                {
                  easing: ReactNative.Easing.linear,
                },
                v
              )
            ),
            ReactNative.Animated.spring(
              c,
              b(
                {
                  friction: p,
                  tension: y,
                },
                v
              )
            ),
          ];
        if (this._shouldAnimateColor)
          O.push(
            ReactNative.Animated.timing(
              o,
              b(
                {
                  easing: ReactNative.Easing.linear,
                },
                v
              )
            )
          );
        ReactNative.Animated.parallel(O).start();
      },
    },
    {
      key: '_shouldAnimateColor',
      get: function () {
        var t = this.props,
          n = t.color,
          o = t.inactiveColor;
        return n && o;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.state,
          n = t.animColor,
          o = t.animOpacity,
          l = t.animTransform,
          c = this.props,
          u = c.active,
          s = c.activeOpacity,
          y = c.carouselRef,
          O = c.color,
          h = c.containerStyle,
          b = c.inactiveColor,
          P = c.inactiveStyle,
          w = c.inactiveOpacity,
          j = c.inactiveScale,
          R = c.index,
          T = c.style,
          _ = c.tappable,
          C = c.delayPressInDot,
          V = {
            opacity: o.interpolate({
              inputRange: [0, 1],
              outputRange: [w, 1],
            }),
            transform: [
              {
                scale: l.interpolate({
                  inputRange: [0, 1],
                  outputRange: [j, 1],
                }),
              },
            ],
          },
          D = this._shouldAnimateColor
            ? {
                backgroundColor: n.interpolate({
                  inputRange: [0, 1],
                  outputRange: [b, O],
                }),
              }
            : {},
          A = [module1577.default.sliderPaginationDotContainer, h || {}],
          k = [module1577.default.sliderPaginationDot, T || {}, (!u && P) || {}, V, D],
          S = _
            ? function () {
                try {
                  var t = y.current || y;

                  t._snapToItem(t._getPositionIndex(R));
                } catch (t) {
                  console.warn('react-native-snap-carousel | Pagination: `carouselRef` has to be a Carousel ref.\n' + t);
                }
              }
            : undefined;
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            accessible: false,
            style: A,
            activeOpacity: _ ? s : 1,
            onPress: S,
            delayPressIn: C,
          },
          React.default.createElement(ReactNative.Animated.View, {
            style: k,
          })
        );
      },
    },
  ]);
  return h;
})(React.PureComponent);

exports.default = w;
w.propTypes = {
  inactiveOpacity: PropTypes.default.number.isRequired,
  inactiveScale: PropTypes.default.number.isRequired,
  active: PropTypes.default.bool,
  activeOpacity: PropTypes.default.number,
  carouselRef: PropTypes.default.object,
  color: PropTypes.default.string,
  containerStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  inactiveColor: PropTypes.default.string,
  inactiveStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  index: PropTypes.default.number,
  style: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  tappable: PropTypes.default.bool,
};
