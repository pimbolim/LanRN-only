var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module25 = require('./25'),
  module24 = require('./24'),
  module1228 = require('./1228'),
  ReactNative = require('react-native'),
  module1256 = require('./1256'),
  module458 = require('./458'),
  module437 = require('./437'),
  module1224 = require('./1224'),
  module472 = require('./472'),
  module1262 = require('./1262'),
  b = ['method', 'url', 'params', 'axiosConfig'],
  A = ['method', 'url', 'data', 'params', 'axiosConfig'],
  y = ['displayLoader'],
  P = ['displayLoader', 'dismissLoaderOnLoad', 'handleError', 'callback'],
  C = ['headers'];

function I(t, n) {
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

function L(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      I(Object(s), true).forEach(function (n) {
        module47.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      I(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var _ = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  source: 'app',
  os: ReactNative.Platform.OS,
  version: module1256.default.getVersion(),
  lang: module1262.convertLanguage(),
};
exports.DEFAULT_HEADERS = _;
var N = {
  timeout: 4e4,
  validateStatus: function (t) {
    return t >= 200 && t < 400;
  },
};
exports.DEFAULT_CONFIG = N;
exports.NONE = null;
exports.CLIENT_ERROR = 'CLIENT_ERROR';
exports.SERVER_ERROR = 'SERVER_ERROR';
exports.TIMEOUT_ERROR = 'TIMEOUT_ERROR';
exports.CONNECTION_ERROR = 'CONNECTION_ERROR';
exports.NETWORK_ERROR = 'NETWORK_ERROR';
exports.UNKNOWN_ERROR = 'UNKNOWN_ERROR';
exports.CANCEL_ERROR = 'CANCEL_ERROR';
exports.DUPLICATE_REQUEST = 'DUPLICATE_REQUEST';
var T = ['ECONNABORTED'];
exports.TIMEOUT_ERROR_CODES = T;
var S = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET'];
exports.NODEJS_CONNECTION_ERROR_CODES = S;

var U = function (t, n, o) {
    return t >= n && t <= o;
  },
  D = function (t) {
    return U(t, 200, 399);
  },
  k = function (t) {
    return U(t, 500, 599);
  },
  x = function (t) {
    return null == t ? 'UNKNOWN_ERROR' : D(t) ? null : U(t, 400, 499) ? 'CLIENT_ERROR' : k(t) ? 'SERVER_ERROR' : 'UNKNOWN_ERROR';
  };

exports.getProblemFromStatus = x;

var W = function (t) {
  return 'Network Error' === (null == t ? undefined : t.message)
    ? 'NETWORK_ERROR'
    : 'DUPLICATE_REQUEST' === (null == t ? undefined : t.message)
    ? 'DUPLICATE_REQUEST'
    : module1228.default.isCancel(t)
    ? 'CANCEL_ERROR'
    : null == (null == t ? undefined : t.code)
    ? x(null == (n = null == t ? undefined : t.response) ? null : n.status)
    : T.includes(null == t ? undefined : t.code)
    ? 'TIMEOUT_ERROR'
    : S.includes(null == t ? undefined : t.code)
    ? 'CONNECTION_ERROR'
    : 'UNKNOWN_ERROR';
  var n;
};

exports.getProblemFromError = W;
exports.baseURL = 'https://www.2bstyle.net/lanidorAPI/api';
var j = {},
  B = module25.default(function t() {
    var o = this,
      l = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    module24.default(this, t);

    this.setConnection = function (t) {
      if (module437.Store.getState().isConnected.value !== t) module437.Store.dispatch(module1224.setIsConnected(t));
    };

    this.setHeader = function (t, n) {
      o.headers[t] = n;
      return o.instance;
    };

    this.removeHeader = function (t) {
      delete o.headers[t];
      return o.instance;
    };

    this.setBaseUrl = function (t) {
      o.instance.defaults.baseURL = t;
      return o.instance;
    };

    this.getBaseURL = function () {
      return o.instance.defaults.baseURL;
    };

    this.defaultHeaders = function () {
      var t = module437.Store.getState(),
        n = t.token,
        o = t.notificationToken,
        s = {
          'Accept-Language': module458.default.getLanguage(),
        };
      if (n.value) s.Authorization = 'Bearer ' + n.value;
      if (o) s.NotifToken = o.value;
      return s;
    };

    this.requestWithoutBody = function (t) {
      var n = t.method,
        l = undefined === n ? '' : n,
        c = t.url,
        p = undefined === c ? '' : c,
        w = t.params,
        h = undefined === w ? {} : w,
        f = t.axiosConfig,
        R = undefined === f ? {} : f,
        E = module53.default(t, b);
      return o.request(
        module11.default(
          {
            url: p,
            params: h,
            method: l,
          },
          E,
          R
        )
      );
    };

    this.requestWithBody = function (t) {
      var n = t.method,
        l = undefined === n ? '' : n,
        c = t.url,
        p = undefined === c ? '' : c,
        w = t.data,
        h = undefined === w ? null : w,
        f = t.params,
        R = undefined === f ? {} : f,
        E = t.axiosConfig,
        v = undefined === E ? {} : E,
        O = module53.default(t, A);
      return o.request(
        module11.default(
          {
            url: p,
            method: l,
            data: h,
            params: R,
          },
          O,
          v
        )
      );
    };

    this.request = function (t) {
      var n = t.displayLoader,
        s = undefined === n || n,
        l = module53.default(t, y),
        c = module437.Store.getState().loader;
      if (s && !c.value) module437.Store.dispatch(module1224.setLoader(true));
      l.headers = L(L(L({}, o.headers), o.defaultHeaders()), l.headers);
      var w = l.method + '_' + l.url;
      if (undefined !== j[w]) j[w].cancel('DUPLICATE_REQUEST');
      j[w] = module1228.default.CancelToken.source();
      l.cancelToken = j[w].token;
      var h = new Date().valueOf(),
        f = o.chain(h, t, w);
      return o.instance.request(l).then(f).catch(f);
    };

    this.chain = function (t, s, l) {
      var c = s.displayLoader,
        p = undefined === c || c,
        w = s.dismissLoaderOnLoad,
        h = undefined === w || w,
        f = s.handleError,
        v = undefined !== f && f,
        O = s.callback,
        b = undefined === O ? function () {} : O,
        A = module53.default(s, P);
      return function (s) {
        var u, c, w;
        return regeneratorRuntime.default.async(
          function (f) {
            for (;;)
              switch ((f.prev = f.next)) {
                case 0:
                  f.next = 2;
                  return regeneratorRuntime.default.awrap(o.convertResponse(t, s));

                case 2:
                  (c = f.sent).sentHeaders = A.headers;
                  delete j[l];
                  if (c.originalError && !v) o.handleError(c, b);
                  else o.setConnection(true);
                  w = p;
                  if (!h) w = false;
                  if (w) module437.Store.dispatch(module1224.setLoader(false));
                  if (null != (u = c.data)) u.error;
                  return f.abrupt('return', c);

                case 11:
                case 'end':
                  return f.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };
    };

    this.convertResponse = function (t, o) {
      var module11, module53, l, module24, w, h, module458, module437, module1224, module472, O, b, A, y;
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                module11 = new Date().valueOf();
                module53 = module11 - t;
                l = o instanceof Error || module1228.default.isCancel(o);
                module24 = o;
                w = o;
                h = l ? w.response : module24;
                module458 = (h && h.status) || 0;
                module437 = l ? W(o) : x(module458);
                module1224 = l ? w : null;
                module472 = D(module458);
                O = o.config || null;
                b = (h && h.headers) || null;
                A = (h && h.data) || null;
                y = {
                  duration: module53,
                  problem: module437,
                  originalError: module1224,
                  ok: module472,
                  headers: b,
                  config: O,
                  data: A,
                  status: module458,
                  sentHeaders: null,
                };
                if (module472 && null != A && A.error) y.ok = false;
                return n.abrupt('return', y);

              case 16:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    };

    this.refreshLanidorToken = function (t) {
      var o, s;
      return regeneratorRuntime.default.async(
        function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                (o = new URLSearchParams()).append('grant_type', 'password');
                o.append('userName', 'info@dev2grow.com');
                o.append('password', 'm8A#Z0Y4vA?lPN');
                s = {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                };
                module1228.default
                  .post('https://www.2bstyle.net/lanidorAPI/token', o, s)
                  .then(function (o) {
                    return regeneratorRuntime.default.async(
                      function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              if (200 !== o.status) {
                                s.next = 6;
                                break;
                              }

                              module437.Store.dispatch(module1224.setToken(o.data.access_token));
                              s.next = 4;
                              return regeneratorRuntime.default.awrap(t());

                            case 4:
                              s.next = 6;
                              break;

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
                  })
                  .catch(function (t) {
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.error,
                      message: module458.default.generic.errorMessage,
                    });
                  });

              case 6:
              case 'end':
                return u.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    };

    this.handleError = function (t, s) {
      var u;
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                n.prev = 0;
                n.t0 = t.problem;
                n.next =
                  'CLIENT_ERROR' === n.t0
                    ? 4
                    : 'DUPLICATE_REQUEST' === n.t0
                    ? 10
                    : 'SERVER_ERROR' === n.t0
                    ? 11
                    : 'TIMEOUT_ERROR' === n.t0
                    ? 12
                    : 'NETWORK_ERROR' === n.t0
                    ? 13
                    : 'CONNECTION_ERROR' === n.t0
                    ? 16
                    : 'UNKNOWN_ERROR' === n.t0
                    ? 17
                    : 18;
                break;

              case 4:
                if (401 !== t.status) {
                  n.next = 7;
                  break;
                }

                o.refreshLanidorToken(s);
                return n.abrupt('break', 19);

              case 7:
                module458.default.generic.error;
                if (null != t && null != (u = t.data) && u.message) t.data.message;
                return n.abrupt('break', 19);

              case 10:
              case 11:
              case 12:
                return n.abrupt('break', 19);

              case 13:
                o.setConnection(false);
                module437.Store.dispatch(module1224.setLoader(false));
                return n.abrupt('break', 19);

              case 16:
              case 17:
              case 18:
                return n.abrupt('break', 19);

              case 19:
                n.next = 23;
                break;

              case 21:
                n.prev = 21;
                n.t1 = n.catch(0);

              case 23:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        [[0, 21]],
        Promise
      );
    };

    this.get = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithoutBody(
        L(
          {
            method: 'get',
          },
          t
        )
      );
    };

    this.post = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithBody(
        L(
          {
            method: 'post',
          },
          t
        )
      );
    };

    this.put = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithBody(
        L(
          {
            method: 'put',
          },
          t
        )
      );
    };

    this.patch = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithBody(
        L(
          {
            method: 'patch',
          },
          t
        )
      );
    };

    this.delete = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithoutBody(
        L(
          {
            method: 'delete',
          },
          t
        )
      );
    };

    this.head = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return o.requestWithoutBody(
        L(
          {
            method: 'head',
          },
          t
        )
      );
    };

    var w = l || {},
      h = w.headers,
      O = module53.default(w, C);
    this.headers = module11.default({}, _, h);
    this.instance = l.axiosInstance || module1228.default.create(module11.default({}, N, O));
  });
exports.default = B;
B.Endpoints = {
  login: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/Login/1/' + module1262.convertLanguage();
  },
  register: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/novo/1/' + module1262.convertLanguage();
  },
  registerMobile: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/novobasico/1/' + module1262.convertLanguage();
  },
  registerMobileExtraInfo: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/novocompleto/1/' + module1262.convertLanguage() + '/' + t;
  },
  forgotPasswordStep1: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/forgetpassword/1/' + module1262.convertLanguage();
  },
  forgotPasswordStep2: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/forgetupdatepassword/1/' + module1262.convertLanguage();
  },
  refreshUserData: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/udata/1/' + module1262.convertLanguage() + '/' + t;
  },
  home: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/Entrada/gethome';
  },
  edits: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/edits/1/' + t;
  },
  editsDetail: function (t, n) {
    return n
      ? 'https://www.2bstyle.net/lanidorAPI/api/edits/produtos/1/' + module1262.convertLanguage() + '/' + t + '/' + n
      : 'https://www.2bstyle.net/lanidorAPI/api/edits/produtos/1/' + module1262.convertLanguage() + '/' + t;
  },
  getUserData: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/1/' + module1262.convertLanguage() + '/' + t;
  },
  changePassword: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/upwd/1/' + module1262.convertLanguage() + '/' + t;
  },
  forgetUser: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/cliente/del/1/' + module1262.convertLanguage() + '/' + t;
  },
  newsletters: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_NewsLetters/1/' + module1262.convertLanguage() + '/' + t;
  },
  countriesList: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/paises/' + module1262.convertLanguage() + '/';
  },
  getLaCardPoints: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/Pontos/' + t + '/' + n;
  },
  getLaCardPointsList: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/PontosLista/' + t + '/' + n;
  },
  getLaCardPersonalData: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/DadosPessoais/' + t + '/' + n;
  },
  createLACard: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/RegistarNovo/' + t;
  },
  attachLACard: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Registo/ulacard/1/' + module1262.convertLanguage() + '/' + t;
  },
  privacyPolicy: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/pprivacidade/' + module1262.convertLanguage() + '/';
  },
  termsConditions: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/apoios/' + module1262.convertLanguage() + '/condicoes';
  },
  help: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/apoios/' + module1262.convertLanguage() + '/ajuda/';
  },
  catalogue: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/menus/1/' + module1262.convertLanguage() + '/' + t;
  },
  products: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/listaprodutos/1' + t;
  },
  productDetail: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/produto/detalhe/1/' + n + '/' + module1262.convertLanguage() + '/' + t;
  },
  productDetailFromBarCode: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/produto/detalhe/1/' + t;
  },
  wishlist: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/ACwishlist/1/' + module1262.convertLanguage() + '/' + t;
  },
  cart: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/carrinho/' + (t || '');
  },
  addItemToCart: function (t, n, o, s) {
    return 'https://www.2bstyle.net/lanidorAPI/api/carrinho/1/' + module1262.convertLanguage() + '/' + t + '/' + n + '/' + (o ? o + '/' : '') + (s ? s + '/' : '');
  },
  orders: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Encomendas/1/' + module1262.convertLanguage() + '/' + t + '/' + (n || '');
  },
  orderReceipt: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/documents/1/' + t + '/' + (n || '');
  },
  reservations: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/reservas/1/' + module1262.convertLanguage() + '/' + t;
  },
  deleteReservations: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/Reservas/1/' + module1262.convertLanguage() + '/' + t + '/' + n;
  },
  getCheckoutData: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/checkout/actualiza//' + t;
  },
  checkoutPayment: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/checkout/confirmar/' + (t || '');
  },
  payCCStatus: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/paycc/status/' + t;
  },
  payAppleStatus: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/payments/stripeap/' + t;
  },
  payMBWayStatus: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/' + t;
  },
  barCodeSearch: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/Produto/codigobarras/1/' + module1262.convertLanguage() + '/' + t;
  },
  support: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/apoios/' + t + '/' + n;
  },
  storesByLocation: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/localizarlojasCoordenadas/' + t + '/' + n;
  },
  storesByFilter: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/localizarlojas/imbr/' + t;
  },
  favoriteStore: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/cliente/lojafavorita/' + t + '/' + n;
  },
  advantages: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/lacard/vantagens/';
  },
  productStockInShop: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/produto/stockLojas/' + t + '/' + n;
  },
  creditsVouchers: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_CreditosVales/1/' + module1262.convertLanguage() + '/' + t;
  },
  getChildren: function (t) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/filhos/' + t;
  },
  deleteChildren: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/LaCard/filhos/' + t + '/' + n;
  },
  searchPhoto: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/searchfoto/';
  },
  searchText: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/listaprodutos/1/' + module1262.convertLanguage() + '/search/' + t + '/' + n;
  },
  searchBarCode: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/Produto/codigobarras/1/' + module1262.convertLanguage() + '/' + t + '/' + n;
  },
  exchangeReturn: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Encomendas/devolvetroca/1/' + module1262.convertLanguage() + '/';
  },
  cancelOrder: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Encomendas/cancelar/1/' + module1262.convertLanguage() + '/';
  },
  billingAddress: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Encomendas/alterafacturacao/1/' + module1262.convertLanguage() + '/';
  },
  deliveryAddress: function () {
    return 'https://www.2bstyle.net/lanidorAPI/api/AC_Encomendas/alteraentrega/1/' + module1262.convertLanguage() + '/';
  },
  news: function (t, n) {
    return 'https://www.2bstyle.net/lanidorAPI/api/cliente/' + t + '/' + n;
  },
};

B.isError = function (t) {
  return !(!t || 'DUPLICATE_REQUEST' === t);
};

var F = module1228.default.isCancel,
  q = module1228.default.CancelToken;
exports.CancelToken = q;
exports.isCancel = F;
var K = B.Endpoints;
exports.Endpoints = K;
var M = new B();
exports.API = M;
