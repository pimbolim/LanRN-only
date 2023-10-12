var module47 = require('./47'),
  module11 = require('./11'),
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
    var o = w(n);
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
  module1306 = require('./1306'),
  module1315 = require('./1315'),
  module1281 = require('./1281');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

function O(t, n) {
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

var _ = ReactNative.StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    icon: {
      width: 48,
      height: 40,
      resizeMode: 'contain',
    },
    expanded: {
      flex: 1,
    },
    hidden: {
      width: 0,
    },
    leftPart: {
      overflow: 'hidden',
    },
    rightPart: {
      overflow: 'hidden',
      flexDirection: 'row',
    },
    last4: {
      flex: 1,
      justifyContent: 'center',
    },
    numberInput: {
      width: 1e3,
      marginLeft: 20,
    },
    expiryInput: {
      width: 80,
    },
    cvcInput: {
      width: 80,
    },
    last4Input: {
      width: 60,
      marginLeft: 20,
    },
    input: {
      height: 40,
      color: 'white',
    },
  }),
  j = (function (t, ...args) {
    module35.default(O, t);

    var module47 = O,
      module1281 = P(),
      w = function () {
        var t,
          o = module34.default(module47);

        if (module1281) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function O() {
      var t;
      module24.default(this, O);

      (t = w.call(this, ...args)).componentDidMount = function () {
        return t._focus(t.props.focused);
      };

      t.UNSAFE_componentWillReceiveProps = function (n) {
        if (t.props.focused !== n.focused) t._focus(n.focused);
      };

      t._focusNumber = function () {
        return t._focus('number');
      };

      t._focusExpiry = function () {
        return t._focus('expiry');
      };

      t._focus = function (n) {
        if (n) {
          t.refs[n].focus();
          ReactNative.LayoutAnimation.easeInEaseOut();
        }
      };

      t._inputProps = function (n) {
        var o = t.props,
          u = o.inputStyle,
          l = o.validColor,
          c = o.invalidColor,
          f = o.placeholderColor,
          p = o.placeholders,
          s = o.values,
          y = o.status,
          h = o.onFocus,
          v = o.onChange,
          b = o.onBecomeEmpty,
          w = o.onBecomeValid;
        return {
          inputStyle: [_.input, u],
          validColor: l,
          invalidColor: c,
          placeholderColor: f,
          ref: n,
          field: n,
          placeholder: p[n],
          value: s[n],
          status: y[n],
          onFocus: h,
          onChange: v,
          onBecomeEmpty: b,
          onBecomeValid: w,
        };
      };

      t._iconToShow = function () {
        var n = t.props,
          o = n.focused,
          u = n.values.type;
        return 'cvc' === o ? 'cvc' : u || 'placeholder';
      };

      return t;
    }

    module25.default(O, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.focused,
            u = t.values.number,
            l = t.inputStyle,
            c = t.status.number,
            f = n && 'number' !== n;
          return React.default.createElement(
            ReactNative.View,
            {
              style: _.container,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [_.leftPart, f ? _.hidden : _.expanded],
              },
              React.default.createElement(
                module1315.default,
                module11.default({}, this._inputProps('number'), {
                  containerStyle: _.numberInput,
                })
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: f ? this._focusNumber : this._focusExpiry,
              },
              React.default.createElement(ReactNative.Image, {
                style: _.icon,
                source: {
                  uri: module1306.default[this._iconToShow()],
                },
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [_.rightPart, f ? _.expanded : _.hidden],
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: this._focusNumber,
                  style: _.last4,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    pointerEvents: 'none',
                  },
                  React.default.createElement(module1315.default, {
                    field: 'last4',
                    value: 'valid' === c ? u.substr(u.length - 4, 4) : '',
                    inputStyle: [_.input, l],
                    containerStyle: [_.last4Input],
                  })
                )
              ),
              React.default.createElement(
                module1315.default,
                module11.default({}, this._inputProps('expiry'), {
                  containerStyle: _.expiryInput,
                })
              ),
              React.default.createElement(
                module1315.default,
                module11.default({}, this._inputProps('cvc'), {
                  containerStyle: _.cvcInput,
                })
              )
            )
          );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = j;

j.propTypes = (function (t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      O(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      O(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
})({}, module1281.InjectedProps);

j.defaultProps = {
  placeholders: {
    number: '1234 5678 1234 5678',
    expiry: 'MM/YY',
    cvc: 'CVC',
  },
  validColor: '',
  invalidColor: 'red',
  placeholderColor: 'gray',
};
