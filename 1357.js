var module1358 = require('./1358'),
  module1359 = require('./1359'),
  s = Object.hasOwnProperty,
  o = {};

for (var l in module1358) s.call(module1358, l) && (o[module1358[l]] = l);

var u = (module.exports = {
  to: {},
  get: {},
});

function h(t, n, s) {
  return (n ** t) ** s;
}

function f(t) {
  var n = Math.round(t).toString(16).toUpperCase();
  return n.length < 2 ? '0' + n : n;
}

u.get = function (t) {
  var n, s;

  switch (t.substring(0, 3).toLowerCase()) {
    case 'hsl':
      n = u.get.hsl(t);
      s = 'hsl';
      break;

    case 'hwb':
      n = u.get.hwb(t);
      s = 'hwb';
      break;

    default:
      n = u.get.rgb(t);
      s = 'rgb';
  }

  return n
    ? {
        model: s,
        value: n,
      }
    : null;
};

u.get.rgb = function (n) {
  if (!n) return null;
  var o,
    l,
    u,
    f = [0, 0, 0, 1];

  if ((o = n.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
    for (u = o[2], o = o[1], l = 0; l < 3; l++) {
      var c = 2 * l;
      f[l] = parseInt(o.slice(c, c + 2), 16);
    }

    if (u) f[3] = parseInt(u, 16) / 255;
  } else if ((o = n.match(/^#([a-f0-9]{3,4})$/i))) {
    for (u = (o = o[1])[3], l = 0; l < 3; l++) f[l] = parseInt(o[l] + o[l], 16);

    if (u) f[3] = parseInt(u + u, 16) / 255;
  } else if ((o = n.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
    for (l = 0; l < 3; l++) f[l] = parseInt(o[l + 1], 0);

    if (o[4]) o[5] ? (f[3] = 0.01 * parseFloat(o[4])) : (f[3] = parseFloat(o[4]));
  } else {
    if (!(o = n.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))
      return (o = n.match(/^(\w+)$/)) ? ('transparent' === o[1] ? [0, 0, 0, 0] : s.call(module1358, o[1]) ? (((f = module1358[o[1]])[3] = 1), f) : null) : null;

    for (l = 0; l < 3; l++) f[l] = Math.round(2.55 * parseFloat(o[l + 1]));

    if (o[4]) o[5] ? (f[3] = 0.01 * parseFloat(o[4])) : (f[3] = parseFloat(o[4]));
  }

  for (l = 0; l < 3; l++) f[l] = h(f[l], 0, 255);

  f[3] = h(f[3], 0, 1);
  return f;
};

u.get.hsl = function (t) {
  if (!t) return null;
  var n = t.match(
    /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
  );

  if (n) {
    var s = parseFloat(n[4]);
    return [((parseFloat(n[1]) % 360) + 360) % 360, h(parseFloat(n[2]), 0, 100), h(parseFloat(n[3]), 0, 100), h(isNaN(s) ? 1 : s, 0, 1)];
  }

  return null;
};

u.get.hwb = function (t) {
  if (!t) return null;
  var n = t.match(
    /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
  );

  if (n) {
    var s = parseFloat(n[4]);
    return [((parseFloat(n[1]) % 360) + 360) % 360, h(parseFloat(n[2]), 0, 100), h(parseFloat(n[3]), 0, 100), h(isNaN(s) ? 1 : s, 0, 1)];
  }

  return null;
};

u.to.hex = function () {
  var t = module1359(arguments);
  return '#' + f(t[0]) + f(t[1]) + f(t[2]) + (t[3] < 1 ? f(Math.round(255 * t[3])) : '');
};

u.to.rgb = function () {
  var t = module1359(arguments);
  return t.length < 4 || 1 === t[3]
    ? 'rgb(' + Math.round(t[0]) + ', ' + Math.round(t[1]) + ', ' + Math.round(t[2]) + ')'
    : 'rgba(' + Math.round(t[0]) + ', ' + Math.round(t[1]) + ', ' + Math.round(t[2]) + ', ' + t[3] + ')';
};

u.to.rgb.percent = function () {
  var t = module1359(arguments),
    s = Math.round((t[0] / 255) * 100),
    o = Math.round((t[1] / 255) * 100),
    l = Math.round((t[2] / 255) * 100);
  return t.length < 4 || 1 === t[3] ? 'rgb(' + s + '%, ' + o + '%, ' + l + '%)' : 'rgba(' + s + '%, ' + o + '%, ' + l + '%, ' + t[3] + ')';
};

u.to.hsl = function () {
  var t = module1359(arguments);
  return t.length < 4 || 1 === t[3] ? 'hsl(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%)' : 'hsla(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%, ' + t[3] + ')';
};

u.to.hwb = function () {
  var t = module1359(arguments),
    s = '';
  if (t.length >= 4 && 1 !== t[3]) s = ', ' + t[3];
  return 'hwb(' + t[0] + ', ' + t[1] + '%, ' + t[2] + '%' + s + ')';
};

u.to.keyword = function (t) {
  return o[t.slice(0, 3)];
};
