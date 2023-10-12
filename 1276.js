var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
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
    var o = R(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var h = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (h && (h.get || h.set)) Object.defineProperty(s, u, h);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  v = ['children', 'contentContainerStyle', 'leftButtons', 'leftContainerStyle', 'leftContent', 'rightButtons', 'rightContainerStyle', 'rightContent', 'style'];

function R(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (R = function (t) {
    return t ? o : n;
  })(t);
}

function B() {
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

var y = function () {
    return null;
  },
  C = (function (t) {
    module35.default(w, t);

    var R = w,
      y = B(),
      C = function () {
        var t,
          n = module34.default(R);

        if (y) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w(t) {
      var n;
      module24.default(this, w);
      (n = C.call(this, t)).state = {
        pan: new ReactNative.Animated.ValueXY(),
        width: 0,
        lastOffset: {
          x: 0,
          y: 0,
        },
        leftActionActivated: false,
        leftButtonsActivated: false,
        leftButtonsOpen: false,
        rightActionActivated: false,
        rightButtonsActivated: false,
        rightButtonsOpen: false,
      };
      n.unmounted = false;
      n.handlePan = ReactNative.Animated.event(
        [
          null,
          {
            dx: n.state.pan.x,
            dy: n.state.pan.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      );
      n.panResponder = ReactNative.PanResponder.create({
        onMoveShouldSetPanResponder: n.handleMoveShouldSetPanResponder.bind(module39.default(n)),
        onMoveShouldSetPanResponderCapture: n.handleMoveShouldSetPanResponder.bind(module39.default(n)),
        onPanResponderGrant: n.handlePanResponderStart.bind(module39.default(n)),
        onPanResponderMove: n.handlePanResponderMove.bind(module39.default(n)),
        onPanResponderRelease: n.handlePanResponderEnd.bind(module39.default(n)),
        onPanResponderTerminate: n.handlePanResponderEnd.bind(module39.default(n)),
        onPanResponderTerminationRequest: n.handlePanResponderEnd.bind(module39.default(n)),
      });
      n.handleLayout = n.handleLayout.bind(module39.default(n));
      return n;
    }

    module25.default(w, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this.props,
            n = t.onPanAnimatedValueRef;
          t.onRef(this);
          n(this.state.pan);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.unmounted = true;
          clearTimeout(this.timeout);
        },
      },
      {
        key: 'getReleaseAnimationFn',
        value: function () {
          var t = this.props,
            n = t.leftActionReleaseAnimationFn,
            o = t.leftButtonsOpenReleaseAnimationFn,
            s = t.leftButtonsCloseReleaseAnimationFn,
            l = t.rightActionReleaseAnimationFn,
            u = t.rightButtonsOpenReleaseAnimationFn,
            h = t.rightButtonsCloseReleaseAnimationFn,
            f = t.swipeReleaseAnimationFn,
            c = this.state,
            p = c.leftActionActivated,
            A = c.leftButtonsActivated,
            v = c.leftButtonsOpen,
            R = c.rightActionActivated,
            B = c.rightButtonsActivated,
            y = c.rightButtonsOpen;
          return p && n ? n : R && l ? l : A && o ? o : !A && v && s ? s : B && u ? u : !B && y && h ? h : f;
        },
      },
      {
        key: 'getReleaseAnimationConfig',
        value: function () {
          var t = this.props,
            n = t.leftActionReleaseAnimationConfig,
            s = t.leftButtons,
            l = t.leftButtonsOpenReleaseAnimationConfig,
            u = t.leftButtonsCloseReleaseAnimationConfig,
            h = t.leftButtonWidth,
            f = t.rightActionReleaseAnimationConfig,
            c = t.rightButtons,
            p = t.rightButtonsOpenReleaseAnimationConfig,
            A = t.rightButtonsCloseReleaseAnimationConfig,
            v = t.rightButtonWidth,
            R = t.swipeReleaseAnimationConfig,
            B = this.state,
            y = B.leftActionActivated,
            C = B.leftButtonsActivated,
            S = B.leftButtonsOpen,
            w = B.rightActionActivated,
            O = B.rightButtonsActivated,
            L = B.rightButtonsOpen;
          return y && n
            ? n
            : w && f
            ? f
            : C
            ? module11.default(
                {},
                R,
                {
                  toValue: {
                    x: s.length * h,
                    y: 0,
                  },
                },
                l
              )
            : O
            ? module11.default(
                {},
                R,
                {
                  toValue: {
                    x: c.length * v * -1,
                    y: 0,
                  },
                },
                p
              )
            : !C && S && u
            ? u
            : !O && L && A
            ? A
            : R;
        },
      },
      {
        key: 'canSwipeLeft',
        value: function () {
          return this.props.leftContent || this.hasLeftButtons();
        },
      },
      {
        key: 'canSwipeRight',
        value: function () {
          return this.props.rightContent || this.hasRightButtons();
        },
      },
      {
        key: 'hasLeftButtons',
        value: function () {
          var t = this.props,
            n = t.leftButtons;
          return !t.leftContent && n && Array.isArray(n) && n.length;
        },
      },
      {
        key: 'hasRightButtons',
        value: function () {
          var t = this.props,
            n = t.rightButtons;
          return !t.rightContent && n && Array.isArray(n) && n.length;
        },
      },
      {
        key: 'animateSwipe',
        value: function () {
          var t = this.props.swipeReleaseAnimationFn,
            n = this.state.pan,
            o = this.canSwipeLeft(),
            s = [];
          if (this.canSwipeRight())
            s.push(
              t(n, {
                toValue: {
                  x: -20,
                  y: 0,
                },
                duration: 400,
                easing: ReactNative.Easing.inOut(ReactNative.Easing.exp),
              })
            );
          if (o)
            s.push(
              t(n, {
                toValue: {
                  x: 20,
                  y: 0,
                },
                duration: 400,
                easing: ReactNative.Easing.inOut(ReactNative.Easing.exp),
              })
            );
          if (s.length)
            this.timeout = setTimeout(function () {
              ReactNative.Animated.sequence(
                [].concat(s, [
                  t(n, {
                    delay: 100,
                    toValue: {
                      x: 0,
                      y: 0,
                    },
                    duration: 400,
                    easing: ReactNative.Easing.inOut(ReactNative.Easing.exp),
                  }),
                ])
              ).start();
            }, 100);
        },
      },
      {
        key: 'recenter',
        value: function () {
          var t = this.props,
            n = t.swipeReleaseAnimationFn,
            o = t.swipeReleaseAnimationConfig,
            s = arguments.length > 0 && undefined !== (arguments.length <= 0 ? undefined : arguments[0]) ? (arguments.length <= 0 ? undefined : arguments[0]) : n,
            l = arguments.length > 0 && undefined !== (arguments.length <= 1 ? undefined : arguments[1]) ? (arguments.length <= 1 ? undefined : arguments[1]) : o,
            u = arguments.length <= 2 ? undefined : arguments[2],
            h = this.state.pan;
          this.setState({
            lastOffset: {
              x: 0,
              y: 0,
            },
            leftActionActivated: false,
            leftButtonsActivated: false,
            leftButtonsOpen: false,
            rightActionActivated: false,
            rightButtonsActivated: false,
            rightButtonsOpen: false,
          });
          h.flattenOffset();
          s(h, l).start(u);
        },
      },
      {
        key: 'handleMoveShouldSetPanResponder',
        value: function (t, n) {
          var o = this.props.swipeStartMinDistance;
          return Math.abs(n.dx) > o;
        },
      },
      {
        key: 'handlePanResponderStart',
        value: function (t, n) {
          var o = this.props.onSwipeStart,
            s = this.state,
            l = s.lastOffset;
          s.pan.setOffset(l);
          o(t, n, this);
        },
      },
      {
        key: 'handlePanResponderMove',
        value: function (t, n) {
          var o = this.props,
            s = o.leftActionActivationDistance,
            l = o.leftButtonsActivationDistance,
            u = o.onLeftActionActivate,
            h = o.onLeftActionDeactivate,
            f = o.onLeftButtonsActivate,
            c = o.onLeftButtonsDeactivate,
            p = o.rightActionActivationDistance,
            A = o.rightButtonsActivationDistance,
            v = o.onRightActionActivate,
            R = o.onRightActionDeactivate,
            B = o.onRightButtonsActivate,
            y = o.onRightButtonsDeactivate,
            C = o.onSwipeMove,
            S = this.state,
            w = S.lastOffset,
            O = S.leftActionActivated,
            L = S.leftButtonsActivated,
            P = S.rightActionActivated,
            x = S.rightButtonsActivated,
            D = n.dx,
            k = n.vx,
            F = D + w.x,
            M = this.canSwipeRight(),
            b = this.canSwipeLeft(),
            E = this.hasLeftButtons(),
            V = this.hasRightButtons(),
            W = k < 0,
            j = k > 0,
            _ = O,
            T = L,
            X = P,
            q = x;
          this.handlePan(t, n);
          C(t, n, this);

          if (!O && b && F >= s) {
            _ = true;
            u(t, n, this);
          }

          if (O && b && F < s) {
            _ = false;
            h(t, n, this);
          }

          if (!P && M && F <= -p) {
            X = true;
            v(t, n, this);
          }

          if (P && M && F > -p) {
            X = false;
            R(t, n, this);
          }

          if (!L && E && !W && F >= l) {
            T = true;
            f(t, n, this);
          }

          if (L && E && W) {
            T = false;
            c(t, n, this);
          }

          if (!x && V && !j && F <= -A) {
            q = true;
            B(t, n, this);
          }

          if (x && V && j) {
            q = false;
            y(t, n, this);
          }

          if (_ !== O || T !== L || X !== P || q !== x)
            this.setState({
              leftActionActivated: _,
              leftButtonsActivated: T,
              rightActionActivated: X,
              rightButtonsActivated: q,
            });
        },
      },
      {
        key: 'handlePanResponderEnd',
        value: function (t, n) {
          var o = this,
            s = this.props,
            l = s.onLeftActionRelease,
            u = s.onLeftActionDeactivate,
            h = s.onLeftButtonsOpenRelease,
            f = s.onLeftButtonsCloseRelease,
            c = s.onRightActionRelease,
            p = s.onRightActionDeactivate,
            A = s.onRightButtonsOpenRelease,
            v = s.onRightButtonsCloseRelease,
            R = s.onSwipeRelease,
            B = this.state,
            y = B.leftActionActivated,
            C = B.leftButtonsOpen,
            S = B.leftButtonsActivated,
            w = B.rightActionActivated,
            O = B.rightButtonsOpen,
            L = B.rightButtonsActivated,
            P = B.pan,
            x = this.getReleaseAnimationFn(),
            D = this.getReleaseAnimationConfig();
          R(t, n, this);
          if (y) l(t, n, this);
          if (w) c(t, n, this);
          if (S && !C) h(t, n, this);
          if (!S && C) f(t, n, this);
          if (L && !O) A(t, n, this);
          if (!L && O) v(t, n, this);
          this.setState({
            lastOffset: {
              x: D.toValue.x,
              y: D.toValue.y,
            },
            leftActionActivated: false,
            rightActionActivated: false,
            leftButtonsOpen: S,
            rightButtonsOpen: L,
          });
          P.flattenOffset();
          x(P, D).start(function () {
            if (!o.unmounted) {
              var s = o.props,
                l = s.onLeftActionComplete,
                h = s.onLeftButtonsOpenComplete,
                f = s.onLeftButtonsCloseComplete,
                c = s.onRightActionComplete,
                A = s.onRightButtonsOpenComplete,
                v = s.onRightButtonsCloseComplete;
              s.onSwipeComplete(t, n, o);

              if (y) {
                l(t, n, o);
                u(t, n, o);
              }

              if (w) {
                c(t, n, o);
                p(t, n, o);
              }

              if (S && !C) h(t, n, o);
              if (!S && C) f(t, n, o);
              if (L && !O) A(t, n, o);
              if (!L && O) v(t, n, o);
            }
          });
        },
      },
      {
        key: 'handleLayout',
        value: function (t) {
          var n = t.nativeEvent.layout.width;
          return this.setState({
            width: n,
          });
        },
      },
      {
        key: 'renderButtons',
        value: function (t, n) {
          var o = this.props,
            s = o.leftButtonContainerStyle,
            l = o.rightButtonContainerStyle,
            u = o.leftButtonWidth,
            h = o.rightButtonWidth,
            f = this.state,
            c = f.pan,
            v = f.width,
            R = this.canSwipeLeft(),
            B = this.canSwipeRight(),
            y = t.length,
            C = R ? 0 : -v,
            S = B ? 0 : v,
            w = n ? [0, S] : [C, 0],
            O = n ? u : h;
          return t.map(function (t, o) {
            var u = -o / y,
              h = n ? [0, S * u] : [C * u, 0],
              f = [
                {
                  translateX: c.x.interpolate({
                    inputRange: w,
                    outputRange: h,
                    extrapolate: 'clamp',
                  }),
                },
              ],
              v = [
                ReactNative.StyleSheet.absoluteFill,
                {
                  width: O,
                  maxWidth: O,
                  transform: f,
                },
                n ? s : l,
              ];
            return React.default.createElement(
              ReactNative.Animated.View,
              {
                key: o,
                style: v,
              },
              t
            );
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            s = this.props,
            l = s.children,
            u = s.contentContainerStyle,
            h = s.leftButtons,
            f = s.leftContainerStyle,
            c = s.leftContent,
            R = s.rightButtons,
            B = s.rightContainerStyle,
            y = s.rightContent,
            C = s.style,
            w = module53.default(s, v),
            O = this.state,
            L = O.pan,
            P = O.width,
            x = this.canSwipeRight(),
            D = this.canSwipeLeft(),
            k = [
              {
                translateX: L.x.interpolate({
                  inputRange: [x ? -P : 0, D ? P : 0],
                  outputRange: [x ? -P + ReactNative.StyleSheet.hairlineWidth : 0, D ? P - ReactNative.StyleSheet.hairlineWidth : 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
            F = -P,
            M = {
              transform: k,
              width: P,
              marginRight: F,
              flexDirection: 'row-reverse',
            },
            b = {
              transform: k,
              width: P,
              marginRight: F,
              flexDirection: 'row',
            };
          return React.default.createElement(
            ReactNative.View,
            module11.default(
              {
                ref: function (n) {
                  t.swipe = n;
                },
                onLayout: this.handleLayout,
                style: [S.container, C],
              },
              this.panResponder.panHandlers,
              w
            ),
            D &&
              React.default.createElement(
                ReactNative.Animated.View,
                {
                  style: [M, f],
                },
                c || this.renderButtons(h, true)
              ),
            React.default.createElement(
              ReactNative.Animated.View,
              {
                style: [
                  {
                    transform: k,
                  },
                  S.content,
                  u,
                ],
              },
              l
            ),
            x &&
              React.default.createElement(
                ReactNative.Animated.View,
                {
                  style: [b, B],
                },
                y || this.renderButtons(R, false)
              )
          );
        },
      },
    ]);
    return w;
  })(React.PureComponent);

exports.default = C;
C.defaultProps = {
  leftContent: null,
  rightContent: null,
  leftButtons: null,
  rightButtons: null,
  onLeftActionActivate: y,
  onLeftActionDeactivate: y,
  onLeftActionRelease: y,
  onLeftActionComplete: y,
  leftActionActivationDistance: 125,
  leftActionReleaseAnimationFn: null,
  leftActionReleaseAnimationConfig: null,
  onRightActionActivate: y,
  onRightActionDeactivate: y,
  onRightActionRelease: y,
  onRightActionComplete: y,
  rightActionActivationDistance: 125,
  rightActionReleaseAnimationFn: null,
  rightActionReleaseAnimationConfig: null,
  onLeftButtonsActivate: y,
  onLeftButtonsDeactivate: y,
  onLeftButtonsOpenRelease: y,
  onLeftButtonsOpenComplete: y,
  onLeftButtonsCloseRelease: y,
  onLeftButtonsCloseComplete: y,
  leftButtonWidth: 75,
  leftButtonsActivationDistance: 75,
  leftButtonsOpenReleaseAnimationFn: null,
  leftButtonsOpenReleaseAnimationConfig: null,
  leftButtonsCloseReleaseAnimationFn: null,
  leftButtonsCloseReleaseAnimationConfig: null,
  onRightButtonsActivate: y,
  onRightButtonsDeactivate: y,
  onRightButtonsOpenRelease: y,
  onRightButtonsOpenComplete: y,
  onRightButtonsCloseRelease: y,
  onRightButtonsCloseComplete: y,
  rightButtonWidth: 75,
  rightButtonsActivationDistance: 75,
  rightButtonsOpenReleaseAnimationFn: null,
  rightButtonsOpenReleaseAnimationConfig: null,
  rightButtonsCloseReleaseAnimationFn: null,
  rightButtonsCloseReleaseAnimationConfig: null,
  onSwipeStart: y,
  onSwipeMove: y,
  onSwipeRelease: y,
  onSwipeComplete: y,
  swipeReleaseAnimationFn: ReactNative.Animated.timing,
  swipeReleaseAnimationConfig: {
    toValue: {
      x: 0,
      y: 0,
    },
    duration: 250,
    easing: ReactNative.Easing.elastic(0.5),
  },
  onRef: y,
  onPanAnimatedValueRef: y,
  swipeStartMinDistance: 15,
};
var S = ReactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});
