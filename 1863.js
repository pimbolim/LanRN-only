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
  module1864 = require('./1864'),
  module474 = require('./474'),
  module1226 = require('./1226'),
  module1224 = require('./1224'),
  module1503 = require('./1503'),
  module431 = require('./431'),
  module1528 = require('./1528'),
  module1497 = require('./1497');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
    return t ? o : n;
  })(t);
}

function D() {
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

var A = (function (t) {
    module35.default(P, t);

    var module400 = P,
      T = D(),
      A = function () {
        var t,
          n = module34.default(module400);

        if (T) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      var n;
      module24.default(this, P);
      (n = A.call(this, t))._phoneInput = null;
      n.state = {
        name: n.user.Nome,
        address: '',
        zipCode: '',
        city: '',
        country: null,
        vatNumber: '',
        cellPhone: '',
        laCard: '',
        employeeNumber: '',
        subscribedNewsletters: [],
        availableNewsLetters: [],
        highlightMissingFields: false,
        countriesList: [],
        showCountryList: false,
        pressedRadioButton: 0,
        cellPhoneExistingLaCard: '',
        idNumberExistingLaCard: '',
        existingLaCardNumber: '',
        highlightExistingLaCardMissingFields: false,
        idNumberNewLaCard: '',
        checkDigitNewLaCard: '',
        birthDateNewLaCard: '',
        highlightNewLaCardMissingFields: false,
        showDatePicker: false,
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.getAllCountries = n.getAllCountries.bind(module39.default(n));
      n.getAvailableNewsLetters = n.getAvailableNewsLetters.bind(module39.default(n));
      n.renderSubscribedNewsLetters = n.renderSubscribedNewsLetters.bind(module39.default(n));
      n.submitProfileData = n.submitProfileData.bind(module39.default(n));
      n.renderBottomSheetContent = n.renderBottomSheetContent.bind(module39.default(n));
      n.renderCountryItem = n.renderCountryItem.bind(module39.default(n));
      n.renderFirstRadioButtonArea = n.renderFirstRadioButtonArea.bind(module39.default(n));
      n.renderSecondRadioButtonArea = n.renderSecondRadioButtonArea.bind(module39.default(n));
      n.convertDateToString = n.convertDateToString.bind(module39.default(n));
      n.goToCountries = n.goToCountries.bind(module39.default(n));
      return n;
    }

    module25.default(P, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'getNewsLetterName',
        value: function (t) {
          switch (t) {
            case 2:
              return 'LA Woman';

            case 3:
              return 'LA Kids&Junior';

            case 4:
              return 'LA Outlet';

            case 31:
              return 'Friendly Brands';

            default:
              return '';
          }
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getAllCountries());

                  case 2:
                  case 'end':
                    return t.stop();
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
          this.setState({
            showCountryList: false,
            showDatePicker: false,
          });
        },
      },
      {
        key: 'getAllCountries',
        value: function () {
          var t, o, module25;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    t = this.props.dispatch;
                    s.prev = 1;
                    t(module1224.setLoader(true));
                    s.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.countriesList(),
                        axiosConfig: {
                          callback: this.getAllCountries,
                        },
                      })
                    );

                  case 5:
                    if (!(o = s.sent).ok) {
                      s.next = 14;
                      break;
                    }

                    t(module1224.setLoader(false));
                    module25 = [];
                    s.next = 11;
                    return regeneratorRuntime.default.awrap(
                      o.data.map(function (t) {
                        module25.push({
                          id: t.idTipoPais,
                          name: t.Designacao,
                        });
                      })
                    );

                  case 11:
                    this.setState({
                      countriesList: module25,
                    });
                    s.next = 16;
                    break;

                  case 14:
                    t(module1224.setLoader(false));
                    if (401 !== o.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });

                  case 16:
                    s.next = 21;
                    break;

                  case 18:
                    s.prev = 18;
                    s.t0 = s.catch(1);
                    t(module1224.setLoader(false));

                  case 21:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            this,
            [[1, 18]],
            Promise
          );
        },
      },
      {
        key: 'getAvailableNewsLetters',
        value: function () {
          var t, o, l, s;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    t = this.props.dispatch;
                    u.prev = 1;
                    t(module1224.setLoader(true));
                    u.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.newsletters(this.user.IdCliente),
                        axiosConfig: {
                          callback: this.getAvailableNewsLetters,
                        },
                      })
                    );

                  case 5:
                    if ((o = u.sent).ok) {
                      t(module1224.setLoader(false));
                      l = [];
                      s = [];
                      o.data.forEach(function (t) {
                        l.push({
                          newsletterTypeId: t.IdTipoNewsletter,
                          description: t.Descricao,
                          checked: t.Checked,
                        });
                        if (t.Checked) s.push(t.IdTipoNewsletter);
                      });
                      this.setState({
                        availableNewsLetters: l,
                        subscribedNewsletters: s,
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== o.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    u.next = 12;
                    break;

                  case 9:
                    u.prev = 9;
                    u.t0 = u.catch(1);
                    t(module1224.setLoader(false));

                  case 12:
                  case 'end':
                    return u.stop();
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
        key: 'submitProfileData',
        value: function () {
          var t, o, l, s, u, c, f, h, p, b, w, v, x, E, N, k, T, D, A, P, R, F, I;
          return regeneratorRuntime.default.async(
            function (B) {
              for (;;)
                switch ((B.prev = B.next)) {
                  case 0:
                    if (
                      ((t = this.state),
                      (o = t.name),
                      (l = t.address),
                      (s = t.zipCode),
                      (u = t.city),
                      (c = t.country),
                      (f = t.vatNumber),
                      (h = t.cellPhone),
                      (p = t.laCard),
                      (b = t.employeeNumber),
                      (w = t.pressedRadioButton),
                      (v = t.cellPhoneExistingLaCard),
                      (x = t.idNumberExistingLaCard),
                      (E = t.existingLaCardNumber),
                      (N = t.idNumberNewLaCard),
                      (k = t.checkDigitNewLaCard),
                      (T = t.birthDateNewLaCard),
                      (D = this.props),
                      (A = D.dispatch),
                      (P = D.navigation),
                      (B.prev = 2),
                      (R = {}),
                      (R = {
                        Nome: o,
                        Morada: l || '',
                        Localidade: u || '',
                        CodPostal: s || '',
                        IdTipoPais: c ? c.id : null,
                        NContrib: f || '',
                        Telemovel: h || '',
                      }),
                      b && (R.NumFuncionario = b),
                      p && (R.NCartaoLanidor = p),
                      1 !== w)
                    ) {
                      B.next = 20;
                      break;
                    }

                    if (!(v && x && E)) {
                      B.next = 16;
                      break;
                    }

                    R.LACARD_Telemovel = v;
                    R.LACARD_NumIdentificacao = x;
                    R.NCartaoLanidor = E;
                    R.TemLACARD = true;
                    R.AderirLACARD = false;
                    B.next = 18;
                    break;

                  case 16:
                    this.setState({
                      highlightExistingLaCardMissingFields: true,
                    });
                    return B.abrupt('return');

                  case 18:
                    B.next = 36;
                    break;

                  case 20:
                    if (2 !== w) {
                      B.next = 34;
                      break;
                    }

                    if (!(N && k && T)) {
                      B.next = 30;
                      break;
                    }

                    R.AdesaoLACARD_numCC = N;
                    F = T.split('-');
                    R.AdesaoLACARD_CK = k;
                    R.AdesaoLACARD_dtNasc = F[2] + '-' + F[1] + '-' + F[0];
                    R.TemLACARD = false;
                    R.AderirLACARD = true;
                    B.next = 32;
                    break;

                  case 30:
                    this.setState({
                      highlightNewLaCardMissingFields: true,
                    });
                    return B.abrupt('return');

                  case 32:
                    B.next = 36;
                    break;

                  case 34:
                    R.TemLACARD = false;
                    R.AderirLACARD = false;

                  case 36:
                    A(module1224.setLoader(true));
                    B.next = 39;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.refreshUserData(this.user.IdCliente),
                        data: R,
                        axiosConfig: {
                          callback: this.submitProfileData,
                        },
                      })
                    );

                  case 39:
                    if (!(I = B.sent).ok || !I.data.success) {
                      B.next = 46;
                      break;
                    }

                    A(module1224.setLoader(false));
                    P.navigate('Home');
                    return B.abrupt('return');

                  case 46:
                    if (I.ok && !I.data.success) {
                      A(module1224.setLoader(false));
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: I.data.message,
                      });
                    } else {
                      A(module1224.setLoader(false));
                      if (401 !== I.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                  case 47:
                    B.next = 53;
                    break;

                  case 49:
                    B.prev = 49;
                    B.t0 = B.catch(2);
                    A(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 53:
                    B.prev = 53;
                    A(module1224.setLoader(false));
                    return B.finish(53);

                  case 56:
                  case 'end':
                    return B.stop();
                }
            },
            null,
            this,
            [[2, 49, 53, 56]],
            Promise
          );
        },
      },
      {
        key: 'handleNewsletterSelectionPress',
        value: function (t) {
          var n = this.state.subscribedNewsletters,
            o = JSON.parse(JSON.stringify(n)),
            l = o.findIndex(function (n) {
              return n === t;
            });
          if (-1 === l) o.push(t);
          else o.splice(l, 1);
          this.setState({
            subscribedNewsletters: o,
          });
        },
      },
      {
        key: 'renderSubscribedNewsletterItem',
        value: function (t) {
          var n = this,
            o = module1864.CStyles(),
            l = this.getNewsLetterName(t.newsletterTypeId),
            s = this.state.subscribedNewsletters.find(function (n) {
              return n === t.newsletterTypeId;
            }),
            u = ReactNative.Dimensions.get('window').width / 4 - module474.ms(20);
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.handleNewsletterSelectionPress(t.newsletterTypeId);
              },
              style: [
                o.availableNewsLettersItem,
                {
                  width: u,
                  backgroundColor: s ? 'black' : 'white',
                },
              ],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  o.availableNewsLettersItemText,
                  {
                    color: s ? 'white' : 'black',
                  },
                ],
                numberOfLines: 2,
                ellipsizeMode: 'tail',
              },
              l || t.description
            )
          );
        },
      },
      {
        key: 'renderSubscribedNewsLetters',
        value: function () {
          var t = this,
            n = module1864.CStyles(),
            o = this.state.availableNewsLetters;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.sectionBigText,
                  {
                    marginTop: module474.ms(25),
                  },
                ],
              },
              module458.default.authentication.stillWithoutRegister.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.availableNewsLettersContainer,
              },
              o.map(function (n) {
                return t.renderSubscribedNewsletterItem(n);
              })
            )
          );
        },
      },
      {
        key: 'radioOptions',
        get: function () {
          return [
            {
              label: module458.default.profile.lanidorCardText1,
              value: 0,
            },
            {
              label: module458.default.authentication.subscribeLaCardProgram,
              value: 1,
            },
          ];
        },
      },
      {
        key: 'renderFirstRadioButtonArea',
        value: function () {
          var t = this,
            n = this.state,
            o = n.pressedRadioButton,
            l = n.cellPhoneExistingLaCard,
            s = n.idNumberExistingLaCard,
            u = n.existingLaCardNumber,
            c = n.highlightExistingLaCardMissingFields;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              module1528.RadioButton,
              {
                style: {
                  marginTop: module474.ms(15),
                },
                labelHorizontal: true,
                key: 'Radio1',
              },
              React.default.createElement(module1528.RadioButtonInput, {
                obj: this.radioOptions[0],
                index: 0,
                isSelected: 1 === o,
                onPress: function () {
                  return 1 === o
                    ? t.setState({
                        pressedRadioButton: 0,
                        highlightExistingLaCardMissingFields: false,
                      })
                    : t.setState({
                        pressedRadioButton: 1,
                        highlightNewLaCardMissingFields: false,
                      });
                },
                borderWidth: 1,
                buttonInnerColor: 'black',
                buttonOuterColor: 'black',
                buttonSize: module474.ms(12),
                buttonOuterSize: module474.ms(20),
                buttonStyle: {},
                buttonWrapStyle: {
                  marginBottom: module474.ms(5),
                },
              }),
              React.default.createElement(module1528.RadioButtonLabel, {
                obj: this.radioOptions[0],
                index: 0,
                labelHorizontal: true,
                onPress: function () {
                  return t.setState({
                    pressedRadioButton: 1,
                  });
                },
                labelStyle: {
                  fontSize: module474.FontSize.m,
                  color: module474.Color.black,
                  marginTop: -module474.ms(6),
                  fontFamily: module474.FontFamily.regular,
                  maxWidth: '95%',
                },
                labelWrapStyle: {
                  flexWrap: 'wrap',
                },
              })
            ),
            1 === o &&
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {
                    marginTop: module474.ms(10),
                  },
                  label: module458.default.generic.idNumber,
                  value: s,
                  onChange: function (n) {
                    return t.setState({
                      idNumberExistingLaCard: n,
                    });
                  },
                  highlightRed: c && !s,
                }),
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.generic.laCard,
                  value: u,
                  onChange: function (n) {
                    return t.setState({
                      existingLaCardNumber: n,
                    });
                  },
                  highlightRed: c && !u,
                }),
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.authentication.cellPhone,
                  value: l,
                  onChange: function (n) {
                    return t.setState({
                      cellPhoneExistingLaCard: n,
                    });
                  },
                  highlightRed: c && !l,
                })
              )
          );
        },
      },
      {
        key: 'convertDateToString',
        value: function (t) {
          this.setState({
            birthDateNewLaCard: t.getDate() + '-' + (t.getMonth() + 1) + '-' + t.getFullYear(),
          });
        },
      },
      {
        key: 'renderSecondRadioButtonArea',
        value: function () {
          var t,
            n = this,
            o = this.state,
            l = o.pressedRadioButton,
            s = o.idNumberNewLaCard,
            u = o.checkDigitNewLaCard,
            c = o.birthDateNewLaCard,
            f = o.showDatePicker,
            b = o.highlightNewLaCardMissingFields,
            w = ReactNative.Appearance.getColorScheme();

          if (c) {
            var S = c.split('-');
            t = new Date(+S[2], S[1] - 1, +S[0]);
          }

          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              module1528.RadioButton,
              {
                style: {
                  marginTop: module474.ms(15),
                },
                labelHorizontal: true,
                key: 'Radio1',
              },
              React.default.createElement(module1528.RadioButtonInput, {
                obj: this.radioOptions[1],
                index: 1,
                isSelected: 2 === l,
                onPress: function () {
                  return 2 === l
                    ? n.setState({
                        pressedRadioButton: 0,
                        highlightNewLaCardMissingFields: false,
                      })
                    : n.setState({
                        pressedRadioButton: 2,
                        highlightExistingLaCardMissingFields: false,
                      });
                },
                borderWidth: 1,
                buttonInnerColor: 'black',
                buttonOuterColor: 'black',
                buttonSize: module474.ms(12),
                buttonOuterSize: module474.ms(20),
                buttonStyle: {},
                buttonWrapStyle: {
                  marginBottom: module474.ms(5),
                },
              }),
              React.default.createElement(module1528.RadioButtonLabel, {
                obj: this.radioOptions[1],
                index: 1,
                labelHorizontal: true,
                onPress: function () {
                  return n.setState({
                    pressedRadioButton: 2,
                  });
                },
                labelStyle: {
                  fontSize: module474.FontSize.m,
                  color: module474.Color.black,
                  marginTop: -module474.ms(6),
                  fontFamily: module474.FontFamily.regular,
                  maxWidth: '95%',
                },
                labelWrapStyle: {
                  flexWrap: 'wrap',
                },
              })
            ),
            2 === l &&
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {
                    marginTop: module474.ms(10),
                  },
                  label: module458.default.generic.idNumber,
                  value: s,
                  onChange: function (t) {
                    return n.setState({
                      idNumberNewLaCard: t,
                    });
                  },
                  highlightRed: b && !s,
                }),
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.profile.checkDigit,
                  value: u,
                  onChange: function (t) {
                    return n.setState({
                      checkDigitNewLaCard: t,
                    });
                  },
                  highlightRed: b && !u,
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
                      containerExtraStyle: {
                        marginTop: module474.ms(10),
                      },
                      label: module458.default.authentication.birthDate,
                      value: c,
                      onChange: function (t) {
                        return n.setState({
                          birthDateNewLaCard: t,
                        });
                      },
                      highlightRed: b && !c,
                    })
                  )
                ),
                React.default.createElement(module1497.default, {
                  mode: 'date',
                  textColor: 'dark' === w ? 'white' : 'black',
                  modal: true,
                  open: f,
                  date: c ? new Date(t) : new Date(),
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
                })
              )
          );
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
          var t = this,
            n = module1864.CStyles(),
            o = this.state,
            l = o.address,
            s = o.zipCode,
            u = o.city,
            c = o.country,
            f = o.vatNumber,
            b = o.cellPhone,
            S = o.showCountryList,
            L = ReactNative.Dimensions.get('window').width / 2 - module474.ms(20) - module474.ms(10);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.sectionBigText,
                    {
                      marginTop: module474.ms(27.5),
                    },
                  ],
                },
                module458.default.authentication.completeRegister
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.sectionBigText,
                    {
                      marginTop: module474.ms(7.5),
                      fontFamily: module474.FontFamily.regular,
                    },
                  ],
                },
                module458.default.authentication.completeRegisterText
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.setState({
                    showCountryList: !S,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                React.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {
                    marginTop: module474.ms(15),
                  },
                  isBottomSheetOpener: true,
                  disabled: true,
                  label: module458.default.generic.country,
                  value: c ? c.name : '',
                  onChange: function (n) {
                    return t.setState({
                      country: n,
                    });
                  },
                })
              )
            ),
            React.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.address,
              value: l,
              onChange: function (n) {
                return t.setState({
                  address: n,
                });
              },
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.halfSizedInputsContainer,
              },
              React.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: L,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.zipCode,
                keyboardType: 'numbers-and-punctuation',
                value: s,
                onChange: function (n) {
                  return t.setState({
                    zipCode: n,
                  });
                },
              }),
              React.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: L,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.city,
                value: u,
                onChange: function (n) {
                  return t.setState({
                    city: n,
                  });
                },
              })
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.sectionBigText,
                  {
                    marginTop: module474.ms(20),
                  },
                ],
              },
              module458.default.profile.cellphoneText
            ),
            React.default.createElement(module472.FloatingInput, {
              withRef: function (n) {
                return (t._phoneInput = n);
              },
              label: module458.default.authentication.cellPhone,
              keyboardType: 'numeric',
              isPhone: true,
              value: b,
              onChange: function (n) {
                return t.setState({
                  cellPhone: n,
                });
              },
              onSelectCountry: function (n) {
                return t.setState({
                  countryCode: n,
                });
              },
              onPressFlag: this.goToCountries,
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.sectionBigText,
                  {
                    marginTop: module474.ms(20),
                  },
                ],
              },
              module458.default.profile.vatNumberText
            ),
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(5),
              },
              label: module458.default.generic.vatNumber,
              eraseContent: '' !== f,
              keyboardType: 'numeric',
              value: f,
              onChange: function (n) {
                return t.setState({
                  vatNumber: n,
                });
              },
            }),
            this.renderFirstRadioButtonArea(),
            this.renderSecondRadioButtonArea(),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  n.button,
                  {
                    marginTop: module474.ms(20),
                  },
                ],
                onPress: this.submitProfileData,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.authentication.confirmData.toUpperCase()
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
            l = module1864.CStyles(),
            s = this.state.country;
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
                  o === s && {
                    fontFamily: module474.FontFamily.bold,
                  },
                ],
              },
              o.name
            )
          );
        },
      },
      {
        key: 'renderBottomSheetContent',
        value: function (t) {
          var n = this,
            o = this.state.countriesList;
          return React.default.createElement(
            module472.BottomSheet,
            {
              visible: this.state.showCountryList,
              snapPoints: [-1, module474.ms(300)],
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
                data: o,
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
            n = module1864.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              leftIcon: 'delete-cross-1',
              leftAction: function () {
                return t.props.navigation.navigate('Home');
              },
              title: module458.default.authentication.accountConfirmation,
            }),
            React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (o) {
              return React.default.createElement(
                module472.Wrapper,
                {
                  edges: ['left', 'right', 'bottom'],
                  style: n.root,
                },
                React.default.createElement(
                  module1503.KeyboardAwareScrollView,
                  {
                    key: 'extraInfoScrollView',
                    showsVerticalScrollIndicator: false,
                    contentContainerStyle: {
                      flexGrow: 1,
                      justifyContent: 'space-around',
                    },
                  },
                  t.renderContent()
                ),
                t.renderBottomSheetContent(o)
              );
            })
          );
        },
      },
    ]);
    return P;
  })(React.Component),
  P = module400.connect(function (t) {
    return {
      user: t.user,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(A);

exports.default = P;
