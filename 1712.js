var module1713 = require('./1713'),
  module1714 = require('./1714'),
  module1715 = require('./1715'),
  module1716 = require('./1716'),
  o = /^\s*\|\s*/;

function p(t, s) {
  var n = {};

  for (var l in t) n[l] = t[l].syntax || t[l];

  for (var p in s)
    p in t ? (s[p].syntax ? (n[p] = o.test(s[p].syntax) ? n[p] + ' ' + s[p].syntax.trim() : s[p].syntax) : delete n[p]) : s[p].syntax && (n[p] = s[p].syntax.replace(o, ''));

  return n;
}

function u(t) {
  var s = {};

  for (var n in t) s[n] = t[n].syntax;

  return s;
}

module.exports = {
  types: p(module1715, module1716.syntaxes),
  atrules: (function (t, s) {
    var n = {};

    for (var l in t) {
      var o = (s[l] && s[l].descriptors) || null;
      n[l] = {
        prelude: l in s && 'prelude' in s[l] ? s[l].prelude : t[l].prelude || null,
        descriptors: t[l].descriptors ? p(t[l].descriptors, o || {}) : o && u(o),
      };
    }

    for (var c in s)
      hasOwnProperty.call(t, c) ||
        (n[c] = {
          prelude: s[c].prelude || null,
          descriptors: s[c].descriptors && u(s[c].descriptors),
        });

    return n;
  })(
    (function (t) {
      var s = Object.create(null);

      for (var n in t) {
        var l = t[n],
          o = null;
        if (l.descriptors) for (var p in ((o = Object.create(null)), l.descriptors)) o[p] = l.descriptors[p].syntax;
        s[n.substr(1)] = {
          prelude:
            l.syntax
              .trim()
              .match(/^@\S+\s+([^;\{]*)/)[1]
              .trim() || null,
          descriptors: o,
        };
      }

      return s;
    })(module1713),
    module1716.atrules
  ),
  properties: p(module1714, module1716.properties),
};
