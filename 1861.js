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
    var s = k(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1516 = require('./1516'),
  module1226 = require('./1226'),
  module472 = require('./472'),
  module1862 = require('./1862'),
  module1224 = require('./1224'),
  module474 = require('./474');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (k = function (t) {
    return t ? s : n;
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

var P = (function (t) {
    module35.default(N, t);

    var module400 = N,
      k = E(),
      P = function () {
        var t,
          n = module34.default(module400);

        if (k) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function N(t) {
      var n;
      module24.default(this, N);
      (n = P.call(this, t)).state = {
        nameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        cellPhone: '',
        showRegisterPass: false,
        error: {},
        cca2: 'PT',
        subNewsletterToggle: false,
        subscribedNewsletters: [],
        availableNewsLetters: [],
      };
      n.onRegister = n.onRegister.bind(module39.default(n));
      n.lanidorRegister = n.lanidorRegister.bind(module39.default(n));
      n.lanidorLogin = n.lanidorLogin.bind(module39.default(n));
      n.getAvailableNewsLetters = n.getAvailableNewsLetters.bind(module39.default(n));
      n.renderSubscribedNewsLetters = n.renderSubscribedNewsLetters.bind(module39.default(n));
      n.renderRegisterArea = n.renderRegisterArea.bind(module39.default(n));
      return n;
    }

    module25.default(N, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
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
                    return regeneratorRuntime.default.awrap(this.getAvailableNewsLetters());

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
        key: 'getAvailableNewsLetters',
        value: function () {
          var t, s, o, l;
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
                        url: module1226.Endpoints.newsletters(),
                        axiosConfig: {
                          callback: this.getAvailableNewsLetters,
                        },
                      })
                    );

                  case 5:
                    if ((s = u.sent).ok) {
                      t(module1224.setLoader(false));
                      o = [];
                      l = [];
                      s.data.forEach(function (t) {
                        o.push({
                          newsletterTypeId: t.IdTipoNewsletter,
                          description: t.Descricao,
                          checked: t.Checked,
                        });
                        if (t.Checked) l.push(t.IdTipoNewsletter);
                      });
                      this.setState({
                        availableNewsLetters: o,
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== s.status)
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
                    u.prev = 12;
                    t(module1224.setLoader(false));
                    return u.finish(12);

                  case 15:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            this,
            [[1, 9, 12, 15]],
            Promise
          );
        },
      },
      {
        key: 'onRegister',
        value: function () {
          var t = this.state,
            n = t.emailRegister,
            s = t.passwordRegister,
            o = t.nameRegister,
            l = {},
            u = module1516.default('text', o, module458.default.authentication.name);
          if (u) l.name = u;
          var c = module1516.default('email', n);
          if (c) l.email = c;
          var f = module1516.default('password', s);
          if (f) l.password = f;
          this.setState({
            error: l,
          });
          if (!Object.keys(l).length) this.lanidorRegister();
        },
      },
      {
        key: 'lanidorRegister',
        value: function () {
          var t, module24, module25, module39, module35, module37, module34, p;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    t = this.state;
                    module24 = t.nameRegister;
                    module25 = t.emailRegister;
                    module39 = t.passwordRegister;
                    module35 = t.subNewsletterToggle;
                    module37 = this.props.dispatch;
                    h.prev = 2;
                    module34 = {
                      Email: module25,
                      Password: module39,
                      ConfirmPassword: module39,
                      Nome: module24,
                      Rgpd: true,
                      NewsLetter: module35,
                    };
                    module37(module1224.setLoader(true));
                    h.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.register(),
                        data: module34,
                        axiosConfig: {
                          callback: this.lanidorRegister,
                        },
                      })
                    );

                  case 7:
                    if (((p = h.sent), module37(module1224.setLoader(false)), !p.ok || !p.data.success)) {
                      h.next = 14;
                      break;
                    }

                    h.next = 12;
                    return regeneratorRuntime.default.awrap(this.onLogin());

                  case 12:
                    h.next = 15;
                    break;

                  case 14:
                    if (p.ok && !p.data.success)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: p.data.message,
                      });
                    else if (401 !== p.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });

                  case 15:
                    h.next = 21;
                    break;

                  case 17:
                    h.prev = 17;
                    h.t0 = h.catch(2);
                    module37(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 21:
                    h.prev = 21;
                    module37(module1224.setLoader(false));
                    return h.finish(21);

                  case 24:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            [[2, 17, 21, 24]],
            Promise
          );
        },
      },
      {
        key: 'postLogin',
        value: function (t) {
          var n = this.props,
            s = n.dispatch;
          this.state.subNewsletterToggle;
          s(module1224.setUser(t));
          this.props.navigation.reset({
            index: 0,
            routes: [
              {
                name: 'RegisterExtraInfo',
              },
            ],
          });
        },
      },
      {
        key: 'lanidorLogin',
        value: function () {
          var t, module24, module25, module39, module35, module37, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state;
                    module25 = module24.emailRegister;
                    module39 = module24.passwordRegister;
                    module35 = module25;
                    module37 = module39;
                    p.prev = 4;
                    t(module1224.setLoader(true));
                    p.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.login() + '?email=' + module35 + '&password=' + module37,
                        axiosConfig: {
                          callback: this.lanidorLogin,
                        },
                      })
                    );

                  case 8:
                    if ((f = p.sent).ok) {
                      t(module1224.setLoginType(null));
                      t(module1224.setLoader(false));
                      this.postLogin(f.data);
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== f.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    p.next = 16;
                    break;

                  case 12:
                    p.prev = 12;
                    p.t0 = p.catch(4);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                    p.prev = 16;
                    t(module1224.setLoader(false));
                    return p.finish(16);

                  case 19:
                  case 'end':
                    return p.stop();
                }
            },
            null,
            this,
            [[4, 12, 16, 19]],
            Promise
          );
        },
      },
      {
        key: 'onLogin',
        value: function () {
          var t = this.state,
            n = {};
          this.setState({
            error: n,
          });
          if (!Object.keys(n).length) this.lanidorLogin();
        },
      },
      {
        key: 'renderRegisterArea',
        value: function () {
          var t = this,
            n = this.state,
            s = n.nameRegister,
            o = n.emailRegister,
            l = n.passwordRegister,
            u = n.showRegisterPass,
            c = module1862.CStyles();
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  c.sectionBigText,
                  {
                    marginTop: module474.ms(30),
                  },
                ],
              },
              module458.default.authentication.joinLanidor
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  c.sectionBigText,
                  {
                    marginTop: module474.ms(5),
                    fontFamily: module474.FontFamily.regular,
                    color: module474.Color.darkGray,
                  },
                ],
              },
              module458.default.authentication.joinLanidorText
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  c.sectionBigText,
                  {
                    marginTop: module474.ms(30),
                  },
                ],
              },
              module458.default.authentication.insertDataToCreateYourAccount
            ),
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(15),
              },
              label: module458.default.authentication.name + ' *',
              value: s,
              onChange: function (n) {
                return t.setState({
                  nameRegister: n,
                });
              },
            }),
            React.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.email + ' *',
              value: o,
              onChange: function (n) {
                return t.setState({
                  emailRegister: n,
                });
              },
            }),
            React.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.passwordV2 + ' *',
              value: l,
              onChange: function (n) {
                return t.setState({
                  passwordRegister: n,
                });
              },
              isPassword: true,
              showPassword: u,
              toggle: function () {
                return t.setState({
                  showRegisterPass: !u,
                });
              },
            })
          );
        },
      },
      {
        key: 'renderSubscribedNewsLetters',
        value: function () {
          var t = this,
            n = module1862.CStyles(),
            s = this.state.subNewsletterToggle,
            o = this.props.navigation;
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.setState({
                    subNewsletterToggle: !s,
                  });
                },
                style: [n.subNewsLetterArea],
              },
              React.default.createElement(module472.Icon, {
                name: s ? 'check' : 'uncheck',
                size: module474.ms(20),
                color: 'black',
                style: {
                  marginRight: module474.ms(12.5),
                  marginTop: module474.ms(7),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [n.subNewsLetterText],
                },
                module458.default.home.subscribeNewsletterText
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  n.button,
                  {
                    marginTop: module474.ms(40),
                    marginBottom: module474.ms(10),
                  },
                ],
                onPress: this.onRegister,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.authentication.register.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.termsTextsContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.termsText,
                },
                module458.default.authentication.byCreatingAnAccount + ' '
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  onPress: function () {
                    return o.navigate('TermsAndConditions');
                  },
                  style: [
                    n.termsText,
                    {
                      textDecorationLine: 'underline',
                      color: 'black',
                    },
                  ],
                },
                module458.default.settings.termsAndConditions + ' '
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.termsText,
                },
                module458.default.authentication.ofLanidor
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1862.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              title: module458.default.authentication.register,
              back: true,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right'],
                style: t.root,
              },
              React.default.createElement(
                ReactNative.ScrollView,
                {
                  showsVerticalScrollIndicator: false,
                  scrollsToTop: true,
                  contentContainerStyle: {
                    flexGrow: 1,
                  },
                },
                this.renderRegisterArea(),
                this.renderSubscribedNewsLetters()
              )
            )
          );
        },
      },
    ]);
    return N;
  })(React.Component),
  N = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(P);

exports.default = N;
