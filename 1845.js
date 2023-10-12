var regeneratorRuntime = require('regenerator-runtime'),
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
    var s = C(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1846 = require('./1846'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module474 = require('./474'),
  module431 = require('./431');

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (C = function (t) {
    return t ? s : n;
  })(t);
}

function F(t, n) {
  var s = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (s) return (s = s.call(t)).next.bind(s);

  if (Array.isArray(t) || (s = L(t)) || (n && t && 'number' == typeof t.length)) {
    if (s) t = s;
    var o = 0;
    return function () {
      return o >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[o++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function L(t, n) {
  if (t) {
    if ('string' == typeof t) return E(t, n);
    var s = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === s && t.constructor) s = t.constructor.name;
    return 'Map' === s || 'Set' === s ? Array.from(t) : 'Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? E(t, n) : undefined;
  }
}

function E(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var s = 0, o = new Array(n); s < n; s++) o[s] = t[s];

  return o;
}

function I(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      I(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      I(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function z() {
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

var T = function (t, n) {
    return 'product_' + t.idProduto + '_' + t.Designacao + '_' + n;
  },
  j = function (t) {
    return "sizeItem_' + " + t;
  },
  A = (function (t) {
    module35.default(L, t);

    var module47 = L,
      module400 = z(),
      C = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function L(t) {
      var n;
      module24.default(this, L);
      (n = C.call(this, t)).state = {
        loaded: false,
        showFilters: false,
        filters: [],
        filterQueryString: '',
        productsList: n.params.resultsList ? n.params.resultsList : [],
        isDoubleView: true,
        availableHeight: 0,
        currentPage: 1,
        renderSizesBottomSheet: false,
        wishlist: [],
        liked: false,
      };
      n.renderProductsList = n.renderProductsList.bind(module39.default(n));
      n.renderProductsFilterBar = n.renderProductsFilterBar.bind(module39.default(n));
      n.selectedFilterOptionsHandler = n.selectedFilterOptionsHandler.bind(module39.default(n));
      n.renderProductItem = n.renderProductItem.bind(module39.default(n));
      n.renderFilters = n.renderFilters.bind(module39.default(n));
      n.filterCloseAction = n.filterCloseAction.bind(module39.default(n));
      n.clearFilters = n.clearFilters.bind(module39.default(n));
      n.applyFilters = n.applyFilters.bind(module39.default(n));
      n.productItemNavigation = n.productItemNavigation.bind(module39.default(n));
      n.addToCart = n.addToCart.bind(module39.default(n));
      n.renderSizeItem = n.renderSizeItem.bind(module39.default(n));
      return n;
    }

    module25.default(L, [
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
        key: 'catalogueTitle',
        get: function () {
          return this.params.catalogueTitle || '';
        },
      },
      {
        key: 'catalogueLink',
        get: function () {
          return this.params.catalogueLink || '';
        },
      },
      {
        key: 'fromHome',
        get: function () {
          return this.params.fromHome || false;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            s = this.props.navigation;
          console.log('\ud83d\ude80 ~ file: index.tsx ~ line 86 ~ Products ~ componentDidMount ~ this.props', this.props);
          this._onFocus = s.addListener('focus', function () {
            return regeneratorRuntime.default.async(
              function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      if (t.params.resultsList) {
                        s.next = 5;
                        break;
                      }

                      s.next = 3;
                      return regeneratorRuntime.default.awrap(t.getProductsData(true));

                    case 3:
                      s.next = 6;
                      break;

                    case 5:
                      t.setState({
                        loaded: true,
                      });

                    case 6:
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
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
      {
        key: 'getProductsData',
        value: function (t) {
          var s, o, l, u, c, f, p, h, y, v, w, module474, D, C, F, L, E;
          return regeneratorRuntime.default.async(
            function (I) {
              for (;;)
                switch ((I.prev = I.next)) {
                  case 0:
                    if (
                      ((s = this.props.dispatch),
                      (o = this.state),
                      (l = o.currentPage),
                      (u = o.filterQueryString),
                      (c = this.state.productsList),
                      (f = this.params),
                      (p = f.searchValue),
                      (h = f.resultsList),
                      c.length && 1 === l && (c = []),
                      (y = ''),
                      (y = this.fromHome ? this.catalogueLink : '/' + this.catalogueLink),
                      (v = null),
                      (w = ''),
                      (w = module1226.Endpoints.products(y).includes('?pc=') ? '&' : '?'),
                      (I.prev = 10),
                      t && s(module1224.setLoader(true)),
                      !u)
                    ) {
                      I.next = 18;
                      break;
                    }

                    I.next = 15;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.products(y) + w + u,
                        displayLoader: t,
                      })
                    );

                  case 15:
                    v = I.sent;
                    I.next = 28;
                    break;

                  case 18:
                    if (h) {
                      I.next = 25;
                      break;
                    }

                    module474 = '/' === y.charAt(y.length - 1) ? module1226.Endpoints.products(y) + '?pagina=' + l : module1226.Endpoints.products(y) + '&pagina=' + l;
                    I.next = 22;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module474,
                        displayLoader: t,
                      })
                    );

                  case 22:
                    v = I.sent;
                    I.next = 28;
                    break;

                  case 25:
                    I.next = 27;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.searchText(p, (null == (D = this.user) ? undefined : D.IdCliente) || '') + '?pagina=' + l,
                        displayLoader: t,
                      })
                    );

                  case 27:
                    v = I.sent;

                  case 28:
                    console.log('response', v);

                    if (v.ok) {
                      if (t) s(module1224.setLoader(false));
                      C = v.data;
                      F = C.filtros;
                      L = C.listaprodutos;
                      console.log('\ud83d\ude80 ~ file: index.tsx ~ line 158 ~ Products ~ getProductsData ~ listaprodutos', L);
                      console.log('\ud83d\ude80 ~ file: index.tsx ~ line 158 ~ Products ~ getProductsData ~ filterQueryString', u);
                      if (u && L)
                        this.setState({
                          productsList: L,
                          loaded: true,
                        });
                      else {
                        E = c.concat(L);
                        this.setState({
                          filters: F,
                          productsList: 0 === c.length ? L : E,
                          loaded: true,
                        });
                      }
                    } else {
                      if (t) s(module1224.setLoader(false));
                      if (401 !== v.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    I.next = 36;
                    break;

                  case 32:
                    I.prev = 32;
                    I.t0 = I.catch(10);
                    s(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 36:
                  case 'end':
                    return I.stop();
                }
            },
            null,
            this,
            [[10, 32]],
            Promise
          );
        },
      },
      {
        key: 'searchText',
        value: function () {
          var t, module47, o, l;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module47 = this.params.searchValue;
                    u.prev = 2;
                    u.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.searchText(module47, (null == (o = this.user) ? undefined : o.IdCliente) || ''),
                        displayLoader: false,
                      })
                    );

                  case 5:
                    if ((l = u.sent).ok) {
                      this.setState({
                        resultsList: l.data.listaprodutos,
                        totalResultsValue: l.data.totalartigos,
                      });
                      t(module1224.setLoader(false));
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== l.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    u.next = 13;
                    break;

                  case 9:
                    u.prev = 9;
                    u.t0 = u.catch(2);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            this,
            [[2, 9]],
            Promise
          );
        },
      },
      {
        key: 'addToCart',
        value: function () {
          var t, module47, module24, module25, module39, module35, module37, p;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.cartNumber;
                    module25 = this.state;
                    module39 = module25.tempSelectedSize;
                    module35 = module25.productDetails;
                    module37 = {};
                    h.prev = 3;
                    module47(module1224.setLoader(true));
                    h.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.addItemToCart(this.user.IdCliente, module35.idProduto, module35.NumeroCor, module39),
                        data: module37,
                        axiosConfig: {
                          callback: this.addToCart,
                        },
                      })
                    );

                  case 7:
                    if ((p = h.sent).ok && p.data.success) {
                      module47(module1224.setLoader(false));

                      if (219 !== p.status && 319 !== p.status) {
                        module47(module1224.setCartNumber(module24.value + 1));
                        module472.DropDown.alert({
                          type: 'success',
                          title: module458.default.generic.success,
                          message: module458.default.generic.itemAddedToCart,
                        });
                      }
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== p.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: p.data.message,
                        });
                    }

                    h.next = 15;
                    break;

                  case 11:
                    h.prev = 11;
                    h.t0 = h.catch(3);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return h.stop();
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
        key: 'renderProductsFilterBar',
        value: function () {
          var t = this,
            n = module1846.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.filterBarContainer,
            },
            this.params.resultsList
              ? React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.m,
                      color: module474.Color.black,
                    },
                  },
                  module458.default.stores.totalResults + ': ' + this.params.totalResultsValue
                )
              : React.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      return t.setState({
                        showFilters: true,
                      });
                    },
                    style: {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.m,
                      color: module474.Color.black,
                    },
                  },
                  module458.default.generic.filters
                ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              },
              React.default.createElement(module472.Icon, {
                onPress: function () {
                  return t.setState({
                    isDoubleView: true,
                  });
                },
                name: 'View-2',
                size: module474.ms(18),
              }),
              React.default.createElement(module472.Icon, {
                onPress: function () {
                  return t.setState({
                    isDoubleView: false,
                  });
                },
                name: 'View-1',
                size: module474.ms(18),
                style: {
                  marginLeft: module474.ms(10),
                },
              })
            )
          );
        },
      },
      {
        key: 'productItemNavigation',
        value: function (t, n, s) {
          this.props.navigation.navigate('ProductDetail', {
            productId: t,
            catalogueTitle: this.catalogueTitle,
            productLink: n,
            productColor: s,
          });
        },
      },
      {
        key: 'addProductToWishlist',
        value: function (t) {
          var module47, module24, module25, module39, module35, module37, p;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = module47.user;
                    module39 = t.idProduto;
                    module35 = t.NumeroCor;
                    h.prev = 2;
                    module37 = {};
                    module24(module1224.setLoader(true));
                    h.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.wishlist(module25.value.IdCliente) + '/' + module39 + '/' + module35,
                        data: module37,
                        axiosConfig: {
                          callback: this.addProductToWishlist,
                        },
                      })
                    );

                  case 7:
                    if (!(p = h.sent).ok || !p.data.success) {
                      h.next = 16;
                      break;
                    }

                    module24(module1224.setLoader(false));
                    this.setState({
                      productsList: [],
                    });
                    h.next = 13;
                    return regeneratorRuntime.default.awrap(this.getProductsData(true));

                  case 13:
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: p.data.message,
                    });
                    h.next = 18;
                    break;

                  case 16:
                    module24(module1224.setLoader(false));
                    if (401 !== p.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: p.data.message,
                      });

                  case 18:
                    h.next = 24;
                    break;

                  case 20:
                    h.prev = 20;
                    h.t0 = h.catch(2);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 24:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            [[2, 20]],
            Promise
          );
        },
      },
      {
        key: 'productItemDelete',
        value: function (t) {
          var module47, module24, module25, module39, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = module47.user;
                    f.prev = 1;
                    module39 = {};
                    module24(module1224.setLoader(true));
                    f.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.wishlist(module25.value.IdCliente) + '/' + t.idGiftListaProduto,
                        data: module39,
                        axiosConfig: {
                          callback: this.productItemDelete,
                        },
                      })
                    );

                  case 6:
                    if (!(c = f.sent).ok) {
                      f.next = 15;
                      break;
                    }

                    module24(module1224.setLoader(false));
                    this.setState({
                      productsList: [],
                    });
                    f.next = 12;
                    return regeneratorRuntime.default.awrap(this.getProductsData(true));

                  case 12:
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: module458.default.generic.removedFromWishlist,
                    });
                    f.next = 17;
                    break;

                  case 15:
                    module24(module1224.setLoader(false));
                    if (401 !== c.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: c.data.message,
                      });

                  case 17:
                    f.next = 23;
                    break;

                  case 19:
                    f.prev = 19;
                    f.t0 = f.catch(1);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 23:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[1, 19]],
            Promise
          );
        },
      },
      {
        key: 'renderProductItem',
        value: function (t) {
          var n = this,
            s = t.item,
            o = this.state,
            l = o.isDoubleView,
            u = o.availableHeight,
            c = 0 != s.idGiftListaProduto;
          return React.default.createElement(module472.ProductCard, {
            productNavigationAction: this.productItemNavigation,
            availableHeight: u,
            isDoubleView: l,
            product: s,
            wishListAction: function (t) {
              if (c) n.productItemDelete(t);
              else n.addProductToWishlist(t);
            },
            addToCart: function (t) {
              return n.setState(
                {
                  productDetails: O({}, t),
                },
                function () {
                  return n.setState({
                    renderSizesBottomSheet: true,
                  });
                }
              );
            },
          });
        },
      },
      {
        key: 'renderProductsList',
        value: function () {
          var t = this,
            n = this.state,
            s = n.productsList,
            o = n.isDoubleView,
            l = n.loaded,
            u = n.currentPage;
          return l
            ? React.default.createElement(ReactNative.FlatList, {
                key: 'flatListProducts_' + o,
                keyExtractor: T,
                onLayout: function (n) {
                  var s = n.nativeEvent.layout.height;
                  t.setState({
                    availableHeight: s,
                  });
                },
                showsVerticalScrollIndicator: false,
                contentContainerStyle: {
                  justifyContent: 'space-between',
                },
                numColumns: o ? 2 : 1,
                columnWrapperStyle: o && {
                  justifyContent: 'space-between',
                },
                data: JSON.parse(JSON.stringify(s)),
                renderItem: this.renderProductItem,
                onEndReached: function () {
                  return (
                    s.length > 10 &&
                    t.setState(
                      {
                        currentPage: u + 1,
                      },
                      function () {
                        return t.getProductsData(false);
                      }
                    )
                  );
                },
                removeClippedSubviews: true,
                extraData: this.state,
              })
            : null;
        },
      },
      {
        key: 'renderNoProducts',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                justifyContent: 'center',
                flex: 1,
                marginHorizontal: module474.ms(40),
              },
            },
            React.default.createElement(module472.Icon, {
              name: 'Search-Fill',
              style: {
                alignSelf: 'center',
                marginRight: module474.ms(5),
                marginBottom: module474.ms(20),
              },
              size: module474.ms(80),
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  {
                    fontFamily: module474.FontFamily.regular,
                    color: module474.Color.black,
                    fontSize: module474.FontSize.m,
                    alignSelf: 'center',
                    textAlign: 'center',
                  },
                ],
              },
              module458.default.stores.noProducts
            )
          );
        },
      },
      {
        key: 'filterCloseAction',
        value: function (t) {
          this.setState({
            showFilters: false,
          });
        },
      },
      {
        key: 'clearFilters',
        value: function () {
          var t = this,
            n = O({}, this.state.filters);
          Object.keys(n).forEach(function (t) {
            var s;
            if (!(null == (s = n[t].items)))
              s.forEach(function (t) {
                if (t.selected) t.selected = false;
              });
          });
          this.setState(
            {
              filters: n,
              loaded: false,
              showFilters: false,
              currentPage: 1,
              filterQueryString: '',
              productsList: [],
            },
            function () {
              return t.getProductsData(true);
            }
          );
        },
      },
      {
        key: 'getCorrectFilterName',
        value: function (t) {
          switch (t) {
            case 'Caracter\xedsticas':
              return 'Caract';

            case 'Cor':
              return 'Cores';

            case 'Tamanho':
              return 'Tamanhos';

            case 'Ordenar':
              return 'Ordem';

            default:
              return '';
          }
        },
      },
      {
        key: 'applyFilters',
        value: function () {
          var t = this,
            s = O({}, this.state.filters),
            o = '';
          Object.keys(s).forEach(function (n) {
            var l,
              u =
                null == (l = s[n].items)
                  ? undefined
                  : l.filter(function (t) {
                      return t.selected;
                    });
            if (u && u.length)
              u.forEach(function (l, c) {
                if (o.includes(t.getCorrectFilterName(s[n].descricao))) o += l.valor;
                else o += '' === o ? 'filtro' + t.getCorrectFilterName(s[n].descricao) + '=' + l.valor : '&filtro' + t.getCorrectFilterName(s[n].descricao) + '=' + l.valor;
                if (c < u.length - 1) o += ',';
              });
          });
          this.setState(
            {
              currentPage: 1,
              loaded: false,
              showFilters: false,
              filterQueryString: o,
            },
            function () {
              return regeneratorRuntime.default.async(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        s.next = 2;
                        return regeneratorRuntime.default.awrap(t.getProductsData(true));

                      case 2:
                        return s.abrupt('return', s.sent);

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
            }
          );
        },
      },
      {
        key: 'selectedFilterOptionsHandler',
        value: function (t, n) {
          var s,
            o = O({}, this.state.filters),
            l =
              null ==
              (s = Object.values(o).find(function (t) {
                return n.descricao === t.descricao;
              }).items)
                ? undefined
                : s.find(function (n) {
                    return n.descricao === t.descricao;
                  });

          if ('Ordenar' == n.descricao) {
            for (var u, c = [], f = F(o.ordem.items); !(u = f()).done; ) {
              var p = u.value;
              if (p.valor == t.valor) p.selected = true;
              else p.selected = false;
              c.push(p);
            }

            o.ordem.items = c;
          } else l.selected = !l.selected;

          this.setState({
            filters: o,
          });
        },
      },
      {
        key: 'renderFilters',
        value: function () {
          var t = this.state.filters;
          return React.default.createElement(module472.Filters, {
            selectedFilterOptionsHandler: this.selectedFilterOptionsHandler,
            filters: t,
            showFilters: this.state.showFilters,
            onClose: this.filterCloseAction,
            clearFilters: this.clearFilters,
            applyFilters: this.applyFilters,
          });
        },
      },
      {
        key: 'renderSizeItem',
        value: function (t) {
          var n = this,
            s = t.item,
            o = this.state.tempSelectedSize,
            l = module1846.CStyles(),
            u = o === s;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState({
                  tempSelectedSize: s,
                });
              },
              style: l.productSizeItemContainer,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.productSizeItemText,
                  u && {
                    color: module474.Color.black,
                  },
                ],
              },
              s
            )
          );
        },
      },
      {
        key: 'renderSizesBottomSheet',
        value: function (t) {
          var n = this,
            s = module1846.CStyles(),
            o = this.state,
            l = o.productDetails,
            u = o.renderSizesBottomSheet,
            c = o.tempSelectedSize;

          if (l) {
            var f = l.tamanhosDisponiveis.split(',');
            console.log('\ud83d\ude80 ~ file: index.tsx ~ line 620 ~ Products ~ renderSizesBottomSheet ~ insets.bottom', t.bottom);
            return React.default.createElement(
              module472.BottomSheet,
              {
                visible: u,
                snapPoints: [-1, module474.ms(180)],
                onClose: function () {
                  return n.setState({
                    renderSizesBottomSheet: false,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    s.productSizesBSContainer,
                    {
                      paddingBottom: t.bottom,
                    },
                  ],
                },
                React.default.createElement(ReactNative.FlatList, {
                  key: 'productSizesFlatList',
                  keyExtractor: j,
                  horizontal: true,
                  style: {
                    flexGrow: 0,
                  },
                  showsHorizontalScrollIndicator: false,
                  data: f,
                  renderItem: this.renderSizeItem,
                }),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      if (c)
                        n.setState(
                          {
                            selectedSize: c,
                            renderSizesBottomSheet: false,
                          },
                          function () {
                            return n.addToCart();
                          }
                        );
                      else
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.generic.chooseSize,
                        });
                    },
                    style: [
                      s.absoluteButton,
                      {
                        marginTop: module474.ms(15),
                        marginBottom: t.bottom,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: s.buttonText,
                    },
                    module458.default.generic.addToBasket.toUpperCase()
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'renderContent',
        value: function (t) {
          var n;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                backgroundColor: 'white',
              },
            },
            React.default.createElement(
              React.default.Fragment,
              null,
              this.renderProductsFilterBar(),
              0 === (null == (n = this.params.resultsList) ? undefined : n.length) ? this.renderNoProducts() : this.renderProductsList(),
              this.renderSizesBottomSheet(t)
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1846.CStyles(),
            s = this.props.navigation,
            o = this.state,
            l = o.showFilters;
          o.productsList;
          return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (o) {
            return React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right'],
                style: n.root,
              },
              l
                ? React.default.createElement(
                    React.default.Fragment,
                    null,
                    React.default.createElement(module472.Header, {
                      smallSizeIcon: true,
                      leftAction: function () {
                        return t.filterCloseAction(true);
                      },
                      leftIcon: 'delete-cross-1',
                      title: module458.default.generic.filters,
                    }),
                    t.renderFilters()
                  )
                : React.default.createElement(
                    React.default.Fragment,
                    null,
                    React.default.createElement(module472.Header, {
                      leftAction: function () {
                        return t.fromHome
                          ? s.reset({
                              index: 0,
                              routes: [
                                {
                                  name: 'Home',
                                },
                              ],
                            })
                          : s.goBack();
                      },
                      back: true,
                      title: t.catalogueTitle,
                      rightIcon: 'Search-Outline',
                      rightAction: function () {
                        return s.navigate('Search');
                      },
                    }),
                    t.renderContent(o)
                  )
            );
          });
        },
      },
    ]);
    return L;
  })(React.Component),
  B = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      cartNumber: t.cartNumber,
    };
  })(A);

exports.default = B;
