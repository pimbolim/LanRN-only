var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module474 = require('./474'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1304 = require('./1304');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function b() {
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

var C = (function (t, ...args) {
  module35.default(O, t);

  var h = O,
    C = b(),
    _ = function () {
      var t,
        n = module34.default(h);

      if (C) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    var t;
    module24.default(this, O);

    (t = _.call(this, ...args)).UNSAFE_componentWillReceiveProps = function (n) {
      var o = t.props,
        l = o.status,
        u = o.value,
        c = o.onBecomeEmpty,
        f = o.onBecomeValid,
        p = o.focusNext,
        s = o.field,
        y = n.status,
        v = n.value;
      if ('' !== u && '' === v) c(s);

      if ('valid' !== l && 'valid' === y && 'name' !== s) {
        f(s);
        p();
      }
    };

    t.focus = function () {
      return t.input.focus();
    };

    t.blur = function () {
      return t.input.blur();
    };

    t._onFocus = function () {
      return t.props.onFocus(t.props.field);
    };

    t._onBlur = function () {
      return t.props.onBlur(t.props.field);
    };

    t._onChange = function (n) {
      return t.props.onChange(t.props.field, n);
    };

    return t;
  }

  module25.default(O, [
    {
      key: 'render',
      value: function () {
        var t = this,
          o = this.props,
          l = o.value,
          u = o.placeholder,
          c = o.status,
          f = o.keyboardType,
          h = o.autoCapitalize,
          b = o.containerStyle,
          C = o.inputStyle,
          _ = o.validColor,
          O = o.field,
          B = o.invalidColor,
          P = o.placeholderColor,
          k = o.focusNext,
          S = o.locked,
          w = null;
        if (_ && 'valid' === c) w = _;
        if (B && 'invalid' === c) w = B;
        var j = {};
        if ('name' !== O) j.keyboardType = f;
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            onPress: this.focus,
            activeOpacity: 0.99,
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                b,
                w && {
                  borderBottomColor: w,
                },
              ],
            },
            React.default.createElement(
              ReactNative.TextInput,
              module11.default(
                {
                  ref: function (n) {
                    return (t.input = n);
                  },
                  editable: !S,
                },
                j,
                {
                  autoCapitalize: h || 'words',
                  autoCorrect: false,
                  style: [
                    module1304.default.baseInputStyle,
                    C,
                    {
                      color: module474.Color.black,
                    },
                    w && {
                      color: w,
                    },
                  ],
                  underlineColorAndroid: 'transparent',
                  placeholderTextColor: P,
                  placeholder: u,
                  value: l,
                  onSubmitEditing: k,
                  onFocus: this._onFocus,
                  onBlur: this._onBlur,
                  onChangeText: this._onChange,
                }
              )
            )
          )
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = C;
C.defaultProps = {
  label: '',
  value: '',
  status: 'incomplete',
  keyboardType: 'numeric',
  containerStyle: {},
  inputStyle: {},
  labelStyle: {},
  onFocus: function () {},
  onChange: function () {},
  onBecomeEmpty: function () {},
  onBecomeValid: function () {},
};
