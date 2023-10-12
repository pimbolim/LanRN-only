var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
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
    var o = L(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1858 = require('./1858'),
  module1860 = require('./1860'),
  module474 = require('./474'),
  module1262 = require('./1262'),
  module1616 = require('./1616'),
  module1272 = require('./1272'),
  module1224 = require('./1224'),
  module1226 = require('./1226');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

function F() {
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

ReactNative.Animated.createAnimatedComponent(module1858.default);

var S = function (t, n) {
    return '' + t._id;
  },
  V = (function (t) {
    module35.default(V, t);

    var module400 = V,
      module1858 = F(),
      L = function () {
        var t,
          n = module34.default(module400);

        if (module1858) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function V(t) {
      var n, o;
      module24.default(this, V);
      (o = L.call(this, t)).sectionList = React.default.createRef();
      o.isSticky = false;
      o.blockUpdateIndex = false;
      o.tabPressed = true;
      o.previousState = '';
      o.state = {
        name: null != (n = o.user) && n.Nome ? o.user.Nome : '',
        photo: o.photo || '',
        photoType: '',
        error: {},
        advantages: [],
        user: o.user || {},
        viewableItems: [],
        availablePoints: 0,
      };
      o.onLogout = o.onLogout.bind(module39.default(o));
      o.renderContent = o.renderContent.bind(module39.default(o));
      o.onViewableItemsChanged = o.onViewableItemsChanged.bind(module39.default(o));
      o.renderBenefitItem = o.renderBenefitItem.bind(module39.default(o));
      return o;
    }

    module25.default(V, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props.navigation;
          this._onFocus = n.addListener('focus', function () {
            if (t.user) t.getUserData();
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
      {
        key: 'getInfo',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                  case 'end':
                    return t.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        },
      },
      {
        key: 'getUserData',
        value: function () {
          var t, l, s, u, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    t = this.props.dispatch;
                    f.prev = 1;
                    t(module1224.setLoader(true));
                    f.next = 5;
                    return regeneratorRuntime.default.awrap(
                      Promise.all([
                        module1226.API.get({
                          url: module1226.Endpoints.getUserData(this.user.IdCliente),
                          axiosConfig: {
                            callback: this.getUserData,
                          },
                        }),
                        module1226.API.get({
                          url: module1226.Endpoints.advantages(),
                          axiosConfig: {
                            callback: this.getUserData,
                          },
                        }),
                      ])
                    );

                  case 5:
                    l = f.sent;
                    s = module12.default(l, 2);
                    u = s[0];
                    c = s[1];
                    t(module1224.setLoader(false));
                    if (u.ok) t(module1224.setUser(u.data));
                    if (c.ok)
                      this.setState({
                        advantages: c.data,
                      });
                    else {
                      t(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }
                    f.next = 18;
                    break;

                  case 14:
                    f.prev = 14;
                    f.t0 = f.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 18:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[1, 14]],
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
                var n = t.props,
                  o = n.dispatch,
                  l = n.navigation;
                o(module1224.setLogout());
                l.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Home',
                    },
                  ],
                });
              },
            },
          ]);
        },
      },
      {
        key: 'OPTIONS_LIST',
        get: function () {
          var t = this.props.navigation;
          return [
            {
              _id: 1,
              title: module458.default.profile.allPurchases,
              onPress: function () {
                return t.navigate('Orders');
              },
              icon: 'bag-outline',
              disabled: !this.user,
            },
            {
              _id: 2,
              title: module458.default.profile.creditsAndVouchers,
              onPress: function () {
                return t.navigate('CheckCreditsVouchers');
              },
              icon: 'vale',
              disabled: !this.user,
            },
            {
              _id: 3,
              title: module458.default.authentication.lanidorCardInfo,
              onPress: function () {
                return t.navigate('LaCardInfo');
              },
              icon: 'settings',
              disabled: false,
            },
            {
              _id: 4,
              title: module458.default.profile.pointsHistory,
              onPress: function () {
                return t.navigate('LanidorCard');
              },
              icon: 'settings',
              disabled: !this.user,
            },
            {
              _id: 6,
              title: module458.default.profile.myReservations,
              onPress: function () {
                return t.navigate('Reservations');
              },
              icon: 'Delivery-Outline',
              disabled: !this.user,
            },
            {
              _id: 7,
              title: module458.default.profile.birthdayDiscounts,
              onPress: function () {
                return t.navigate('BirthdayDiscounts');
              },
              icon: 'Delivery-Outline',
              disabled: !this.user,
            },
            {
              _id: 8,
              title: this.user
                ? module458.default.profile.myAccount
                : module1262.translate(module458.default.authentication.login) + ' | ' + module1262.translate(module458.default.profile.createAccount),
              onPress: this.user
                ? function () {
                    return t.navigate('PersonalData');
                  }
                : function () {
                    return t.navigate('Login');
                  },
              icon: 'user-outline',
              disabled: false,
            },
            {
              _id: 9,
              title: module458.default.profile.stores,
              onPress: function () {
                return t.navigate('Stores');
              },
              icon: 'map-outline',
              disabled: !this.user,
            },
            {
              _id: 10,
              title: module458.default.profile.help,
              onPress: function () {
                return t.navigate('Help');
              },
              icon: 'info',
              disable: false,
            },
          ];
        },
      },
      {
        key: 'optionPress',
        value: function () {},
      },
      {
        key: 'isLoggedIn',
        get: function () {
          var t = this.props.user;
          return Boolean(t.value);
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'photo',
        get: function () {
          return '';
        },
      },
      {
        key: 'renderNotLoggedIn',
        value: function () {
          var t = this.props.navigation;
          return React.default.createElement(module472.ScreenMessage, {
            title: module458.default.empty.notLoggedInTitle,
            message: module458.default.empty.notLoggedInMessageProfile,
            icon: 'user',
            showButton: true,
            button: module458.default.authentication.login,
            onPress: function () {
              return t.navigate('Login');
            },
          });
        },
      },
      {
        key: 'renderPointsArea',
        value: function () {
          var t = module1860.CStyles(),
            n = this.props.user.value.LACARD_pontosDisponiveis,
            o = n || 0,
            l = 6e3 - o,
            s = 12e3 - o,
            u = false,
            c = 0,
            f = 0;

          if (o >= 12e3) {
            u = true;
            c = 100;
            f = Math.floor(o / 12e3);
          } else c = (o / 100).toFixed(0);

          return React.default.createElement(
            ReactNative.View,
            {
              style: t.pointsArea,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.pointsUpperArea,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.pointsUpperLeftArea,
                },
                React.default.createElement(
                  module1616.AnimatedCircularProgress,
                  {
                    size: module474.ms(100),
                    width: module474.ms(4),
                    fill: c,
                    tintColor: module474.Color.black,
                    duration: 0,
                    rotation: 210,
                    arcSweepAngle: 300,
                    onAnimationComplete: function () {},
                    backgroundColor: module474.Color.grayBackground,
                  },
                  function (t) {
                    return React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: 'grey',
                            fontFamily: module474.FontFamily.bold,
                            fontSize: module474.FontSize.xxl,
                          },
                        },
                        '10 \u20ac'
                      )
                    );
                  }
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.pointsUpperRightArea,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.semiBold,
                      fontSize: module474.FontSize.xxxl,
                      color: module474.Color.black,
                    },
                  },
                  o + ' ' + module458.default.generic.points
                ),
                u
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          t.pointsUpperRightAreaHorizontalTextContainer,
                          {
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.pointsAreaLightText,
                        },
                        module458.default.lanidorCard.youHave
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.pointsAreaRegularText,
                        },
                        ' ',
                        f,
                        ' '
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.pointsAreaLightText,
                        },
                        module458.default.lanidorCard.vouchersAvailable
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.pointsAreaRegularText,
                        },
                        '10\u20ac'
                      )
                    )
                  : React.default.createElement(
                      React.default.Fragment,
                      null,
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: [
                            t.pointsUpperRightAreaHorizontalTextContainer,
                            {
                              marginTop: module474.ms(5),
                            },
                          ],
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaRegularText,
                          },
                          l,
                          ' '
                        ),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaLightText,
                          },
                          module458.default.profile.pointsMissingTo
                        ),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaRegularText,
                          },
                          ' 5\u20ac'
                        )
                      ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: t.pointsUpperRightAreaHorizontalTextContainer,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaRegularText,
                          },
                          s,
                          ' '
                        ),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaLightText,
                          },
                          module458.default.profile.pointsMissingTo
                        ),
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.pointsAreaRegularText,
                          },
                          ' 10\u20ac'
                        )
                      )
                    )
              )
            )
          );
        },
      },
      {
        key: 'renderHistoryArea',
        value: function () {
          var t = module1860.CStyles(),
            n = this.props.navigation;
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.historyAreaContainer,
            },
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                disabled: !this.user,
                onPress: function () {
                  return n.navigate('LanidorCard');
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.historyAreaLeft,
                    {
                      opacity: this.user ? 1 : 0.5,
                    },
                  ],
                },
                React.default.createElement(module472.Icon, {
                  name: 'Historico-pontos',
                  size: module474.ms(22),
                  style: {
                    marginBottom: module474.ms(7.5),
                  },
                  color: module474.Color.darkGray,
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.semiBold,
                      fontSize: module474.FontSize.s,
                      color: module474.Color.darkGray,
                    },
                  },
                  module458.default.profile.pointsHistory.toUpperCase()
                )
              )
            ),
            React.default.createElement(ReactNative.View, {
              style: {
                width: module474.ms(2),
                height: '60%',
                backgroundColor: 'black',
              },
            }),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                disabled: !this.user,
                onPress: function () {
                  return n.navigate('Orders');
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.historyAreaLeft,
                    {
                      opacity: this.user ? 1 : 0.5,
                    },
                  ],
                },
                React.default.createElement(module472.Icon, {
                  name: 'Compras-perfil',
                  size: module474.ms(24),
                  style: {
                    marginBottom: module474.ms(7.5),
                  },
                  color: 'grey',
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.semiBold,
                      fontSize: module474.FontSize.s,
                      color: module474.Color.darkGray,
                    },
                  },
                  module458.default.profile.allPurchases.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderBenefitItem',
        value: function (t) {
          var n = t.item,
            o = module1860.CStyles(),
            l = this.props.navigation;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return l.navigate('LaCardInfo');
              },
            },
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.View,
                {
                  style: o.benefitItemImgWrapper,
                },
                React.default.createElement(module1272.default, {
                  resizeMode: 'contain',
                  style: o.benefitImg,
                  source: {
                    uri: n.Imagem,
                  },
                })
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  ellipsizeMode: 'tail',
                  style: {
                    fontFamily: module474.FontFamily.bold,
                    color: module474.Color.black,
                    width: module474.ms(175),
                    marginTop: module474.ms(5),
                  },
                },
                n.Descricao
              )
            )
          );
        },
      },
      {
        key: 'onViewableItemsChanged',
        value: function (t) {
          var n = t.viewableItems;
          t.changed;
          this.setState({
            viewableItems: n,
          });
        },
      },
      {
        key: 'renderAdvantageFooterComponent',
        value: function (t) {
          var n = this.state.viewableItems,
            o = module1860.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: o.benefitsAreaDotsArea,
            },
            t.map(function (t, l) {
              var s;
              return React.default.createElement(ReactNative.View, {
                style: [
                  o.benefitsAreaDot,
                  {
                    backgroundColor: (null == (s = n[0]) ? undefined : s.index) === l ? 'black' : module474.Color.lightGray,
                  },
                ],
              });
            })
          );
        },
      },
      {
        key: 'renderBenefits',
        value: function () {
          var t = module1860.CStyles(),
            n = this.state.advantages;
          return n.length
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    marginTop: module474.ms(15),
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: module474.ms(20),
                      alignItems: 'center',
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: t.myBenefitsText,
                    },
                    module458.default.profile.myBenefits
                  )
                ),
                React.default.createElement(ReactNative.FlatList, {
                  onViewableItemsChanged: this.onViewableItemsChanged,
                  viewabilityConfig: {
                    itemVisiblePercentThreshold: 85,
                  },
                  horizontal: true,
                  style: {
                    marginTop: module474.ms(25),
                    paddingLeft: module474.ms(20),
                  },
                  key: 'BenefitsList',
                  data: n,
                  renderItem: this.renderBenefitItem,
                  showsHorizontalScrollIndicator: false,
                }),
                this.renderAdvantageFooterComponent(n)
              )
            : null;
        },
      },
      {
        key: 'renderProfileOptionItem',
        value: function (t) {
          var n = module1860.CStyles(),
            o = t.item,
            l = t.index;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              disabled: o.disabled,
              onPress: o.onPress,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.optionItemContainer,
                  {
                    backgroundColor: l % 2 == 0 ? '#F2EDE1' : 'white',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.optionItemLeftArea,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.optionItemText,
                      {
                        color: o.disabled ? module474.Color.ripple : 'black',
                      },
                    ],
                  },
                  o.title.toUpperCase()
                )
              ),
              React.default.createElement(module472.Icon, {
                name: 'Seta-perfil1',
                size: module474.ms(20),
                style: {
                  opacity: o.disabled ? 0.1 : 1,
                },
              })
            )
          );
        },
      },
      {
        key: 'renderOptions',
        value: function () {
          return React.default.createElement(ReactNative.FlatList, {
            keyExtractor: S,
            style: {
              marginTop: module474.ms(25),
            },
            scrollEnabled: false,
            key: 'ProfileOptionList',
            data: this.OPTIONS_LIST,
            showsVerticalScrollIndicator: false,
            renderItem: this.renderProfileOptionItem,
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return React.default.createElement(React.default.Fragment, null, this.renderPointsArea(), this.renderHistoryArea(), this.renderBenefits(), this.renderOptions());
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props.navigation,
            n = module1860.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              customHeader: true,
              rightAction: function () {
                return t.navigate('Settings');
              },
              rightIcon: 'settings',
              title: this.user && module458.default.profile.hello + ' ',
              subtitle: this.user && this.user.Nome.split(' ')[0] + '!',
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right'],
                style: n.root,
              },
              React.default.createElement(
                ReactNative.ScrollView,
                {
                  showsVerticalScrollIndicator: false,
                },
                this.renderContent()
              )
            )
          );
        },
      },
    ]);
    return V;
  })(React.Component),
  D = module400.connect(function (t) {
    return {
      user: t.user,
      token: t.token,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(V);

exports.default = D;
