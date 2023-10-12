var ReactNative = require('react-native'),
  module460 = require('./460');

function u(t, n) {
  if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
}

function l(t, n) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !n || ('object' != typeof n && 'function' != typeof n) ? t : n;
}

function f(t, n) {
  if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
  t.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: t,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (n) Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : (t.__proto__ = n);
}

var s = ReactNative.NativeModules.ReactLocalization;

function p() {
  return s.language.replace(/_/g, '-');
}

if (!s) console.error("Something went wrong initializing the native ReactNativeLocalization module.\nPlease check your configuration.\nDid you run 'react-native link'?");

var _ = (function (t) {
  function n(t) {
    u(this, n);
    return l(
      this,
      (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, {
        customLanguageInterface: p,
      })
    );
  }

  f(n, module460.default);
  return n;
})();

exports.default = _;
