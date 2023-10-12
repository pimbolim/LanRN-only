var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = k(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1226 = require('./1226'),
  module1516 = k(require('./1516')),
  module1224 = require('./1224'),
  module1587 = require('./1587'),
  module474 = require('./474');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (P = function (t) {
    return t ? s : n;
  })(t);
}

function k(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var s = P(n);
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
}

function C() {
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

var F = 1,
  O = 2,
  D = 3,
  L = (function (t) {
    module35.default(L, t);

    var module400 = L,
      P = C(),
      k = function () {
        var t,
          n = module34.default(module400);

        if (P) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function L(t) {
      var n;
      module24.default(this, L);
      (n = k.call(this, t)).state = {
        step: 1,
        email: '',
        code: '',
        validCode: '',
        password: '',
        passwordVisible: false,
        blockResendCode: false,
        error: {},
      };
      n.sendEmail = n.sendEmail.bind(module39.default(n));
      n.submitPassword = n.submitPassword.bind(module39.default(n));
      n.renderFirstStep = n.renderFirstStep.bind(module39.default(n));
      n.headerLeftActionHandler = n.headerLeftActionHandler.bind(module39.default(n));
      return n;
    }

    module25.default(L, [
      {
        key: 'validateEmail',
        value: function () {
          var t = this.state.email,
            n = {},
            s = module1516.default('email', t);
          if (s) n.email = s;
          this.setState({
            error: n,
          });
          return !Object.keys(n).length;
        },
      },
      {
        key: 'sendEmail',
        value: function () {
          var t, module24, module25, module39, module35, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    if (this.validateEmail()) {
                      f.next = 2;
                      break;
                    }

                    return f.abrupt('return');

                  case 2:
                    t = this.props.dispatch;
                    module24 = this.state;
                    module25 = module24.email;
                    module39 = module24.step;
                    module35 = true;
                    f.prev = 5;
                    f.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.forgotPasswordStep1() + '?email=' + module25,
                        axiosConfig: {
                          callback: this.sendEmail,
                        },
                      })
                    );

                  case 8:
                    if ((c = f.sent).ok && c.data.success) {
                      t(module1224.setLoader(false));
                      module35 = true;
                      if (1 === module39)
                        this.setState({
                          step: 2,
                        });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    f.next = 15;
                    break;

                  case 12:
                    f.prev = 12;
                    f.t0 = f.catch(5);
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.authentication.loginError,
                      message: module458.default.authentication.loginErrorMessage,
                    });

                  case 15:
                    f.prev = 15;
                    if (module35) t(module1224.setLoader(false));
                    return f.finish(15);

                  case 18:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[5, 12, 15, 18]],
            Promise
          );
        },
      },
      {
        key: 'validatePassword',
        value: function () {
          var t = this.state,
            n = t.password,
            s = t.confirmPassword,
            o = {},
            l = [],
            u = module1516.default('password', n);

          if (u) {
            l.push(u + '\n');
            o.password = true;
          } else {
            var c = module1516.confirmPassword(n, s);

            if (c) {
              l.push(c + '\n');
              o.password = true;
              o.confirmPassword = c;
            }
          }

          this.setState({
            error: o,
          });
          return !l.length;
        },
      },
      {
        key: 'submitPassword',
        value: function () {
          var t, s, o, l, u, c, f, React, h;
          return regeneratorRuntime.default.async(
            function (y) {
              for (;;)
                switch ((y.prev = y.next)) {
                  case 0:
                    if (((t = this.props), (s = t.dispatch), (o = t.navigation), (l = this.state), (u = l.email), (c = l.password), (f = l.code), c)) {
                      y.next = 4;
                      break;
                    }

                    return y.abrupt('return');

                  case 4:
                    React = {
                      email: u,
                      pin: f,
                      newpassword: c,
                    };
                    y.prev = 5;
                    y.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.forgotPasswordStep2(),
                        data: React,
                        axiosConfig: {
                          callback: this.submitPassword,
                        },
                      })
                    );

                  case 8:
                    if ((h = y.sent).ok && h.data.success) {
                      s(module1224.setLoader(false));
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.authentication.changePasswordTitle,
                        message: module458.default.authentication.changePasswordMessage,
                      });
                      o.navigate('Login');
                    } else {
                      s(module1224.setLoader(false));
                      if (401 !== h.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    y.next = 16;
                    break;

                  case 12:
                    y.prev = 12;
                    y.t0 = y.catch(5);
                    s(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.authentication.loginError,
                      message: module458.default.authentication.loginErrorMessage,
                    });

                  case 16:
                  case 'end':
                    return y.stop();
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
        key: 'renderFirstStep',
        value: function () {
          var t = this,
            n = this.state.email,
            s = module1587.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: s.content,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  s.sectionSmallText,
                  {
                    fontFamily: module474.FontFamily.bold,
                  },
                ],
              },
              module458.default.authentication.forgotPassword
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  s.sectionSmallText,
                  {
                    marginTop: module474.ms(10),
                  },
                ],
              },
              module458.default.authentication.recoverPasswordText
            ),
            React.default.createElement(module472.FloatingInput, {
              autoFocus: true,
              label: module458.default.authentication.email,
              value: n,
              onChange: function (n) {
                return t.setState({
                  email: n,
                });
              },
              containerExtraStyle: {
                marginTop: module474.ms(35),
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  s.button,
                  {
                    marginTop: module474.ms(12.5),
                  },
                ],
                onPress: this.sendEmail,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: s.buttonText,
                },
                module458.default.authentication.sendEmail.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderSecondStep',
        value: function () {
          var t = this,
            n = module1587.CStyles(),
            s = this.state.blockResendCode;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.content,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.secondStepContent,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [n.sectionIntermediateText],
                },
                module458.default.authentication.verification
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.sectionSmallText,
                    {
                      width: '75%',
                      textAlign: 'center',
                      marginTop: module474.ms(20),
                    },
                  ],
                },
                module458.default.formatString(module458.default.authentication.codeSent, this.state.email)
              ),
              React.default.createElement(module472.CodeInput, {
                onFulfill: function (n) {
                  if (4 === n.length) {
                    ReactNative.Keyboard.dismiss();
                    t.setState({
                      code: n,
                      step: 3,
                    });
                  }
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.sectionSmallText,
                    {
                      marginTop: module474.ms(30),
                    },
                  ],
                },
                module458.default.authentication.codeNotReceived
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    t.sendEmail();
                    t.setState(
                      {
                        blockResendCode: true,
                      },
                      function () {
                        return setTimeout(function () {
                          t.setState({
                            blockResendCode: false,
                          });
                        }, 1e4);
                      }
                    );
                  },
                  disabled: s,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.sectionSmallText,
                      {
                        fontSize: module474.FontSize.l,
                        marginTop: module474.ms(20),
                      },
                      s && {
                        color: module474.Color.veryLightGray,
                      },
                    ],
                  },
                  module458.default.authentication.resendCode.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderThirdStep',
        value: function () {
          var t = this,
            n = this.state,
            s = n.password,
            o = n.passwordVisible,
            l = module1587.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: l.content,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.sectionSmallText,
                  {
                    fontFamily: module474.FontFamily.bold,
                  },
                ],
              },
              module458.default.authentication.insertNewPassword
            ),
            React.default.createElement(module472.FloatingInput, {
              autoFocus: true,
              containerExtraStyle: {
                marginTop: module474.ms(65),
              },
              label: module458.default.authentication.password,
              value: s,
              onChange: function (n) {
                return t.setState({
                  password: n,
                });
              },
              isPassword: true,
              showPassword: !o,
              toggle: function () {
                return t.setState({
                  passwordVisible: !o,
                });
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  l.button,
                  {
                    marginTop: module474.ms(12.5),
                  },
                ],
                onPress: this.submitPassword,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: l.buttonText,
                },
                module458.default.generic.confirm.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          switch (this.state.step) {
            case F:
              return this.renderFirstStep();

            case O:
              return this.renderSecondStep();

            case D:
              return this.renderThirdStep();

            default:
              return null;
          }
        },
      },
      {
        key: 'headerLeftActionHandler',
        value: function () {
          var t = this.props.navigation;
          if (3 === this.state.step)
            this.setState({
              step: 2,
              code: '',
            });
          else t.goBack();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1587.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              edges: ['right', 'left'],
              style: t.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              leftAction: this.headerLeftActionHandler,
              title: module458.default.authentication.recoverPasswordTitle,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: t.root,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return L;
  })(React.Component),
  R = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(L);

exports.default = R;
