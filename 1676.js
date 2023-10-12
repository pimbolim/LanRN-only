var module12 = require('./12'),
  module1677 = require('./1677').SyntaxReferenceError,
  module1677 = require('./1677').SyntaxMatchError,
  module1679 = require('./1679'),
  module1680 = require('./1680'),
  module1685 = require('./1685'),
  module1678 = require('./1678'),
  module1688 = require('./1688'),
  module1689 = require('./1689'),
  module1690 = require('./1690').buildMatchGraph,
  module1691 = require('./1691').matchAsTree,
  module1692 = require('./1692'),
  module1693 = require('./1693'),
  module1694 = require('./1694').getStructureFromConfig,
  A = module1690('inherit | initial | unset'),
  P = module1690('inherit | initial | unset | <-ms-legacy-expression>');

function k(t, n, s) {
  var o = {};

  for (var u in t)
    t[u].syntax &&
      (o[u] = s
        ? t[u].syntax
        : module1678(t[u].syntax, {
            compact: n,
          }));

  return o;
}

function D(n, s, o) {
  for (var u = {}, c = 0, l = Object.entries(n); c < l.length; c++) {
    var h = l[c],
      y = module12(h, 2),
      f = y[0],
      v = y[1];
    u[f] = {
      prelude:
        v.prelude &&
        (o
          ? v.prelude.syntax
          : module1678(v.prelude.syntax, {
              compact: s,
            })),
      descriptors: v.descriptors && k(v.descriptors, s, o),
    };
  }

  return u;
}

function T(t) {
  for (var n = 0; n < t.length; n++) if ('var(' === t[n].value.toLowerCase()) return true;

  return false;
}

function b(t, n, s) {
  return {
    matched: t,
    iterations: s,
    error: n,
    getTrace: module1692.getTrace,
    isType: module1692.isType,
    isProperty: module1692.isProperty,
    isKeyword: module1692.isKeyword,
  };
}

function O(t, n, o, u) {
  var c,
    p = module1689(o, t.syntax);
  if (T(p)) return b(null, new Error('Matching for a tree with var() is not supported'));
  else {
    if (u) c = module1691(p, t.valueCommonSyntax, t);
    return (u && c.match) || (c = module1691(p, n.match, t)).match ? b(c.match, null, c.iterations) : b(null, new module1677(c.reason, n.syntax, o, c), c.iterations);
  }
}

var S = function (t, n, s) {
  if (
    ((this.valueCommonSyntax = A),
    (this.syntax = n),
    (this.generic = false),
    (this.atrules = {}),
    (this.properties = {}),
    (this.types = {}),
    (this.structure = s || module1694(t)),
    t)
  ) {
    if (t.types) for (var o in t.types) this.addType_(o, t.types[o]);
    if (t.generic) for (var o in ((this.generic = true), module1680)) this.addType_(o, module1680[o]);
    if (t.atrules) for (var o in t.atrules) this.addAtrule_(o, t.atrules[o]);
    if (t.properties) for (var o in t.properties) this.addProperty_(o, t.properties[o]);
  }
};

S.prototype = {
  structure: {},
  checkStructure: function (t) {
    function n(t, n) {
      o.push({
        node: t,
        message: n,
      });
    }

    var s = this.structure,
      o = [];
    this.syntax.walk(t, function (t) {
      if (s.hasOwnProperty(t.type)) s[t.type].check(t, n);
      else n(t, 'Unknown node type `' + t.type + '`');
    });
    return !!o.length && o;
  },
  createDescriptor: function (t, n, s) {
    var o = {
        type: n,
        name: s,
      },
      u = {
        type: n,
        name: s,
        parent: arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null,
        syntax: null,
        match: null,
      };
    if ('function' == typeof t) u.match = module1690(t, o);
    else {
      if ('string' == typeof t)
        Object.defineProperty(u, 'syntax', {
          get: function () {
            Object.defineProperty(u, 'syntax', {
              value: module1685(t),
            });
            return u.syntax;
          },
        });
      else u.syntax = t;
      Object.defineProperty(u, 'match', {
        get: function () {
          Object.defineProperty(u, 'match', {
            value: module1690(u.syntax, o),
          });
          return u.match;
        },
      });
    }
    return u;
  },
  addAtrule_: function (t, n) {
    var s = this;
    if (n)
      this.atrules[t] = {
        type: 'Atrule',
        name: t,
        prelude: n.prelude ? this.createDescriptor(n.prelude, 'AtrulePrelude', t) : null,
        descriptors: n.descriptors
          ? Object.keys(n.descriptors).reduce(function (o, u) {
              o[u] = s.createDescriptor(n.descriptors[u], 'AtruleDescriptor', u, t);
              return o;
            }, {})
          : null,
      };
  },
  addProperty_: function (t, n) {
    if (n) this.properties[t] = this.createDescriptor(n, 'Property', t);
  },
  addType_: function (t, n) {
    if (n) {
      this.types[t] = this.createDescriptor(n, 'Type', t);
      if (n === module1680['-ms-legacy-expression']) this.valueCommonSyntax = P;
    }
  },
  checkAtruleName: function (t) {
    if (!this.getAtrule(t)) return new module1677('Unknown at-rule', '@' + t);
  },
  checkAtrulePrelude: function (t, n) {
    var s = this.checkAtruleName(t);
    if (s) return s;
    var o = this.getAtrule(t);
    return !o.prelude && n
      ? new SyntaxError('At-rule `@' + t + '` should not contain a prelude')
      : o.prelude && !n
      ? new SyntaxError('At-rule `@' + t + '` should contain a prelude')
      : undefined;
  },
  checkAtruleDescriptorName: function (t, s) {
    var u = this.checkAtruleName(t);
    if (u) return u;
    var c = this.getAtrule(t),
      p = module1679.keyword(s);
    return c.descriptors
      ? c.descriptors[p.name] || c.descriptors[p.basename]
        ? undefined
        : new module1677('Unknown at-rule descriptor', s)
      : new SyntaxError('At-rule `@' + t + '` has no known descriptors');
  },
  checkPropertyName: function (t) {
    return module1679.property(t).custom
      ? new Error("Lexer matching doesn't applicable for custom properties")
      : this.getProperty(t)
      ? undefined
      : new module1677('Unknown property', t);
  },
  matchAtrulePrelude: function (t, n) {
    var s = this.checkAtrulePrelude(t, n);
    return s ? b(null, s) : n ? O(this, this.getAtrule(t).prelude, n, false) : b(null, null);
  },
  matchAtruleDescriptor: function (t, n, s) {
    var u = this.checkAtruleDescriptorName(t, n);
    if (u) return b(null, u);
    var c = this.getAtrule(t),
      p = module1679.keyword(n);
    return O(this, c.descriptors[p.name] || c.descriptors[p.basename], s, false);
  },
  matchDeclaration: function (t) {
    return 'Declaration' !== t.type ? b(null, new Error('Not a Declaration node')) : this.matchProperty(t.property, t.value);
  },
  matchProperty: function (t, n) {
    var s = this.checkPropertyName(t);
    return s ? b(null, s) : O(this, this.getProperty(t), n, true);
  },
  matchType: function (t, s) {
    var o = this.getType(t);
    return o ? O(this, o, s, false) : b(null, new module1677('Unknown type', t));
  },
  match: function (t, s) {
    if ('string' == typeof t || (t && t.type)) {
      if (!('string' != typeof t && t.match)) t = this.createDescriptor(t, 'Type', 'anonymous');
      return O(this, t, s, false);
    } else return b(null, new module1677('Bad syntax'));
  },
  findValueFragments: function (t, n, s, o) {
    return module1693.matchFragments(this, n, this.matchProperty(t, n), s, o);
  },
  findDeclarationValueFragments: function (t, n, s) {
    return module1693.matchFragments(this, t.value, this.matchDeclaration(t), n, s);
  },
  findAllFragments: function (t, n, s) {
    var o = [];
    this.syntax.walk(t, {
      visit: 'Declaration',
      enter: function (t) {
        o.push.apply(o, this.findDeclarationValueFragments(t, n, s));
      }.bind(this),
    });
    return o;
  },
  getAtrule: function (t) {
    var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      s = module1679.keyword(t);
    return (s.vendor && n ? this.atrules[s.name] || this.atrules[s.basename] : this.atrules[s.name]) || null;
  },
  getAtrulePrelude: function (t) {
    var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      s = this.getAtrule(t, n);
    return s ? s.prelude : null;
  },
  getAtruleDescriptor: function (t, n) {
    return this.atrules.hasOwnProperty(t) && this.atrules.declarators ? this.atrules[t].declarators[n] : null;
  },
  getProperty: function (t) {
    var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      s = module1679.property(t);
    return (s.vendor && n ? this.properties[s.name] || this.properties[s.basename] : this.properties[s.name]) || null;
  },
  getType: function (t) {
    return this.types.hasOwnProperty(t) ? this.types[t] : null;
  },
  validate: function () {
    function t(o, u, c, p) {
      if (c.hasOwnProperty(u)) return c[u];
      c[u] = false;
      if (null !== p.syntax)
        module1688(
          p.syntax,
          function (p) {
            if ('Type' === p.type || 'Property' === p.type) {
              var l = 'Type' === p.type ? o.types : o.properties,
                h = 'Type' === p.type ? module1677 : module1677;
              if (!(l.hasOwnProperty(p.name) && !t(o, p.name, h, l[p.name]))) c[u] = true;
            }
          },
          this
        );
    }

    var module1677 = {},
      module1677 = {};

    for (var o in this.types) t(this, o, module1677, this.types[o]);

    for (var o in this.properties) t(this, o, module1677, this.properties[o]);

    module1677 = Object.keys(module1677).filter(function (t) {
      return module1677[t];
    });
    module1677 = Object.keys(module1677).filter(function (t) {
      return module1677[t];
    });
    return module1677.length || module1677.length
      ? {
          types: module1677,
          properties: module1677,
        }
      : null;
  },
  dump: function (t, n) {
    return {
      generic: this.generic,
      types: k(this.types, !n, t),
      properties: k(this.properties, !n, t),
      atrules: D(this.atrules, !n, t),
    };
  },
  toString: function () {
    return JSON.stringify(this.dump());
  },
};
module.exports = S;
