var module457 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(u);
  if (o && o.has(t)) return o.get(t);
  var s = {},
    T = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var E = T ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (E && (E.get || E.set)) Object.defineProperty(s, c, E);
      else s[c] = t[c];
    }

  s.default = t;
  if (o) o.set(t, s);
  return s;
})(require('./457'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : u;
  })(t);
}

exports.setIsConnected = function (n) {
  return {
    type: module457.SET_IS_CONNECTED,
    value: n,
  };
};

exports.setLanguage = function (n) {
  return {
    type: module457.SET_LANGUAGE,
    value: n,
  };
};

exports.setLoader = function (n) {
  return {
    type: module457.SET_LOADER,
    value: n,
  };
};

exports.setColorScheme = function (n) {
  return {
    type: module457.SET_COLOR_SCHEME,
    value: n,
  };
};

exports.setOrientation = function (n) {
  return {
    type: module457.SET_ORIENTATION,
    value: n,
  };
};

exports.setUser = function (n) {
  return {
    type: module457.SET_USER,
    value: n,
  };
};

exports.setToken = function (n) {
  return {
    type: module457.SET_TOKEN,
    value: n,
  };
};

exports.setNotificationToken = function (n) {
  return {
    type: module457.SET_NOTIFICATION_TOKEN,
    value: n,
  };
};

exports.setLoginType = function (n) {
  return {
    type: module457.SET_LOGIN_TYPE,
    value: n,
  };
};

exports.setLogout = function () {
  return {
    type: module457.SET_LOGOUT,
  };
};

exports.setHideNavTab = function (n) {
  return {
    type: module457.SET_HIDE_NAVTAB,
    value: n,
  };
};

exports.setGiftOptions = function (n) {
  return {
    type: module457.SET_GIFT_OPTIONS,
    value: n,
  };
};

exports.setCheckoutBottomSheetStatus = function (n) {
  return {
    type: module457.SET_CHECKOUT_BOTTOMSHEET_STATUS,
    value: n,
  };
};

exports.setLastSearch = function (n) {
  return {
    type: module457.SET_LAST_SEARCH,
    value: n,
  };
};

exports.setFavoriteStore = function (n) {
  return {
    type: module457.SET_FAVORITE_STORE,
    value: n,
  };
};

exports.setCartNumber = function (n) {
  return {
    type: module457.SET_CART_NUMBER,
    value: n,
  };
};

exports.setHistoryList = function (n) {
  return {
    type: module457.SET_HISTORY_LIST,
    value: n,
  };
};

exports.setSelectedCategory = function (n) {
  return {
    type: module457.SET_SELECTED_CATEGORY,
    value: n,
  };
};

exports.setHomeSelectedCategory = function (n) {
  return {
    type: module457.SET_HOME_SELECTED_CATEGORY,
    value: n,
  };
};
