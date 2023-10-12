var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
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
  module464 = require('./464'),
  module465 = require('./465'),
  module472 = require('./472'),
  module1324 = require('./1324'),
  module1326 = require('./1326'),
  module1395 = require('./1395'),
  module474 = require('./474'),
  module458 = require('./458'),
  module437 = require('./437'),
  module1224 = require('./1224');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
    return t ? o : n;
  })(t);
}

function L(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function D(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      L(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      L(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function A() {
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

if ('ios' !== ReactNative.Platform.OS && ReactNative.UIManager.setLayoutAnimationEnabledExperimental) ReactNative.UIManager.setLayoutAnimationEnabledExperimental(true);

var M = (function (t) {
    module35.default(L, t);

    var module47 = L,
      module400 = A(),
      T = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function L(t) {
      var n;
      module24.default(this, L);
      (n = T.call(this, t)).state = {
        loaded: false,
        showSplash: true,
        languageFlag: false,
      };
      ReactNative.Text.defaultProps = D(
        D({}, ReactNative.Text.defaultProps),
        {},
        {
          allowFontScaling: false,
        }
      );
      ReactNative.TextInput.defaultProps = D(
        D({}, ReactNative.TextInput.defaultProps),
        {},
        {
          allowFontScaling: false,
          selectionColor: module474.Color.primary,
          placeholderTextColor: '#C7C7CD',
        }
      );
      n.orientationChanged = n.orientationChanged.bind(module39.default(n));
      n.appStateChanged = n.appStateChanged.bind(module39.default(n));
      return n;
    }

    module25.default(L, [
      {
        key: 'UNSAFE_componentWillMount',
        value: function () {
          module465.default.lockToPortrait();
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this.setLanguage();
          module464.default.hide();
          ReactNative.Dimensions.addEventListener('change', this.orientationChanged);
          ReactNative.AppState.addEventListener('change', this.appStateChanged);
          this.props.dispatch(module1224.setHomeSelectedCategory(null));
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.Dimensions.removeEventListener('change', this.orientationChanged);
          ReactNative.AppState.removeEventListener('change', this.appStateChanged);
        },
      },
      {
        key: 'setLanguage',
        value: function () {
          var t = module437.Store.getState().language;
          if (t.value) module458.default.setLanguage(t.value);
          this.setState({
            languageFlag: true,
          });
        },
      },
      {
        key: 'orientationChanged',
        value: function (t) {
          var n = this,
            o = t.window,
            u = o.width < o.height ? 'PORTRAIT' : 'LANDSCAPE';
          setImmediate(function () {
            ReactNative.LayoutAnimation.configureNext(ReactNative.LayoutAnimation.Presets.easeInEaseOut);
            n.props.dispatch(module1224.setOrientation(u));
          });
        },
      },
      {
        key: 'appStateChanged',
        value: function (t) {
          if (!t.match(/inactive|background/)) this.verifyNotificationToken();
        },
      },
      {
        key: 'getToken',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.prev = 0;
                    o.next = 3;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().hasPermission());

                  case 3:
                    o.next = 6;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().requestPermission());

                  case 6:
                    o.next = 9;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().getToken());

                  case 9:
                    t = o.sent;
                    return o.abrupt('return', t);

                  case 13:
                    o.prev = 13;
                    o.t0 = o.catch(0);
                    return o.abrupt('return', null);

                  case 16:
                  case 'end':
                    return o.stop();
                }
            },
            null,
            null,
            [[0, 13]],
            Promise
          );
        },
      },
      {
        key: 'verifyNotificationToken',
        value: function () {
          var t, o, u, l;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((t = this.props), (o = t.dispatch), (u = t.notificationToken).value)) {
                      s.next = 3;
                      break;
                    }

                    return s.abrupt('return');

                  case 3:
                    s.next = 5;
                    return regeneratorRuntime.default.awrap(this.getToken());

                  case 5:
                    l = s.sent;

                    try {
                      if (l !== u.value && l) o(module1224.setNotificationToken(l));
                    } catch (t) {}

                  case 7:
                  case 'end':
                    return s.stop();
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
        key: 'renderContent',
        value: function () {
          return this.state.languageFlag
            ? React.default.createElement(
                React.default.Fragment,
                null,
                React.default.createElement(ReactNative.StatusBar, {
                  key: 'status_bar',
                  animated: true,
                  backgroundColor: module474.Color.primary,
                  barStyle: 'dark-content',
                }),
                React.default.createElement(module1326.default, null)
              )
            : null;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.showSplash;
          return React.default.createElement(
            ReactNative.View,
            {
              style: R.root,
              onStartShouldSetResponder: ReactNative.Keyboard.dismiss,
            },
            this.renderContent(),
            React.default.createElement(module472.Loader, null),
            React.default.createElement(module472.DropDownAlert, null),
            n &&
              React.default.createElement(module1324.default, {
                key: 'splash',
                onLoaded: function () {
                  return t.setState({
                    loaded: true,
                  });
                },
                onHideSplash: function () {
                  return t.setState({
                    showSplash: false,
                  });
                },
              })
          );
        },
      },
    ]);
    return L;
  })(React.Component),
  R = ReactNative.StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
  });

var _ = module400.connect(function (t) {
  return {
    orientation: t.orientation,
    isConnected: t.isConnected,
    language: t.language,
    notificationToken: t.notificationToken,
  };
})(M);

exports.default = _;
