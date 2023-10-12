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
    var o = E(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, s, c);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1894 = require('./1894'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1590 = require('./1590'),
  module474 = require('./474');

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (E = function (t) {
    return t ? o : n;
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

var O = (function (t) {
    module35.default(S, t);

    var module400 = S,
      E = P(),
      O = function () {
        var t,
          n = module34.default(module400);

        if (E) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function S(t) {
      var n;
      module24.default(this, S);

      (n = O.call(this, t)).renderLoading = function () {
        var t,
          o = n.props.theme,
          u = module1894.CStyles();
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

      n.state = {
        loaded: false,
        textContent: '',
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.getTermsAndConditionsData = n.getTermsAndConditionsData.bind(module39.default(n));
      return n;
    }

    module25.default(S, [
      {
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getTermsAndConditionsData());

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
        key: 'getTermsAndConditionsData',
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
                        url: module1226.Endpoints.termsConditions(),
                        axiosConfig: {
                          callback: this.getTermsAndConditionsData,
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
        key: 'renderContent',
        value: function () {
          var t = module1894.CStyles(),
            n = this.state,
            o = n.textContent;
          if (n.loaded)
            return React.default.createElement(
              ReactNative.Text,
              {
                style: t.mainText,
              },
              o
            );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.textContent,
            o = module1894.CStyles(),
            u = n;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              title: module458.default.settings.termsAndConditions,
              back: true,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right', 'bottom'],
                style: o.root,
              },
              React.default.createElement(module1590.default, {
                ref: function (n) {
                  return (t.webview = n);
                },
                renderLoading: this.renderLoading,
                automaticallyAdjustContentInsets: false,
                style: {
                  width: '100%',
                  height: '100%',
                },
                source: {
                  uri: u,
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
    return S;
  })(React.PureComponent),
  S = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(O);

exports.default = S;
