var module11 = require('./11'),
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
    var l = H(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1217 = require('./1217'),
  k = ['children', 'onRef', 'isSectionList', 'sections'];

function H(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (H = function (t) {
    return t ? l : n;
  })(t);
}

function V() {
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

var S = (function (t) {
  module35.default(_, t);

  var H = _,
    S = V(),
    x = function () {
      var t,
        n = module34.default(H);

      if (S) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _(t) {
    var n;
    module24.default(this, _);
    (n = x.call(this, t))._animatedValue = new ReactNative.Animated.Value(0);
    n.onScroll = n.onScroll.bind(module39.default(n));
    n.renderListHeaderComponent = n.renderListHeaderComponent.bind(module39.default(n));

    n._animatedValue.addListener(n.onScroll);

    return n;
  }

  module25.default(_, [
    {
      key: 'stickyMarginTop',
      get: function () {
        var t = this.props,
          n = t.parallaxHeaderHeight,
          l = undefined === n ? 0 : n,
          o = t.stickyHeaderHeight,
          u = undefined === o ? 0 : o;
        return Math.abs(l - u);
      },
    },
    {
      key: 'onScroll',
      value: function (t) {
        var n = t.value,
          l = this.props,
          o = l.onScroll,
          u = l.onSticky;
        if ('function' == typeof o) o(n);
        if ('function' == typeof u) u(n >= this.stickyMarginTop);
      },
    },
    {
      key: 'renderFixedHeader',
      value: function () {
        var t = module1217.CStyles(),
          n = this.props.fixedHeader;
        return 'function' != typeof n
          ? null
          : React.default.createElement(
              ReactNative.View,
              {
                style: t.fixedHeader,
              },
              n(this._animatedValue)
            );
      },
    },
    {
      key: 'renderStickyHeader',
      value: function () {
        var t = this.props,
          n = t.stickyHeader,
          l = t.isSectionList;
        if ('function' != typeof n) return null;

        if (l) {
          var o = this._animatedValue.interpolate({
            inputRange: [0, this.stickyMarginTop, this.stickyMarginTop + 1],
            outputRange: [this.stickyMarginTop, 0, 0],
          });

          return React.default.createElement(
            ReactNative.Animated.View,
            {
              style: {
                position: 'absolute',
                left: 0,
                right: 0,
                transform: [
                  {
                    translateY: o,
                  },
                ],
              },
            },
            n(this._animatedValue)
          );
        }

        return n(this._animatedValue);
      },
    },
    {
      key: 'renderStickyHeaderTransparent',
      value: function () {
        var t = this.props.stickyHeader;
        return 'function' != typeof t
          ? null
          : React.default.createElement(
              ReactNative.View,
              {
                style: {
                  opacity: 0,
                },
              },
              t(this._animatedValue)
            );
      },
    },
    {
      key: 'renderParallaxHeader',
      value: function () {
        var t = this.props,
          n = t.parallaxHeader,
          l = t.scaleParallaxHeader,
          o = t.parallaxHeaderHeight,
          u = module1217.CStyles();
        if ('function' != typeof n) return null;
        var s = null;

        if (l) {
          s = {
            transform: [
              {
                scale: this._animatedValue.interpolate({
                  inputRange: [-o, 0],
                  outputRange: [7.5, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };
        }

        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: [
              u.parallaxHeader,
              s,
              {
                height: o,
              },
            ],
          },
          n(this._animatedValue)
        );
      },
    },
    {
      key: 'renderListHeaderComponent',
      value: function () {
        return React.default.createElement(
          React.default.Fragment,
          null,
          this.renderParallaxHeader(),
          React.default.createElement(ReactNative.View, {
            style: {
              height: this.stickyMarginTop,
            },
            pointerEvents: 'none',
          }),
          this.renderStickyHeaderTransparent()
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.children,
          u = t.onRef,
          s = module53.default(t, k),
          c = ReactNative.Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this._animatedValue,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
            }
          );
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              flex: 1,
            },
          },
          React.default.createElement(
            ReactNative.Animated.ScrollView,
            module11.default(
              {
                ref: u,
              },
              s,
              {
                onScroll: c,
                bounces: false,
                stickyHeaderIndices: [2],
              }
            ),
            this.renderParallaxHeader(),
            React.default.createElement(ReactNative.View, {
              style: {
                height: this.stickyMarginTop,
              },
              pointerEvents: 'none',
            }),
            this.renderStickyHeader(),
            o
          ),
          this.renderFixedHeader()
        );
      },
    },
  ]);
  return _;
})(React.PureComponent);

exports.default = S;
S.defaultProps = {
  scaleParallaxHeader: true,
};
