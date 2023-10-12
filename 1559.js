var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (o, n) {
    if (!n && o && o.__esModule) return o;
    if (null === o || ('object' != typeof o && 'function' != typeof o))
      return {
        default: o,
      };
    var l = p(n);
    if (l && l.has(o)) return l.get(o);
    var t = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in o)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(o, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(o, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(t, c, f);
        else t[c] = o[c];
      }

    t.default = o;
    if (l) l.set(o, t);
    return t;
  })(require('react')),
  ReactNative = require('react-native'),
  module1535 = require('./1535'),
  f = ['onCardChange', 'onFocus', 'onBlur', 'cardStyle', 'placeholder', 'postalCodeEnabled'];

function p(o) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (p = function (o) {
    return o ? l : n;
  })(o);
}

var s = ReactNative.requireNativeComponent('CardField'),
  v = React.forwardRef(function (o, p) {
    var v = o.onCardChange,
      C = o.onFocus,
      b = o.onBlur,
      y = o.cardStyle,
      h = o.placeholder,
      M = o.postalCodeEnabled,
      x = module53.default(o, f),
      w = React.useRef(null),
      E = React.useCallback(
        function (o) {
          var n = o.nativeEvent,
            l = {
              last4: n.last4,
              expiryMonth: n.expiryMonth,
              expiryYear: n.expiryYear,
              complete: n.complete,
              brand: n.brand,
              validExpiryDate: n.validExpiryDate,
              validNumber: n.validNumber,
              validCVC: n.validCVC,
            };
          if (n.hasOwnProperty('postalCode')) l.postalCode = n.postalCode || '';
          if (n.hasOwnProperty('number')) l.number = n.number || '';
          if (!(null == v)) v(l);
        },
        [v]
      ),
      O = React.useCallback(
        function (o) {
          var n = o.nativeEvent.focusedField;

          if (n) {
            module1535.focusInput(w.current);
            if (!(null == C)) C(n);
          } else if (!(null == b)) b();
        },
        [C, b]
      ),
      F = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(w.current), 'focus', []);
      },
      I = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(w.current), 'blur', []);
      },
      P = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(w.current), 'clear', []);
      };

    React.useImperativeHandle(p, function () {
      return {
        focus: F,
        blur: I,
        clear: P,
      };
    });
    React.useLayoutEffect(
      function () {
        var o = w.current;

        if (null !== o) {
          module1535.registerInput(o);
          return function () {
            module1535.unregisterInput(o);
            if (module1535.currentlyFocusedInput() === o) o.blur();
          };
        } else return function () {};
      },
      [w]
    );
    return React.default.createElement(
      s,
      module11.default(
        {
          ref: w,
          onCardChange: E,
          onFocusChange: O,
          postalCodeEnabled: null == M || M,
          cardStyle: {
            backgroundColor: null == y ? undefined : y.backgroundColor,
            borderColor: null == y ? undefined : y.borderColor,
            borderWidth: null == y ? undefined : y.borderWidth,
            borderRadius: null == y ? undefined : y.borderRadius,
            cursorColor: null == y ? undefined : y.cursorColor,
            fontSize: null == y ? undefined : y.fontSize,
            placeholderColor: null == y ? undefined : y.placeholderColor,
            textColor: null == y ? undefined : y.textColor,
            textErrorColor: null == y ? undefined : y.textErrorColor,
            fontFamily: null == y ? undefined : y.fontFamily,
          },
          placeholder: {
            number: null == h ? undefined : h.number,
            expiration: null == h ? undefined : h.expiration,
            cvc: null == h ? undefined : h.cvc,
            postalCode: null == h ? undefined : h.postalCode,
          },
        },
        x
      )
    );
  });
exports.CardField = v;
