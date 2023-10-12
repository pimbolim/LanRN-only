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
    var u = O(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1943 = require('./1943'),
  module472 = require('./472'),
  module474 = require('./474');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (O = function (t) {
    return t ? u : n;
  })(t);
}

function B() {
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

var w = (function (t) {
    module35.default(j, t);

    var module400 = j,
      O = B(),
      w = function () {
        var t,
          n = module34.default(module400);

        if (O) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function j() {
      module24.default(this, j);
      return w.apply(this, arguments);
    }

    module25.default(j, [
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
            : 'catalogue' === t
            ? module458.default.tabBar.catalogue
            : undefined;
        },
      },
      {
        key: 'renderIcon',
        value: function () {
          var t = this.props,
            n = t.screen;

          if (t.focused) {
            if ('home' === n) return 'Lanidor-filled';
            if ('profile' === n) return 'User-Fill';
            if ('login' === n) return 'User-Fill';
            if ('favorites' === n) return 'Like-Fill';
            if ('cart' === n) return 'Bag-Fill';
            if ('catalogue' === n) return 'Burger-Nav-Fill';
          } else {
            if ('home' === n) return 'Lanidor';
            if ('profile' === n) return 'User-Outline';
            if ('login' === n) return 'User-Outline';
            if ('favorites' === n) return 'Like-Outline';
            if ('cart' === n) return 'Bag-Outline';
            if ('catalogue' === n) return 'Burger-Nav-Outline';
          }

          return '';
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.screen,
            u = t.cartNumber,
            o = module1943.CStyles(),
            l = null != u && u.value && (null == u ? undefined : u.value) > 0 ? (null == u ? undefined : u.value) : 0;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: module474.ms(5),
                height: '100%',
                borderRadius: module474.ms(5),
              },
            },
            React.default.createElement(module472.Icon, {
              name: this.renderIcon(),
              size: module474.ms(26),
            }),
            'cart' == n &&
              l > 0 &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: o.badgeContainer,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: o.badgeText,
                  },
                  l
                )
              )
          );
        },
      },
    ]);
    return j;
  })(React.Component),
  j = module400.connect(function (t) {
    return {
      orientation: t.orientation,
      language: t.language,
      cartNumber: t.cartNumber,
    };
  })(w);

exports.CustomTabIcon = j;
