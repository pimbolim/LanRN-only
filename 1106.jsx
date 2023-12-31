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
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, p, u);
        else s[p] = t[p];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  module3 = require('./3'),
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

function b(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function O(t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      b(Object(s), true).forEach(function (o) {
        module47.default(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      b(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
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

var D = 0.05,
  A = 'Idle',
  E = 'Dragging',
  P = 'Settling',
  C = (function (t) {
    module35.default(O, t);

    var module47 = O,
      S = V(),
      b = function () {
        var t,
          o = module34.default(module47);

        if (S) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);
      (n = b.call(this, t)).accessibilityIsModalView = React.createRef();
      n.pointerEventsView = React.createRef();
      n.panGestureHandler = React.createRef();
      n.drawerShown = false;

      n.updateAnimatedEvent = function (t, o) {
        var s = t.drawerPosition,
          l = t.drawerWidth,
          p = t.drawerType,
          u = o.dragX,
          c = o.touchX,
          w = o.drawerTranslation,
          h = o.containerWidth,
          v = u,
          y = c;

        if ('left' !== s) {
          v = ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), u);
          y = ReactNative.Animated.add(new ReactNative.Animated.Value(h), ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), c));
          c.setValue(h);
        } else c.setValue(0);

        var S = v;

        if ('front' === p) {
          var b = ReactNative.Animated.add(y, ReactNative.Animated.multiply(new ReactNative.Animated.Value(-1), v)).interpolate({
            inputRange: [l - 1, l, l + 1],
            outputRange: [0, 0, 1],
          });
          S = ReactNative.Animated.add(v, b);
        }

        n.openValue = ReactNative.Animated.add(S, w).interpolate({
          inputRange: [0, l],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        var O = {
          useNativeDriver: t.useNativeAnimations,
        };
        if (n.props.onDrawerSlide)
          O.listener = function (t) {
            var o = Math.floor(Math.abs(t.nativeEvent.translationX)) / n.state.containerWidth;
            if (!(null == n.props.onDrawerSlide)) n.props.onDrawerSlide(o);
          };
        n.onGestureEvent = ReactNative.Animated.event(
          [
            {
              nativeEvent: {
                translationX: u,
                x: c,
              },
            },
          ],
          O
        );
      };

      n.handleContainerLayout = function (t) {
        var o = t.nativeEvent;
        n.setState({
          containerWidth: o.layout.width,
        });
      };

      n.emitStateChanged = function (t, o) {
        if (!(null == n.props.onDrawerStateChanged)) n.props.onDrawerStateChanged(t, o);
      };

      n.openingHandlerStateChange = function (t) {
        var o = t.nativeEvent;
        if (o.oldState === module964.State.ACTIVE)
          n.handleRelease({
            nativeEvent: o,
          });
        else if (o.state === module964.State.ACTIVE) {
          n.emitStateChanged(E, false);
          n.setState({
            drawerState: E,
          });
          if ('on-drag' === n.props.keyboardDismissMode) ReactNative.Keyboard.dismiss();
          if (n.props.hideStatusBar) ReactNative.StatusBar.setHidden(true, n.props.statusBarAnimation || 'slide');
        }
      };

      n.onTapHandlerStateChange = function (t) {
        var o = t.nativeEvent;
        if (n.drawerShown && o.oldState === module964.State.ACTIVE && 'locked-open' !== n.props.drawerLockMode) n.closeDrawer();
      };

      n.handleRelease = function (t) {
        var o = t.nativeEvent,
          s = n.props,
          l = s.drawerWidth,
          p = s.drawerPosition,
          u = s.drawerType,
          c = n.state.containerWidth,
          w = o.translationX,
          f = o.velocityX,
          h = o.x;

        if ('left' !== p) {
          w = -w;
          h = c - h;
          f = -f;
        }

        var v = h - w,
          y = 0;
        if ('front' === u) y = v > l ? v - l : 0;
        var S = w + y + (n.drawerShown ? l : 0);
        if (S + D * f > l / 2) n.animateDrawer(S, l, f);
        else n.animateDrawer(S, 0, f);
      };

      n.updateShowing = function (t) {
        var o, s, l;
        n.drawerShown = t;
        if (!(null == (o = n.accessibilityIsModalView.current)))
          o.setNativeProps({
            accessibilityViewIsModal: t,
          });
        if (!(null == (s = n.pointerEventsView.current)))
          s.setNativeProps({
            pointerEvents: t ? 'auto' : 'none',
          });
        var p = n.props,
          u = p.drawerPosition,
          c = p.minSwipeDistance,
          w = p.edgeWidth,
          f = 'left' === u,
          h = (f ? 1 : -1) * (n.drawerShown ? -1 : 1),
          v = f
            ? {
                left: 0,
                width: t ? undefined : w,
              }
            : {
                right: 0,
                width: t ? undefined : w,
              };
        if (!(null == (l = n.panGestureHandler.current)))
          l.setNativeProps({
            hitSlop: v,
            activeOffsetX: h * c,
          });
      };

      n.animateDrawer = function (t, o, s, l) {
        if ((n.state.dragX.setValue(0), n.state.touchX.setValue('left' === n.props.drawerPosition ? 0 : n.state.containerWidth), null != t)) {
          var p = t;
          if (n.props.useNativeAnimations) t < o && s > 0 ? (p = (t + s / 60) ** o) : t > o && s < 0 && (p = (t + s / 60) ** o);
          n.state.drawerTranslation.setValue(p);
        }

        var u = 0 !== o;
        n.updateShowing(u);
        n.emitStateChanged(P, u);
        n.setState({
          drawerState: P,
        });
        if (n.props.hideStatusBar) ReactNative.StatusBar.setHidden(u, n.props.statusBarAnimation || 'slide');
        ReactNative.Animated.spring(n.state.drawerTranslation, {
          velocity: s,
          bounciness: 0,
          toValue: o,
          useNativeDriver: n.props.useNativeAnimations,
          speed: null != l ? l : undefined,
        }).start(function (t) {
          if (t.finished) {
            n.emitStateChanged(A, u);
            n.setState({
              drawerOpened: u,
            });
            if (n.state.drawerState !== E)
              n.setState({
                drawerState: A,
              });
            if (u) {
              if (!(null == n.props.onDrawerOpen)) n.props.onDrawerOpen();
            } else if (!(null == n.props.onDrawerClose)) n.props.onDrawerClose();
          }
        });
      };

      n.openDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        n.animateDrawer(undefined, n.props.drawerWidth, t.velocity ? t.velocity : 0, t.speed);
        n.forceUpdate();
      };

      n.closeDrawer = function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        n.animateDrawer(undefined, 0, t.velocity ? t.velocity : 0, t.speed);
        n.forceUpdate();
      };

      n.renderOverlay = function () {
        module3.default(n.openValue, 'should be set');
        var t = {
          opacity: n.state.drawerState !== A ? n.openValue : n.state.drawerOpened ? 1 : 0,
          backgroundColor: n.props.overlayColor,
        };
        return (
          <module976.TapGestureHandler onHandlerStateChange={n.onTapHandlerStateChange}>
            {React.createElement(ReactNative.Animated.View, {
              pointerEvents: n.drawerShown ? 'auto' : 'none',
              ref: n.pointerEventsView,
              style: [R.overlay, t],
            })}
          </module976.TapGestureHandler>
        );
      };

      n.renderDrawer = function () {
        var t,
          o = n.props,
          s = o.drawerBackgroundColor,
          l = o.drawerWidth,
          p = o.drawerPosition,
          u = o.drawerType,
          h = o.drawerContainerStyle,
          v = o.contentContainerStyle,
          y = 'left' === p,
          S = 'back' !== u,
          b = 'front' !== u,
          O = ReactNative.I18nManager.isRTL ? y : !y,
          V = {
            backgroundColor: s,
            width: l,
          },
          D = n.openValue;
        if ((module3.default(D, 'should be set'), b))
          t = {
            transform: [
              {
                translateX: D.interpolate({
                  inputRange: [0, 1],
                  outputRange: y ? [0, l] : [0, -l],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };
        var E = 0;

        if (S) {
          var P = y ? -l : l;
          E =
            n.state.drawerState !== A
              ? D.interpolate({
                  inputRange: [0, 1],
                  outputRange: [P, 0],
                  extrapolate: 'clamp',
                })
              : n.state.drawerOpened
              ? 0
              : P;
        }

        var C = {
          transform: [
            {
              translateX: E,
            },
          ],
          flexDirection: O ? 'row-reverse' : 'row',
        };
        return React.createElement(
          ReactNative.Animated.View,
          {
            style: R.main,
            onLayout: n.handleContainerLayout,
          },
          React.createElement(
            ReactNative.Animated.View,
            {
              style: ['front' === u ? R.containerOnBack : R.containerInFront, t, v],
              importantForAccessibility: n.drawerShown ? 'no-hide-descendants' : 'yes',
            },
            'function' == typeof n.props.children ? n.props.children(n.openValue) : n.props.children,
            n.renderOverlay()
          ),
          React.createElement(
            ReactNative.Animated.View,
            {
              pointerEvents: 'box-none',
              ref: n.accessibilityIsModalView,
              accessibilityViewIsModal: n.drawerShown,
              style: [R.drawerContainer, C, h],
            },
            React.createElement(
              ReactNative.View,
              {
                style: V,
              },
              n.props.renderNavigationView(n.openValue)
            )
          )
        );
      };

      n.setPanGestureRef = function (t) {
        n.panGestureHandler.current = t;
        if (!(null == n.props.onGestureRef)) n.props.onGestureRef(t);
      };

      var s = new ReactNative.Animated.Value(0),
        l = new ReactNative.Animated.Value(0),
        p = new ReactNative.Animated.Value(0);
      n.state = {
        dragX: s,
        touchX: l,
        drawerTranslation: p,
        containerWidth: 0,
        drawerState: A,
        drawerOpened: false,
      };
      n.updateAnimatedEvent(t, n.state);
      return n;
    }

    module25.default(O, [
      {
        key: 'shouldComponentUpdate',
        value: function (t, n) {
          if (
            !(
              this.props.drawerPosition === t.drawerPosition &&
              this.props.drawerWidth === t.drawerWidth &&
              this.props.drawerType === t.drawerType &&
              this.state.containerWidth === n.containerWidth
            )
          )
            this.updateAnimatedEvent(t, n);
          return true;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.drawerPosition,
            o = t.drawerLockMode,
            s = t.edgeWidth,
            l = t.minSwipeDistance,
            p = 'left' === n,
            u = (p ? 1 : -1) * (this.drawerShown ? -1 : 1),
            w = p
              ? {
                  left: 0,
                  width: this.drawerShown ? undefined : s,
                }
              : {
                  right: 0,
                  width: this.drawerShown ? undefined : s,
                };
          return React.createElement(
            module1073.PanGestureHandler,
            {
              ref: this.setPanGestureRef,
              hitSlop: w,
              activeOffsetX: u * l,
              failOffsetY: [-15, 15],
              onGestureEvent: this.onGestureEvent,
              onHandlerStateChange: this.openingHandlerStateChange,
              enableTrackpadTwoFingerGesture: this.props.enableTrackpadTwoFingerGesture,
              enabled: 'locked-closed' !== o && 'locked-open' !== o,
            },
            this.renderDrawer()
          );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = C;
C.defaultProps = {
  drawerWidth: 200,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerType: 'front',
  edgeWidth: 20,
  minSwipeDistance: 3,
  overlayColor: 'rgba(0, 0, 0, 0.7)',
  drawerLockMode: 'unlocked',
  enableTrackpadTwoFingerGesture: false,
};
C.positions = {
  Left: 'left',
  Right: 'right',
};
var R = ReactNative.StyleSheet.create({
  drawerContainer: O(
    O({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      zIndex: 1001,
      flexDirection: 'row',
    }
  ),
  containerInFront: O(
    O({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      zIndex: 1002,
    }
  ),
  containerOnBack: O({}, ReactNative.StyleSheet.absoluteFillObject),
  main: {
    flex: 1,
    zIndex: 0,
    overflow: 'hidden',
  },
  overlay: O(
    O({}, ReactNative.StyleSheet.absoluteFillObject),
    {},
    {
      zIndex: 1e3,
    }
  ),
});
