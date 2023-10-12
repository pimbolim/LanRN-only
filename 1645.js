var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1623 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = P(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./1623')),
  module1646 = require('./1646'),
  module1630 = require('./1630'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (P = function (t) {
    return t ? u : n;
  })(t);
}

function b() {
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

var j = (function (t, ...args) {
  module35.default(M, t);

  var module1620 = M,
    P = b(),
    j = function () {
      var t,
        n = module34.default(module1620);

      if (P) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M() {
    var t;
    module24.default(this, M);

    (t = j.call(this, ...args)).setNativeProps = function (n) {
      var u = !n.matrix && module1630.default(n);
      if (u) n.matrix = u;
      if (t.root) t.root.setNativeProps(n);
    };

    return t;
  }

  module25.default(M, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = module1623.propsAndStyles(t),
          o = module1623.default(u, this),
          f = module1646.extractFont(u);
        if (w(f)) o.font = f;
        return React.default.createElement(
          module1635.RNSVGGroup,
          module11.default(
            {
              ref: this.refMethod,
            },
            o
          ),
          t.children
        );
      },
    },
  ]);
  return M;
})(module1620.default);

exports.default = j;
j.displayName = 'G';

var w = function (t) {
  for (var n in t) return true;

  return false;
};
