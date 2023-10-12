var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = L(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1516 = require('./1516'),
  module1226 = require('./1226'),
  module472 = require('./472'),
  module1824 = require('./1824'),
  module1224 = require('./1224'),
  module474 = require('./474'),
  module1394 = require('./1394');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (L = function (t) {
    return t ? n : o;
  })(t);
}

function P() {
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
    module35.default(I, t);

    var module400 = I,
      L = P(),
      S = function () {
        var t,
          o = module34.default(module400);

        if (L) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function I(t) {
      var o;
      module24.default(this, I);
      (o = S.call(this, t)).state = {
        email: '',
        password: '',
        showLoginPass: false,
        nameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        showRegisterPass: false,
        showConfirmationCode: false,
        error: {},
      };
      o.onLogin = o.onLogin.bind(module39.default(o));
      o.validateCode = o.validateCode.bind(module39.default(o));
      o.goToRegister = o.goToRegister.bind(module39.default(o));
      o.goToForgotPassword = o.goToForgotPassword.bind(module39.default(o));
      o.lanidorLogin = o.lanidorLogin.bind(module39.default(o));
      return o;
    }

    module25.default(I, [
      {
        key: 'goToRegister',
        value: function () {
          this.props.navigation.navigate('Register');
        },
      },
      {
        key: 'goToForgotPassword',
        value: function () {
          this.props.navigation.navigate('ForgotPassword');
        },
      },
      {
        key: 'onLogin',
        value: function (t) {
          var o = this.state,
            n = o.email,
            l = o.password,
            s = {};

          if (!t) {
            var u = module1516.default('email', n);
            if (u) s.email = u;
            var c = module1516.default('password', l);
            if (c) s.password = c;
          }

          this.setState({
            error: s,
          });
          if (Object.keys(s).length)
            module472.DropDown.alert({
              type: 'error',
              title: module458.default.authentication.loginError,
              message: module458.default.authentication.loginErrorMessage,
            });
          else this.lanidorLogin(t);
        },
      },
      {
        key: 'lanidorLogin',
        value: function (t) {
          var module24,
            module25,
            module39,
            module35,
            module37,
            module34,
            React,
            ReactNative,
            module400,
            w,
            b = this;
          return regeneratorRuntime.default.async(
            function (k) {
              for (;;)
                switch ((k.prev = k.next)) {
                  case 0:
                    k.next = 2;
                    return regeneratorRuntime.default.awrap(module1394.default.getToken());

                  case 2:
                    module24 = k.sent;
                    module25 = this.props.dispatch;
                    module39 = this.state;
                    module35 = module39.email;
                    module37 = module39.password;
                    module34 = module39.emailRegister;
                    React = module39.passwordRegister;
                    ReactNative = t ? module34 : module35;
                    module400 = t ? React : module37;
                    k.prev = 7;
                    module25(module1224.setLoader(true));
                    k.next = 11;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.login() + '?email=' + ReactNative + '&password=' + module400 + '&tokenNotificacao=' + module24,
                        axiosConfig: {
                          callback: function () {
                            return b.lanidorLogin(t);
                          },
                        },
                      })
                    );

                  case 11:
                    if ((w = k.sent).ok) {
                      module25(module1224.setLoginType(null));
                      module25(module1224.setLoader(false));
                      this.postLogin(w.data, t);
                    } else {
                      module25(module1224.setLoader(false));
                      if (401 !== w.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.authentication.loginError,
                          message: module458.default.authentication.loginErrorMessage,
                        });
                    }

                    k.next = 19;
                    break;

                  case 15:
                    k.prev = 15;
                    k.t0 = k.catch(7);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 19:
                    k.prev = 19;
                    module25(module1224.setLoader(false));
                    return k.finish(19);

                  case 22:
                  case 'end':
                    return k.stop();
                }
            },
            null,
            this,
            [[7, 15, 19, 22]],
            Promise
          );
        },
      },
      {
        key: 'postLogin',
        value: function (t, o) {
          var n = this.props,
            l = n.dispatch,
            s = n.navigation;
          console.log('\ud83d\ude80 ~ file: index.tsx ~ line 132 ~ Login ~ postLogin ~ user', t);
          if (null != t && t.LojaEntregaDados) l(module1224.setFavoriteStore(null == t ? undefined : t.LojaEntregaDados));
          l(module1224.setUser(t));
          s.reset({
            index: 0,
            routes: [
              {
                name: 'Pro_Log_Stack',
              },
            ],
          });
        },
      },
      {
        key: 'validateCode',
        value: function () {
          var t = this.state,
            o = t.code,
            n = t.validCode,
            l = {},
            s = module1516.default('text', o, module458.default.authentication.verifyCode);
          if (
            (s && (l.code = s),
            this.setState({
              error: l,
            }),
            Object.keys(l).length)
          )
            return false;
          if (o == n) this.confirmUser();
          else
            module472.DropDown.alert({
              type: 'error',
              title: module458.default.authentication.codeInvalidTitle,
              message: module458.default.authentication.codeInvalidMessage,
            });
        },
      },
      {
        key: 'renderModalActivationCode',
        value: function () {
          var t = this,
            o = this.state,
            n = o.showConfirmationCode,
            l = o.email;
          return React.default.createElement(module472.ModalActivationCode, {
            key: 'modal_activation_code',
            visible: n,
            helperText: module458.default.formatString(module458.default.authentication.codeSent, l),
            onSubmit: function (o) {
              return t.setState(
                {
                  code: o,
                },
                t.validateCode
              );
            },
            onClose: function () {
              if (t.state.confirmed)
                t.setState({
                  showModalActivationCode: false,
                });
            },
          });
        },
      },
      {
        key: 'renderLoginArea',
        value: function () {
          var t = this,
            o = this.state,
            n = o.email,
            l = o.password,
            s = o.showLoginPass,
            u = module1824.CStyles();
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: u.sectionBigText,
              },
              module458.default.authentication.registeredCustomer
            ),
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(15),
              },
              label: module458.default.authentication.email,
              value: n,
              onChange: function (o) {
                return t.setState({
                  email: o,
                });
              },
            }),
            React.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.password,
              value: l,
              onChange: function (o) {
                return t.setState({
                  password: o,
                });
              },
              isPassword: true,
              showPassword: s,
              toggle: function () {
                return t.setState({
                  showLoginPass: !s,
                });
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: this.goToForgotPassword,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: u.forgotPasswordText,
                },
                module458.default.authentication.forgotPassword
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  u.button,
                  {
                    marginTop: module474.ms(30),
                  },
                ],
                onPress: function () {
                  return t.onLogin(false);
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: u.buttonText,
                },
                module458.default.authentication.login.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderInfoItems',
        value: function () {
          return [
            {
              id: 1,
              text: module458.default.authentication.registerTextInfo1,
            },
            {
              id: 2,
              text: module458.default.authentication.registerTextInfo2,
            },
            {
              id: 3,
              text: module458.default.authentication.registerTextInfo3,
            },
          ].map(function (t) {
            return React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                  marginBottom: module474.ms(17.5),
                  maxWidth: '95%',
                },
              },
              React.default.createElement(module472.Icon, {
                name: 'checkIcon',
                size: module474.ms(14),
                style: {
                  marginRight: module474.ms(15),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    fontFamily: module474.FontFamily.regular,
                    fontSize: module474.FontSize.s,
                    color: module474.Color.black,
                  },
                },
                t.text
              )
            );
          });
        },
      },
      {
        key: 'renderInfoRegisterArea',
        value: function () {
          var t = this,
            o = module1824.CStyles();
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  o.sectionBigText,
                  {
                    marginTop: module474.ms(40),
                    marginBottom: module474.ms(20),
                  },
                ],
              },
              module458.default.authentication.createYourAccount
            ),
            this.renderInfoItems(),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  o.button,
                  {
                    marginTop: module474.ms(25),
                    backgroundColor: 'white',
                    borderWidth: 1,
                  },
                ],
                onPress: function () {
                  return t.props.navigation.navigate('Register');
                },
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
                module458.default.profile.createAccount.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return t.props.navigation.navigate('LaCardInfo');
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: o.laCardInfoText,
                },
                module458.default.authentication.laCardInfo
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1824.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              title: module458.default.authentication.login,
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
                this.renderLoginArea(),
                this.renderInfoRegisterArea()
              ),
              this.renderModalActivationCode()
            )
          );
        },
      },
    ]);
    return I;
  })(React.Component),
  I = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      token: t.token,
    };
  })(S);

exports.default = I;
