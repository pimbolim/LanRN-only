var ReactNative = require('react-native'),
  module901 = require('./901'),
  E = module901.Easing,
  _ = module901.EasingNode || E,
  I = _.out(_.back(0.75));

exports.DEFAULT_ANIMATION_EASING = I;
exports.DEFAULT_ANIMATION_DURATION = 500;
var T = ReactNative.Platform.select({
  ios: 0.998,
  android: 0.985,
});
exports.NORMAL_DECELERATION_RATE = T;
