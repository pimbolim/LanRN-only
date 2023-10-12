var module47 = require('./47');

function n(t, o) {
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

function s(t) {
  for (var s = 1; s < arguments.length; s++) {
    var u = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      n(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      n(Object(u)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(u, o));
      });
  }

  return t;
}

var module76 = {
  uiViewClassName: 'RCTSinglelineTextInputView',
  bubblingEventTypes: {
    topBlur: {
      phasedRegistrationNames: {
        bubbled: 'onBlur',
        captured: 'onBlurCapture',
      },
    },
    topChange: {
      phasedRegistrationNames: {
        bubbled: 'onChange',
        captured: 'onChangeCapture',
      },
    },
    topEndEditing: {
      phasedRegistrationNames: {
        bubbled: 'onEndEditing',
        captured: 'onEndEditingCapture',
      },
    },
    topFocus: {
      phasedRegistrationNames: {
        bubbled: 'onFocus',
        captured: 'onFocusCapture',
      },
    },
    topKeyPress: {
      phasedRegistrationNames: {
        bubbled: 'onKeyPress',
        captured: 'onKeyPressCapture',
      },
    },
    topSubmitEditing: {
      phasedRegistrationNames: {
        bubbled: 'onSubmitEditing',
        captured: 'onSubmitEditingCapture',
      },
    },
    topTouchCancel: {
      phasedRegistrationNames: {
        bubbled: 'onTouchCancel',
        captured: 'onTouchCancelCapture',
      },
    },
    topTouchEnd: {
      phasedRegistrationNames: {
        bubbled: 'onTouchEnd',
        captured: 'onTouchEndCapture',
      },
    },
    topTouchMove: {
      phasedRegistrationNames: {
        bubbled: 'onTouchMove',
        captured: 'onTouchMoveCapture',
      },
    },
  },
  directEventTypes: {},
  validAttributes: s(
    s({}, require('./188').default.validAttributes),
    {},
    {
      fontSize: true,
      fontWeight: true,
      fontVariant: true,
      textShadowOffset: {
        diff: require('./79'),
      },
      allowFontScaling: true,
      fontStyle: true,
      textTransform: true,
      textAlign: true,
      fontFamily: true,
      lineHeight: true,
      isHighlighted: true,
      writingDirection: true,
      textDecorationLine: true,
      textShadowRadius: true,
      letterSpacing: true,
      textDecorationStyle: true,
      textDecorationColor: {
        process: require('./76'),
      },
      color: {
        process: require('./76'),
      },
      maxFontSizeMultiplier: true,
      textShadowColor: {
        process: require('./76'),
      },
      editable: true,
      inputAccessoryViewID: true,
      caretHidden: true,
      enablesReturnKeyAutomatically: true,
      placeholderTextColor: {
        process: require('./76'),
      },
      onSelectionChange: true,
      clearButtonMode: true,
      onContentSizeChange: true,
      keyboardType: true,
      selection: true,
      returnKeyType: true,
      blurOnSubmit: true,
      mostRecentEventCount: true,
      onChange: true,
      scrollEnabled: true,
      selectionColor: {
        process: require('./76'),
      },
      contextMenuHidden: true,
      secureTextEntry: true,
      onTextInput: true,
      placeholder: true,
      autoCorrect: true,
      onScroll: true,
      multiline: true,
      textContentType: true,
      maxLength: true,
      autoCapitalize: true,
      keyboardAppearance: true,
      passwordRules: true,
      spellCheck: true,
      selectTextOnFocus: true,
      text: true,
      clearTextOnFocus: true,
    }
  ),
};
module.exports = module76;
