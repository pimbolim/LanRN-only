require('./472');

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = k(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
        else o[c] = t[c];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module474 = require('./474'),
  module1304 = require('./1304'),
  module458 = require('./458'),
  module1305 = require('./1305'),
  module1315 = require('./1315');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (k = function (t) {
    return t ? n : l;
  })(t);
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

var E = (function (t) {
  module35.default(F, t);

  var k = F,
    E = P(),
    S = function () {
      var t,
        l = module34.default(k);

      if (E) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function F() {
    module24.default(this, F);
    return S.apply(this, arguments);
  }

  module25.default(F, [
    {
      key: 'componentDidMount',
      value: function () {
        this.focus(this.props.focused);
      },
    },
    {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function (t) {
        var l = this;

        if (this.props.focused !== t.focused) {
          clearTimeout(this._focus);
          this._focus = setTimeout(function () {
            return l.focus(t.focused);
          }, 50);
        }
      },
    },
    {
      key: 'focus',
      value: function (t) {
        if (t && this.refs[t]) this.refs[t].focus();
      },
    },
    {
      key: 'cardPlaceholder',
      get: function () {
        return {
          name: module458.default.payments.cardholderNamePlaceholder,
          number: '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022',
          expiry: '\u2022\u2022/\u2022\u2022',
          cvc: '\u2022\u2022\u2022',
        };
      },
    },
    {
      key: 'inputProps',
      value: function (t) {
        var l = this.props,
          n = l.inputStyle,
          o = l.labelStyle,
          u = l.validColor,
          c = l.invalidColor,
          f = l.placeholderColor,
          s = l.values,
          p = l.status,
          v = l.onFocus,
          C = l.onChange,
          b = l.onBlur,
          k = l.onBecomeEmpty,
          P = l.onBecomeValid;
        return {
          inputStyle: [
            module1304.default.input,
            {
              fontFamily: module474.FontFamily.regular,
              fontSize: module474.FontSize.m,
            },
            n,
          ],
          labelStyle: [
            module1304.default.inputLabel,
            {
              fontFamily: module474.FontFamily.medium,
              fontSize: module474.FontSize.m,
            },
            o,
          ],
          validColor: u,
          invalidColor: c,
          placeholderColor: f,
          ref: t,
          field: t,
          value: s[t] || '',
          status: p[t] || 'incomplete',
          onFocus: v,
          onChange: C,
          onBlur: b,
          onBecomeEmpty: k,
          onBecomeValid: P,
        };
      },
    },
    {
      key: 'renderCardInput',
      value: function () {
        var t = this,
          n = this.props,
          o = n.hideCard,
          u = n.lockInputs;
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              module1304.default.form,
              o && {
                marginTop: module474.ms(0),
              },
            ],
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: module1304.default.inputWrapper,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(
                module1315.default,
                module11.default(
                  {
                    locked: !!u,
                    ref: 'name',
                  },
                  this.inputProps('name'),
                  {
                    label: module458.default.payments.cardholderName,
                    placeholder: module458.default.payments.cardholderNamePlaceholder,
                    autoCapitalize: 'characters',
                    focusNext: function () {
                      var l, n;
                      return null == (l = t.refs) ? undefined : null == (n = l.number) ? undefined : n.focus();
                    },
                    containerStyle: o
                      ? [
                          module1304.default.hideCardInputContainer,
                          {
                            marginTop: module474.ms(0),
                          },
                        ]
                      : module1304.default.inputContainer,
                  }
                )
              )
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: module1304.default.inputWrapper,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(
                module1315.default,
                module11.default(
                  {
                    locked: !!u,
                    ref: 'number',
                  },
                  this.inputProps('number'),
                  {
                    label: module458.default.payments.cardNumber,
                    placeholder: module458.default.payments.cardNumberPlaceholder,
                    keyboardType: 'numeric',
                    focusNext: function () {
                      var l, n;
                      return null == (l = t.refs) ? undefined : null == (n = l.expiry) ? undefined : n.focus();
                    },
                    containerStyle: o ? module1304.default.hideCardInputContainer : module1304.default.inputContainer,
                  }
                )
              )
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: module1304.default.smallInputContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: module1304.default.smallInputWrapper,
              },
              React.default.createElement(
                module1315.default,
                module11.default(
                  {
                    locked: !!u,
                    ref: 'expiry',
                  },
                  this.inputProps('expiry'),
                  {
                    label: module458.default.payments.expiry,
                    placeholder: module458.default.payments.expiryPlaceholder,
                    keyboardType: 'numeric',
                    focusNext: function () {
                      var l, n;
                      return null == (l = t.refs) ? undefined : null == (n = l.cvc) ? undefined : n.focus();
                    },
                    containerStyle: o ? module1304.default.hideCardInputContainer : module1304.default.inputContainer,
                  }
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: module1304.default.smallInputWrapper,
              },
              React.default.createElement(
                module1315.default,
                module11.default(
                  {
                    locked: !!u,
                    ref: 'cvc',
                  },
                  this.inputProps('cvc'),
                  {
                    label: module458.default.payments.cvc,
                    placeholder: module458.default.payments.cvcPlaceholder,
                    keyboardType: 'numeric',
                    focusNext: function () {
                      var l, n;
                      if (!(null == (l = t.refs) || null == (n = l.name))) n.focus();
                      setTimeout(function () {
                        var l, n;
                        return null == (l = t.refs) ? undefined : null == (n = l.name) ? undefined : n.blur();
                      }, 500);
                    },
                    containerStyle: o ? module1304.default.hideCardInputContainer : module1304.default.inputContainer,
                  }
                )
              )
            )
          )
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          n = l.cardImageFront,
          o = l.cardImageBack,
          u = l.values,
          c = u.name,
          f = u.number,
          v = u.expiry,
          b = u.cvc,
          k = u.type,
          P = l.style,
          E = l.focused,
          S = l.cardBrandIcons,
          F = l.backgroundColor,
          w = l.hideCard,
          x = l.hideForm,
          I = l.scrollDisabled;
        return React.default.createElement(
          ReactNative.ScrollView,
          {
            ref: function (l) {
              t.form = l;
            },
            scrollEnabled: !I,
            style: module1304.default.container,
            showsVerticalScrollIndicator: false,
            contentContainerStyle: module1304.default.contentContainer,
          },
          !w &&
            React.default.createElement(module1305.default, {
              focused: E,
              brand: k,
              fontFamily: module474.FontFamily.regular,
              imageFront: n,
              imageBack: o,
              customIcons: S,
              name: c,
              number: f,
              expiry: v,
              cvc: b,
              style: P,
              placeholder: this.cardPlaceholder,
              backgroundColor: F,
            }),
          !x && this.renderCardInput()
        );
      },
    },
  ]);
  return F;
})(React.Component);

exports.default = E;
E.defaultProps = {
  cardViewSize: {},
  labels: {
    name: "CARDHOLDER'S NAME",
    postalCode: 'POSTAL CODE',
  },
  placeholders: {
    name: 'Full Name',
    postalCode: '34567',
  },
  inputContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  validColor: '',
  invalidColor: 'red',
  placeholderColor: 'gray',
  allowScroll: false,
};
