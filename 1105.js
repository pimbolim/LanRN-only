var module11 = require('./11'),
  module47 = require('./47'),
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
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, p, u);
        else l[p] = t[p];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1073 = require('./1073'),
  module976 = require('./976'),
  module964 = require('./964');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
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

function R(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      y(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function A() {
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

var W = 0.05,
  E = (function (t) {
    module35.default(E, t);

    var module47 = E,
      S = A(),
      y = function () {
        var t,
          n = module34.default(module47);

        if (S) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var n;
      module24.default(this, E);

      (n = y.call(this, t)).updateAnimatedEvent = function (t, o) {
        var l = t.friction,
          s = t.overshootFriction,
          p = o.dragX,
          u = o.rowTranslation,
          f = o.leftWidth,
          c = undefined === f ? 0 : f,
          h = o.rowWidth,
          w = undefined === h ? 0 : h,
          O = o.rightOffset,
          b = undefined === O ? w : O,
          S = 0 ** (w - b),
          y = t.overshootLeft,
          R = undefined === y ? c > 0 : y,
          A = t.overshootRight,
          W = undefined === A ? S > 0 : A,
          E = ReactNative.Animated.add(
            u,
            p.interpolate({
              inputRange: [0, l],
              outputRange: [0, 1],
            })
          ).interpolate({
            inputRange: [-S - 1, -S, c, c + 1],
            outputRange: [-S - (W ? 1 / s : 0), -S, c, c + (R ? 1 / s : 0)],
          });
        n.transX = E;
        n.showLeftAction =
          c > 0
            ? E.interpolate({
                inputRange: [-1, 0, c],
                outputRange: [0, 0, 1],
              })
            : new ReactNative.Animated.Value(0);
        n.leftActionTranslate = n.showLeftAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
        n.showRightAction =
          S > 0
            ? E.interpolate({
                inputRange: [-S, 0, 1],
                outputRange: [1, 0, 0],
              })
            : new ReactNative.Animated.Value(0);
        n.rightActionTranslate = n.showRightAction.interpolate({
          inputRange: [0, Number.MIN_VALUE],
          outputRange: [-1e4, 0],
          extrapolate: 'clamp',
        });
      };

      n.onTapHandlerStateChange = function (t) {
        if (t.nativeEvent.oldState === module964.State.ACTIVE) n.close();
      };

      n.onHandlerStateChange = function (t) {
        if (t.nativeEvent.oldState === module964.State.ACTIVE) n.handleRelease(t);
      };

      n.handleRelease = function (t) {
        var o = t.nativeEvent,
          l = o.velocityX,
          s = o.translationX,
          p = n.state,
          u = p.leftWidth,
          f = undefined === u ? 0 : u,
          c = p.rowWidth,
          h = undefined === c ? 0 : c,
          v = p.rowState,
          w = n.state.rightOffset,
          O = h - (undefined === w ? h : w),
          b = n.props,
          S = b.friction,
          y = b.leftThreshold,
          R = undefined === y ? f / 2 : y,
          A = b.rightThreshold,
          E = undefined === A ? O / 2 : A,
          L = n.currentOffset() + s / S,
          j = (s + W * l) / S,
          T = 0;
        if (0 === v) j > R ? (T = f) : j < -E && (T = -O);
        else if (1 === v) {
          if (j > -R) T = f;
        } else if (j < E) T = -O;
        n.animateRow(L, T, l / S);
      };

      n.animateRow = function (t, o, l) {
        var s = n.state,
          u = s.dragX,
          f = s.rowTranslation;

        if (
          (u.setValue(0),
          f.setValue(t),
          n.setState({
            rowState: Math.sign(o),
          }),
          ReactNative.Animated.spring(
            f,
            R(
              {
                restSpeedThreshold: 1.7,
                restDisplacementThreshold: 0.4,
                velocity: l,
                bounciness: 0,
                toValue: o,
                useNativeDriver: n.props.useNativeAnimations,
              },
              n.props.animationOptions
            )
          ).start(function (l) {
            if (l.finished)
              if (o > 0) {
                if (!(null == n.props.onSwipeableLeftOpen)) n.props.onSwipeableLeftOpen();
                if (!(null == n.props.onSwipeableOpen)) n.props.onSwipeableOpen('left', module39.default(n));
              } else if (o < 0) {
                if (!(null == n.props.onSwipeableRightOpen)) n.props.onSwipeableRightOpen();
                if (!(null == n.props.onSwipeableOpen)) n.props.onSwipeableOpen('right', module39.default(n));
              } else {
                var s = t > 0 ? 'left' : 'right';
                if (!(null == n.props.onSwipeableClose)) n.props.onSwipeableClose(s, module39.default(n));
              }
          }),
          o > 0)
        ) {
          if (!(null == n.props.onSwipeableLeftWillOpen)) n.props.onSwipeableLeftWillOpen();
          if (!(null == n.props.onSwipeableWillOpen)) n.props.onSwipeableWillOpen('left');
        } else if (o < 0) {
          if (!(null == n.props.onSwipeableRightWillOpen)) n.props.onSwipeableRightWillOpen();
          if (!(null == n.props.onSwipeableWillOpen)) n.props.onSwipeableWillOpen('right');
        } else {
          var c = t > 0 ? 'left' : 'right';
          if (!(null == n.props.onSwipeableWillClose)) n.props.onSwipeableWillClose(c);
        }
      };

      n.onRowLayout = function (t) {
        var o = t.nativeEvent;
        n.setState({
          rowWidth: o.layout.width,
        });
      };

      n.currentOffset = function () {
        var t = n.state,
          o = t.leftWidth,
          l = undefined === o ? 0 : o,
          s = t.rowWidth,
          p = undefined === s ? 0 : s,
          u = t.rowState,
          f = n.state.rightOffset;
        return 1 === u ? l : -1 === u ? -(p - (undefined === f ? p : f)) : 0;
      };

      n.close = function () {
        n.animateRow(n.currentOffset(), 0);
      };

      n.openLeft = function () {
        var t = n.state.leftWidth,
          o = undefined === t ? 0 : t;
        n.animateRow(n.currentOffset(), o);
      };

      n.openRight = function () {
        var t = n.state.rowWidth,
          o = undefined === t ? 0 : t,
          l = n.state.rightOffset,
          s = o - (undefined === l ? o : l);
        n.animateRow(n.currentOffset(), -s);
      };

      var o = new ReactNative.Animated.Value(0);
      n.state = {
        dragX: o,
        rowTranslation: new ReactNative.Animated.Value(0),
        rowState: 0,
        leftWidth: undefined,
        rightOffset: undefined,
        rowWidth: undefined,
      };
      n.updateAnimatedEvent(t, n.state);
      n.onGestureEvent = ReactNative.Animated.event(
        [
          {
            nativeEvent: {
              translationX: o,
            },
          },
        ],
        {
          useNativeDriver: t.useNativeAnimations,
        }
      );
      return n;
    }

    module25.default(E, [
      {
        key: 'shouldComponentUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.friction === t.friction &&
              this.props.overshootLeft === t.overshootLeft &&
              this.props.overshootRight === t.overshootRight &&
              this.props.overshootFriction === t.overshootFriction &&
              this.state.leftWidth === n.leftWidth &&
              this.state.rightOffset === n.rightOffset &&
              this.state.rowWidth === n.rowWidth
            )
          )
            this.updateAnimatedEvent(t, n);
          return true;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.state.rowState,
            l = this.props,
            s = l.children,
            p = l.renderLeftActions,
            u = l.renderRightActions,
            f =
              p &&
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: [
                    L.leftActions,
                    {
                      transform: [
                        {
                          translateX: this.leftActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                p(this.showLeftAction, this.transX),
                React.createElement(ReactNative.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      leftWidth: o.layout.x,
                    });
                  },
                })
              ),
            c =
              u &&
              React.createElement(
                ReactNative.Animated.View,
                {
                  style: [
                    L.rightActions,
                    {
                      transform: [
                        {
                          translateX: this.rightActionTranslate,
                        },
                      ],
                    },
                  ],
                },
                u(this.showRightAction, this.transX, this),
                React.createElement(ReactNative.View, {
                  onLayout: function (n) {
                    var o = n.nativeEvent;
                    return t.setState({
                      rightOffset: o.layout.x,
                    });
                  },
                })
              );
          return React.createElement(
            module1073.PanGestureHandler,
            module11.default(
              {
                activeOffsetX: [-10, 10],
              },
              this.props,
              {
                onGestureEvent: this.onGestureEvent,
                onHandlerStateChange: this.onHandlerStateChange,
              }
            ),
            React.createElement(
              ReactNative.Animated.View,
              {
                onLayout: this.onRowLayout,
                style: [L.container, this.props.containerStyle],
              },
              f,
              c,
              React.createElement(
                module976.TapGestureHandler,
                {
                  enabled: 0 !== o,
                  onHandlerStateChange: this.onTapHandlerStateChange,
                },
                React.createElement(
                  ReactNative.Animated.View,
                  {
                    pointerEvents: 0 === o ? 'auto' : 'box-only',
                    style: [
                      {
                        transform: [
                          {
                            translateX: this.transX,
                          },
                        ],
                      },
                      this.props.childrenContainerStyle,
                    ],
                  },
                  s
                )
              )
            )
          );
        },
      },
    ]);
    return E;
  })(React.Component);

exports.default = E;
E.defaultProps = {
  friction: 1,
  overshootFriction: 1,
  useNativeAnimations: true,
};
var L = ReactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  leftActions: R(
    R({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      flexDirection: ReactNative.I18nManager.isRTL ? 'row-reverse' : 'row',
    }
  ),
  rightActions: R(
    R({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      flexDirection: ReactNative.I18nManager.isRTL ? 'row' : 'row-reverse',
    }
  ),
});
