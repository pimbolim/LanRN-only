exports.default = function (l) {
  if ('number' == typeof l) return l >>> 0 === l && l >= 0 && l <= 4294967295 ? _(l) : null;
  var n = 'string' == typeof l ? O(l) : l;
  if (!Array.isArray(n)) return n;
  var t = n[0],
    o = n[1],
    s = n[2],
    u = n[3],
    c = ((undefined === u ? 4278190080 : Math.round(255 * u) << 24) | (Math.round(255 * t) << 16) | (Math.round(255 * o) << 8) | Math.round(255 * s)) >>> 0;
  return _(c);
};

var ReactNative = require('react-native'),
  n = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };

exports.colors = n;
var t = {};

for (var o in ((exports.colorNames = t), n))
  if (n.hasOwnProperty(o)) {
    var s = n[o],
      u = s[0],
      c = s[1],
      h = s[2];
    t[o] = (4278190080 | (u << 16) | (c << 8) | h) >>> 0;
  }

function f(l, n, t, o) {
  var s,
    u,
    c,
    h,
    f,
    b = l / 360,
    p = n / 100,
    y = t / 100;
  if (0 === p) return [(f = y), f, f, o];
  s = 2 * y - (u = y < 0.5 ? y * (1 + p) : y + p - y * p);
  h = [0, 0, 0, o];

  for (var k = 0; k < 3; k++) {
    if ((c = b + 0.3333333333333333 * -(k - 1)) < 0) c++;
    if (c > 1) c--;
    f = 6 * c < 1 ? s + 6 * (u - s) * c : 2 * c < 1 ? u : 3 * c < 2 ? s + (u - s) * (0.6666666666666666 - c) * 6 : s;
    h[k] = f;
  }

  return h;
}

function b(l, n, t, o) {
  var s,
    u,
    c,
    h,
    f,
    b,
    p,
    y = l / 360,
    k = n / 100,
    v = t / 100,
    w = k + v;

  switch ((w > 1 && ((k /= w), (v /= w)), (u = 1 - v), (c = 6 * y - (s = Math.floor(6 * y))), 0 != (1 & s) && (c = 1 - c), (h = k + c * (u - k)), s)) {
    default:
    case 6:
    case 0:
      f = u;
      b = h;
      p = k;
      break;

    case 1:
      f = h;
      b = u;
      p = k;
      break;

    case 2:
      f = k;
      b = u;
      p = h;
      break;

    case 3:
      f = k;
      b = h;
      p = u;
      break;

    case 4:
      f = h;
      b = k;
      p = u;
      break;

    case 5:
      f = u;
      b = k;
      p = h;
  }

  return [f, b, p, o];
}

function p(l, n, t) {
  return (n ** l) ** t;
}

Object.freeze(t);
var y = /^#([a-f0-9]{3,4})$/i,
  k = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
  v = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
  w = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
  F = /(\D+)/;

function M(l) {
  var n,
    o,
    s,
    u = [0, 0, 0, 1];

  if ((n = l.match(k))) {
    for (s = n[2], n = n[1], o = 0; o < 3; o++) {
      var c = 2 * o;
      u[o] = parseInt(n.slice(c, c + 2), 16) / 255;
    }

    if (s) u[3] = Math.round((parseInt(s, 16) / 255) * 100) / 100;
  } else if ((n = l.match(y))) {
    for (s = (n = n[1])[3], o = 0; o < 3; o++) u[o] = parseInt(n[o] + n[o], 16) / 255;

    if (s) u[3] = Math.round((parseInt(s + s, 16) / 255) * 100) / 100;
  } else if ((n = l.match(v))) {
    for (o = 0; o < 3; o++) u[o] = parseInt(n[o + 1], 0) / 255;

    if (n[4]) u[3] = parseFloat(n[4]);
  } else {
    if (!(n = l.match(w))) {
      if ((n = l.match(F))) {
        if ('transparent' === n[1]) return [0, 0, 0, 0];
        var h = t[n[1]];
        return 'number' != typeof h ? null : _(h);
      }

      return null;
    }

    for (o = 0; o < 3; o++) u[o] = parseFloat(n[o + 1]) / 100;

    if (n[4]) u[3] = parseFloat(n[4]);
  }

  for (o = 0; o < 4; o++) u[o] = p(u[o], 0, 1);

  return u;
}

var q = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;

function N(l) {
  var n = l.match(q);
  if (!n) return null;
  var t = parseFloat(n[4]);
  return f((parseFloat(n[1]) + 360) % 360, p(parseFloat(n[2]), 0, 100), p(parseFloat(n[3]), 0, 100), isNaN(t) ? 1 : p(t, 0, 1));
}

var $ = /^hwb\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;

function I(l) {
  var n = l.match($);
  if (!n) return null;
  var t = parseFloat(n[4]);
  return b(((parseFloat(n[1]) % 360) + 360) % 360, p(parseFloat(n[2]), 0, 100), p(parseFloat(n[3]), 0, 100), isNaN(t) ? 1 : p(t, 0, 1));
}

function O(l) {
  switch (l.substring(0, 3).toLowerCase()) {
    case 'hsl':
      return N(l);

    case 'hwb':
      return I(l);

    default:
      return M(l);
  }
}

var _ =
  'android' === ReactNative.Platform.OS
    ? function (l) {
        return 0 | l;
      }
    : function (l) {
        return l;
      };

exports.integerColor = _;
