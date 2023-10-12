var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  ReactNative = require('react-native'),
  module458 = require('./458'),
  module881 = require('./881'),
  module1263 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = f(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (l && (l.get || l.set)) Object.defineProperty(s, u, l);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('./1263'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (f = function (t) {
    return t ? o : n;
  })(t);
}

module12.default(O, 1)[0];

var p = ReactNative.Dimensions.get('window'),
  h = p.width,
  S = p.height,
  O = h < S ? [h, S] : [S, h],
  E = function (t) {
    return (t * Math.PI) / 180;
  };

exports.calculateDistance = function (t, n, o, s) {
  var c = E(o - t),
    u = E(s - n),
    l = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(E(t)) * Math.cos(E(o)) * Math.sin(u / 2) * Math.sin(u / 2);
  return 2 * Math.sqrt(l) ** Math.sqrt(1 - l) * 6371;
};

exports.regionFrom = function (t) {
  var n = t.lat,
    o = undefined === n ? 38.736946 : n,
    s = t.long,
    c = undefined === s ? -9.142685 : s,
    u = t.distance,
    l = undefined === u ? 1e5 : u,
    f = l / 2 / 40075;
  return {
    latitude: o,
    longitude: c,
    latitudeDelta: l / 111320,
    longitudeDelta: Math.abs((Math.sin(f) * Math.cos(o)) ** (Math.cos(f) - Math.sin(o) * Math.sin(o))),
  };
};

exports.bearing = function (t, n, o, s) {
  var c = E(t),
    u = E(n),
    l = E(o),
    f = E(s),
    p = Math.sin(f - u) * Math.cos(l),
    h = Math.cos(c) * Math.sin(l) - Math.sin(c) * Math.cos(l) * Math.cos(f - u);
  return ((180 * p ** h) / Math.PI + 360) % 360;
};

exports.accentsTidy = function (t) {
  var n = t.toLowerCase();
  n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(new RegExp('[\xe0\xe1\xe2\xe3\xe4\xe5]', 'g'), 'a')).replace(new RegExp('\xe6', 'g'), 'ae')).replace(
    new RegExp('\xe7', 'g'),
    'c'
  )).replace(new RegExp('[\xe8\xe9\xea\xeb]', 'g'), 'e')).replace(new RegExp('[\xec\xed\xee\xef]', 'g'), 'i')).replace(new RegExp('\xf1', 'g'), 'n')).replace(
    new RegExp('[\xf2\xf3\xf4\xf5\xf6]', 'g'),
    'o'
  )).replace(new RegExp('\u0153', 'g'), 'oe')).replace(new RegExp('[\xf9\xfa\xfb\xfc]', 'g'), 'u')).replace(new RegExp('[\xfd\xff]', 'g'), 'y');
  return n;
};

var I = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  P = {
    btoa: function () {
      for (
        var t, n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '', o = '', s = 0, c = 0, u = I;
        n.charAt(0 | c) || ((u = '='), c % 1);
        o += u.charAt(63 & (s >> (8 - (c % 1) * 8)))
      ) {
        if ((t = n.charCodeAt((c += 0.75))) > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        s = (s << 8) | t;
      }

      return o;
    },
    atob: function () {
      var t = (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '').replace(/[=]+$/, ''),
        n = '';
      if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");

      for (var o, s = 0, c = 0, u = 0; (o = t.charAt((u += 1))); ~o && ((c = s % 4 ? 64 * c + o : o), (s += 1)) ? (n += String.fromCharCode(255 & (c >> ((-2 * s) & 6)))) : 0)
        o = I.indexOf(o);

      return n;
    },
  };
exports.Base64 = P;

exports.translate = function (t) {
  if (!t) return '';
  if ('string' == typeof t) return t;
  var n = module458.default.getLanguage();
  return t[n]
    ? t[n]
    : Object.values(t).filter(function (t) {
        return !!t && 'string' == typeof t;
      })[0] || '';
};

exports.priceFormat = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : ' \u20ac',
    o = arguments.length > 2 ? arguments[2] : undefined,
    s = Number(t);
  return isNaN(s) ? '' : o ? '' + n + s.toFixed(2) : '' + s.toFixed(2) + n;
};

exports.capitalize = function (t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
};

exports.isEasyPayTestCard = function (t) {
  switch (t) {
    case '0000 0000 0000 0000':
    case '1111 1111 1111 1111':
    case '2222 2222 2222 2222':
      return true;

    default:
      return false;
  }
};

exports.maskCard = function (t) {
  try {
    return 'XXXX-XXXX-XXXX-' + ('' + t).slice(-4);
  } catch (t) {
    return '';
  }
};

exports.languageSchemaEnConverter = function (t) {
  return 'en' === t.toLowerCase() ? 'uk' : t.toLowerCase();
};

var v =
  'web' !== ReactNative.Platform.OS &&
  (('ios' === ReactNative.Platform.OS && ((812 === S && 375 === h) || (375 === S && 812 === h))) || (896 === S && 414 === h) || (414 === S && 896 === h));
exports.isIPhoneX = v;
var M =
  'web' !== ReactNative.Platform.OS &&
  (('ios' === ReactNative.Platform.OS && ((1194 === S && 834 === h) || (834 === S && 1194 === h))) || (1024 === S && 1366 === h) || (1366 === S && 1024 === h));
exports.isNewIPadPro = M;
var w = !('ios' !== ReactNative.Platform.OS || v || (S > h && h < 768) || (h > S && S < 768));
exports.isIPad = w;
var A = v ? 34 : M ? 20 : 0;
exports.getBottomSpace = A;
var R = 'android' === ReactNative.Platform.OS ? 0 : v ? 44 : M ? 24 : 20;
exports.paddingTop = R;
exports.LANGUAGES = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Portugu\xeas',
    code: 'pt',
  },
];
exports.GEO_API_KEY = 'AIzaSyDDOJCnjz8GXtZejZJOdqXYDvkEK1JlrSo';

var b = function (t) {
  switch (t) {
    case 'location':
      return ReactNative.Platform.select({
        android: module1263.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: module1263.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      });

    case 'camera':
      return ReactNative.Platform.select({
        android: module1263.PERMISSIONS.ANDROID.CAMERA,
        ios: module1263.PERMISSIONS.IOS.CAMERA,
      });

    case 'gallery':
      return ReactNative.Platform.select({
        android: module1263.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ios: module1263.PERMISSIONS.IOS.PHOTO_LIBRARY,
      });
  }
};

exports.hasPermission = function (t, o) {
  var f, p;
  return regeneratorRuntime.default.async(
    function (h) {
      for (;;)
        switch ((h.prev = h.next)) {
          case 0:
            f = b(t);
            h.next = 3;
            return regeneratorRuntime.default.awrap(module1263.default.check(f));

          case 3:
            if (((p = h.sent), 'ios' !== ReactNative.Platform.OS || 'location' !== t || 'granted' === p)) {
              h.next = 8;
              break;
            }

            h.next = 7;
            return regeneratorRuntime.default.awrap(module1263.default.check(module1263.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE));

          case 7:
            p = h.sent;

          case 8:
            h.t0 = p;
            h.next = 'granted' === h.t0 ? 11 : 'unavailable' === h.t0 ? 12 : 'denied' === h.t0 ? 12 : 19;
            break;

          case 11:
            return h.abrupt('return', true);

          case 12:
            h.next = 14;
            return regeneratorRuntime.default.awrap(module1263.default.request(f));

          case 14:
            if ('granted' !== h.sent) {
              h.next = 17;
              break;
            }

            return h.abrupt('return', true);

          case 17:
            if (o)
              module881.DropDown.alert({
                type: 'error',
                title: module458.default.permissions.errorTitle,
                message: module458.default.formatString(module458.default.permissions.errorMessage, module458.default.permissions[t]),
              });
            return h.abrupt('return', false);

          case 19:
            return h.abrupt('return', false);

          case 20:
          case 'end':
            return h.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.COUNTRIES_LIST = ['Espanha', 'Portugal', 'Fran\xe7a', 'Alemanha', 'Belgica', 'USA', 'Brasil'];

exports.convertLanguage = function () {
  return 'en' == module458.default.getLanguage() ? 'uk' : module458.default.getLanguage();
};
