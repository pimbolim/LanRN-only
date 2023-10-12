var regeneratorRuntime = require('regenerator-runtime'),
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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1509 = require('./1509'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1262 = require('./1262');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
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

var w = function (t) {
    return 'ProductItem_' + t.IdCarrinho;
  },
  I = (function (t) {
    module35.default(O, t);

    var module400 = O,
      b = S(),
      I = function () {
        var t,
          n = module34.default(module400);

        if (b) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);

      (n = I.call(this, t)).focusListener = function () {};

      n.state = {
        loaded: false,
        cart: [],
        shippingPrice: null,
        totalPrice: null,
        flatListScrollable: true,
        infoTrocas: null,
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.renderEmptyContent = n.renderEmptyContent.bind(module39.default(n));
      n.renderIsItAGift = n.renderIsItAGift.bind(module39.default(n));
      n.renderProductItem = n.renderProductItem.bind(module39.default(n));
      n.productGiftPressHandler = n.productGiftPressHandler.bind(module39.default(n));
      n.clearAllGiftChecks = n.clearAllGiftChecks.bind(module39.default(n));
      n.addToWishList = n.addToWishList.bind(module39.default(n));
      n.navigateToProduct = n.navigateToProduct.bind(module39.default(n));
      return n;
    }

    module25.default(O, [
      {
        key: 'params',
        get: function () {
          try {
            return this.props.route.params || {};
          } catch (t) {
            return {};
          }
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'giftReceipt',
        get: function () {
          return this.giftOptions.giftReceipt || false;
        },
      },
      {
        key: 'giftEnvelopeType',
        get: function () {
          return this.giftOptions.giftEnvelopeType || '';
        },
      },
      {
        key: 'messageValue',
        get: function () {
          return this.giftOptions.messageValue || '';
        },
      },
      {
        key: 'giftOptions',
        get: function () {
          return this.props.giftOptions.value;
        },
      },
      {
        key: 'clearAllGiftChecks',
        value: function () {
          var t = this.state.cart,
            n = JSON.parse(JSON.stringify(t));
          n.forEach(function (t) {
            if (t.Oferta) t.Oferta = false;
          });
          this.setState({
            cart: n,
          });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            o = this;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (null == (t = this.props.user) || !t.value) {
                      s.next = 4;
                      break;
                    }

                    s.next = 4;
                    return regeneratorRuntime.default.awrap(this.getData());

                  case 4:
                    this.focusListener = this.props.navigation.addListener('focus', function () {
                      return regeneratorRuntime.default.async(
                        function (s) {
                          for (;;)
                            switch ((s.prev = s.next)) {
                              case 0:
                                if (null == t || !t.value) {
                                  s.next = 3;
                                  break;
                                }

                                s.next = 3;
                                return regeneratorRuntime.default.awrap(o.getData());

                              case 3:
                              case 'end':
                                return s.stop();
                            }
                        },
                        null,
                        null,
                        null,
                        Promise
                      );
                    });

                  case 5:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t;
          if (!(null == (t = this.focusListener))) t.call(this);
        },
      },
      {
        key: 'getData',
        value: function () {
          var t, o, s, l, u, c, f, p, h, y;
          return regeneratorRuntime.default.async(
            function (C) {
              for (;;)
                switch ((C.prev = C.next)) {
                  case 0:
                    t = this.props.dispatch;
                    C.prev = 1;
                    t(module1224.setLoader(true));
                    C.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.cart(null == (o = this.user) ? undefined : o.IdCliente),
                        axiosConfig: {
                          callback: this.getData,
                        },
                      })
                    );

                  case 5:
                    if ((s = C.sent).ok) {
                      if ((t(module1224.setLoader(false)), (l = s.data), (u = l.Produtos), (c = l.PortesEnvio), (f = l.Total), (p = l.InfoTrocas), u.length)) {
                        if (((h = this.state.cart), u.length !== h.length)) {
                          for (y = 0; y < u.length; y++) {
                            u[y].PrecoPromocao = u[y].PVPP;
                            delete u[y].PVPP;
                          }

                          this.setState({
                            cart: u,
                            loaded: true,
                            totalPrice: f,
                            shippingPrice: c,
                            infoTrocas: p,
                          });
                          t(module1224.setCartNumber(u.length));
                        }
                      } else {
                        this.setState({
                          cart: [],
                          loaded: false,
                          totalPrice: 0,
                          shippingPrice: 0,
                        });
                        t(module1224.setCartNumber(0));
                      }
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }
                    C.next = 13;
                    break;

                  case 9:
                    C.prev = 9;
                    C.t0 = C.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return C.stop();
                }
            },
            null,
            this,
            [[1, 9]],
            Promise
          );
        },
      },
      {
        key: 'putProductAsPresent',
        value: function () {
          var t, module24, module25, l, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state.cart;
                    module25 = {
                      Produtos: module24,
                      MensagemOferta: this.messageValue,
                      TipoEnvelope: this.giftEnvelopeType,
                    };
                    c.prev = 3;
                    t(module1224.setLoader(true));
                    c.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.cart(null == (l = this.user) ? undefined : l.IdCliente),
                        data: module25,
                        axiosConfig: {
                          callback: this.putProductAsPresent,
                        },
                      })
                    );

                  case 7:
                    if ((u = c.sent).ok)
                      this.props.navigation.navigate('Checkout', {
                        cart: module24,
                      });
                    else {
                      t(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }
                    c.next = 15;
                    break;

                  case 11:
                    c.prev = 11;
                    c.t0 = c.catch(3);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[3, 11]],
            Promise
          );
        },
      },
      {
        key: 'deleteProductFromCart',
        value: function (t) {
          var module24, module25, l;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    module24 = this.props.dispatch;
                    u.prev = 1;
                    module25 = {};
                    module24(module1224.setLoader(true));
                    u.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.cart(t + '/' + this.user.IdCliente),
                        data: module25,
                        axiosConfig: {
                          callback: this.deleteProductFromCart,
                        },
                      })
                    );

                  case 6:
                    if ((l = u.sent).ok) {
                      module24(module1224.setLoader(false));
                      this.getData();
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: module458.default.generic.removedFromCart,
                      });
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== l.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: l.data.message,
                        });
                    }

                    u.next = 14;
                    break;

                  case 10:
                    u.prev = 10;
                    u.t0 = u.catch(1);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 14:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            this,
            [[1, 10]],
            Promise
          );
        },
      },
      {
        key: 'addToWishList',
        value: function (t) {
          var module24, module25, module39, module35, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    module24 = this.props;
                    module25 = module24.dispatch;
                    module39 = module24.user;
                    ({});
                    f.prev = 2;
                    module35 = {};
                    module25(module1224.setLoader(true));
                    f.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.wishlist(module39.value.IdCliente) + '/' + t.IdProduto + '/' + t.NumeroCor + '/' + t.Tamanho,
                        data: module35,
                        axiosConfig: {
                          callback: this.addToWishList,
                        },
                      })
                    );

                  case 7:
                    if ((c = f.sent).ok && c.data.success) {
                      module25(module1224.setLoader(false));
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: c.data.message,
                      });
                    } else {
                      module25(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: c.data.message,
                        });
                    }

                    f.next = 15;
                    break;

                  case 11:
                    f.prev = 11;
                    f.t0 = f.catch(2);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[2, 11]],
            Promise
          );
        },
      },
      {
        key: 'renderCounterArea',
        value: function () {
          var t = module1509.CStyles(),
            n = this.state.cart;
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.productsCounterText,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.productsCounter,
              },
              module458.default.formatString(
                module458.default.generic.cartProducts,
                n.length,
                n.length > 1 ? module458.default.generic.multiProductLabel : module458.default.generic.singleProductLabel
              )
            )
          );
        },
      },
      {
        key: 'renderIsItAGift',
        value: function () {
          var t = module1509.CStyles(),
            n = this.state.infoTrocas;
          return n
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.isItAGiftContainer,
                    {
                      justifyContent: 'center',
                      backgroundColor: '#F5F5F6',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.isItAGiftText,
                  },
                  n.toUpperCase()
                )
              )
            : null;
        },
      },
      {
        key: 'confirmAction',
        value: function (t) {
          var n = this.state.cart,
            o = JSON.parse(JSON.stringify(n)),
            s = o.find(function (n) {
              return n.IdCarrinho === t;
            });

          if (s) {
            s.Oferta = !s.Oferta;
            this.setState({
              cart: o,
            });
          }
        },
      },
      {
        key: 'productGiftPressHandler',
        value: function (t) {
          var n = this,
            o = this.state.cart,
            s = this.props,
            l = s.navigation,
            u = s.dispatch,
            c = 0;
          JSON.parse(JSON.stringify(o)).forEach(function (t) {
            if (t.Oferta) c++;
          });
          if (0 === c)
            l.navigate('OfferEnvelope', {
              confirmAction: function () {
                return n.confirmAction(t.IdCarrinho);
              },
              clearGifts: function () {
                return n.clearAllGiftChecks();
              },
              products: o,
            });
          else if (1 === c && t.Oferta) {
            u(
              module1224.setGiftOptions({
                giftReceipt: false,
                giftEnvelopeType: '',
                messageValue: '',
              })
            );
            this.confirmAction(t.IdCarrinho);
          } else this.confirmAction(t.IdCarrinho);
        },
      },
      {
        key: 'navigateToProduct',
        value: function (t) {
          this.props.navigation.navigate('ProductDetail', {
            productId: t.IdProduto,
            productLink: t.Urldetalhe,
            productColor: t.NumeroCor,
          });
        },
      },
      {
        key: 'renderProductItem',
        value: function (t) {
          var o = this,
            s = t.item,
            l = this.state.flatListScrollable;
          return React.default.createElement(module472.WishlistCard, {
            isCheckoutCard: true,
            isCart: true,
            wishlistAction: function () {
              return o.addToWishList(s);
            },
            isSelected: s.Oferta,
            selectionAction: function () {
              return o.productGiftPressHandler(s);
            },
            scrollable: l,
            onScroll: function (t) {
              return o.setState({
                flatListScrollable: t,
              });
            },
            product: s,
            onDelete: function () {
              return regeneratorRuntime.default.async(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        t.next = 2;
                        return regeneratorRuntime.default.awrap(o.deleteProductFromCart(s.IdCarrinho));

                      case 2:
                        return t.abrupt('return', t.sent);

                      case 3:
                      case 'end':
                        return t.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            },
            onSelect: function () {
              return o.navigateToProduct(s);
            },
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = this,
            n = module1509.CStyles(),
            o = this.state.cart;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.root,
            },
            this.renderCounterArea(),
            this.renderIsItAGift(),
            React.default.createElement(ReactNative.FlatList, {
              scrollEnabled: this.state.flatListScrollable,
              showsVerticalScrollIndicator: false,
              key: 'cartFlatlist',
              style: n.contentStyle,
              contentContainerStyle: {
                paddingBottom: 20,
              },
              keyExtractor: w,
              data: o,
              renderItem: function (n) {
                return t.renderProductItem(n);
              },
            })
          );
        },
      },
      {
        key: 'renderEmptyContent',
        value: function () {
          var t = this,
            n = module1509.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.emptyContentContainer,
            },
            React.default.createElement(module472.Icon, {
              name: 'Bag-Fill',
              size: module474.ms(44),
              style: {
                marginTop: -module474.ms(150),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.mainText,
              },
              module458.default.empty.noItemsInCart.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.subText,
              },
              module458.default.empty.chooseYourFavoriteProducts
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.props.navigation.navigate('Home');
                },
                style: n.emptyContentButton,
              },
              React.default.createElement(module472.Icon, {
                name: 'Search-Outline',
                size: module474.ms(20),
                style: {
                  marginRight: module474.ms(10),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.buyText,
                },
                module458.default.cart.buy.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderSummaryActionArea',
        value: function () {
          var t = this,
            n = module1509.CStyles(),
            o = this.props.navigation,
            s = this.state,
            l = s.loaded,
            u = s.cart,
            c = s.totalPrice,
            f = s.shippingPrice;

          if (l) {
            var y = u.findIndex(function (t) {
                return true === t.Oferta;
              }),
              P = module458.default.cart.freeShipping;
            if (f) P = module1262.priceFormat(f);
            return React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.summarySectionContainer,
                  -1 === y && [
                    n.topBorder,
                    {
                      paddingVertical: module474.ms(10),
                    },
                  ],
                ],
              },
              y > -1 &&
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: [
                      n.textRow,
                      n.topBorder,
                      n.bottomBorder,
                      {
                        height: module474.ms(40),
                      },
                    ],
                    onPress: function () {
                      return o.navigate('OfferEnvelope', {
                        clearGifts: function () {
                          return t.clearAllGiftChecks();
                        },
                      });
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: n.summarySectionTextSmall,
                    },
                    module458.default.generic.orderWithAGift
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: n.summarySectionTextSmall,
                    },
                    module458.default.generic.edit
                  )
                ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.textRow,
                    y > -1 && {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.summarySectionTextSmall,
                  },
                  module458.default.generic.delivery
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.summarySectionTextSmall,
                  },
                  P
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    n.textRow,
                    {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.summarySectionTextBigger,
                  },
                  module458.default.generic.total.toUpperCase()
                ),
                c > 0 &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: n.summarySectionTextBigger,
                    },
                    c.toFixed(2) + ' \u20ac'
                  )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.textRow,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      return t.putProductAsPresent();
                    },
                    style: [
                      n.button,
                      {
                        marginTop: module474.ms(10),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: n.buttonText,
                    },
                    module458.default.generic.buy.toUpperCase()
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1509.CStyles(),
            n = this.state.loaded;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.tabBar.cart,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['right', 'left'],
                style: t.root,
              },
              n ? this.renderContent() : this.renderEmptyContent(),
              n && this.renderSummaryActionArea()
            )
          );
        },
      },
    ]);
    return O;
  })(React.Component),
  O = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      giftOptions: t.giftOptions,
      user: t.user,
    };
  })(I);

exports.default = O;
