var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = h(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, s, u);
        else o[s] = t[s];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module854 = require('./854');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (h = function (t) {
    return t ? n : l;
  })(t);
}

function S() {
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

var v = (function (t) {
  module35.default(T, t);

  var h = T,
    v = S(),
    x = function () {
      var t,
        l = module34.default(h);

      if (v) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, n);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    var t;
    module24.default(this, T);
    (t = x.call(this)).state = {
      animationType: 'fade',
      modalVisible: false,
      data: [],
    };
    t.open = t.open.bind(module39.default(t));
    t.close = t.close.bind(module39.default(t));
    return t;
  }

  module25.default(
    T,
    [
      {
        key: 'onChange',
        value: function (t) {
          this.props.onChange(t);
          this.close();
        },
      },
      {
        key: 'close',
        value: function () {
          this.setState({
            modalVisible: false,
          });
        },
      },
      {
        key: 'open',
        value: function () {
          this.setState({
            modalVisible: true,
          });
        },
      },
      {
        key: 'renderSection',
        value: function (t) {
          return React.default.createElement(
            ReactNative.View,
            {
              key: t.key,
              style: [module854.default.sectionStyle, this.props.sectionStyle],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [module854.default.sectionTextStyle, this.props.sectionTextStyle],
              },
              t.label
            )
          );
        },
      },
      {
        key: 'renderOption',
        value: function (t) {
          var l = this;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              key: t.key,
              onPress: function () {
                return l.onChange(t);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  module854.default.optionStyle,
                  this.props.optionStyle,
                  {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 0.15,
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: t.image,
                  resizeMode: 'stretch',
                  style: {
                    width: 30,
                    height: 16,
                  },
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 0.7,
                    alignItems: 'center',
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      module854.default.optionTextStyle,
                      this.props.optionTextStyle,
                      {
                        color: '#434343',
                        fontSize: 14,
                      },
                    ],
                  },
                  t.label
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 0.15,
                    alignItems: 'flex-end',
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      module854.default.optionTextStyle,
                      this.props.optionTextStyle,
                      {
                        color: 'grey',
                        fontSize: 12,
                      },
                    ],
                  },
                  t.dialCode
                )
              )
            )
          );
        },
      },
      {
        key: 'renderOptionList',
        value: function () {
          var t = this,
            l = this.state.data.map(function (l) {
              return l.section ? t.renderSection(l) : t.renderOption(l);
            });
          return React.default.createElement(
            ReactNative.View,
            {
              style: [module854.default.overlayStyle, this.props.overlayStyle],
              key: 'modalPicker',
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: module854.default.optionContainer,
              },
              React.default.createElement(
                ReactNative.ScrollView,
                {
                  keyboardShouldPersistTaps: 'always',
                  showsVerticalScrollIndicator: false,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingHorizontal: 10,
                    },
                  },
                  l
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: module854.default.cancelContainer,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: this.close,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [module854.default.cancelStyle, this.props.cancelStyle],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [module854.default.cancelTextStyle, this.props.cancelTextStyle],
                    },
                    this.props.cancelText
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
            n = l.style,
            o = l.children,
            c = this.state,
            s = c.modalVisible,
            u = c.animationType;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n,
            },
            React.default.createElement(
              ReactNative.Modal,
              {
                transparent: true,
                ref: function (l) {
                  return (t.modal = l);
                },
                visible: s,
                onRequestClose: this.close,
                animationType: u,
              },
              this.renderOptionList()
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: this.open,
              },
              o
            )
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, l) {
          return Array.isArray(t.data)
            ? {
                data: t.data,
              }
            : null;
        },
      },
    ]
  );
  return T;
})(React.Component);

exports.default = v;
v.defaultProps = {
  data: [],
  onChange: function () {},
  initValue: 'Select me!',
  style: {},
  selectStyle: {},
  optionStyle: {},
  optionTextStyle: {},
  sectionStyle: {},
  sectionTextStyle: {},
  cancelStyle: {},
  cancelTextStyle: {},
  overlayStyle: {},
  cancelText: 'cancel',
};
