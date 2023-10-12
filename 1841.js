var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
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
    var o = C(n);
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
  module458 = require('./458'),
  module472 = require('./472'),
  module1842 = require('./1842'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226');

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (C = function (t) {
    return t ? o : n;
  })(t);
}

function T() {
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
    module35.default(D, t);

    var module400 = D,
      C = T(),
      P = function () {
        var t,
          n = module34.default(module400);

        if (C) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);

      (n = P.call(this, t)).focusListener = function () {};

      n.state = {};
      n.onLogout = n.onLogout.bind(module39.default(n));
      n.getUserData = n.getUserData.bind(module39.default(n));
      return n;
    }

    module25.default(D, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(this.getUserData());

                  case 2:
                    this.focusListener = this.props.navigation.addListener('focus', function () {
                      return regeneratorRuntime.default.async(
                        function (o) {
                          for (;;)
                            switch ((o.prev = o.next)) {
                              case 0:
                                o.next = 2;
                                return regeneratorRuntime.default.awrap(t.getUserData());

                              case 2:
                              case 'end':
                                return o.stop();
                            }
                        },
                        null,
                        null,
                        null,
                        Promise
                      );
                    });

                  case 3:
                  case 'end':
                    return o.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t;
          if (!(null == (t = this.focusListener))) t.call(this);
        },
      },
      {
        key: 'getUserData',
        value: function () {
          var t, o, l, u;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((t = this.props), (o = t.dispatch), null != (l = t.user) && l.value)) {
                      s.next = 3;
                      break;
                    }

                    return s.abrupt('return', null);

                  case 3:
                    s.prev = 3;
                    o(module1224.setLoader(true));
                    s.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.getUserData(this.user.IdCliente),
                        axiosConfig: {
                          callback: this.getUserData,
                        },
                      })
                    );

                  case 7:
                    if ((u = s.sent).ok) {
                      o(module1224.setLoader(false));
                      o(module1224.setUser(u.data));
                    } else {
                      o(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    s.next = 15;
                    break;

                  case 11:
                    s.prev = 11;
                    s.t0 = s.catch(3);
                    o(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            this,
            [[3, 11]],
            Promise
          );
        },
      },
      {
        key: 'onLogout',
        value: function () {
          var t = this;
          ReactNative.Alert.alert(module458.default.authentication.logout, module458.default.authentication.logoutMessage, [
            {
              text: module458.default.generic.cancel,
              style: 'cancel',
            },
            {
              text: 'OK',
              style: 'destructive',
              onPress: function () {
                var module24, module25, module39;
                return regeneratorRuntime.default.async(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          module24 = t.props;
                          module25 = module24.dispatch;
                          module39 = module24.navigation;
                          s.next = 3;
                          return regeneratorRuntime.default.awrap(module25(module1224.setLogout()));

                        case 3:
                          module39.reset({
                            index: 0,
                            routes: [
                              {
                                name: 'Home',
                              },
                            ],
                          });

                        case 4:
                        case 'end':
                          return s.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              },
            },
          ]);
        },
      },
      {
        key: 'renderPersonalDataArea',
        value: function () {
          var t = this;

          if (this.user) {
            var n = this.user,
              o = n.Nome,
              l = n.Morada,
              u = n.CodPostal,
              s = n.Localidade,
              c = module1842.CStyles(),
              f = '' !== l && null !== l,
              h = '' !== u && null !== u,
              b = '' !== s && null !== s;
            return React.default.createElement(
              React.default.Fragment,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    c.sectionBigText,
                    {
                      marginTop: module474.ms(40),
                    },
                  ],
                },
                module458.default.profile.personalData
              ),
              React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    t.props.navigation.navigate('ChangePersonalData');
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: c.biggerOptionContainer,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: c.optionTextContainer,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: c.optionBlackText,
                      },
                      o
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          justifyContent: 'space-between',
                          height: module474.ms(35),
                        },
                      },
                      f &&
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: [
                              c.optionBlackText,
                              {
                                fontFamily: module474.FontFamily.light,
                              },
                            ],
                          },
                          l
                        ),
                      h &&
                        null !== b &&
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: [
                              c.optionBlackText,
                              {
                                fontFamily: module474.FontFamily.light,
                              },
                            ],
                          },
                          u,
                          ' ',
                          s
                        )
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: c.iconContainer,
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'anterior',
                      size: module474.ms(14),
                      style: c.iconRotate,
                    })
                  )
                )
              ),
              React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    t.props.navigation.navigate('ChangePassword');
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: c.smallerOptionContainer,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        c.optionBlackText,
                        {
                          fontFamily: module474.FontFamily.light,
                          width: '90%',
                        },
                      ],
                    },
                    module458.default.profile.changePassword
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: c.iconContainer,
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'anterior',
                      size: module474.ms(14),
                      style: c.iconRotate,
                    })
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'renderCommunicationsArea',
        value: function () {
          var t = this,
            n = module1842.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.sectionBigText,
                  {
                    marginTop: module474.ms(40),
                  },
                ],
              },
              module458.default.profile.communications
            ),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  t.props.navigation.navigate('Newsletters');
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.smallerOptionContainer,
                    {
                      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
                      borderTopColor: module474.Color.veryLightGray,
                      marginTop: module474.ms(25),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.optionBlackText,
                      {
                        fontFamily: module474.FontFamily.light,
                        width: '90%',
                      },
                    ],
                  },
                  module458.default.profile.manageNewsletters
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: n.iconContainer,
                  },
                  React.default.createElement(module472.Icon, {
                    name: 'anterior',
                    size: module474.ms(14),
                    style: n.iconContainer,
                  })
                )
              )
            )
          );
        },
      },
      {
        key: 'renderLogoutButton',
        value: function () {
          var t = module1842.CStyles(),
            n = ReactNative.Dimensions.get('window').height;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: this.onLogout,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n <= 568 ? t.logoutButtonRelative : t.logoutButtonAbsolute,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.logoutButtonText,
                },
                module458.default.profile.closeSession.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              showsVerticalScrollIndicator: false,
              contentContainerStyle: {
                flexGrow: 1,
              },
            },
            this.renderPersonalDataArea(),
            this.renderCommunicationsArea(),
            this.renderLogoutButton()
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1842.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.personalData,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                style: t.root,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return D;
  })(React.Component),
  D = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(P);

exports.default = D;
