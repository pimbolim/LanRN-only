var module24 = require('./24'),
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
    var o = C(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, u, s);
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
  module1840 = require('./1840'),
  module474 = require('./474'),
  module1590 = require('./1590');

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (C = function (t) {
    return t ? o : n;
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

var B = (function (t) {
    module35.default(P, t);

    var module400 = P,
      C = S(),
      B = function () {
        var t,
          n = module34.default(module400);

        if (C) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      var o;
      module24.default(this, P);

      (o = B.call(this, t)).onNavigationStateChange = function (t) {
        var n,
          l,
          c = t.url,
          u = t.canGoBack,
          s = t.canGoForward;

        if (
          (!t.loading &&
            o.state.loading &&
            o.setState({
              loading: false,
            }),
          'CC' == (null == (n = o.props.route) ? undefined : null == (l = n.params) ? undefined : l.paymentType))
        ) {
          if (c.includes('lanidorapi')) {
            if (c.includes('checkouts') && u) {
              c.split('?')[1].split('&');
              return o.onReceiveParams();
            }

            if (c.includes('/cancel-payment')) return o.onCancel();
          }
        } else {
          if (c.includes('/execute') && u) {
            c.split('?')[1].split('&');
            return o.onReceiveParams();
          }

          if (c.includes('/checkout')) return o.onCancel();
        }

        o.setState({
          canGoBack: u,
          canGoForward: s,
        });
      };

      o.goBack = function () {
        var t = o.state.canGoBack;
        if (t) o.webview.goBack();
        if (!t) o.onCancel();
      };

      o.goForward = function () {
        if (o.state.canGoForward) o.webview.goForward();
      };

      o.reload = function () {
        o.webview.reload();
      };

      o.renderLoading = function () {
        var t = o.props.theme,
          n = module1840.CStyles();
        return React.default.createElement(
          ReactNative.View,
          {
            style: n.loaderContent,
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            color: (null == t ? undefined : t.primaryColor) || module474.Color.primary,
            size: 'large',
          })
        );
      };

      o.state = {
        accessToken: null,
        approvalUrl: o.getApprovalUrl(),
        paymentId: null,
        loading: true,
        canGoBack: false,
        canGoForward: false,
      };
      o.onCancel = o.onCancel.bind(module39.default(o));
      return o;
    }

    module25.default(P, [
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.StatusBar.setBarStyle('dark-content');
        },
      },
      {
        key: 'getApprovalUrl',
        value: function () {
          try {
            return this.props.route.params.approvalUrl;
          } catch (t) {
            return null;
          }
        },
      },
      {
        key: 'onReceiveParams',
        value: function () {
          this.props.navigation;
          this.props.route.params.onSuccess();
        },
      },
      {
        key: 'onCancel',
        value: function () {
          this.props.navigation;
          this.props.route.params.onCancel();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.approvalUrl,
            l = n.loading,
            c = this.props.route.params.paymentType,
            u = module1840.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: [u.root, l && u.rootLoading],
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: 'PayPal' == c ? module458.default.payments.paypal : module458.default.payments.cc,
              leftAction: function () {
                return 'PayPal' == c ? t.onCancel() : t.props.navigation.goBack();
              },
              browserBackAction: this.goBack,
            }),
            React.default.createElement(ReactNative.StatusBar, {
              barStyle: 'dark-content',
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
                style: {
                  width: '100%',
                  height: '100%',
                },
                source: {
                  uri: o,
                },
                onNavigationStateChange: this.onNavigationStateChange,
                javaScriptEnabled: true,
                domStorageEnabled: true,
                decelerationRate: 'normal',
                startInLoadingState: true,
                autoManageStatusBarEnabled: false,
                useWebKit: true,
                bounces: false,
                onMessage: function (t) {},
              })
            )
          );
        },
      },
    ]);
    return P;
  })(React.Component),
  P = module400.connect(function (t) {
    return {
      theme: t.colorScheme.value,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(B);

exports.default = P;
