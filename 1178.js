var module11 = require('./11'),
  module20 = require('./20'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = _(require('react')),
  module900 = require('./900'),
  module1107 = require('./1107'),
  module901 = _(require('./901')),
  module898 = require('./898'),
  module1179 = require('./1179'),
  O = [
    'initialSnapIndex',
    'snapPoints',
    'animatedPositionIndex',
    'allowTouchThroughOverlay',
    'overlayComponent',
    'overlayOpacity',
    'dismissOnOverlayPress',
    'dismissOnScrollDown',
    'onChange',
  ];

function y(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (y = function (n) {
    return n ? o : t;
  })(n);
}

function _(n, t) {
  if (!t && n && n.__esModule) return n;
  if (null === n || ('object' != typeof n && 'function' != typeof n))
    return {
      default: n,
    };
  var o = y(t);
  if (o && o.has(n)) return o.get(n);
  var u = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in n)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(n, c)) {
      var s = l ? Object.getOwnPropertyDescriptor(n, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
      else u[c] = n[c];
    }

  u.default = n;
  if (o) o.set(n, u);
  return u;
}

var module901 = require('./901'),
  C = module901.interpolate,
  S = module901.interpolateNode || C,
  T = React.forwardRef(function (n, c) {
    var y = n.content,
      _ = n.configs,
      P = n.unmount,
      C = _.initialSnapIndex,
      T = undefined === C ? 0 : C,
      E = _.snapPoints,
      b = _.animatedPositionIndex,
      h = _.allowTouchThroughOverlay,
      I = undefined === h ? module1179.DEFAULT_ALLOW_TOUCH_THROUGH_OVERLAY : h,
      L = _.overlayComponent,
      M = _.overlayOpacity,
      R = undefined === M ? module1179.DEFAULT_OVERLAY_OPACITY : M,
      x = _.dismissOnOverlayPress,
      D = undefined === x ? module1179.DEFAULT_DISMISS_ON_OVERLAY_PRESS : x,
      k = _.dismissOnScrollDown,
      w = undefined === k ? module1179.DEFAULT_DISMISS_ON_SCROLL_DOWN : k,
      A = _.onChange,
      j = module53.default(_, O),
      U = React.useRef(null),
      F = React.useRef(false),
      W = React.useRef(0),
      H = module1107.useValue(0),
      N = React.useMemo(
        function () {
          return S(H, {
            inputRange: [0, 1],
            outputRange: [0, R],
            extrapolate: module901.Extrapolate.CLAMP,
          });
        },
        [H, R]
      ),
      V = React.useMemo(
        function () {
          return w ? 0 : -1;
        },
        [w]
      ),
      Y = React.useMemo(
        function () {
          return w ? [0].concat(module20.default(E)) : E;
        },
        [E, w]
      ),
      G = React.useMemo(
        function () {
          return I ? 'none' : 'auto';
        },
        [I]
      ),
      q = React.useCallback(
        function (n) {
          if (A) A(n);

          if (!F.current) {
            W.current = n;
            if (n < (w ? 1 : 0)) P();
          }
        },
        [P, A, w]
      ),
      z = React.useCallback(
        function () {
          var n;
          if (F.current) P();
          else if (!(null == (n = U.current))) n.close();
        },
        [P]
      ),
      B = React.useCallback(
        function () {
          var n, t;
          if (w) {
            if (!(null == (n = U.current))) n.snapTo(1);
          } else if (!(null == (t = U.current))) t.collapse();
        },
        [w]
      ),
      J = React.useCallback(
        function (n) {
          var t;
          if (!(null == (t = U.current))) t.snapTo(n + (w ? 1 : 0));
        },
        [w]
      ),
      K = React.useCallback(function () {
        var n;
        F.current = true;
        if (!(null == (n = U.current))) n.close();
      }, []),
      Q = React.useCallback(function () {
        var n;
        F.current = false;
        if (!(null == (n = U.current))) n.snapTo(W.current);
      }, []),
      X = React.useCallback(function () {
        var n;
        if (!(null == (n = U.current))) n.close();
      }, []);
    React.useImperativeHandle(c, function () {
      return {
        close: z,
        snapTo: J,
        expand: U.current.expand,
        collapse: B,
        temporaryCloseSheet: K,
        restoreSheetPosition: Q,
      };
    });
    React.useEffect(function () {
      var n;
      if (!(null == (n = U.current))) n.snapTo(T + (w ? 1 : 0));
    }, []);
    return React.default.createElement(
      React.default.Fragment,
      null,
      L &&
        React.default.createElement(
          L,
          module11.default(
            {
              animatedOpacity: N,
              pointerEvents: G,
            },
            D
              ? {
                  onPress: X,
                }
              : {}
          )
        ),
      b &&
        React.default.createElement(module901.default.Code, {
          exec: module901.set(b, H),
        }),
      React.default.createElement(
        module898.default,
        module11.default(
          {
            ref: U,
          },
          j,
          {
            initialSnapIndex: V,
            snapPoints: Y,
            animatedPositionIndex: H,
            onChange: q,
          }
        ),
        y
      )
    );
  }),
  E = React.memo(T, module900.default);

exports.default = E;
