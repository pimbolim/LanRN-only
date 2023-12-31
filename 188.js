var module47 = require('./47'),
  module189 = require('./189'),
  ReactNative = require('react-native');

function c(t, o) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (o)
      n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    s.push.apply(s, n);
  }

  return s;
}

function l(t) {
  for (var s = 1; s < arguments.length; s++) {
    var n = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      c(Object(n), true).forEach(function (s) {
        module47.default(t, s, n[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      c(Object(n)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
      });
  }

  return t;
}

var module77 = {
  uiViewClassName: 'RCTView',
  baseModuleName: null,
  Manager: 'ViewManager',
  Commands: {},
  Constants: {},
  bubblingEventTypes: l(
    l({}, module189.default.bubblingEventTypes),
    {},
    {
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
      topPress: {
        phasedRegistrationNames: {
          bubbled: 'onPress',
          captured: 'onPressCapture',
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
      topTouchStart: {
        phasedRegistrationNames: {
          bubbled: 'onTouchStart',
          captured: 'onTouchStartCapture',
        },
      },
    }
  ),
  directEventTypes: l(
    l({}, module189.default.directEventTypes),
    {},
    {
      topAccessibilityAction: {
        registrationName: 'onAccessibilityAction',
      },
      topAccessibilityEscape: {
        registrationName: 'onAccessibilityEscape',
      },
      topAccessibilityTap: {
        registrationName: 'onAccessibilityTap',
      },
      topLayout: {
        registrationName: 'onLayout',
      },
      topMagicTap: {
        registrationName: 'onMagicTap',
      },
      onGestureHandlerEvent: {
        registrationName: 'onGestureHandlerEvent',
      },
      onGestureHandlerStateChange: {
        registrationName: 'onGestureHandlerStateChange',
      },
    }
  ),
  validAttributes: l(
    l({}, module189.default.validAttributes),
    {},
    {
      accessibilityActions: true,
      accessibilityElementsHidden: true,
      accessibilityHint: true,
      accessibilityIgnoresInvertColors: true,
      accessibilityLabel: true,
      accessibilityLiveRegion: true,
      accessibilityRole: true,
      accessibilityStates: true,
      accessibilityState: true,
      accessibilityValue: true,
      accessibilityViewIsModal: true,
      accessible: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      backfaceVisibility: true,
      backgroundColor: {
        process: require('./76'),
      },
      borderBottomColor: {
        process: require('./76'),
      },
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: {
        process: require('./76'),
      },
      borderEndColor: {
        process: require('./76'),
      },
      borderEndWidth: true,
      borderLeftColor: {
        process: require('./76'),
      },
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: {
        process: require('./76'),
      },
      borderRightWidth: true,
      borderStartColor: {
        process: require('./76'),
      },
      borderStartWidth: true,
      borderStyle: true,
      borderTopColor: {
        process: require('./76'),
      },
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      bottom: true,
      clickable: true,
      collapsable: true,
      direction: true,
      display: true,
      elevation: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      height: true,
      hitSlop: {
        diff: require('./179'),
      },
      importantForAccessibility: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      nativeID: true,
      needsOffscreenAlphaCompositing: true,
      onAccessibilityAction: true,
      onAccessibilityEscape: true,
      onAccessibilityTap: true,
      onLayout: true,
      onMagicTap: true,
      opacity: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      pointerEvents: true,
      position: true,
      removeClippedSubviews: true,
      renderToHardwareTextureAndroid: true,
      right: true,
      rotation: true,
      scaleX: true,
      scaleY: true,
      shadowColor: {
        process: require('./76'),
      },
      shadowOffset: {
        diff: require('./79'),
      },
      shadowOpacity: true,
      shadowRadius: true,
      shouldRasterizeIOS: true,
      start: true,
      style: {
        alignContent: true,
        alignItems: true,
        alignSelf: true,
        aspectRatio: true,
        backfaceVisibility: true,
        backgroundColor: {
          process: require('./76'),
        },
        borderBottomColor: {
          process: require('./76'),
        },
        borderBottomEndRadius: true,
        borderBottomLeftRadius: true,
        borderBottomRightRadius: true,
        borderBottomStartRadius: true,
        borderBottomWidth: true,
        borderColor: {
          process: require('./76'),
        },
        borderEndColor: {
          process: require('./76'),
        },
        borderEndWidth: true,
        borderLeftColor: {
          process: require('./76'),
        },
        borderLeftWidth: true,
        borderRadius: true,
        borderRightColor: {
          process: require('./76'),
        },
        borderRightWidth: true,
        borderStartColor: {
          process: require('./76'),
        },
        borderStartWidth: true,
        borderStyle: true,
        borderTopColor: {
          process: require('./76'),
        },
        borderTopEndRadius: true,
        borderTopLeftRadius: true,
        borderTopRightRadius: true,
        borderTopStartRadius: true,
        borderTopWidth: true,
        borderWidth: true,
        bottom: true,
        color: {
          process: require('./76'),
        },
        decomposedMatrix: true,
        direction: true,
        display: true,
        elevation: true,
        end: true,
        flex: true,
        flexBasis: true,
        flexDirection: true,
        flexGrow: true,
        flexShrink: true,
        flexWrap: true,
        fontFamily: true,
        fontSize: true,
        fontStyle: true,
        fontVariant: true,
        fontWeight: true,
        height: true,
        includeFontPadding: true,
        justifyContent: true,
        left: true,
        letterSpacing: true,
        lineHeight: true,
        margin: true,
        marginBottom: true,
        marginEnd: true,
        marginHorizontal: true,
        marginLeft: true,
        marginRight: true,
        marginStart: true,
        marginTop: true,
        marginVertical: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        opacity: true,
        overflow: true,
        overlayColor: {
          process: require('./76'),
        },
        padding: true,
        paddingBottom: true,
        paddingEnd: true,
        paddingHorizontal: true,
        paddingLeft: true,
        paddingRight: true,
        paddingStart: true,
        paddingTop: true,
        paddingVertical: true,
        position: true,
        resizeMode: true,
        right: true,
        rotation: true,
        scaleX: true,
        scaleY: true,
        shadowColor: {
          process: require('./76'),
        },
        shadowOffset: {
          diff: require('./79'),
        },
        shadowOpacity: true,
        shadowRadius: true,
        start: true,
        textAlign: true,
        textAlignVertical: true,
        textDecorationColor: {
          process: require('./76'),
        },
        textDecorationLine: true,
        textDecorationStyle: true,
        textShadowColor: {
          process: require('./76'),
        },
        textShadowOffset: true,
        textShadowRadius: true,
        textTransform: true,
        tintColor: {
          process: require('./76'),
        },
        top: true,
        transform:
          'ios' === ReactNative.Platform.OS
            ? {
                diff: require('./180'),
              }
            : {
                process: require('./77'),
              },
        transformMatrix: true,
        translateX: true,
        translateY: true,
        width: true,
        writingDirection: true,
        zIndex: true,
      },
      testID: true,
      top: true,
      transform:
        'ios' === ReactNative.Platform.OS
          ? {
              diff: require('./180'),
            }
          : {
              process: require('./77'),
            },
      translateX: true,
      translateY: true,
      width: true,
      zIndex: true,
    }
  ),
};
module.exports = module77;
