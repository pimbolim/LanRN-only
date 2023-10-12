exports.SvgCss = F;

exports.SvgCssUri = function (t) {
  var n = t.uri,
    o = React.useState(null),
    u = module12.default(o, 2),
    l = u[0],
    c = u[1];
  React.useEffect(
    function () {
      if (n) module1664.fetchText(n).then(c).catch(module1664.err);
      else c(null);
    },
    [n]
  );
  return React.default.createElement(F, {
    xml: l,
    override: t,
  });
};

var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module12 = require('./12'),
  React = S(require('react')),
  module1664 = require('./1664'),
  module1667 = S(require('./1667')),
  module1788 = require('./1788');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function S(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = b(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(u, c, s);
      else u[c] = t[c];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

function w(t) {
  var n = k();
  return function () {
    var o,
      u = module34.default(t);

    if (n) {
      var l = module34.default(this).constructor;
      o = Reflect.construct(u, arguments, l);
    } else o = u.apply(this, arguments);

    return module37.default(this, o);
  };
}

function k() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function x(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = j(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function j(t, n) {
  if (t) {
    if ('string' == typeof t) return P(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? P(t, n) : undefined;
  }
}

function P(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

var A = {
  xmlMode: true,
  adapter: {
    removeSubsets: function (t) {
      for (var n, o, u, l = t.length; --l > -1; ) {
        for (n = o = t[l], delete t[l], u = true; o; ) {
          if (t.includes(o)) {
            u = false;
            t.splice(l, 1);
            break;
          }

          o = ('object' == typeof o && o.parent) || null;
        }

        if (u) t[l] = n;
      }

      return t;
    },
    existsOne: function t(n, o) {
      return o.some(function (o) {
        return 'object' == typeof o && (n(o) || t(n, o.children));
      });
    },
    getSiblings: function (t) {
      var n = 'object' == typeof t && t.parent;
      return n ? n.children : [];
    },
    hasAttrib: function (t, n) {
      return t.props.hasOwnProperty(n);
    },
    findOne: function t(n, o) {
      for (var u, l = 0, c = o.length; l < c && !u; l++) {
        var s = o[l];
        if ('string' == typeof s);
        else if (n(s)) u = s;
        else {
          var f = s.children;
          if (0 !== f.length) u = t(n, f);
        }
      }

      return u;
    },
    findAll: function t(n, o) {
      for (var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [], l = 0, c = o.length; l < c; l++) {
        var s = o[l];

        if ('object' == typeof s) {
          if (n(s)) u.push(s);
          var f = s.children;
          if (0 !== f.length) t(n, f, u);
        }
      }

      return u;
    },
    isTag: function (t) {
      return 'object' == typeof t;
    },
    getParent: function (t) {
      return 'object' == typeof t ? t.parent : null;
    },
    getChildren: function (t) {
      return 'object' == typeof t ? t.children : [];
    },
    getName: function (t) {
      return t.tag;
    },
    getText: function (t) {
      return '';
    },
    getAttributeValue: function (t, n) {
      return t.props[n] || null;
    },
  },
};

function C(t, n) {
  return module1788.default(t, n, A);
}

function O(t, n) {
  module1667.default.walk(t, {
    visit: 'Rule',
    enter: function (t) {
      var o = t,
        u = o.type,
        l = o.prelude;

      if ('Rule' === u) {
        var c = this.atrule;
        l.children.each(function (o, u) {
          var l = o.children,
            s = [];
          n.push({
            item: u,
            atrule: c,
            rule: t,
            pseudos: s,
          });
          l.each(function (t, n, o) {
            var u = t.type;
            if (!('PseudoClassSelector' !== u && 'PseudoElementSelector' !== u))
              s.push({
                item: n,
                list: o,
              });
          });
        });
      }
    },
  });
}

function E(t) {
  return t.filter(function (t) {
    var n = t.atrule;
    if (null === n) return true;
    var o = n.name,
      u = n.prelude,
      l = u && u.children.first(),
      c = l && 'MediaQueryList' === l.type ? module1667.default.generate(u) : o;
    return M.includes(c);
  });
}

var M = ['', 'screen'];

function W(t) {
  return t.filter(function (t) {
    var n = t.pseudos;
    return T.includes(
      module1667.default.generate({
        type: 'Selector',
        children: new module1667.List().fromArray(
          n.map(function (t) {
            return t.item.data;
          })
        ),
      })
    );
  });
}

var T = [''];

function D(t) {
  t.forEach(function (t) {
    return t.pseudos.forEach(function (t) {
      return t.list.remove(t.item);
    });
  });
}

function R(t) {
  var n = 0,
    o = 0,
    u = 0;
  t.children.each(function t(l) {
    switch (l.type) {
      case 'SelectorList':
      case 'Selector':
        l.children.each(t);
        break;

      case 'IdSelector':
        n++;
        break;

      case 'ClassSelector':
      case 'AttributeSelector':
        o++;
        break;

      case 'PseudoClassSelector':
        switch (l.name.toLowerCase()) {
          case 'not':
            var c = l.children;
            if (c) c.each(t);
            break;

          case 'before':
          case 'after':
          case 'first-line':
          case 'first-letter':
            u++;
            break;

          default:
            o++;
        }

        break;

      case 'PseudoElementSelector':
        u++;
        break;

      case 'TypeSelector':
        var s = l.name;
        if ('*' !== s.charAt(s.length - 1)) u++;
    }
  });
  return [n, o, u];
}

function U(t, n) {
  for (var o = 0; o < 4; o += 1) {
    if (t[o] < n[o]) return -1;
    if (t[o] > n[o]) return 1;
  }

  return 0;
}

function _(t) {
  return {
    selector: t,
    specificity: R(t.item.data),
  };
}

function L(t, n, o, u) {
  var l,
    c,
    s,
    f,
    p,
    v,
    h,
    y = 2 * o,
    b = 0;

  for (l = 0; l < n; l += y)
    for (s = (c = l + o) + o, c > n && (c = n), s > n && (s = n), f = l, p = c; ; )
      if (f < c && p < s) {
        v = t[f];
        h = t[p];
        if (U(v.specificity, h.specificity) <= 0) u[b++] = t[f++];
        else u[b++] = t[p++];
      } else if (f < c) u[b++] = t[f++];
      else {
        if (!(p < s)) break;
        u[b++] = t[p++];
      }
}

function I(t, n) {
  for (var o = new Array(n), u = 1; u < n; u *= 2) {
    L(t, n, u, o);
    var l = t;
    t = o;
    o = l;
  }

  return t;
}

function V(t) {
  var n = t.length;
  return n <= 1
    ? t
    : I(t.map(_), n).map(function (t) {
        return t.selector;
      });
}

var B = {
  context: 'declarationList',
  parseValue: false,
};

function N(t) {
  var n = t.props,
    o = t.styles;
  if (!n.style) n.style = {};
  var u = n.style,
    l = new Map();
  if (((t.style = u), (t.priority = l), o && 0 !== o.length))
    try {
      module1667.default.parse(o, B).children.each(function (t) {
        try {
          var n = t,
            o = n.property,
            c = n.value,
            s = n.important,
            f = o.trim();
          l.set(f, s);
          u[module1664.camelCase(f)] = module1667.default.generate(c).trim();
        } catch (t) {
          if ('Unknown node type: undefined' !== t.message)
            console.warn(
              "Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " +
                t
            );
        }
      });
    } catch (t) {
      console.warn(
        "Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " +
          t
      );
    }
}

function Q(t) {
  if (!t.style) N(t);
  return t;
}

function $(t, n) {
  for (var o = t; (o = o.parent) && o.tag !== n; );

  return o;
}

var q = {
    parseValue: false,
    parseCustomProperty: false,
  },
  z = function (t) {
    var n = C('style', t);
    if (0 === n.length) return t;

    for (var o, u = [], l = x(n); !(o = l()).done; ) {
      var c = o.value,
        s = c.children;
      if (s.length && !$(c, 'foreignObject'))
        try {
          var f = s.join('');
          O(module1667.default.parse(f, q), u);
        } catch (t) {
          console.warn('Warning: Parse error of styles of <style/> element, skipped. Error details: ' + t);
        }
    }

    var p = W(E(u));
    D(p);

    for (var y, b = x(V(p).reverse()); !(y = b()).done; ) {
      var S = y.value,
        w = S.rule,
        k = S.item;

      if (null !== w) {
        var j = module1667.default.generate(k.data);

        try {
          if (
            'continue' ===
            (function () {
              var n = C(j, t).map(Q);
              if (0 === n.length) return 'continue';
              module1667.default.walk(w, {
                visit: 'Declaration',
                enter: function (t) {
                  for (
                    var o, u = t, l = u.property, c = u.value, s = u.important, f = l.trim(), p = module1664.camelCase(f), y = module1667.default.generate(c).trim(), b = x(n);
                    !(o = b()).done;

                  ) {
                    var S = o.value,
                      w = S.style,
                      k = S.priority,
                      j = k.get(f);

                    if (undefined === j || j < s) {
                      k.set(f, s);
                      w[p] = y;
                    }
                  }
                },
              });
            })()
          )
            continue;
        } catch (t) {
          if (t.constructor === SyntaxError) {
            console.warn('Warning: Syntax error when trying to select \n\n' + j + '\n\n, skipped. Error details: ' + t);
            continue;
          }

          throw t;
        }
      }
    }

    return t;
  };

function F(t) {
  var n = t.xml,
    o = t.override,
    u = React.useMemo(
      function () {
        return null !== n ? module1664.parse(n, z) : null;
      },
      [n]
    );
  return React.default.createElement(module1664.SvgAst, {
    ast: u,
    override: o || t,
  });
}

exports.inlineStyles = z;

var G = (function (t, ...args) {
  module35.default(c, t);
  var n = w(c);

  function c() {
    var t;
    module24.default(this, c);
    (t = n.call(this, ...args)).state = {
      ast: null,
    };
    return t;
  }

  module25.default(c, [
    {
      key: 'componentDidMount',
      value: function () {
        this.parse(this.props.xml);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var n = this.props.xml;
        if (n !== t.xml) this.parse(n);
      },
    },
    {
      key: 'parse',
      value: function (t) {
        try {
          this.setState({
            ast: t ? module1664.parse(t, z) : null,
          });
        } catch (t) {
          console.error(t);
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = this.state.ast;
        return React.default.createElement(module1664.SvgAst, {
          ast: n,
          override: t.override || t,
        });
      },
    },
  ]);
  return c;
})(React.Component);

exports.SvgWithCss = G;

var H = (function (t, ...args) {
  module35.default(s, t);
  var c = w(s);

  function s() {
    var t;
    module24.default(this, s);
    (t = c.call(this, ...args)).state = {
      xml: null,
    };
    return t;
  }

  module25.default(s, [
    {
      key: 'componentDidMount',
      value: function () {
        this.fetch(this.props.uri);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var n = this.props.uri;
        if (n !== t.uri) this.fetch(n);
      },
    },
    {
      key: 'fetch',
      value: function (t) {
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (((o.prev = 0), (o.t0 = this), !t)) {
                    o.next = 8;
                    break;
                  }

                  o.next = 5;
                  return regeneratorRuntime.default.awrap(module1664.fetchText(t));

                case 5:
                  o.t1 = o.sent;
                  o.next = 9;
                  break;

                case 8:
                  o.t1 = null;

                case 9:
                  o.t2 = o.t1;
                  o.t3 = {
                    xml: o.t2,
                  };
                  o.t0.setState.call(o.t0, o.t3);
                  o.next = 17;
                  break;

                case 14:
                  o.prev = 14;
                  o.t4 = o.catch(0);
                  console.error(o.t4);

                case 17:
                case 'end':
                  return o.stop();
              }
          },
          null,
          this,
          [[0, 14]],
          Promise
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = this.state.xml;
        return React.default.createElement(G, {
          xml: n,
          override: t,
        });
      },
    },
  ]);
  return s;
})(React.Component);

exports.SvgWithCssUri = H;
