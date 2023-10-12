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
    var o = S(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module482 = require('./482'),
  module431 = require('./431'),
  module565 = require('./565'),
  module579 = require('./579'),
  module474 = require('./474');

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (S = function (t) {
    return t ? o : n;
  })(t);
}

function A() {
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

var I = function (t) {
    var n = t.name,
      o = t.containerStyle,
      l = t.iconStyle,
      c = t.onPress;
    return React.default.createElement(
      ReactNative.TouchableOpacity,
      {
        hitSlop: module474.HitSlop.big,
        onPress: function () {
          return c();
        },
      },
      React.default.createElement(
        ReactNative.View,
        {
          style: o,
        },
        React.default.createElement(module565.default, {
          name: n,
          style: l,
        })
      )
    );
  },
  k = (function (t) {
    module35.default(k, t);

    var module400 = k,
      module482 = A(),
      S = function () {
        var t,
          n = module34.default(module400);

        if (module482) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function k(t) {
      var o;
      module24.default(this, k);

      (o = S.call(this, t)).leftAction = function () {
        var t = o.props,
          n = t.back,
          l = t.drawer,
          c = t.leftAction;
        return 'function' == typeof c ? c() : n ? o.navigation.goBack() : l ? o.navigation.toggleDrawer() : null;
      };

      o.rightAction = function () {
        var t = o.props.rightAction;
        if ('function' == typeof t) return t();
      };

      o.renderExtraRightIconAction = function () {
        var t = o.props.extraRightIconAction;
        if ('function' == typeof t) t();
      };

      o.renderBrowserBackAction = function () {
        var t = o.props.browserBackAction;
        if ('function' == typeof t) t();
      };

      o.state = {};
      return o;
    }

    module25.default(k, [
      {
        key: 'navigation',
        get: function () {
          return this.context;
        },
      },
      {
        key: 'hasLeftAction',
        get: function () {
          var t = this.props,
            n = t.back,
            o = t.drawer,
            l = t.leftAction;
          return n || o || 'function' == typeof l;
        },
      },
      {
        key: 'hasRightAction',
        get: function () {
          return 'function' == typeof this.props.rightAction;
        },
      },
      {
        key: 'renderLeftIcon',
        value: function () {
          var t = module579.CStyles(),
            n = this.props,
            o = n.back,
            l = n.drawer,
            c = n.leftIcon,
            u = n.leftComponent,
            p = n.transparent,
            y = n.transparentColorIcons,
            h = n.smallSizeIcon;
          if ('function' == typeof u) return u();
          var S = c,
            A = [
              t.icon,
              p && {
                color: y || 'white',
              },
              !!o && {
                transform: [
                  {
                    rotateY: '180deg',
                  },
                ],
              },
              h && {
                fontSize: module474.ms(15),
                marginLeft: module474.ms(10),
              },
            ];

          if (o) {
            ReactNative.Platform.OS;
            S = 'Seta-perfil1';
          }

          if (l) S = 'hamburguer';
          return S
            ? React.default.createElement(module565.default, {
                name: S,
                style: A,
              })
            : React.default.createElement(ReactNative.View, null);
        },
      },
      {
        key: 'renderRightIcon',
        value: function () {
          var t = module579.CStyles(),
            n = this.props,
            o = n.rightIcon,
            l = n.rightComponent,
            c = n.transparent,
            u = n.transparentColorIcons;
          return 'function' == typeof l
            ? l()
            : o
            ? React.default.createElement(module565.default, {
                name: o,
                style: [
                  t.icon,
                  c && {
                    color: u || 'white',
                  },
                ],
              })
            : React.default.createElement(ReactNative.View, null);
        },
      },
      {
        key: 'renderTitle',
        value: function () {
          var t = module579.CStyles(),
            n = this.props,
            o = n.title,
            l = n.subtitle,
            c = n.transparent,
            u = n.transparentColorIcons;
          return o
            ? React.default.createElement(
                ReactNative.Text,
                {
                  numberOfLines: 1,
                  ellipsizeMode: 'tail',
                  style: [
                    t.title,
                    c && {
                      color: u || 'white',
                    },
                  ],
                },
                o || '',
                l &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        fontFamily: module474.FontFamily.bold,
                        color: module474.Color.black,
                      },
                    },
                    ' ',
                    l,
                    ' '
                  )
              )
            : React.default.createElement(ReactNative.View, null);
        },
      },
      {
        key: 'renderExtraRightIcon',
        value: function () {
          var t = this.props,
            n = t.extraRightIcon,
            o = t.extraRightIconStyle;
          if (!n) return React.default.createElement(ReactNative.View, null);
          var l = module579.CStyles();
          return React.default.createElement(I, {
            name: n,
            containerStyle: l.iconContainer,
            iconStyle: [l.icon, o],
            onPress: this.renderExtraRightIconAction,
          });
        },
      },
      {
        key: 'renderBrowserBack',
        value: function () {
          if (!this.props.webview) return null;
          var t = module579.CStyles();
          return React.default.createElement(I, {
            name: 'ios' === ReactNative.Platform.OS ? 'back' : 'arrow_back_black',
            containerStyle: t.iconContainer,
            iconStyle: t.icon,
            onPress: this.renderBrowserBackAction,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.transparent,
            l = n.style,
            c = n.topStyle,
            u = n.containerStyle,
            p = n.children,
            y = n.customHeader,
            v = n.webview,
            b = n.productDetailHeader,
            S = module579.CStyles();
          return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
            return React.default.createElement(
              ReactNative.Animated.View,
              {
                style: [o ? S.rootTransparent : S.root, l],
              },
              React.default.createElement(ReactNative.StatusBar, {
                animated: true,
                backgroundColor: 'white',
                barStyle: 'dark-content',
              }),
              React.default.createElement(ReactNative.Animated.View, {
                style: [
                  S.top,
                  {
                    height: n.top,
                  },
                  c,
                  b && {
                    backgroundColor: 'transparent',
                  },
                ],
              }),
              React.default.createElement(
                ReactNative.Animated.View,
                {
                  style: [o ? S.containerTransparent : S.container, u],
                },
                p,
                y
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: S.contentContainer,
                      },
                      t.renderTitle(),
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          disabled: !t.hasRightAction,
                          onPress: t.rightAction,
                          style: S.rightContainer,
                        },
                        t.renderRightIcon()
                      )
                    )
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: S.contentContainer,
                      },
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          disabled: !t.hasLeftAction,
                          onPress: t.leftAction,
                          style: S.leftContainer,
                        },
                        t.renderLeftIcon()
                      ),
                      t.renderTitle(),
                      React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          disabled: !t.hasRightAction,
                          onPress: t.rightAction,
                          style: v ? S.webViewRightIconContainer : S.rightContainer,
                        },
                        t.renderBrowserBack(),
                        t.renderExtraRightIcon(),
                        t.renderRightIcon()
                      )
                    )
              )
            );
          });
        },
      },
    ]);
    return k;
  })(React.Component);

k.contextType = module482.NavigationContext;
k.defaultProps = {
  leftIcon: '',
  rightIcon: '',
  extraRightIcon: '',
  leftIconStyle: {},
  rightIconStyle: {},
  extraRightIconStyle: {},
  leftIconAction: null,
  rightIconAction: null,
  extraRightIconAction: null,
  title: '',
};
var E = module400.connect(function (t) {
  return {
    colorScheme: t.colorScheme,
    orientation: t.orientation,
  };
})(k);
exports.default = E;
