require('./1965');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  module47 = require('./47'),
  React = L(require('react')),
  ReactNative = require('react-native'),
  module482 = require('./482'),
  module1327 = require('./1327'),
  module1380 = require('./1380'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1394 = require('./1394'),
  module1494 = L(require('./1494')),
  module1224 = require('./1224'),
  module1941 = require('./1941'),
  module891 = require('./891'),
  module1946 = require('./1946'),
  module474 = require('./474'),
  module437 = require('./437');

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (B = function (t) {
    return t ? o : n;
  })(t);
}

function L(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = B(n);
  if (o && o.has(t)) return o.get(t);
  var c = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var s = l ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (s && (s.get || s.set)) Object.defineProperty(c, u, s);
      else c[u] = t[u];
    }

  c.default = t;
  if (o) o.set(t, c);
  return c;
}

function j() {
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

function I(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

module1946.createDrawerNavigator();
var A = module1327.createStackNavigator(),
  x = module1380.createBottomTabNavigator(),
  H = {
    headerMode: 'none',
    screenOptions: (function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        if (n % 2)
          I(Object(o), true).forEach(function (n) {
            module47.default(t, n, o[n]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
        else
          I(Object(o)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
          });
      }

      return t;
    })({}, module1327.TransitionPresets.SlideFromRightIOS),
  };
module1327.createStackNavigator();

function M() {
  return React.default.createElement(
    T.Navigator,
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
    React.default.createElement(T.Screen, {
      name: 'Home',
      component: module1494.Home,
    }),
    React.default.createElement(T.Screen, {
      name: 'TemplateScreen',
      component: module1494.TemplateScreen,
    }),
    React.default.createElement(T.Screen, {
      name: 'TemplateDetails',
      component: module1494.TemplateDetails,
    })
  );
}

var T = module1327.createStackNavigator();

function W() {
  return React.default.createElement(
    T.Navigator,
    {
      initialRouteName: 'Profile',
      headerMode: 'none',
    },
    React.default.createElement(T.Screen, {
      name: 'Profile',
      component: module1494.Profile,
    }),
    React.default.createElement(T.Screen, {
      name: 'Login',
      component: module1494.Login,
    }),
    React.default.createElement(T.Screen, {
      name: 'ChangePassword',
      component: module1494.ChangePassword,
    }),
    React.default.createElement(T.Screen, {
      name: 'ChangePersonalData',
      component: module1494.ChangePersonalData,
    }),
    React.default.createElement(T.Screen, {
      name: 'BirthdayDiscounts',
      component: module1494.BirthdayDiscounts,
    }),
    React.default.createElement(T.Screen, {
      name: 'CheckCreditsVouchers',
      component: module1494.CheckCreditsVouchers,
    }),
    React.default.createElement(T.Screen, {
      name: 'CreditCards',
      component: module1494.CreditCards,
    }),
    React.default.createElement(T.Screen, {
      name: 'ChooseStore',
      component: module1494.ChooseStore,
    }),
    React.default.createElement(T.Screen, {
      name: 'LanidorCard',
      component: module1494.LanidorCard,
    }),
    React.default.createElement(T.Screen, {
      name: 'ManageCards',
      component: module1494.ManageCards,
    }),
    React.default.createElement(T.Screen, {
      name: 'Newsletters',
      component: module1494.Newsletters,
    }),
    React.default.createElement(T.Screen, {
      name: 'Orders',
      component: module1494.Orders,
    }),
    React.default.createElement(T.Screen, {
      name: 'OrderDetail',
      component: module1494.OrderDetail,
    }),
    React.default.createElement(T.Screen, {
      name: 'PersonalData',
      component: module1494.PersonalData,
    }),
    React.default.createElement(T.Screen, {
      name: 'Reservations',
      component: module1494.Reservations,
    }),
    React.default.createElement(T.Screen, {
      name: 'UserSettings',
      component: module1494.UserSettings,
    }),
    React.default.createElement(T.Screen, {
      name: 'Settings',
      component: module1494.Settings,
    }),
    React.default.createElement(T.Screen, {
      name: 'LaCardInfo',
      component: module1494.LaCardInfo,
    }),
    React.default.createElement(T.Screen, {
      name: 'Register',
      component: module1494.Register,
    }),
    React.default.createElement(T.Screen, {
      name: 'RegisterExtraInfo',
      component: module1494.RegisterExtraInfo,
    }),
    React.default.createElement(T.Screen, {
      name: 'Stores',
      component: module1494.Stores,
    })
  );
}

var _ = module1327.createStackNavigator();

function z() {
  return React.default.createElement(
    _.Navigator,
    {
      initialRouteName: 'Cart',
      headerMode: 'none',
    },
    React.default.createElement(_.Screen, {
      name: 'Cart',
      component: module1494.Cart,
    }),
    React.default.createElement(_.Screen, {
      name: 'OfferEnvelope',
      component: module1494.OfferEnvelope,
    }),
    React.default.createElement(_.Screen, {
      name: 'Checkout',
      component: module1494.Checkout,
    }),
    React.default.createElement(_.Screen, {
      name: 'LanidorCard',
      component: module1494.LanidorCard,
    })
  );
}

var F = module1327.createStackNavigator();

function G() {
  return React.default.createElement(
    F.Navigator,
    {
      initialRouteName: 'Catalogue',
      headerMode: 'none',
    },
    React.default.createElement(F.Screen, {
      name: 'Catalogue',
      component: module1494.Catalogue,
    }),
    React.default.createElement(F.Screen, {
      name: 'InnerCatalogue',
      component: module1494.InnerCatalogue,
    }),
    React.default.createElement(F.Screen, {
      name: 'Products',
      component: module1494.Products,
    }),
    React.default.createElement(F.Screen, {
      name: 'Stores',
      component: module1494.Stores,
    }),
    React.default.createElement(F.Screen, {
      name: 'ProductDetail',
      component: module1494.ProductDetail,
    }),
    React.default.createElement(_.Screen, {
      name: 'Checkout',
      component: module1494.Checkout,
    }),
    React.default.createElement(_.Screen, {
      name: 'Cart',
      component: module1494.Cart,
    }),
    React.default.createElement(F.Screen, {
      name: 'SizeGuide',
      component: module1494.SizeGuide,
    })
  );
}

var V = function (t, n) {
    return {
      tabBarLabel: function (t) {},
      tabBarIcon: function (n) {
        return React.default.createElement(
          module1941.CustomTabIcon,
          module11.default({}, n, {
            screen: t,
          })
        );
      },
    };
  },
  U = (function (t, ...args) {
    module35.default(C, t);

    var module47 = C,
      module1327 = j(),
      h = function () {
        var t,
          n = module34.default(module47);

        if (module1327) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function C() {
      var t;
      module24.default(this, C);
      (t = h.call(this, ...args)).navigator = React.default.createRef();

      t.onAppearanceChange = function () {
        var n = ReactNative.Appearance.getColorScheme();
        setImmediate(function () {
          ReactNative.LayoutAnimation.configureNext(ReactNative.LayoutAnimation.Presets.easeInEaseOut);
          t.props.dispatch(module1224.setColorScheme(n));
        });
      };

      t.handleBackPress = function () {
        try {
          var n = t.navigator.current.getRootState(),
            o = n.routes,
            c = n.index,
            l = false;
          if ((l || (l = 0 === c), !l)) l = 0 === o[c].index;
          if (l)
            ReactNative.Alert.alert(
              module458.default.generic.attention,
              module458.default.generic.exitApp,
              [
                {
                  text: module458.default.generic.no,
                },
                {
                  text: module458.default.generic.yes,
                  onPress: ReactNative.BackHandler.exitApp,
                  style: 'destructive',
                },
              ],
              {
                cancelable: false,
              }
            );
          return l;
        } catch (t) {
          return false;
        }
      };

      t.onStateChange = function (n) {
        t.getScreen(n);
      };

      return t;
    }

    module25.default(C, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          module1394.default.saveNavigator(function () {
            return t.navigator.current;
          });
          ReactNative.BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
          ReactNative.Appearance.addChangeListener(this.onAppearanceChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
          ReactNative.Appearance.removeChangeListener(this.onAppearanceChange);
        },
      },
      {
        key: 'initialRouteName',
        get: function () {
          return 'Home';
        },
      },
      {
        key: 'isLoggedIn',
        get: function () {
          var t = this.props,
            n = t.user,
            o = t.token;
          return Boolean(n.value && o.value);
        },
      },
      {
        key: 'getScreen',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '',
            o = t.index,
            c = t.routes,
            l = t.params,
            u = c[o];
          if (!u.state)
            return {
              parent: n,
              routeName: u.name,
              params: l,
            };
          var s = u.name || n;
          return this.getScreen(u.state || u, n ? n + ' ~> ' + s : s);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          ReactNative.Appearance.getColorScheme();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(ReactNative.StatusBar, {
              animated: true,
              barStyle: 'light-content',
            }),
            React.default.createElement(
              module482.NavigationContainer,
              {
                ref: this.navigator,
                theme: module482.DefaultTheme,
                onStateChange: this.onStateChange,
              },
              React.default.createElement(
                module891.Host,
                null,
                React.default.createElement(
                  A.Navigator,
                  module11.default(
                    {
                      initialRouteName: this.initialRouteName,
                    },
                    H
                  ),
                  React.default.createElement(A.Screen, {
                    name: 'RegisterExtraInfo',
                    component: module1494.RegisterExtraInfo,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Register',
                    component: module1494.Register,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'LaCardInfo',
                    component: module1494.LaCardInfo,
                  }),
                  React.default.createElement(F.Screen, {
                    name: 'Products',
                    component: module1494.Products,
                  }),
                  React.default.createElement(F.Screen, {
                    name: 'ProductDetail',
                    component: module1494.ProductDetail,
                  }),
                  React.default.createElement(F.Screen, {
                    name: 'Stores',
                    component: module1494.Stores,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Home',
                    children: function () {
                      module24 = t;
                      return React.default.createElement(
                        x.Navigator,
                        {
                          initialRouteName: 'Home',
                          tabBar: function (t) {
                            var n, o, c, l, u, s;
                            return 'ProductDetail' ==
                              (null == (n = t.state)
                                ? undefined
                                : null == (o = n.routes[1])
                                ? undefined
                                : null == (c = o.state)
                                ? undefined
                                : c.routes[
                                    null == t ? undefined : null == (l = t.state) ? undefined : null == (u = l.routes[1]) ? undefined : null == (s = u.state) ? undefined : s.index
                                  ].name)
                              ? null
                              : React.default.createElement(module1941.TabBar, t);
                          },
                          tabBarOptions: {
                            style: {
                              height: module474.ms(50),
                              borderTopWidth: module474.ms(1),
                              paddingTop: module474.ms(5),
                              paddingBottom: module474.ms(2),
                              overflow: 'hidden',
                              justifyContent: 'flex-start',
                              paddingHorizontal: module474.ms(5),
                            },
                            activeTintColor: module474.Color.primary,
                            safeAreaInsets: {
                              top: 0,
                              bottom: 0,
                              left: module474.ms(5),
                              right: module474.ms(5),
                            },
                            keyboardHidesTabBar: true,
                          },
                        },
                        React.default.createElement(x.Screen, {
                          name: 'Home',
                          component: M,
                          options: V('home'),
                        }),
                        React.default.createElement(x.Screen, {
                          name: 'Catalogue',
                          component: G,
                          options: V('catalogue'),
                        }),
                        React.default.createElement(x.Screen, {
                          name: 'Cart',
                          component: z,
                          options: V('cart'),
                        }),
                        React.default.createElement(x.Screen, {
                          name: 'Wishlist',
                          component: module1494.Wishlist,
                          options: V('favorites'),
                        }),
                        React.default.createElement(x.Screen, {
                          name: 'Pro_Log_Stack',
                          component: null != module24 && null != (o = module24.props) && null != (c = o.user) && c.value ? W : module1494.Login,
                          options: V(((l = module437.Store.getState().user), Boolean(l.value) ? 'profile' : 'login')),
                        })
                      );
                      var module24, o, c, l;
                    },
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Search',
                    component: module1494.Search,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'ForgotPassword',
                    component: module1494.ForgotPassword,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'More',
                    component: module1494.More,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Notifications',
                    component: module1494.Notifications,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Languages',
                    component: module1494.Languages,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'PrivacyPolicy',
                    component: module1494.PrivacyPolicy,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'TermsAndConditions',
                    component: module1494.TermsAndConditions,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'WebPayment',
                    component: module1494.WebPayment,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Countries',
                    component: module1494.Countries,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'Help',
                    component: module1494.Help,
                  }),
                  React.default.createElement(A.Screen, {
                    name: 'ReceiptView',
                    component: module1494.ReceiptView,
                  }),
                  React.default.createElement(F.Screen, {
                    name: 'SizeGuide',
                    component: module1494.SizeGuide,
                  })
                )
              )
            )
          );
        },
      },
    ]);
    return C;
  })(React.Component),
  q = module400.connect(function (t) {
    return {
      user: t.user,
      token: t.token,
      colorScheme: t.colorScheme,
      language: t.language,
    };
  })(U);

exports.default = q;
