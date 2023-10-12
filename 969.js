var module970 = require('./970'),
  module964 = require('./964'),
  module967 = require('./967').tagMessage('react-native-reanimated is required in order to use synchronous state management'),
  u = undefined !== (null == module970.Reanimated ? undefined : module970.Reanimated.useSharedValue),
  s = null == module970.Reanimated ? undefined : module970.Reanimated.setGestureState,
  c = {
    create: function (t) {
      'worklet';

      return {
        begin: function () {
          if (u) s(t, module964.State.BEGAN);
          else console.warn(module967);
        },
        activate: function () {
          if (u) s(t, module964.State.ACTIVE);
          else console.warn(module967);
        },
        fail: function () {
          if (u) s(t, module964.State.FAILED);
          else console.warn(module967);
        },
        end: function () {
          if (u) s(t, module964.State.END);
          else console.warn(module967);
        },
      };
    },
  };

exports.GestureStateManager = c;
