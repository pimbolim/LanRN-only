var ReactNative = require('react-native'),
  module1328 = require('./1328'),
  module1331 = require('./1331'),
  module1332 = require('./1332'),
  S = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: module1332.TransitionIOSSpec,
      close: module1332.TransitionIOSSpec,
    },
    cardStyleInterpolator: module1328.forHorizontalIOS,
    headerStyleInterpolator: module1331.forFade,
  };

exports.SlideFromRightIOS = S;
var c = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module1332.TransitionIOSSpec,
    close: module1332.TransitionIOSSpec,
  },
  cardStyleInterpolator: module1328.forVerticalIOS,
  headerStyleInterpolator: module1331.forFade,
};
exports.ModalSlideFromBottomIOS = c;
var s = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module1332.TransitionIOSSpec,
    close: module1332.TransitionIOSSpec,
  },
  cardStyleInterpolator: module1328.forModalPresentationIOS,
  headerStyleInterpolator: module1331.forFade,
};
exports.ModalPresentationIOS = s;
var p = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module1332.FadeInFromBottomAndroidSpec,
    close: module1332.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: module1328.forFadeFromBottomAndroid,
  headerStyleInterpolator: module1331.forFade,
};
exports.FadeFromBottomAndroid = p;
var F = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module1332.RevealFromBottomAndroidSpec,
    close: module1332.RevealFromBottomAndroidSpec,
  },
  cardStyleInterpolator: module1328.forRevealFromBottomAndroid,
  headerStyleInterpolator: module1331.forFade,
};
exports.RevealFromBottomAndroid = F;
var I = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: module1332.ScaleFromCenterAndroidSpec,
    close: module1332.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: module1328.forScaleFromCenterAndroid,
  headerStyleInterpolator: module1331.forFade,
};
exports.ScaleFromCenterAndroid = I;
var f = ReactNative.Platform.select({
  ios: S,
  android: ReactNative.Platform.Version >= 29 ? I : ReactNative.Platform.Version >= 28 ? F : p,
  default: I,
});
exports.DefaultTransition = f;
var v = ReactNative.Platform.select({
  ios: c,
  default: f,
});
exports.ModalTransition = v;
