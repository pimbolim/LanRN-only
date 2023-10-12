var module11 = require('./11'),
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
    var o = x(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module472 = require('./472'),
  module602 = require('./602'),
  module605 = require('./605'),
  module848 = require('./848'),
  module851 = require('./851'),
  module852 = require('./852'),
  module853 = require('./853'),
  module474 = require('./474');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
    return t ? o : n;
  })(t);
}

function N() {
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

var T = (function (t) {
  module35.default(w, t);

  var x = w,
    T = N(),
    E = function () {
      var t,
        n = module34.default(x);

      if (T) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t, n) {
    var u;
    module24.default(this, w);
    (u = E.call(this, t, n)).onChangePhoneNumber = u.onChangePhoneNumber.bind(module39.default(u));
    u.onPressFlag = u.onPressFlag.bind(module39.default(u));
    u.selectCountry = u.selectCountry.bind(module39.default(u));
    u.getFlag = u.getFlag.bind(module39.default(u));
    u.getISOCode = u.getISOCode.bind(module39.default(u));
    var s = u.props,
      f = s.countriesList,
      c = s.disabled,
      y = s.initialCountry;
    if (f) module602.default.setCustomCountriesData(f);
    var p = module848.default.getCountryDataByCode(y);
    u.state = {
      iso2: y,
      disabled: c,
      focused: false,
      pickerData: u.getPickerData(),
      formattedNumber: p ? '+' + p.dialCode : '',
      value: null,
    };
    return u;
  }

  module25.default(
    w,
    [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.value) this.updateFlagAndFormatNumber(this.props.value);
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          var n = this,
            o = t.value,
            u = t.disabled;
          if (o && o !== this.state.value)
            this.setState(
              {
                value: o,
                disabled: u,
              },
              function () {
                return n.updateFlagAndFormatNumber(o);
              }
            );
          else
            this.setState({
              disabled: u,
            });
        },
      },
      {
        key: 'setValue',
        value: function (t) {
          var n = this;
          this.setState(
            {
              value: t,
            },
            function () {
              return n.updateFlagAndFormatNumber(t);
            }
          );
        },
      },
      {
        key: 'onFocusChange',
        value: function (t, n) {
          this.setState(
            {
              focused: t,
            },
            function () {
              return n();
            }
          );
        },
      },
      {
        key: 'onChangePhoneNumber',
        value: function (t) {
          var n = this.props.onChangePhoneNumber,
            o = null;
          if ('function' == typeof n)
            o = function () {
              return n(t);
            };
          this.updateFlagAndFormatNumber(t, o);
        },
      },
      {
        key: 'onPressFlag',
        value: function () {
          var t = this.props.onPressFlag;
          if ('function' == typeof t) t();
          else this.picker.open();
        },
      },
      {
        key: 'getPickerData',
        value: function () {
          return module848.default.getAllCountries().map(function (t, n) {
            return {
              key: n,
              image: module605.default.get(t.iso2),
              label: t.name,
              dialCode: '+' + t.dialCode,
              iso2: t.iso2,
            };
          });
        },
      },
      {
        key: 'getCountryCode',
        value: function () {
          return module848.default.getCountryDataByCode(this.state.iso2).dialCode;
        },
      },
      {
        key: 'getAllCountries',
        value: function () {
          return module848.default.getAllCountries();
        },
      },
      {
        key: 'getFlag',
        value: function (t) {
          return module605.default.get(t);
        },
      },
      {
        key: 'getDialCode',
        value: function () {
          return module848.default.getDialCode(this.state.formattedNumber);
        },
      },
      {
        key: 'getValue',
        value: function () {
          return this.state.formattedNumber;
        },
      },
      {
        key: 'getNumberType',
        value: function () {
          return module848.default.getNumberType(this.state.formattedNumber, this.state.iso2);
        },
      },
      {
        key: 'getISOCode',
        value: function () {
          return this.state.iso2;
        },
      },
      {
        key: 'selectCountry',
        value: function (t) {
          var n = this;

          if (this.state.iso2 !== t) {
            var o = module848.default.getCountryDataByCode(t);

            if (o) {
              var u = '+' + o.dialCode;
              this.setState(
                {
                  iso2: t,
                  formattedNumber: u,
                },
                function () {
                  if (n.props.onSelectCountry) n.props.onSelectCountry(t);
                }
              );
            }
          }
        },
      },
      {
        key: 'isValidNumber',
        value: function () {
          return module848.default.isValidNumber(this.state.formattedNumber, this.state.iso2);
        },
      },
      {
        key: 'updateFlagAndFormatNumber',
        value: function (t) {
          var n = this,
            o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null,
            u = this.props,
            l = u.allowZeroAfterCountryCode,
            s = u.initialCountry,
            f = t;

          if (t) {
            if ('+' !== f[0]) f = '+' + f;
            f = l ? f : this.possiblyEliminateZeroAfterCountryCode(f);
            s = module848.default.getCountryCodeOfNumber(f);
          }

          this.setState(
            {
              iso2: s,
              formattedNumber: f,
            },
            function () {
              if (n.inputPhone && n.inputPhone.setValue) n.inputPhone.setValue(n.state.formattedNumber);
              if ('function' == typeof o) o();
              if (n.props.onSelectCountry) n.props.onSelectCountry(s);
            }
          );
        },
      },
      {
        key: 'possiblyEliminateZeroAfterCountryCode',
        value: function (t) {
          var n = module848.default.getDialCode(t);
          return t.startsWith(n + '0') ? n + t.substr(n.length + 1) : t;
        },
      },
      {
        key: 'focus',
        value: function () {
          this.inputPhone.focus();
        },
      },
      {
        key: 'renderLabel',
        value: function () {
          var t = this.props,
            n = t.label,
            o = t.labelHeight,
            u = t.labelFontSize,
            l = t.labelTextStyle,
            s = t.tintColor,
            f = this.state.focused;
          if (!n) return null;
          var c = {};
          if (f) c.color = s;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                height: o,
                justifyContent: 'center',
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  {
                    fontSize: u,
                  },
                  l,
                  c,
                ],
              },
              n
            )
          );
        },
      },
      {
        key: 'renderModalPicker',
        value: function () {
          var t = this;
          return React.default.createElement(module853.default, {
            ref: function (n) {
              t.picker = n;
            },
            data: this.state.pickerData,
            onChange: function (n) {
              t.selectCountry(n.iso2);
            },
            cancelText: 'Cancel',
          });
        },
      },
      {
        key: 'renderCountryPricker',
        value: function () {
          var t = this,
            n = this.props,
            o = n.pickerButtonColor,
            u = n.pickerButtonTextStyle,
            l = n.cancelText,
            s = n.cancelTextStyle,
            f = n.confirmText,
            c = n.confirmTextStyle,
            p = n.pickerBackgroundColor,
            h = n.pickerItemStyle,
            C = this.state.iso2;
          return React.default.createElement(module852.default, {
            ref: function (n) {
              t.picker = n;
            },
            selectedCountry: C,
            onSubmit: this.selectCountry,
            buttonColor: o,
            buttonTextStyle: u,
            cancelText: l,
            cancelTextStyle: s,
            confirmText: f,
            confirmTextStyle: c,
            pickerBackgroundColor: p,
            itemStyle: h,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            u = o.style,
            l = o.styleWrapper,
            s = o.flagStyle,
            f = o.textStyle,
            c = o.textProps,
            C = o.textComponent,
            v = o.offset,
            P = this.state,
            F = P.iso2,
            x = P.formattedNumber,
            N = P.disabled,
            T = C || ReactNative.TextInput;
          return T == module472.TextField
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: [module851.default.containerWrapper, l],
                },
                this.renderLabel(),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [module851.default.container, u],
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: this.onPressFlag,
                        disabled: N,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: [module851.default.flagWrapper],
                        },
                        React.default.createElement(ReactNative.Image, {
                          source: module605.default.get(F),
                          style: [module851.default.flag, s],
                          onPress: this.onPressFlag,
                        })
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          flex: 1,
                          marginLeft: module474.ms(5),
                        },
                      },
                      React.default.createElement(
                        T,
                        module11.default(
                          {
                            ref: function (n) {
                              t.inputPhone = n;
                            },
                            editable: !N,
                            autoCorrect: false,
                            style: [module851.default.text, f],
                            onChangeText: function (n) {
                              t.onChangePhoneNumber(n);
                            },
                            keyboardType: 'phone-pad',
                            underlineColorAndroid: 'rgba(0,0,0,0)',
                            value: x,
                          },
                          c,
                          {
                            onFocus: function () {
                              return t.onFocusChange(true, function () {
                                if ('function' == typeof c.onFocus) c.onFocus();
                              });
                            },
                            onBlur: function () {
                              return t.onFocusChange(false, function () {
                                if ('function' == typeof c.onBlur) c.onBlur();
                              });
                            },
                          }
                        )
                      )
                    )
                  )
                )
              )
            : React.default.createElement(
                ReactNative.View,
                {
                  style: [module851.default.containerWrapper, l],
                },
                this.renderLabel(),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [module851.default.container, u],
                  },
                  React.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    {
                      onPress: this.onPressFlag,
                      disabled: N,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: module851.default.flagWrapper,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: module605.default.get(F),
                        style: [module851.default.flag, s],
                        onPress: this.onPressFlag,
                      })
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        marginLeft: v || 10,
                      },
                    },
                    React.default.createElement(
                      T,
                      module11.default(
                        {
                          ref: function (n) {
                            t.inputPhone = n;
                          },
                          editable: !N,
                          autoCorrect: false,
                          style: [module851.default.text, f],
                          onChangeText: function (n) {
                            t.onChangePhoneNumber(n);
                          },
                          keyboardType: 'phone-pad',
                          underlineColorAndroid: 'rgba(0,0,0,0)',
                          value: x,
                        },
                        c,
                        {
                          onFocus: function () {
                            return t.onFocusChange(true, function () {
                              if ('function' == typeof (null == c ? undefined : c.onFocus)) c.onFocus();
                            });
                          },
                          onBlur: function () {
                            return t.onFocusChange(false, function () {
                              if ('function' == typeof (null == c ? undefined : c.onBlur)) c.onBlur();
                            });
                          },
                        }
                      )
                    )
                  )
                )
              );
        },
      },
    ],
    [
      {
        key: 'setCustomCountriesData',
        value: function (t) {
          module602.default.setCustomCountriesData(t);
        },
      },
    ]
  );
  return w;
})(React.Component);

exports.default = T;
T.defaultProps = {
  initialCountry: 'us',
  disabled: false,
  allowZeroAfterCountryCode: true,
};
