var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  p = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = L(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1836 = require('./1836'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module474 = require('./474'),
  module431 = require('./431'),
  P = require('./1497'),
  module1278 = require('./1278'),
  module1503 = require('./1503'),
  module482 = require('./482');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

function R(t, n) {
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

function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      R(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      R(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
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

var O = function (t) {
    return "sizeItem_' + " + t.Tamanho;
  },
  F = function (t) {
    return "colorItem_' + " + t.NumeroCor;
  },
  B = function (t) {
    return "motiveItem_' + " + t.idMotivo;
  },
  N = function (t) {
    return "store_' + " + t.idPontoTransportadora;
  },
  z = module1836.CStyles(),
  A = function (t, n) {
    return p.default.createElement(
      ReactNative.TouchableOpacity,
      {
        style: [z.radioButtonContainer],
        onPress: function () {
          return n();
        },
      },
      t &&
        p.default.createElement(ReactNative.View, {
          style: z.innerRadio,
        })
    );
  },
  U = (function (t) {
    module35.default(R, t);

    var module47 = R,
      module400 = M(),
      L = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var n;
      module24.default(this, R);
      (n = L.call(this, t)).productImgsRef = p.default.createRef();

      n.focusListener = function () {};

      n.state = {
        loaded: false,
        auxTextWidth: 0,
        orderDetail: null,
        exchangeReturn: false,
        showBottomSheet: false,
        showColorSizeMotive: false,
        showExchangeReturnMotive: false,
        showPickUp: false,
        obsNumberOfCharsUsed: 0,
        showPointDeliveryBottomSheet: false,
        deliveryPoints: [],
        tempPointSearch: '',
        showExchangeSuccess: false,
        returnMethodSelected: null,
        editBillingAddress: false,
        editDeliveryAddress: false,
      };
      n.renderReceiptInfo = n.renderReceiptInfo.bind(module39.default(n));
      n.getOrderReceipt = n.getOrderReceipt.bind(module39.default(n));
      n.renderOrderInfo = n.renderOrderInfo.bind(module39.default(n));
      n.renderColorItem = n.renderColorItem.bind(module39.default(n));
      n.renderSizeItem = n.renderSizeItem.bind(module39.default(n));
      n.renderMotiveItem = n.renderMotiveItem.bind(module39.default(n));
      n.renderPointItem = n.renderPointItem.bind(module39.default(n));
      n.cancelOrder = n.cancelOrder.bind(module39.default(n));
      n.changeAddress = n.changeAddress.bind(module39.default(n));
      return n;
    }

    module25.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(this.getOrderData());

                  case 2:
                    this.focusListener = this.props.navigation.addListener('focus', function () {
                      if (t.state.showExchangeSuccess)
                        t.setState({
                          showExchangeSuccess: false,
                        });
                    });

                  case 3:
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
        key: 'componentWillUnmount',
        value: function () {
          var t;
          if (!(null == (t = this.focusListener))) t.call(this);
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
        key: 'orderId',
        get: function () {
          return this.params.orderId || '';
        },
      },
      {
        key: 'getOrderData',
        value: function () {
          var t, o, l;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    t = this.props.dispatch;
                    s.prev = 1;
                    t(module1224.setLoader(true));
                    s.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.orders(this.props.user.value.IdCliente, this.orderId),
                      })
                    );

                  case 5:
                    if ((o = s.sent).ok) {
                      t(module1224.setLoader(false));
                      l = o.data;
                      console.log('\ud83d\ude80 ~ file: index.tsx ~ line 143 ~ OrderDetail ~ getOrderData ~ data', l);

                      if (l) {
                        this.setState({
                          loaded: true,
                          orderDetail: V({}, l),
                        });
                        this.setState({
                          name: l.Facturacao_Nome,
                          address: l.Facturacao_Morada,
                          zipCode: l.Facturacao_CodPostal,
                          vatNumber: l.NumContribuinte,
                          city: l.Facturacao_Localidade,
                          deliveryName: l.Entrega_Nome,
                          deliveryAddress: l.Entrega_Morada,
                          deliveryZipCode: l.Entrega_CodPostal,
                          deliveryCity: l.Entrega_Localidade,
                        });
                      } else {
                        console.log('ENTREI!!!');
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.orderError,
                        });
                        this.props.navigation.goBack();
                      }
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== o.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.orderError,
                        });
                      this.props.navigation.goBack();
                    }

                    s.next = 13;
                    break;

                  case 9:
                    s.prev = 9;
                    s.t0 = s.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.orderError,
                    });

                  case 13:
                  case 'end':
                    return s.stop();
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
        key: 'getOrderReceipt',
        value: function () {
          var t, o;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    t = this.props.dispatch;
                    l.prev = 1;
                    t(module1224.setLoader(true));
                    l.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.orderReceipt('5D8CBBB2-4DDF-457A-99DE-29580CDAB09A', '1016547'),
                        axiosConfig: {
                          callback: this.getOrderReceipt,
                        },
                      })
                    );

                  case 5:
                    if ((o = l.sent).ok) t(module1224.setLoader(false));
                    else {
                      t(module1224.setLoader(false));
                      if (401 !== o.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }
                    l.next = 13;
                    break;

                  case 9:
                    l.prev = 9;
                    l.t0 = l.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return l.stop();
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
        key: 'createExchange',
        value: function () {
          var t, o, l, s, c, u, f, h, p, y, v, T, b, S, P, D, k, I, L, R, V;
          return regeneratorRuntime.default.async(
            function (M) {
              for (;;)
                switch ((M.prev = M.next)) {
                  case 0:
                    for (
                      t = this.props,
                        o = t.dispatch,
                        l = t.user,
                        s = this.state,
                        c = s.orderDetail,
                        u = s.pickupDate,
                        f = s.obsDelivery,
                        h = s.selectedPickUpInfo,
                        p = s.iban,
                        y = s.swift,
                        v = s.selectedReturnMethod,
                        T = [],
                        b = 0;
                      b < c.Linhas.length;
                      b++
                    )
                      (S = c.Linhas[b]).exchangeProductInfo &&
                        ((L = {
                          idVendasLinhas: S.idVendasLinhas,
                          idProdutoTamanhoCor: S.idProdutoTamanhoCor,
                          Referencia: S.Referencia,
                          PVPinicial: S.PVPinicial,
                          PVPfinal: S.PVPfinal,
                          tipoDevTroca: 'exchange' == S.actionType ? 'troca' : 'devolucao',
                          idMotivoTroca: 'exchange' == S.actionType ? (null == (P = S.exchangeProductInfo) ? undefined : P.Motivo.idMotivo) : -1,
                          idMotivoDevolucao: 'return' == S.actionType ? (null == (D = S.exchangeProductInfo) ? undefined : D.Motivo.idMotivo) : -1,
                          novaCor: null == (k = S.exchangeProductInfo) ? undefined : k.NumeroCor,
                          novoTamanho: null == (I = S.exchangeProductInfo) ? undefined : I.Tamanho,
                        }),
                        T.push(L));

                    M.prev = 4;
                    R = {
                      idCliente: l.value.IdCliente,
                      idVendasCabec: c.idVendasCabec,
                      NOperacao: c.NOperacao,
                      Linhas: T,
                      Observacoes: f || '',
                      idLocalRecolha: null != h && h.idLocalRecolha ? (null == h ? undefined : h.idLocalRecolha) : null,
                      DevTroca_Nome: 'transportadora' == (null == h ? undefined : h.idLocalRecolha) ? l.value.NomeEnt : null,
                      DevTroca_Morada: 'transportadora' == (null == h ? undefined : h.idLocalRecolha) ? l.value.MoradaEnt : null,
                      DevTroca_CodPostal: 'transportadora' == (null == h ? undefined : h.idLocalRecolha) ? l.value.CodPostalEnt : null,
                      DevTroca_Localidade: 'transportadora' == (null == h ? undefined : h.idLocalRecolha) ? l.value.LocalidadeEnt : null,
                      DevTroca_Telemovel: c.DevTroca_Telemovel,
                      DevTroca_DataRecolha: null != h && h.idLocalRecolha ? u || c.DevTroca_DataRecolha : null,
                      idMetodoReembolso: v.idMetodoReembolso,
                    };

                    if (2 == v.idMetodoReembolso && c.NOperacao.includes('TB')) {
                      R.IBAN = p;
                      R.SWIFT = y;
                    }

                    o(module1224.setLoader(true));
                    M.next = 10;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.exchangeReturn(),
                        data: R,
                        axiosConfig: {
                          callback: this.createExchange,
                        },
                      })
                    );

                  case 10:
                    if ((V = M.sent).ok && V.data.success)
                      this.setState({
                        showExchangeSuccess: true,
                      });
                    else
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: V.data.message,
                      });
                    M.next = 17;
                    break;

                  case 14:
                    M.prev = 14;
                    M.t0 = M.catch(4);
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 17:
                    M.prev = 17;
                    o(module1224.setLoader(false));
                    return M.finish(17);

                  case 20:
                  case 'end':
                    return M.stop();
                }
            },
            null,
            this,
            [[4, 14, 17, 20]],
            Promise
          );
        },
      },
      {
        key: 'onFinishReturnExchange',
        value: function () {
          this.createExchange();
        },
      },
      {
        key: 'onPressExchangeReturn',
        value: function (t, n) {
          for (var o = this.state.orderDetail, l = n.idVendasLinhas, s = 0; s < o.Linhas.length; s++) {
            if (o.Linhas[s].idVendasLinhas == l) {
              if (o.Linhas[s].actionType == t) {
                n.actionType = null;
                n.exchangeProductInfo = null;
                n.changed = false;
              } else {
                n.actionType = t;
                n.exchangeProductInfo = {
                  Tamanho: n.Tamanho,
                  NumeroCor: n.NumeroCor,
                };
              }

              o.Linhas[s] = n;
            }
          }

          if (n.actionType)
            'exchange' == t
              ? this.setState({
                  orderDetail: o,
                  selectedProduct: n,
                  showBottomSheet: true,
                  showColorSizeMotive: true,
                })
              : this.setState({
                  orderDetail: o,
                  selectedProduct: n,
                  showBottomSheet: true,
                  showExchangeReturnMotive: true,
                });
          else
            this.setState({
              orderDetail: o,
            });
        },
      },
      {
        key: 'updateProduct',
        value: function () {
          for (var t = this.state, n = t.orderDetail, o = t.selectedProduct, l = 0; l < n.Linhas.length; l++) {
            if (n.Linhas[l].idVendasLinhas == o.idVendasLinhas) n.Linhas[l] = o;
          }

          this.setState({
            orderDetail: n,
          });
        },
      },
      {
        key: 'changeAddress',
        value: function () {
          var t,
            module47,
            module24,
            module25,
            module39,
            module35,
            module37,
            module34,
            p,
            ReactNative,
            module400,
            module1836,
            module474,
            module431,
            P,
            D,
            k,
            I,
            L,
            R,
            V = this,
            M = arguments;
          return regeneratorRuntime.default.async(
            function (O) {
              for (;;)
                switch ((O.prev = O.next)) {
                  case 0:
                    t = M.length > 0 && undefined !== M[0] ? M[0] : '';
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = this.state;
                    module39 = module25.orderDetail;
                    module35 = module25.name;
                    module37 = module25.address;
                    module34 = module25.zipCode;
                    p = module25.city;
                    ReactNative = module25.vatNumber;
                    module400 = module25.deliveryName;
                    module1836 = module25.deliveryAddress;
                    module474 = module25.deliveryZipCode;
                    module431 = module25.deliveryCity;
                    O.prev = 3;
                    module24(module1224.setLoader(true));
                    P = {};
                    P =
                      'billing' == t
                        ? {
                            idCliente: module39.idCliente,
                            idVendasCabec: module39.idVendasCabec,
                            NOperacao: module39.NOperacao,
                            Nome: module35,
                            Morada: module37,
                            CodPostal: module34,
                            Localidade: p,
                            NIF: ReactNative,
                          }
                        : {
                            idCliente: module39.idCliente,
                            idVendasCabec: module39.idVendasCabec,
                            NOperacao: module39.NOperacao,
                            Nome: module400,
                            Morada: module1836,
                            CodPostal: module474,
                            Localidade: module431,
                          };
                    O.next = 9;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: 'billing' == t ? module1226.Endpoints.billingAddress() : module1226.Endpoints.deliveryAddress(),
                        data: P,
                        axiosConfig: {
                          callback: function () {
                            return V.changeAddress(t);
                          },
                        },
                      })
                    );

                  case 9:
                    if ((D = O.sent).ok && D.data.success) {
                      L = module458.default.orderDetail.orderAddressChanged;
                      if (null != D && null != (k = D.data) && k.message) L = null == D ? undefined : null == (I = D.data) ? undefined : I.message;
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: L,
                      });
                      this.setState({
                        editBillingAddress: null,
                        editDeliveryAddress: null,
                      });
                      this.getOrderData();
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== D.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: null != D && null != (R = D.data) && R.message ? D.data.message : module458.default.generic.errorMessage,
                        });
                    }

                    module24(module1224.setLoader(false));
                    O.next = 18;
                    break;

                  case 14:
                    O.prev = 14;
                    O.t0 = O.catch(3);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 18:
                  case 'end':
                    return O.stop();
                }
            },
            null,
            this,
            [[3, 14]],
            Promise
          );
        },
      },
      {
        key: 'cancelOrder',
        value: function () {
          var t, module47, module24, module25, module39, module35, module37, module34, p, y, v, T, b, S;
          return regeneratorRuntime.default.async(
            function (P) {
              for (;;)
                switch ((P.prev = P.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = this.state;
                    module25 = module24.orderDetail;
                    module39 = module24.iban;
                    module35 = module24.swift;
                    module37 = module24.cancelType;
                    module34 = module24.selectedReturnMethod;
                    P.prev = 2;
                    module47(module1224.setLoader(true));
                    p = {};
                    p = {
                      idCliente: module25.idCliente,
                      idVendasCabec: module25.idVendasCabec,
                      NOperacao: module25.NOperacao,
                      TipoCancelamento: module37,
                      idMetodoReembolso: module34.idMetodoReembolso,
                    };

                    if (2 == module34.idMetodoReembolso && module25.NOperacao.includes('TB')) {
                      p.IBAN = module39;
                      p.SWIFT = module35;
                    }

                    P.next = 9;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.cancelOrder(),
                        data: p,
                        axiosConfig: {
                          callback: this.cancelOrder,
                        },
                      })
                    );

                  case 9:
                    if ((y = P.sent).ok && y.data.success) {
                      b = module458.default.orderDetail.orderCancelled;
                      if (null != y && null != (v = y.data) && v.message) b = null == y ? undefined : null == (T = y.data) ? undefined : T.message;
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: b,
                      });
                      this.props.navigation.goBack();
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== y.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: null != y && null != (S = y.data) && S.message ? y.data.message : module458.default.generic.errorMessage,
                        });
                    }

                    module47(module1224.setLoader(false));
                    P.next = 18;
                    break;

                  case 14:
                    P.prev = 14;
                    P.t0 = P.catch(2);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 18:
                  case 'end':
                    return P.stop();
                }
            },
            null,
            this,
            [[2, 14]],
            Promise
          );
        },
      },
      {
        key: 'onCancelOrder',
        value: function () {
          var t = this;
          ReactNative.Alert.alert(module458.default.orderDetail.cancelOrder, module458.default.orderDetail.cancelOrderMessage, [
            {
              text: module458.default.generic.cancel,
              style: 'cancel',
            },
            {
              text: module458.default.generic.confirm,
              style: 'destructive',
              onPress: function () {
                t.cancelOrder();
              },
            },
          ]);
        },
      },
      {
        key: 'cancelExchanges',
        value: function (t) {
          for (var n = 0; n < t.Linhas.length; n++) {
            var o = t.Linhas[n];

            if (o.changed) {
              o.actionType = null;
              o.exchangeProductInfo = null;
              o.changed = false;
            }
          }

          this.setState({
            orderDetail: t,
            exchangeReturn: false,
          });
        },
      },
      {
        key: 'renderReturnMethod',
        value: function () {
          var t,
            n,
            o = this,
            l = this.state,
            s = l.orderDetail,
            c = l.selectedReturnMethod,
            u = l.iban,
            f = l.swift;
          l.cancelType;
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                marginTop: module474.ms(20),
              },
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.titleContainer,
                  {
                    marginHorizontal: module474.ms(20),
                    paddingHorizontal: module474.ms(10),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.titleText,
                    {
                      fontFamily: module474.FontFamily.semiBold,
                    },
                  ],
                },
                module458.default.orderDetail.returnPaymentMethod.toUpperCase()
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.radioButtonsArea,
              },
              null == s
                ? undefined
                : null == (t = s.MetodosReembolso)
                ? undefined
                : t.map(function (t, n) {
                    return p.default.createElement(
                      ReactNative.View,
                      {
                        style: z.radioButtonsView,
                      },
                      A(t.idMetodoReembolso == (null == c ? undefined : c.idMetodoReembolso), function () {
                        o.setState({
                          selectedReturnMethod: t,
                        });
                      }),
                      p.default.createElement(
                        ReactNative.Text,
                        {
                          style: z.textRadioButton,
                        },
                        t.DescricaoMetodo
                      )
                    );
                  }),
              2 == (null == c ? undefined : c.idMetodoReembolso) &&
                (null == s ? undefined : null == (n = s.NOperacao) ? undefined : n.includes('TB')) &&
                p.default.createElement(
                  ReactNative.View,
                  null,
                  p.default.createElement(module472.FloatingInput, {
                    containerExtraStyle: {
                      marginTop: module474.ms(15),
                    },
                    label: module458.default.orderDetail.iban,
                    value: u,
                    onChange: function (t) {
                      o.setState({
                        iban: t,
                      });
                    },
                  }),
                  p.default.createElement(module472.FloatingInput, {
                    containerExtraStyle: {
                      marginTop: module474.ms(5),
                    },
                    label: module458.default.orderDetail.swift,
                    value: f,
                    onChange: function (t) {
                      o.setState({
                        swift: t,
                      });
                    },
                  })
                )
            )
          );
        },
      },
      {
        key: 'renderCancelOrder',
        value: function () {
          var t,
            n,
            o,
            l,
            s = this,
            c = this.state,
            u = c.orderDetail,
            f = c.selectedReturnMethod,
            h = c.iban,
            v = c.swift,
            T = c.cancelType;
          if (null == u || !u.PodeCancelar || null == u || null == (t = u.MetodosReembolso) || !t.length) return null;
          var C = true;
          if (!(f && T && (2 != (null == f ? undefined : f.idMetodoReembolso) || null == u || null == (n = u.NOperacao) || !n.includes('TB') || (h && v)))) C = false;
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                marginTop: module474.ms(20),
              },
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.titleContainer,
                  {
                    marginHorizontal: module474.ms(20),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.titleText,
                },
                module458.default.orderDetail.cancelOrder.toUpperCase()
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.radioButtonsArea,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.titleText,
                    {
                      fontSize: module474.FontSize.s,
                    },
                  ],
                },
                module458.default.orderDetail.cancelType,
                ':'
              ),
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.radioButtonsView,
                },
                A('total' == T, function () {
                  return s.setState({
                    cancelType: 'total',
                  });
                }),
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.textRadioButton,
                  },
                  module458.default.orderDetail.cancelTotal
                )
              ),
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.radioButtonsView,
                },
                A('parcial' == T, function () {
                  return s.setState({
                    cancelType: 'parcial',
                  });
                }),
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.textRadioButton,
                  },
                  module458.default.orderDetail.cancelPartial
                )
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.radioButtonsArea,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.titleText,
                },
                module458.default.orderDetail.returnPaymentMethod,
                ':'
              ),
              null == u
                ? undefined
                : null == (o = u.MetodosReembolso)
                ? undefined
                : o.map(function (t, n) {
                    return p.default.createElement(
                      ReactNative.View,
                      {
                        style: z.radioButtonsView,
                      },
                      A(t.idMetodoReembolso == (null == f ? undefined : f.idMetodoReembolso), function () {
                        s.setState({
                          selectedReturnMethod: t,
                        });
                      }),
                      p.default.createElement(
                        ReactNative.Text,
                        {
                          style: z.textRadioButton,
                        },
                        t.DescricaoMetodo
                      )
                    );
                  }),
              2 == (null == f ? undefined : f.idMetodoReembolso) &&
                (null == u ? undefined : null == (l = u.NOperacao) ? undefined : l.includes('TB')) &&
                p.default.createElement(
                  ReactNative.View,
                  null,
                  p.default.createElement(module472.FloatingInput, {
                    containerExtraStyle: {
                      marginTop: module474.ms(15),
                    },
                    label: module458.default.orderDetail.iban,
                    value: h,
                    onChange: function (t) {
                      s.setState({
                        iban: t,
                      });
                    },
                  }),
                  p.default.createElement(module472.FloatingInput, {
                    containerExtraStyle: {
                      marginTop: module474.ms(5),
                    },
                    label: module458.default.orderDetail.swift,
                    value: v,
                    onChange: function (t) {
                      s.setState({
                        swift: t,
                      });
                    },
                  })
                )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  marginHorizontal: module474.ms(20),
                },
              },
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  disabled: !C,
                  onPress: function () {
                    return s.onCancelOrder();
                  },
                  style: [
                    z.button,
                    {
                      backgroundColor: 'white',
                      borderWidth: 1,
                      marginTop: module474.ms(10),
                    },
                    !C && {
                      opacity: 0.5,
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: module474.Color.black,
                      },
                    ],
                  },
                  module458.default.orderDetail.cancelOrder.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderOrderInfo',
        value: function () {
          var t = this,
            n = this.state,
            o = n.auxTextWidth,
            l = n.orderDetail,
            s = n.exchangeReturn,
            c = l.Estado;
          return p.default.createElement(
            ReactNative.View,
            {
              style: [
                z.simpleContainer,
                z.spaceBetweenStyle,
                {
                  paddingTop: module474.ms(15),
                },
              ],
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: z.textRow,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  onLayout: function (n) {
                    var o = n.nativeEvent.layout.width;
                    t.setState({
                      auxTextWidth: o,
                    });
                  },
                  style: z.semiBoldText,
                },
                module458.default.profile.orderNumber + ':'
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  ellipsizeMode: 'tail',
                  style: [
                    z.regularText,
                    {
                      marginLeft: module474.ms(10),
                      maxWidth: o > 0 ? ReactNative.Dimensions.get('screen').width - 2 * module474.ms(25) - o - module474.ms(10) : 0,
                    },
                  ],
                },
                l.NOperacao.toUpperCase()
              )
            ),
            !!c &&
              p.default.createElement(
                ReactNative.View,
                {
                  style: [
                    z.textRow,
                    {
                      marginTop: module474.ms(7.5),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.regularText,
                      {
                        color: 'gray',
                      },
                    ],
                  },
                  c
                )
              ),
            !(null == l || !l.PodeTrocarDevolver) &&
              !s &&
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    t.setState({
                      exchangeReturn: true,
                    });
                  },
                  style: [
                    z.button,
                    {
                      backgroundColor: 'white',
                      borderWidth: 1,
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: module474.Color.black,
                      },
                    ],
                  },
                  module458.default.orderDetail.orderReturnChange.toUpperCase()
                )
              ),
            !(null == l || !l.LinkSeguirEncomenda) &&
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    ReactNative.Linking.openURL(l.LinkSeguirEncomenda);
                  },
                  style: [
                    z.button,
                    {
                      backgroundColor: 'white',
                      borderWidth: 1,
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: module474.Color.black,
                      },
                    ],
                  },
                  module458.default.generic.trackOrder.toUpperCase()
                )
              )
          );
        },
      },
      {
        key: 'renderEditSection',
        value: function (t) {
          var n,
            o,
            l,
            s,
            c,
            u,
            f = this;
          if ('return' == t.actionType)
            return p.default.createElement(
              ReactNative.View,
              {
                style: z.editContainer,
              },
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.editSectionArea,
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.smallerText,
                  },
                  module458.default.orderDetail.return.toUpperCase()
                )
              ),
              p.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                    flexDirection: 'row',
                  },
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.smallerText,
                      {
                        fontSize: module474.FontSize.xs,
                        width: '80%',
                      },
                    ],
                  },
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.smallerText,
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
                  null == (c = t.exchangeProductInfo) ? undefined : null == (u = c.Motivo) ? undefined : u.DescricaoMotivo
                ),
                p.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      f.setState(
                        {
                          selectedProduct: t,
                          oldSelectedProduct: JSON.parse(JSON.stringify(t)),
                        },
                        function () {
                          f.setState({
                            showBottomSheet: true,
                            showExchangeReturnMotive: true,
                          });
                        }
                      );
                    },
                    style: {
                      justifyContent: 'center',
                      paddingRight: module474.ms(20),
                    },
                  },
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.smallerText,
                        {
                          fontSize: module474.FontSize.xxxs,
                        },
                      ],
                    },
                    module458.default.generic.edit.toUpperCase()
                  )
                )
              )
            );
          var h =
            null == (n = t.CoresDisponiveisTroca)
              ? undefined
              : null ==
                (o = n.find(function (n) {
                  return n.NumeroCor == t.exchangeProductInfo.NumeroCor;
                }))
              ? undefined
              : o.Pantone;
          return p.default.createElement(
            ReactNative.View,
            {
              style: z.editContainer,
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: z.editSectionArea,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.smallerText,
                },
                module458.default.orderDetail.changeFor.toUpperCase()
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              p.default.createElement(
                ReactNative.View,
                {
                  style: [
                    z.textRow,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    numberOfLines: 3,
                    style: [
                      z.semiboldText,
                      {
                        maxWidth: '60%',
                      },
                    ],
                  },
                  t.Descricao
                )
              ),
              p.default.createElement(
                ReactNative.View,
                {
                  style: [
                    z.textRow,
                    {
                      marginTop: module474.ms(2.5),
                    },
                    {
                      justifyContent: 'space-between',
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.smallerText,
                      {
                        color: 'gray',
                      },
                    ],
                  },
                  'Ref. ' + t.Referencia
                )
              ),
              p.default.createElement(
                ReactNative.View,
                {
                  style: [
                    z.textRow,
                    {
                      marginTop: module474.ms(2.5),
                    },
                  ],
                },
                h &&
                  p.default.createElement(ReactNative.View, {
                    style: [
                      z.colorCircle,
                      {
                        backgroundColor: h,
                        marginLeft: 0,
                      },
                    ],
                  }),
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.semiboldText,
                  },
                  t.exchangeProductInfo.Tamanho
                )
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.smallerText,
                    {
                      marginTop: module474.ms(5),
                      fontSize: module474.FontSize.xs,
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.smallerText,
                      {
                        fontSize: module474.FontSize.xs,
                        fontFamily: module474.FontFamily.bold,
                      },
                    ],
                  },
                  module458.default.orderDetail.motiveTitle,
                  ':'
                ),
                null == (l = t.exchangeProductInfo) ? undefined : null == (s = l.Motivo) ? undefined : s.DescricaoMotivo
              )
            ),
            p.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  f.setState(
                    {
                      selectedProduct: t,
                      oldSelectedProduct: JSON.parse(JSON.stringify(t)),
                    },
                    function () {
                      f.setState({
                        showBottomSheet: true,
                        showColorSizeMotive: true,
                      });
                    }
                  );
                },
                style: z.editButton,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.smallerText,
                    {
                      fontSize: module474.FontSize.xxxs,
                    },
                  ],
                },
                module458.default.generic.edit.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderDeliveryInfo',
        value: function () {
          var t = this,
            n = this.props,
            o = this.state.obsNumberOfCharsUsed;
          return p.default.createElement(
            ReactNative.View,
            {
              style: z.deliveryInfoArea,
            },
            p.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return t.setState({
                    showPointDeliveryBottomSheet: true,
                  });
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [z.text],
                },
                module458.default.orderDetail.seePickUpPoints
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.deliveryContainer,
              },
              p.default.createElement(ReactNative.TextInput, {
                onChangeText: function (n) {
                  return t.setState({
                    obsDelivery: n,
                    obsNumberOfCharsUsed: n.length,
                  });
                },
                placeholder: module458.default.orderDetail.observations,
                style: {
                  width: '100%',
                  height: '100%',
                },
                maxLength: 200,
                multiline: true,
              }),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.xxs,
                      color: module474.Color.lightGray,
                    },
                  ],
                },
                o,
                '/200'
              )
            )
          );
        },
      },
      {
        key: 'renderUserDeliveryAddress',
        value: function () {
          var t = this,
            n = this.props,
            o = n.user,
            l = n.navigation,
            s = this.state,
            c = s.obsNumberOfCharsUsed;
          s.selectedPickUpInfo;
          return p.default.createElement(
            ReactNative.View,
            {
              style: z.userDeliveryAddressArea,
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: [z.lightText, z.userDeliveryAddressText],
              },
              o.value.NomeEnt
            ),
            p.default.createElement(
              ReactNative.Text,
              {
                style: [z.lightText, z.userDeliveryAddressText],
              },
              o.value.MoradaEnt
            ),
            p.default.createElement(
              ReactNative.Text,
              {
                style: [z.lightText, z.userDeliveryAddressText],
              },
              o.value.CodPostalEnt + ' ' + o.value.LocalidadeEnt
            ),
            p.default.createElement(
              ReactNative.Text,
              {
                style: [z.lightText, z.userDeliveryAddressText],
              },
              o.value.THRfid_Telemovel
            ),
            p.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return l.navigate('Pro_Log_Stack', {
                    screen: 'ChangePersonalData',
                  });
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [z.text],
                },
                module458.default.generic.change + ' ' + module458.default.authentication.address
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.deliveryContainer,
              },
              p.default.createElement(ReactNative.TextInput, {
                onChangeText: function (n) {
                  return t.setState({
                    obsDelivery: n,
                    obsNumberOfCharsUsed: n.length,
                  });
                },
                placeholder: module458.default.orderDetail.observations,
                style: {
                  width: '100%',
                  height: '100%',
                },
                maxLength: 200,
              }),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.xxs,
                      color: module474.Color.lightGray,
                    },
                  ],
                },
                c,
                '/200'
              )
            )
          );
        },
      },
      {
        key: 'renderPickUpPlace',
        value: function () {
          var t = this,
            n = this.state,
            o = n.selectedPickUpInfo,
            l = n.orderDetail.LocalRecolha;
          return null != l && l.length
            ? p.default.createElement(
                ReactNative.View,
                {
                  style: z.pickUpPlaceContainerArea,
                },
                p.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      backgroundColor: module474.Color.textDarkGray,
                    },
                  },
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: z.pickUpPlaceArea,
                    },
                    module458.default.orderDetail.pickUpPlace.toUpperCase()
                  )
                ),
                l.map(function (n) {
                  var l = null == o ? undefined : o.idLocalRecolha;
                  return p.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    p.default.createElement(
                      ReactNative.View,
                      {
                        style: z.radioButtonsView,
                      },
                      A(n.idLocalRecolha == (null == o ? undefined : o.idLocalRecolha), function () {
                        if ('pickup' == n.idLocalRecolha)
                          t.setState({
                            selectedPickUpInfo: n,
                          });
                        else
                          t.setState({
                            selectedPickUpInfo: n,
                            showPointDeliveryBottomSheet: false,
                          });
                      }),
                      p.default.createElement(
                        ReactNative.Text,
                        {
                          style: z.textRadioButton,
                        },
                        n.DescricaoLocalRecolha
                      )
                    ),
                    'pickup' == l && 'pickup' == n.idLocalRecolha && t.renderDeliveryInfo(),
                    'transportadora' == l && 'transportadora' == n.idLocalRecolha && t.renderUserDeliveryAddress()
                  );
                })
              )
            : null;
        },
      },
      {
        key: 'renderExchangeSuccess',
        value: function () {
          var t = this,
            n = this.props.navigation;
          return p.default.createElement(
            ReactNative.View,
            {
              style: z.exchangeCreatedWrapper,
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: z.iconWrapper,
              },
              p.default.createElement(module472.Icon, {
                name: 'checkIcon',
                size: module474.ms(22),
                style: {
                  color: 'white',
                },
              })
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  paddingHorizontal: module474.ms(30),
                  alignItems: 'center',
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.exchangeCreatedTitle,
                },
                module458.default.orderDetail.exchangeSuccessTitle.toUpperCase()
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.exchangeCreatedButtonWrapper,
              },
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: [
                    z.button,
                    {
                      marginTop: module474.ms(10),
                    },
                  ],
                  onPress: function () {
                    t.setState({
                      showExchangeSuccess: false,
                    });
                    n.navigate('Orders');
                    n.dispatch(
                      module482.CommonActions.reset({
                        routes: [
                          {
                            name: 'Orders',
                            state: {
                              routes: [
                                {
                                  name: 'Orders',
                                },
                              ],
                            },
                          },
                        ],
                      })
                    );
                  },
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.buttonText,
                  },
                  module458.default.generic.orders.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderPickUpDate',
        value: function () {
          var t,
            n = this,
            o = ReactNative.Appearance.getColorScheme(),
            l = this.state,
            s = l.selectedPickUpInfo,
            c = l.orderDetail,
            u = l.pickupDate,
            f = l.showDatePicker,
            h = l.obsNumberOfCharsUsed;
          if (!l.showPickUp || 'pickup' == (null == s ? undefined : s.idLocalRecolha)) return null;

          if (u) {
            var v = u.split('-');
            t = new Date(+v[2], v[1] - 1, +v[0]);
          } else t = module1278.DateTime.fromFormat(c.DevTroca_DataRecolha, 'yyyy-MM-dd').toFormat('dd-MM-yyyy');

          return p.default.createElement(
            ReactNative.View,
            {
              style: z.pickUpDateArea,
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: module474.Color.textDarkGray,
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.pickUpPlaceArea,
                },
                module458.default.orderDetail.pickUpDate.toUpperCase()
              )
            ),
            p.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.setState({
                    showDatePicker: true,
                  });
                },
                style: {
                  marginTop: module474.ms(10),
                },
              },
              p.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                p.default.createElement(module472.FloatingInput, {
                  label: '',
                  value: u || t,
                  disabled: true,
                  disabledLine: true,
                  containerExtraStyle: z.pickUpPlaceAreaExtraStyle,
                  onChange: function (t) {
                    return n.setState({
                      pickupDate: t,
                    });
                  },
                })
              )
            ),
            p.default.createElement(P.default, {
              mode: 'date',
              modal: true,
              textColor: 'dark' === o ? 'white' : 'black',
              open: f,
              minimumDate: new Date(null == c ? undefined : c.DevTroca_DataRecolha),
              date: u ? new Date(t) : new Date(),
              onConfirm: function (t) {
                n.setState({
                  showDatePicker: false,
                  pickupDate: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
                });
              },
              onCancel: function () {
                n.setState({
                  showDatePicker: false,
                });
              },
            }),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.pickUpPlaceInputArea,
              },
              p.default.createElement(ReactNative.TextInput, {
                onChangeText: function (t) {
                  return n.setState({
                    obsDelivery: t,
                    obsNumberOfCharsUsed: t.length,
                  });
                },
                placeholder: module458.default.orderDetail.observations,
                style: {
                  width: '100%',
                  height: '100%',
                },
                maxLength: 200,
                multiline: true,
              }),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.pickUpPlaceInputText,
                },
                h,
                '/200'
              )
            )
          );
        },
      },
      {
        key: 'renderOrderCards',
        value: function () {
          var t = this,
            n = this.state,
            o = n.orderDetail,
            l = o.Linhas,
            s = o.LinkInfoTrocasDevolucoes,
            c = n.exchangeReturn,
            u = n.showPickUp;
          n.selectedPickUpInfo;
          return p.default.createElement(
            ReactNative.View,
            {
              style: [
                z.topBorder,
                {
                  marginTop: module474.ms(20),
                },
              ],
            },
            l.map(function (n) {
              return p.default.createElement(
                p.default.Fragment,
                null,
                p.default.createElement(module472.WishlistCard, {
                  product: n,
                  hideRightContent: true,
                  isOrderDetailCard: true,
                  exchangeReturn: c,
                  pickUpView: u,
                  onPressExchangeReturn: function (n, o) {
                    return t.onPressExchangeReturn(n, o);
                  },
                }),
                c && !(null == n || !n.changed) && !u && t.renderEditSection(n)
              );
            }),
            u && c && this.renderPickUpPlace(),
            u && c && this.renderReturnMethod(),
            u && c && this.renderPickUpDate(),
            c &&
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.seeInfoExchangeArea,
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.seeInfoExchange,
                  },
                  module458.default.orderDetail.seeExchangeInfo,
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.seeInfoExchange,
                        {
                          fontFamily: module474.FontFamily.bold,
                          textDecorationLine: 'underline',
                        },
                      ],
                      onPress: function () {
                        return t.props.navigation.navigate('Help', {
                          title: module458.default.orderDetail.exchangeReturnTitle,
                          uri: s,
                        });
                      },
                    },
                    module458.default.orderDetail.exchangeReturnPress
                  )
                )
              )
          );
        },
      },
      {
        key: 'renderOrderSummary',
        value: function () {
          var t = this.state.orderDetail,
            n = t.SubTotal,
            o = t.Descontos,
            l = t.ValesCreditos,
            s = t.PortesEnvio,
            c = t.Total;
          return p.default.createElement(
            ReactNative.View,
            {
              style: [
                z.simpleContainer,
                z.spaceBetweenStyle,
                {
                  paddingVertical: module474.ms(20),
                },
              ],
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: z.semiBoldText,
              },
              module458.default.generic.purchaseSummary
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.textRow,
                  z.textRowSpaceBetween,
                  {
                    marginTop: module474.ms(10),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                module458.default.generic.subtotal
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                n > 0 ? n.toFixed(2) + ' \u20ac' : '0.00 \u20ac'
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.textRow,
                  z.textRowSpaceBetween,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                module458.default.generic.discount
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                o > 0 ? o.toFixed(2) + ' \u20ac' : '0.00 \u20ac'
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.textRow,
                  z.textRowSpaceBetween,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                module458.default.generic.vouchersOrCredits
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                l > 0 ? l.toFixed(2) + ' \u20ac' : '0.00 \u20ac'
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.textRow,
                  z.textRowSpaceBetween,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                module458.default.generic.delivery
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.regularText,
                },
                s > 0 ? s.toFixed(2) + ' \u20ac' : module458.default.generic.free
              )
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.textRow,
                  z.textRowSpaceBetween,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.semiBoldText,
                    {
                      fontSize: module474.FontSize.xl,
                    },
                  ],
                },
                module458.default.generic.total.toUpperCase()
              ),
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.semiBoldText,
                    {
                      fontSize: module474.FontSize.xl,
                    },
                  ],
                },
                c > 0 ? c.toFixed(2) + ' \u20ac' : '0.00 \u20ac'
              )
            )
          );
        },
      },
      {
        key: 'renderEditBillingAddress',
        value: function () {
          var t = this,
            n = module1836.CStyles(),
            o = this.state,
            l = o.name,
            s = o.address,
            c = o.zipCode,
            u = o.city,
            f = o.highlightMissingFields,
            h = o.vatNumber,
            v = [l, s, c, u].every(function (t) {
              return 0 === t || t;
            }),
            C = ReactNative.Dimensions.get('window').width / 2 - module474.ms(20) - module474.ms(10);
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                marginHorizontal: module474.ms(20),
              },
            },
            p.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(10),
              },
              label: module458.default.authentication.name,
              value: l,
              onChange: function (n) {
                return t.setState({
                  name: n,
                });
              },
              highlightRed: f && !l,
            }),
            p.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(5),
              },
              label: module458.default.authentication.address,
              value: s,
              onChange: function (n) {
                return t.setState({
                  address: n,
                });
              },
            }),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.halfSizedInputsContainer,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: C,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.zipCode,
                keyboardType: 'numbers-and-punctuation',
                value: c,
                onChange: function (n) {
                  return t.setState({
                    zipCode: n,
                  });
                },
              }),
              p.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: C,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.city,
                value: u,
                onChange: function (n) {
                  return t.setState({
                    city: n,
                  });
                },
              })
            ),
            p.default.createElement(module472.FloatingInput, {
              label: module458.default.generic.vatNumber,
              keyboardType: 'numeric',
              value: h,
              onChange: function (n) {
                return t.setState({
                  vatNumber: n,
                });
              },
              toggle: function () {
                return t.setState({
                  vatNumber: '',
                });
              },
            }),
            p.default.createElement(
              ReactNative.TouchableOpacity,
              {
                disabled: !v,
                style: [
                  n.button,
                  {
                    marginVertical: module474.ms(10),
                  },
                  !v && {
                    opacity: 0.5,
                  },
                ],
                onPress: function () {
                  return t.changeAddress('billing');
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.orderDetail.changeAddress.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderEditDeliveryAddress',
        value: function () {
          var t = this,
            n = module1836.CStyles(),
            o = this.state,
            l = o.deliveryName,
            s = o.deliveryAddress,
            c = o.deliveryZipCode,
            u = o.deliveryCity,
            f = [l, s, c, u].every(function (t) {
              return 0 === t || t;
            }),
            h = ReactNative.Dimensions.get('window').width / 2 - module474.ms(20) - module474.ms(10);
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                marginHorizontal: module474.ms(20),
              },
            },
            p.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(10),
              },
              label: module458.default.authentication.name,
              value: l,
              onChange: function (n) {
                return t.setState({
                  deliveryName: n,
                });
              },
            }),
            p.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(5),
              },
              label: module458.default.authentication.address,
              value: s,
              onChange: function (n) {
                return t.setState({
                  deliveryAddress: n,
                });
              },
            }),
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.halfSizedInputsContainer,
                  {
                    marginTop: module474.ms(5),
                  },
                ],
              },
              p.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: h,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.zipCode,
                keyboardType: 'numbers-and-punctuation',
                value: c,
                onChange: function (n) {
                  return t.setState({
                    deliveryZipCode: n,
                  });
                },
              }),
              p.default.createElement(module472.FloatingInput, {
                containerExtraStyle: {
                  width: h,
                },
                labelTextExtraStyle: {
                  position: 'absolute',
                  left: '100%',
                },
                label: module458.default.authentication.city,
                value: u,
                onChange: function (n) {
                  return t.setState({
                    deliveryCity: n,
                  });
                },
              })
            ),
            p.default.createElement(
              ReactNative.TouchableOpacity,
              {
                disabled: !f,
                style: [
                  n.button,
                  {
                    marginVertical: module474.ms(10),
                  },
                  !f && {
                    opacity: 0.5,
                  },
                ],
                onPress: function () {
                  return t.changeAddress('delivery');
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.orderDetail.changeAddress.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderAddressesInfo',
        value: function () {
          var t = this,
            n = this.state,
            o = n.orderDetail,
            l = n.editBillingAddress,
            s = n.editDeliveryAddress,
            c = o.Facturacao_CPLocalidade,
            u = o.Facturacao_Morada,
            f = o.Facturacao_Nome,
            h = o.Entrega_CPLocalidade,
            v = o.Entrega_Morada,
            E = o.Entrega_Nome,
            T = o.PodeAlterarMoradas;
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                width: '100%',
              },
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: [z.addressContainer, z.bottomBorder],
              },
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.adressesInfoContainer,
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.semiBoldText,
                  },
                  module458.default.generic.billingAddress.toUpperCase()
                ),
                p.default.createElement(
                  ReactNative.View,
                  null,
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.regularText,
                        {
                          fontFamily: module474.FontFamily.light,
                          marginTop: module474.ms(15),
                        },
                      ],
                    },
                    f + ', ' + u
                  ),
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.regularText,
                        {
                          fontFamily: module474.FontFamily.light,
                        },
                      ],
                    },
                    c
                  )
                )
              ),
              T &&
                p.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      t.setState({
                        editBillingAddress: !l,
                      });
                    },
                    style: [
                      z.regularText,
                      {
                        fontFamily: module474.FontFamily.light,
                        textDecorationLine: 'underline',
                        marginLeft: module474.ms(5),
                      },
                    ],
                  },
                  l ? module458.default.generic.close : module458.default.generic.edit
                )
            ),
            l && this.renderEditBillingAddress(),
            p.default.createElement(
              ReactNative.View,
              {
                style: z.addressContainer,
              },
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.adressesInfoContainer,
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.semiBoldText,
                  },
                  module458.default.generic.shippingAddress.toUpperCase()
                ),
                p.default.createElement(
                  ReactNative.View,
                  null,
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.regularText,
                        {
                          fontFamily: module474.FontFamily.light,
                          marginTop: module474.ms(15),
                        },
                      ],
                    },
                    E + ', ' + v
                  ),
                  p.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        z.regularText,
                        {
                          fontFamily: module474.FontFamily.light,
                        },
                      ],
                    },
                    h
                  )
                )
              ),
              T &&
                p.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      t.setState({
                        editDeliveryAddress: !s,
                      });
                    },
                    style: [
                      z.regularText,
                      {
                        fontFamily: module474.FontFamily.light,
                        textDecorationLine: 'underline',
                        marginLeft: module474.ms(5),
                      },
                    ],
                  },
                  s ? module458.default.generic.close : module458.default.generic.edit
                )
            ),
            s && this.renderEditDeliveryAddress()
          );
        },
      },
      {
        key: 'renderReceiptInfo',
        value: function () {
          var t = this.props.navigation,
            n = this.state.orderDetail.Facturas;
          return null != n && n.length
            ? p.default.createElement(
                ReactNative.View,
                {
                  style: [
                    z.simpleContainer,
                    {
                      paddingVertical: module474.ms(15),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: z.regularText,
                  },
                  module458.default.generic.invoice + 's / ' + module458.default.generic.creditNote
                ),
                n.map(function (n) {
                  return p.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      onPress: function () {
                        return t.navigate('ReceiptView', {
                          receipt: n,
                        });
                      },
                    },
                    p.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          z.textRow,
                          {
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      p.default.createElement(module472.Icon, {
                        name: 'mandat-Outline',
                        size: module474.ms(26),
                      }),
                      p.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            z.lightText,
                            {
                              marginLeft: module474.ms(5),
                            },
                          ],
                        },
                        n.Descricao
                      )
                    )
                  );
                })
              )
            : null;
        },
      },
      {
        key: 'renderExchangeReturn',
        value: function () {
          var t = this,
            n = this.state,
            o = n.orderDetail,
            l = n.selectedPickUpInfo,
            s = n.showPickUp,
            c = n.selectedReturnMethod,
            u = !!o.Linhas.find(function (t) {
              return !(null == t || !t.changed);
            });
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                paddingHorizontal: module474.ms(20),
              },
            },
            u &&
              (l || !(null != o && o.LocalRecolha)) &&
              s &&
              c &&
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    t.onFinishReturnExchange();
                  },
                  style: [
                    z.button,
                    {
                      backgroundColor: 'black',
                      borderWidth: 1,
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: 'white',
                      },
                    ],
                  },
                  module458.default.generic.done.toUpperCase()
                )
              ),
            u &&
              !s &&
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    t.setState({
                      showPickUp: true,
                    });
                  },
                  style: [
                    z.button,
                    {
                      backgroundColor: 'black',
                      borderWidth: 1,
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: 'white',
                      },
                    ],
                  },
                  module458.default.generic.continue.toUpperCase()
                )
              ),
            p.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  t.cancelExchanges(o);
                },
                style: [
                  z.button,
                  {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    marginVertical: module474.ms(15),
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    z.buttonText,
                    {
                      color: module474.Color.black,
                    },
                  ],
                },
                module458.default.generic.cancel.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderSizeItem',
        value: function (t) {
          var n,
            o,
            l,
            s,
            c,
            u = this,
            f = t.item,
            h = this.state.selectedProduct,
            v =
              f.Tamanho ===
              (null != (n = h) && null != (o = n.exchangeProductInfo) && o.Tamanho
                ? null == (l = h)
                  ? undefined
                  : null == (s = l.exchangeProductInfo)
                  ? undefined
                  : s.Tamanho
                : null == (c = h)
                ? undefined
                : c.Tamanho);
          return p.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                if (h.exchangeProductInfo) h.exchangeProductInfo.Tamanho = f.Tamanho;
                else
                  h = V(
                    V({}, h),
                    {},
                    {
                      exchangeProductInfo: {
                        Tamanho: f.Tamanho,
                      },
                    }
                  );
                u.setState({
                  selectedProduct: h,
                });
              },
              style: z.productSizeItemContainer,
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: [
                  z.productSizeItemText,
                  v && {
                    color: module474.Color.black,
                  },
                ],
              },
              f.Tamanho
            )
          );
        },
      },
      {
        key: 'renderColorItem',
        value: function (t) {
          var n,
            o,
            l,
            s,
            c,
            u = this,
            f = t.item,
            h = this.state.selectedProduct,
            v =
              null != (n = h) && null != (o = n.exchangeProductInfo) && o.NumeroCor
                ? null == (l = h)
                  ? undefined
                  : null == (s = l.exchangeProductInfo)
                  ? undefined
                  : s.NumeroCor
                : null == (c = h)
                ? undefined
                : c.NumeroCor;
          return f.NumeroCor === v
            ? p.default.createElement(
                ReactNative.View,
                {
                  key: 'item_' + f.NumeroCor,
                  style: z.selectedColorCircle,
                },
                p.default.createElement(ReactNative.View, {
                  style: [
                    z.colorCircle,
                    {
                      backgroundColor: f.Pantone ? f.Pantone : 'black',
                    },
                  ],
                })
              )
            : p.default.createElement(ReactNative.TouchableOpacity, {
                key: 'color' + f.NumeroCor,
                onPress: function () {
                  var t,
                    n =
                      null == (t = h.TamanhosDisponiveisTroca)
                        ? undefined
                        : t.find(function (t) {
                            return t.NumeroCor === f.NumeroCor;
                          });

                  if (h.exchangeProductInfo) {
                    h.exchangeProductInfo.NumeroCor = f.NumeroCor;
                    h.exchangeProductInfo.Tamanho = n.tamanhos[0].Tamanho;
                  } else
                    h = V(
                      V({}, h),
                      {},
                      {
                        exchangeProductInfo: {
                          NumeroCor: f,
                          Tamanho: n.tamanhos[0].Tamanho,
                        },
                      }
                    );

                  u.setState(
                    {
                      selectedProduct: h,
                    },
                    function () {
                      var t;
                      return null == (t = u.productImgsRef.current)
                        ? undefined
                        : t.scrollToOffset({
                            animated: true,
                            offset: 0,
                          });
                    }
                  );
                },
                style: [
                  z.colorCircle,
                  {
                    backgroundColor: f.Pantone ? f.Pantone : 'black',
                    borderColor: module474.Color.grayBorder,
                    borderWidth: ReactNative.StyleSheet.hairlineWidth,
                  },
                ],
              });
        },
      },
      {
        key: 'renderMotiveItem',
        value: function (t) {
          var n,
            o,
            l,
            s = this,
            c = t.item,
            u = this.state.selectedProduct,
            f = (null == (n = u) ? undefined : null == (o = n.exchangeProductInfo) ? undefined : null == (l = o.Motivo) ? undefined : l.idMotivo) == c.idMotivo;
          return p.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                if (u.exchangeProductInfo) u.exchangeProductInfo.Motivo = c;
                else
                  u = V(
                    V({}, u),
                    {},
                    {
                      exchangeProductInfo: V(
                        V({}, u.exchangeProductInfo),
                        {},
                        {
                          Motivo: c,
                        }
                      ),
                    }
                  );
                if ('exchange' == u.actionType)
                  s.setState({
                    selectedProduct: u,
                    showExchangeReturnMotive: false,
                    showBottomSheet: 'exchange' == u.actionType,
                    showColorSizeMotive: 'exchange' == u.actionType,
                  });
                else
                  s.setState({
                    selectedProduct: u,
                  });
              },
              style: [z.motiveItemContainer],
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: [
                  z.motiveItemText,
                  f && {
                    fontFamily: module474.FontFamily.bold,
                  },
                ],
              },
              c.DescricaoMotivo
            )
          );
        },
      },
      {
        key: 'renderMotiveContainer',
        value: function (t) {
          var n = this.state,
            o = n.selectedProduct;
          if (!n.showExchangeReturnMotive) return null;
          var l = 'exchange' == o.actionType ? o.MotivosTroca : o.MotivosDevolucao;
          return p.default.createElement(
            ReactNative.View,
            {
              style: {
                justifyContent: 'flex-start',
                height: 'return' === t ? '80%' : '100%',
              },
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: z.bottomSheetTitleTexts,
              },
              module458.default.orderDetail.motiveTitle.toUpperCase()
            ),
            p.default.createElement(ReactNative.FlatList, {
              key: 'motiveList',
              keyExtractor: B,
              renderItem: this.renderMotiveItem,
              data: l,
              showsVerticalScrollIndicator: false,
              removeClippedSubviews: true,
              extraData: this.state,
            })
          );
        },
      },
      {
        key: 'renderColorSizeMotive',
        value: function () {
          var t,
            n,
            o = this,
            l = this.state.selectedProduct;
          if (!l) return null;
          var s =
            null == (t = l.TamanhosDisponiveisTroca)
              ? undefined
              : t.find(function (t) {
                  return l.exchangeProductInfo ? t.NumeroCor === l.exchangeProductInfo.NumeroCor : t.NumeroCor === l.NumeroCor;
                });
          return p.default.createElement(
            ReactNative.View,
            {
              style: z.colorSizeMotiveArea,
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: z.colorSizeMotiveContainer,
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.colorSizeMotiveText,
                },
                module458.default.orderDetail.color.toUpperCase()
              ),
              p.default.createElement(ReactNative.FlatList, {
                key: 'productColorsFlatList',
                keyExtractor: F,
                horizontal: true,
                style: {
                  flexGrow: 0,
                },
                contentContainerStyle: [
                  z.colorSizeMotiveContentStyle,
                  {
                    marginTop: module474.ms(15),
                  },
                ],
                showsHorizontalScrollIndicator: false,
                data: l.CoresDisponiveisTroca,
                renderItem: this.renderColorItem,
                extraData: this.state,
              })
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  justifyContent: 'center',
                  marginVertical: module474.ms(20),
                },
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: z.colorSizeMotiveText,
                },
                module458.default.orderDetail.size.toUpperCase()
              ),
              p.default.createElement(ReactNative.FlatList, {
                key: 'productSizesFlatList',
                keyExtractor: O,
                horizontal: true,
                style: {
                  flexGrow: 0,
                },
                contentContainerStyle: z.colorSizeMotiveContentStyle,
                showsHorizontalScrollIndicator: false,
                data: s.tamanhos,
                renderItem: this.renderSizeItem,
                extraData: this.state,
              })
            ),
            p.default.createElement(
              ReactNative.View,
              {
                style: {
                  alignItems: 'center',
                },
              },
              p.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    o.setState({
                      showExchangeReturnMotive: true,
                      showColorSizeMotive: false,
                    });
                  },
                  style: [z.button, z.motiveButton],
                },
                p.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      z.buttonText,
                      {
                        color: module474.Color.black,
                      },
                    ],
                  },
                  null != (n = l.exchangeProductInfo) && n.Motivo ? l.exchangeProductInfo.Motivo.DescricaoMotivo : module458.default.orderDetail.chooseMotive
                )
              )
            )
          );
        },
      },
      {
        key: 'onCloseBottom',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
            n = this.state,
            o = n.orderDetail,
            l = n.selectedProduct,
            s = n.showColorSizeMotive,
            c = n.oldSelectedProduct;

          if (s) {
            if (null != l && l.changed) {
              if (c && !t) for (var u = 0; u < o.Linhas.length; u++) l.idVendasLinhas == o.Linhas[u].idVendasLinhas && (o.Linhas[u] = c);
            } else
              for (var f = 0; f < o.Linhas.length; f++)
                l.idVendasLinhas == o.Linhas[f].idVendasLinhas && ((l.exchangeProductInfo = null), (l.actionType = null), (o.Linhas[f] = l));

            this.setState({
              oldSelectedProduct: null,
              orderDetail: o,
              showBottomSheet: false,
              selectedProduct: null,
              showColorSizeMotive: false,
              showExchangeReturnMotive: false,
            });
          } else {
            if ('return' == (null == l ? undefined : l.actionType)) {
              if (t) for (var h = 0; h < o.Linhas.length; h++) l.idVendasLinhas == o.Linhas[h].idVendasLinhas && (o.Linhas[h] = l);
              else
                for (var p = 0; p < o.Linhas.length; p++)
                  l.idVendasLinhas == o.Linhas[p].idVendasLinhas && ((l.exchangeProductInfo = null), (l.actionType = null), (o.Linhas[p] = c || l));
              return void this.setState({
                orderDetail: o,
                oldSelectedProduct: null,
                showBottomSheet: false,
                selectedProduct: null,
                showColorSizeMotive: false,
                showExchangeReturnMotive: false,
              });
            }

            this.setState({
              showBottomSheet: false,
              selectedProduct: null,
              showColorSizeMotive: false,
              showExchangeReturnMotive: false,
            });
          }
        },
      },
      {
        key: 'renderPointItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = module1836.CStyles();
          return p.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState({
                  selectedPoint: o,
                  showPointDeliveryBottomSheet: false,
                });
              },
              style: [l.pointItemContainer],
            },
            p.default.createElement(
              ReactNative.Text,
              {
                style: l.pointItemText,
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
            o,
            l = this,
            s = module1836.CStyles(),
            c = this.state,
            u = c.showPointDeliveryBottomSheet,
            f = c.orderDetail.LocalRecolha,
            h = this.state,
            v = h.tempPointSearch,
            C = [],
            w =
              null == f
                ? undefined
                : f.find(function (t) {
                    return 'pickup' == t.idLocalRecolha;
                  });
          if (
            (null != w && null != (n = w.PontosEntrega) && n.length && (C = JSON.parse(JSON.stringify(null == w ? undefined : w.PontosEntrega))),
            (null == v ? undefined : v.length) > 2)
          )
            C =
              null == (o = w.PontosEntrega)
                ? undefined
                : o.filter(function (t) {
                    return (
                      (null == t ? undefined : t.Nome.toLowerCase().includes(v)) ||
                      (null == t ? undefined : t.Morada.toLowerCase().includes(v)) ||
                      (null == t ? undefined : t.Localidade.toLowerCase().includes(v))
                    );
                  });
          return p.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSPoint',
              visible: u,
              snapPoints: [-1, '95%'],
              onClose: function () {
                l.setState({
                  showPointDeliveryBottomSheet: false,
                });
              },
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.storesDistrictsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              p.default.createElement(
                ReactNative.Text,
                {
                  style: s.bottomSheetTitleTexts,
                },
                module458.default.generic.pickUpAtDeliveryPoints.toUpperCase()
              ),
              p.default.createElement(
                ReactNative.View,
                null,
                p.default.createElement(module472.FloatingInput, {
                  isSearch: true,
                  containerExtraStyle: {
                    width: '100%',
                  },
                  label: module458.default.generic.search,
                  value: v,
                  onChange: function (t) {
                    return l.setState({
                      tempPointSearch: t,
                    });
                  },
                })
              ),
              p.default.createElement(ReactNative.FlatList, {
                key: 'pointsList',
                keyExtractor: N,
                renderItem: this.renderPointItem,
                data: C,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
              })
            )
          );
        },
      },
      {
        key: 'renderBottomSheet',
        value: function (t) {
          var n = this,
            o = this.state,
            l = o.showBottomSheet,
            s = o.showColorSizeMotive,
            c = o.showExchangeReturnMotive,
            u = o.orderDetail,
            f = o.selectedProduct,
            h = null == f ? undefined : f.exchangeProductInfo,
            v = false;
          if (s && null != h && h.NumeroCor && null != h && h.Tamanho && null != h && h.Motivo) v = true;
          if ('return' == (null == f ? undefined : f.actionType) && c) v = true;
          return p.default.createElement(
            module472.BottomSheet,
            {
              key: 'BottomSheet',
              visible: l,
              snapPoints: [-1, module474.ms(400)],
              onClose: function () {
                return n.onCloseBottom();
              },
            },
            p.default.createElement(
              ReactNative.View,
              {
                style: [
                  z.bottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              p.default.createElement(
                ReactNative.View,
                {
                  style: z.bottomSheetContent,
                },
                s && this.renderColorSizeMotive(),
                c && this.renderMotiveContainer(null == f ? undefined : f.actionType),
                (!c || 'return' == (null == f ? undefined : f.actionType)) &&
                  p.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      disabled: !v,
                      onPress: function () {
                        for (var t = 0; t < u.Linhas.length; t++) f.idVendasLinhas == u.Linhas[t].idVendasLinhas && ((f.changed = true), (u.Linhas[t] = f));

                        n.setState(
                          {
                            orderDetail: u,
                          },
                          function () {
                            return n.onCloseBottom(true);
                          }
                        );
                      },
                      style: [
                        z.bottomSheetButton,
                        !v && {
                          opacity: 0.5,
                        },
                      ],
                    },
                    p.default.createElement(
                      ReactNative.Text,
                      {
                        style: z.buttonText,
                      },
                      module458.default.generic.confirm.toUpperCase()
                    )
                  )
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function (t) {
          var n = this.state.exchangeReturn;
          return p.default.createElement(
            module1503.KeyboardAwareScrollView,
            {
              showsVerticalScrollIndicator: false,
            },
            this.renderOrderInfo(),
            this.renderOrderCards(),
            !n && p.default.createElement(p.default.Fragment, null, this.renderOrderSummary(), this.renderAddressesInfo(), this.renderReceiptInfo(), this.renderCancelOrder()),
            n && this.renderExchangeReturn(),
            this.renderBottomSheet(t),
            this.renderPointDeliveryBottomSheet(t)
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.loaded,
            l = n.showExchangeSuccess;
          return o
            ? l
              ? p.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
                  return p.default.createElement(
                    ReactNative.View,
                    {
                      style: z.root,
                    },
                    p.default.createElement(
                      module472.Wrapper,
                      {
                        edges: ['right', 'left'],
                      },
                      t.renderExchangeSuccess()
                    )
                  );
                })
              : p.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
                  return p.default.createElement(
                    ReactNative.View,
                    {
                      style: z.root,
                    },
                    p.default.createElement(module472.Header, {
                      back: true,
                      title: module458.default.generic.orderDetails,
                    }),
                    p.default.createElement(
                      module472.Wrapper,
                      {
                        edges: ['right', 'left'],
                        style: z.root,
                      },
                      t.renderContent(n)
                    )
                  );
                })
            : p.default.createElement(ReactNative.View, null);
        },
      },
    ]);
    return R;
  })(p.Component),
  _ = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(U);

exports.default = _;
