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
    var o = k(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
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
  module1844 = require('./1844'),
  module1224 = require('./1224'),
  module1226 = require('./1226');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (k = function (t) {
    return t ? o : n;
  })(t);
}

function x() {
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

var D = (function (t) {
    module35.default(O, t);

    var module400 = O,
      k = x(),
      D = function () {
        var t,
          n = module34.default(module400);

        if (k) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);
      (n = D.call(this, t)).state = {
        loaded: false,
        textContent: '',
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.getPrivacyPolicyData = n.getPrivacyPolicyData.bind(module39.default(n));
      return n;
    }

    module25.default(O, [
      {
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getPrivacyPolicyData());

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
        key: 'getPrivacyPolicyData',
        value: function () {
          var t, o;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    t = this.props.dispatch;
                    l.prev = 1;
                    t(module1224.setLoader(true));
                    l.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.privacyPolicy(),
                        axiosConfig: {
                          callback: this.getPrivacyPolicyData,
                        },
                      })
                    );

                  case 5:
                    if ((o = l.sent).ok) {
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

                    l.next = 13;
                    break;

                  case 9:
                    l.prev = 9;
                    l.t0 = l.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return l.stop();
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
          var t = module1844.CStyles(),
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
          var t = module1844.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              title: module458.default.settings.privacyPolicy,
              back: true,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right', 'bottom'],
                style: t.root,
              },
              React.default.createElement(
                ReactNative.ScrollView,
                {
                  key: 'privacyScroll',
                  showsVerticalScrollIndicator: false,
                  scrollsToTop: true,
                  contentContainerStyle: t.scrollViewContainer,
                },
                this.renderContent()
              )
            )
          );
        },
      },
    ]);
    return O;
  })(React.PureComponent),
  O = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(D);

exports.default = O;
