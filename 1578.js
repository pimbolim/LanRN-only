var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };

    var o = _(n);

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
  PropTypes = require('prop-types'),
  module1579 = require('./1579'),
  w = ['scrollPosition', 'dimensions', 'vertical', 'sliderWidth', 'sliderHeight', 'parallaxFactor', 'style', 'AnimatedImageComponent'];

function _(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (_ = function (t) {
    return t ? o : n;
  })(t);
}

function P(t, n) {
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

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      P(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      P(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function E() {
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

var k = (function (t) {
  module35.default(P, t);

  var module47 = P,
    PropTypes = E(),
    _ = function () {
      var t,
        o = module34.default(module47);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var n;
    module24.default(this, P);
    (n = _.call(this, t)).state = {
      offset: 0,
      width: 0,
      height: 0,
      status: 1,
      animOpacity: new ReactNative.Animated.Value(0),
    };
    n._onLoad = n._onLoad.bind(module39.default(n));
    n._onError = n._onError.bind(module39.default(n));
    n._measureLayout = n._measureLayout.bind(module39.default(n));
    return n;
  }

  module25.default(P, [
    {
      key: 'setNativeProps',
      value: function (t) {
        this._container.setNativeProps(t);
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this._mounted = true;
        setTimeout(function () {
          t._measureLayout();
        }, 0);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this._mounted = false;
      },
    },
    {
      key: '_measureLayout',
      value: function () {
        var t = this;

        if (this._container) {
          var n = this.props,
            o = n.dimensions,
            u = n.vertical,
            s = n.carouselRef,
            l = n.sliderWidth,
            f = n.sliderHeight,
            c = n.itemWidth,
            p = n.itemHeight;
          if (s)
            this._container.measureLayout(ReactNative.findNodeHandle(s), function (n, s, h, y, v, b) {
              var O = u ? s - (f - p) / 2 : n - (l - c) / 2;
              t.setState({
                offset: O,
                width: o && o.width ? o.width : Math.ceil(h),
                height: o && o.height ? o.height : Math.ceil(y),
              });
            });
        }
      },
    },
    {
      key: '_onLoad',
      value: function (t) {
        var n = this,
          o = this.state.animOpacity,
          u = this.props,
          s = u.fadeDuration,
          l = u.onLoad;

        if (this._mounted) {
          this.setState({
            status: 2,
          });
          if (l) l(t);
          ReactNative.Animated.timing(o, {
            toValue: 1,
            duration: s,
            easing: ReactNative.Easing.out(ReactNative.Easing.quad),
            isInteraction: false,
            useNativeDriver: true,
          }).start(function () {
            n.setState({
              status: 3,
            });
          });
        }
      },
    },
    {
      key: '_onError',
      value: function (t) {
        var n = this.props.onError;
        this.setState({
          status: 4,
        });
        if (n) n(t);
      },
    },
    {
      key: 'image',
      get: function () {
        var t = this.state,
          n = t.status,
          s = t.animOpacity,
          l = t.offset,
          f = t.width,
          c = t.height,
          p = this.props,
          h = p.scrollPosition,
          v = p.vertical,
          b = p.sliderWidth,
          _ = p.sliderHeight,
          P = p.parallaxFactor,
          j = p.style,
          E = p.AnimatedImageComponent,
          k = module53.default(p, w),
          L = (v ? c : f) * P,
          S = {
            width: v ? f : f + 2 * L,
            height: v ? c + 2 * L : c,
            opacity: s,
            transform: h
              ? [
                  {
                    translateX: v
                      ? 0
                      : h.interpolate({
                          inputRange: [l - b, l + b],
                          outputRange: [-L, L],
                          extrapolate: 'clamp',
                        }),
                  },
                  {
                    translateY: v
                      ? h.interpolate({
                          inputRange: [l - _, l + _],
                          outputRange: [-L, L],
                          extrapolate: 'clamp',
                        })
                      : 0,
                  },
                ]
              : [],
          };
        return React.default.createElement(
          E,
          module11.default({}, k, {
            style: [
              module1579.default.image,
              j,
              {
                position: 'relative',
              },
              S,
            ],
            onLoad: this._onLoad,
            onError: 3 !== n ? this._onError : undefined,
          })
        );
      },
    },
    {
      key: 'spinner',
      get: function () {
        var t = this.state.status,
          n = this.props,
          o = n.showSpinner,
          u = n.spinnerColor;
        return (
          !(1 !== t || !o) &&
          React.default.createElement(
            ReactNative.View,
            {
              style: module1579.default.loaderContainer,
            },
            React.default.createElement(ReactNative.ActivityIndicator, {
              size: 'small',
              color: u,
              animating: true,
            })
          )
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props.containerStyle;
        return React.default.createElement(
          ReactNative.View,
          {
            ref: function (n) {
              t._container = n;
            },
            pointerEvents: 'none',
            style: [n, module1579.default.container],
            onLayout: this._measureLayout,
          },
          this.image,
          this.spinner
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = k;
k.propTypes = j(
  j({}, ReactNative.Image.propTypes),
  {},
  {
    carouselRef: PropTypes.default.object,
    itemHeight: PropTypes.default.number,
    itemWidth: PropTypes.default.number,
    scrollPosition: PropTypes.default.object,
    sliderHeight: PropTypes.default.number,
    sliderWidth: PropTypes.default.number,
    vertical: PropTypes.default.bool,
    containerStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
    dimensions: PropTypes.default.shape({
      width: PropTypes.default.number,
      height: PropTypes.default.number,
    }),
    fadeDuration: PropTypes.default.number,
    parallaxFactor: PropTypes.default.number,
    showSpinner: PropTypes.default.bool,
    spinnerColor: PropTypes.default.string,
    AnimatedImageComponent: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
  }
);
k.defaultProps = {
  containerStyle: {},
  fadeDuration: 500,
  parallaxFactor: 0.3,
  showSpinner: true,
  spinnerColor: 'rgba(0, 0, 0, 0.4)',
  AnimatedImageComponent: ReactNative.Animated.Image,
};
