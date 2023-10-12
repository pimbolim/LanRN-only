var module1594 = require('./1594'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1595 = require('./1595'),
  c =
    (this && this.__spreadArray) ||
    function (t, n, l) {
      if (l || 2 === arguments.length) for (var o, u = 0, c = n.length; u < c; u++) (!o && u in n) || (o || (o = Array.prototype.slice.call(n, 0, u)), (o[u] = n[u]));
      return t.concat(o || Array.prototype.slice.call(n));
    };

exports.defaultOriginWhitelist = ['http://*', 'https://*'];

var f = function (t) {
    var n = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(t);
    return null === n ? '' : n[0];
  },
  s = function (t) {
    return '^'.concat(module1594.default(t).replace(/\\\*/g, '.*'));
  },
  p = function (t, n) {
    var l = f(n);
    return t.some(function (t) {
      return new RegExp(t).test(l);
    });
  },
  E = function (t) {
    return c(['about:blank'], t || [], true).map(s);
  };

exports.createOnShouldStartLoadWithRequest = function (t, n, l) {
  return function (u) {
    var c = u.nativeEvent,
      f = true,
      s = c.url,
      h = c.lockIdentifier;
    if (p(E(n), s)) {
      if (l) f = l(c);
    } else {
      ReactNative.Linking.canOpenURL(s)
        .then(function (t) {
          if (t) return ReactNative.Linking.openURL(s);
          console.warn("Can't open url: ".concat(s));
        })
        .catch(function (t) {
          console.warn('Error opening URL: ', t);
        });
      f = false;
    }
    t(f, s, h);
  };
};

exports.defaultRenderLoading = function () {
  return React.default.createElement(
    ReactNative.View,
    {
      style: module1595.default.loadingOrErrorView,
    },
    React.default.createElement(ReactNative.ActivityIndicator, null)
  );
};

exports.defaultRenderError = function (t, n, c) {
  return React.default.createElement(
    ReactNative.View,
    {
      style: module1595.default.loadingOrErrorView,
    },
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1595.default.errorTextTitle,
      },
      'Error loading page'
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1595.default.errorText,
      },
      'Domain: '.concat(t)
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1595.default.errorText,
      },
      'Error Code: '.concat(n)
    ),
    React.default.createElement(
      ReactNative.Text,
      {
        style: module1595.default.errorText,
      },
      'Description: '.concat(c)
    )
  );
};
