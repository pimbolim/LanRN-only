var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module474 = require('./474'),
  module479 = require('./479');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function O() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var P = (function (t) {
  module35.default(b, t);

  var module400 = b,
    h = O(),
    P = function () {
      var t,
        n = module34.default(module400);

      if (h) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return P.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'render',
      value: function () {
        if (!this.props.loading) return null;
        var t = module479.CStyles();
        return React.default.createElement(
          ReactNative.View,
          {
            style: t.root,
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            color: module474.Color.primary,
            size: 'large',
          })
        );
      },
    },
  ]);
  return b;
})(React.PureComponent);

var b = module400.connect(function (t) {
  return {
    loading: t.loader.value,
    orientation: t.orientation,
  };
})(P);
exports.default = b;
