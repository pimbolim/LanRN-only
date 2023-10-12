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
    var l = k(n);
    if (l && l.has(t)) return l.get(t);
    var s = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (l) l.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1830 = require('./1830'),
  module474 = require('./474'),
  module1226 = require('./1226'),
  module1224 = require('./1224');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (k = function (t) {
    return t ? l : n;
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

var C = (function (t) {
    module35.default(D, t);

    var module400 = D,
      k = E(),
      C = function () {
        var t,
          n = module34.default(module400);

        if (k) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);
      (n = C.call(this, t)).state = {
        availableNewsletters: [],
        selectedNewsletters: [],
        switchValue: false,
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.renderNewsletterArea = n.renderNewsletterArea.bind(module39.default(n));
      n.renderButtons = n.renderButtons.bind(module39.default(n));
      n.submitNewsletterData = n.submitNewsletterData.bind(module39.default(n));
      n.getNewsletterData = n.getNewsletterData.bind(module39.default(n));
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
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getNewsletterData());

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
        key: 'getNewsletterData',
        value: function () {
          var t, l, s, o;
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
                        url: module1226.Endpoints.newsletters(this.user.IdCliente),
                        axiosConfig: {
                          callback: this.getNewsletterData,
                        },
                      })
                    );

                  case 5:
                    if ((l = u.sent).ok) {
                      t(module1224.setLoader(false));
                      s = [];
                      o = [];
                      l.data.forEach(function (t) {
                        s.push({
                          newsletterTypeId: t.IdTipoNewsletter,
                          description: t.Descricao,
                          checked: t.Checked,
                        });
                        if (t.Checked) o.push(t.IdTipoNewsletter);
                      });
                      this.setState({
                        availableNewsletters: s,
                        selectedNewsletters: o,
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== l.status)
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
        key: 'submitNewsletterData',
        value: function () {
          var t, module24, module25, module39, module35, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    t = this.state;
                    module24 = t.selectedNewsletters;
                    module25 = t.availableNewsletters;
                    module39 = this.props.dispatch;
                    f.prev = 2;
                    module35 = [];
                    module25.forEach(function (t) {
                      var n = module24.find(function (n) {
                        return t.newsletterTypeId === n;
                      });
                      module35.push({
                        IdTipoNewsletter: t.newsletterTypeId,
                        Checked: !!n,
                      });
                    });
                    module39(module1224.setLoader(true));
                    f.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.newsletters(this.user.IdCliente),
                        data: module35,
                        axiosConfig: {
                          callback: this.submitNewsletterData,
                        },
                      })
                    );

                  case 8:
                    if ((c = f.sent).ok && 'success' === c.data) {
                      module39(module1224.setLoader(false));
                      this.props.navigation.goBack();
                    } else {
                      module39(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    f.next = 16;
                    break;

                  case 12:
                    f.prev = 12;
                    f.t0 = f.catch(2);
                    module39(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                    f.prev = 16;
                    module39(module1224.setLoader(false));
                    return f.finish(16);

                  case 19:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[2, 12, 16, 19]],
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
        key: 'handleNewsletterSelectionPress',
        value: function (t) {
          var n = this.state.selectedNewsletters,
            l = JSON.parse(JSON.stringify(n)),
            s = l.findIndex(function (n) {
              return n === t;
            });
          if (-1 === s) l.push(t);
          else l.splice(s, 1);
          this.setState({
            selectedNewsletters: l,
          });
        },
      },
      {
        key: 'rendeNewsletterItem',
        value: function (t) {
          var n = this,
            l = module1830.CStyles(),
            s = this.getNewsLetterName(t.newsletterTypeId),
            o = this.state.selectedNewsletters.find(function (n) {
              return n === t.newsletterTypeId;
            });
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.handleNewsletterSelectionPress(t.newsletterTypeId);
              },
              style: [l.availableNewsLettersItem],
            },
            React.default.createElement(module472.Icon, {
              name: o ? 'check' : 'uncheck',
              size: module474.ms(18),
              color: 'black',
              style: {
                marginRight: module474.ms(12.5),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [l.availableNewsLettersItemText],
              },
              s ? s.toUpperCase() : t.description.toUpperCase()
            )
          );
        },
      },
      {
        key: 'renderNewsletterArea',
        value: function () {
          var t = this,
            n = module1830.CStyles(),
            l = this.state.availableNewsletters;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: n.availableNewsLettersContainer,
              },
              l.map(function (n) {
                return t.rendeNewsletterItem(n);
              })
            )
          );
        },
      },
      {
        key: 'renderButtons',
        value: function () {
          this.state.selectedNewsletters;
          var t = this,
            n = module1830.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginTop: module474.ms(30),
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.privacyPolicyText,
                },
                module458.default.profile.newslettersScreenText3
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.privacyPolicyText,
                    {
                      color: module474.Color.darkGray,
                    },
                  ],
                },
                module458.default.settings.privacyPolicy
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.privacyPolicyText,
                },
                ' ' + module458.default.authentication.ofLanidor
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: this.submitNewsletterData,
                style: [
                  n.button,
                  {
                    marginTop: module474.ms(55),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.generic.submit.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.props.navigation.goBack();
                },
                style: [
                  n.button,
                  {
                    backgroundColor: 'white',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.buttonText,
                    {
                      color: 'black',
                    },
                  ],
                },
                module458.default.generic.cancel.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = module1830.CStyles();
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              showsVerticalScrollIndicator: false,
              contentContainerStyle: {
                flexGrow: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.newsletterText,
                    {
                      fontFamily: module474.FontFamily.bold,
                      marginTop: module474.ms(45),
                      fontSize: module474.FontSize.m,
                    },
                  ],
                },
                module458.default.profile.newslettersScreenText1
              )
            ),
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.newsletterText,
                    {
                      marginTop: module474.ms(42.5),
                    },
                  ],
                },
                module458.default.profile.newslettersScreenText2
              ),
              this.renderNewsletterArea()
            ),
            this.renderButtons()
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1830.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.generic.newsletters,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right'],
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
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(C);

exports.default = D;
