var module47 = require('./47'),
  module12 = require('./12'),
  ReactNative = require('react-native'),
  module475 = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = s(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var h = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (h && (h.get || h.set)) Object.defineProperty(l, f, h);
        else l[f] = t[f];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('./475'));

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (s = function (t) {
    return t ? n : o;
  })(t);
}

function f(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function h(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      f(Object(l)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
      });
  }

  return t;
}

var u = module475.ScaledSheet,
  p = module475.moderateScale,
  b = module475.verticalScale,
  y = module475.scale;
exports.sc = y;
exports.vs = b;
exports.ms = p;
exports.ScaledSheet = u;
var v = ReactNative.Dimensions.get('window'),
  O = v.width,
  w = v.height;
exports.height = w;
exports.width = O;
var D = O < w ? [O, w] : [w, O],
  x = module12.default(D, 2),
  F = x[0],
  j = x[1];
exports.longDimension = j;
exports.shortDimension = F;
var S = {
  xxxs: p(10),
  xxs: p(11),
  xs: p(12),
  s: p(13),
  m: p(14),
  l: p(15),
  xl: p(17),
  xxl: p(18),
  xxxl: p(20),
  xxxxl: p(22),
  availableCredit: p(25),
  titlehome: p(30),
};
exports.FontSize = S;
exports.FontFamily = {
  light: 'Lato-Light',
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
  semiBold: 'Lato-Bold',
  italic: 'Lato-Italic',
};
var P = {
  small: {
    top: p(4),
    left: p(4),
    right: p(4),
    bottom: p(4),
  },
  big: {
    top: p(6),
    left: p(6),
    right: p(6),
    bottom: p(6),
  },
  extraBig: {
    top: p(15),
    left: p(15),
    right: p(15),
    bottom: p(15),
  },
};
exports.HitSlop = P;
exports.Color = {
  primary: 'rgb(0,0,0)',
  red: '#D3301A',
  yellow: '#F5A623',
  orange: '#D17E4A',
  lightOrange: '#FFD0A2',
  white: '#FAFAFA',
  darkGray: '#383B41',
  background: '#F4F5F7',
  green: '#3D8F0B',
  darkRed: '#8F1919',
  redTransparent: 'rgba(211, 48, 26, 0.75)',
  darkRedTransparent: 'rgba(143, 25, 25, 0.75)',
  black: 'rgb(0,0,0)',
  ripple: '#D3D3D3',
  lightBlue: '#3582BC',
  lightGray: '#c9c5cb',
  lightGrayTransparent: 'rgba(201, 197, 203, 0.75)',
  secondaryBlue: '#0A68AF',
  veryLightGray: '#E5E5E5',
  veryLightGrayTransparent: 'rgba(220, 220, 220, 0.8)',
  evenLighterGray: '#efefef',
  grayDivider: '#BAC3D280',
  textDarkGray: 'rgba(60, 60, 67, 0.1)',
  textGray: '#616161',
  backgroundGray: '#C4C4C4',
  grayBackground: 'rgba(95, 95, 95, 0.05)',
  grayBorder: '#9E9EA1',
  facebook: '#1877F2',
};

var k = function (t) {
  var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0.3;
  return h(
    {},
    ReactNative.Platform.select({
      android: {
        elevation: t,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 0.5 * t,
        },
        shadowOpacity: o,
        shadowRadius: 0.8 * t,
      },
    })
  );
};

exports.generateShadow = k;
var B = {
  small: k(3),
  normal: k(4),
  big: k(5),
};
exports.Shadow = B;
