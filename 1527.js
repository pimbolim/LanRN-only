var module24 = require('./24'),
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
    var o = h(l);
    if (o && o.has(t)) return o.get(t);
    var n = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(n, u, c);
        else n[u] = t[u];
      }

    n.default = t;
    if (o) o.set(t, n);
    return n;
  })(require('react')),
  ReactNative = require('react-native'),
  module1524 = require('./1524'),
  module458 = require('./458'),
  module1528 = require('./1528'),
  module474 = require('./474'),
  module472 = require('./472');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : l;
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

var b = (function (t) {
  module35.default(C, t);

  var h = C,
    b = E(),
    v = function () {
      var t,
        l = module34.default(h);

      if (b) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    module24.default(this, C);
    return v.call(this, t);
  }

  module25.default(C, [
    {
      key: 'addressItemNameSwitch',
      value: function (t) {
        switch (t) {
          case 'loja':
            return module458.default.generic.store;

          case 'pontoentrega':
            return module458.default.generic.deliveryPoint;

          case 'box':
            return module458.default.generic.box;

          case 'cacifos':
            return module458.default.generic.locker;

          case 'morada':
            return module458.default.generic.homeDelivery;

          default:
            return '';
        }
      },
    },
    {
      key: 'renderUserAddressOption',
      value: function () {
        var t = this.props,
          l = t.addresses,
          o = t.selectedDeliveryAddressType,
          n = t.userAddressOptionOnPress,
          s = t.navigation,
          u = module1524.CStyles(),
          x = 'morada' === (null == o ? undefined : o.opcao);
        return (
          !!l.Entrega &&
          React.default.createElement(
            ReactNative.View,
            {
              style: x
                ? [
                    u.standardContainer,
                    {
                      paddingBottom: module474.ms(5),
                      paddingHorizontal: module474.ms(15),
                    },
                  ]
                : [
                    u.addressItemContainer,
                    {
                      alignItems: 'flex-start',
                    },
                  ],
            },
            React.default.createElement(
              module1528.RadioButton,
              {
                style: u.radioButtonStyle,
                labelHorizontal: true,
                key: 'userAddress',
              },
              React.default.createElement(module1528.RadioButtonInput, {
                obj: l.Entrega,
                index: 0,
                isSelected: x,
                onPress: n,
                borderWidth: 1,
                buttonInnerColor: 'black',
                buttonOuterColor: 'black',
                buttonSize: module474.ms(12),
                buttonOuterSize: module474.ms(20),
                buttonStyle: {
                  marginTop: -module474.ms(1),
                },
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: u.addressContent,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      u.text,
                      x && {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  this.addressItemNameSwitch('morada')
                ),
                x &&
                  React.default.createElement(
                    React.default.Fragment,
                    null,
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          u.lightText,
                          {
                            marginTop: module474.ms(15),
                            fontFamily: module474.FontFamily.regular,
                            color: 'grey',
                          },
                        ],
                      },
                      l.Entrega.Nome
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          u.lightText,
                          {
                            marginTop: module474.ms(2.5),
                            fontFamily: module474.FontFamily.regular,
                            color: 'grey',
                          },
                        ],
                      },
                      l.Entrega.Morada
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          u.lightText,
                          {
                            marginTop: module474.ms(2.5),
                            fontFamily: module474.FontFamily.regular,
                            color: 'grey',
                          },
                        ],
                      },
                      l.Entrega.CodPostal + ' ' + l.Entrega.Localidade
                    ),
                    React.default.createElement(
                      ReactNative.TouchableWithoutFeedback,
                      {
                        onPress: function () {
                          return s.navigate('Pro_Log_Stack', {
                            screen: 'ChangePersonalData',
                            params: {
                              fromCheckout: true,
                            },
                          });
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            u.text,
                            {
                              fontFamily: module474.FontFamily.bold,
                              marginTop: module474.ms(12.5),
                              textDecorationLine: 'underline',
                            },
                          ],
                        },
                        module458.default.generic.change + ' ' + module458.default.authentication.address
                      )
                    )
                  )
              )
            )
          )
        );
      },
    },
    {
      key: 'renderAddressItem',
      value: function (t, l) {
        var o = module1524.CStyles(),
          n = this.props,
          s = n.selectedDeliveryAddressType,
          u = n.addressItemPressHandler,
          p = n.selectedStore,
          x = n.selectedBox,
          h = n.selectedPoint,
          E = n.selectedLocker,
          b = (null == s ? undefined : s.opcao) === t.opcao;
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              o.addressItemContainer,
              {
                alignItems: 'flex-start',
              },
            ],
          },
          React.default.createElement(
            module1528.RadioButton,
            {
              style: o.radioButtonStyle,
              labelHorizontal: true,
              key: l,
            },
            React.default.createElement(module1528.RadioButtonInput, {
              obj: t,
              index: l,
              isSelected: b,
              onPress: function () {
                return u(t);
              },
              borderWidth: 1,
              buttonInnerColor: 'black',
              buttonOuterColor: 'black',
              buttonSize: module474.ms(12),
              buttonOuterSize: module474.ms(20),
              buttonStyle: {
                marginTop: -module474.ms(1),
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  o.addressContent,
                  {
                    paddingRight: module474.ms(15),
                  },
                ],
                onPress: function () {
                  return u(t);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignSelf: 'center',
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      o.text,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  this.addressItemNameSwitch(t.opcao)
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      o.text,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  (parseInt(t.portes) > 0 ? parseInt(t.portes).toFixed(2) : parseInt(t.portes)) + ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    o.text,
                    {
                      fontFamily: module474.FontFamily.light,
                      marginTop: module474.ms(5),
                    },
                  ],
                },
                t.descricao
              ),
              p &&
                s.opcao === t.opcao &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(10),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    p.Descricao
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    p.Morada + ' - ' + p.CodPostal
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    p.Horario
                  )
                ),
              x &&
                s.opcao === t.opcao &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(10),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    x.Descricao
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    x.Morada + ' - ' + x.CodPostal
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    x.Horario
                  )
                ),
              h &&
                s.opcao === t.opcao &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(10),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    h.Nome
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    h.Morada + ' - ' + h.CodPostal
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    h.Horario
                  )
                ),
              E &&
                s.opcao === t.opcao &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(10),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    E.Nome
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    E.Morada + ' - ' + E.CodPostal
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        o.lightText,
                        {
                          marginTop: module474.ms(2.5),
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    E.Horario
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
          l = module1524.CStyles(),
          o = this.props,
          n = o.deliveryOptions,
          s = o.selectedDeliveryAddressType,
          u = o.showMoreDeliveryAddresses,
          F = o.addressAreaTabPress;
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
              module458.default.generic.whereDoWeSendIt.toUpperCase()
            )
          ),
          !!s &&
            'morada' !== (null == s ? undefined : s.opcao) &&
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.standardContainer,
                  {
                    paddingBottom: module474.ms(5),
                    paddingHorizontal: module474.ms(15),
                  },
                ],
              },
              this.renderAddressItem(s, -1)
            ),
          'morada' === (null == s ? undefined : s.opcao) && this.renderUserAddressOption(),
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                l.standardContainer,
                {
                  alignItems: 'center',
                  paddingHorizontal: module474.ms(15),
                },
              ],
            },
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: F,
                style: [l.collapsableAreaContainer, !u && l.bottomBorder],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    l.text,
                    {
                      marginLeft: module474.ms(0),
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                module458.default.generic.otherDeliveryOptions
              ),
              React.default.createElement(module472.Icon, {
                name: 'anterior',
                size: module474.ms(16),
                style: {
                  transform: [
                    {
                      rotate: u ? '90deg' : '270deg',
                    },
                  ],
                },
              })
            )
          ),
          u &&
            React.default.createElement(
              ReactNative.View,
              {
                style: l.radioButtonsArea,
              },
              n.map(function (l, o) {
                if (l.opcao !== (null == s ? undefined : s.opcao)) return t.renderAddressItem(l, o);
              })
            )
        );
      },
    },
  ]);
  return C;
})(React.Component);

exports.DeliveryOptions = b;
