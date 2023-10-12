var module1669 = require('./1669'),
  t = Object.prototype.hasOwnProperty;

function o(n) {
  return 'number' == typeof n && isFinite(n) && Math.floor(n) === n && n >= 0;
}

function l(n) {
  return Boolean(n) && o(n.offset) && o(n.line) && o(n.column);
}

function f(o, f) {
  return function (c, s) {
    if (!c || c.constructor !== Object) return s(c, 'Type of node should be an Object');

    for (var u in c) {
      var p = true;

      if (false !== t.call(c, u)) {
        if ('type' === u) c.type !== o && s(c, 'Wrong node type `' + c.type + '`, expected `' + o + '`');
        else if ('loc' === u) {
          if (null === c.loc) continue;
          if (c.loc && c.loc.constructor === Object)
            if ('string' != typeof c.loc.source) u += '.source';
            else if (l(c.loc.start)) {
              if (l(c.loc.end)) continue;
              u += '.end';
            } else u += '.start';
          p = false;
        } else if (f.hasOwnProperty(u)) {
          var y = 0;

          for (p = false; !p && y < f[u].length; y++) {
            var v = f[u][y];

            switch (v) {
              case String:
                p = 'string' == typeof c[u];
                break;

              case Boolean:
                p = 'boolean' == typeof c[u];
                break;

              case null:
                p = null === c[u];
                break;

              default:
                if ('string' == typeof v) p = c[u] && c[u].type === v;
                else if (Array.isArray(v)) p = c[u] instanceof module1669;
            }
          }
        } else s(c, 'Unknown field `' + u + '` for ' + o + ' node type');
        if (!p) s(c, 'Bad value for `' + o + '.' + u + '`');
      }
    }

    for (var u in f) t.call(f, u) && false === t.call(c, u) && s(c, 'Field `' + o + '.' + u + '` is missed');
  };
}

function c(n, o) {
  var l = o.structure,
    c = {
      type: String,
      loc: true,
    },
    s = {
      type: '"' + n + '"',
    };

  for (var u in l)
    if (false !== t.call(l, u)) {
      for (var p = [], y = (c[u] = Array.isArray(l[u]) ? l[u].slice() : [l[u]]), v = 0; v < y.length; v++) {
        var h = y[v];
        if (h === String || h === Boolean) p.push(h.name);
        else if (null === h) p.push('null');
        else if ('string' == typeof h) p.push('<' + h + '>');
        else {
          if (!Array.isArray(h)) throw new Error('Wrong value `' + h + '` in `' + n + '.' + u + '` structure definition');
          p.push('List');
        }
      }

      s[u] = p.join(' | ');
    }

  return {
    docs: s,
    check: f(n, c),
  };
}

module.exports = {
  getStructureFromConfig: function (n) {
    var o = {};
    if (n.node)
      for (var l in n.node)
        if (t.call(n.node, l)) {
          var f = n.node[l];
          if (!f.structure) throw new Error('Missed `structure` field in `' + l + '` node type definition');
          o[l] = c(l, f);
        }
    return o;
  },
};
