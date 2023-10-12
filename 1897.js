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
    var o = T(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1262 = require('./1262'),
  module472 = require('./472'),
  module1898 = require('./1898');

function T(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (T = function (t) {
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

var module1899 = require('./1899'),
  O = function (t) {
    var n = t.item,
      o = t.phoneInput,
      l = t.onPress,
      u = module1898.CStyles();
    return React.default.createElement(
      ReactNative.TouchableOpacity,
      {
        onPress: function () {
          return l(n);
        },
      },
      React.default.createElement(
        ReactNative.View,
        {
          style: u.itemContainer,
        },
        React.default.createElement(
          ReactNative.View,
          {
            style: u.itemTextContainer,
          },
          React.default.createElement(
            ReactNative.Text,
            {
              style: u.itemText,
              numberOfLines: 1,
            },
            n.name
          ),
          o &&
            React.default.createElement(
              ReactNative.Text,
              {
                style: u.dialCodeText,
              },
              '+',
              n.callingCodes[0]
            )
        )
      )
    );
  },
  w = (function (t) {
    module35.default(b, t);

    var module400 = b,
      T = x(),
      w = function () {
        var t,
          n = module34.default(module400);

        if (T) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var o;
      module24.default(this, b);

      (o = w.call(this, t)).pressCountryItem = function (t) {
        var n = o.props.navigation;
        o.props.route.params.onSelect(t);
        n.goBack();
      };

      o.searchFilter = function (t) {
        try {
          var n = o.props.route.params.phoneInput,
            l = module1262.accentsTidy(o.state.searchText),
            u = module1262.accentsTidy(t.name),
            c = t.callingCodes[0];
          return n ? c && (u.includes(l) || c.includes(l)) : u.includes(l);
        } catch (n) {
          var s = module1262.accentsTidy(o.state.searchText);
          return module1262.accentsTidy(t.name).includes(s);
        }
      };

      o.state = {
        countries: o.countriesList,
        searchText: '',
        loaded: false,
      };
      return o;
    }

    module25.default(b, [
      {
        key: 'countriesList',
        get: function () {
          var t = this.props.language;
          return null == module1899
            ? undefined
            : module1899.default.map(function (n) {
                return {
                  name: 'en' === t.value ? n.name : module1262.translate(n.translations),
                  callingCodes: n.callingCodes,
                  alpha3Code: n.alpha3Code,
                  alpha2Code: n.alpha2Code,
                };
              });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.searchText,
            l = n.countries,
            u = this.props.route.params.phoneInput,
            c = module1898.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: c.root,
            },
            React.default.createElement(module472.Header, {
              title: module458.default.profile.countries,
              back: true,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: c.content,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: c.searchContainer,
                },
                React.default.createElement(ReactNative.TextInput, {
                  style: c.searchInput,
                  placeholder: module458.default.generic.search,
                  placeholderTextColor: 'gray',
                  value: o,
                  onChangeText: function (n) {
                    return t.setState({
                      searchText: n,
                    });
                  },
                })
              ),
              React.default.createElement(ReactNative.FlatList, {
                data: l.filter(this.searchFilter),
                extraData: this.state,
                initialNumToRender: 250,
                showsVerticalScrollIndicator: false,
                keyExtractor: function (t) {
                  return '' + t.alpha3Code;
                },
                renderItem: function (n) {
                  var o = n.item;
                  return React.default.createElement(O, {
                    item: o,
                    phoneInput: u,
                    onPress: t.pressCountryItem,
                  });
                },
              })
            )
          );
        },
      },
    ]);
    return b;
  })(React.Component);

var b = module400.connect(function (t) {
  return {
    orientation: t.orientation,
    isConnected: t.isConnected,
    language: t.language,
  };
})(w);
exports.default = b;
