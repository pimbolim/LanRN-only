exports.AuBECSDebitForm = function (t) {
  var o = t.onComplete,
    p = t.companyName,
    O = t.formStyle,
    b = module53.default(t, f);
  return React.default.createElement(
    ReactNative,
    module11.default(
      {
        onCompleteAction: function (t) {
          return o(t.nativeEvent);
        },
        companyName: p,
        formStyle: l({}, O),
      },
      b
    )
  );
};

var module11 = require('./11'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  f = ['onComplete', 'companyName', 'formStyle'];

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function l(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(c), true).forEach(function (n) {
        module47.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      p(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var ReactNative = require('react-native').requireNativeComponent('AuBECSDebitForm');
