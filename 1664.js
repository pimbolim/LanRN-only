exports.SvgAst = V;

exports.SvgUri = function (t) {
  var n = t.onError,
    u = undefined === n ? Z : n,
    l = t.uri,
    o = React.useState(null),
    c = module12.default(o, 2),
    f = c[0],
    p = c[1];
  React.useEffect(
    function () {
      if (l) H(l).then(p).catch(u);
      else p(null);
    },
    [u, l]
  );
  return React.default.createElement(q, {
    xml: f,
    override: t,
  });
};

exports.SvgXml = q;
exports.astToReact = ee;
exports.fetchText = H;
exports.getStyle = Y;
exports.parse = ie;

var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module12 = require('./12'),
  module11 = require('./11'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = z(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = o ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  module1622 = require('./1622'),
  module1636 = require('./1636'),
  module1637 = require('./1637'),
  module1638 = require('./1638'),
  module1641 = require('./1641'),
  module1642 = require('./1642'),
  module1643 = require('./1643'),
  module1639 = require('./1639'),
  module1645 = require('./1645'),
  P = require('./1647'),
  module1648 = require('./1648'),
  module1649 = require('./1649'),
  module1650 = require('./1650'),
  module1651 = require('./1651'),
  module1652 = require('./1652'),
  module1653 = require('./1653'),
  module1654 = require('./1654'),
  module1657 = require('./1657'),
  module1658 = require('./1658'),
  module1659 = require('./1659'),
  module1660 = require('./1660'),
  module1661 = require('./1661'),
  module1662 = require('./1662');

function z(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (z = function (t) {
    return t ? u : n;
  })(t);
}

function B(t) {
  var n = N();
  return function () {
    var u,
      l = module34.default(t);

    if (n) {
      var o = module34.default(this).constructor;
      u = Reflect.construct(l, arguments, o);
    } else u = l.apply(this, arguments);

    return module37.default(this, u);
  };
}

function N() {
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

var $ = {
  svg: module1643.default,
  circle: module1636.default,
  ellipse: module1637.default,
  g: module1645.default,
  text: P.default,
  tspan: module1648.default,
  textPath: module1649.default,
  path: module1639.default,
  polygon: module1638.default,
  polyline: module1641.default,
  line: module1642.default,
  rect: module1622.default,
  use: module1650.default,
  image: module1651.default,
  symbol: module1652.default,
  defs: module1653.default,
  linearGradient: module1654.default,
  radialGradient: module1657.default,
  stop: module1658.default,
  clipPath: module1659.default,
  pattern: module1660.default,
  mask: module1661.default,
  marker: module1662.default,
};

function I() {
  return null;
}

function V(t) {
  var n = t.ast,
    u = t.override;
  if (!n) return null;
  var l = n.props,
    o = n.children;
  return React.default.createElement(module1643.default, module11.default({}, l, u), o);
}

exports.tags = $;
var Z = console.error.bind(console);

function q(t) {
  var n = t.onError,
    u = undefined === n ? Z : n,
    l = t.xml,
    o = t.override,
    c = React.useMemo(
      function () {
        return null !== l ? ie(l) : null;
      },
      [l]
    );

  try {
    return React.default.createElement(V, {
      ast: c,
      override: o || t,
    });
  } catch (t) {
    u(t);
    return null;
  }
}

function H(t) {
  var module24;
  return regeneratorRuntime.default.async(
    function (l) {
      for (;;)
        switch ((l.prev = l.next)) {
          case 0:
            l.next = 2;
            return regeneratorRuntime.default.awrap(fetch(t));

          case 2:
            module24 = l.sent;
            l.next = 5;
            return regeneratorRuntime.default.awrap(module24.text());

          case 5:
            return l.abrupt('return', l.sent);

          case 6:
          case 'end':
            return l.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

exports.err = Z;

var J = (function (t, ...args) {
  module35.default(c, t);
  var n = B(c);

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
            ast: t ? ie(t) : null,
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
        return React.default.createElement(V, {
          ast: n,
          override: t.override || t,
        });
      },
    },
  ]);
  return c;
})(React.Component);

exports.SvgFromXml = J;

var K = (function (t, ...args) {
  module35.default(f, t);
  var c = B(f);

  function f() {
    var t;
    module24.default(this, f);
    (t = c.call(this, ...args)).state = {
      xml: null,
    };
    return t;
  }

  module25.default(f, [
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
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  if (((u.prev = 0), (u.t0 = this), !t)) {
                    u.next = 8;
                    break;
                  }

                  u.next = 5;
                  return regeneratorRuntime.default.awrap(H(t));

                case 5:
                  u.t1 = u.sent;
                  u.next = 9;
                  break;

                case 8:
                  u.t1 = null;

                case 9:
                  u.t2 = u.t1;
                  u.t3 = {
                    xml: u.t2,
                  };
                  u.t0.setState.call(u.t0, u.t3);
                  u.next = 17;
                  break;

                case 14:
                  u.prev = 14;
                  u.t4 = u.catch(0);
                  console.error(u.t4);

                case 17:
                case 'end':
                  return u.stop();
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
        return React.default.createElement(J, {
          xml: n,
          override: t,
        });
      },
    },
  ]);
  return f;
})(React.Component);

exports.SvgFromUri = K;

var L = function (t, n) {
    return n.toUpperCase();
  },
  Q = function (t) {
    return t.replace(/[:-]([a-z])/g, L);
  };

function Y(t) {
  for (var n = {}, u = t.split(';'), l = u.length, o = 0; o < l; o++) {
    var c = u[o];

    if (0 !== c.length) {
      var f = c.split(':'),
        s = f[0],
        p = f[1];
      n[Q(s.trim())] = p.trim();
    }
  }

  return n;
}

function ee(t, n) {
  if ('object' == typeof t) {
    var u = t.Tag,
      l = t.props,
      o = t.children;
    return React.default.createElement(
      u,
      module11.default(
        {
          key: n,
        },
        l
      ),
      o.map(ee)
    );
  }

  return t;
}

function te(t, n) {
  for (var u = ''; n--; ) u += t;

  return u;
}

exports.camelCase = Q;

var re = function (t) {
  return te('  ', t.length);
};

function ne(t, n) {
  for (var u = t.split('\n'), l = u.length, o = n, c = 0; c < l; c++) {
    var f = u[c].length;
    if (!(o >= f)) break;
    o -= f;
  }

  var s = t.slice(0, n).replace(/^\t+/, re),
    p = /(^|\n).*$/.exec(s),
    v = (p && p[0]) || '',
    h = t.slice(n),
    y = /.*(\n|$)/.exec(h);
  return {
    line: c,
    column: o,
    snippet: '' + v + (y && y[0]) + '\n' + te(' ', v.length) + '^',
  };
}

var ae = /[a-zA-Z0-9:_-]/,
  ue = /[\s\t\r\n]/,
  le = /['"]/;

function ie(t, n) {
  var u,
    l = t.length,
    o = null,
    c = function () {
      for (; P + 1 < l && ('<' !== t[P] || !ae.test(t[P + 1])); ) P++;

      return v();
    },
    f = null,
    s = [];

  function p(n) {
    var u = ne(t, P),
      l = u.line,
      o = u.column,
      c = u.snippet;
    throw new Error(n + ' (' + l + ':' + o + "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n" + c);
  }

  function v() {
    for (var n, u = ''; P < l && '<' !== (n = t[P]); ) {
      u += n;
      P += 1;
    }

    if (/\S/.test(u)) f.push(u);
    return '<' === t[P] ? h : v;
  }

  function h() {
    var n = t[P];
    if ('?' === n) return v;

    if ('!' === n) {
      var l = P + 1;
      if ('--' === t.slice(l, P + 3)) return y;
      var c = P + 8;
      if ('[CDATA[' === t.slice(l, c)) return x;
      if (/doctype/i.test(t.slice(l, c))) return v;
    }

    if ('/' === n) return b;
    var h = k(),
      E = {},
      S = {
        tag: h,
        props: E,
        children: [],
        parent: o,
        Tag: $[h] || I,
      };
    if (o) f.push(S);
    else u = S;
    w(E);
    var O = E.style;

    if ('string' == typeof O) {
      S.styles = O;
      E.style = Y(O);
    }

    var j = false;

    if ('/' === t[P]) {
      P += 1;
      j = true;
    }

    if ('>' !== t[P]) p('Expected >');

    if (!j) {
      o = S;
      f = S.children;
      s.push(S);
    }

    return v;
  }

  function y() {
    var n = t.indexOf('--\x3e', P);
    if (!~n) p('expected --\x3e');
    P = n + 2;
    return v;
  }

  function x() {
    var n = t.indexOf(']]>', P);
    if (!~n) p('expected ]]>');
    f.push(t.slice(P + 7, n));
    P = n + 2;
    return v;
  }

  function b() {
    var n = k();
    if (
      (n || p('Expected tag name'),
      o && n !== o.tag && p('Expected closing tag </' + n + '> to match opening tag <' + o.tag + '>'),
      '>' !== t[P] && p('Expected >'),
      s.pop(),
      (o = s[s.length - 1]))
    )
      f = o.children;
    return v;
  }

  function k() {
    for (var n, u = ''; P < l && ae.test((n = t[P])); ) {
      u += n;
      P += 1;
    }

    return u;
  }

  function w(n) {
    for (; P < l; ) {
      if (!ue.test(t[P])) return;
      O();
      var u = k();
      if (!u) return;
      var o = true;
      O();

      if ('=' === t[P]) {
        P += 1;
        O();
        o = le.test(t[P]) ? S() : E();
        if (!(isNaN(+o) || '' === o.trim())) o = +o;
      }

      n[Q(u)] = o;
    }
  }

  function E() {
    var n = '';

    do {
      var u = t[P];
      if (' ' === u || '>' === u || '/' === u) return n;
      n += u;
      P += 1;
    } while (P < l);

    return n;
  }

  function S() {
    for (var n = t[P++], u = '', o = false; P < l; ) {
      var c = t[P++];
      if (c === n && !o) return u;
      if (!('\\' !== c || o)) o = true;
      u += o ? '\\' + c : c;
      o = false;
    }

    return u;
  }

  function O() {
    for (; P < l && ue.test(t[P]); ) P += 1;
  }

  for (var P = 0; P < l; ) {
    if (!c) p('Unexpected character');
    c = c();
    P += 1;
  }

  if ((c !== v && p('Unexpected end of input'), u)) {
    var j = (n ? n(u) : u) || u,
      M = j.children.map(ee),
      U = j;
    U.children = M;
    return U;
  }

  return null;
}
