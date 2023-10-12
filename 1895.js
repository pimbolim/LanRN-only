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
    var l = A(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1896 = require('./1896'),
  module474 = require('./474'),
  module1224 = require('./1224');

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (A = function (t) {
    return t ? l : n;
  })(t);
}

function w() {
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

var C = (function (t) {
    module35.default(V, t);

    var module400 = V,
      A = w(),
      C = function () {
        var t,
          n = module34.default(module400);

        if (A) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function V(t) {
      var l;
      module24.default(this, V);
      (l = C.call(this, t)).state = {};
      l.onLogout = l.onLogout.bind(module39.default(l));
      return l;
    }

    module25.default(V, [
      {
        key: 'onLogout',
        value: function () {
          var t = this;
          ReactNative.Alert.alert(module458.default.authentication.logout, module458.default.authentication.logoutMessage, [
            {
              text: module458.default.generic.cancel,
              style: 'cancel',
            },
            {
              text: 'OK',
              style: 'destructive',
              onPress: function () {
                var n = t.props,
                  l = n.dispatch,
                  o = n.navigation;
                l(module1224.setLogout());
                o.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Home',
                    },
                  ],
                });
              },
            },
          ]);
        },
      },
      {
        key: 'renderPersonalInfo',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.infoAreaTitleContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.infoAreaTitleText,
                },
                'Dados Pessoais'
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    borderBottomWidth: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.infoAreaTitleEditText,
                  },
                  module458.default.generic.edit
                )
              )
            )
          );
        },
      },
      {
        key: 'renderAddressesInfo',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.infoAreaTitleContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.infoAreaTitleText,
                },
                'As minhas moradas'
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    borderBottomWidth: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.infoAreaTitleEditText,
                  },
                  module458.default.generic.edit
                )
              )
            )
          );
        },
      },
      {
        key: 'renderExtraArea1',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.infoAreaTitleContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.infoAreaTitleText,
                },
                '\xc1rea Extra 1'
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    borderBottomWidth: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.infoAreaTitleEditText,
                  },
                  module458.default.generic.edit
                )
              )
            )
          );
        },
      },
      {
        key: 'renderExtraArea2',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.infoAreaTitleContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.infoAreaTitleText,
                },
                '\xc1rea Extra 2'
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    borderBottomWidth: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.infoAreaTitleEditText,
                  },
                  module458.default.generic.edit
                )
              )
            )
          );
        },
      },
      {
        key: 'renderPrivacyArea',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.infoAreaTitleContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.infoAreaTitleText,
                },
                module458.default.userSettings.privacy
              )
            ),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: this.onLogout,
              },
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.infoAreaTitleEditText,
                  },
                  module458.default.authentication.logout
                )
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.titleText,
              },
              'Titulo de teste'
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.screenText,
              },
              'texto de teste teste teste teste'
            ),
            this.renderPersonalInfo(),
            this.renderAddressesInfo(),
            this.renderExtraArea1(),
            this.renderExtraArea2(),
            this.renderPrivacyArea()
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1896.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              style: t.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.userSettings.header,
            }),
            React.default.createElement(
              ReactNative.ScrollView,
              {
                contentContainerStyle: {
                  paddingHorizontal: module474.ms(15),
                  paddingTop: module474.ms(15),
                },
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return V;
  })(React.Component),
  V = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(C);

exports.default = V;
