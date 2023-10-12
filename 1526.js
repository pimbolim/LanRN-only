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
    var l = w(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1524 = require('./1524'),
  module458 = require('./458'),
  module474 = require('./474'),
  module1185 = require('./1185'),
  module472 = require('./472');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (w = function (t) {
    return t ? l : n;
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

var T = module1524.CStyles(),
  b = function (t, n) {
    return React.default.createElement(
      ReactNative.TouchableOpacity,
      {
        style: [T.radioButtonContainer],
        onPress: function () {
          return n();
        },
      },
      t &&
        React.default.createElement(ReactNative.View, {
          style: T.innerRadio,
        })
    );
  },
  x = (function (t) {
    module35.default(C, t);

    var w = C,
      T = E(),
      x = function () {
        var t,
          n = module34.default(w);

        if (T) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function C(t) {
      var l;
      module24.default(this, C);
      (l = x.call(this, t))._phoneInput = null;
      l.renderPaymentMethodItem = l.renderPaymentMethodItem.bind(module39.default(l));
      return l;
    }

    module25.default(C, [
      {
        key: 'logoSize',
        value: function (t, n) {
          if (t >= n) {
            var l = 110 / t;

            if ((s = Math.ceil(l * n)) > 30) {
              l = 30 / n;
              var o = {
                width: (u = Math.ceil(l * t)),
                height: 30,
              };
            } else
              o = {
                width: 110,
                height: s,
              };
          } else {
            var u;
            l = 30 / n;

            if ((u = Math.ceil(l * t)) > 110) {
              var s;
              l = 110 / t;
              o = {
                width: 110,
                height: (s = Math.ceil(l * n)),
              };
            } else
              o = {
                width: u,
                height: 30,
              };
          }

          return o;
        },
      },
      {
        key: 'renderVisaDetails',
        value: function () {
          var t = module1524.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginBottom: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  t.text,
                  {
                    color: 'grey',
                  },
                ],
              },
              module458.default.payments.atmText
            )
          );
        },
      },
      {
        key: 'renderATMDetails',
        value: function (t) {
          var n = module1524.CStyles(),
            l = this.props,
            o = l.savedPaymentMethod;
          if (!(null == o)) o.seleccionar;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginBottom: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.text,
                  {
                    color: 'grey',
                  },
                ],
              },
              t.texto
            )
          );
        },
      },
      {
        key: 'renderTBPayDetails',
        value: function (t) {
          var n = module1524.CStyles(),
            l = this.props,
            o = l.onTbNameChange,
            u = l.tbName;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginBottom: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.text,
                  {
                    color: 'grey',
                  },
                ],
              },
              t.nota
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [n.tbTextContainer],
              },
              React.default.createElement(ReactNative.TextInput, {
                style: {
                  paddingLeft: module474.ms(10),
                },
                placeholder: module458.default.payments.tbName,
                value: u,
                multiline: true,
                onChangeText: function (t) {
                  return o(t);
                },
              })
            )
          );
        },
      },
      {
        key: 'renderMbwayDetails',
        value: function (t) {
          var n = this,
            l = module1524.CStyles(),
            o = this.props,
            u = o.onMBWayPhoneChange,
            s = o.placeholder;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginBottom: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.text,
                  {
                    color: 'grey',
                  },
                ],
              },
              t.texto
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.text,
                  {
                    color: 'grey',
                    marginTop: module474.ms(10),
                  },
                ],
              },
              module458.default.payments.mbwayText
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [l.mbwayPhoneInputContainer],
              },
              React.default.createElement(module472.Input, {
                withRef: function (t) {
                  return (n._phoneInput = t);
                },
                type: 'phone',
                containerStyle: [
                  {
                    height: module474.ms(35),
                    width: module474.ms(105),
                  },
                ],
                placeholder: module458.default.payments.mobileNumber,
                initialCountry: 'pt',
                value: '+351',
                onChangeText: function (t) {
                  return u(t);
                },
                removeUnderline: true,
                disabled: true,
              }),
              React.default.createElement(ReactNative.TextInput, {
                keyboardType: 'numeric',
                onChangeText: function (t) {
                  return u(t);
                },
                placeholder: module458.default.payments.mobileNumber,
                defaultValue: s && s,
                style: l.maxResize,
              })
            )
          );
        },
      },
      {
        key: 'renderPaypalDetails',
        value: function () {
          var t = module1524.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginBottom: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  t.text,
                  {
                    color: 'grey',
                  },
                ],
              },
              module458.default.payments.atmText
            )
          );
        },
      },
      {
        key: 'renderApplePayDetails',
        value: function () {
          var t = module1524.CStyles(),
            n = this.props,
            l = n.savedPaymentMethod,
            o = n.onSavePaymentMethod,
            u = 'APPLEPAY' === (null == l ? undefined : l.seleccionar);
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                t.saveMethodRadioContainer,
                {
                  marginTop: module474.ms(10),
                },
              ],
            },
            b(u, o.bind(this)),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  t.text,
                  {
                    marginLeft: module474.ms(10),
                  },
                ],
              },
              module458.default.payments.saveMethodForFuturePurchases
            )
          );
        },
      },
      {
        key: 'renderPaymentMethodDataArea',
        value: function (t) {
          return 'CC' === t.seleccionar
            ? this.renderVisaDetails()
            : 'MB' === t.seleccionar
            ? this.renderATMDetails(t)
            : 'MBWAY' === t.seleccionar
            ? this.renderMbwayDetails(t)
            : 'PAYPAL' === t.seleccionar
            ? this.renderPaypalDetails()
            : 'TB' === t.seleccionar
            ? this.renderTBPayDetails(t)
            : undefined;
        },
      },
      {
        key: 'getPaymentMethodIcon',
        value: function (t) {
          switch (t) {
            case 'MBWAY':
              return module1185.mbway;

            case 'PAYPAL':
              return module1185.paypal;

            case 'MB':
              return module1185.multibanco;

            case 'CC':
              return module1185.visa;

            case 'APPLEPAY':
              return module1185.applepay;

            default:
              return '';
          }
        },
      },
      {
        key: 'renderPaymentMethodItem',
        value: function (t, n) {
          var l = module1524.CStyles(),
            o = this.props,
            u = o.selectedPaymentMethod,
            s = o.onPressPaymentMethod,
            c = o.applePaySupported;
          if ('APPLEPAY' == t.seleccionar && !c) return null;
          var h = (null == u ? undefined : u.seleccionar) === t.seleccionar,
            P = t.logo,
            M = this.logoSize(300, 200);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.paymentWrapper,
                  {
                    marginVertical: module474.ms(10),
                  },
                ],
              },
              b(h, s.bind(this, t)),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    {
                      marginLeft: module474.ms(10),
                      flexDirection: 'row',
                    },
                    'TB' == t.seleccionar && {
                      marginLeft: 0,
                    },
                  ],
                },
                'TB' != t.seleccionar &&
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        l.paymentMethodImageContainer,
                        {
                          bottom: module474.ms(4),
                          marginLeft: module474.ms(5),
                        },
                      ],
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: {
                        uri: P,
                      },
                      style: [
                        l.paymentMethodImage,
                        {
                          width: M.width,
                          height: M.height,
                        },
                      ],
                    })
                  ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      l.text,
                      h && {
                        fontFamily: module474.FontFamily.bold,
                        justifyContent: 'center',
                      },
                      {
                        marginLeft: module474.ms(15),
                      },
                    ],
                  },
                  t.descricao
                )
              )
            ),
            (null == u ? undefined : u.seleccionar) === t.seleccionar && this.renderPaymentMethodDataArea(u)
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            n = this,
            l = module1524.CStyles(),
            o = this.props.paymentOptions;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.titleContainer,
                  {
                    marginTop: module474.ms(35),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    l.titleText,
                    {
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                module458.default.profile.paymentMethods.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: l.radioButtonsArea,
              },
              null == o
                ? undefined
                : null == (t = o.Tipos)
                ? undefined
                : t.map(function (t, l) {
                    return n.renderPaymentMethodItem(t, l);
                  })
            )
          );
        },
      },
    ]);
    return C;
  })(React.Component);

exports.PaymentOptions = x;
