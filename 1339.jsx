var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = I(o);
    if (n && n.has(t)) return n.get(t);
    var s = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, l, c);
        else s[l] = t[l];
      }

    s.default = t;
    if (n) n.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module1340 = require('./1340'),
  module1341 = require('./1341'),
  module1342 = require('./1342'),
  module1354 = require('./1354'),
  module1333 = require('./1333'),
  module1331 = require('./1331'),
  module1328 = require('./1328'),
  module1367 = require('./1367');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (I = function (t) {
    return t ? n : o;
  })(t);
}

function R() {
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

function D(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (o)
      s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, s);
  }

  return n;
}

function H(t) {
  for (var o = 1; o < arguments.length; o++) {
    var n = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      D(Object(n), true).forEach(function (o) {
        module47.default(t, o, n[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      D(Object(n)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
      });
  }

  return t;
}

var E = Object.freeze({
    options: {},
  }),
  j = function (t, o, n, s, u, l) {
    return t.reduce(function (t, c) {
      var p = (s[c.key] || {}).options,
        h = undefined === p ? {} : p,
        y = ReactNative.StyleSheet.flatten(h.headerStyle || {}),
        v = 'number' == typeof y.height ? y.height : l[c.key],
        b = H(H({}, o), h.safeAreaInsets),
        k = h.headerStatusBarHeight,
        O = undefined === k ? (n ? 0 : b.top) : k;
      t[c.key] = 'number' == typeof v ? v : module1342.getDefaultHeaderHeight(u, O);
      return t;
    }, {});
  },
  C = function (t, o, n) {
    var s = ((null == n ? undefined : n.options) || {}).gestureDirection,
      u = undefined === s ? ('modal' === t ? module1333.ModalTransition.gestureDirection : module1333.DefaultTransition.gestureDirection) : s;
    return module1367.default(o, u);
  },
  x = function (t, o, n, s) {
    var u = C(
      t,
      {
        width: 1 ** n.width,
        height: 1 ** n.height,
      },
      s
    );
    return u > 0
      ? o.interpolate({
          inputRange: [0, u],
          outputRange: [1, 0],
        })
      : o.interpolate({
          inputRange: [u, 0],
          outputRange: [0, 1],
        });
  },
  A = (function (t) {
    module35.default(D, t);

    var module1342 = D,
      module1367 = R(),
      I = function () {
        var t,
          o = module34.default(module1342);

        if (module1367) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var o;
      module24.default(this, D);

      (o = I.call(this, t)).handleLayout = function (t) {
        var n = t.nativeEvent.layout,
          s = n.height,
          u = n.width,
          l = {
            width: u,
            height: s,
          };
        o.setState(function (t, o) {
          return s === t.layout.height && u === t.layout.width
            ? null
            : {
                layout: l,
                headerHeights: j(o.routes, o.insets, o.isParentHeaderShown, t.descriptors, l, t.headerHeights),
              };
        });
      };

      o.handleHeaderLayout = function (t) {
        var n = t.route,
          s = t.height;
        o.setState(function (t) {
          var o = t.headerHeights;
          return o[n.key] === s
            ? null
            : {
                headerHeights: H(H({}, o), {}, module47.default({}, n.key, s)),
              };
        });
      };

      o.getFocusedRoute = function () {
        var t = o.props.state;
        return t.routes[t.index];
      };

      o.getPreviousScene = function (t) {
        var n = t.route,
          s = o.props.getPreviousRoute,
          u = o.state.scenes,
          l = s({
            route: n,
          });
        if (l)
          return u.find(function (t) {
            return t.route.key === l.key;
          });
      };

      var s = ReactNative.Dimensions.get('window'),
        u = s.height,
        l = undefined === u ? 0 : u,
        c = s.width,
        h = undefined === c ? 0 : c;
      o.state = {
        routes: [],
        scenes: [],
        gestures: {},
        layout: {
          height: l,
          width: h,
        },
        descriptors: o.props.descriptors,
        headerHeights: {},
      };
      return o;
    }

    module25.default(
      D,
      [
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              s = n.mode,
              u = n.insets,
              l = n.descriptors,
              c = n.state,
              p = n.routes,
              S = n.closingRouteKeys,
              w = n.onOpenRoute,
              I = n.onCloseRoute,
              R = n.getGesturesEnabled,
              D = n.renderHeader,
              E = n.renderScene,
              j = n.headerMode,
              C = n.isParentHeaderShown,
              x = n.onTransitionStart,
              A = n.onTransitionEnd,
              _ = n.onPageChangeStart,
              T = n.onPageChangeConfirm,
              F = n.onPageChangeCancel,
              G = n.onGestureStart,
              L = n.onGestureEnd,
              B = n.onGestureCancel,
              N = n.detachInactiveScreens,
              V = undefined === N ? 'web' === ReactNative.Platform.OS || module1341.shouldUseActivityState : N,
              W = this.state,
              z = W.scenes,
              K = W.layout,
              U = W.gestures,
              q = W.headerHeights,
              J = c.routes[c.index],
              Q = l[J.key],
              X = Q ? Q.options : {},
              Y = q[J.key],
              Z = 'modal' === s ? module1333.ModalTransition : module1333.DefaultTransition;
            if ('screen' === j)
              Z = H(
                H({}, Z),
                {},
                {
                  headerStyleInterpolator: module1331.forNoAnimation,
                }
              );

            for (
              var $ = X.safeAreaInsets || {},
                ee = $.top,
                te = undefined === ee ? u.top : ee,
                re = $.right,
                oe = undefined === re ? u.right : re,
                ne = $.bottom,
                ae = undefined === ne ? u.bottom : ne,
                ie = $.left,
                se = undefined === ie ? u.left : ie,
                ue = 1,
                le = z.length - 1;
              le >= 0;
              le--
            ) {
              var de = z[le].descriptor.options.detachPreviousScreen;
              if (false !== (undefined === de ? 'modal' !== s || le !== z.length - 1 : de)) break;
              ue++;
            }

            var ce =
                'float' === j &&
                this.state.scenes.slice(-2).some(function (t) {
                  var o = t.descriptor,
                    n = o ? o.options : {},
                    s = n.headerTransparent,
                    u = n.headerShown;
                  return !(!s && false !== (undefined === u || u));
                }),
              pe =
                'float' === j ? (
                  <React.Fragment key="header">
                    {D({
                      mode: 'float',
                      layout: K,
                      insets: {
                        top: te,
                        right: oe,
                        bottom: ae,
                        left: se,
                      },
                      scenes: z,
                      getPreviousScene: this.getPreviousScene,
                      getFocusedRoute: this.getFocusedRoute,
                      onContentHeightChange: this.handleHeaderLayout,
                      gestureDirection: undefined !== X.gestureDirection ? X.gestureDirection : Z.gestureDirection,
                      styleInterpolator: undefined !== X.headerStyleInterpolator ? X.headerStyleInterpolator : Z.headerStyleInterpolator,
                      style: [
                        M.floating,
                        ce && [
                          {
                            height: Y,
                          },
                          M.absolute,
                        ],
                      ],
                    })}
                  </React.Fragment>
                ) : null,
              he = (null == module1340.screensEnabled ? undefined : module1340.screensEnabled()) && V;
            return (
              <React.Fragment>
                {ce ? null : pe}
                <module1341.MaybeScreenContainer enabled={he} style={M.container} onLayout={this.handleLayout}>
                  {p.map(function (n, l, c) {
                    var p = J.key === n.key,
                      y = U[n.key],
                      k = z[l],
                      O = 1;
                    if (module1341.shouldUseActivityState || 'web' === ReactNative.Platform.OS) {
                      if (l < c.length - ue - 1) O = 0;
                      else {
                        var H = z[c.length - 1],
                          M = l === c.length - 1 ? 2 : l >= c.length - ue ? 1 : 0;
                        O = H
                          ? H.progress.current.interpolate({
                              inputRange: [0, 0.99, 1],
                              outputRange: [1, 1, M],
                              extrapolate: 'clamp',
                            })
                          : 1;
                      }
                    } else
                      O = k.progress.next
                        ? k.progress.next.interpolate({
                            inputRange: [0, 0.99, 1],
                            outputRange: [1, 1, 0],
                            extrapolate: 'clamp',
                          })
                        : 1;
                    var N = k.descriptor ? k.descriptor.options : {},
                      V = N.safeAreaInsets,
                      W = N.headerShown,
                      Q = undefined === W || W,
                      X = N.headerTransparent,
                      Y = N.cardShadowEnabled,
                      $ = N.cardOverlayEnabled,
                      ee = N.cardOverlay,
                      te = N.cardStyle,
                      re = N.animationEnabled,
                      oe = N.gestureResponseDistance,
                      ne = N.gestureVelocityImpact,
                      ae = N.gestureDirection,
                      ie = undefined === ae ? Z.gestureDirection : ae,
                      se = N.transitionSpec,
                      le = undefined === se ? Z.transitionSpec : se,
                      de = N.cardStyleInterpolator,
                      pe = undefined === de ? (false === re ? module1328.forNoAnimation : Z.cardStyleInterpolator) : de,
                      fe = N.headerStyleInterpolator,
                      ge = {
                        gestureDirection: ie,
                        transitionSpec: le,
                        cardStyleInterpolator: pe,
                        headerStyleInterpolator: undefined === fe ? Z.headerStyleInterpolator : fe,
                      };

                    if (l !== c.length - 1) {
                      var ye = z[l + 1];

                      if (ye) {
                        var ve = ye.descriptor ? ye.descriptor.options : {},
                          Se = ve.animationEnabled,
                          me = ve.gestureDirection,
                          be = undefined === me ? Z.gestureDirection : me,
                          ke = ve.transitionSpec,
                          Oe = undefined === ke ? Z.transitionSpec : ke,
                          Pe = ve.cardStyleInterpolator,
                          we = undefined === Pe ? (false === Se ? module1328.forNoAnimation : Z.cardStyleInterpolator) : Pe,
                          Ie = ve.headerStyleInterpolator;
                        ge = {
                          gestureDirection: be,
                          transitionSpec: Oe,
                          cardStyleInterpolator: we,
                          headerStyleInterpolator: undefined === Ie ? Z.headerStyleInterpolator : Ie,
                        };
                      }
                    }

                    var Re = V || {},
                      De = Re.top,
                      He = undefined === De ? u.top : De,
                      Ee = Re.right,
                      je = undefined === Ee ? u.right : Ee,
                      Ce = Re.bottom,
                      xe = undefined === Ce ? u.bottom : Ce,
                      Ae = Re.left,
                      Me = undefined === Ae ? u.left : Ae,
                      _e = 'none' !== j && false !== Q ? q[n.key] : 0;

                    return (
                      <module1341.MaybeScreen key={n.key} style={ReactNative.StyleSheet.absoluteFill} enabled={he} active={O} pointerEvents="box-none">
                        <module1354.default />
                      </module1341.MaybeScreen>
                    );
                  })}
                </module1341.MaybeScreenContainer>
                {ce ? pe : null}
              </React.Fragment>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, o) {
            if (t.routes === o.routes && t.descriptors === o.descriptors) return null;
            var n = t.routes.reduce(function (n, s) {
              var u = t.descriptors[s.key],
                l = ((null == u ? undefined : u.options) || {}).animationEnabled;
              n[s.key] = o.gestures[s.key] || new ReactNative.Animated.Value(t.openingRouteKeys.includes(s.key) && false !== l ? C(t.mode, o.layout, u) : 0);
              return n;
            }, {});
            return {
              routes: t.routes,
              scenes: t.routes.map(function (s, u, l) {
                var c = l[u - 1],
                  p = l[u + 1],
                  h = o.scenes[u],
                  f = n[s.key],
                  y = c ? n[c.key] : undefined,
                  v = p ? n[p.key] : undefined,
                  S = t.descriptors[s.key] || o.descriptors[s.key] || (h ? h.descriptor : E),
                  b = t.descriptors[null == p ? undefined : p.key] || o.descriptors[null == p ? undefined : p.key],
                  k = t.descriptors[null == c ? undefined : c.key] || o.descriptors[null == c ? undefined : c.key],
                  O = {
                    route: s,
                    descriptor: S,
                    progress: {
                      current: x(t.mode, f, o.layout, S),
                      next: v ? x(t.mode, v, o.layout, b) : undefined,
                      previous: y ? x(t.mode, y, o.layout, k) : undefined,
                    },
                    __memo: [s, o.layout, S, b, k, f, v, y],
                  };
                return h &&
                  O.__memo.every(function (t, o) {
                    return h.__memo[o] === t;
                  })
                  ? h
                  : O;
              }),
              gestures: n,
              descriptors: t.descriptors,
              headerHeights: j(t.routes, t.insets, t.isParentHeaderShown, o.descriptors, o.layout, o.headerHeights),
            };
          },
        },
      ]
    );
    return D;
  })(React.Component);

exports.default = A;
var M = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  floating: {
    zIndex: 1,
  },
});
