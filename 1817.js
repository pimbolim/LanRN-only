var module1818 = require('./1818'),
  module1808 = require('./1808'),
  module1816 = require('./1816'),
  o = module1808.trueFunc,
  f = module1808.falseFunc,
  s = module1816.rules.equals;

function c(t, n) {
  var u = {
    name: t,
    value: n,
  };
  return function (t, n, o) {
    return s(t, u, o);
  };
}

function l(t, n) {
  return function (u) {
    return !!n.getParent(u) && t(u);
  };
}

var h = {
  contains: function (t, n, u) {
    var o = u.adapter;
    return function (u) {
      return t(u) && o.getText(u).indexOf(n) >= 0;
    };
  },
  icontains: function (t, n, u) {
    var o = n.toLowerCase(),
      f = u.adapter;
    return function (n) {
      return t(n) && f.getText(n).toLowerCase().indexOf(o) >= 0;
    };
  },
  'nth-child': function (n, u, s) {
    var c = module1818(u),
      h = s.adapter;
    return c === f
      ? c
      : c === o
      ? l(n, h)
      : function (t) {
          for (var u = h.getSiblings(t), o = 0, f = 0; o < u.length; o++)
            if (h.isTag(u[o])) {
              if (u[o] === t) break;
              f++;
            }

          return c(f) && n(t);
        };
  },
  'nth-last-child': function (n, u, s) {
    var c = module1818(u),
      h = s.adapter;
    return c === f
      ? c
      : c === o
      ? l(n, h)
      : function (t) {
          for (var u = h.getSiblings(t), o = 0, f = u.length - 1; f >= 0; f--)
            if (h.isTag(u[f])) {
              if (u[f] === t) break;
              o++;
            }

          return c(o) && n(t);
        };
  },
  'nth-of-type': function (n, u, s) {
    var c = module1818(u),
      h = s.adapter;
    return c === f
      ? c
      : c === o
      ? l(n, h)
      : function (t) {
          for (var u = h.getSiblings(t), o = 0, f = 0; f < u.length; f++)
            if (h.isTag(u[f])) {
              if (u[f] === t) break;
              if (h.getName(u[f]) === h.getName(t)) o++;
            }

          return c(o) && n(t);
        };
  },
  'nth-last-of-type': function (n, u, s) {
    var c = module1818(u),
      h = s.adapter;
    return c === f
      ? c
      : c === o
      ? l(n, h)
      : function (t) {
          for (var u = h.getSiblings(t), o = 0, f = u.length - 1; f >= 0; f--)
            if (h.isTag(u[f])) {
              if (u[f] === t) break;
              if (h.getName(u[f]) === h.getName(t)) o++;
            }

          return c(o) && n(t);
        };
  },
  root: function (t, n, u) {
    var o = u.adapter;
    return function (n) {
      return !o.getParent(n) && t(n);
    };
  },
  scope: function (t, n, u, o) {
    var f = u.adapter;
    if (!o || 0 === o.length) return h.root(t, n, u);
    return 1 === o.length
      ? function (n) {
          u = o[0];
          s = n;
          return ('function' == typeof f.equals ? f.equals(u, s) : u === s) && t(n);
          var u, s;
        }
      : function (n) {
          return o.indexOf(n) >= 0 && t(n);
        };
  },
  checkbox: c('type', 'checkbox'),
  file: c('type', 'file'),
  password: c('type', 'password'),
  radio: c('type', 'radio'),
  reset: c('type', 'reset'),
  image: c('type', 'image'),
  submit: c('type', 'submit'),
  hover: function (t, n, u) {
    var o = u.adapter;
    return 'function' == typeof o.isHovered
      ? function (n) {
          return t(n) && o.isHovered(n);
        }
      : f;
  },
  visited: function (t, n, u) {
    var o = u.adapter;
    return 'function' == typeof o.isVisited
      ? function (n) {
          return t(n) && o.isVisited(n);
        }
      : f;
  },
  active: function (t, n, u) {
    var o = u.adapter;
    return 'function' == typeof o.isActive
      ? function (n) {
          return t(n) && o.isActive(n);
        }
      : f;
  },
};

function p(t, n) {
  for (var u = 0; t && u < t.length; u++) if (n.isTag(t[u])) return t[u];
}

var v = {
  empty: function (t, n) {
    return !n.getChildren(t).some(function (t) {
      return n.isTag(t) || 'text' === t.type;
    });
  },
  'first-child': function (t, n) {
    return p(n.getSiblings(t), n) === t;
  },
  'last-child': function (t, n) {
    for (var u = n.getSiblings(t), o = u.length - 1; o >= 0; o--) {
      if (u[o] === t) return true;
      if (n.isTag(u[o])) break;
    }

    return false;
  },
  'first-of-type': function (t, n) {
    for (var u = n.getSiblings(t), o = 0; o < u.length; o++)
      if (n.isTag(u[o])) {
        if (u[o] === t) return true;
        if (n.getName(u[o]) === n.getName(t)) break;
      }

    return false;
  },
  'last-of-type': function (t, n) {
    for (var u = n.getSiblings(t), o = u.length - 1; o >= 0; o--)
      if (n.isTag(u[o])) {
        if (u[o] === t) return true;
        if (n.getName(u[o]) === n.getName(t)) break;
      }

    return false;
  },
  'only-of-type': function (t, n) {
    for (var u = n.getSiblings(t), o = 0, f = u.length; o < f; o++)
      if (n.isTag(u[o])) {
        if (u[o] === t) continue;
        if (n.getName(u[o]) === n.getName(t)) return false;
      }

    return true;
  },
  'only-child': function (t, n) {
    for (var u = n.getSiblings(t), o = 0; o < u.length; o++) if (n.isTag(u[o]) && u[o] !== t) return false;

    return true;
  },
  link: function (t, n) {
    return n.hasAttrib(t, 'href');
  },
  selected: function (t, n) {
    if (n.hasAttrib(t, 'selected')) return true;
    if ('option' !== n.getName(t)) return false;
    var u = n.getParent(t);
    if (!u || 'select' !== n.getName(u) || n.hasAttrib(u, 'multiple')) return false;

    for (var o = n.getChildren(u), f = false, s = 0; s < o.length; s++)
      if (n.isTag(o[s]))
        if (o[s] === t) f = true;
        else {
          if (!f) return false;
          if (n.hasAttrib(o[s], 'selected')) return false;
        }

    return f;
  },
  disabled: function (t, n) {
    return n.hasAttrib(t, 'disabled');
  },
  enabled: function (t, n) {
    return !n.hasAttrib(t, 'disabled');
  },
  checked: function (t, n) {
    return n.hasAttrib(t, 'checked') || v.selected(t, n);
  },
  required: function (t, n) {
    return n.hasAttrib(t, 'required');
  },
  optional: function (t, n) {
    return !n.hasAttrib(t, 'required');
  },
  parent: function (t, n) {
    return !v.empty(t, n);
  },
  header: b(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  button: function (t, n) {
    var u = n.getName(t);
    return 'button' === u || ('input' === u && 'button' === n.getAttributeValue(t, 'type'));
  },
  input: b(['input', 'textarea', 'select', 'button']),
  text: function (t, n) {
    var u;
    return 'input' === n.getName(t) && (!(u = n.getAttributeValue(t, 'type')) || 'text' === u.toLowerCase());
  },
};

function b(t) {
  if ('undefined' != typeof Set) {
    var n = new Set(t);
    return function (t, u) {
      return n.has(u.getName(t));
    };
  }

  return function (n, u) {
    return t.indexOf(u.getName(n)) >= 0;
  };
}

function y(t, n, u) {
  if (null === u) {
    if (t.length > 2 && 'scope' !== n) throw new Error('pseudo-selector :' + n + ' requires an argument');
  } else if (2 === t.length) throw new Error('pseudo-selector :' + n + " doesn't have any arguments");
}

var N = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
module.exports = {
  compile: function (t, n, u, s) {
    var c = n.name,
      l = n.data,
      p = u.adapter;
    if (u && u.strict && !N.test(c)) throw new Error(':' + c + " isn't part of CSS3");
    if ('function' == typeof h[c]) return h[c](t, l, u, s);

    if ('function' == typeof v[c]) {
      var b = v[c];
      y(b, c, l);
      return b === f
        ? b
        : t === o
        ? function (t) {
            return b(t, p, l);
          }
        : function (n) {
            return b(n, p, l) && t(n);
          };
    }

    throw new Error('unmatched pseudo-class :' + c);
  },
  filters: h,
  pseudos: v,
};
