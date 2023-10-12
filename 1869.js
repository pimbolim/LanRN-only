var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  s = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = T(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module1870 = require('./1870'),
  module1226 = require('./1226'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1874 = require('./1874'),
  module474 = require('./474'),
  module1262 = require('./1262'),
  module1224 = require('./1224');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
    return t ? o : n;
  })(t);
}

function E() {
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

var F = (function (t) {
    module35.default(O, t);

    var module400 = O,
      T = E(),
      F = function () {
        var t,
          n = module34.default(module400);

        if (T) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return s.default(this, t);
      };

    function O(t) {
      var n, l;
      module24.default(this, O);

      (l = F.call(this, t)).onShare = function () {
        var t = '';
        t = (ReactNative.Platform.OS, 'www.lanidor.com');
        module1870.default.open({
          url: '',
          title: 'Lanidor',
          message: module458.default.settings.shareMessage + t,
        });
      };

      l.onLanguage = function () {
        l.navigation.navigate('Languages');
      };

      l.onNotifications = function () {
        l.navigation.navigate('Notifications');
      };

      l.onTerms = function () {
        l.navigation.navigate('TermsAndConditions');
      };

      l.onPrivacy = function () {
        l.navigation.navigate('PrivacyPolicy');
      };

      l.renderProfileOptionItem = function (t, n) {
        var o = module1874.CStyles();
        return React.default.createElement(
          React.default.Fragment,
          null,
          React.default.createElement(
            ReactNative.View,
            {
              style: o.normalContainer,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: {
                  fontFamily: module474.FontFamily.semiBold,
                  fontSize: module474.FontSize.m,
                  color: module474.Color.black,
                },
              },
              t.title
            )
          ),
          t.options.map(function (t) {
            return t.switch
              ? React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: o.whiteContainer,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          fontFamily: module474.FontFamily.regular,
                          fontSize: module474.FontSize.m,
                          color: module474.Color.black,
                        },
                      },
                      t.innerTitle
                    ),
                    React.default.createElement(ReactNative.Switch, {
                      trackColor: {
                        false: 'light-gray',
                        true: 'black',
                      },
                      thumbColor: 'white',
                      ios_backgroundColor: 'white',
                      value: l.state.activateNews,
                      onValueChange: function (t) {
                        return l.activateNews(l.user.IdCliente, t);
                      },
                    })
                  )
                )
              : React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  {
                    onPress: t.onPress,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: o.whiteContainer,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          fontFamily: module474.FontFamily.regular,
                          fontSize: module474.FontSize.m,
                          color: module474.Color.black,
                        },
                      },
                      t.innerTitle
                    ),
                    React.default.createElement(module472.Icon, {
                      name: 'right',
                      size: module474.ms(14),
                    })
                  )
                );
          })
        );
      };

      l.state = {
        activateNews: null == (n = l.user) ? undefined : n.recebeNotificacoes,
      };
      return l;
    }

    module25.default(O, [
      {
        key: 'navigation',
        get: function () {
          return this.props.navigation;
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {},
      },
      {
        key: 'optionPress',
        value: function () {},
      },
      {
        key: 'getLangTitle',
        value: function () {
          switch (module1262.convertLanguage()) {
            case 'pt':
              return 'Portugu\xeas';

            default:
              return 'English';
          }
        },
      },
      {
        key: 'newOptionsList',
        get: function () {
          var t = this;
          return [
            {
              title: module458.default.more.notifications,
              options: [
                {
                  innerTitle: module458.default.generic.activateNews,
                  switch: true,
                },
              ],
            },
            {
              title: module458.default.settings.chooseLanguage,
              options: [
                {
                  innerTitle: this.getLangTitle(),
                  onPress: function () {
                    return t.onLanguage();
                  },
                },
              ],
            },
            {
              title: module458.default.userSettings.privacy,
              options: [
                {
                  innerTitle: module458.default.settings.privacyPolicy,
                  onPress: function () {
                    return t.onPrivacy();
                  },
                },
                {
                  innerTitle: module458.default.settings.termsAndConditions,
                  onPress: function () {
                    return t.onTerms();
                  },
                },
              ],
            },
            {
              title: module458.default.settings.aboutApp,
              options: [
                {
                  innerTitle: module458.default.generic.share,
                  onPress: function () {
                    return t.onShare();
                  },
                },
                {
                  innerTitle: module458.default.generic.rate,
                  onPress: function () {
                    return t.optionPress();
                  },
                },
              ],
            },
          ];
        },
      },
      {
        key: 'activateNews',
        value: function (t, o) {
          var module25, module35, s, c, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    module25 = this.props.dispatch;
                    module35 = {};
                    s = '';
                    this.setState({
                      activateNews: o,
                    });
                    s = o ? 'true' : 'false';
                    p.prev = 5;
                    p.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.news(t, s),
                        data: module35,
                        axiosConfig: {
                          callback: this.activateNews,
                        },
                      })
                    );

                  case 8:
                    if ((c = p.sent).ok) {
                      module25(module1224.setLoader(false));
                      module25(module1224.setUser(c.data));
                    } else {
                      module25(module1224.setLoader(false));
                      this.setState({
                        activateNews: !o,
                      });
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: (null == c ? undefined : null == (f = c.data) ? undefined : f.message) || module458.default.generic.errorMessage,
                        });
                    }

                    p.next = 16;
                    break;

                  case 12:
                    p.prev = 12;
                    p.t0 = p.catch(5);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                  case 'end':
                    return p.stop();
                }
            },
            null,
            this,
            [[5, 12]],
            Promise
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1874.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              edges: ['left', 'right'],
              style: n.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.settings,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                },
              },
              this.newOptionsList.map(function (n, o) {
                return t.renderProfileOptionItem(n, o);
              })
            )
          );
        },
      },
    ]);
    return O;
  })(React.PureComponent),
  O = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(F);

exports.default = O;
