var module24 = require('./24'),
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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module602 = require('./602'),
  module851 = require('./851');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function C() {
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

var v = ReactNative.Picker.Item,
  P = (function (t) {
    module35.default(S, t);

    var b = S,
      P = C(),
      k = function () {
        var t,
          n = module34.default(b);

        if (P) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function S(t) {
      var o;
      module24.default(this, S);
      (o = k.call(this, t)).state = {
        buttonColor: o.props.buttonColor || '#007AFF',
        modalVisible: false,
        selectedCountry: o.props.selectedCountry || module602.default.getAll()[0],
      };
      o.onPressCancel = o.onPressCancel.bind(module39.default(o));
      o.onPressSubmit = o.onPressSubmit.bind(module39.default(o));
      o.onValueChange = o.onValueChange.bind(module39.default(o));
      return o;
    }

    module25.default(
      S,
      [
        {
          key: 'onPressCancel',
          value: function () {
            this.setState({
              modalVisible: false,
            });
          },
        },
        {
          key: 'onPressSubmit',
          value: function () {
            if (this.props.onSubmit) this.props.onSubmit(this.state.selectedCountry);
            this.setState({
              modalVisible: false,
            });
          },
        },
        {
          key: 'onValueChange',
          value: function (t) {
            this.setState({
              selectedCountry: t,
            });
          },
        },
        {
          key: 'selectCountry',
          value: function (t) {
            this.setState({
              selectedCountry: t,
            });
          },
        },
        {
          key: 'show',
          value: function () {
            this.setState({
              modalVisible: true,
            });
          },
        },
        {
          key: 'renderItem',
          value: function (t) {
            return React.default.createElement(v, {
              key: t.iso2,
              value: t.iso2,
              label: t.name,
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.state.buttonColor,
              o = this.props.itemStyle || {};
            return React.default.createElement(
              ReactNative.Modal,
              {
                animationType: 'slide',
                transparent: true,
                visible: this.state.modalVisible,
                onRequestClose: function () {},
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: module851.default.basicContainer,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      module851.default.modalContainer,
                      {
                        backgroundColor: this.props.pickerBackgroundColor || 'white',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: module851.default.buttonView,
                    },
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: this.onPressCancel,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            {
                              color: n,
                            },
                            this.props.buttonTextStyle,
                          ],
                        },
                        this.props.cancelText || 'Cancel'
                      )
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: this.onPressSubmit,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            {
                              color: n,
                            },
                            this.props.buttonTextStyle,
                          ],
                        },
                        this.props.confirmText || 'Confirm'
                      )
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: module851.default.mainBox,
                    },
                    React.default.createElement(
                      ReactNative.Picker,
                      {
                        ref: function (n) {
                          t.picker = n;
                        },
                        style: module851.default.bottomPicker,
                        selectedValue: this.state.selectedCountry,
                        onValueChange: function (n) {
                          return t.onValueChange(n);
                        },
                        itemStyle: o,
                        mode: 'dialog',
                      },
                      module602.default.getAll().map(function (n, o) {
                        return t.renderItem(n, o);
                      })
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
          key: 'getDerivedStateFromProps',
          value: function (t) {
            return {
              selectedCountry: t.selectedCountry,
            };
          },
        },
      ]
    );
    return S;
  })(React.Component);

exports.default = P;
