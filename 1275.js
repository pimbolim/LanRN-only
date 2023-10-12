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
    var n = F(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
        else o[c] = t[c];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module600 = require('./600'),
  module565 = require('./565'),
  module400 = require('./400'),
  module1276 = require('./1276'),
  module1277 = require('./1277'),
  module474 = require('./474'),
  module1272 = require('./1272'),
  module458 = require('./458'),
  module1278 = require('./1278');

function F(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (F = function (t) {
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

var S = (function (t) {
    module35.default(V, t);

    var module400 = V,
      F = P(),
      S = function () {
        var t,
          l = module34.default(module400);

        if (F) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(l, arguments, n);
        } else t = l.apply(this, arguments);

        return module37.default(this, t);
      };

    function V(t) {
      var n;
      module24.default(this, V);
      (n = S.call(this, t))._swipe = null;

      n.onChangeDefault = function () {
        var t = n.props.onChangeDefault;
        if ('function' == typeof t) t();
      };

      n.onSelect = function () {
        var t = n.props.onSelect;
        if ('function' == typeof t) t();
      };

      n.onDelete = function () {
        var t = n.props,
          l = t.onDelete,
          o = t.product;
        if ('function' == typeof l) l(o);
        setImmediate(function () {
          var t;
          return null == (t = n._swipe) ? undefined : t.recenter();
        });
      };

      n.state = {};
      n.renderProductInfo = n.renderProductInfo.bind(module39.default(n));
      return n;
    }

    module25.default(V, [
      {
        key: 'onScroll',
        value: function (t) {
          var l = this.props.onScroll;
          if ('function' == typeof l) l(t);
        },
      },
      {
        key: 'renderSwipeButtons',
        value: function () {
          var t = module1277.CStyles();
          return this.props.isCheckoutCard
            ? [
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      height: '100%',
                    },
                  },
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [
                        t.deleteButton,
                        {
                          height: '50%',
                        },
                      ],
                      onPress: this.onDelete,
                    },
                    React.default.createElement(module565.default, {
                      name: 'Delete',
                      style: t.deleteIcon,
                    })
                  ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [
                        t.deleteButton,
                        {
                          height: '50%',
                          backgroundColor: 'grey',
                        },
                      ],
                      onPress: this.props.wishlistAction,
                    },
                    React.default.createElement(module565.default, {
                      name: 'Like-Fill',
                      style: t.deleteIcon,
                    })
                  )
                ),
              ]
            : [
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: t.deleteButton,
                    onPress: this.onDelete,
                  },
                  React.default.createElement(module565.default, {
                    name: 'Delete',
                    style: t.deleteIcon,
                  })
                ),
              ];
        },
      },
      {
        key: 'renderProductImage',
        value: function () {
          var t = module1277.CStyles(),
            l = this.props.product;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: this.onSelect,
              style: t.productImageContainer,
            },
            React.default.createElement(module1272.default, {
              resizeMode: 'cover',
              style: t.productImage,
              source: {
                uri: l.Imagem || l.ImagemSrc,
              },
            })
          );
        },
      },
      {
        key: 'renderWishlistProductInfo',
        value: function () {
          var t = module1277.CStyles(),
            l = this.props,
            n = l.hideRightContent,
            o = l.onAddToCart,
            u = this.props.product,
            c = u.Designacao,
            s = u.Referencia,
            p = u.Tamanho,
            x = u.PVP,
            h = u.PrecoPromocao,
            T = u.Pantone,
            b = u.PodeReservar,
            v = null !== h && h > 0,
            F = module458.default.generic.add;
          if (b) F = module458.default.generic.reserve;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                  justifyContent: 'space-evenly',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [t.textRow],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 3,
                    style: [
                      t.semiboldText,
                      {
                        maxWidth: n ? '60%' : '90%',
                      },
                    ],
                  },
                  c
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.textRow,
                    {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.smallerText,
                      {
                        color: 'gray',
                      },
                    ],
                  },
                  'Ref. ' + s
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.textRow,
                    {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                React.default.createElement(ReactNative.View, {
                  style: [
                    t.colorCircle,
                    {
                      backgroundColor: T,
                    },
                  ],
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.semiboldText,
                  },
                  p
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  t.textRow,
                  {
                    justifyContent: 'space-between',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    justifyContent: 'center',
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.bigBoldText,
                      v && {
                        textDecorationLine: 'line-through',
                        fontSize: module474.FontSize.m,
                      },
                    ],
                  },
                  x.toFixed(2) + '\u20ac '
                ),
                v &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.bigBoldText,
                        {
                          color: module474.Color.red,
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    h.toFixed(2) + '\u20ac '
                  )
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    return o && o();
                  },
                  style: [t.button],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.buttonText,
                  },
                  F.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderCartProductInfo',
        value: function () {
          var t = module1277.CStyles(),
            l = this.props,
            n = l.isSelected,
            o = l.hideCheckboxArea,
            u = l.selectionAction,
            c = l.isCart,
            s = this.props.product,
            p = s.Designacao,
            h = s.Referencia,
            T = s.Tamanho,
            b = s.PVP,
            v = s.PrecoPromocao,
            F = s.CorPantone,
            P = s.Desconto,
            S = null !== P && P > 0;
          if (!c) S = false;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                  justifyContent: 'space-evenly',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.textRow,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 3,
                    style: [
                      t.semiboldText,
                      {
                        maxWidth: '60%',
                      },
                    ],
                  },
                  p
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.regularText,
                      S && {
                        textDecorationLine: 'line-through',
                      },
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  b.toFixed(2) + '\u20ac '
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.textRow,
                    {
                      marginTop: module474.ms(2.5),
                    },
                    {
                      justifyContent: 'space-between',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.smallerText,
                      {
                        color: 'gray',
                      },
                    ],
                  },
                  'Ref. ' + h
                ),
                S &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.bigBoldText,
                        {
                          color: module474.Color.red,
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    v.toFixed(2) + '\u20ac '
                  )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.textRow,
                    {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                React.default.createElement(ReactNative.View, {
                  style: [
                    t.colorCircle,
                    {
                      backgroundColor: F,
                    },
                  ],
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.semiboldText,
                  },
                  T
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  t.textRow,
                  {
                    justifyContent: 'space-between',
                  },
                ],
              },
              !o &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return u();
                      },
                      style: [t.textRow],
                    },
                    React.default.createElement(module565.default, {
                      name: n ? 'check' : 'uncheck',
                      size: module474.ms(18),
                      color: 'black',
                      style: {
                        marginRight: module474.ms(12.5),
                      },
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          t.regularText,
                          {
                            fontSize: module474.FontSize.xs,
                          },
                        ],
                      },
                      module458.default.generic.isItAGift
                    )
                  )
                )
            )
          );
        },
      },
      {
        key: 'renderOrderProductInfo',
        value: function () {
          var t = module1277.CStyles(),
            l = this.props.product,
            n = l.ValorFinalEncomenda,
            o = l.NOperacao,
            u = l.tipo,
            c = l.DataEncomenda,
            s = l.DataEstado,
            p = l.Estado,
            x = l.QtdPecas,
            h = module1278.DateTime.fromISO(c).toFormat('dd-MM-yyyy'),
            T = module1278.DateTime.fromISO(s).toFormat('dd-MM-yyyy HH:mm');
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: this.onSelect,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                  justifyContent: 'space-between',
                  height: '100%',
                  paddingVertical: module474.ms(15),
                },
              },
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      t.textRow,
                      {
                        justifyContent: 'space-between',
                        marginTop: module474.ms(2.5),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.bigBoldText,
                        {
                          fontSize: module474.FontSize.xl,
                        },
                      ],
                    },
                    n.toFixed(2) + ' \u20ac'
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.smallerText,
                        {
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    h
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module474.ms(7.5),
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [t.textRow],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        numberOfLines: 1,
                        ellipsizeMode: 'tail',
                        style: [
                          t.smallerText,
                          {
                            fontFamily: module474.FontFamily.regular,
                          },
                        ],
                      },
                      module458.default.profile.orderNumber + ': ' + o
                    )
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.smallerText,
                        {
                          fontFamily: module474.FontFamily.regular,
                          marginTop: module474.ms(2.5),
                        },
                      ],
                    },
                    u + ' | ' + x + ' ' + module458.default.profile.piece + (1 === x ? '' : 's')
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    marginTop: module474.ms(15),
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.smallerText,
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                      9 === (null == l ? undefined : l.idEstadoEncomenda) && {
                        color: 'green',
                      },
                      0 === (null == l ? undefined : l.idEstadoEncomenda) && {
                        color: 'orange',
                      },
                    ],
                  },
                  p.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.smallerText,
                      {
                        marginTop: module474.ms(2.5),
                        color: 'grey',
                      },
                    ],
                  },
                  T
                )
              )
            )
          );
        },
      },
      {
        key: 'renderProductExchageInfo',
        value: function (t, l) {
          var n,
            o,
            u,
            c,
            s = module1277.CStyles();
          return 'return' == l
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    paddingVertical: module474.ms(10),
                    flex: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.smallerText,
                      {
                        color: module474.Color.textGray,
                        paddingBottom: module474.ms(5),
                      },
                    ],
                  },
                  module458.default.orderDetail.return.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.smallerText,
                      {
                        fontSize: module474.FontSize.xs,
                        width: '80%',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.smallerText,
                        {
                          fontSize: module474.FontSize.xs,
                          fontFamily: module474.FontFamily.bold,
                        },
                      ],
                    },
                    module458.default.orderDetail.motiveTitle,
                    ':',
                    ' '
                  ),
                  ' ',
                  null == (u = t.exchangeProductInfo) ? undefined : null == (c = u.Motivo) ? undefined : c.DescricaoMotivo
                )
              )
            : React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    paddingVertical: module474.ms(10),
                    paddingTop: module474.ms(15),
                    flex: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.smallerText,
                      {
                        color: module474.Color.textGray,
                        paddingBottom: module474.ms(5),
                      },
                    ],
                  },
                  module458.default.orderDetail.changeFor.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.textRow,
                      {
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      numberOfLines: 3,
                      style: [
                        s.semiboldText,
                        {
                          maxWidth: '60%',
                        },
                      ],
                    },
                    t.Descricao
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.textRow,
                      {
                        marginTop: module474.ms(2.5),
                      },
                      {
                        justifyContent: 'space-between',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.smallerText,
                        {
                          color: 'gray',
                        },
                      ],
                    },
                    'Ref. ' + t.Referencia
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.textRow,
                      {
                        marginTop: module474.ms(2.5),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: s.semiboldText,
                    },
                    t.exchangeProductInfo.Tamanho
                  )
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.smallerText,
                      {
                        marginTop: module474.ms(5),
                        fontSize: module474.FontSize.xs,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.smallerText,
                        {
                          fontSize: module474.FontSize.xs,
                          fontFamily: module474.FontFamily.bold,
                        },
                      ],
                    },
                    module458.default.orderDetail.motiveTitle,
                    ':',
                    ' '
                  ),
                  null == (n = t.exchangeProductInfo) ? undefined : null == (o = n.Motivo) ? undefined : o.DescricaoMotivo
                )
              );
        },
      },
      {
        key: 'renderOrderDetailProductInfo',
        value: function () {
          var t,
            l,
            n = module1277.CStyles(),
            o = this.props,
            u = o.exchangeReturn,
            c = o.onPressExchangeReturn,
            s = o.product,
            p = o.pickUpView,
            x = s.Descricao,
            h = s.Referencia,
            T = s.Tamanho,
            b = s.PVPinicial,
            v = s.PVPfinal,
            F = s.TamanhosDisponiveisTroca,
            P = s.MotivosDevolucao,
            S = s.CoresDisponiveisTroca,
            V = s.NumeroCor,
            R = null !== v && v > 0 && v < b,
            D = false,
            O = false;

          if (u && null != s && s.actionType) {
            if ('exchange' == (null == s ? undefined : s.actionType)) D = true;
            if ('return' == (null == s ? undefined : s.actionType)) O = true;
          }

          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                  justifyContent: 'space-evenly',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.textRow,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 3,
                    style: [
                      n.semiboldText,
                      {
                        maxWidth: '60%',
                      },
                    ],
                  },
                  x
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.regularText,
                      R && {
                        textDecorationLine: 'line-through',
                      },
                      {
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  b.toFixed(2) + '\u20ac '
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.textRow,
                    {
                      marginTop: module474.ms(2.5),
                    },
                    {
                      justifyContent: 'space-between',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.smallerText,
                      {
                        color: 'gray',
                      },
                    ],
                  },
                  'Ref. ' + h
                ),
                R &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        n.bigBoldText,
                        {
                          color: module474.Color.red,
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    v.toFixed(2) + '\u20ac '
                  )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.textRow,
                    {
                      marginTop: module474.ms(2.5),
                    },
                  ],
                },
                !(
                  null == S ||
                  null ==
                    (t = S.find(function (t) {
                      return t.NumeroCor == V;
                    })) ||
                  !t.Pantone
                ) &&
                  React.default.createElement(ReactNative.View, {
                    style: [
                      n.colorCircle,
                      {
                        backgroundColor:
                          null == S
                            ? undefined
                            : null ==
                              (l = S.find(function (t) {
                                return t.NumeroCor == V;
                              }))
                            ? undefined
                            : l.Pantone,
                      },
                    ],
                  }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.semiboldText,
                  },
                  T
                )
              )
            ),
            u &&
              !p &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.exchangeButtonsContainer,
                },
                !!F &&
                  !!F.length &&
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return c('exchange', s);
                      },
                      style: [
                        n.exchangeButton,
                        D && {
                          backgroundColor: 'black',
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        ellipsizeMode: 'tail',
                        numberOfLines: 1,
                        style: [
                          n.buttonText,
                          {
                            color: 'black',
                          },
                          D && {
                            color: 'white',
                          },
                        ],
                      },
                      module458.default.orderDetail.exchange.toUpperCase()
                    )
                  ),
                !!P &&
                  !!P.length &&
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return c('return', s);
                      },
                      style: [
                        n.exchangeButton,
                        O && {
                          backgroundColor: 'black',
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        ellipsizeMode: 'tail',
                        numberOfLines: 1,
                        style: [
                          n.buttonText,
                          {
                            color: 'black',
                          },
                          O && {
                            color: 'white',
                          },
                        ],
                      },
                      module458.default.orderDetail.return.toUpperCase()
                    )
                  )
              ),
            p && s.exchangeProductInfo && this.renderProductExchageInfo(s, null == s ? undefined : s.actionType)
          );
        },
      },
      {
        key: 'renderReservationProductInfo',
        value: function () {
          var t = module1277.CStyles(),
            l = this.props,
            n = l.product,
            o = l.onAddToCart,
            u = n.Designacao,
            c = n.Referencia,
            s = n.PantoneCor,
            p = n.Tamanho,
            x = n.DataReserva,
            h = n.DataDisponivel,
            T = n.PodeEncomendar,
            b = module1278.DateTime.fromISO(x).toFormat('dd-MM-yyyy'),
            F = null;
          if (h) F = module1278.DateTime.fromISO(h).toFormat('dd-MM-yyyy HH:mm');
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '100%',
                  justifyContent: 'space-evenly',
                  height: '100%',
                },
              },
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      t.textRow,
                      {
                        justifyContent: 'space-between',
                        marginTop: module474.ms(2.5),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.bigBoldText,
                        {
                          fontSize: module474.FontSize.xl,
                        },
                      ],
                    },
                    u
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        t.smallerText,
                        {
                          fontFamily: module474.FontFamily.regular,
                          color: 'grey',
                        },
                      ],
                    },
                    b
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module474.ms(7.5),
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [t.textRow],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          t.smallerText,
                          {
                            color: 'gray',
                          },
                        ],
                      },
                      'Ref. ' + c
                    )
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module474.ms(7.5),
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [t.textRow],
                    },
                    React.default.createElement(ReactNative.View, {
                      style: [
                        t.colorCircle,
                        {
                          backgroundColor: s,
                        },
                      ],
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          t.smallerText,
                          {
                            fontFamily: module474.FontFamily.regular,
                          },
                        ],
                      },
                      p
                    )
                  )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    marginTop: module474.ms(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flex: 1,
                      justifyContent: 'center',
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      numberOfLines: 2,
                      ellipsizeMode: 'tail',
                      style: [
                        t.smallerText,
                        {
                          fontFamily: module474.FontFamily.bold,
                        },
                      ],
                    },
                    T ? module458.default.generic.itemAvailable.toUpperCase() : ''
                  ),
                  T &&
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          t.smallerText,
                          {
                            marginTop: module474.ms(2.5),
                            color: 'grey',
                          },
                        ],
                      },
                      F
                    )
                ),
                T &&
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return o && o(n);
                      },
                      style: [
                        t.button,
                        {
                          backgroundColor: 'white',
                          borderWidth: module474.ms(1),
                          width: module474.ms(90),
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        ellipsizeMode: 'tail',
                        numberOfLines: 1,
                        style: [
                          t.buttonText,
                          {
                            color: 'black',
                          },
                        ],
                      },
                      module458.default.generic.add.toUpperCase()
                    )
                  )
              )
            )
          );
        },
      },
      {
        key: 'renderProductInfo',
        value: function () {
          var t = this.props,
            l = t.isCheckoutCard,
            n = t.isOrderCard,
            o = t.isReservationCard,
            u = t.isOrderDetailCard;
          return l
            ? this.renderCartProductInfo()
            : n
            ? this.renderOrderProductInfo()
            : u
            ? this.renderOrderDetailProductInfo()
            : o
            ? this.renderReservationProductInfo()
            : this.renderWishlistProductInfo();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            l = module1277.CStyles(),
            n = this.props,
            o = n.scrollable,
            u = n.isCheckoutCard,
            c = n.hideRightContent,
            s = n.isOrderCard;
          n.product;
          return React.default.createElement(
            module1276.default,
            {
              ref: function (l) {
                return (t._swipe = l);
              },
              style: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: module474.ms(225),
              },
              rightButtons: !c && this.renderSwipeButtons(),
              rightContainerStyle: {
                flexDirection: 'column',
              },
              rightButtonWidth: c ? 0 : module474.ms(90),
              onSwipeStart: function () {
                if (o) t.onScroll(false);
              },
              onSwipeRelease: function () {
                if (!o) t.onScroll(true);
              },
            },
            React.default.createElement(
              module600.default,
              null,
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    l.container,
                    s && l.topBorder,
                    {
                      flexDirection: 'row',
                      width: '100%',
                    },
                    u
                      ? {
                          borderTopColor: module474.Color.lightGray,
                          borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(1.5),
                        }
                      : {
                          borderBottomColor: module474.Color.lightGray,
                          borderBottomWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(1.5),
                        },
                  ],
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: l.content,
                  },
                  this.renderProductImage()
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: l.textContent,
                  },
                  this.renderProductInfo()
                )
              )
            )
          );
        },
      },
    ]);
    return V;
  })(React.Component),
  V = module400.connect(function (t) {
    return {
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(S);

exports.default = V;
