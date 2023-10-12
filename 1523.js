var regeneratorRuntime = require('regenerator-runtime'),
  module20 = require('./20'),
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
    var o = I(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, c, u);
        else s[c] = t[c];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1524 = require('./1524'),
  module961 = require('./961'),
  module474 = require('./474'),
  module431 = require('./431'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1525 = require('./1525'),
  module1262 = require('./1262'),
  module482 = require('./482'),
  module1185 = require('./1185'),
  module1532 = require('./1532'),
  module1565 = require('./1565');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (I = function (t) {
    return t ? o : n;
  })(t);
}

function M(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function N(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      M(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      M(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function F() {
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

var z = function (t) {
    return "district_' + " + t;
  },
  j = function (t) {
    return "store_' + " + t.idLoja;
  },
  R = function (t) {
    return "store_' + " + t.idLoja;
  },
  J = function (t) {
    return "store_' + " + t.idPontoTransportadora;
  },
  G = function (t) {
    return "store_' + " + t.idPontoTransportadora;
  },
  U = module1524.CStyles(),
  W = (function (t) {
    module35.default(W, t);

    var module400 = W,
      I = F(),
      M = function () {
        var t,
          n = module34.default(module400);

        if (I) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function W(t) {
      var o, s;
      module24.default(this, W);
      (s = M.call(this, t)).card = null;

      s.focusListener = function () {};

      s.checkoutPayPalDirectSuccess = function () {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  s.props.navigation.navigate('Checkout');
                  s.setState({
                    showPostOrderSuccess: true,
                  });
                  return t.abrupt('return');

                case 4:
                case 'end':
                  return t.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      s.checkoutPayPalDirectCancel = function (t) {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  s.props.navigation.navigate('Checkout');
                  return t.abrupt('return');

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
      };

      s.checkoutCCSuccess = function (t, o, l, c) {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  s.props.navigation.navigate('Checkout');

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
      };

      s.checkoutCCCancel = function (t) {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  s.props.navigation.goBack();

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
      };

      s.state = {
        stepGenericVouchers: 1,
        stepLaCard: 1,
        loaded: false,
        showDiscountsBottomSheet: false,
        showMoreDeliveryAddresses: false,
        previousSelectedDeliveryAddressType: null,
        selectedDeliveryAddressType: null,
        showMoreDeliveryMethods: false,
        previousSelectedDeliveryMethod: null,
        selectedDeliveryMethod: null,
        selectedPaymentMethod: null,
        discountOptions: {},
        shippingOptions: [],
        addresses: null,
        deliveryOptions: [],
        paymentOptions: [],
        infoValues: [],
        districts: [],
        cart: s.cart,
        showMoreCartItems: false,
        card: {},
        showStoresBottomSheet: false,
        tempDistrict: null,
        selectedStore: null,
        showBoxDeliveryBottomSheet: false,
        tempBoxSearch: '',
        selectedBox: null,
        showPointDeliveryBottomSheet: false,
        tempPointSearch: '',
        selectedPoint: null,
        showLockerDeliveryBottomSheet: false,
        tempLockerSearch: '',
        selectedLocker: null,
        showPostCheckoutRender: false,
        mbwayPhoneNumber: null == (o = s.user) ? undefined : o.Telemovel,
        showPostOrderSuccess: false,
        showPromoCodeError: false,
        promoCode: '',
        selectedDiscount: null,
        selectedDiscounts: [],
        discountsAvailable: [],
        selectedLaCardDiscount: 0,
        applePayPayment: false,
        isAddingDiscount: false,
        tbName: '',
      };
      s.getCheckoutData = s.getCheckoutData.bind(module39.default(s));
      s.renderDiscountArea = s.renderDiscountArea.bind(module39.default(s));
      s.renderDiscountItem = s.renderDiscountItem.bind(module39.default(s));
      s.renderDiscountValesCampanhaItem = s.renderDiscountValesCampanhaItem.bind(module39.default(s));
      s.renderBottomArea = s.renderBottomArea.bind(module39.default(s));
      s.renderStoresBottomSheet = s.renderStoresBottomSheet.bind(module39.default(s));
      s.renderDistrictItem = s.renderDistrictItem.bind(module39.default(s));
      s.renderStoreItem = s.renderStoreItem.bind(module39.default(s));
      s.renderBoxItem = s.renderBoxItem.bind(module39.default(s));
      s.renderBoxDeliveryBottomSheet = s.renderBoxDeliveryBottomSheet.bind(module39.default(s));
      s.renderPointItem = s.renderPointItem.bind(module39.default(s));
      s.renderPointDeliveryBottomSheet = s.renderPointDeliveryBottomSheet.bind(module39.default(s));
      s.renderLockerItem = s.renderLockerItem.bind(module39.default(s));
      s.renderLockerDeliveryBottomSheet = s.renderLockerDeliveryBottomSheet.bind(module39.default(s));
      s.startPayment = s.startPayment.bind(module39.default(s));
      s.paymentOptionOnPress = s.paymentOptionOnPress.bind(module39.default(s));
      s.checkoutPayPalDirectCancel = s.checkoutPayPalDirectCancel.bind(module39.default(s));
      s.checkoutPayPalDirectSuccess = s.checkoutPayPalDirectSuccess.bind(module39.default(s));
      s.checkoutCCSuccess = s.checkoutCCSuccess.bind(module39.default(s));
      s.checkoutCCCancel = s.checkoutCCCancel.bind(module39.default(s));
      s.userAddressOptionOnPress = s.userAddressOptionOnPress.bind(module39.default(s));
      s.addressItemPressHandler = s.addressItemPressHandler.bind(module39.default(s));
      s.addressAreaTabPress = s.addressAreaTabPress.bind(module39.default(s));
      s.deliveryMethodsAreaTabPress = s.deliveryMethodsAreaTabPress.bind(module39.default(s));
      s.deliveryMethodItemPress = s.deliveryMethodItemPress.bind(module39.default(s));
      return s;
    }

    module25.default(W, [
      {
        key: 'giftOptions',
        get: function () {
          return this.props.giftOptions.value;
        },
      },
      {
        key: 'isDiscountApplied',
        get: function () {
          var t = this.appliedDiscounts();
          return !(null == t || !t.length);
        },
      },
      {
        key: 'canAddDiscount',
        get: function () {
          return true;
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
        key: 'cart',
        get: function () {
          return this.params.cart || [];
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'checkoutBottomSheetStatus',
        get: function () {
          return this.props.checkoutBottomSheetStatus.value || {};
        },
      },
      {
        key: 'laCard',
        get: function () {
          return this.props.user.value.NCartaoLanidor || '';
        },
      },
      {
        key: 'getDiscountName',
        value: function (t) {
          for (var n = this.state.discountOptions, o = 0; o < Object.keys(n).length; o++) {
            var s = Object.keys(n)[o];
            if (s == t) return Array.isArray(n[s]) ? n[s][0].Descricao : n[s].Descricao;
          }

          return '';
        },
      },
      {
        key: 'checkoutBottomSheetStatusChangeHandler',
        value: function (t, n) {
          var o = JSON.parse(JSON.stringify(this.checkoutBottomSheetStatus));
          o[t] = n;
          this.props.dispatch(module1224.setCheckoutBottomSheetStatus(o));
        },
      },
      {
        key: 'onBack',
        value: function () {
          var t = this.props.navigation;
          this.setState({
            isAddingDiscount: false,
            selectedDiscount: null,
            stepGenericVouchers: 1,
          });
          t.goBack();
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            o,
            s,
            l = this;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    if ('ios' != ReactNative.Platform.OS) {
                      c.next = 3;
                      break;
                    }

                    c.next = 3;
                    return regeneratorRuntime.default.awrap(this.isApplePaySupported());

                  case 3:
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(this.getCheckoutData());

                  case 5:
                    this.focusListener = this.props.navigation.addListener('focus', function () {
                      return regeneratorRuntime.default.async(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                t.next = 2;
                                return regeneratorRuntime.default.awrap(l.getCheckoutData());

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
                    });
                    s = this.state.addresses;
                    console.log('\ud83d\ude80 ~ file: index.tsx ~ line 242 ~ Checkout ~ componentDidMount ~ addresses', s);
                    this.setState({
                      tempLockerSearch: (null == s ? undefined : null == (t = s.Entrega) ? undefined : t.Localidade) || '',
                      tempPointSearch: (null == s ? undefined : null == (o = s.Entrega) ? undefined : o.Localidade) || '',
                    });
                    this.checkoutBottomSheetStatusChangeHandler('showPostCheckoutRender', true);

                  case 10:
                  case 'end':
                    return c.stop();
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
        key: 'isApplePaySupported',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(module1532.isApplePaySupported());

                  case 2:
                    t = o.sent;
                    this.setState({
                      isApplePaySupported: t,
                    });

                  case 4:
                  case 'end':
                    return o.stop();
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
        key: 'discountsAvailable',
        value: function () {
          var t = this.state.discountOptions;
          if (!Object.keys(t).length) return [];
          var n = [];
          Object.keys(t).forEach(function (o) {
            var s, l, c, u;
            if (!('ValesLACARD' === o && 0 == (null == t ? undefined : null == (s = t.ValesLACARD) ? undefined : s.QtdValesDisponiveis)))
              Array.isArray(t[o])
                ? n.push({
                    key: o,
                    discount: t[o],
                  })
                : (null != (l = t[o]) && l.ValorAplicado && (null == (c = t[o]) || !c.PercentagemAplicada || (null != (u = t[o]) && u.PercentagemAplicada))) ||
                  n.push({
                    key: o,
                    discount: t[o],
                  });
          });
          return n;
        },
      },
      {
        key: 'addDiscount',
        value: function () {
          var t = this,
            n = this.state,
            o = n.discountOptions,
            s = n.selectedDiscount,
            l = Object.keys(s)[0],
            c = JSON.parse(JSON.stringify(o));
          Object.keys(c).forEach(function (t) {
            if (t == l)
              if ('GiftCards' == t || 'ValesFuncionario' == t) {
                var n = 'GiftCards' == t ? 'Numero' : 'Codigo',
                  o = c[t].findIndex(function (o) {
                    return s[t][n] == o[n];
                  });
                if (-1 != o) c[t][o] = s[t];
                else c[t].push(s[t]);
              } else c[t] = s[t];
          });
          this.setState(
            {
              discountOptions: c,
              selectedDiscount: null,
            },
            function () {
              return t.getCheckoutData();
            }
          );
        },
      },
      {
        key: 'appliedDiscounts',
        value: function () {
          var t = this.state.discountOptions,
            n = [],
            o = JSON.parse(JSON.stringify(t));
          Object.keys(o).forEach(function (t) {
            if (Array.isArray(o[t]) && o[t].length) {
              for (var l = [], c = 0; c < o[t].length; c++) {
                var u = o[t][c];
                if (u.Codigo || u.Numero || (u.idVale && (u.ValorAplicado || u.PercentagemAplicada || u.Applied))) l.push(u);
              }

              o[t] = l;
              if (l.length) n.push(module47.default({}, t, o[t]));
            } else (o[t].selected || o[t].Codigo || o[t].ValorDescontar || o[t].PontosDescontados || o[t].PontosQuePodeDescontar) && n.push(module47.default({}, t, o[t]));
          });
          return n;
        },
      },
      {
        key: 'verifyAppliedDiscounts',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null,
            o = null;
          if (n)
            Object.keys(t).forEach(function (l) {
              if (l == n.key) o = module47.default({}, l, t[l]);
            });
          return o;
        },
      },
      {
        key: 'cancelDiscountAdding',
        value: function () {
          this.setState({
            isAddingDiscount: false,
            stepGenericVouchers: this.isDiscountApplied ? 2 : 1,
            selectedDiscount: null,
          });
        },
      },
      {
        key: 'getCheckoutData',
        value: function () {
          var t,
            module47,
            module24,
            module25,
            module39,
            module35,
            module37,
            module34,
            React,
            ReactNative,
            module400,
            module1524,
            module961,
            module474,
            T,
            A,
            b,
            O,
            B,
            V,
            L,
            I,
            M,
            F,
            z,
            j,
            R,
            J,
            G,
            U,
            W = this;
          return regeneratorRuntime.default.async(
            function (H) {
              for (;;)
                switch ((H.prev = H.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.navigation;
                    module25 = this.state;
                    module39 = module25.selectedDeliveryAddressType;
                    module35 = module25.selectedStore;
                    module37 = module25.selectedPoint;
                    module34 = module25.selectedBox;
                    React = module25.selectedLocker;
                    ReactNative = module25.selectedDeliveryMethod;
                    module400 = module25.selectedDiscount;
                    module1524 = module25.discountOptions;
                    module961 = module25.selectedLaCardDiscount;
                    H.prev = 2;
                    module47(module1224.setLoader(true));
                    module474 = {
                      Produtos: this.state.cart,
                      OpcaoEnvioSeleccionado: module39 ? module39.opcao : '',
                      EnvioIDLojaEntrega: 'loja' === (null == module39 ? undefined : module39.opcao) && module35 ? module35.idLoja : '',
                      EnvioIDPontoEntrega: 'pontoentrega' === (null == module39 ? undefined : module39.opcao) && module37 ? module37.idPontoTransportadora : '',
                      EnvioIDBoxEntrega: 'box' === (null == module39 ? undefined : module39.opcao) && module34 ? module34.idLoja : '',
                      EnvioIDCacifosEntrega: 'cacifos' === (null == module39 ? undefined : module39.opcao) && React ? React.idPontoTransportadora : '',
                      EnvioTransportadora: module37 ? module37.Transportadora : '',
                      MensagemOferta: this.messageValue ? this.messageValue : '',
                      Expedicao: {
                        idSeleccionado: ReactNative ? Number(ReactNative.idTipo) : 0,
                      },
                    };

                    if ((T = JSON.parse(JSON.stringify(this.appliedDiscounts(module1524)))).length) {
                      A = Object.assign({}, ...module20.default(T));
                      module474.Descontos = A;
                    }

                    if (module961)
                      module474.Descontos = N(
                        N({}, module474.Descontos),
                        {},
                        {
                          ValesLACARD: {
                            QtdValesDescontar: module961,
                          },
                        }
                      );
                    H.next = 10;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.getCheckoutData(this.user.IdCliente),
                        data: module474,
                      })
                    );

                  case 10:
                    if ((b = H.sent).ok) {
                      B = b.data;
                      V = B.Descontos;
                      L = B.Expedicao;
                      I = B.OpcoesEntrega;
                      M = B.Pagamentos;
                      F = B.Produtos;
                      z = B.Totais;
                      j = B.Moradas;
                      R = null;
                      if (
                        V &&
                        (R =
                          null == (J = V.GiftCards)
                            ? undefined
                            : J.find(function (t) {
                                return !!t.Numero && !t.ValorDescontar;
                              }))
                      )
                        module400 = {
                          GiftCards: R,
                        };
                      G =
                        null == I
                          ? undefined
                          : I.find(function (t) {
                              return 'loja' === t.opcao;
                            });
                      U = module20.default(
                        new Set(
                          null == G
                            ? undefined
                            : null == (O = G.lojas)
                            ? undefined
                            : O.filter(function (t) {
                                return t.Distrito;
                              }).map(function (t) {
                                return t.Distrito;
                              })
                        )
                      );
                      this.setState(
                        {
                          discountOptions: V,
                          shippingOptions: L.Opcoes,
                          deliveryOptions: I,
                          paymentOptions: M,
                          cart: F,
                          infoValues: z,
                          addresses: j,
                          loaded: true,
                          isAddingDiscount: !!module400,
                          selectedDiscount: module400,
                          districts: U,
                        },
                        function () {
                          if (!module39)
                            W.setState({
                              selectedDeliveryAddressType: {
                                opcao: 'morada',
                                morada: j.Entrega,
                              },
                            });
                          if (!ReactNative)
                            W.setState({
                              selectedDeliveryMethod: L.Opcoes[null == L ? undefined : L.idSeleccionado],
                            });
                          W.setState({
                            stepGenericVouchers: W.isDiscountApplied || module400 ? 2 : 1,
                          });
                        }
                      );
                      module47(module1224.setCartNumber(F.length));

                      if (!b.data.ResultadoActualizacao) {
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: b.data.ResultadoMensagem[0],
                        });
                        this.setState({
                          selectedDiscount: null,
                        });
                      }
                    } else {
                      if (401 !== b.status) {
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                        module24.goBack();
                      }

                      this.setState({
                        selectedDiscount: null,
                      });
                    }

                    H.next = 18;
                    break;

                  case 14:
                    H.prev = 14;
                    H.t0 = H.catch(2);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 18:
                    H.prev = 18;
                    module47(module1224.setLoader(false));
                    return H.finish(18);

                  case 21:
                  case 'end':
                    return H.stop();
                }
            },
            null,
            this,
            [[2, 14, 18, 21]],
            Promise
          );
        },
      },
      {
        key: 'checkoutPayPalDirect',
        value: function (t) {
          var o,
            s = this;
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    o = this.props;
                    o.navigation.navigate('WebPayment', {
                      paymentType: 'PayPal',
                      approvalUrl: t,
                      onCancel: function () {
                        return s.checkoutPayPalDirectCancel();
                      },
                      onSuccess: function (t) {
                        return s.checkoutPayPalDirectSuccess();
                      },
                    });

                  case 2:
                  case 'end':
                    return n.stop();
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
        key: 'verifyPayment',
        value: function (t) {
          var o = this,
            s = this.props,
            l = s.dispatch,
            c = s.navigation,
            u = s.loader,
            p = this.state.isMBWay,
            f = 0,
            y = p ? 300 : 30;
          if (!u.value) l(module1224.setLoader(true));
          !(function s() {
            var u, h, v, module400;
            return regeneratorRuntime.default.async(
              function (P) {
                for (;;)
                  switch ((P.prev = P.next)) {
                    case 0:
                      u = p ? module1226.Endpoints.payMBWayStatus(t.checkMBWAYstatus) : module1226.Endpoints.payCCStatus(t);
                      P.next = 3;
                      return regeneratorRuntime.default.awrap(
                        module1226.API.get({
                          url: u,
                          displayLoader: false,
                        })
                      );

                    case 3:
                      if (!(h = P.sent).ok || !h.data.success) {
                        P.next = 9;
                        break;
                      }

                      o.setState({
                        showPostCheckoutRender: false,
                        showPostOrderSuccess: true,
                      });
                      l(module1224.setLoader(false));
                      P.next = 32;
                      break;

                    case 9:
                      if (false !== h.data.success || 'WAITING' != h.data.message) {
                        P.next = 29;
                        break;
                      }

                      if (!(++f <= y)) {
                        P.next = 15;
                        break;
                      }

                      setTimeout(function () {
                        var t, u;
                        return regeneratorRuntime.default.async(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  n.prev = 0;
                                  l(module1224.setLoader(false));
                                  s();
                                  n.next = 14;
                                  break;

                                case 5:
                                  n.prev = 5;
                                  n.t0 = n.catch(0);
                                  u = module458.default.error.generic;
                                  if (null != h && null != (t = h.data) && t.message) u = h.data.message;
                                  module472.DropDown.alert({
                                    type: 'error',
                                    title: module458.default.generic.oops,
                                    message: u,
                                  });
                                  o.setState({
                                    showPostCheckoutRender: false,
                                  });
                                  c.goBack();
                                  l(module1224.setLoader(false));
                                  return n.abrupt('return');

                                case 14:
                                case 'end':
                                  return n.stop();
                              }
                          },
                          null,
                          null,
                          [[0, 5]],
                          Promise
                        );
                      }, 1e3);
                      P.next = 27;
                      break;

                    case 15:
                      if (401 === h.status) {
                        P.next = 22;
                        break;
                      }

                      module400 = module458.default.error.generic;
                      if (null != h && null != (v = h.data) && v.message) module400 = h.data.message;
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module400,
                      });
                      o.setState({
                        showPostCheckoutRender: false,
                      });
                      l(module1224.setLoader(false));
                      return P.abrupt('return');

                    case 22:
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });
                      o.setState({
                        showPostCheckoutRender: false,
                      });
                      l(module1224.setLoader(false));
                      c.goBack();
                      return P.abrupt('return');

                    case 27:
                      P.next = 32;
                      break;

                    case 29:
                      c.goBack();
                      l(module1224.setLoader(false));
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: h.data.message,
                      });

                    case 32:
                    case 'end':
                      return P.stop();
                  }
              },
              null,
              null,
              null,
              Promise
            );
          })();
        },
      },
      {
        key: 'checkoutCC',
        value: function (t) {
          var o,
            s,
            l,
            c,
            u = this;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    o = this.props;
                    s = o.navigation;
                    l = t.split('noperacao=')[1];

                    c = function () {
                      return regeneratorRuntime.default.async(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                s.navigate('Checkout');
                                u.setState(
                                  {
                                    showPostCheckoutRender: true,
                                  },
                                  function () {
                                    return u.verifyPayment(l);
                                  }
                                );
                                return t.abrupt('return');

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
                    };

                    s.navigate('WebPayment', {
                      paymentType: 'CC',
                      approvalUrl: t,
                      onCancel: function () {
                        return u.checkoutCCCancel();
                      },
                      onSuccess: function (t) {
                        return c();
                      },
                    });

                  case 4:
                  case 'end':
                    return p.stop();
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
        key: 'checkoutStripeApplePay',
        value: function (t) {
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    this.setState({
                      stripeData: t,
                    });

                  case 1:
                  case 'end':
                    return n.stop();
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
        key: 'startPayment',
        value: function () {
          var t,
            module47,
            module24,
            module25,
            module39,
            module35,
            module37,
            module34,
            React,
            ReactNative,
            module400,
            module1524,
            module961,
            x,
            module431,
            A,
            b,
            O,
            B,
            V,
            L,
            I,
            M,
            F,
            z,
            j,
            R,
            J,
            G = this;
          return regeneratorRuntime.default.async(
            function (U) {
              for (;;)
                switch ((U.prev = U.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module47 = this.state;
                    module24 = module47.selectedPaymentMethod;
                    module25 = module47.selectedDeliveryAddressType;
                    module39 = module47.selectedStore;
                    module35 = module47.selectedPoint;
                    module37 = module47.selectedBox;
                    module34 = module47.selectedLocker;
                    React = module47.selectedDeliveryMethod;
                    ReactNative = module47.mbwayPhoneNumber;
                    module400 = module47.selectedLaCardDiscount;
                    module1524 = module47.discountOptions;
                    module961 = module47.tbName;
                    U.prev = 2;
                    module431 = {
                      Produtos: this.state.cart,
                      OpcaoEnvioSeleccionado: module25 ? module25.opcao : '',
                      EnvioIDLojaEntrega: 'loja' === (null == module25 ? undefined : module25.opcao) && module39 ? module39.idLoja : '',
                      EnvioIDPontoEntrega: 'pontoentrega' === (null == module25 ? undefined : module25.opcao) && module35 ? module35.idPontoTransportadora : '',
                      EnvioIDBoxEntrega: 'box' === (null == module25 ? undefined : module25.opcao) && module37 ? module37.idLoja : '',
                      EnvioIDCacifosEntrega: 'cacifos' === (null == module25 ? undefined : module25.opcao) && module34 ? module34.idPontoTransportadora : '',
                      EnvioTransportadora: module35 ? module35.Transportadora : '',
                      MensagemOferta: this.messageValue ? this.messageValue : '',
                      Pagamentos: {
                        Seleccionado: null == module24 ? undefined : module24.seleccionar,
                      },
                      Expedicao: {
                        idSeleccionado: React ? React.idTipo : '',
                      },
                    };
                    if ('MBWAY' == (null == module24 ? undefined : module24.seleccionar)) module431.Pagamentos.TelemovelMBWAY = ReactNative;
                    if ('TB' == (null == module24 ? undefined : module24.seleccionar)) module431.Pagamentos.TitularContaTB = module961;

                    if ('morada' === (null == module25 ? undefined : module25.opcao)) {
                      A = module25.morada;
                      b = A.Nome;
                      O = A.Morada;
                      B = A.Localidade;
                      V = A.CodPostal;
                      L = A.idTipoPais;
                      I = this.user;
                      M = I.Telemovel;
                      F = I.NContrib;
                      module431.Moradas = {
                        Facturacao: {
                          Nome: b,
                          Morada: O,
                          Localidade: B,
                          CodPostal: V,
                          Telemovel: M || '',
                          NIF: F || '',
                          idTipoPais: L,
                        },
                        Entrega: {
                          Nome: b,
                          Morada: O,
                          Localidade: B,
                          CodPostal: V,
                          idTipoPais: L,
                        },
                      };
                    }

                    if ((z = JSON.parse(JSON.stringify(this.appliedDiscounts(module1524)))).length) {
                      j = Object.assign({}, ...module20.default(z));
                      module431.Descontos = j;
                    }

                    if (module400)
                      module431.Descontos = N(
                        N({}, module431.Descontos),
                        {},
                        {
                          ValesLACARD: {
                            QtdValesDescontar: module400,
                          },
                        }
                      );
                    t(module1224.setLoader(true));
                    U.next = 13;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.checkoutPayment(this.user.IdCliente),
                        data: module431,
                        axiosConfig: {
                          callback: this.startPayment,
                          handleError: true,
                        },
                      })
                    );

                  case 13:
                    if (!(R = U.sent).ok || (null != R && null != (x = R.data) && x.message)) {
                      U.next = 25;
                      break;
                    }

                    if ('CC' == (null == module24 ? undefined : module24.seleccionar) || 'APPLEPAY' == (null == module24 ? undefined : module24.seleccionar) || R.data.success) {
                      U.next = 18;
                      break;
                    }

                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: R.data.message,
                    });
                    return U.abrupt('return');

                  case 18:
                    if ('PAYPAL' === (null == module24 ? undefined : module24.seleccionar)) this.checkoutPayPalDirect(R.data.paypalurl);
                    if ('CC' === (null == module24 ? undefined : module24.seleccionar)) this.checkoutCC(R.data);
                    if ('APPLEPAY' === (null == module24 ? undefined : module24.seleccionar))
                      this.setState(
                        {
                          applePayPayment: true,
                        },
                        function () {
                          G.checkoutStripeApplePay(R.data);
                        }
                      );
                    if ('MBWAY' === (null == module24 ? undefined : module24.seleccionar))
                      this.setState(
                        {
                          isMBWay: true,
                          showPostCheckoutRender: true,
                        },
                        function () {
                          G.verifyPayment(R.data);
                        }
                      );
                    if (!('TB' !== (null == module24 ? undefined : module24.seleccionar) && 'MB' !== (null == module24 ? undefined : module24.seleccionar)))
                      this.setState({
                        showPostOrderSuccess: true,
                      });
                    U.next = 27;
                    break;

                  case 25:
                    if (!(401 === R.status || (null != R && null != (J = R.data) && J.message)))
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: R.data.message,
                    });

                  case 27:
                    U.next = 32;
                    break;

                  case 29:
                    U.prev = 29;
                    U.t0 = U.catch(2);
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 32:
                    U.prev = 32;
                    t(module1224.setLoader(false));
                    return U.finish(32);

                  case 35:
                  case 'end':
                    return U.stop();
                }
            },
            null,
            this,
            [[2, 29, 32, 35]],
            Promise
          );
        },
      },
      {
        key: 'checkApplePay',
        value: function () {
          var t, o, s, l;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props.dispatch;
                    c.prev = 1;
                    t(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.payAppleStatus(this.user.IdCliente),
                        data: {},
                        axiosConfig: {
                          handleError: false,
                        },
                      })
                    );

                  case 5:
                    if ((s = c.sent).ok && null != s && null != (o = s.data) && o.success)
                      this.setState({
                        showPostCheckoutRender: false,
                        showPostOrderSuccess: true,
                        applePayPayment: false,
                        stripeData: null,
                      });
                    else
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: (null == s ? undefined : null == (l = s.data) ? undefined : l.message) || module458.default.payments.errorPaymentMethod,
                      });
                    c.next = 12;
                    break;

                  case 9:
                    c.prev = 9;
                    c.t0 = c.catch(1);
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 12:
                    c.prev = 12;
                    t(module1224.setLoader(false));
                    return c.finish(12);

                  case 15:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[1, 9, 12, 15]],
            Promise
          );
        },
      },
      {
        key: 'deleteAppliedDiscount',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null,
            o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null,
            s = this.state.discountOptions,
            l = JSON.parse(JSON.stringify(s));

          if ('ValesFuncionario' == o || 'GiftCards' == o || 'ValesCampanhasDescontos' == o) {
            var c = l[o].findIndex(function (t) {
              return t[Object.keys(n)[0]] == n[Object.keys(n)[0]];
            });
            if (-1 != c) l[o][c] = {};
          } else l[o] = {};

          this.setState(
            {
              stepGenericVouchers: 1,
              selectedDiscount: null,
              discountOptions: l,
            },
            function () {
              return t.getCheckoutData();
            }
          );
        },
      },
      {
        key: 'addressItemPressHandler',
        value: function (t) {
          var n = this,
            o = this.state,
            s = o.selectedDeliveryAddressType,
            l = o.selectedDeliveryMethod,
            c = t.opcao;
          if ('loja' === c)
            this.setState({
              selectedDeliveryAddressType: t,
              previousSelectedDeliveryAddressType: s,
              previousSelectedDeliveryMethod: l,
              showStoresBottomSheet: true,
            });
          else if ('box' === c)
            this.setState({
              selectedDeliveryAddressType: t,
              previousSelectedDeliveryAddressType: s,
              previousSelectedDeliveryMethod: l,
              showBoxDeliveryBottomSheet: true,
            });
          else if ('pontoentrega' === c)
            this.setState({
              selectedDeliveryAddressType: t,
              previousSelectedDeliveryAddressType: s,
              previousSelectedDeliveryMethod: l,
              showPointDeliveryBottomSheet: true,
            });
          else if ('cacifos' === c)
            this.setState({
              selectedDeliveryAddressType: t,
              previousSelectedDeliveryAddressType: s,
              previousSelectedDeliveryMethod: l,
              showLockerDeliveryBottomSheet: true,
            });
          else if ('morada' === c)
            this.setState(
              {
                selectedDeliveryAddressType: t,
                previousSelectedDeliveryAddressType: s,
                previousSelectedDeliveryMethod: l,
              },
              function () {
                return n.getCheckoutData();
              }
            );
          this.setState({
            showMoreDeliveryAddresses: false,
          });
        },
      },
      {
        key: 'userAddressOptionOnPress',
        value: function () {
          var t = this,
            n = this.state.addresses;
          this.setState(
            {
              selectedDeliveryAddressType: N(
                {
                  opcao: 'morada',
                },
                n.Entrega
              ),
            },
            function () {
              return t.getCheckoutData();
            }
          );
        },
      },
      {
        key: 'addressAreaTabPress',
        value: function () {
          this.setState({
            showMoreDeliveryAddresses: !this.state.showMoreDeliveryAddresses,
          });
        },
      },
      {
        key: 'deliveryMethodItemPress',
        value: function (t) {
          var n = this;
          this.setState(
            {
              selectedDeliveryMethod: t,
              showMoreDeliveryMethods: false,
            },
            function () {
              return n.getCheckoutData();
            }
          );
        },
      },
      {
        key: 'deliveryMethodsAreaTabPress',
        value: function () {
          this.setState({
            showMoreDeliveryMethods: !this.state.showMoreDeliveryMethods,
          });
        },
      },
      {
        key: 'paymentOptionOnPress',
        value: function (t) {
          var n = this;
          this.setState(
            {
              selectedPaymentMethod: t,
            },
            function () {
              return n.startPayment;
            }
          );
        },
      },
      {
        key: 'onMBWayPhoneChange',
        value: function (t) {
          this.setState({
            mbwayPhoneNumber: t,
          });
        },
      },
      {
        key: 'renderStripeHandle',
        value: function () {
          var t = this,
            n = this.state.infoValues,
            o = n.PortesEnvio;
          return React.default.createElement(module1565.default, {
            onIsSupported: function (n) {
              t.setState({
                applePaySupported: n,
              });
            },
            showPayment: this.state.applePayPayment,
            stripeData: this.state.stripeData,
            shippingCost: o > 0 ? o.toFixed(2) : '0.0',
            userInfo: this.user,
            onPresentApplePay: {},
            onSucessPayment: function () {
              return t.checkApplePay();
            },
            onFailPayment: function () {
              return t.checkApplePay();
            },
          });
        },
      },
      {
        key: 'renderDiscountArea',
        value: function () {
          var t = module1524.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  t.titleContainer,
                  {
                    marginBottom: module474.ms(10),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.titleText,
                    {
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                module458.default.generic.enjoyYourDiscounts.toUpperCase()
              )
            ),
            this.renderAreaAddedDiscounts(),
            this.renderAddDiscountButton(),
            this.renderGenericDiscounts(),
            this.renderDiscountLaCard()
          );
        },
      },
      {
        key: 'renderAddDiscountButton',
        value: function () {
          var t = this;
          return this.canAddDiscount
            ? React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: U.addDiscountButton,
                  onPress: function () {
                    return t.setState({
                      showDiscountsBottomSheet: true,
                    });
                  },
                },
                React.default.createElement(module472.Icon, {
                  name: 'add-small',
                  size: module474.ms(20),
                  style: {
                    color: module474.Color.black,
                  },
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: U.addDiscountText,
                  },
                  module458.default.payments.addDiscount.toUpperCase()
                )
              )
            : null;
        },
      },
      {
        key: 'renderAddedDiscount',
        value: function (t, n, o, s) {
          var l = this;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  paddingHorizontal: module474.ms(20),
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    U.textRow,
                    {
                      marginTop: module474.ms(5),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      U.text,
                      {
                        color: module474.Color.darkGray,
                      },
                    ],
                  },
                  t
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    U.textRow,
                    {
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: U.text,
                  },
                  module458.default.payments.discountApplied
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      U.text,
                      {
                        color: module474.Color.red,
                      },
                    ],
                  },
                  n
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: U.textRow,
                },
                React.default.createElement(ReactNative.Text, {
                  style: U.text,
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      return l.deleteAppliedDiscount(o, s);
                    },
                    style: [
                      U.text,
                      {
                        fontSize: module474.FontSize.xxs,
                        color: module474.Color.lightGray,
                      },
                    ],
                  },
                  module458.default.generic.delete.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderAreaAddedDiscounts',
        value: function () {
          var t = this,
            n = this.state.discountOptions,
            o = JSON.parse(JSON.stringify(n));
          return Object.keys(o).map(function (n) {
            var s = n,
              l = 'GiftCards' == s,
              c = 'ValesFuncionario' == s,
              u = 'ValesCampanhasDescontos' == s,
              p = o[s];
            if ('ValesLACARD' == s) return null;

            if (l || c || u || (null != p && p.ValorAplicado) || (null != p && p.PercentagemAplicada)) {
              var f = null,
                module34 = t.getDiscountName(s);
              if (l || c || u)
                return p.map(function (n) {
                  if ((null != n && n.ValorAplicado) || (null != n && n.PercentagemAplicada) || n.ValorDescontar) {
                    if (null != n && n.PercentagemAplicada) f = (null == n ? undefined : n.PercentagemAplicada) + '%';
                    if (null != n && n.ValorAplicado) f = (null == n ? undefined : n.ValorAplicado) + ' \u20ac';
                    if (n.ValorDescontar) f = (null == n ? undefined : n.ValorDescontar) + ' \u20ac';
                    module34 = n.Codigo ? module34 + '-' + n.Codigo : module34;
                    return t.renderAddedDiscount(module34, f, n, s);
                  }
                });
              else {
                if (null != p && p.PercentagemAplicada) f = (null == p ? undefined : p.PercentagemAplicada) + '%';
                if (null != p && p.ValorAplicado) f = (null == p ? undefined : p.ValorAplicado) + ' \u20ac';
                return t.renderAddedDiscount(module34, f, p, s);
              }
            }
          });
        },
      },
      {
        key: 'renderUnder25',
        value: function () {
          var t = this,
            n = this.props.navigation,
            o = this.state.selectedDiscount,
            s = module1524.CStyles(),
            l = null,
            c = '';

          if (o) {
            if (o) {
              l = Object.keys(o)[0];
              c = this.getDiscountName(l);
            }

            return o && 'Under25' == l
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: s.iconEndWrapper,
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'delete-cross-1',
                      size: module474.FontSize.m,
                      onPress: function () {
                        return t.cancelDiscountAdding();
                      },
                    })
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: s.lightText,
                    },
                    c
                  ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return n.navigate('LanidorCard', {
                          fromCheckout: true,
                        });
                      },
                      style: s.under25Area,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          s.lightText,
                          {
                            fontSize: module474.FontSize.s,
                            paddingLeft: module474.ms(5),
                          },
                        ],
                      },
                      module458.default.payments.under25Text
                    ),
                    React.default.createElement(module472.Icon, {
                      name: 'Seta-perfil1',
                      size: module474.ms(20),
                      style: {
                        marginLeft: module474.ms(20),
                      },
                    })
                  )
                )
              : undefined;
          } else return null;
        },
      },
      {
        key: 'renderProdutosPontosLaCard',
        value: function () {
          var t,
            n,
            o = this,
            l = this.state.selectedDiscount,
            c = null,
            u = null,
            p = '',
            f = module458.default.payments.applyPoints.toUpperCase();

          if (l) {
            c = Object.keys(l)[0];
            u = l[c];
            u = Array.isArray(u) ? JSON.parse(JSON.stringify(u[0])) : JSON.parse(JSON.stringify(u));
            p = this.getDiscountName(c);
          }

          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: U.iconEndWrapper,
              },
              React.default.createElement(module472.Icon, {
                name: 'delete-cross-1',
                size: module474.FontSize.m,
                onPress: function () {
                  return o.cancelDiscountAdding();
                },
              })
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: U.lightText,
              },
              p
            ),
            React.default.createElement(ReactNative.TextInput, {
              style: [U.textInputGiftContainer, {}],
              value: null == (t = u) ? undefined : t.PontosDescontados,
              keyboardType: 'numeric',
              placeholder: 'MAX ' + (null == (n = u) ? undefined : n.PontosQuePodeDescontar.toString()),
              onChangeText: function (t) {
                var n = JSON.parse(JSON.stringify(u));
                n.PontosDescontados = t;
                o.setState({
                  selectedDiscount: module47.default({}, c, n),
                });
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: [
                  U.button,
                  {
                    marginTop: module474.ms(12.5),
                  },
                ],
                onPress: function () {
                  return o.addDiscount();
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: U.buttonText,
                },
                f
              )
            )
          );
        },
      },
      {
        key: 'renderGenericDiscounts',
        value: function () {
          var t,
            n,
            o,
            l,
            c,
            u,
            p,
            f = this,
            y = this.state,
            D = y.stepGenericVouchers,
            P = y.showPromoCodeError,
            k = y.selectedDiscount,
            T = y.isAddingDiscount,
            E = module458.default.payments.applyCode.toUpperCase(),
            w = '',
            A = null,
            b = null,
            O = false,
            B = false,
            V = false,
            L = false;

          if (k) {
            A = Object.keys(k)[0];
            B = 'Credito' == A;
            O = 'GiftCards' == A;
            V = 'ProdutosPontosLACARD' == A;
            L = 'Under25' == A;
            b = k[A];
            b = Array.isArray(b) ? JSON.parse(JSON.stringify(b[0])) : JSON.parse(JSON.stringify(b));
            w = this.getDiscountName(A);
          }

          if (B) {
            E = module458.default.payments.applyCredit.toUpperCase();
            w = module458.default.payments.credit;
          }

          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  U.standardContainer,
                  {
                    paddingHorizontal: module474.ms(20),
                  },
                ],
              },
              this.renderUnder25(),
              !!V && 2 === D && T && k && this.renderProdutosPontosLaCard(),
              !L &&
                !V &&
                !O &&
                2 === D &&
                T &&
                k &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: U.iconEndWrapper,
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'delete-cross-1',
                      size: module474.FontSize.m,
                      onPress: function () {
                        return f.cancelDiscountAdding();
                      },
                    })
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [U.lightText],
                    },
                    w
                  ),
                  React.default.createElement(ReactNative.TextInput, {
                    style: U.textInputContainer,
                    value: (null == (t = b) ? undefined : t.Codigo) || (null == (n = b) ? undefined : n.ValorDescontar),
                    placeholder: B ? b.MaximoPermitido.toString() + ' \u20ac' : null,
                    onChangeText: function (t) {
                      var n = JSON.parse(JSON.stringify(b));
                      if (B) n.ValorDescontar = t;
                      else n.Codigo = t;
                      f.setState({
                        selectedDiscount: module47.default({}, A, n),
                      });
                    },
                  }),
                  P &&
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: U.errorText,
                      },
                      module458.default.payments.errorPromoCode
                    ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [
                        U.button,
                        {
                          marginTop: module474.ms(12.5),
                        },
                      ],
                      onPress: function () {
                        return f.addDiscount();
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: U.buttonText,
                      },
                      E
                    )
                  )
                ),
              O &&
                2 === D &&
                T &&
                k &&
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: U.iconEndWrapper,
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'delete-cross-1',
                      size: module474.FontSize.m,
                      onPress: function () {
                        return f.cancelDiscountAdding();
                      },
                    })
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flexDirection: 'row',
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          flex: 0.7,
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: U.lightText,
                        },
                        module458.default.payments.giftNumber
                      ),
                      React.default.createElement(ReactNative.TextInput, {
                        style: [U.textInputGiftContainer, {}],
                        value: (null == (o = b) ? undefined : o.Numero) || '',
                        onChangeText: function (t) {
                          var n = JSON.parse(JSON.stringify(b));
                          n.Numero = t;
                          f.setState({
                            selectedDiscount: module47.default({}, A, n),
                          });
                        },
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: U.giftPinContainer,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: U.lightText,
                        },
                        module458.default.payments.giftPin
                      ),
                      React.default.createElement(ReactNative.TextInput, {
                        style: U.textInputGiftContainer,
                        value: (null == (l = b) ? undefined : l.PinFactura) || '',
                        onChangeText: function (t) {
                          var n = JSON.parse(JSON.stringify(b));
                          n.PinFactura = t;
                          f.setState({
                            selectedDiscount: module47.default({}, A, n),
                          });
                        },
                      })
                    ),
                    (null == (c = b) ? undefined : c.ValorDisponivel) &&
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: U.giftValueContainer,
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: U.lightText,
                          },
                          module458.default.payments.giftValue
                        ),
                        React.default.createElement(ReactNative.TextInput, {
                          style: [U.textInputGiftContainer, {}],
                          value: null == (u = b) ? undefined : u.ValorDescontar,
                          placeholder: null == (p = b) ? undefined : p.ValorDisponivel.toString(),
                          onChangeText: function (t) {
                            var n = JSON.parse(JSON.stringify(b));
                            n.ValorDescontar = t;
                            f.setState({
                              selectedDiscount: module47.default({}, A, n),
                            });
                          },
                        })
                      )
                  ),
                  P &&
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: U.errorText,
                      },
                      module458.default.payments.errorPromoCode
                    ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: [
                        U.button,
                        {
                          marginTop: module474.ms(12.5),
                        },
                      ],
                      onPress: function () {
                        return f.addDiscount();
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: U.buttonText,
                      },
                      E
                    )
                  )
                )
            )
          );
        },
      },
      {
        key: 'renderDiscountLaCard',
        value: function () {
          var t,
            n,
            o,
            s,
            l,
            c,
            u = this,
            p = module1524.CStyles(),
            f = this.state,
            y = f.selectedLaCardDiscount,
            D = f.discountOptions,
            C = 0,
            k = 0,
            T = 0,
            E = 0,
            w = (null == D ? undefined : null == (t = D.ValesLACARD) ? undefined : t.QtdValesDisponiveis) || 0,
            A = (null == D ? undefined : null == (n = D.ValesLACARD) ? undefined : n.QtdValesDescontar) || 0,
            O = null == D ? undefined : null == (o = D.ValesLACARD) ? undefined : o.PontosDisponiveis;

          if (null != D && D.ValesLACARD) {
            C = 12e3 - (k = null == D ? undefined : null == (s = D.ValesLACARD) ? undefined : s.PontosDisponiveis);
            T = null == D ? undefined : null == (l = D.ValesLACARD) ? undefined : l.ValorPorVale;
            E = null == D ? undefined : null == (c = D.ValesLACARD) ? undefined : c.ValorAplicado;
            return y && A > 0
              ? React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        paddingHorizontal: module474.ms(20),
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          p.titleText,
                          {
                            marginTop: module474.ms(20),
                            marginBottom: module474.ms(5),
                          },
                        ],
                      },
                      module458.default.formatString(module458.default.profile.memberCardAdvantages, 'CARD')
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          p.textRow,
                          {
                            marginTop: module474.ms(10),
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: p.text,
                        },
                        module458.default.payments.discountApplied
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            p.text,
                            {
                              color: module474.Color.red,
                            },
                          ],
                        },
                        module1262.priceFormat(E)
                      )
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [p.textRow],
                      },
                      React.default.createElement(ReactNative.Text, {
                        style: p.text,
                      }),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          onPress: function () {
                            u.setState(
                              {
                                selectedLaCardDiscount: null,
                              },
                              function () {
                                return u.getCheckoutData();
                              }
                            );
                          },
                          style: [
                            p.text,
                            {
                              fontSize: module474.FontSize.xxs,
                              color: module474.Color.lightGray,
                            },
                          ],
                        },
                        module458.default.generic.delete.toUpperCase()
                      )
                    ),
                    A < w
                      ? React.default.createElement(
                          ReactNative.View,
                          null,
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [
                                p.titleText,
                                {
                                  marginTop: module474.ms(20),
                                  marginBottom: module474.ms(5),
                                  fontFamily: module474.FontFamily.bold,
                                },
                              ],
                            },
                            module458.default.formatString(module458.default.profile.memberCardAdvantages, 'CARD')
                          ),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [
                                p.lightText,
                                {
                                  fontSize: module474.FontSize.m,
                                },
                              ],
                            },
                            module458.default.profile.useDiscountVouchersForThisPurchase
                          ),
                          React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                return u.setState(
                                  {
                                    selectedLaCardDiscount: y + 1,
                                  },
                                  function () {
                                    return u.getCheckoutData();
                                  }
                                );
                              },
                              style: [
                                p.clickableArea,
                                {
                                  alignItems: 'center',
                                },
                              ],
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [
                                  p.titleText,
                                  {
                                    textAlign: 'center',
                                  },
                                ],
                              },
                              module458.default.payments.apply,
                              module1262.priceFormat(T)
                            )
                          )
                        )
                      : null
                  )
                )
              : w
              ? React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        paddingHorizontal: module474.ms(20),
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          p.titleText,
                          {
                            marginTop: module474.ms(20),
                            marginBottom: module474.ms(5),
                            fontFamily: module474.FontFamily.bold,
                          },
                        ],
                      },
                      module458.default.formatString(module458.default.profile.memberCardAdvantages, 'CARD')
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          p.lightText,
                          {
                            fontSize: module474.FontSize.m,
                          },
                        ],
                      },
                      module458.default.profile.useDiscountVouchersForThisPurchase
                    ),
                    React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          return u.setState(
                            {
                              selectedLaCardDiscount: 1,
                            },
                            function () {
                              return u.getCheckoutData();
                            }
                          );
                        },
                        style: [
                          p.clickableArea,
                          {
                            alignItems: 'center',
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            p.titleText,
                            {
                              textAlign: 'center',
                            },
                          ],
                        },
                        module458.default.payments.apply,
                        module1262.priceFormat(T)
                      )
                    )
                  )
                )
              : React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingHorizontal: module474.ms(20),
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        p.titleText,
                        {
                          marginTop: module474.ms(20),
                          marginBottom: module474.ms(5),
                          fontFamily: module474.FontFamily.bold,
                        },
                      ],
                    },
                    module458.default.formatString(module458.default.profile.memberCardAdvantages, 'CARD')
                  ),
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        p.lightText,
                        {
                          marginTop: module474.ms(10),
                          fontSize: module474.FontSize.m,
                        },
                      ],
                    },
                    module458.default.profile.useDiscountVouchersForThisPurchase
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [p.clickableAreaPoints],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          p.titleText,
                          {
                            textAlign: 'center',
                          },
                        ],
                      },
                      0 === w && O < 12e3 ? module458.default.formatString(module458.default.payments.pointsMissing, k, C) : module458.default.payments.noVouchers
                    )
                  )
                );
          } else return null;
        },
      },
      {
        key: 'renderDiscountItem',
        value: function (t) {
          var n,
            o,
            s,
            l = this,
            c = t.item,
            u = module1524.CStyles(),
            p = this.state.discountOptions,
            f = 'ValesCampanhasDescontos' == c.key,
            y = 'Under25' == c.key,
            D =
              null != c && null != (n = c.discount) && n.Descricao
                ? null == c
                  ? undefined
                  : null == (o = c.discount)
                  ? undefined
                  : o.Descricao
                : null == c
                ? undefined
                : null == (s = c.discount[0])
                ? undefined
                : s.Descricao,
            S = this.verifyAppliedDiscounts(p, c);
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              key: c.key,
              style: u.discountBsItem,
              onPress: function () {
                if (y)
                  if (l.laCard) {
                    S[c.key].selected = true;
                    return void l.setState(
                      {
                        stepGenericVouchers: 2,
                        selectedDiscount: S,
                        showDiscountsBottomSheet: false,
                      },
                      function () {
                        return l.addDiscount();
                      }
                    );
                  } else
                    return void l.setState({
                      stepGenericVouchers: 2,
                      selectedDiscount: S,
                      isAddingDiscount: true,
                      showDiscountsBottomSheet: false,
                    });

                if (c.key.toLowerCase().includes('aniv')) {
                  S[c.key].selected = true;
                  l.setState(
                    {
                      stepGenericVouchers: 2,
                      selectedDiscount: S,
                      showDiscountsBottomSheet: false,
                    },
                    function () {
                      return l.addDiscount();
                    }
                  );
                } else if (f)
                  l.setState(
                    {
                      showDiscountsBottomSheet: false,
                    },
                    function () {
                      return l.setState({
                        showDiscountsValesCampanhaBottomSheet: true,
                        stepGenericVouchers: 2,
                      });
                    }
                  );
                else
                  l.setState({
                    stepGenericVouchers: 2,
                    selectedDiscount: S,
                    isAddingDiscount: true,
                    showDiscountsBottomSheet: false,
                  });
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  u.biggerText,
                  {
                    color: module474.Color.darkGray,
                  },
                ],
              },
              D
            )
          );
        },
      },
      {
        key: 'renderDiscountsBottomSheet',
        value: function (t) {
          var n = this,
            o = module1524.CStyles(),
            s = this.state,
            l = s.showDiscountsBottomSheet,
            c = s.discountOptions;
          return Object.keys(c).length
            ? React.default.createElement(
                module472.BottomSheet,
                {
                  visible: l,
                  snapPoints: [-1, module474.ms(350)],
                  onClose: function () {
                    return n.setState({
                      showDiscountsBottomSheet: false,
                    });
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      o.discountsBSContainer,
                      {
                        paddingBottom: t.bottom,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [o.bsTitleContainer, o.bottomBorder],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          o.text,
                          {
                            fontFamily: module474.FontFamily.bold,
                            fontSize: module474.FontSize.l,
                          },
                        ],
                      },
                      module458.default.generic.enjoyYourDiscounts.toUpperCase()
                    )
                  ),
                  React.default.createElement(ReactNative.FlatList, {
                    key: 'discountsFlatList',
                    style: {
                      paddingHorizontal: module474.ms(20),
                    },
                    showsVerticalScrollIndicator: false,
                    data: this.discountsAvailable(),
                    renderItem: this.renderDiscountItem,
                  })
                )
              )
            : null;
        },
      },
      {
        key: 'renderDiscountValesCampanhaItem',
        value: function (t) {
          this.state.discountOptions;
          var n = this,
            o = t.item,
            l = module1524.CStyles(),
            c = o.DescricaoVale;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              key: o.DescricaoVale,
              style: l.discountBsItem,
              onPress: function () {
                o.Applied = true;
                n.setState(
                  {
                    showDiscountsValesCampanhaBottomSheet: false,
                    selectedDiscount: module47.default({}, 'ValesCampanhasDescontos', [o]),
                  },
                  function () {
                    return n.addDiscount();
                  }
                );
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  l.biggerText,
                  {
                    color: module474.Color.darkGray,
                  },
                ],
              },
              c
            )
          );
        },
      },
      {
        key: 'renderDiscountsValesCampanhaBottomSheet',
        value: function (t) {
          var n = this,
            o = module1524.CStyles(),
            s = this.state,
            l = s.showDiscountsValesCampanhaBottomSheet,
            c = s.discountOptions;
          return Object.keys(c).length
            ? React.default.createElement(
                module472.BottomSheet,
                {
                  visible: l,
                  snapPoints: [-1, module474.ms(350)],
                  onClose: function () {
                    return n.setState({
                      showDiscountsValesCampanhaBottomSheet: false,
                    });
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      o.discountsBSContainer,
                      {
                        paddingBottom: t.bottom,
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [o.bsTitleContainer, o.bottomBorder],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          o.text,
                          {
                            fontFamily: module474.FontFamily.bold,
                            fontSize: module474.FontSize.l,
                          },
                        ],
                      },
                      module458.default.payments.chooseValeCampanha.toUpperCase()
                    )
                  ),
                  React.default.createElement(ReactNative.FlatList, {
                    key: 'valesCampanhasDescontosFlatList',
                    style: {
                      flexGrow: 0,
                      paddingHorizontal: module474.ms(20),
                    },
                    showsVerticalScrollIndicator: false,
                    data: c.ValesCampanhasDescontos ? c.ValesCampanhasDescontos : [],
                    renderItem: this.renderDiscountValesCampanhaItem,
                  })
                )
              )
            : null;
        },
      },
      {
        key: 'renderAddressArea',
        value: function () {
          var t = this.state,
            n = t.showMoreDeliveryAddresses,
            o = t.selectedDeliveryAddressType,
            s = t.deliveryOptions,
            l = t.selectedStore,
            c = t.selectedBox,
            u = t.selectedPoint,
            p = t.selectedLocker,
            f = t.addresses,
            y = this.props.navigation;
          return React.default.createElement(module1525.DeliveryOptions, {
            deliveryOptions: s,
            selectedDeliveryAddressType: o,
            showMoreDeliveryAddresses: n,
            addressItemPressHandler: this.addressItemPressHandler,
            selectedStore: l,
            selectedBox: c,
            selectedPoint: u,
            selectedLocker: p,
            navigation: y,
            addresses: f,
            userAddressOptionOnPress: this.userAddressOptionOnPress,
            addressAreaTabPress: this.addressAreaTabPress,
          });
        },
      },
      {
        key: 'renderDeliveryTimeArea',
        value: function () {
          var t = this.state,
            n = t.selectedDeliveryMethod,
            o = t.showMoreDeliveryMethods,
            s = t.shippingOptions;
          return React.default.createElement(module1525.DeliveryMethods, {
            selectedDeliveryMethod: n,
            showMoreDeliveryMethods: o,
            shippingOptions: s,
            deliveryMethodsAreaTabPress: this.deliveryMethodsAreaTabPress,
            deliveryMethodItemPress: this.deliveryMethodItemPress,
          });
        },
      },
      {
        key: 'renderPaymentMethodArea',
        value: function () {
          var t,
            n,
            o = this,
            s = this.state,
            l = s.paymentOptions,
            c = s.selectedPaymentMethod,
            u = s.mbwayPhoneNumber,
            p = s.isApplePaySupported,
            f = s.tbName;
          return React.default.createElement(module1525.PaymentOptions, {
            key: 'paymentOpt',
            paymentOptions: l,
            selectedPaymentMethod: c,
            onPressPaymentMethod: this.paymentOptionOnPress,
            onMBWayPhoneChange: function (t) {
              return o.onMBWayPhoneChange(t);
            },
            onTbNameChange: function (t) {
              return o.setState({
                tbName: t,
              });
            },
            tbName: f,
            mbwayPhoneNumber: u,
            placeholder: null != (t = this.user) && t.Telemovel ? (null == (n = this.user) ? undefined : n.Telemovel) : module458.default.payments.mobileNumber,
            applePaySupported: p,
          });
        },
      },
      {
        key: 'renderCartItem',
        value: function (t, n) {
          return React.default.createElement(module472.WishlistCard, {
            product: t,
            isCheckoutCard: true,
            scrollable: false,
            hideRightContent: true,
            hideCheckboxArea: true,
          });
        },
      },
      {
        key: 'renderYourCartArea',
        value: function () {
          var t = this,
            n = module1524.CStyles(),
            o = this.state,
            s = o.showMoreCartItems,
            l = o.cart;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                n.standardContainer,
                {
                  alignItems: 'center',
                },
              ],
            },
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.setState({
                    showMoreCartItems: !s,
                  });
                },
                style: [n.collapsableAreaContainer, !s && n.bottomBorder],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.text,
                    {
                      marginLeft: module474.ms(10),
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                module458.default.generic.yourCart
              ),
              React.default.createElement(module472.Icon, {
                name: 'anterior',
                size: module474.ms(16),
                style: {
                  transform: [
                    {
                      rotate: s ? '90deg' : '270deg',
                    },
                  ],
                },
              })
            ),
            s &&
              l.map(function (n, o) {
                return t.renderCartItem(n, o);
              })
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = this;

          if (this.state.loaded) {
            var n = module1524.CStyles();
            return React.default.createElement(
              module961.ScrollView,
              {
                showsVerticalScrollIndicator: false,
                contentContainerStyle: n.contentContainerStyle,
              },
              this.renderDiscountArea(),
              this.renderAddressArea(),
              this.renderDeliveryTimeArea(),
              this.renderPaymentMethodArea(),
              this.renderYourCartArea(),
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.contentArea,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 2,
                    style: n.text,
                  },
                  module458.default.home.finishingOrderPP1 + ' ',
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        n.text,
                        {
                          textDecorationLine: 'underline',
                        },
                      ],
                      onPress: function () {
                        return t.props.navigation.navigate('PrivacyPolicy');
                      },
                    },
                    module458.default.settings.privacyPolicy
                  )
                )
              )
            );
          }
        },
      },
      {
        key: 'renderBottomArea',
        value: function () {
          if (this.state.loaded) {
            var t = module1524.CStyles(),
              n = this.state,
              o = n.infoValues,
              s = n.selectedPaymentMethod,
              l = n.selectedDeliveryAddressType,
              c = n.selectedDeliveryMethod,
              u = !s || !l || !c,
              p = o.SubTotal,
              f = o.Descontos,
              y = o.PortesEnvio,
              D = o.Total,
              C = o.ValesOutros;
            return React.default.createElement(
              ReactNative.View,
              {
                style: [
                  t.standardContainer,
                  t.topBorder,
                  {
                    paddingTop: module474.ms(5),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.textRow,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  module458.default.generic.subtotal
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  (p > 0 ? p.toFixed(2) : p) + ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.textRow,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  module458.default.generic.discount
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  (f > 0 ? f.toFixed(2) : f) + ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.textRow,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  module458.default.generic.vouchersOrCredits
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  (C > 0 ? C.toFixed(2) : C) + ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.textRow,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  module458.default.generic.delivery
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.smallText,
                  },
                  y > 0 ? y.toFixed(2) + ' \u20ac' : module458.default.generic.free
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.textRow,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.semiBoldText,
                      {
                        fontSize: module474.FontSize.xl,
                      },
                    ],
                  },
                  module458.default.generic.total.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.semiBoldText,
                      {
                        fontSize: module474.FontSize.xl,
                      },
                    ],
                  },
                  (D > 0 ? D.toFixed(2) : D) + ' \u20ac'
                )
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  disabled: u,
                  style: [
                    t.button,
                    {
                      marginTop: module474.ms(10),
                    },
                    u && {
                      opacity: 0.5,
                    },
                  ],
                  onPress: this.startPayment,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.buttonText,
                  },
                  module458.default.generic.buy.toUpperCase()
                )
              )
            );
          }
        },
      },
      {
        key: 'renderDistrictItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1524.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState({
                  tempDistrict: o,
                });
              },
              style: [s.districtItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: s.districtItemText,
              },
              o
            )
          );
        },
      },
      {
        key: 'renderStoreItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1524.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    selectedStore: o,
                    selectedBox: null,
                    selectedPoint: null,
                    selectedLocker: null,
                    showStoresBottomSheet: false,
                  },
                  function () {
                    return n.getCheckoutData();
                  }
                );
              },
              style: [s.districtItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: s.districtItemText,
              },
              o.Descricao
            )
          );
        },
      },
      {
        key: 'renderStoresBottomSheet',
        value: function (t) {
          var n,
            o = this,
            s = this.state.districts,
            l = module1524.CStyles(),
            c = this.state,
            u = c.showStoresBottomSheet,
            p = c.tempDistrict,
            f = c.selectedDeliveryAddressType,
            y = c.selectedStore,
            D = c.selectedBox,
            k = c.selectedPoint,
            T = c.selectedLocker,
            E = c.previousSelectedDeliveryAddressType,
            w = c.previousSelectedDeliveryMethod,
            A = [];
          if (p)
            A =
              null == f
                ? undefined
                : null == (n = f.lojas)
                ? undefined
                : n.filter(function (t) {
                    return (null == t ? undefined : t.Distrito) === p;
                  });
          else A = s;
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSStores',
              visible: u,
              snapPoints: [-1, '95%'],
              onClose: function () {
                if (y)
                  o.setState({
                    showStoresBottomSheet: false,
                    previousSelectedDeliveryAddressType: null,
                    previousSelectedDeliveryMethod: null,
                  });
                else
                  o.setState({
                    showStoresBottomSheet: false,
                    selectedDeliveryAddressType: E,
                    selectedDeliveryMethod: w,
                    selectedBox: D,
                    selectedPoint: k,
                    selectedLocker: T,
                  });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.storesDistrictsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              p
                ? React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: {
                        flexDirection: 'row',
                        paddingBottom: module474.ms(20),
                      },
                      onPress: function () {
                        return o.setState({
                          tempDistrict: null,
                        });
                      },
                    },
                    React.default.createElement(module472.Icon, {
                      name: 'anterior',
                      size: module474.ms(16),
                      style: {
                        marginTop: module474.ms(6),
                        marginRight: module474.ms(10),
                      },
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: l.bottomSheetTitleTexts,
                      },
                      p.toUpperCase()
                    )
                  )
                : React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        l.bottomSheetTitleTexts,
                        {
                          paddingBottom: module474.ms(20),
                          marginLeft: module474.ms(25),
                        },
                      ],
                    },
                    module458.default.generic.pickUpInStore.toUpperCase()
                  ),
              React.default.createElement(ReactNative.FlatList, {
                style: {
                  marginLeft: module474.ms(25),
                },
                key: p ? 'storeList' : 'districtList',
                keyExtractor: p ? j : z,
                renderItem: p ? this.renderStoreItem : this.renderDistrictItem,
                data: A,
                showsVerticalScrollIndicator: false,
              })
            )
          );
        },
      },
      {
        key: 'renderBoxItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1524.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    selectedBox: o,
                    selectedStore: null,
                    selectedPoint: null,
                    selectedLocker: null,
                    showBoxDeliveryBottomSheet: false,
                  },
                  function () {
                    return n.getCheckoutData();
                  }
                );
              },
              style: [s.boxItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: s.boxItemText,
              },
              o.Descricao
            )
          );
        },
      },
      {
        key: 'renderBoxDeliveryBottomSheet',
        value: function (t) {
          var n,
            o = this,
            s = module1524.CStyles(),
            l = this.state,
            c = l.showBoxDeliveryBottomSheet,
            u = l.tempBoxSearch,
            p = l.selectedDeliveryAddressType,
            f = l.selectedStore,
            y = l.selectedBox,
            D = l.selectedPoint,
            k = l.selectedLocker,
            x = l.previousSelectedDeliveryAddressType,
            T = l.previousSelectedDeliveryMethod,
            E = [];
          if ((null != p && p.lojas && (E = JSON.parse(JSON.stringify(null == p ? undefined : p.lojas))), u.length > 2))
            E =
              null == p
                ? undefined
                : null == (n = p.lojas)
                ? undefined
                : n.filter(function (t) {
                    return (
                      (null == t
                        ? undefined
                        : t.Descricao.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Distrito.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Morada.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.CodPostal.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            ))
                    );
                  });
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSBox',
              visible: c,
              snapPoints: [-1, '95%'],
              onClose: function () {
                if (y)
                  o.setState({
                    showBoxDeliveryBottomSheet: false,
                    previousSelectedDeliveryAddressType: null,
                    previousSelectedDeliveryMethod: null,
                  });
                else
                  o.setState({
                    showBoxDeliveryBottomSheet: false,
                    selectedDeliveryAddressType: x,
                    selectedDeliveryMethod: T,
                    selectedStore: f,
                    selectedPoint: D,
                    selectedLocker: k,
                  });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.storesDistrictsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(module472.FloatingInput, {
                  isSearch: true,
                  containerExtraStyle: {
                    width: '100%',
                  },
                  label: module458.default.generic.search,
                  value: u,
                  onChange: function (t) {
                    return o.setState({
                      tempBoxSearch: t,
                    });
                  },
                })
              ),
              React.default.createElement(ReactNative.FlatList, {
                key: 'boxesList',
                keyExtractor: R,
                renderItem: this.renderBoxItem,
                data: E,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
              })
            )
          );
        },
      },
      {
        key: 'renderPointItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1524.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    selectedPoint: o,
                    selectedBox: null,
                    selectedStore: null,
                    selectedLocker: null,
                    showPointDeliveryBottomSheet: false,
                  },
                  function () {
                    return n.getCheckoutData();
                  }
                );
              },
              style: [s.pointItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: s.pointItemText,
              },
              o.Nome
            )
          );
        },
      },
      {
        key: 'renderPointDeliveryBottomSheet',
        value: function (t) {
          var n,
            o = this,
            s = module1524.CStyles(),
            l = this.state,
            c = l.showPointDeliveryBottomSheet,
            u = l.tempPointSearch,
            p = l.selectedDeliveryAddressType,
            f = l.selectedStore,
            y = l.selectedBox,
            D = l.selectedPoint,
            k = l.selectedLocker,
            x = l.previousSelectedDeliveryAddressType,
            T = l.previousSelectedDeliveryMethod,
            E = [];
          if ((null != p && p.pontos && (E = JSON.parse(JSON.stringify(null == p ? undefined : p.pontos))), u.length > 2))
            E =
              null == p
                ? undefined
                : null == (n = p.pontos)
                ? undefined
                : n.filter(function (t) {
                    return (
                      (null == t
                        ? undefined
                        : t.Nome.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Morada.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Localidade.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            ))
                    );
                  });
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSPoint',
              visible: c,
              snapPoints: [-1, '95%'],
              onClose: function () {
                if (D)
                  o.setState({
                    showPointDeliveryBottomSheet: false,
                    previousSelectedDeliveryAddressType: null,
                    previousSelectedDeliveryMethod: null,
                  });
                else
                  o.setState({
                    showPointDeliveryBottomSheet: false,
                    selectedDeliveryAddressType: x,
                    selectedDeliveryMethod: T,
                    selectedBox: y,
                    selectedStore: f,
                    selectedLocker: k,
                  });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.storesDistrictsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: s.bottomSheetTitleTexts,
                },
                module458.default.generic.pickUpAtDeliveryPoints.toUpperCase()
              ),
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(module472.FloatingInput, {
                  isSearch: true,
                  containerExtraStyle: {
                    width: '100%',
                  },
                  label: '',
                  value: u,
                  onChange: function (t) {
                    return o.setState({
                      tempPointSearch: t,
                    });
                  },
                })
              ),
              React.default.createElement(ReactNative.FlatList, {
                key: 'pointsList',
                keyExtractor: J,
                renderItem: this.renderPointItem,
                data: E,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
              })
            )
          );
        },
      },
      {
        key: 'renderLockerItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1524.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    selectedLocker: o,
                    selectedBox: null,
                    selectedStore: null,
                    selectedPoint: null,
                    showLockerDeliveryBottomSheet: false,
                  },
                  function () {
                    return n.getCheckoutData();
                  }
                );
              },
              style: [s.pointItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: s.pointItemText,
              },
              o.Nome
            )
          );
        },
      },
      {
        key: 'renderLockerDeliveryBottomSheet',
        value: function (t) {
          var n,
            o = this,
            s = module1524.CStyles(),
            l = this.state,
            c = l.showLockerDeliveryBottomSheet,
            u = l.tempLockerSearch,
            p = l.selectedDeliveryAddressType,
            f = l.selectedStore,
            y = l.selectedBox,
            D = l.selectedPoint,
            k = l.selectedLocker,
            x = l.previousSelectedDeliveryAddressType,
            T = l.previousSelectedDeliveryMethod,
            E = [];
          if ((null != p && p.cacifos && (E = JSON.parse(JSON.stringify(null == p ? undefined : p.cacifos))), u.length > 2))
            E =
              null == p
                ? undefined
                : null == (n = p.cacifos)
                ? undefined
                : n.filter(function (t) {
                    return (
                      (null == t
                        ? undefined
                        : t.Nome.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Morada.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            )) ||
                      (null == t
                        ? undefined
                        : t.Localidade.normalize('NFD')
                            .toLowerCase()
                            .replace(/[\u0300-\u036f]/g, '')
                            .includes(
                              u
                                .normalize('NFD')
                                .toLowerCase()
                                .replace(/[\u0300-\u036f]/g, '')
                            ))
                    );
                  });
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSLocker',
              visible: c,
              snapPoints: [-1, '95%'],
              onClose: function () {
                if (k)
                  o.setState({
                    showLockerDeliveryBottomSheet: false,
                    previousSelectedDeliveryAddressType: null,
                    previousSelectedDeliveryMethod: null,
                  });
                else
                  o.setState({
                    showLockerDeliveryBottomSheet: false,
                    selectedDeliveryAddressType: x,
                    selectedDeliveryMethod: T,
                    selectedBox: y,
                    selectedPoint: D,
                    selectedStore: f,
                  });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.storesDistrictsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: s.bottomSheetTitleTexts,
                },
                module458.default.generic.pickUpAtACTTLocker.toUpperCase()
              ),
              React.default.createElement(
                ReactNative.View,
                null,
                React.default.createElement(module472.FloatingInput, {
                  isSearch: true,
                  containerExtraStyle: {
                    width: '100%',
                  },
                  label: '',
                  value: u,
                  onChange: function (t) {
                    return o.setState({
                      tempLockerSearch: t,
                    });
                  },
                })
              ),
              React.default.createElement(ReactNative.FlatList, {
                key: 'lockersList',
                keyExtractor: G,
                renderItem: this.renderLockerItem,
                data: E,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
              })
            )
          );
        },
      },
      {
        key: 'renderPostCheckoutRender',
        value: function () {
          var t = this,
            n = module1524.CStyles(),
            o = this.state.showPostCheckoutRender;
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'modalPostCheckoutBottomSheet',
              lockScroll: true,
              snapPoints: [-1, ReactNative.Dimensions.get('window').height + module474.ms(25)],
              visible: o,
              onClose: function () {
                return t.setState({
                  showPostCheckoutRender: false,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.postCheckoutBsContainer,
                pointerEvents: 'none',
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.postCheckoutBsArea,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: n.postCheckoutBsImageContainer,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: module1185.logoLanidor,
                    style: [n.postCheckoutBsImage, {}],
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: n.postCheckoutBsBiggerImageContainer,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: module1185.cardLoading,
                    style: n.postCheckoutBsImage,
                  })
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.postCheckoutBsText,
                  },
                  module458.default.payments.yourOrderIsBeingProcessed
                )
              )
            )
          );
        },
      },
      {
        key: 'renderPostOrderSuccess',
        value: function () {
          var t = this,
            n = module1524.CStyles(),
            o = this.props.navigation;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.orderCreatedWrapper,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.iconWrapper,
              },
              React.default.createElement(module472.Icon, {
                name: 'checkIcon',
                size: module474.ms(22),
                style: {
                  color: 'white',
                },
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.orderRecievedContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.orderCreatedTitle,
                },
                module458.default.payments.orderReceivedTitle.toUpperCase()
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.orderCreatedMessage,
                },
                module458.default.payments.orderReceivedMessage
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.orderCreatedButtonWrapper,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [
                    n.button,
                    {
                      marginTop: module474.ms(10),
                    },
                  ],
                  onPress: function () {
                    t.setState({
                      showPostOrderSuccess: false,
                    });
                    o.navigate('Home');
                    o.dispatch(
                      module482.CommonActions.reset({
                        routes: [
                          {
                            name: 'Cart',
                            state: {
                              routes: [
                                {
                                  name: 'Cart',
                                },
                                {
                                  name: 'OfferEnvelope',
                                },
                                {
                                  name: 'Checkout',
                                },
                              ],
                            },
                          },
                        ],
                      })
                    );
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.buttonText,
                  },
                  module458.default.payments.buyAgain.toUpperCase()
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
            o = this.state,
            s = o.showPostCheckoutRender;
          return o.showPostOrderSuccess
            ? React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (o) {
                return React.default.createElement(
                  ReactNative.View,
                  {
                    style: n.root,
                  },
                  React.default.createElement(
                    module472.Wrapper,
                    {
                      edges: ['right', 'left'],
                    },
                    t.renderPostOrderSuccess()
                  )
                );
              })
            : React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (o) {
                return React.default.createElement(
                  ReactNative.View,
                  {
                    pointerEvents: s ? 'none' : undefined,
                    style: n.root,
                  },
                  React.default.createElement(module472.Header, {
                    smallSizeIcon: true,
                    leftIcon: 'delete-cross-1',
                    leftAction: function () {
                      return t.onBack();
                    },
                    title: module458.default.generic.checkout,
                  }),
                  React.default.createElement(
                    module472.Wrapper,
                    {
                      edges: ['right', 'left'],
                    },
                    t.renderContent(),
                    t.renderBottomArea(),
                    t.renderDiscountsBottomSheet(o),
                    t.renderDiscountsValesCampanhaBottomSheet(o),
                    t.renderStoresBottomSheet(o),
                    t.renderBoxDeliveryBottomSheet(o),
                    t.renderPointDeliveryBottomSheet(o),
                    t.renderLockerDeliveryBottomSheet(o),
                    t.renderPostCheckoutRender(),
                    t.renderStripeHandle()
                  )
                );
              });
        },
      },
    ]);
    return W;
  })(React.Component),
  H = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      giftOptions: t.giftOptions,
      loader: t.loader,
      checkoutBottomSheetStatus: t.checkoutBottomSheetStatus,
    };
  })(W);

exports.default = H;
