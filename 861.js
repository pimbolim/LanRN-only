var module11 = require('./11'),
  module12 = require('./12'),
  module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = o ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module862 = require('./862'),
  module873 = require('./873');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

var v = module20.default(new Array(4)).map(function () {
    return new ReactNative.Animated.Value(0);
  }),
  C = module20.default(new Array(4)).map(function () {
    return new ReactNative.Animated.Value(1);
  }),
  b = function (t) {
    var n = t.hasValue,
      u = t.index,
      l = t.isFocused;
    ReactNative.Animated.parallel([
      ReactNative.Animated.timing(v[u], {
        useNativeDriver: false,
        toValue: l ? 1 : 0,
        duration: 250,
      }),
      ReactNative.Animated.spring(C[u], {
        useNativeDriver: false,
        toValue: n ? 0 : 1,
        duration: n ? 300 : 250,
      }),
    ]).start();
  },
  w = module400.connect(function (t) {
    return {
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(function (t) {
    var l = module873.CStyles(),
      f = React.useState(''),
      p = module12.default(f, 2),
      v = p[0],
      C = p[1],
      w = module862.useBlurOnFulfill({
        value: v,
        cellCount: 4,
      }),
      O = module862.useClearByFocusCell({
        value: v,
        setValue: C,
      }),
      F = module12.default(O, 2),
      V = F[0],
      h = F[1];
    return React.default.createElement(
      module862.CodeField,
      module11.default(
        {
          ref: w,
        },
        V,
        {
          value: v,
          autoFocus: true,
          onChangeText: C,
          cellCount: t.codeLength || 4,
          rootStyle: t.rootStyle || l.codeFieldRoot,
          onBlur: function () {
            var n = t.onFulfill;
            if ('function' == typeof n) n(v);
          },
          keyboardType: 'number-pad',
          textContentType: 'oneTimeCode',
          renderCell: function (t) {
            var n = t.index,
              u = t.symbol,
              f = t.isFocused,
              y = Boolean(u);
            setTimeout(function () {
              b({
                hasValue: y,
                index: n,
                isFocused: f,
              });
            }, 0);
            return React.default.createElement(
              ReactNative.View,
              {
                key: n,
                style: [l.cell],
                onLayout: h(n),
              },
              React.default.createElement(
                ReactNative.Animated.Text,
                {
                  style: l.cellValue,
                },
                u || (f ? React.default.createElement(module862.Cursor, null) : null)
              )
            );
          },
        }
      )
    );
  });

exports.default = w;
