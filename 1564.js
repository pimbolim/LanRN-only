exports.GooglePayButton = function (t) {
  var p = t.type,
    b = undefined === p ? 'pay' : p,
    v = t.onPress,
    f = t.disabled,
    P = module53.default(t, s);
  return React.default.createElement(
    ReactNative.TouchableOpacity,
    {
      disabled: f,
      activeOpacity: 1,
      onPress: v,
      style: f ? c.disabled : {},
    },
    React.default.createElement(
      y,
      module11.default(
        {
          buttonType: b,
        },
        P
      )
    )
  );
};

var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  s = ['type', 'onPress', 'disabled'],
  y = ReactNative.requireNativeComponent('GooglePayButton');

var c = ReactNative.StyleSheet.create({
  disabled: {
    opacity: 0.3,
  },
});
