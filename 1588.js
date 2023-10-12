var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
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
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module472 = require('./472'),
  module458 = require('./458'),
  module1589 = require('./1589'),
  module1590 = require('./1590'),
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

var E = (function (t) {
    module35.default(O, t);

    var module400 = O,
      C = D(),
      E = function () {
        var t,
          n = module34.default(module400);

        if (C) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);

      (n = E.call(this, t)).renderLoading = function () {
        var t,
          o = n.props.theme,
          u = module1589.CStyles();
        return React.default.createElement(
          ReactNative.View,
          {
            style: u.loaderContent,
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            color: (null == o ? undefined : null == (t = o.value) ? undefined : t.primaryColor) || module474.Color.primary,
            size: 'large',
          })
        );
      };

      n.state = {};
      return n;
    }

    module25.default(O, [
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
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getSizeGuideData());

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
        key: 'getSizeGuideData',
        value: function () {
          var t, o;
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
                        url: module1226.Endpoints.help(),
                        axiosConfig: {
                          callback: this.getSizeGuideData,
                        },
                      })
                    );

                  case 5:
                    if ((o = u.sent).ok) {
                      t(module1224.setLoader(false));
                      this.setState({
                        textContent: o.data,
                        loaded: true,
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

                    u.next = 13;
                    break;

                  case 9:
                    u.prev = 9;
                    u.t0 = u.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
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
        key: 'render',
        value: function () {
          var t = this,
            n = module1589.CStyles(),
            o = this.state.textContent,
            u = module458.default.profile.help,
            l = o;
          return React.default.createElement(
            module472.Wrapper,
            {
              style: n.root,
            },
            React.default.createElement(module472.Header, {
              title: u,
              back: true,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(module1590.default, {
                ref: function (n) {
                  return (t.webview = n);
                },
                renderLoading: this.renderLoading,
                automaticallyAdjustContentInsets: false,
                style: n.maxResize,
                source: {
                  uri: l,
                },
                javaScriptEnabled: true,
                domStorageEnabled: true,
                decelerationRate: 'normal',
                startInLoadingState: true,
                autoManageStatusBarEnabled: false,
                useWebKit: true,
                bounces: false,
              })
            )
          );
        },
      },
    ]);
    return O;
  })(React.Component),
  O = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      theme: t.colorScheme.value,
    };
  })(E);

exports.default = O;
