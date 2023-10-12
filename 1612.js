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
    var u = P(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module1262 = require('./1262'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1224 = require('./1224'),
  module1613 = require('./1613');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (P = function (t) {
    return t ? u : n;
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

var L = function (t) {
    return 'language_' + t.code;
  },
  S = (function (t) {
    module35.default(j, t);

    var module400 = j,
      P = E(),
      S = function () {
        var t,
          n = module34.default(module400);

        if (P) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function j(t) {
      var n;
      module24.default(this, j);
      (n = S.call(this, t)).renderItem = n.renderItem.bind(module39.default(n));
      return n;
    }

    module25.default(j, [
      {
        key: 'setLanguage',
        value: function (t) {
          var module24, module25, module39;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    module24 = this.props;
                    module25 = module24.dispatch;
                    module39 = module24.navigation;
                    c.next = 3;
                    return regeneratorRuntime.default.awrap(module25(module1224.setLanguage(t)));

                  case 3:
                    module25(module1224.setSelectedCategory(null));
                    module39.goBack();

                  case 5:
                  case 'end':
                    return c.stop();
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
        key: 'renderItem',
        value: function (t) {
          var n = this,
            u = t.item,
            o = t.index,
            l = module1613.CStyles(),
            c = u.code === module1262.convertLanguage();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.setLanguage(u.code);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [l.row, o === module1262.LANGUAGES.length - 1 && l.lowerRow],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [l.language, c && l.selected],
                  numberOfLines: 1,
                },
                u.name
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1613.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.settings.languages,
            }),
            React.default.createElement(ReactNative.FlatList, {
              data: module1262.LANGUAGES,
              extraData: this.props,
              bounces: false,
              renderItem: this.renderItem,
              showsVerticalScrollIndicator: false,
              keyExtractor: L,
            })
          );
        },
      },
    ]);
    return j;
  })(React.PureComponent),
  j = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(S);

exports.default = j;
