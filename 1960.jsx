var module11 = require('./11'),
  module12 = require('./12'),
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
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module901 = require('./901'),
  module1949 = require('./1949'),
  module1961 = require('./1961');

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

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
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

var P = module901.default.Clock,
  D = module901.default.Value,
  X = module901.default.onChange,
  V = module901.default.clockRunning,
  k = module901.default.startClock,
  W = module901.default.stopClock,
  C = module901.default.spring,
  I = module901.default.abs,
  j = module901.default.add,
  B = module901.default.and,
  x = module901.default.block,
  H = module901.default.call,
  M = module901.default.cond,
  L = module901.default.divide,
  G = module901.default.eq,
  F = module901.default.event,
  R = module901.default.greaterThan,
  A = module901.default.lessThan,
  _ = module901.default.max,
  q = module901.default.min,
  N = module901.default.multiply,
  U = module901.default.neq,
  z = module901.default.or,
  K = module901.default.set,
  Y = module901.default.sub,
  $ = 1,
  J = 0,
  Q = 0,
  Z = -1,
  ee = 1,
  te = -1,
  ne = 60,
  re = 5,
  ae = {
    stiffness: 1e3,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
  ie = new module901.default.Value(0),
  oe = new module901.default.Value(1),
  se = (function (t, ...args) {
    module35.default(se, t);

    var module47 = se,
      S = E(),
      b = function () {
        var t,
          n = module34.default(module47);

        if (S) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function se() {
      var t;
      module24.default(this, se);

      (t = b.call(this, ...args)).handleEscape = function (n) {
        var o = t.props,
          s = o.open,
          l = o.onClose;
        if ('Escape' === n.key && s) l();
      };

      t.handleEndInteraction = function () {
        if (undefined !== t.interactionHandle) {
          ReactNative.InteractionManager.clearInteractionHandle(t.interactionHandle);
          t.interactionHandle = undefined;
        }
      };

      t.handleStartInteraction = function () {
        if (undefined === t.interactionHandle) t.interactionHandle = ReactNative.InteractionManager.createInteractionHandle();
      };

      t.getDrawerWidth = function () {
        var n = t.props,
          o = n.drawerStyle,
          s = n.dimensions,
          l = ReactNative.StyleSheet.flatten(o).width;

        if ('string' == typeof l && l.endsWith('%')) {
          var u = Number(l.replace(/%$/, ''));
          if (Number.isFinite(u)) return s.width * (u / 100);
        }

        return 'number' == typeof l ? l : 0;
      };

      t.clock = new P();
      t.isDrawerTypeFront = new D('front' === t.props.drawerType ? $ : J);
      t.isOpen = new D(t.props.open ? $ : J);
      t.nextIsOpen = new D(Z);
      t.isSwiping = new D(J);
      t.initialDrawerWidth = t.getDrawerWidth();
      t.gestureState = new D(module1949.GestureState.UNDETERMINED);
      t.touchX = new D(0);
      t.velocityX = new D(0);
      t.gestureX = new D(0);
      t.offsetX = new D(0);
      t.position = new D(t.props.open ? t.initialDrawerWidth * ('right' === t.props.drawerPosition ? te : ee) : 0);
      t.containerWidth = new D(t.props.dimensions.width);
      t.drawerWidth = new D(t.initialDrawerWidth);
      t.drawerOpacity = new D(t.initialDrawerWidth || 'permanent' === t.props.drawerType ? 1 : 0);
      t.drawerPosition = new D('right' === t.props.drawerPosition ? te : ee);
      t.touchDistanceFromDrawer = M(
        t.isDrawerTypeFront,
        M(G(t.drawerPosition, ee), _(Y(Y(t.touchX, t.gestureX), t.drawerWidth), 0), q(N(Y(Y(t.containerWidth, t.drawerWidth), Y(t.touchX, t.gestureX)), te), 0)),
        0
      );
      t.swipeDistanceThreshold = new D(undefined !== t.props.swipeDistanceThreshold ? t.props.swipeDistanceThreshold : ne);
      t.swipeVelocityThreshold = new D(t.props.swipeVelocityThreshold);
      t.currentOpenValue = t.props.open;
      t.isStatusBarHidden = false;
      t.manuallyTriggerSpring = new D(J);

      t.transitionTo = function (n) {
        var s = new D(0),
          l = new D(0),
          u = {
            position: t.position,
            time: new D(0),
            finished: new D(J),
            velocity: new D(0),
          };
        return x([
          M(V(t.clock), Q, [
            K(s, N(n, t.drawerWidth, t.drawerPosition)),
            K(l, 0),
            K(u.time, 0),
            K(u.finished, J),
            K(u.velocity, t.velocityX),
            K(t.isOpen, n),
            k(t.clock),
            H([], t.handleStartInteraction),
            K(t.manuallyTriggerSpring, J),
          ]),
          C(
            t.clock,
            u,
            T(
              T({}, ae),
              {},
              {
                toValue: s,
              }
            )
          ),
          M(u.finished, [
            K(t.touchX, 0),
            K(t.gestureX, 0),
            K(t.velocityX, 0),
            K(t.offsetX, 0),
            W(t.clock),
            H([t.isOpen], function (n) {
              var s = module12.default(n, 1)[0],
                l = Boolean(s);
              t.handleEndInteraction();
              if (l !== t.props.open) t.toggleDrawer(t.props.open);
            }),
          ]),
        ]);
      };

      t.dragX = x([
        X(
          t.isOpen,
          H([t.isOpen], function (n) {
            var s = module12.default(n, 1)[0],
              l = Boolean(s);
            t.currentOpenValue = l;

            if (l !== t.props.open) {
              if (l) t.props.onOpen();
              else t.props.onClose();
              t.pendingOpenValue = l;
              t.forceUpdate();
            }
          })
        ),
        X(t.nextIsOpen, M(U(t.nextIsOpen, Z), [M(V(t.clock), W(t.clock)), K(t.isOpen, t.nextIsOpen), K(t.gestureX, 0), K(t.nextIsOpen, Z)])),
        X(
          t.isSwiping,
          H([t.isSwiping], function (n) {
            var s = module12.default(n, 1)[0],
              l = t.props.keyboardDismissMode;

            if (s === $) {
              if ('on-drag' === l) ReactNative.Keyboard.dismiss();
              t.toggleStatusBar(true);
            } else t.toggleStatusBar(t.currentOpenValue);
          })
        ),
        X(t.gestureState, M(G(t.gestureState, module1949.GestureState.ACTIVE), H([], t.handleStartInteraction))),
        M(
          G(t.gestureState, module1949.GestureState.ACTIVE),
          [M(t.isSwiping, Q, [K(t.isSwiping, $), K(t.offsetX, t.position)]), K(t.position, j(t.offsetX, t.gestureX, t.touchDistanceFromDrawer)), W(t.clock)],
          [
            K(t.isSwiping, J),
            K(t.touchX, 0),
            t.transitionTo(
              M(
                t.manuallyTriggerSpring,
                t.isOpen,
                M(
                  z(B(R(I(t.gestureX), re), R(I(t.velocityX), t.swipeVelocityThreshold)), R(I(t.gestureX), t.swipeDistanceThreshold)),
                  M(G(t.drawerPosition, ee), R(M(G(t.velocityX, 0), t.gestureX, t.velocityX), 0), A(M(G(t.velocityX, 0), t.gestureX, t.velocityX), 0)),
                  t.isOpen
                )
              )
            ),
          ]
        ),
        t.position,
      ]);
      t.translateX = M(G(t.drawerPosition, te), q(_(N(t.drawerWidth, -1), t.dragX), 0), _(q(t.drawerWidth, t.dragX), 0));
      t.progress = M(G(t.drawerWidth, 0), 0, I(L(t.translateX, t.drawerWidth)));
      t.handleGestureEvent = F([
        {
          nativeEvent: {
            x: t.touchX,
            translationX: t.gestureX,
            velocityX: t.velocityX,
          },
        },
      ]);
      t.handleGestureStateChange = F([
        {
          nativeEvent: {
            state: function (n) {
              return K(t.gestureState, n);
            },
          },
        },
      ]);
      t.handleTapStateChange = F([
        {
          nativeEvent: {
            oldState: function (n) {
              return M(G(n, module1949.GestureState.ACTIVE), K(t.manuallyTriggerSpring, $));
            },
          },
        },
      ]);

      t.handleContainerLayout = function (n) {
        return t.containerWidth.setValue(n.nativeEvent.layout.width);
      };

      t.handleDrawerLayout = function (n) {
        t.drawerWidth.setValue(n.nativeEvent.layout.width);
        t.toggleDrawer(t.props.open);
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return t.drawerOpacity.setValue(1);
          });
        });
      };

      t.toggleDrawer = function (n) {
        if (t.currentOpenValue !== n) {
          t.nextIsOpen.setValue(n ? $ : J);
          t.currentOpenValue = n;
        }
      };

      t.toggleStatusBar = function (n) {
        var o = t.props,
          s = o.hideStatusBar,
          l = o.statusBarAnimation;

        if (s && t.isStatusBarHidden !== n) {
          t.isStatusBarHidden = n;
          ReactNative.StatusBar.setHidden(n, l);
        }
      };

      return t;
    }

    module25.default(se, [
      {
        key: 'componentDidMount',
        value: function () {
          var t, n;
          if ('web' === ReactNative.Platform.OS) null == (t = document) || null == (n = t.body) || null == n.addEventListener || n.addEventListener('keyup', this.handleEscape);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            o = n.open,
            s = n.drawerPosition,
            l = n.drawerType,
            u = n.swipeDistanceThreshold,
            c = n.swipeVelocityThreshold,
            p = n.hideStatusBar;
          if (!('boolean' == typeof this.pendingOpenValue && o === this.pendingOpenValue)) this.toggleDrawer(o);
          this.pendingOpenValue = undefined;
          if (o !== t.open && p) this.toggleStatusBar(o);
          if (t.drawerPosition !== s) this.drawerPosition.setValue('right' === s ? te : ee);
          if (t.drawerType !== l) this.isDrawerTypeFront.setValue('front' === l ? $ : J);
          if (t.swipeDistanceThreshold !== u) this.swipeDistanceThreshold.setValue(undefined !== u ? u : ne);
          if (t.swipeVelocityThreshold !== c) this.swipeVelocityThreshold.setValue(c);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t, n;
          if ((this.toggleStatusBar(false), this.handleEndInteraction(), 'web' === ReactNative.Platform.OS))
            null == (t = document) || null == (n = t.body) || null == n.removeEventListener || n.removeEventListener('keyup', this.handleEscape);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            s = o.open,
            l = o.gestureEnabled,
            u = o.swipeEnabled,
            c = o.drawerPosition,
            p = o.drawerType,
            f = o.swipeEdgeWidth,
            S = o.sceneContainerStyle,
            b = o.drawerStyle,
            T = o.overlayStyle,
            E = o.renderDrawerContent,
            P = o.renderSceneContent,
            D = o.gestureHandlerProps,
            V = 'permanent' === p || s,
            k = 'right' === c,
            W = 'front' === p || 'permanent' === p ? ie : this.translateX,
            C = 'permanent' === p ? ie : 'back' === p ? (ReactNative.I18nManager.isRTL ? N(Y(this.containerWidth, this.drawerWidth), k ? 1 : -1) : ie) : this.translateX,
            I = 'back' === p ? 0 : ReactNative.I18nManager.isRTL ? '100%' : N(this.drawerWidth, -1),
            j = k
              ? {
                  right: 0,
                  width: V ? undefined : f,
                }
              : {
                  left: 0,
                  width: V ? undefined : f,
                },
            B = 'permanent' === p ? oe : this.progress;
          return (
            <module1949.PanGestureHandler>
              {React.createElement(
                module901.default.View,
                {
                  onLayout: this.handleContainerLayout,
                  style: [
                    le.main,
                    {
                      flexDirection: 'permanent' !== p || k ? 'row' : 'row-reverse',
                    },
                  ],
                },
                React.createElement(
                  module901.default.View,
                  {
                    style: [
                      le.content,
                      {
                        transform: [
                          {
                            translateX: W,
                          },
                        ],
                      },
                      S,
                    ],
                  },
                  React.createElement(
                    ReactNative.View,
                    {
                      accessibilityElementsHidden: V && 'permanent' !== p,
                      importantForAccessibility: V && 'permanent' !== p ? 'no-hide-descendants' : 'auto',
                      style: le.content,
                    },
                    P({
                      progress: B,
                    })
                  ),
                  'permanent' === p
                    ? null
                    : 'web' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'macos' === ReactNative.Platform.OS
                    ? React.createElement(
                        ReactNative.TouchableWithoutFeedback,
                        {
                          onPress: l
                            ? function () {
                                return t.toggleDrawer(false);
                              }
                            : undefined,
                        },
                        React.createElement(module1961.default, {
                          progress: B,
                          style: T,
                        })
                      )
                    : React.createElement(
                        module1949.TapGestureHandler,
                        {
                          enabled: l,
                          onHandlerStateChange: this.handleTapStateChange,
                        },
                        React.createElement(module1961.default, {
                          progress: B,
                          style: T,
                        })
                      )
                ),
                React.createElement(module901.default.Code, {
                  exec: this.containerWidth,
                }),
                'permanent' === p
                  ? null
                  : React.createElement(module901.default.Code, {
                      exec: x([
                        X(this.manuallyTriggerSpring, [
                          M(G(this.manuallyTriggerSpring, $), [
                            K(this.nextIsOpen, J),
                            H([], function () {
                              return (t.currentOpenValue = false);
                            }),
                          ]),
                        ]),
                      ]),
                    }),
                React.createElement(
                  module901.default.View,
                  {
                    accessibilityViewIsModal: V && 'permanent' !== p,
                    removeClippedSubviews: 'ios' !== ReactNative.Platform.OS,
                    onLayout: this.handleDrawerLayout,
                    style: [
                      le.container,
                      {
                        transform: [
                          {
                            translateX: C,
                          },
                        ],
                        opacity: this.drawerOpacity,
                      },
                      'permanent' === p
                        ? k
                          ? {
                              right: 0,
                            }
                          : {
                              left: 0,
                            }
                        : [
                            le.nonPermanent,
                            k
                              ? {
                                  right: I,
                                }
                              : {
                                  left: I,
                                },
                            {
                              zIndex: 'back' === p ? -1 : 0,
                            },
                          ],
                      b,
                    ],
                  },
                  E({
                    progress: B,
                  })
                )
              )}
            </module1949.PanGestureHandler>
          );
        },
      },
    ]);
    return se;
  })(React.Component);

exports.default = se;
se.defaultProps = {
  drawerPosition: ReactNative.I18nManager.isRTL ? 'left' : 'right',
  drawerType: 'front',
  gestureEnabled: true,
  swipeEnabled: 'web' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'macos' !== ReactNative.Platform.OS,
  swipeEdgeWidth: 32,
  swipeVelocityThreshold: 500,
  keyboardDismissMode: 'on-drag',
  hideStatusBar: false,
  statusBarAnimation: 'slide',
};
var le = ReactNative.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxWidth: '100%',
  },
  nonPermanent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '80%',
  },
  content: {
    flex: 1,
  },
  main: T(
    {
      flex: 1,
    },
    ReactNative.Platform.select({
      web: null,
      default: {
        overflow: 'hidden',
      },
    })
  ),
});
