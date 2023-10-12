var module11 = require('./11'),
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
    var o = F(n);
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
  module400 = require('./400'),
  module581 = require('./581'),
  module600 = require('./600'),
  module601 = require('./601'),
  module474 = require('./474'),
  module855 = require('./855');

function F(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (F = function (t) {
    return t ? o : n;
  })(t);
}

function j(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function x(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      j(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      j(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
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

var R = (function (t) {
    module35.default(j, t);

    var module47 = j,
      module400 = w(),
      F = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function j(t) {
      var n;
      module24.default(this, j);
      (n = F.call(this, t))._input = null;

      n.onPress = function (t) {
        var o = n.props.onPress;
        if ('function' == typeof o) o(t);
      };

      n.onTouchEnd = function () {
        if ('function' != typeof n.props.onPress) n._input.focus();
      };

      n.onRef = function (t) {
        var o = n.props.withRef;
        if ('function' == typeof o) o(t);
        n._input = t;
      };

      n.renderLeftIcon = function () {
        var t = n.props.renderLeftIcon;
        if ('function' == typeof t) return t();
      };

      n.renderRightIcon = function () {
        var t = n.props.renderRightIcon;
        if ('function' == typeof t) return t();
      };

      n.renderLeftIcon = n.renderLeftIcon.bind(module39.default(n));
      n.renderRightIcon = n.renderRightIcon.bind(module39.default(n));
      return n;
    }

    module25.default(j, [
      {
        key: 'renderInput',
        value: function () {
          var t = this,
            o = this.props,
            l = o.type,
            u = o.onPressFlag,
            c = o.onSelectCountry,
            f = o.baseColor,
            s = undefined === f ? module474.Color.black : f,
            p = o.onPress,
            b = o.value,
            S = o.label,
            O = o.inputProps,
            F = o.autoCapitalize,
            j = o.removeUnderline,
            w = o.removeActiveLine,
            R = o.grayColor,
            I = o.disabled,
            T = o.initialCountry,
            k = {
              baseColor: s,
              tintColor: 'transparent',
              selectionColor: module474.Color.primary,
              textColor: R ? 'gray' : module474.Color.black,
              errorColor: module474.Color.red,
              autoCapitalize: F || 'none',
              lineWidth: j ? 0 : ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
              activeLineWidth: w ? 0 : ReactNative.StyleSheet.hairlineWidth * module474.ms(3),
              disabledLineWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
              contentInset: {
                top: 5,
                left: 0,
                right: 0,
                label: 0,
                input: 10 * ReactNative.StyleSheet.hairlineWidth,
              },
              fontSize: module474.FontSize.m,
              labelFontSize: (S && module474.FontSize.xs) || 0,
              labelTextStyle: {
                fontFamily: module474.FontFamily.regular,
                color: module474.Color.black,
                paddingTop: module474.ms(2),
              },
              titleFontSize: module474.FontSize.xs,
              titleTextStyle: {
                fontFamily: module474.FontFamily.regular,
                color: module474.Color.black,
              },
              affixFontSize: module474.FontSize.xs,
              affixTextStyle: {
                fontFamily: module474.FontFamily.regular,
                color: module474.Color.black,
              },
              containerStyle: {
                padding: 0,
                margin: 0,
              },
            };
          if ('phone' === l)
            return React.default.createElement(
              React.default.Fragment,
              null,
              React.default.createElement(module601.default, {
                ref: this.onRef,
                textComponent: module581.TextField,
                label: S,
                tintColor: k.tintColor,
                labelHeight: k.labelHeight,
                labelFontSize: k.labelFontSize,
                labelTextStyle: k.labelTextStyle,
                value: b,
                disabled: I || false,
                initialCountry: T,
                textProps: x(
                  x(x({}, k), O),
                  {},
                  {
                    label: '',
                    style: {
                      top: k.error ? 6 : 4,
                    },
                    error: this.props.error,
                    inputContainerPadding: 0,
                    underlineColorAndroid: 'transparent',
                  }
                ),
                onPressFlag: function () {
                  if ('function' == typeof u) u();
                },
                onSelectCountry: function (t) {
                  if ('function' == typeof c) c(t);
                },
                onChangePhoneNumber: function (n) {
                  if ('function' == typeof t.props.onChangeText) t.props.onChangeText(n);
                },
              })
            );
          else {
            if ('function' == typeof p) k.key = 'touchable_input_' + b;
            return React.default.createElement(
              module581.TextField,
              module11.default(
                {
                  ref: this.onRef,
                  style: {
                    fontFamily: module474.FontFamily.regular,
                  },
                },
                this.props,
                k,
                O,
                {
                  disabledLineWidth: I ? 0 : ReactNative.StyleSheet.hairlineWidth * module474.ms(1),
                  renderLeftAccessory: this.renderLeftIcon,
                  renderRightAccessory: this.renderRightIcon,
                  underlineColorAndroid: 'transparent',
                }
              )
            );
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.onPress,
            o = t.containerStyle,
            l = t.inputContainerStyle,
            u = module855.CStyles(),
            c = false,
            f = ReactNative.View;

          if ('function' == typeof n) {
            c = true;
            f = module600.default;
          }

          return React.default.createElement(
            f,
            {
              onPress: this.onPress,
              onTouchEnd: this.onTouchEnd,
              disabled: !c,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [u.container, o],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: c ? 'none' : undefined,
                  style: [u.inputContainer, l],
                },
                this.renderInput()
              )
            )
          );
        },
      },
    ]);
    return j;
  })(React.Component),
  I = module400.connect(function (t) {
    return {
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(R);

exports.default = I;
