var module11 = require('./11'),
  module47 = require('./47'),
  React = T(require('react')),
  module900 = require('./900'),
  module3 = require('./3'),
  module901 = T(require('./901')),
  module961 = require('./961'),
  module1107 = require('./1107'),
  module1132 = require('./1132'),
  module1141 = require('./1141'),
  module1144 = require('./1144'),
  module1146 = require('./1146'),
  module1134 = require('./1134'),
  module1148 = require('./1148'),
  module1151 = require('./1151'),
  module1147 = require('./1147'),
  module1154 = require('./1154'),
  module1155 = require('./1155');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function T(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = S(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
      else l[s] = t[s];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

function G(t, n) {
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

function M(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      G(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      G(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var module901 = require('./901'),
  j = module901.interpolate,
  D = module901.interpolateNode || j;

module901.default.addWhitelistedUIProps({
  decelerationRate: true,
});
var R = React.forwardRef(function (t, o) {
    var u = t.animationDuration,
      S = undefined === u ? module1154.DEFAULT_ANIMATION_DURATION : u,
      T = t.animationEasing,
      G = undefined === T ? module1154.DEFAULT_ANIMATION_EASING : T,
      I = t.initialSnapIndex,
      j = undefined === I ? 0 : I,
      R = t.snapPoints,
      Y = t.topInset,
      A = undefined === Y ? 0 : Y,
      N = t.enabled,
      k = undefined === N || N,
      _ = t.animatedPosition,
      H = t.animatedPositionIndex,
      V = t.onChange,
      L = t.handleComponent,
      F = undefined === L ? module1141.default : L,
      U = t.backgroundComponent,
      W = undefined === U ? null : U,
      q = t.children;
    module3.default(R, "'snapPoints' was not provided! please provide at least one snap point.");
    module3.default(R.length > 0, "'snapPoints' was provided with no points! please provide at least one snap point.");
    module3.default('number' == typeof j, "'initialSnapIndex' was provided but with wrong type ! expected type is a number.");
    module3.default(j >= -1 && j <= R.length - 1, "'initialSnapIndex' was provided but out of the provided snap points range! expected value to be between -1, " + (R.length - 1));
    module3.default('number' == typeof A, "'topInset' was provided but with wrong type ! expected type is a number.");
    module3.default('number' == typeof S, "'animationDuration' was provided but with wrong type ! expected type is a number.");
    module3.default(S > 0, "'animationDuration' was provided but the value is very low! expected value to be greater than 0");
    module3.default('function' == typeof G, "'animationEasing' was provided but with wrong type ! expected type is a Animated.EasingFunction.");
    var B = React.useRef(j),
      z = React.useRef(null),
      J = React.useRef(null),
      K = module1134.useScrollable(),
      Q = K.scrollableContentOffsetY,
      X = K.setScrollableRef,
      Z = K.removeScrollableRef,
      $ = K.scrollToTop,
      ee = K.flashScrollableIndicators,
      te = React.useMemo(
        function () {
          var t = module1148.normalizeSnapPoints(R, A),
            n = t[t.length - 1];
          return {
            snapPoints: t.map(function (t) {
              return n - t;
            }),
            sheetHeight: n,
          };
        },
        [R, A]
      ),
      ne = te.snapPoints,
      ae = te.sheetHeight,
      re = React.useMemo(
        function () {
          return j < 0 ? ae : ne[j];
        },
        [j, ae, ne]
      ),
      oe = module1107.usePanGestureHandler(),
      le = oe.state,
      ue = oe.translation.y,
      ie = oe.velocity.y,
      se = oe.gestureHandler,
      ce = module1107.usePanGestureHandler(),
      de = ce.state,
      fe = ce.translation.y,
      pe = ce.velocity.y,
      be = module1107.useTapGestureHandler(),
      me = be.state,
      ve = be.gestureHandler,
      he = module1146.useTransition({
        animationDuration: S,
        animationEasing: G,
        contentPanGestureState: de,
        contentPanGestureTranslationY: fe,
        contentPanGestureVelocityY: pe,
        handlePanGestureState: le,
        handlePanGestureTranslationY: ue,
        handlePanGestureVelocityY: ie,
        scrollableContentOffsetY: Q,
        snapPoints: ne,
        initialPosition: re,
      }),
      ye = he.position,
      Pe = he.manualSnapToPoint,
      ge = he.currentPosition,
      Oe = he.currentGesture,
      we = React.useMemo(
        function () {
          return D(ye, {
            inputRange: ne.slice().reverse(),
            outputRange: ne
              .slice()
              .map(function (t, n) {
                return n;
              })
              .reverse(),
            extrapolate: module901.Extrapolate.CLAMP,
          });
        },
        [ye, ne]
      ),
      Ee = React.useMemo(
        function () {
          return module901.cond(module901.greaterThan(ye, 0), 0.001, module1154.NORMAL_DECELERATION_RATE);
        },
        [ye]
      ),
      xe = React.useMemo(
        function () {
          return M(
            M({}, module1155.styles.container),
            {},
            {
              height: ae,
            }
          );
        },
        [ae]
      ),
      Ce = React.useMemo(
        function () {
          return M(
            M({}, module1155.styles.container),
            {},
            {
              height: ae,
              transform: [
                {
                  translateY: ye,
                },
              ],
            }
          );
        },
        [ae, ye]
      ),
      Se = React.useCallback(
        function () {
          var t = B.current ** 0;

          if (t === ne.length - 1) {
            ee();
            z.current.setNativeProps({
              maxDeltaY: 0,
            });
          } else
            z.current.setNativeProps({
              maxDeltaY: ne[t],
            });
        },
        [ne, ee]
      ),
      Te = module1134.useStableCallback(function (t) {
        if (V) V(t);
      }),
      Ge = React.useCallback(
        function (t) {
          X(t);
          Se();
        },
        [X, Se]
      ),
      Me = React.useCallback(
        function (t) {
          module3.default(t >= -1 && t <= ne.length - 1, "'index' was provided but out of the provided snap points range! expected value to be between -1, " + (ne.length - 1));
          Pe.setValue(ne[t]);
        },
        [ne, Pe]
      ),
      Ie = React.useCallback(
        function () {
          Pe.setValue(ae);
        },
        [ae, Pe]
      ),
      je = React.useCallback(
        function () {
          Pe.setValue(ne[ne.length - 1]);
        },
        [ne, Pe]
      ),
      De = React.useCallback(
        function () {
          Pe.setValue(ne[0]);
        },
        [ne, Pe]
      ),
      Re = React.useMemo(
        function () {
          return {
            enabled: k,
            rootTapGestureRef: z,
            handlePanGestureState: le,
            handlePanGestureTranslationY: ue,
            handlePanGestureVelocityY: ie,
            contentPanGestureState: de,
            contentPanGestureTranslationY: fe,
            contentPanGestureVelocityY: pe,
            scrollableContentOffsetY: Q,
            decelerationRate: Ee,
            setScrollableRef: Ge,
            removeScrollableRef: Z,
          };
        },
        [k]
      ),
      Ye = React.useMemo(
        function () {
          return {
            snapTo: Me,
            expand: je,
            collapse: De,
            close: Ie,
          };
        },
        [Me, je, De, Ie]
      );
    React.useImperativeHandle(o, function () {
      return {
        snapTo: Me,
        expand: je,
        collapse: De,
        close: Ie,
      };
    });
    module901.useCode(
      function () {
        return module901.onChange(ge, [
          module901.call([ge], function (t) {
            var n = ne.indexOf(t[0]);

            if (!(-1 === n && t[0] !== ae)) {
              B.current = n;
              Se();
              Te(n);
            }
          }),
        ]);
      },
      [ne, Se]
    );
    module901.useCode(function () {
      return module901.cond(
        module901.and(module901.eq(me, module961.State.FAILED), module901.eq(Oe, module1147.GESTURE.CONTENT), module901.neq(ye, 0)),
        module901.call([], function () {
          $();
        })
      );
    }, []);
    return React.default.createElement(
      React.default.Fragment,
      null,
      React.default.createElement(
        module1144.default,
        module11.default(
          {
            ref: z,
            initialMaxDeltaY: ne[j ** 0],
            style: xe,
          },
          ve
        ),
        React.default.createElement(
          module901.default.View,
          {
            style: Ce,
          },
          W &&
            React.default.createElement(W, {
              pointerEvents: 'none',
            }),
          React.default.createElement(
            module1151.BottomSheetProvider,
            {
              value: Ye,
            },
            React.default.createElement(
              module961.PanGestureHandler,
              module11.default(
                {
                  enabled: k,
                  ref: J,
                  simultaneousHandlers: z,
                  shouldCancelWhenOutside: false,
                },
                se
              ),
              React.default.createElement(
                module901.default.View,
                null,
                React.default.createElement(F, {
                  animatedPositionIndex: we,
                })
              )
            ),
            React.default.createElement(
              module1151.BottomSheetInternalProvider,
              {
                value: Re,
              },
              React.default.createElement(
                module1132.default,
                {
                  style: module1155.styles.contentContainer,
                },
                q
              )
            )
          )
        )
      ),
      _ &&
        React.default.createElement(module901.default.Code, {
          exec: module901.set(_, module901.sub(ae, ye)),
        }),
      H &&
        React.default.createElement(module901.default.Code, {
          exec: module901.set(H, we),
        })
    );
  }),
  Y = React.memo(R, module900.default);
exports.default = Y;
