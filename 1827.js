var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
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
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1828 = require('./1828');

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

var S = (function (t) {
    module35.default(k, t);

    var module400 = k,
      h = O(),
      S = function () {
        var t,
          n = module34.default(module400);

        if (h) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function k(t) {
      var o;
      module24.default(this, k);
      (o = S.call(this, t)).state = {};
      o.onPressNotifications = o.onPressNotifications.bind(module39.default(o));
      o.onPressAppSettings = o.onPressAppSettings.bind(module39.default(o));
      return o;
    }

    module25.default(k, [
      {
        key: 'func1',
        value: function () {},
      },
      {
        key: 'onPressNotifications',
        value: function () {
          this.props.navigation.navigate('Notifications');
        },
      },
      {
        key: 'onPressCustomerService',
        value: function () {},
      },
      {
        key: 'onPressStoreLocator',
        value: function () {},
      },
      {
        key: 'onPressGiftCard',
        value: function () {},
      },
      {
        key: 'onPressAppSettings',
        value: function () {
          this.props.navigation.navigate('Settings');
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1828.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              style: t.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.more.more,
            }),
            React.default.createElement(module472.Option, {
              text: module458.default.more.notifications,
              onPress: this.onPressNotifications,
            }),
            React.default.createElement(module472.Option, {
              text: module458.default.more.customerService,
              onPress: this.onPressCustomerService,
            }),
            React.default.createElement(module472.Option, {
              text: module458.default.more.storeLocator,
              onPress: this.onPressStoreLocator,
            }),
            React.default.createElement(module472.Option, {
              text: module458.default.more.giftCard,
              onPress: this.onPressGiftCard,
            }),
            React.default.createElement(module472.Option, {
              text: module458.default.more.appSettings,
              onPress: this.onPressAppSettings,
            })
          );
        },
      },
    ]);
    return k;
  })(React.Component),
  k = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(S);

exports.default = k;
