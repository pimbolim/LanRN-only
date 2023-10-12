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
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, s, c);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module584 = require('./584'),
  module586 = require('./586'),
  module588 = require('./588'),
  module590 = require('./590'),
  module592 = require('./592'),
  module594 = require('./594');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function F(t, n) {
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

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      F(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      F(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
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

function R(t, n, o) {
  ReactNative.Animated.timing(t, n).start(o);
}

function z(t, n) {
  var o = t.value,
    u = t.placeholder,
    l = t.defaultValue,
    s = n.receivedFocus;
  return !!(u || o || (!s && l));
}

function T(t, n) {
  return !!t.error;
}

var L = (function (t) {
  module35.default(L, t);

  var module47 = L,
    O = x(),
    F = function () {
      var t,
        n = module34.default(module47);

      if (O) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function L(t) {
    var n;
    module24.default(this, L);
    (n = F.call(this, t)).onBlur = n.onBlur.bind(module39.default(n));
    n.onFocus = n.onFocus.bind(module39.default(n));
    n.onPress = n.focus.bind(module39.default(n));
    n.onChange = n.onChange.bind(module39.default(n));
    n.onChangeText = n.onChangeText.bind(module39.default(n));
    n.onContentSizeChange = n.onContentSizeChange.bind(module39.default(n));
    n.onFocusAnimationEnd = n.onFocusAnimationEnd.bind(module39.default(n));
    n.createGetter('contentInset');
    n.createGetter('labelOffset');
    n.inputRef = React.default.createRef();
    n.mounted = false;
    n.focused = false;
    var o = n.props,
      l = o.value,
      c = o.error,
      f = o.fontSize,
      h = z(n.props, {
        text: l,
      })
        ? 1
        : 0,
      y = T(n.props) ? -1 : 0;
    n.state = {
      error: c,
      focusAnimation: new ReactNative.Animated.Value(y),
      labelAnimation: new ReactNative.Animated.Value(h),
      receivedFocus: false,
      height: 1.5 * f,
    };
    return n;
  }

  module25.default(
    L,
    [
      {
        key: 'createGetter',
        value: function (t) {
          var n = this;

          this[t] = function () {
            var o = n.props[t];
            return P(P({}, n.constructor[t]), o);
          };
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this.mounted = true;
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.mounted = false;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t, n) {
          if (T(this.props) ^ T(t)) this.startFocusAnimation();
          if (z(this.props, this.state) ^ z(t, n)) this.startLabelAnimation();
        },
      },
      {
        key: 'startFocusAnimation',
        value: function () {
          var t = this.state.focusAnimation,
            n = this.props.animationDuration;
          R(
            t,
            {
              toValue: this.focusState(),
              duration: n,
              useNativeDriver: false,
            },
            this.onFocusAnimationEnd
          );
        },
      },
      {
        key: 'startLabelAnimation',
        value: function () {
          var t = this.state.labelAnimation,
            n = this.props.animationDuration;
          R(t, {
            toValue: this.labelState(),
            useNativeDriver: true,
            duration: n,
          });
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this.inputRef.current.setNativeProps(t);
        },
      },
      {
        key: 'focusState',
        value: function () {
          return T(this.props) ? -1 : this.focused ? 1 : 0;
        },
      },
      {
        key: 'labelState',
        value: function () {
          return z(this.props, this.state) ? 1 : this.focused ? 1 : 0;
        },
      },
      {
        key: 'focus',
        value: function () {
          var t = this.props,
            n = t.disabled,
            o = t.editable,
            u = this.inputRef.current;
          if (!n && o) u.focus();
        },
      },
      {
        key: 'blur',
        value: function () {
          this.inputRef.current.blur();
        },
      },
      {
        key: 'clear',
        value: function () {
          this.inputRef.current.clear();
          this.onChangeText('');
        },
      },
      {
        key: 'value',
        value: function () {
          var t = this.props,
            n = t.value,
            o = t.defaultValue,
            u = this.isDefaultVisible() ? o : n;
          return null == u ? '' : 'string' == typeof u ? u : String(u);
        },
      },
      {
        key: 'isFocused',
        value: function () {
          return this.inputRef.current.isFocused();
        },
      },
      {
        key: 'isRestricted',
        value: function () {
          return this.props.characterRestriction < this.value().length;
        },
      },
      {
        key: 'isErrored',
        value: function () {
          return T(this.props);
        },
      },
      {
        key: 'isDefaultVisible',
        value: function () {
          var t = this.state.receivedFocus,
            n = this.props,
            o = n.value,
            u = n.defaultValue;
          return !t && null == o && null != u;
        },
      },
      {
        key: 'isPlaceholderVisible',
        value: function () {
          return this.props.placeholder && !this.focused && !this.value();
        },
      },
      {
        key: 'isLabelActive',
        value: function () {
          return 1 === this.labelState();
        },
      },
      {
        key: 'onFocus',
        value: function (t) {
          var n = this.props,
            o = n.onFocus,
            u = n.clearTextOnFocus,
            l = this.state.receivedFocus;
          if ('function' == typeof o) o(t);
          if (u) this.clear();
          this.focused = true;
          this.startFocusAnimation();
          this.startLabelAnimation();
          if (!l)
            this.setState({
              receivedFocus: true,
            });
        },
      },
      {
        key: 'onBlur',
        value: function (t) {
          var n = this.props.onBlur;
          if ('function' == typeof n) n(t);
          this.focused = false;
          this.startFocusAnimation();
          this.startLabelAnimation();
        },
      },
      {
        key: 'onChange',
        value: function (t) {
          var n = this.props.onChange;
          if ('function' == typeof n) n(t);
        },
      },
      {
        key: 'onChangeText',
        value: function (t) {
          var n = this.props,
            o = n.onChangeText,
            u = n.formatText;
          if ('function' == typeof u) t = u(t);
          if ('function' == typeof o) o(t);
        },
      },
      {
        key: 'onContentSizeChange',
        value: function (t) {
          var n = this.props,
            o = n.onContentSizeChange,
            u = n.fontSize,
            l = t.nativeEvent.contentSize.height;
          if ('function' == typeof o) o(t);
          this.setState({
            height:
              (1.5 * u) **
              (Math.ceil(l) +
                ReactNative.Platform.select({
                  ios: 4,
                  android: 1,
                })),
          });
        },
      },
      {
        key: 'onFocusAnimationEnd',
        value: function () {
          var t = this.props.error,
            n = this.state.error;
          if (this.mounted && !t && n)
            this.setState({
              error: null,
            });
        },
      },
      {
        key: 'inputHeight',
        value: function () {
          var t = this.state.height,
            n = this.props,
            o = n.multiline,
            u = n.fontSize,
            l = n.height;
          return o ? (undefined === l ? t : l) : 1.5 * u;
        },
      },
      {
        key: 'inputContainerHeight',
        value: function () {
          var t = this.props,
            n = t.labelFontSize,
            o = t.multiline,
            u = this.contentInset();
          return 'web' === ReactNative.Platform.OS && o ? 'auto' : u.top + n + u.label + this.inputHeight() + u.input;
        },
      },
      {
        key: 'inputProps',
        value: function () {
          var t = {};

          for (var n in ReactNative.TextInput.propTypes) 'defaultValue' !== n && n in this.props && (t[n] = this.props[n]);

          return t;
        },
      },
      {
        key: 'inputStyle',
        value: function () {
          var t = this.props,
            n = t.fontSize,
            o = t.baseColor,
            u = t.textColor,
            l = t.disabled,
            s = t.multiline,
            c = {
              fontSize: n,
              color: l || this.isDefaultVisible() ? o : u,
              height: this.inputHeight(),
            };
          if (!s) return c;
          var f = 1.5 * n,
            h = 'ios' === ReactNative.Platform.OS ? 2 : 0;
          c.height += f;
          c.transform = [
            {
              translateY: f + h,
            },
          ];
          return c;
        },
      },
      {
        key: 'renderLabel',
        value: function (t) {
          var o = this.labelOffset(),
            u = this.props,
            l = u.label,
            s = u.fontSize,
            c = u.labelFontSize,
            f = u.labelTextStyle;
          return React.default.createElement(
            module586.default,
            module11.default({}, t, {
              fontSize: s,
              activeFontSize: c,
              offset: o,
              label: l,
              style: f,
            })
          );
        },
      },
      {
        key: 'renderLine',
        value: function (t) {
          return React.default.createElement(module584.default, t);
        },
      },
      {
        key: 'renderAccessory',
        value: function (t) {
          var n = this.props[t];
          return 'function' == typeof n ? n() : null;
        },
      },
      {
        key: 'renderAffix',
        value: function (t) {
          var n = this.state.labelAnimation,
            o = this.props,
            u = o[t],
            l = o.fontSize,
            s = o.baseColor,
            c = o.affixTextStyle;
          if (null == u) return null;
          var f = {
            type: t,
            style: c,
            color: s,
            fontSize: l,
            labelAnimation: n,
          };
          return React.default.createElement(module588.default, f, u);
        },
      },
      {
        key: 'renderHelper',
        value: function () {
          var t = this.state,
            n = t.focusAnimation,
            o = t.error,
            u = this.props,
            l = u.title,
            s = u.disabled,
            c = u.baseColor,
            f = u.errorColor,
            h = u.titleTextStyle,
            y = u.characterRestriction,
            b = this.value().length,
            C = this.contentInset(),
            O = {
              paddingLeft: C.left,
              paddingRight: C.right,
            },
            F = {
              style: h,
              baseColor: c,
              errorColor: f,
            },
            x = P(
              P({}, F),
              {},
              {
                limit: y,
                count: b,
              }
            ),
            R = P(
              P({}, F),
              {},
              {
                title: l,
                error: o,
                disabled: s,
                focusAnimation: n,
              }
            );
          return React.default.createElement(
            ReactNative.View,
            {
              style: [module594.default.helperContainer, O],
            },
            React.default.createElement(module590.default, R),
            React.default.createElement(module592.default, x)
          );
        },
      },
      {
        key: 'renderInput',
        value: function () {
          var t = this.props,
            o = t.disabled,
            u = t.editable,
            l = t.tintColor,
            s = t.style,
            c = this.inputProps(),
            f = this.inputStyle();
          return React.default.createElement(
            ReactNative.TextInput,
            module11.default(
              {
                selectionColor: l,
              },
              c,
              {
                style: [module594.default.input, f, s],
                editable: !o && u,
                onChange: this.onChange,
                onChangeText: this.onChangeText,
                onContentSizeChange: this.onContentSizeChange,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                value: this.value(),
                ref: this.inputRef,
              }
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.state,
            n = t.labelAnimation,
            o = t.focusAnimation,
            u = this.props,
            l = u.editable,
            s = u.disabled,
            c = u.lineType,
            f = u.disabledLineType,
            h = u.lineWidth,
            y = u.activeLineWidth,
            b = u.disabledLineWidth,
            C = u.tintColor,
            S = u.baseColor,
            k = u.errorColor,
            O = u.containerStyle,
            F = u.inputContainerStyle,
            x = this.isRestricted(),
            R = this.contentInset(),
            z = {
              paddingTop: R.top,
              paddingRight: R.right,
              paddingBottom: R.input,
              paddingLeft: R.left,
              height: this.inputContainerHeight(),
            },
            T = {
              style: O,
              onStartShouldSetResponder: function () {
                return true;
              },
              onResponderRelease: this.onPress,
              pointerEvents: !s && l ? 'auto' : 'none',
            },
            L = {
              style: [this.constructor.inputContainerStyle, z, F],
            },
            w = {
              disabled: s,
              restricted: x,
              baseColor: S,
              tintColor: C,
              errorColor: k,
              contentInset: R,
              focusAnimation: o,
              labelAnimation: n,
            },
            E = P(
              P({}, w),
              {},
              {
                lineWidth: h,
                activeLineWidth: y,
                disabledLineWidth: b,
                lineType: c,
                disabledLineType: f,
              }
            );
          return React.default.createElement(
            ReactNative.View,
            T,
            React.default.createElement(
              ReactNative.Animated.View,
              L,
              this.renderLine(E),
              this.renderAccessory('renderLeftAccessory'),
              React.default.createElement(
                ReactNative.View,
                {
                  style: module594.default.stack,
                },
                this.renderLabel(w),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: module594.default.row,
                  },
                  this.renderAffix('prefix'),
                  this.renderInput(),
                  this.renderAffix('suffix')
                )
              ),
              this.renderAccessory('renderRightAccessory')
            ),
            this.renderHelper()
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          var o = t.error;
          return o && o !== n.error
            ? {
                error: o,
              }
            : null;
        },
      },
    ]
  );
  return L;
})(React.PureComponent);

exports.default = L;
L.defaultProps = {
  underlineColorAndroid: 'transparent',
  disableFullscreenUI: true,
  autoCapitalize: 'sentences',
  editable: true,
  animationDuration: 225,
  fontSize: 16,
  labelFontSize: 12,
  tintColor: 'rgb(0, 145, 234)',
  textColor: 'rgba(0, 0, 0, .87)',
  baseColor: 'rgba(0, 0, 0, .38)',
  errorColor: 'rgb(213, 0, 0)',
  lineWidth: ReactNative.StyleSheet.hairlineWidth,
  activeLineWidth: 2,
  disabledLineWidth: 1,
  lineType: 'solid',
  disabledLineType: 'dotted',
  disabled: false,
};
L.inputContainerStyle = module594.default.inputContainer;
L.contentInset = {
  top: 16,
  label: 4,
  input: 8,
  left: 0,
  right: 0,
};
L.labelOffset = {
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 0,
};
