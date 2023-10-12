var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module866 = require('./866'),
  module867 = require('./867'),
  module869 = require('./869'),
  p = ['rootStyle', 'textInputStyle', 'onBlur', 'onFocus', 'value', 'renderCell', 'cellCount', 'RootProps', 'RootComponent'],
  v = React.default.forwardRef(function (t, v) {
    var y = t.rootStyle,
      C = t.textInputStyle,
      F = t.onBlur,
      S = t.onFocus,
      x = t.value,
      b = t.renderCell,
      B = t.cellCount,
      I = undefined === B ? 4 : B,
      R = t.RootProps,
      _ = undefined === R ? {} : R,
      h = t.RootComponent,
      O = undefined === h ? ReactNative.View : h,
      P = module53.default(t, p),
      w = module867.useFocusState(F, S),
      E = module866.getSymbols(x || '', I).map(function (t, o, l) {
        var n = l.indexOf('') === o;
        return b({
          index: o,
          symbol: t,
          isFocused: w.isFocused && n,
        });
      });

    return React.default.createElement(
      O,
      module11.default({}, _, {
        style: module866.getStyle(module869.styles.root, y),
      }),
      E,
      React.default.createElement(
        ReactNative.TextInput,
        module11.default(
          {
            disableFullscreenUI: true,
            caretHidden: true,
            spellCheck: false,
            autoCorrect: false,
            blurOnSubmit: false,
            clearButtonMode: 'never',
            autoCapitalize: 'characters',
            underlineColorAndroid: 'transparent',
            maxLength: I,
          },
          P,
          {
            value: x,
            onBlur: w.onBlur,
            onFocus: w.onFocus,
            style: module866.getStyle(module869.styles.textInput, C),
            ref: v,
          }
        )
      )
    );
  });

exports.CodeField = v;
