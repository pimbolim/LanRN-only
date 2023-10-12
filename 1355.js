var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module47 = require('./47'),
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
    var o = A(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1356 = require('./1356'),
  module1365 = require('./1365'),
  module1336 = require('./1336'),
  module1366 = require('./1366'),
  module1367 = require('./1367'),
  module1368 = require('./1368'),
  module1353 = require('./1353'),
  V = [
    'styleInterpolator',
    'index',
    'current',
    'gesture',
    'next',
    'layout',
    'insets',
    'overlay',
    'overlayEnabled',
    'shadowEnabled',
    'gestureEnabled',
    'gestureDirection',
    'pageOverflowEnabled',
    'children',
    'containerStyle',
    'contentStyle',
  ];

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (A = function (t) {
    return t ? o : n;
  })(t);
}

function D(t, n) {
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

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      D(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      D(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function x() {
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

var j = 1,
  I = 0,
  k = 'web' !== ReactNative.Platform.OS,
  G = (function (t, ...args) {
    module35.default(G, t);

    var module47 = G,
      A = x(),
      D = function () {
        var t,
          n = module34.default(module47);

        if (A) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function G() {
      var t;
      module24.default(this, G);
      (t = D.call(this, ...args)).isCurrentlyMounted = false;
      t.isClosing = new ReactNative.Animated.Value(I);
      t.inverted = new ReactNative.Animated.Value(module1368.default(t.props.gestureDirection));
      t.layout = {
        width: new ReactNative.Animated.Value(t.props.layout.width),
        height: new ReactNative.Animated.Value(t.props.layout.height),
      };
      t.isSwiping = new ReactNative.Animated.Value(I);

      t.animate = function (n) {
        var o = n.closing,
          l = n.velocity,
          s = t.props,
          c = s.gesture,
          u = s.transitionSpec,
          f = s.onOpen,
          h = s.onClose,
          p = s.onTransition,
          y = t.getAnimateToValue(
            P(
              P({}, t.props),
              {},
              {
                closing: o,
              }
            )
          );
        t.lastToValue = y;
        var w = o ? u.close : u.open,
          b = 'spring' === w.animation ? ReactNative.Animated.spring : ReactNative.Animated.timing;
        t.setPointerEventsEnabled(!o);
        t.handleStartInteraction();
        clearTimeout(t.pendingGestureCallback);
        if (!(null == p))
          p({
            closing: o,
            gesture: undefined !== l,
          });
        b(
          c,
          P(
            P({}, w.config),
            {},
            {
              velocity: l,
              toValue: y,
              useNativeDriver: k,
              isInteraction: false,
            }
          )
        ).start(function (n) {
          var l = n.finished;
          t.handleEndInteraction();
          clearTimeout(t.pendingGestureCallback);

          if (l) {
            if (o) h();
            else f();
            if (t.isCurrentlyMounted) t.forceUpdate();
          }
        });
      };

      t.getAnimateToValue = function (t) {
        var n = t.closing,
          o = t.layout,
          l = t.gestureDirection;
        return n ? module1367.default(o, l) : 0;
      };

      t.setPointerEventsEnabled = function (n) {
        var o,
          l = n ? 'box-none' : 'none';
        if (!(null == (o = t.contentRef.current)))
          o.setNativeProps({
            pointerEvents: l,
          });
      };

      t.handleStartInteraction = function () {
        if (undefined === t.interactionHandle) t.interactionHandle = ReactNative.InteractionManager.createInteractionHandle();
      };

      t.handleEndInteraction = function () {
        if (undefined !== t.interactionHandle) {
          ReactNative.InteractionManager.clearInteractionHandle(t.interactionHandle);
          t.interactionHandle = undefined;
        }
      };

      t.handleGestureStateChange = function (n) {
        var o = n.nativeEvent,
          l = t.props,
          s = l.layout,
          c = l.onClose,
          u = l.onGestureBegin,
          f = l.onGestureCanceled,
          h = l.onGestureEnd,
          p = l.gestureDirection,
          v = l.gestureVelocityImpact;

        switch (o.state) {
          case module1336.GestureState.BEGAN:
            t.isSwiping.setValue(j);
            t.handleStartInteraction();
            if (!(null == u)) u();
            break;

          case module1336.GestureState.CANCELLED:
            t.isSwiping.setValue(I);
            t.handleEndInteraction();
            var y = 'vertical' === p || 'vertical-inverted' === p ? o.velocityY : o.velocityX;
            t.animate({
              closing: t.props.closing,
              velocity: y,
            });
            if (!(null == f)) f();
            break;

          case module1336.GestureState.END:
            var w, E, S;
            t.isSwiping.setValue(I);

            if ('vertical' === p || 'vertical-inverted' === p) {
              w = s.height;
              E = o.translationY;
              S = o.velocityY;
            } else {
              w = s.width;
              E = o.translationX;
              S = o.velocityX;
            }

            var C = (E + S * v) * module1368.default(p) > w / 2 ? 0 !== S || 0 !== E : t.props.closing;
            t.animate({
              closing: C,
              velocity: S,
            });
            if (C)
              t.pendingGestureCallback = setTimeout(function () {
                c();
                t.forceUpdate();
              }, 32);
            if (!(null == h)) h();
        }
      };

      t.getInterpolatedStyle = module1353.default(function (n, o, l, s, c, u, f, h, p) {
        return n({
          index: o,
          current: {
            progress: l,
          },
          next: s && {
            progress: s,
          },
          closing: t.isClosing,
          swiping: t.isSwiping,
          inverted: t.inverted,
          layouts: {
            screen: c,
          },
          insets: {
            top: u,
            right: f,
            bottom: h,
            left: p,
          },
        });
      });
      t.getCardAnimationContext = module1353.default(function (n, o, l, s, c, u, f, h) {
        return {
          index: n,
          current: {
            progress: o,
          },
          next: l && {
            progress: l,
          },
          closing: t.isClosing,
          swiping: t.isSwiping,
          inverted: t.inverted,
          layouts: {
            screen: s,
          },
          insets: {
            top: c,
            right: u,
            bottom: f,
            left: h,
          },
        };
      });
      t.contentRef = React.createRef();
      return t;
    }

    module25.default(G, [
      {
        key: 'componentDidMount',
        value: function () {
          this.animate({
            closing: this.props.closing,
          });
          this.isCurrentlyMounted = true;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            o = n.layout,
            l = n.gestureDirection,
            s = n.closing,
            c = o.width,
            u = o.height;
          if (c !== t.layout.width) this.layout.width.setValue(c);
          if (u !== t.layout.height) this.layout.height.setValue(u);
          if (l !== t.gestureDirection) this.inverted.setValue(module1368.default(l));
          var f = this.getAnimateToValue(this.props);
          if (!(this.getAnimateToValue(t) === f && this.lastToValue === f))
            this.animate({
              closing: s,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.isCurrentlyMounted = false;
          this.handleEndInteraction();
        },
      },
      {
        key: 'gestureActivationCriteria',
        value: function () {
          var t = this.props,
            n = t.layout,
            o = t.gestureDirection,
            l = t.gestureResponseDistance,
            s =
              'vertical' === o || 'vertical-inverted' === o
                ? undefined !== (null == l ? undefined : l.vertical)
                  ? l.vertical
                  : 135
                : undefined !== (null == l ? undefined : l.horizontal)
                ? l.horizontal
                : 50;
          if ('vertical' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: 5,
              hitSlop: {
                bottom: -n.height + s,
              },
            };
          if ('vertical-inverted' === o)
            return {
              maxDeltaX: 15,
              minOffsetY: -5,
              hitSlop: {
                top: -n.height + s,
              },
            };
          var c = -n.width + s;
          return 1 === module1368.default(o)
            ? {
                minOffsetX: 5,
                maxDeltaY: 20,
                hitSlop: {
                  right: c,
                },
              }
            : {
                minOffsetX: -5,
                maxDeltaY: 20,
                hitSlop: {
                  left: c,
                },
              };
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            l = this.props,
            s = l.styleInterpolator,
            c = l.index,
            u = l.current,
            f = l.gesture,
            h = l.next,
            S = l.layout,
            O = l.insets,
            C = l.overlay,
            A = l.overlayEnabled,
            D = l.shadowEnabled,
            P = l.gestureEnabled,
            x = l.gestureDirection,
            j = l.pageOverflowEnabled,
            I = l.children,
            G = l.containerStyle,
            H = l.contentStyle,
            M = module53.default(l, V),
            T = this.getInterpolatedStyle(s, c, u, h, S, O.top, O.right, O.bottom, O.left),
            X = this.getCardAnimationContext(c, u, h, S, O.top, O.right, O.bottom, O.left),
            Y = T.containerStyle,
            z = T.cardStyle,
            B = T.overlayStyle,
            N = T.shadowStyle,
            _ = P
              ? ReactNative.Animated.event(
                  [
                    {
                      nativeEvent:
                        'vertical' === x || 'vertical-inverted' === x
                          ? {
                              translationY: f,
                            }
                          : {
                              translationX: f,
                            },
                    },
                  ],
                  {
                    useNativeDriver: k,
                  }
                )
              : undefined,
            L = ReactNative.StyleSheet.flatten(H || {}).backgroundColor,
            U = 'string' == typeof L && 0 === module1356.default(L).alpha();

          return React.createElement(
            module1366.default.Provider,
            {
              value: X,
            },
            React.createElement(ReactNative.Animated.View, {
              style: {
                opacity: u,
              },
              collapsable: false,
            }),
            React.createElement(
              ReactNative.View,
              module11.default(
                {
                  pointerEvents: 'box-none',
                },
                M
              ),
              A
                ? React.createElement(
                    ReactNative.View,
                    {
                      pointerEvents: 'box-none',
                      style: ReactNative.StyleSheet.absoluteFill,
                    },
                    C({
                      style: B,
                    })
                  )
                : null,
              React.createElement(
                ReactNative.Animated.View,
                {
                  needsOffscreenAlphaCompositing: ((t = Y), !!t && null != ReactNative.StyleSheet.flatten(t).opacity),
                  style: [R.container, Y, G],
                  pointerEvents: 'box-none',
                },
                React.createElement(
                  module1336.PanGestureHandler,
                  module11.default(
                    {
                      enabled: 0 !== S.width && P,
                      onGestureEvent: _,
                      onHandlerStateChange: this.handleGestureStateChange,
                    },
                    this.gestureActivationCriteria()
                  ),
                  React.createElement(
                    ReactNative.Animated.View,
                    {
                      style: [R.container, z],
                    },
                    D && N && !U
                      ? React.createElement(ReactNative.Animated.View, {
                          style: [
                            R.shadow,
                            'horizontal' === x
                              ? [R.shadowHorizontal, R.shadowLeft]
                              : 'horizontal-inverted' === x
                              ? [R.shadowHorizontal, R.shadowRight]
                              : 'vertical' === x
                              ? [R.shadowVertical, R.shadowTop]
                              : [R.shadowVertical, R.shadowBottom],
                            {
                              backgroundColor: L,
                            },
                            N,
                          ],
                          pointerEvents: 'none',
                        })
                      : null,
                    React.createElement(
                      module1365.default,
                      {
                        ref: this.contentRef,
                        enabled: j,
                        layout: S,
                        style: H,
                      },
                      I
                    )
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return G;
  })(React.Component);

exports.default = G;
G.defaultProps = {
  overlayEnabled: 'ios' !== ReactNative.Platform.OS,
  shadowEnabled: true,
  gestureEnabled: true,
  gestureVelocityImpact: 0.3,
  overlay: function (t) {
    var n = t.style;
    return n
      ? React.createElement(ReactNative.Animated.View, {
          pointerEvents: 'none',
          style: [R.overlay, n],
        })
      : null;
  },
};
var R = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000',
  },
  shadow: {
    position: 'absolute',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  shadowHorizontal: {
    top: 0,
    bottom: 0,
    width: 3,
    shadowOffset: {
      width: -1,
      height: 1,
    },
  },
  shadowLeft: {
    left: 0,
  },
  shadowRight: {
    right: 0,
  },
  shadowVertical: {
    left: 0,
    right: 0,
    height: 3,
    shadowOffset: {
      width: 1,
      height: -1,
    },
  },
  shadowTop: {
    top: 0,
  },
  shadowBottom: {
    bottom: 0,
  },
});
