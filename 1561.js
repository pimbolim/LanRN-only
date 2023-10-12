exports.ApplePayButton = function (t) {
  var s = t.onPress,
    b = t.buttonStyle,
    y = undefined === b ? 'black' : b,
    v = t.type,
    P = undefined === v ? 'plain' : v,
    O = t.borderRadius,
    w = undefined === O ? 4 : O,
    M = module53.default(t, c),
    h = React.useMemo(
      function () {
        return f(P);
      },
      [P]
    ),
    j = React.useMemo(
      function () {
        return l(y);
      },
      [y]
    );
  return React.default.createElement(
    ReactNative,
    module11.default(
      {
        type: h,
        buttonStyle: j,
        borderRadius: w,
        onPressAction: s,
      },
      M
    )
  );
};

var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = s(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, p, f);
        else o[p] = t[p];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  c = ['onPress', 'buttonStyle', 'type', 'borderRadius'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (s = function (t) {
    return t ? u : n;
  })(t);
}

var ReactNative = require('react-native').requireNativeComponent('ApplePayButton');

function f(t) {
  switch (t) {
    case 'plain':
      return 0;

    case 'buy':
      return 1;

    case 'setUp':
      return 2;

    case 'inStore':
      return 3;

    case 'donate':
      return 4;

    case 'checkout':
      return 5;

    case 'book':
      return 6;

    case 'subscribe':
      return 7;

    case 'reload':
      return 8;

    case 'addMoney':
      return 9;

    case 'topUp':
      return 10;

    case 'order':
      return 11;

    case 'rent':
      return 12;

    case 'support':
      return 13;

    case 'contribute':
      return 14;

    case 'tip':
      return 15;

    default:
      return 0;
  }
}

function l(t) {
  switch (t) {
    case 'white':
      return 0;

    case 'whiteOutline':
      return 1;

    case 'black':
      return 2;

    case 'automatic':
      return 3;

    default:
      return 2;
  }
}
