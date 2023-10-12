exports.cartNumber = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: 0,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: 0,
    };
  if (n.type === module457.SET_CART_NUMBER)
    return {
      value: n.value,
    };
  return t;
};

exports.checkoutBottomSheetStatus = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: o,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_CHECKOUT_BOTTOMSHEET_STATUS)
    return {
      value: n.value,
    };
  if (n.type === module457.SET_LOGOUT)
    return {
      value: {
        showPostCheckoutRender: false,
      },
    };
  return t;
};

exports.colorScheme = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: ReactNative.Appearance.getColorScheme(),
          },
    l = arguments.length > 1 ? arguments[1] : undefined;
  if (l.type === module457.SET_COLOR_SCHEME)
    return {
      value: l.value,
    };
  return t;
};

exports.favoriteStore = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  if (n.type === module457.SET_FAVORITE_STORE)
    return {
      value: n.value,
    };
  return t;
};

exports.giftOptions = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: {
              giftReceipt: false,
              giftEnvelopeType: '',
              messageValue: '',
            },
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: {
        giftReceipt: false,
        giftEnvelopeType: '',
        messageValue: '',
      },
    };
  if (n.type === module457.SET_GIFT_OPTIONS)
    return {
      value: n.value,
    };
  return t;
};

exports.hideNavTab = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: false,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_HIDE_NAVTAB)
    return {
      value: n.value,
    };
  return t;
};

exports.historyList = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: 0,
    };
  if (n.type === module457.SET_HISTORY_LIST)
    return {
      value: n.value,
    };
  return t;
};

exports.homeSelectedCategory = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_HOME_SELECTED_CATEGORY)
    return {
      value: n.value,
    };
  return t;
};

exports.isConnected = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: true,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_IS_CONNECTED)
    return {
      value: n.value,
    };
  return t;
};

exports.language = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: module458.default.getLanguage(),
          },
    n = arguments.length > 1 ? arguments[1] : undefined;

  if (n.type === module457.SET_LANGUAGE) {
    module458.default.setLanguage(n.value);
    return {
      value: n.value,
    };
  }

  return t;
};

exports.lastSearch = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  if (n.type === module457.SET_LAST_SEARCH)
    return {
      value: n.value,
    };
  return t;
};

exports.loader = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: false,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOADER)
    return {
      value: n.value,
    };
  return t;
};

exports.loginType = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: '',
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGIN_TYPE)
    return {
      value: n.value,
    };
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  return t;
};

exports.notificationToken = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_NOTIFICATION_TOKEN)
    return {
      value: n.value,
    };
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  return t;
};

exports.orientation = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: 'PORTRAIT',
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_ORIENTATION)
    return {
      value: n.value,
    };
  return t;
};

exports.selectedCategory = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_SELECTED_CATEGORY)
    return {
      value: n.value,
    };
  return t;
};

exports.settings = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  if (n.type === module457.SET_SETTINGS)
    return {
      value: n.value,
    };
  return t;
};

exports.token = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_TOKEN)
    return {
      value: n.value,
    };
  return t;
};

exports.user = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            value: null,
          },
    n = arguments.length > 1 ? arguments[1] : undefined;
  if (n.type === module457.SET_USER)
    return {
      value: n.value,
    };
  if (n.type === module457.SET_LOGOUT)
    return {
      value: null,
    };
  return t;
};

var ReactNative = require('react-native'),
  module457 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var T = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (T && (T.get || T.set)) Object.defineProperty(l, f, T);
        else l[f] = t[f];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('./457')),
  module458 = require('./458');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

var o = {
  showPostCheckoutRender: false,
};
