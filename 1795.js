var t =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule
      ? t
      : {
          default: t,
        };
  };

var module1796 = t(require('./1796')),
  module1797 = t(require('./1797')),
  module1798 = t(require('./1798')),
  module1799 = t(require('./1799')),
  f = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;

function s(t) {
  var n = v(t);
  return function (t) {
    return String(t).replace(f, n);
  };
}

exports.decodeXML = s(module1798.default);
exports.decodeHTMLStrict = s(module1796.default);

var l = function (t, n) {
  return t < n ? 1 : -1;
};

function v(t) {
  return function (n) {
    if ('#' === n.charAt(1)) {
      var u = n.charAt(2);
      return 'X' === u || 'x' === u ? module1799.default(parseInt(n.substr(3), 16)) : module1799.default(parseInt(n.substr(2), 10));
    }

    return t[n.slice(1, -1)] || n;
  };
}

exports.decodeHTML = (function () {
  for (var t = Object.keys(module1797.default).sort(l), c = Object.keys(module1796.default).sort(l), o = 0, f = 0; o < c.length; o++)
    t[f] === c[o] ? ((c[o] += ';?'), f++) : (c[o] += ';');

  var s = new RegExp('&(?:' + c.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
    M = v(module1796.default);

  function _(t) {
    if (';' !== t.substr(-1)) t += ';';
    return M(t);
  }

  return function (t) {
    return String(t).replace(s, _);
  };
})();
