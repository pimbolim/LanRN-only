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
  module458 = require('./458'),
  module472 = require('./472'),
  module1520 = require('./1520'),
  module1503 = require('./1503'),
  D = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module431 = require('./431'),
  module1497 = require('./1497'),
  module1278 = require('./1278');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
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

var I = (function (t) {
    module35.default(L, t);

    var module400 = L,
      T = F(),
      I = function () {
        var t,
          n = module34.default(module400);

        if (T) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function L(t) {
      var n, l, s;
      module24.default(this, L);
      (s = I.call(this, t))._phoneInput = null;
      s.state = {
        name: s.user.Nome || '',
        address: s.user.Morada || '',
        zipCode: s.user.CodPostal || '',
        city: s.user.Localidade || '',
        country: s.user.Pais || '',
        vatNumber: s.user.NContrib || '',
        cellPhone: s.user.Telemovel || '',
        birthDate:
          null != (n = s.user) && n.DataNascimento
            ? module1278.DateTime.fromFormat(null == (l = s.user) ? undefined : l.DataNascimento, 'MM/dd/yyyy 00:00:00').toFormat('dd-MM-yyyy')
            : '',
        employeeNumber: s.user.NumFuncionario || '',
        year: '',
        month: '',
        day: '',
        highlightMissingFields: false,
        showCountryList: false,
        loaded: true,
        fromCheckout: s.fromCheckout,
        showDatePicker: false,
      };
      s.renderContent = s.renderContent.bind(module39.default(s));
      s.submitProfileData = s.submitProfileData.bind(module39.default(s));
      s.renderBottomSheetContent = s.renderBottomSheetContent.bind(module39.default(s));
      s.renderCountryItem = s.renderCountryItem.bind(module39.default(s));
      s.goToCountries = s.goToCountries.bind(module39.default(s));
      s.deleteUser = s.deleteUser.bind(module39.default(s));
      return s;
    }

    module25.default(L, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'countriesList',
        get: function () {
          return ['Espanha', 'Portugal', 'Fran\xe7a', 'Alemanha', 'Belgica', 'USA', 'Brasil'];
        },
      },
      {
        key: 'params',
        get: function () {
          try {
            return this.props.route.params || {};
          } catch (t) {
            return {};
          }
        },
      },
      {
        key: 'fromCheckout',
        get: function () {
          return this.params.fromCheckout || false;
        },
      },
      {
        key: 'getUserData',
        value: function () {
          var t, o;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    t = this.props.dispatch;
                    l.prev = 1;
                    t(module1224.setLoader(true));
                    l.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.getUserData(this.user.IdCliente),
                        axiosConfig: {
                          callback: this.getUserData,
                        },
                      })
                    );

                  case 5:
                    if ((o = l.sent).ok) {
                      t(module1224.setLoader(false));
                      t(module1224.setUser(o.data));
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== o.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    l.next = 13;
                    break;

                  case 9:
                    l.prev = 9;
                    l.t0 = l.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return l.stop();
                }
            },
            null,
            this,
            [[1, 9]],
            Promise
          );
        },
      },
      {
        key: 'componentDidMount',
        value: function () {},
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.setState({
            showCountryList: false,
            showDatePicker: false,
          });
        },
      },
      {
        key: 'deleteUser',
        value: function () {
          var t, module24, module25;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    t = this.props;
                    module24 = t.dispatch;
                    module25 = t.navigation;
                    u.prev = 1;
                    u.next = 4;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.forgetUser(this.user.IdCliente),
                        data: {},
                      })
                    );

                  case 4:
                    if (!u.sent.ok) {
                      u.next = 10;
                      break;
                    }

                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: module458.default.profile.deleteUser4,
                    });
                    u.next = 9;
                    return regeneratorRuntime.default.awrap(module24(module1224.setLogout()));

                  case 9:
                    module25.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Home',
                        },
                      ],
                    });

                  case 10:
                    u.next = 15;
                    break;

                  case 12:
                    u.prev = 12;
                    u.t0 = u.catch(1);
                    console.log('\ud83d\ude80 ~ file: index.tsx ~ line 146 ~ ChangePersonalData ~ deleteUser ~ err', u.t0);

                  case 15:
                    u.prev = 15;
                    return u.finish(15);

                  case 17:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            this,
            [[1, 12, 15, 17]],
            Promise
          );
        },
      },
      {
        key: 'submitProfileData',
        value: function () {
          var t, o, l, u, s, c, f, p, h, y, b, k, D, x;
          return regeneratorRuntime.default.async(
            function (P) {
              for (;;)
                switch ((P.prev = P.next)) {
                  case 0:
                    if (
                      ((t = this.state),
                      (o = t.name),
                      (l = t.address),
                      (u = t.zipCode),
                      (s = t.city),
                      (c = t.country),
                      (f = t.vatNumber),
                      (p = t.cellPhone),
                      (h = t.laCard),
                      (y = t.birthDate),
                      (b = t.employeeNumber),
                      (k = this.props.dispatch),
                      o)
                    ) {
                      P.next = 7;
                      break;
                    }

                    this.setState(
                      {
                        highlightMissingFields: true,
                      },
                      function () {
                        return module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.authentication.pleaseFillAllFieldsMessage,
                        });
                      }
                    );
                    return P.abrupt('return');

                  case 7:
                    if (o.includes(' ')) {
                      P.next = 10;
                      break;
                    }

                    this.setState(
                      {
                        highlightMissingFields: true,
                      },
                      function () {
                        return module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.authentication.nameSurnameRequired,
                        });
                      }
                    );
                    return P.abrupt('return');

                  case 10:
                    P.prev = 10;
                    D = {};
                    D = {
                      Nome: o,
                      Morada: l || '',
                      Localidade: s || '',
                      CodPostal: u || '',
                      IdTipoPais: c || null,
                      NContrib: f || '',
                      Telemovel: p || '',
                      NCartaoLanidor: h || '',
                      NumFuncionario: b || '',
                    };
                    if (y) D.DataNascimento = module1278.DateTime.fromFormat(y, 'dd-MM-yyyy').toFormat('yyyy-MM-dd');
                    k(module1224.setLoader(true));
                    P.next = 17;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.refreshUserData(this.user.IdCliente),
                        data: D,
                        axiosConfig: {
                          callback: this.submitProfileData,
                        },
                      })
                    );

                  case 17:
                    if (!(x = P.sent).ok || !x.data.success) {
                      P.next = 31;
                      break;
                    }

                    if (
                      (k(module1224.setLoader(false)),
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: module458.default.profile.changedMessage,
                      }),
                      !this.fromCheckout)
                    ) {
                      P.next = 28;
                      break;
                    }

                    P.next = 24;
                    return regeneratorRuntime.default.awrap(this.getUserData());

                  case 24:
                    this.props.navigation.navigate('Profile');
                    this.props.navigation.navigate('Checkout');
                    P.next = 29;
                    break;

                  case 28:
                    this.props.navigation.goBack();

                  case 29:
                    P.next = 33;
                    break;

                  case 31:
                    k(module1224.setLoader(false));
                    if (401 !== x.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: x.data.message,
                      });

                  case 33:
                    P.next = 39;
                    break;

                  case 35:
                    P.prev = 35;
                    P.t0 = P.catch(10);
                    k(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 39:
                    P.prev = 39;
                    k(module1224.setLoader(false));
                    return P.finish(39);

                  case 42:
                  case 'end':
                    return P.stop();
                }
            },
            null,
            this,
            [[10, 35, 39, 42]],
            Promise
          );
        },
      },
      {
        key: 'onDelete',
        value: function () {
          var t = this;
          ReactNative.Alert.alert(module458.default.profile.deleteUser2, module458.default.profile.deleteUser3, [
            {
              text: module458.default.generic.cancel,
              style: 'cancel',
            },
            {
              text: module458.default.generic.delete,
              style: 'destructive',
              onPress: function () {
                t.deleteUser();
              },
            },
          ]);
        },
      },
      {
        key: 'convertDateToString',
        value: function (t) {
          this.setState({
            birthDate: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
          });
        },
      },
      {
        key: 'goToCountries',
        value: function () {
          var t = this;
          this.props.navigation.navigate('Countries', {
            phoneInput: true,
            onSelect: function (n) {
              var o;
              if (!(null == (o = t._phoneInput))) o.selectCountry(n.alpha2Code.toLowerCase());
              t.setState({
                cellPhone: '+' + n.callingCodes[0],
              });
            },
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t,
            n = this,
            o = module1520.CStyles(),
            l = ReactNative.Appearance.getColorScheme(),
            u = this.state,
            s = u.name,
            c = u.address,
            f = u.zipCode,
            y = u.city,
            k = u.country,
            w = u.vatNumber,
            S = u.cellPhone,
            x = u.highlightMissingFields,
            E = u.showCountryList,
            T = u.birthDate,
            F = u.showDatePicker;

          if (T) {
            var I = T.split('-');
            t = new Date(+I[2], I[1] - 1, +I[0]);
          }

          var L = ReactNative.Dimensions.get('window').width / 2 - D.ms(20) - D.ms(10);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: D.ms(50),
              },
              label: module458.default.authentication.name,
              value: s,
              onChange: function (t) {
                return n.setState({
                  name: t,
                });
              },
              highlightRed: x && !s,
            }),
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: D.ms(10),
              },
              label: module458.default.authentication.address,
              value: c,
              onChange: function (t) {
                return n.setState({
                  address: t,
                });
              },
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: o.halfSizedInputsContainer,
              },
              React.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: L,
                },
                labelTextExtraStyle: o.inputExtraStyle,
                label: module458.default.authentication.zipCode,
                keyboardType: 'numbers-and-punctuation',
                value: f,
                onChange: function (t) {
                  return n.setState({
                    zipCode: t,
                  });
                },
              }),
              React.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: L,
                },
                labelTextExtraStyle: o.inputExtraStyle,
                label: module458.default.authentication.city,
                value: y,
                onChange: function (t) {
                  return n.setState({
                    city: t,
                  });
                },
              })
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.setState({
                    showCountryList: !E,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                React.default.createElement(module472.FloatingInput, {
                  toggle: function () {
                    return n.setState({
                      showCountryList: !E,
                    });
                  },
                  isBottomSheetOpener: true,
                  disabled: true,
                  label: module458.default.generic.country,
                  value: k,
                  onChange: function (t) {
                    return n.setState({
                      country: t,
                    });
                  },
                })
              )
            ),
            React.default.createElement(module472.FloatingInput, {
              label: module458.default.generic.vatNumber,
              keyboardType: 'numeric',
              value: w,
              onChange: function (t) {
                return n.setState({
                  vatNumber: t,
                });
              },
              toggle: function () {
                return n.setState({
                  vatNumber: '',
                });
              },
            }),
            React.default.createElement(module472.FloatingInput, {
              withRef: function (t) {
                return (n._phoneInput = t);
              },
              label: module458.default.authentication.cellPhone,
              keyboardType: 'numeric',
              isPhone: true,
              value: S,
              onChange: function (t) {
                return n.setState({
                  cellPhone: t,
                });
              },
              onSelectCountry: function (t) {
                return n.setState({
                  countryCode: t,
                });
              },
              onPressFlag: this.goToCountries,
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.setState({
                    showDatePicker: true,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.authentication.birthDate,
                  value: T,
                  disabled: true,
                  onChange: function (t) {
                    return n.setState({
                      birthDate: t,
                    });
                  },
                })
              )
            ),
            React.default.createElement(module1497.default, {
              mode: 'date',
              modal: true,
              textColor: 'dark' === l ? 'white' : 'black',
              open: F,
              date: T ? new Date(t) : new Date(),
              onConfirm: function (t) {
                n.setState(
                  {
                    showDatePicker: false,
                  },
                  function () {
                    return n.convertDateToString(t);
                  }
                );
              },
              onCancel: function () {
                n.setState({
                  showDatePicker: false,
                });
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.termsText,
              },
              module458.default.authentication.lanidorDataTreatment
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  o.button,
                  {
                    marginTop: D.ms(40),
                  },
                ],
                onPress: this.submitProfileData,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: o.buttonText,
                },
                module458.default.generic.saveDetails.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  if (n.fromCheckout) {
                    n.props.navigation.navigate('Profile');
                    n.props.navigation.navigate('Checkout');
                  } else n.props.navigation.goBack();
                },
                style: [
                  o.button,
                  {
                    backgroundColor: 'white',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    o.buttonText,
                    {
                      color: 'black',
                    },
                  ],
                },
                module458.default.generic.cancel.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  alignItems: 'center',
                  paddingVertical: D.ms(20),
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    fontSize: D.FontSize.xs,
                    fontFamily: D.FontFamily.regular,
                    color: D.Color.lightGray,
                  },
                  onPress: function () {
                    return n.onDelete();
                  },
                },
                module458.default.profile.deleteUser
              )
            )
          );
        },
      },
      {
        key: 'renderCountryItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = module1520.CStyles(),
            u = this.state.country;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                n.setState({
                  country: o,
                  showCountryList: false,
                });
              },
              style: l.countryItem,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.countryText,
                  o === u && {
                    fontFamily: D.FontFamily.bold,
                  },
                ],
              },
              o
            )
          );
        },
      },
      {
        key: 'renderBottomSheetContent',
        value: function (t) {
          var n = this;
          return React.default.createElement(
            module472.BottomSheet,
            {
              visible: this.state.showCountryList,
              snapPoints: [-1, D.ms(300)],
              onClose: function () {
                return n.setState({
                  showCountryList: false,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: 'white',
                  paddingBottom: t.bottom,
                },
              },
              React.default.createElement(ReactNative.FlatList, {
                key: 'flatCountries',
                data: this.countriesList,
                renderItem: this.renderCountryItem,
              })
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1520.CStyles();
          return this.state.loaded
            ? React.default.createElement(
                React.default.Fragment,
                null,
                React.default.createElement(module472.Header, {
                  back: true,
                  leftAction: function () {
                    if (t.fromCheckout) {
                      t.props.navigation.navigate('Profile');
                      t.props.navigation.navigate('Checkout');
                    } else t.props.navigation.goBack();
                  },
                  title: module458.default.generic.change + ' ' + module458.default.profile.personalData,
                }),
                React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (o) {
                  return React.default.createElement(
                    module472.Wrapper,
                    {
                      edges: ['left', 'right'],
                      style: n.root,
                    },
                    React.default.createElement(
                      module1503.KeyboardAwareScrollView,
                      {
                        showsVerticalScrollIndicator: false,
                        scrollsToTop: true,
                        contentContainerStyle: {
                          flexGrow: 1,
                        },
                      },
                      t.renderContent()
                    ),
                    t.renderBottomSheetContent(o)
                  );
                })
              )
            : null;
        },
      },
    ]);
    return L;
  })(React.Component),
  L = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(I);

exports.default = L;
