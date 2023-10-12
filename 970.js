var t,
  module967 = require('./967');

exports.Reanimated = t;

try {
  if (((exports.Reanimated = t = require('./901')), !t.useSharedValue)) throw ((exports.Reanimated = t = undefined), new Error('react-native-reanimated is not found'));
  if (!t.setGestureState)
    t.setGestureState = function () {
      'worklet';

      console.warn(module967.tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));
    };
} catch (t) {}
