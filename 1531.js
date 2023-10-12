var module24 = require('./24'),
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
    var l = E(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1524 = require('./1524'),
  module458 = require('./458'),
  module1528 = require('./1528'),
  module474 = require('./474'),
  module472 = require('./472');

function E(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (E = function (t) {
    return t ? l : n;
  })(t);
}

function M() {
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

var F = (function (t) {
  module35.default(w, t);

  var E = w,
    F = M(),
    T = function () {
      var t,
        n = module34.default(E);

      if (F) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    module24.default(this, w);
    return T.call(this, t);
  }

  module25.default(w, [
    {
      key: 'renderDeliveryMethodItem',
      value: function (t, n) {
        var l = module1524.CStyles(),
          o = this.props,
          u = o.selectedDeliveryMethod,
          s = o.deliveryMethodItemPress,
          p = (null == u ? undefined : u.idTipo) === t.idTipo;
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              l.addressItemContainer,
              {
                alignItems: 'flex-start',
              },
            ],
          },
          React.default.createElement(
            module1528.RadioButton,
            {
              style: l.radioButtonStyle,
              labelHorizontal: true,
              key: n,
            },
            React.default.createElement(module1528.RadioButtonInput, {
              obj: t,
              index: n,
              isSelected: p,
              onPress: function () {
                return s(t);
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
                  l.addressContent,
                  {
                    paddingRight: module474.ms(15),
                  },
                ],
                onPress: function () {
                  return s(t);
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
                      l.text,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  t.titulo
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      l.text,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  null != t && t.portes ? (null == t ? undefined : t.portes) : 0,
                  ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    l.text,
                    {
                      fontFamily: module474.FontFamily.light,
                      marginTop: module474.ms(5),
                    },
                  ],
                },
                t.descricao
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
          n = module1524.CStyles(),
          l = this.props,
          o = l.selectedDeliveryMethod,
          u = l.showMoreDeliveryMethods,
          s = l.shippingOptions,
          h = l.deliveryMethodsAreaTabPress;
        return React.default.createElement(
          React.default.Fragment,
          null,
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                n.titleContainer,
                {
                  marginTop: module474.ms(35),
                },
              ],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.titleText,
                  {
                    fontFamily: module474.FontFamily.bold,
                  },
                ],
              },
              module458.default.generic.forWhenDoWeShipIt.toUpperCase()
            )
          ),
          o &&
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.standardContainer,
                  {
                    paddingBottom: module474.ms(5),
                    paddingHorizontal: module474.ms(15),
                  },
                ],
              },
              this.renderDeliveryMethodItem(o, -1)
            ),
          s.length > 1 &&
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.standardContainer,
                  {
                    alignItems: 'center',
                    paddingHorizontal: module474.ms(15),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: h,
                  style: [n.collapsableAreaContainer, !u && n.bottomBorder],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.text,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  module458.default.generic.otherDeliveryMethods
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
                style: n.radioButtonsArea,
              },
              s.map(function (n, l) {
                if (n.idTipo !== (null == o ? undefined : o.idTipo)) return t.renderDeliveryMethodItem(n, l);
              })
            )
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.DeliveryMethods = F;
