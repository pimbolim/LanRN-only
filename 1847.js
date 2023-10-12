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
    var o = L(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1848 = require('./1848'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1272 = require('./1272'),
  module474 = require('./474'),
  module431 = require('./431'),
  module1618 = require('./1618'),
  module1606 = require('./1606'),
  module1849 = require('./1849');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

function F(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function z(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      F(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      F(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function B() {
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

ReactNative.Platform.OS;

var V = function (t) {
    return "sizeItem_' + " + t.Tamanho;
  },
  A = function (t) {
    return "colorItem_' + " + t.NumeroCor;
  },
  O = function (t) {
    return "Color' + " + t.NumeroCor;
  },
  N = ReactNative.Dimensions.get('window').height,
  R = 812 === N || 896 === N,
  W = 'ios' === ReactNative.Platform.OS ? (R ? 44 : 20) : 0,
  H = (function (t) {
    module35.default(F, t);

    var module47 = F,
      module400 = B(),
      L = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function F(t) {
      var n, o;
      module24.default(this, F);
      (o = L.call(this, t)).productImgsRef = React.default.createRef();
      o.fullScreenImgsRef = React.default.createRef();
      o.productImgsRefSwiper = React.default.createRef();
      o.fullScreenImgsRefSwiper = React.default.createRef();
      o._scrollContent = React.default.createRef();
      o.currentIndex = 0;
      o.isSticky = false;
      o.heightTrigger = 0;

      o.handleSwipeIndexChange = function (t) {
        o.currentIndex = t;
      };

      o.state = {
        loaded: false,
        loadedImage: false,
        productDetails: null,
        renderSizesBottomSheet: false,
        renderColorsBottomSheet: false,
        selectedSize: null,
        tempSelectedSize: null,
        selectedColor: (null == (n = o.params) ? undefined : n.productColor) || null,
        lockColorFlatListScroll: false,
        openedTab: -1,
        availableHeight: 0,
        viewableItems: [],
        fullScreenView: false,
        selectedFullScreenImageIndex: 0,
        lastImage: '',
        showInfoBottomSheet: true,
        heartFilled: false,
      };
      o.getProductData = o.getProductData.bind(module39.default(o));
      o.renderImageArea = o.renderImageArea.bind(module39.default(o));
      o.renderImageItem = o.renderImageItem.bind(module39.default(o));
      o.renderImageAreaIcons = o.renderImageAreaIcons.bind(module39.default(o));
      o.renderProductInfoArea = o.renderProductInfoArea.bind(module39.default(o));
      o.renderProductActionArea = o.renderProductActionArea.bind(module39.default(o));
      o.renderSizesBottomSheet = o.renderSizesBottomSheet.bind(module39.default(o));
      o.renderColorsBottomSheet = o.renderColorsBottomSheet.bind(module39.default(o));
      o.renderColorItem = o.renderColorItem.bind(module39.default(o));
      o.renderSizeItem = o.renderSizeItem.bind(module39.default(o));
      o.infoAreaColorGenerator = o.infoAreaColorGenerator.bind(module39.default(o));
      o.onViewableItemsChanged = o.onViewableItemsChanged.bind(module39.default(o));
      o.addProductToWishList = o.addProductToWishList.bind(module39.default(o));
      o.removeProductFromWishList = o.removeProductFromWishList.bind(module39.default(o));
      o.addToCart = o.addToCart.bind(module39.default(o));
      o.tabActionHandler = o.tabActionHandler.bind(module39.default(o));
      o.renderFullScreenView = o.renderFullScreenView.bind(module39.default(o));
      o.renderSimilarItem = o.renderSimilarItem.bind(module39.default(o));
      return o;
    }

    module25.default(F, [
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            o,
            l,
            s,
            u,
            c,
            f,
            p,
            h,
            y = this;
          return regeneratorRuntime.default.async(
            function (v) {
              for (;;)
                switch ((v.prev = v.next)) {
                  case 0:
                    if (
                      ((o = this.props.navigation),
                      (this._onFocus = o.addListener('focus', function () {
                        return y.setState({
                          showInfoBottomSheet: true,
                        });
                      })),
                      null == (t = this.params) || !t.product)
                    ) {
                      v.next = 11;
                      break;
                    }

                    p = this.params.product;
                    (h = JSON.parse(JSON.stringify(p))).Tamanhos =
                      null == (l = h.Tamanhos)
                        ? undefined
                        : l.filter(function (t) {
                            var n;
                            return !(null == (n = t.tamanhos) || !n.length);
                          });
                    h.Cores = h.Cores.filter(function (t) {
                      return h.Tamanhos.some(function (n) {
                        return t.NumeroCor === n.NumeroCor;
                      });
                    });

                    if (!(null != p && p.Descricao && null != (s = p.Tamanhos) && s.length && h.Cores.length && h.Tamanhos.length)) {
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });
                      o.goBack();
                    }

                    this.setState({
                      productDetails: h,
                      loaded: true,
                      heartFilled: !(null == h || !h.WishList[0]) && (null == h ? undefined : null == (u = h.WishList[0]) ? undefined : u.idGiftListaProduto) > 0,
                      giftId: null == h ? undefined : null == (c = h.WishList) ? undefined : null == (f = c[0]) ? undefined : f.idGiftListaProduto,
                    });
                    v.next = 13;
                    break;

                  case 11:
                    v.next = 13;
                    return regeneratorRuntime.default.awrap(this.getProductData());

                  case 13:
                  case 'end':
                    return v.stop();
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
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
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
        key: 'barCodeLink',
        get: function () {
          return this.params.barCodeLink || '';
        },
      },
      {
        key: 'productId',
        get: function () {
          var t, n;
          return (null == (t = this.params) ? undefined : null == (n = t.productId) ? undefined : n.toString()) || '';
        },
      },
      {
        key: 'getProductData',
        value: function (t) {
          var o, l, s, u, c, module37, module34, h, y, v, S, w, I, E, k, P, D, L, F, B, V, A;
          return regeneratorRuntime.default.async(
            function (O) {
              for (;;)
                switch ((O.prev = O.next)) {
                  case 0:
                    if (((o = this.props), (l = o.dispatch), (s = o.navigation), (O.prev = 1), l(module1224.setLoader(true)), (u = null), !this.barCodeLink)) {
                      O.next = 10;
                      break;
                    }

                    O.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.productDetailFromBarCode(this.barCodeLink),
                        axiosConfig: {
                          callback: this.getProductData,
                        },
                      })
                    );

                  case 7:
                    u = O.sent;
                    O.next = 21;
                    break;

                  case 10:
                    if (!t && !this.params.productLink) {
                      O.next = 16;
                      break;
                    }

                    O.next = 13;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.productDetailFromBarCode(t || this.params.productLink),
                        axiosConfig: {
                          callback: this.getProductData,
                        },
                      })
                    );

                  case 13:
                    u = O.sent;
                    O.next = 21;
                    break;

                  case 16:
                    module37 = this.state.selectedColor;
                    module34 = this.catalogueTitle
                      ? this.catalogueTitle + '/produto/prd/' + this.productId
                      : this.productId + '/' + (null == module37 ? undefined : module37.NumeroCor);
                    O.next = 20;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.productDetail(module34, (null == (c = this.user) ? undefined : c.IdCliente) || ''),
                        axiosConfig: {
                          callback: this.getProductData,
                        },
                      })
                    );

                  case 20:
                    u = O.sent;

                  case 21:
                    if (u.ok) {
                      l(module1224.setLoader(false));
                      E = this.props.navigation;
                      k = z({}, u.data);
                      (P = JSON.parse(JSON.stringify(k))).Tamanhos =
                        null == (h = P.Tamanhos)
                          ? undefined
                          : h.filter(function (t) {
                              var n;
                              return !(null == (n = t.tamanhos) || !n.length);
                            });
                      P.Cores = P.Cores.filter(function (t) {
                        return P.Tamanhos.some(function (n) {
                          return t.NumeroCor === n.NumeroCor;
                        });
                      });

                      if (!(null != k && k.Descricao && null != (y = k.Tamanhos) && y.length && P.Cores.length && P.Tamanhos.length)) {
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                        E.goBack();
                      }

                      D = this.state.selectedColor;
                      L = (null == P ? undefined : P.Cores[0]) || {};
                      if (
                        D &&
                        null != P &&
                        null != (v = P.Cores) &&
                        v.length &&
                        (F = P.Cores.find(function (t) {
                          return t.NumeroCor === D;
                        }))
                      )
                        L = F;
                      B = null;
                      if (
                        D &&
                        null != P &&
                        null != (S = P.Tamanhos) &&
                        S.length &&
                        1 ===
                          (null ==
                          (A = P.Tamanhos.find(function (t) {
                            return t.NumeroCor === D;
                          }))
                            ? undefined
                            : null == (V = A.tamanhos)
                            ? undefined
                            : V.length)
                      )
                        B = null == A ? undefined : A.tamanhos[0];
                      this.setState({
                        productDetails: P,
                        selectedColor: L,
                        tempSelectedSize: B,
                        selectedSize: B,
                        heartFilled: !(null == P || !P.WishList[0]) && (null == P ? undefined : null == (w = P.WishList[0]) ? undefined : w.idGiftListaProduto) > 0,
                        loaded: true,
                      });
                      if (!(null == (I = this._scrollContent)))
                        I.scrollTo({
                          y: 0,
                          animated: false,
                        });
                    } else {
                      l(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                      s.goBack();
                    }

                    O.next = 29;
                    break;

                  case 24:
                    O.prev = 24;
                    O.t0 = O.catch(1);
                    l(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });
                    s.goBack();

                  case 29:
                  case 'end':
                    return O.stop();
                }
            },
            null,
            this,
            [[1, 24]],
            Promise
          );
        },
      },
      {
        key: 'getWishListData',
        value: function () {
          var t,
            module47,
            module24,
            s,
            u,
            c,
            f = this;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.user;
                    p.prev = 1;
                    module47(module1224.setLoader(true));
                    p.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.wishlist(module24.value.IdCliente),
                        axiosConfig: {
                          callback: this.getWishListData,
                        },
                      })
                    );

                  case 5:
                    if ((s = p.sent).ok) {
                      module47(module1224.setLoader(false));
                      u = s.data.Artigos;
                      c = u.find(function (t) {
                        return t.idProduto == f.productId;
                      });
                      this.setState({
                        giftId: c.idGiftListaProduto,
                        loaded: true,
                      });
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    p.next = 13;
                    break;

                  case 9:
                    p.prev = 9;
                    p.t0 = p.catch(1);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return p.stop();
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
        key: 'removeProductFromWishList',
        value: function () {
          var t, module47, module24, module25, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.user;
                    c.next = 3;
                    return regeneratorRuntime.default.awrap(this.getWishListData());

                  case 3:
                    c.prev = 3;
                    module25 = {};
                    module47(module1224.setLoader(true));
                    c.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.wishlist(module24.value.IdCliente) + '/' + this.state.giftId,
                        data: module25,
                        axiosConfig: {
                          callback: this.removeProductFromWishList,
                        },
                      })
                    );

                  case 8:
                    if (!(u = c.sent).ok) {
                      c.next = 16;
                      break;
                    }

                    module47(module1224.setLoader(false));
                    c.next = 13;
                    return regeneratorRuntime.default.awrap(this.getProductData());

                  case 13:
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: module458.default.generic.removedFromWishlist,
                    });
                    c.next = 18;
                    break;

                  case 16:
                    module47(module1224.setLoader(false));
                    if (401 !== u.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: u.data.message,
                      });

                  case 18:
                    c.next = 24;
                    break;

                  case 20:
                    c.prev = 20;
                    c.t0 = c.catch(3);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 24:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[3, 20]],
            Promise
          );
        },
      },
      {
        key: 'addProductToWishList',
        value: function () {
          var t, module47, module24, module25, module39, module35, module37, module34, React, y;
          return regeneratorRuntime.default.async(
            function (v) {
              for (;;)
                switch ((v.prev = v.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.user;
                    module25 = this.state;
                    module39 = module25.selectedColor;
                    module35 = module25.selectedSize;
                    module37 = module25.productDetails;
                    v.prev = 2;
                    module34 = {};
                    module47(module1224.setLoader(true));
                    React = module1226.Endpoints.wishlist(module24.value.IdCliente) + '/' + (null == module37 ? undefined : module37.idProduto) + '/' + module39.NumeroCor;
                    if (module35) React = React + '/' + module35.Tamanho;
                    v.next = 9;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: React,
                        data: module34,
                        axiosConfig: {
                          callback: this.addProductToWishList,
                        },
                      })
                    );

                  case 9:
                    if (!(y = v.sent).ok || !y.data.success) {
                      v.next = 17;
                      break;
                    }

                    module47(module1224.setLoader(false));
                    v.next = 14;
                    return regeneratorRuntime.default.awrap(this.getProductData());

                  case 14:
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: y.data.message,
                    });
                    v.next = 19;
                    break;

                  case 17:
                    module47(module1224.setLoader(false));
                    if (401 !== y.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: y.data.message,
                      });

                  case 19:
                    v.next = 25;
                    break;

                  case 21:
                    v.prev = 21;
                    v.t0 = v.catch(2);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 25:
                  case 'end':
                    return v.stop();
                }
            },
            null,
            this,
            [[2, 21]],
            Promise
          );
        },
      },
      {
        key: 'renderImageAreaIcons',
        value: function (t) {
          var n = this,
            o = module1848.CStyles(),
            l = this.props,
            s = l.navigation,
            u = l.user,
            c = this.state.heartFilled;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                o.buttonHeaderContainer,
                null != t && t.top
                  ? {
                      top: module474.ms(5) + (null == t ? undefined : t.top),
                    }
                  : {
                      top: module474.ms(20),
                    },
              ],
            },
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                hitSlop: module474.HitSlop.extraBig,
                onPress: function () {
                  return s.goBack();
                },
              },
              React.default.createElement(module472.Icon, {
                name: 'Seta-perfil1',
                size: module474.ms(22),
                color: 'black',
                style: o.backIcon,
              })
            ),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  if (null != u && u.value) c ? n.removeProductFromWishList() : n.addProductToWishList();
                  else
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.authentication.toExecuteThisActionLogin,
                    });
                },
              },
              React.default.createElement(module472.Icon, {
                name: c ? 'Like-Fill' : 'Like-Outline',
                size: module474.ms(28),
                color: 'black',
                style: o.wishlistIcon,
              })
            )
          );
        },
      },
      {
        key: 'renderImageItem',
        value: function (t, n, o) {
          var l = this,
            s = this.state,
            u = s.availableHeight,
            c = s.fullScreenView,
            f = ReactNative.Dimensions.get('window'),
            p = f.height,
            v = f.width;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return (
                  !c &&
                  l.setState({
                    fullScreenView: true,
                    selectedFullScreenImageIndex: o,
                  })
                );
              },
            },
            React.default.createElement(module1272.default, {
              resizeMode: 'cover',
              source: {
                uri: t.srcimagem,
              },
              onLoadEnd: function () {
                l.setState({
                  loadedImage: true,
                });
              },
              style: {
                height: c ? p : p - u - (null == n ? undefined : n.top) + module474.ms(7.5),
                width: v,
              },
            })
          );
        },
      },
      {
        key: 'renderImageCounterDots',
        value: function (t) {
          var n = this.state.viewableItems,
            o = module1848.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: o.imageCounterDotsArea,
            },
            null == t
              ? undefined
              : t.map(function (t, l) {
                  var s;
                  return React.default.createElement(ReactNative.View, {
                    key: 'productDetailDotsCounter_' + l,
                    style: [
                      o.imageCounterDot,
                      {
                        backgroundColor: (null == (s = n[0]) ? undefined : s.index) === l ? 'black' : module474.Color.lightGray,
                      },
                    ],
                  });
                })
          );
        },
      },
      {
        key: 'onViewableItemsChanged',
        value: function (t) {
          var n = t.viewableItems;
          t.changed;

          try {
            this.setState({
              viewableItems: n,
            });
          } catch (t) {}
        },
      },
      {
        key: 'renderImageArea',
        value: function (t) {
          var n,
            o,
            l,
            s = this,
            u = module1848.CStyles(),
            c = this.state,
            f = c.productDetails,
            p = c.selectedColor,
            v = c.availableHeight,
            C = ReactNative.Dimensions.get('window').height;
          if (0 === v)
            return React.default.createElement(ReactNative.View, {
              style: {
                height: '100%',
                width: '100%',
              },
            });
          var b =
              null != p && p.NumeroCor
                ? null == f
                  ? undefined
                  : null == (n = f.ProdutoVistasCores)
                  ? undefined
                  : n.find(function (t) {
                      return t.NumeroCor === p.NumeroCor;
                    })
                : null == f
                ? undefined
                : f.ProdutoVistasCores,
            x = '' !== (null == f ? undefined : f.TipoEntrega);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              module1606.default,
              {
                ref: this.productImgsRefSwiper,
                index: this.currentIndex,
                onIndexChanged: this.handleSwipeIndexChange,
                dotColor: 'gray',
                activeDotColor: 'black',
                style: {
                  height: C - v - (null == t ? undefined : t.top) + module474.ms(7.5),
                },
                autoplay: false,
                loop: true,
                removeClippedSubviews: false,
              },
              null == b
                ? undefined
                : null == (o = b.Vistas)
                ? undefined
                : o.map(function (n, o) {
                    return s.renderImageItem(n, t, o);
                  })
            ),
            x &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    u.deliveryLabelContainer,
                    {
                      bottom: '10%',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: u.deliveryLabelText,
                  },
                  null == f ? undefined : null == (l = f.TipoEntrega) ? undefined : l.toUpperCase()
                )
              )
          );
        },
      },
      {
        key: 'infoAreaColorGenerator',
        value: function (t) {
          var n = this,
            o = this.state,
            l = o.productDetails,
            s = o.selectedColor,
            u = o.lockColorFlatListScroll,
            c = module1848.CStyles(),
            f = t.item,
            p = t.index;

          if (
            ReactNative.Dimensions.get('screen').width / 2 - (p * (module474.ms(15) + module474.ms(10)) + module474.ms(10) + module474.ms(15)) <
            module474.ms(25) + module474.ms(5)
          ) {
            if (!u)
              this.setState({
                lockColorFlatListScroll: true,
              });
            return React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.setState({
                    renderColorsBottomSheet: true,
                  });
                },
              },
              React.default.createElement(module472.Icon, {
                name: 'add-small',
                size: module474.ms(30),
                style: {
                  marginLeft: -module474.ms(8),
                },
              })
            );
          } else
            return f.NumeroCor === (null == s ? undefined : s.NumeroCor)
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    key: 'item_' + f.NumeroCor,
                    style: [
                      c.selectedColorCircle,
                      {
                        marginRight: module474.ms(3),
                      },
                    ],
                  },
                  React.default.createElement(ReactNative.View, {
                    style: [
                      c.colorCircle,
                      {
                        backgroundColor: f.Pantone ? f.Pantone : 'black',
                      },
                    ],
                  })
                )
              : React.default.createElement(ReactNative.TouchableOpacity, {
                  key: 'color' + f.NumeroCor,
                  onPress: function () {
                    var t,
                      o = null,
                      s =
                        null == l
                          ? undefined
                          : l.Tamanhos.find(function (t) {
                              return t.NumeroCor === f.NumeroCor;
                            });
                    if (1 === (null == s ? undefined : null == (t = s.tamanhos) ? undefined : t.length)) o = null == s ? undefined : s.tamanhos[0];
                    n.setState(
                      {
                        selectedColor: f,
                        selectedSize: null,
                        tempSelectedSize: o,
                      },
                      function () {
                        var t;
                        return null == (t = n.productImgsRef.current)
                          ? undefined
                          : t.scrollToOffset({
                              animated: true,
                              offset: 0,
                            });
                      }
                    );
                  },
                  style: [
                    c.colorCircle,
                    {
                      backgroundColor: f.Pantone ? f.Pantone : 'black',
                      borderColor: module474.Color.grayBorder,
                      borderWidth: ReactNative.StyleSheet.hairlineWidth,
                      marginRight: module474.ms(3),
                    },
                  ],
                });
        },
      },
      {
        key: 'renderSizeItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = this.state,
            s = l.tempSelectedSize,
            u = l.selectedSize,
            c = module1848.CStyles(),
            f = (null == s ? undefined : s.Tamanho) === (null == o ? undefined : o.Tamanho) || (!s && (null == u ? undefined : u.Tamanho) === (null == o ? undefined : o.Tamanho));
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState({
                  tempSelectedSize: o,
                });
              },
              style: c.productSizeItemContainer,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  c.productSizeItemText,
                  f && {
                    color: module474.Color.black,
                  },
                ],
              },
              null == o ? undefined : o.Tamanho
            )
          );
        },
      },
      {
        key: 'renderSizesBottomSheet',
        value: function (t) {
          var n,
            o = this,
            l = module1848.CStyles(),
            s = this.state,
            u = s.productDetails,
            c = s.renderSizesBottomSheet,
            f = s.selectedColor,
            p = s.tempSelectedSize,
            v = s.selectedSize;

          if (u && f) {
            var x =
                null == u
                  ? undefined
                  : null == (n = u.Tamanhos)
                  ? undefined
                  : n.find(function (t) {
                      return t.NumeroCor === f.NumeroCor;
                    }),
              T = module458.default.generic.addToBasket;
            if (null != u && u.PodeReservar) T = module458.default.generic.addToReserve;
            return React.default.createElement(
              module472.BottomSheet,
              {
                key: 'BSproductSizesFlatList',
                visible: c && f,
                enablePanDownToClose: true,
                snapPoints: [-1, module474.ms(250)],
                onClose: function () {
                  return o.setState({
                    renderSizesBottomSheet: false,
                    selectedSize: p,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    l.productSizesBSContainer,
                    {
                      paddingBottom: t.bottom,
                    },
                  ],
                },
                React.default.createElement(ReactNative.FlatList, {
                  key: 'productSizesFlatList',
                  keyExtractor: V,
                  horizontal: true,
                  style: {
                    flexGrow: 0,
                    paddingVertical: module474.ms(15),
                  },
                  showsHorizontalScrollIndicator: false,
                  data: (null == x ? undefined : x.tamanhos) || [],
                  renderItem: this.renderSizeItem,
                  bounces: false,
                }),
                !(null == u || !u.LinkTabelaMedidas) && this.renderSizeGuideArea(),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    disabled: !p && !v,
                    onPress: function () {
                      o.setState(
                        {
                          selectedSize: p,
                          renderSizesBottomSheet: false,
                        },
                        function () {
                          return o.addToCart();
                        }
                      );
                    },
                    style: [
                      l.absoluteButton,
                      {
                        marginTop: module474.ms(15),
                        marginBottom: t.bottom,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: l.buttonText,
                    },
                    T.toUpperCase()
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'renderColorItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = this.state,
            s = l.selectedColor,
            u = l.productDetails,
            c = module1848.CStyles();
          return o.NumeroCor === (null == s ? undefined : s.NumeroCor) || o.NumeroCor === (null == s ? undefined : s.NumeroCor)
            ? React.default.createElement(
                ReactNative.View,
                {
                  key: 'item_' + o.NumeroCor,
                  style: c.selectedColorCircle,
                },
                React.default.createElement(ReactNative.View, {
                  style: [
                    c.colorCircle,
                    {
                      backgroundColor: o.Pantone ? o.Pantone : 'black',
                    },
                  ],
                })
              )
            : React.default.createElement(ReactNative.TouchableOpacity, {
                key: 'color' + o.NumeroCor,
                onPress: function () {
                  var t,
                    l = null,
                    s =
                      null == u
                        ? undefined
                        : u.Tamanhos.find(function (t) {
                            return t.NumeroCor === o.NumeroCor;
                          });
                  if (1 === (null == s ? undefined : null == (t = s.tamanhos) ? undefined : t.length)) l = null == s ? undefined : s.tamanhos[0];
                  n.setState(
                    {
                      selectedColor: o,
                      tempSelectedSize: null,
                      selectedSize: l,
                    },
                    function () {
                      var t;
                      return null == (t = n.productImgsRef.current)
                        ? undefined
                        : t.scrollToOffset({
                            animated: true,
                            offset: 0,
                          });
                    }
                  );
                },
                style: [
                  c.colorCircle,
                  {
                    backgroundColor: o.Pantone ? o.Pantone : 'black',
                    borderColor: module474.Color.grayBorder,
                    borderWidth: ReactNative.StyleSheet.hairlineWidth,
                  },
                ],
              });
        },
      },
      {
        key: 'renderColorsBottomSheet',
        value: function (t) {
          var n = this,
            o = this.state,
            l = o.productDetails,
            s = o.renderColorsBottomSheet,
            u = o.selectedColor;
          o.tempSelectedSize;

          if (null != l && l.Cores && u) {
            var c = module1848.CStyles(),
              f = module458.default.generic.addToBasket;
            if (null != l && l.PodeReservar) f = module458.default.generic.addToReserve;
            return React.default.createElement(
              module472.BottomSheet,
              {
                key: 'BSproductColorsFlatList',
                visible: s && u,
                enablePanDownToClose: true,
                snapPoints: [-1, module474.ms(200)],
                onClose: function () {
                  JSON.parse(JSON.stringify(u));
                  n.setState({
                    renderColorsBottomSheet: false,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    c.productSizesBSContainer,
                    {
                      paddingBottom: t.bottom,
                    },
                  ],
                },
                React.default.createElement(ReactNative.FlatList, {
                  key: 'productColorsFlatList',
                  keyExtractor: A,
                  horizontal: true,
                  style: {
                    flexGrow: 0,
                    paddingVertical: module474.ms(20),
                  },
                  contentContainerStyle: {
                    alignItems: 'center',
                    marginTop: module474.ms(15),
                  },
                  showsHorizontalScrollIndicator: false,
                  data: null == l ? undefined : l.Cores,
                  renderItem: this.renderColorItem,
                  bounces: false,
                }),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      var t = JSON.parse(JSON.stringify(u));
                      n.setState(
                        {
                          selectedColor: t,
                          renderColorsBottomSheet: false,
                        },
                        function () {
                          return n.addToCart();
                        }
                      );
                    },
                    style: [
                      c.absoluteButton,
                      {
                        marginTop: module474.ms(15),
                        marginBottom: t.bottom,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: c.buttonText,
                    },
                    f.toUpperCase()
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'productSizePicker',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state.tempSelectedSize,
            l = module458.default.generic.selectSize;
          if (o) l = null == o ? undefined : o.Tamanho.toUpperCase();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return t.setState({
                  renderSizesBottomSheet: true,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.filterItemPressContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.filterItemPressContainerText,
                    {
                      textAlign: 'center',
                    },
                  ],
                },
                l
              ),
              React.default.createElement(module472.Icon, {
                name: 'Seta-perfil1',
                color: module474.Color.darkGray,
                size: module474.ms(20),
                style: {
                  transform: [
                    {
                      rotate: '90deg',
                    },
                  ],
                },
              })
            )
          );
        },
      },
      {
        key: 'addToCart',
        value: function () {
          var t, o, l, s, u, c, f, p, h, y, module400, module1848, w;
          return regeneratorRuntime.default.async(
            function (I) {
              for (;;)
                switch ((I.prev = I.next)) {
                  case 0:
                    if (
                      ((t = this.props),
                      (o = t.dispatch),
                      (l = t.navigation),
                      (s = t.cartNumber),
                      (u = t.user),
                      (c = this.state),
                      (f = c.selectedSize),
                      (p = c.selectedColor),
                      (h = c.productDetails),
                      (y = h.PodeReservar),
                      console.log('\ud83d\ude80 ~ file: index.tsx ~ line 788 ~ ProductDetail ~ addToCart ~ selectedSize', f),
                      f)
                    ) {
                      I.next = 7;
                      break;
                    }

                    this.setState({
                      renderSizesBottomSheet: true,
                    });
                    return I.abrupt('return');

                  case 7:
                    if (u.value) {
                      I.next = 10;
                      break;
                    }

                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.error,
                      message: module458.default.authentication.toExecuteThisActionLogin,
                    });
                    return I.abrupt('return');

                  case 10:
                    module400 = {};
                    module1848 = module1226.Endpoints.addItemToCart(this.user.IdCliente, this.productId, p.NumeroCor, f.Tamanho);
                    if (y) module1848 = module1226.Endpoints.reservations(this.user.IdCliente + '/' + this.productId + '/' + p.NumeroCor + '/' + f.Tamanho);
                    I.prev = 13;
                    o(module1224.setLoader(true));
                    I.next = 17;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1848,
                        data: module400,
                        axiosConfig: {
                          callback: this.addToCart,
                        },
                      })
                    );

                  case 17:
                    if ((w = I.sent).ok && w.data.success) {
                      o(module1224.setLoader(false));

                      if (219 !== w.status && 319 !== w.status) {
                        if (!y) o(module1224.setCartNumber(s.value + 1));
                        module472.DropDown.alert({
                          type: 'success',
                          title: module458.default.generic.success,
                          message: y ? module458.default.generic.itemAddedToReserve : module458.default.generic.itemAddedToCart,
                        });
                        this.setState({
                          showInfoBottomSheet: false,
                        });
                        if (y) l.goBack();
                        else
                          l.navigate('Cart', {
                            fromProduct: true,
                          });
                      }
                    } else {
                      o(module1224.setLoader(false));
                      if (401 !== w.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: w.data.message,
                        });
                    }

                    I.next = 25;
                    break;

                  case 21:
                    I.prev = 21;
                    I.t0 = I.catch(13);
                    o(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 25:
                  case 'end':
                    return I.stop();
                }
            },
            null,
            this,
            [[13, 21]],
            Promise
          );
        },
      },
      {
        key: 'renderProductActionArea',
        value: function () {
          var t,
            n,
            o,
            l = this,
            s = module1848.CStyles(),
            u = this.state,
            c = u.productDetails,
            f = u.selectedColor,
            p = u.lockColorFlatListScroll,
            v = c.PodeReservar,
            x = module458.default.generic.add;
          if (v) x = module458.default.generic.reserve;
          return React.default.createElement(
            ReactNative.View,
            {
              style: s.infoAreaContainer,
              onLayout: function (t) {
                var n = t.nativeEvent.layout.height;
                l.setState({
                  availableHeight: n,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.textRow,
                  {
                    marginTop: module474.ms(7.5),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    s.infoTextBig,
                    {
                      fontFamily: module474.FontFamily.semiBold,
                    },
                  ],
                },
                null == c ? undefined : c.Descricao
              ),
              (null == c ? undefined : c.PrecoPromocao) &&
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.infoTextBig,
                      {
                        color: module474.Color.red,
                        fontFamily: module474.FontFamily.semiBold,
                      },
                    ],
                  },
                  (null == c ? undefined : null == (t = c.PrecoPromocao) ? undefined : t.toFixed(2)) + ' \u20ac'
                ),
              !(null != c && c.PrecoPromocao) &&
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.infoTextBig,
                      {
                        fontFamily: module474.FontFamily.semiBold,
                      },
                    ],
                  },
                  (null == c ? undefined : null == (n = c.PVP) ? undefined : n.toFixed(2)) + ' \u20ac'
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.textRow,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    s.infoText,
                    {
                      fontSize: module474.FontSize.xxs,
                      color: 'gray',
                    },
                  ],
                },
                'REF. ' + (null == c ? undefined : c.Referencia)
              ),
              (null == c ? undefined : c.PrecoPromocao) &&
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: s.textRow,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.infoText,
                        {
                          textDecorationLine: 'line-through',
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    (null == c ? undefined : null == (o = c.PVP) ? undefined : o.toFixed(2)) + ' \u20ac'
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.infoText,
                        {
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    ' (' + (null == c ? undefined : c.Percentagem) + '%)'
                  )
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.textRow,
                  {
                    marginTop: module474.ms(20),
                    alignItems: 'center',
                  },
                ],
              },
              React.default.createElement(ReactNative.FlatList, {
                key: 'colorsFlatList',
                keyExtractor: O,
                horizontal: true,
                showsHorizontalScrollIndicator: false,
                style: {
                  flexGrow: 0,
                  maxWidth: ReactNative.Dimensions.get('screen').width / 2,
                },
                contentContainerStyle: {
                  alignItems: 'center',
                },
                renderItem: this.infoAreaColorGenerator,
                data: null == c ? undefined : c.Cores,
                scrollEnabled: !p,
                bounces: false,
              }),
              f &&
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.infoText,
                      {
                        fontSize: module474.FontSize.m,
                        color: module474.Color.grayBorder,
                      },
                    ],
                  },
                  null == f ? undefined : f.Designacao
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.textRow,
                  {
                    marginTop: module474.ms(15),
                  },
                ],
              },
              this.productSizePicker(),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: {
                    width: '48.5%',
                  },
                  onPress: this.addToCart,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.button,
                      {
                        width: '100%',
                      },
                    ],
                  },
                  React.default.createElement(module472.Icon, {
                    style: {
                      marginRight: module474.ms(10),
                    },
                    size: module474.ms(16),
                    color: 'white',
                    name: 'adicionar-a-cesta-1',
                  }),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: s.buttonText,
                    },
                    x.toUpperCase()
                  )
                )
              )
            )
          );
        },
      },
      {
        key: 'tabActionHandler',
        value: function (t) {
          var n = this.state.openedTab;
          this.setState({
            openedTab: t === n ? -1 : t,
          });
        },
      },
      {
        key: 'renderSizeGuideArea',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state.productDetails;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.sizeGuideArea,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.sizeGuideTitleText,
              },
              module458.default.generic.sizeGuide
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.textRow,
                  {
                    alignItems: 'center',
                    marginTop: module474.ms(5),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  onPress: function () {
                    t.setState({
                      showInfoBottomSheet: false,
                      renderSizesBottomSheet: false,
                    });
                    t.props.navigation.navigate('SizeGuide', {
                      link: null == o ? undefined : o.LinkTabelaMedidas,
                    });
                  },
                  style: n.findYourSizeText,
                },
                module458.default.generic.findYourSize
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.sizeGuideIconWrapper,
                },
                React.default.createElement(module472.Icon, {
                  name: 'si-glyph_hanger',
                  size: module474.ms(18),
                })
              )
            )
          );
        },
      },
      {
        key: 'renderCollapsableInfo',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state,
            l = o.productDetails,
            s = 1 === o.openedTab;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return t.tabActionHandler(1);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [n.expandableContainer, !s && n.expandableBottomBorder],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.expandableContainerText,
                  },
                  module458.default.generic.info
                ),
                React.default.createElement(module472.Icon, {
                  name: s ? 'minus-small' : 'add-small',
                  size: module474.ms(26),
                })
              )
            ),
            s &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.expandableContainerCollapsableArea,
                },
                null == l
                  ? undefined
                  : l.Informacoes.map(function (t) {
                      return React.default.createElement(
                        ReactNative.Text,
                        {
                          style: n.expandableContainerCollapsableAreaText,
                        },
                        t.Designacao
                      );
                    })
              )
          );
        },
      },
      {
        key: 'renderCollapsableMeasurements',
        value: function () {
          var t,
            n = this,
            o = module1848.CStyles(),
            l = this.state,
            s = l.productDetails,
            u = l.openedTab,
            c = l.selectedColor,
            f = 2 === u;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return n.tabActionHandler(2);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [o.expandableContainer, !f && o.expandableBottomBorder],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: o.expandableContainerText,
                  },
                  module458.default.generic.modelMeasurements
                ),
                React.default.createElement(module472.Icon, {
                  name: f ? 'minus-small' : 'add-small',
                  size: module474.ms(26),
                })
              )
            ),
            f &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: o.expandableContainerCollapsableArea,
                },
                null == s
                  ? undefined
                  : null == (t = s.MedidasModelo)
                  ? undefined
                  : t.map(function (t) {
                      if (c.NumeroCor === t.NumeroCor)
                        return Object.keys(t).map(function (n) {
                          return (
                            t[n].Designacao &&
                            t[n].Valor &&
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: o.expandableContainerCollapsableAreaText,
                              },
                              t[n].Designacao + ' - ' + t[n].Valor
                            )
                          );
                        });
                    })
              )
          );
        },
      },
      {
        key: 'renderCollapsableComposingCare',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state,
            l = o.productDetails,
            s = 3 === o.openedTab;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return t.tabActionHandler(3);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [n.expandableContainer, !s && n.expandableBottomBorder],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.expandableContainerText,
                  },
                  module458.default.generic.composing + ' / ' + module458.default.generic.care
                ),
                React.default.createElement(module472.Icon, {
                  name: s ? 'minus-small' : 'add-small',
                  size: module474.ms(26),
                })
              )
            ),
            s &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.expandableContainerCollapsableArea,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.expandableContainerCollapsableAreaText,
                  },
                  module458.default.generic.composing + ': '
                ),
                null == l
                  ? undefined
                  : l.Composicao.map(function (t) {
                      return t.Composicoes.map(function (t) {
                        return (
                          t.Designacao &&
                          t.Percentagem &&
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: n.expandableContainerCollapsableAreaText,
                            },
                            t.Designacao + ' - ' + t.Percentagem + '%'
                          )
                        );
                      });
                    }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      n.expandableContainerCollapsableAreaText,
                      {
                        marginTop: module474.ms(15),
                      },
                    ],
                  },
                  module458.default.generic.care + ': '
                ),
                null == l
                  ? undefined
                  : l.CuidadosLavagem.map(function (t) {
                      return (
                        t.Designacao &&
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: {
                              flexDirection: 'row',
                              alignItems: 'center',
                            },
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [
                                n.expandableContainerCollapsableAreaText,
                                {
                                  marginRight: module474.ms(10),
                                },
                              ],
                            },
                            t.Designacao
                          ),
                          React.default.createElement(module1618.SvgCssUri, {
                            height: module474.ms(15),
                            width: module474.ms(15),
                            uri: t.ImagemSrc,
                          })
                        )
                      );
                    })
              )
          );
        },
      },
      {
        key: 'renderCollapsableDeliveriesReturn',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state,
            l = o.productDetails,
            s = 4 === o.openedTab;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return t.tabActionHandler(4);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [n.expandableContainer, !s && n.expandableBottomBorder],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.expandableContainerText,
                  },
                  module458.default.generic.deliveriesAndReturns
                ),
                React.default.createElement(module472.Icon, {
                  name: s ? 'minus-small' : 'add-small',
                  size: module474.ms(26),
                })
              )
            ),
            s &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.expandableContainerCollapsableArea,
                },
                Object.values(null == l ? undefined : l.InfoEntregasDevolucoes).map(function (t) {
                  return React.default.createElement(
                    ReactNative.Text,
                    {
                      style: n.expandableContainerCollapsableAreaText,
                    },
                    t
                  );
                })
              )
          );
        },
      },
      {
        key: 'renderSimilarItem',
        value: function (t) {
          var o = this,
            l = t.item,
            s = module1848.CStyles(),
            u = l.Imagem,
            c = l.Designacao,
            f = l.PrecoPromocao,
            p = l.Marca,
            v = l.TipoEntrega,
            C = l.PVP,
            b = l.Destaque,
            x = null !== f && f > 0,
            T = v || '';
          return React.default.createElement(
            ReactNative.View,
            {
              style: s.similarItemArea,
            },
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return regeneratorRuntime.default.async(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            t.next = 2;
                            return regeneratorRuntime.default.awrap(o.getProductData(l.Urldetalhe));

                          case 2:
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
                style: {
                  width: module474.ms(150),
                },
              },
              React.default.createElement(ReactNative.Image, {
                style: s.similarItemImage,
                source: {
                  uri: u,
                },
              }),
              !!T &&
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.deliveryLabelContainer,
                      {
                        width: '80%',
                        top: module474.ms(180),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.deliveryLabelText,
                        {
                          fontSize: module474.FontSize.xs,
                        },
                      ],
                    },
                    null == v ? undefined : v.toUpperCase()
                  )
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: s.productInfoContainer,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    s.textRow,
                    {
                      justifyContent: 'space-between',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      s.textRow,
                      {
                        maxWidth: b.length ? '55%' : '65%',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      numberOfLines: 1,
                      ellipsizeMode: 'tail',
                      style: s.productInfoTextBold,
                    },
                    p.toUpperCase()
                  ),
                  !!b.length &&
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: s.productInfoText,
                      },
                      ' - '
                    ),
                  !!b.length &&
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        numberOfLines: 1,
                        ellipsizeMode: 'tail',
                        style: [
                          s.productInfoText,
                          {
                            color: module474.Color.darkGray,
                            maxWidth: '50%',
                            fontFamily: module474.FontFamily.light,
                          },
                        ],
                      },
                      b.toUpperCase()
                    )
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    s.textRow,
                    {
                      marginTop: module474.ms(5),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 1,
                    ellipsizeMode: 'tail',
                    style: s.productInfoText,
                  },
                  c.toUpperCase()
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    s.textRow,
                    {
                      marginTop: module474.ms(1),
                      justifyContent: 'flex-start',
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      s.productInfoPrice,
                      {
                        fontFamily: module474.FontFamily.semiBold,
                      },
                      f && {
                        textDecorationLine: 'line-through',
                      },
                    ],
                  },
                  C.toFixed(2) + '\u20ac '
                ),
                x &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.productInfoPrice,
                        {
                          color: module474.Color.red,
                          marginLeft: module474.ms(5),
                          fontFamily: module474.FontFamily.semiBold,
                        },
                      ],
                    },
                    f.toFixed(2) + ' \u20ac'
                  )
              )
            )
          );
        },
      },
      {
        key: 'renderSimilarProducts',
        value: function (t, n) {
          var o = this;
          if (!t.length) return null;
          var l = module1848.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: l.SimilarAreaContainer,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: l.similarProductTitle,
              },
              n.toUpperCase()
            ),
            React.default.createElement(ReactNative.FlatList, {
              key: 'similarProductsFlatList',
              horizontal: true,
              style: {
                flexGrow: 0,
              },
              contentContainerStyle: {
                marginTop: module474.ms(15),
              },
              showsHorizontalScrollIndicator: false,
              data: t,
              renderItem: function (t) {
                return o.renderSimilarItem(t);
              },
              bounces: false,
            })
          );
        },
      },
      {
        key: 'renderProductInfoArea',
        value: function () {
          var t,
            n,
            o,
            l,
            s = module1848.CStyles(),
            u = this.state,
            c = u.loadedImage,
            f = u.productDetails,
            p = u.selectedColor;

          if (c) {
            var v =
              null == f
                ? undefined
                : null == (t = f.MedidasModelo)
                ? undefined
                : t.find(function (t) {
                    return t.NumeroCor === (null == p ? undefined : p.NumeroCor);
                  });
            return React.default.createElement(
              ReactNative.View,
              {
                style: s.infoAreaContainer,
              },
              this.renderSearchStores(),
              (null == f ? undefined : null == (n = f.Informacoes) ? undefined : n.length) > 0 && this.renderCollapsableInfo(),
              (null == f ? undefined : null == (o = f.MedidasModelo) ? undefined : o.length) > 0 && v && this.renderCollapsableMeasurements(),
              (null == f ? undefined : null == (l = f.Composicao) ? undefined : l.length) > 0 && this.renderCollapsableComposingCare(),
              !(null == f || !f.InfoEntregasDevolucoes) && this.renderCollapsableDeliveriesReturn()
            );
          }
        },
      },
      {
        key: 'renderSearchStores',
        value: function () {
          var t = this,
            n = module1848.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return t.setState(
                  {
                    showInfoBottomSheet: false,
                  },
                  function () {
                    var n;
                    return t.props.navigation.navigate('Stores', {
                      from: t.props.route,
                      productId: null == (n = t.state.productDetails) ? undefined : n.Referencia,
                      catalogueTitle: t.catalogueTitle,
                      productDetails: t.state.productDetails,
                    });
                  }
                );
              },
              style: n.storesButton,
            },
            React.default.createElement(module472.Icon, {
              name: 'Map-Fill',
              size: module474.ms(20),
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.searchStoresTitle,
              },
              module458.default.generic.searchOnStores.toUpperCase()
            )
          );
        },
      },
      {
        key: 'renderFixedHeader',
        value: function (t) {
          var n = this,
            o = this.state.heartFilled,
            l = this.props.user;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              transparent: true,
              transparentColorIcons: 'black',
              productDetailHeader: true,
              back: true,
              rightIcon: o ? 'Like-Fill' : 'Like-Outline',
              rightAction: function () {
                if (null != l && l.value) o ? n.removeProductFromWishList() : n.addProductToWishList();
                else
                  module472.DropDown.alert({
                    type: 'error',
                    title: module458.default.generic.oops,
                    message: module458.default.authentication.toExecuteThisActionLogin,
                  });
              },
            })
          );
        },
      },
      {
        key: 'renderHeaderInfo',
        value: function (t, n, o) {
          var l = this,
            s = this.state,
            u = s.heartFilled,
            c = s.productDetails,
            f = this.props.user,
            p = t.interpolate({
              inputRange: [0, n, o],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            });
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              transparent: true,
              transparentColorIcons: 'black',
              topStyle: {
                backgroundColor: 'white',
                opacity: p,
              },
              containerStyle: {
                opacity: p,
                backgroundColor: 'white',
              },
              back: true,
              title: null == c ? undefined : c.Descricao,
              rightIcon: u ? 'Like-Fill' : 'Like-Outline',
              rightAction: function () {
                if (null != f && f.value) u ? l.removeProductFromWishList() : l.addProductToWishList();
                else
                  module472.DropDown.alert({
                    type: 'error',
                    title: module458.default.generic.oops,
                    message: module458.default.authentication.toExecuteThisActionLogin,
                  });
              },
            })
          );
        },
      },
      {
        key: 'renderContent',
        value: function (t) {
          module1848.CStyles();
          var n = this,
            o = this.state,
            l = o.loaded,
            s = o.productDetails,
            u = o.availableHeight,
            c = ReactNative.Dimensions.get('window').height;

          if (l) {
            var f = c - u - (null == t ? undefined : t.top) + module474.ms(7.5),
              p = f - module474.ms(50) - (null == t ? undefined : t.top) - module474.ms(20),
              v = p - module474.ms(55),
              x = c - u + (null == t ? undefined : t.top) + module474.ms(7.5);
            return React.default.createElement(
              module472.ParallaxScrollView,
              {
                onRef: function (t) {
                  n._scrollContent = t;
                },
                style: {
                  flexGrow: 0,
                },
                parallaxHeaderHeight: f,
                stickyHeaderHeight: module474.ms(50) + t.top,
                parallaxHeader: function () {
                  return n.renderImageArea(t);
                },
                stickyHeader: function (t) {
                  return n.renderHeaderInfo(t, v, p);
                },
                fixedHeader: function () {
                  return n.renderFixedHeader(t);
                },
                showsVerticalScrollIndicator: false,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    minHeight: x,
                  },
                },
                this.renderProductActionArea(),
                this.renderProductInfoArea(),
                l && this.renderSimilarProducts(null == s ? undefined : s.Semelhantes, module458.default.generic.howToWearIt),
                l && this.renderSimilarProducts(null == s ? undefined : s.Similares, module458.default.generic.alsoBought)
              )
            );
          }
        },
      },
      {
        key: 'renderFullScreenView',
        value: function (t) {
          var n,
            o = this,
            l = this.state,
            s = l.productDetails,
            u = l.selectedColor,
            c = l.availableHeight,
            f = module1848.CStyles();
          if (0 === c)
            return React.default.createElement(ReactNative.View, {
              style: f.availableHeightView,
            });
          var p =
            null == s
              ? undefined
              : null == (n = s.ProdutoVistasCores)
              ? undefined
              : n.find(function (t) {
                  return t.NumeroCor === u.NumeroCor;
                });
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                backgroundColor: 'black',
              },
            },
            React.default.createElement(module1849.default, {
              onChange: function (t) {
                o.currentIndex = t;
              },
              index: this.currentIndex,
              renderIndicator: function () {
                return React.default.createElement(ReactNative.View, null);
              },
              imageUrls:
                null == p
                  ? undefined
                  : p.Vistas.map(function (t) {
                      return {
                        url: t.srcimagem,
                      };
                    }),
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  o.setState({
                    fullScreenView: false,
                  });
                },
                style: [
                  f.imageFullScreenCrossContainer,
                  {
                    bottom: module474.ms(55) + t.bottom,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: f.fullScreenButtonIcon,
                },
                'X'
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1848.CStyles(),
            o = this.state.fullScreenView;
          return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (l) {
            return React.default.createElement(
              React.default.Fragment,
              null,
              React.default.createElement(ReactNative.StatusBar, {
                hidden: true,
              }),
              o
                ? t.renderFullScreenView(l)
                : React.default.createElement(
                    module472.Wrapper,
                    {
                      edges: ['bottom'],
                      style: n.root,
                    },
                    t.renderContent(l),
                    t.renderSizesBottomSheet(l),
                    t.renderColorsBottomSheet(l)
                  )
            );
          });
        },
      },
    ]);
    return F;
  })(React.Component),
  G = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      cartNumber: t.cartNumber,
    };
  })(H);

exports.default = G;
