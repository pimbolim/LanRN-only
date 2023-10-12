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
    var o = b(n);
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
  module458 = require('./458'),
  module1943 = require('./1943');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function h() {
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

var B = (function (t) {
    module35.default(O, t);

    var module400 = O,
      b = h(),
      B = function () {
        var t,
          n = module34.default(module400);

        if (b) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O() {
      module24.default(this, O);
      return B.apply(this, arguments);
    }

    module25.default(O, [
      {
        key: 'renderLabel',
        value: function () {
          var t = this.props.screen;
          return 'home' === t
            ? module458.default.tabBar.home
            : 'profile' === t
            ? module458.default.tabBar.profile
            : 'login' === t
            ? module458.default.tabBar.login
            : 'favorites' === t
            ? module458.default.tabBar.favorites
            : 'cart' === t
            ? module458.default.tabBar.cart
            : 'more' === t
            ? module458.default.tabBar.more
            : undefined;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props.color,
            n = module1943.CStyles();
          return React.default.createElement(
            ReactNative.Text,
            {
              style: [
                n.label,
                {
                  color: t,
                },
              ],
            },
            this.renderLabel()
          );
        },
      },
    ]);
    return O;
  })(React.Component),
  O = module400.connect(function (t) {
    return {
      orientation: t.orientation,
      language: t.language,
    };
  })(B);

exports.TabBarLabel = O;
