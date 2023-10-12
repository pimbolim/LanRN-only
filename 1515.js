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
    var s = E(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module1226 = require('./1226'),
  module458 = require('./458'),
  module1516 = require('./1516'),
  module472 = require('./472'),
  module1224 = require('./1224'),
  module1518 = require('./1518'),
  module474 = require('./474');

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (E = function (t) {
    return t ? s : n;
  })(t);
}

function S() {
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

var x = (function (t) {
    module35.default(D, t);

    var module400 = D,
      E = S(),
      x = function () {
        var t,
          n = module34.default(module400);

        if (E) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);
      (n = x.call(this, t)).state = {
        password: '',
        showPassword: false,
        newPassword: '',
        showNewPassword: false,
        confirmPassword: '',
        highlightMissingFields: false,
      };
      n.validate = n.validate.bind(module39.default(n));
      n.onChangePassword = n.onChangePassword.bind(module39.default(n));
      n.renderContent = n.renderContent.bind(module39.default(n));
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
        key: 'validate',
        value: function () {
          var t = this.state,
            n = t.password,
            s = t.newPassword,
            o = {},
            u = module1516.default('password', n);
          if (u) o.password = u;
          var l = module1516.default('newPassword', s);
          if (l) o.newPassword = l;
          this.setState({
            error: o,
          });
          return !Object.keys(o).length;
        },
      },
      {
        key: 'onChangePassword',
        value: function () {
          var t, module24, module25, module39, module35, module37, module34, w;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    if (this.validate()) {
                      h.next = 3;
                      break;
                    }

                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });
                    return h.abrupt('return');

                  case 3:
                    t = this.props;
                    module24 = t.dispatch;
                    module25 = t.navigation;
                    module39 = this.state;
                    module35 = module39.password;
                    module37 = module39.newPassword;
                    module34 = {
                      OldPassword: module35,
                      NewPassword: module37,
                    };
                    h.prev = 6;
                    h.next = 9;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.changePassword(this.user.IdCliente),
                        data: module34,
                        axiosConfig: {
                          callback: this.onChangePassword,
                        },
                      })
                    );

                  case 9:
                    w = h.sent;
                    module24(module1224.setLoader(false));

                    if (w.ok && w.data.success) {
                      module24(module1224.setLoader(false));
                      if (219 !== w.status && 319 !== w.status)
                        module472.DropDown.alert({
                          type: 'success',
                          title: module458.default.authentication.changePasswordTitle,
                          message: module458.default.authentication.changePasswordMessage,
                        });
                      module25.goBack();
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== w.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    h.next = 18;
                    break;

                  case 14:
                    h.prev = 14;
                    h.t0 = h.catch(6);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 18:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            [[6, 14]],
            Promise
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t,
            n = this,
            s = this.state,
            o = s.password,
            u = s.newPassword,
            l = s.highlightMissingFields,
            c = s.showPassword,
            f = s.showNewPassword,
            p = module1518.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.FloatingInput, {
              isPassword: true,
              toggle: function () {
                return n.setState({
                  showPassword: !c,
                });
              },
              showPassword: c,
              containerExtraStyle: {
                marginTop: module474.ms(30),
              },
              label: module458.default.authentication.currentPassword,
              value: o,
              onChange: function (t) {
                return n.setState({
                  password: t,
                });
              },
              highlightRed: l && !o,
            }),
            React.default.createElement(module472.FloatingInput, {
              isPassword: true,
              toggle: function () {
                return n.setState({
                  showNewPassword: !f,
                });
              },
              showPassword: f,
              containerExtraStyle: {
                marginTop: module474.ms(10),
              },
              label: module458.default.authentication.newPassword,
              value: u,
              onChange: function (t) {
                return n.setState({
                  newPassword: t,
                });
              },
              highlightRed: l && !u,
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: p.button,
                onPress: this.onChangePassword,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: p.buttonText,
                },
                null == (t = module458.default.generic.change) ? undefined : t.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1518.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.generic.change + ' ' + module458.default.authentication.password,
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
      user: t.user,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(x);

exports.default = D;
