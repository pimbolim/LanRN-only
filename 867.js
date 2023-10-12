var module12 = require('./12'),
  React = require('react'),
  module868 = require('./868');

exports.useFocusState = function (u, s) {
  var c = React.useState(false),
    v = module12.default(c, 2),
    f = v[0],
    l = v[1];
  return {
    isFocused: f,
    onBlur: module868.useEvent(u, function () {
      return l(false);
    }),
    onFocus: module868.useEvent(s, function () {
      return l(true);
    }),
  };
};
