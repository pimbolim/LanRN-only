var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = P(require('react')),
  module900 = require('./900'),
  module901 = P(require('./901')),
  module961 = require('./961'),
  module1134 = require('./1134'),
  module1140 = require('./1140'),
  y = ['nativeGestureRef', 'gestureType', 'style', 'children'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

function P(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = p(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
      else o[s] = t[s];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}

var h = React.memo(function (t) {
  var l = t.nativeGestureRef,
    p = t.gestureType,
    P = undefined === p ? 'HANDLE' : p,
    h = t.style,
    G = t.children,
    O = module53.default(t, y),
    b = React.useRef(null),
    M = module1134.useBottomSheetInternal(),
    Y = M.enabled,
    j = M.rootTapGestureRef,
    E = M.handlePanGestureState,
    T = M.handlePanGestureTranslationY,
    w = M.handlePanGestureVelocityY,
    _ = M.contentPanGestureState,
    H = M.contentPanGestureTranslationY,
    R = M.contentPanGestureVelocityY,
    S = React.useMemo(
      function () {
        return l ? [j, l] : j;
      },
      [j, l]
    ),
    W = React.useMemo(
      function () {
        return h ? [module1140.styles.container, h] : module1140.styles.container;
      },
      [h]
    ),
    k = React.useMemo(
      function () {
        return 'CONTENT' === P
          ? module901.event([
              {
                nativeEvent: {
                  state: _,
                  translationY: H,
                  velocityY: R,
                },
              },
            ])
          : module901.event([
              {
                nativeEvent: {
                  state: E,
                  translationY: T,
                  velocityY: w,
                },
              },
            ]);
      },
      [P]
    );
  return React.default.createElement(
    module961.PanGestureHandler,
    {
      ref: b,
      enabled: Y,
      simultaneousHandlers: S,
      shouldCancelWhenOutside: false,
      onGestureEvent: k,
      onHandlerStateChange: k,
    },
    React.default.createElement(
      module901.default.View,
      module11.default(
        {
          style: W,
        },
        O
      ),
      G
    )
  );
}, module900.default);
exports.default = h;
