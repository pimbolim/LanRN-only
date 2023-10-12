var n =
  (this && this.__importDefault) ||
  function (n) {
    return n && n.__esModule
      ? n
      : {
          default: n,
        };
  };

var module1798 = F(n(require('./1798')).default),
  u = l(module1798);
exports.encodeXML = A(module1798);
var o,
  c,
  module1796 = F(n(require('./1796')).default),
  s = l(module1796);

function F(n) {
  return Object.keys(n)
    .sort()
    .reduce(function (t, u) {
      t[n[u]] = '&' + u + ';';
      return t;
    }, {});
}

function l(n) {
  for (var t = [], u = [], o = 0, c = Object.keys(n); o < c.length; o++) {
    var f = c[o];
    if (1 === f.length) t.push('\\' + f);
    else u.push(f);
  }

  t.sort();

  for (var s = 0; s < t.length - 1; s++) {
    for (var F = s; F < t.length - 1 && t[F].charCodeAt(1) + 1 === t[F + 1].charCodeAt(1); ) F += 1;

    var l = 1 + F - s;
    if (!(l < 3)) t.splice(s, l, t[s] + '-' + t[F]);
  }

  u.unshift('[' + t.join('') + ']');
  return new RegExp(u.join('|'), 'g');
}

exports.encodeHTML =
  ((o = module1796),
  (c = s),
  function (n) {
    return n
      .replace(c, function (n) {
        return o[n];
      })
      .replace(p, D);
  });
exports.encodeNonAsciiHTML = A(module1796);
var p = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  h =
    null != String.prototype.codePointAt
      ? function (n) {
          return n.codePointAt(0);
        }
      : function (n) {
          return 1024 * (n.charCodeAt(0) - 55296) + n.charCodeAt(1) - 56320 + 65536;
        };

function D(n) {
  return '&#x' + (n.length > 1 ? h(n) : n.charCodeAt(0)).toString(16).toUpperCase() + ';';
}

var v = new RegExp(u.source + '|' + p.source, 'g');

function A(n) {
  return function (t) {
    return t.replace(v, function (t) {
      return n[t] || D(t);
    });
  };
}

exports.escape = function (n) {
  return n.replace(v, D);
};

exports.escapeUTF8 = function (n) {
  return n.replace(u, D);
};
