var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (n, t) {
    if (!t && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var o = p(t);
    if (o && o.has(n)) return o.get(n);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in n)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(n, c)) {
        var f = l ? Object.getOwnPropertyDescriptor(n, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
        else u[c] = n[c];
      }

    u.default = n;
    if (o) o.set(n, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1535 = require('./1535'),
  f = ['onFormComplete', 'cardStyle'];

function p(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (p = function (n) {
    return n ? o : t;
  })(n);
}

var s = ReactNative.requireNativeComponent('CardForm'),
  y = React.forwardRef(function (n, p) {
    var y = n.onFormComplete,
      v = n.cardStyle,
      b = module53.default(n, f),
      C = React.useRef(null),
      M = React.useCallback(
        function (n) {
          var t = n.nativeEvent,
            o = {
              last4: t.last4,
              expiryMonth: t.expiryMonth,
              expiryYear: t.expiryYear,
              complete: t.complete,
              brand: t.brand,
              country: t.country,
              postalCode: t.postalCode,
            };
          if (t.hasOwnProperty('number')) o.number = t.number || '';
          if (!(null == y)) y(o);
        },
        [y]
      ),
      O = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(C.current), 'focus', []);
      },
      w = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(C.current), 'blur', []);
      };

    React.useImperativeHandle(p, function () {
      return {
        focus: O,
        blur: w,
      };
    });
    var F = React.useCallback(function (n) {
      if (n.nativeEvent.focusedField) module1535.focusInput(C.current);
    }, []);
    React.useLayoutEffect(
      function () {
        var n = C.current;

        if (null !== n) {
          module1535.registerInput(n);
          return function () {
            module1535.unregisterInput(n);
            if (module1535.currentlyFocusedInput() === n) n.blur();
          };
        } else return function () {};
      },
      [C]
    );
    return React.default.createElement(
      s,
      module11.default(
        {
          ref: C,
          onFormComplete: M,
          cardStyle: {
            backgroundColor: null == v ? undefined : v.backgroundColor,
          },
          onFocusChange: F,
        },
        b
      )
    );
  });
exports.CardForm = y;
