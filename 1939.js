var module24 = require('./24'),
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
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
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
  module1940 = require('./1940'),
  module1590 = require('./1590'),
  module474 = require('./474');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
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

var E = (function (t) {
    module35.default(S, t);

    var module400 = S,
      O = j(),
      E = function () {
        var t,
          n = module34.default(module400);

        if (O) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function S(t) {
      var o;
      module24.default(this, S);

      (o = E.call(this, t)).renderLoading = function () {
        var t,
          n = o.props.theme,
          u = module1940.CStyles();
        return React.default.createElement(
          ReactNative.View,
          {
            style: u.loaderContent,
          },
          React.default.createElement(ReactNative.ActivityIndicator, {
            color: (null == n ? undefined : null == (t = n.value) ? undefined : t.primaryColor) || module474.Color.primary,
            size: 'large',
          })
        );
      };

      o.state = {};
      return o;
    }

    module25.default(S, [
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
        key: 'render',
        value: function () {
          this.state.textContent;
          var t = this,
            n = module1940.CStyles(),
            o = module458.default.generic.sizeGuide;
          return React.default.createElement(
            module472.Wrapper,
            {
              style: n.root,
            },
            React.default.createElement(module472.Header, {
              title: o,
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
                style: {
                  width: '100%',
                  height: '100%',
                },
                source: {
                  uri: this.params.link,
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
  })(React.Component),
  S = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      theme: t.colorScheme.value,
    };
  })(E);

exports.default = S;
