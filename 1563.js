exports.StripeContainer = function (t) {
  var s = t.keyboardShouldPersistTaps,
    u = t.children;
  return React.default.createElement(
    l,
    {
      keyboardShouldPersistTaps: s,
      style: c.container,
    },
    React.default.createElement(
      ReactNative.View,
      {
        style: c.container,
        accessible: false,
      },
      u
    )
  );
};

var React = require('react'),
  ReactNative = require('react-native'),
  l = ReactNative.requireNativeComponent('StripeContainer');

var c = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
