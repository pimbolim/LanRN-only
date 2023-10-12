var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = x(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1585 = require('./1585'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module431 = require('./431');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (x = function (t) {
    return t ? n : o;
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

var E = function (t) {
    return 'productItem__' + t.idGiftListaProduto + '_numeroCor_' + t.NumeroCor;
  },
  T = function (t) {
    return 'size_' + t.Tamanho;
  },
  z = function (t) {
    return "colorItem_' + " + t.NumeroCor;
  },
  L = (function (t) {
    module35.default(D, t);

    var module400 = D,
      x = P(),
      L = function () {
        var t,
          o = module34.default(module400);

        if (x) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var o;
      module24.default(this, D);
      (o = L.call(this, t)).productImgsRef = React.default.createRef();

      o.focusListener = function () {};

      o.state = {
        loaded: false,
        scrollable: false,
        wishlist: [],
        showSizeBottomSheet: false,
        flatListScrollable: true,
        tempSelectedSize: '',
        selectedItem: null,
        tempSelectedColor: '',
      };
      o.renderContent = o.renderContent.bind(module39.default(o));
      o.renderEmptyContent = o.renderEmptyContent.bind(module39.default(o));
      o.renderCounterArea = o.renderCounterArea.bind(module39.default(o));
      o.renderProductItem = o.renderProductItem.bind(module39.default(o));
      o.renderColorItem = o.renderColorItem.bind(module39.default(o));
      o.renderSizeItem = o.renderSizeItem.bind(module39.default(o));
      o.productItemDelete = o.productItemDelete.bind(module39.default(o));
      o.navigateToProduct = o.navigateToProduct.bind(module39.default(o));
      return o;
    }

    module25.default(D, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            n = this;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    if (null == (t = this.props.user) || !t.value) {
                      l.next = 4;
                      break;
                    }

                    l.next = 4;
                    return regeneratorRuntime.default.awrap(this.getData());

                  case 4:
                    this.focusListener = this.props.navigation.addListener('focus', function () {
                      return regeneratorRuntime.default.async(
                        function (l) {
                          for (;;)
                            switch ((l.prev = l.next)) {
                              case 0:
                                if (null == t || !t.value) {
                                  l.next = 3;
                                  break;
                                }

                                l.next = 3;
                                return regeneratorRuntime.default.awrap(n.getData());

                              case 3:
                              case 'end':
                                return l.stop();
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
                    return l.stop();
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
          var t, module24, module25, s, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props;
                    module24 = t.dispatch;
                    module25 = t.user;
                    c.prev = 1;
                    module24(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.wishlist(module25.value.IdCliente),
                        axiosConfig: {
                          callback: this.getData,
                        },
                      })
                    );

                  case 5:
                    if ((s = c.sent).ok) {
                      module24(module1224.setLoader(false));
                      u = s.data.Artigos;
                      this.setState({
                        wishlist: u,
                        loaded: true,
                      });
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    c.next = 13;
                    break;

                  case 9:
                    c.prev = 9;
                    c.t0 = c.catch(1);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return c.stop();
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
        key: 'addToCart',
        value: function () {
          var t, module24, module25, module39, module35, module37, module34, React, ReactNative, module400, module1585, b, I;
          return regeneratorRuntime.default.async(
            function (x) {
              for (;;)
                switch ((x.prev = x.next)) {
                  case 0:
                    t = this.props;
                    module24 = t.dispatch;
                    module25 = t.cartNumber;
                    module39 = this.state;
                    module35 = module39.selectedItem;
                    module37 = module39.tempSelectedColor;
                    module34 = module39.tempSelectedSize;
                    React = module35.idProduto;
                    ReactNative = module35.PodeReservar;
                    module400 = {};
                    module1585 = module1226.Endpoints.addItemToCart(this.user.IdCliente, React, module37, module34);
                    if (ReactNative) module1585 = module1226.Endpoints.reservations(this.user.IdCliente + '/' + React + '/' + module37 + '/' + module34);
                    x.prev = 6;
                    x.next = 9;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1585,
                        data: module400,
                        axiosConfig: {
                          callback: this.addToCart,
                        },
                      })
                    );

                  case 9:
                    if ((b = x.sent).ok && b.data.success) {
                      module24(module1224.setLoader(false));
                      this.setState({
                        tempSelectedColor: '',
                        tempSelectedSize: '',
                        showSizeBottomSheet: false,
                      });

                      if (219 !== b.status && 319 !== b.status) {
                        if (!ReactNative) module24(module1224.setCartNumber(module25.value + 1));
                        module472.DropDown.alert({
                          type: 'success',
                          title: module458.default.generic.success,
                          message: ReactNative ? module458.default.generic.itemAddedToReserve : module458.default.generic.itemAddedToCart,
                        });
                      }
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== b.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: (null == b ? undefined : null == (I = b.data) ? undefined : I.message) || module458.default.generic.errorMessage,
                        });
                    }

                    x.next = 17;
                    break;

                  case 13:
                    x.prev = 13;
                    x.t0 = x.catch(6);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 17:
                  case 'end':
                    return x.stop();
                }
            },
            null,
            this,
            [[6, 13]],
            Promise
          );
        },
      },
      {
        key: 'renderCounterArea',
        value: function () {
          var t = module1585.CStyles(),
            o = this.state.wishlist;
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
                module458.default.generic.wishlistProducts,
                o.length,
                o.length > 1 ? module458.default.generic.multiProductLabel : module458.default.generic.singleProductLabel
              )
            )
          );
        },
      },
      {
        key: 'navigateToProduct',
        value: function (t) {
          this.props.navigation.navigate('ProductDetail', {
            productId: t.idProduto,
            productLink: t.Urldetalhe,
            productColor: t.NumeroCor,
          });
        },
      },
      {
        key: 'productItemDelete',
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
                    f.prev = 1;
                    module35 = {};
                    module25(module1224.setLoader(true));
                    f.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.wishlist(module39.value.IdCliente) + '/' + t.idGiftListaProduto,
                        data: module35,
                        axiosConfig: {
                          callback: this.productItemDelete,
                        },
                      })
                    );

                  case 6:
                    if (!(c = f.sent).ok) {
                      f.next = 14;
                      break;
                    }

                    module25(module1224.setLoader(false));
                    f.next = 11;
                    return regeneratorRuntime.default.awrap(this.getData());

                  case 11:
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: module458.default.generic.removedFromWishlist,
                    });
                    f.next = 16;
                    break;

                  case 14:
                    module25(module1224.setLoader(false));
                    if (401 !== c.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: c.data.message,
                      });

                  case 16:
                    f.next = 22;
                    break;

                  case 18:
                    f.prev = 18;
                    f.t0 = f.catch(1);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 22:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[1, 18]],
            Promise
          );
        },
      },
      {
        key: 'renderProductItem',
        value: function (t) {
          var o = this,
            n = t.item;
          return React.default.createElement(module472.WishlistCard, {
            onAddToCart: function () {
              if (null != n && n.NumeroCor && null != n && n.Tamanho)
                o.setState(
                  {
                    selectedItem: n,
                    tempSelectedColor: null == n ? undefined : n.NumeroCor,
                    tempSelectedSize: null == n ? undefined : n.Tamanho,
                  },
                  function () {
                    return o.addToCart();
                  }
                );
              else
                o.setState({
                  selectedItem: n,
                  showSizeBottomSheet: true,
                  tempSelectedColor: null == n ? undefined : n.NumeroCor,
                  tempSelectedSize: null == n ? undefined : n.Tamanho,
                });
            },
            product: n,
            onDelete: function (t) {
              return o.productItemDelete(t);
            },
            scrollable: this.state.flatListScrollable,
            onScroll: function (t) {
              return o.setState({
                flatListScrollable: t,
              });
            },
            onSelect: function () {
              return o.navigateToProduct(n);
            },
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = this.state.wishlist;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            this.renderCounterArea(),
            React.default.createElement(ReactNative.FlatList, {
              key: 'wishListFlatList',
              keyExtractor: E,
              data: t,
              renderItem: this.renderProductItem,
              scrollEnabled: this.state.flatListScrollable,
            })
          );
        },
      },
      {
        key: 'renderEmptyContent',
        value: function () {
          var t = this,
            o = module1585.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: module474.ms(20),
              },
            },
            React.default.createElement(module472.Icon, {
              name: 'Like-Fill',
              size: module474.ms(44),
              style: {
                marginTop: -module474.ms(150),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.mainText,
              },
              module458.default.empty.noFavoriteYet.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.subText,
              },
              module458.default.empty.chooseYourFavoriteProducts
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.props.navigation.navigate('Home');
                },
                style: o.button,
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
                  style: {
                    fontFamily: module474.FontFamily.bold,
                    fontSize: module474.FontSize.m,
                    color: module474.Color.black,
                  },
                },
                module458.default.wishlist.buy.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderSizeItem',
        value: function (t) {
          var o = this,
            n = t.item,
            l = this.state.tempSelectedSize == n.Tamanho,
            s = module1585.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return o.setState({
                  tempSelectedSize: n.Tamanho,
                });
              },
              style: s.productSizeItemContainer,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  s.productSizeItemText,
                  l && {
                    color: 'black',
                  },
                ],
              },
              n.Tamanho
            )
          );
        },
      },
      {
        key: 'renderColorItem',
        value: function (t) {
          var o = this,
            n = t.item,
            l = this.state.tempSelectedColor === n.NumeroCor,
            s = module1585.CStyles();
          return l
            ? React.default.createElement(
                ReactNative.View,
                {
                  key: 'item_' + n.NumeroCor,
                  style: s.selectedColorCircle,
                },
                React.default.createElement(ReactNative.View, {
                  style: [
                    s.colorCircle,
                    {
                      backgroundColor: n.Pantone ? n.Pantone : 'black',
                    },
                  ],
                })
              )
            : React.default.createElement(ReactNative.TouchableOpacity, {
                key: 'color' + n.NumeroCor,
                onPress: function () {
                  o.setState({
                    tempSelectedColor: n.NumeroCor,
                  });
                },
                style: [
                  s.colorCircle,
                  {
                    backgroundColor: n.Pantone ? n.Pantone : 'black',
                    borderColor: module474.Color.grayBorder,
                    borderWidth: ReactNative.StyleSheet.hairlineWidth,
                  },
                ],
              });
        },
      },
      {
        key: 'renderSizesBottomSheet',
        value: function (t) {
          var o = this,
            n = this.state,
            l = n.showSizeBottomSheet,
            s = n.wishlist,
            u = n.tempSelectedSize,
            c = n.selectedItem,
            f = n.tempSelectedColor,
            y = module1585.CStyles(),
            w =
              null == s
                ? undefined
                : s.find(function (t) {
                    return t === c;
                  }),
            k = !u || !f;
          return React.default.createElement(
            module472.BottomSheet,
            {
              visible: l,
              snapPoints: [-1, module474.ms(300)],
              onClose: function () {
                return o.setState({
                  showSizeBottomSheet: false,
                  tempSelectedSize: '',
                  tempSelectedColor: '',
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  y.productSizesBSContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    alignItems: 'center',
                    paddingTop: module474.ms(30),
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      y.sheetText,
                      {
                        marginBottom: module474.ms(10),
                      },
                    ],
                  },
                  module458.default.wishlist.color.toUpperCase()
                ),
                React.default.createElement(ReactNative.FlatList, {
                  key: 'productColorsFlatList',
                  keyExtractor: z,
                  horizontal: true,
                  style: {
                    flexGrow: 0,
                    paddingBottom: module474.ms(20),
                  },
                  contentContainerStyle: {
                    alignItems: 'center',
                  },
                  showsHorizontalScrollIndicator: false,
                  data: (null == w ? undefined : w.Cores) || [],
                  renderItem: this.renderColorItem,
                  bounces: false,
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [y.sheetText],
                  },
                  module458.default.wishlist.size.toUpperCase()
                ),
                React.default.createElement(ReactNative.FlatList, {
                  key: 'productSizesFlatList',
                  keyExtractor: T,
                  horizontal: true,
                  style: {
                    flexGrow: 0,
                  },
                  showsHorizontalScrollIndicator: false,
                  data: (null == w ? undefined : w.Tamanhos[0].tamanhos) || [],
                  renderItem: this.renderSizeItem,
                  bounces: false,
                })
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  disabled: k,
                  onPress: function () {
                    return o.addToCart();
                  },
                  style: [
                    y.absoluteButton,
                    {
                      marginTop: module474.ms(15),
                      marginBottom: t.bottom,
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      color: 'white',
                      fontSize: module474.FontSize.s,
                      fontFamily: module474.FontFamily.regular,
                    },
                  },
                  module458.default.generic.confirm.toUpperCase()
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
            o = module1585.CStyles(),
            n = this.state,
            l = n.loaded,
            s = n.wishlist;
          return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
            return React.default.createElement(
              React.default.Fragment,
              null,
              React.default.createElement(module472.Header, {
                title: module458.default.tabBar.favorites,
              }),
              React.default.createElement(
                module472.Wrapper,
                {
                  edges: ['right', 'left'],
                  style: o.root,
                },
                l && !!s.length && t.renderContent(),
                l && !s.length && t.renderEmptyContent()
              ),
              t.renderSizesBottomSheet(n)
            );
          });
        },
      },
    ]);
    return D;
  })(React.Component),
  D = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      cartNumber: t.cartNumber,
    };
  })(L);

exports.default = D;
