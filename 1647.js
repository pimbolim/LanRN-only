var module47 = require('./47'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1646 = require('./1646'),
  module1623 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./1623')),
  module1630 = require('./1630'),
  module1634 = require('./1634'),
  module1620 = require('./1620');

require('./1648');

var module1635 = require('./1635');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function w(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function k(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      w(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      w(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function x() {
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

var D = (function (t, ...args) {
  module35.default(w, t);

  var module47 = w,
    module1620 = x(),
    P = function () {
      var t,
        o = module34.default(module47);

      if (module1620) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    var t;
    module24.default(this, w);

    (t = P.call(this, ...args)).setNativeProps = function (n) {
      var u = n && !n.matrix && module1630.default(n);
      if (u) n.matrix = u;
      var f = module1623.propsAndStyles(n);
      module11.default(f, module1634.pickNotNil(module1646.default(f, true)));
      if (t.root) t.root.setNativeProps(f);
    };

    return t;
  }

  module25.default(w, [
    {
      key: 'render',
      value: function () {
        var t = module1623.propsAndStyles(this.props),
          n = module1623.default(
            k(
              k({}, t),
              {},
              {
                x: null,
                y: null,
              }
            ),
            this
          );
        module11.default(n, module1646.default(t, true));
        n.ref = this.refMethod;
        return React.default.createElement(module1635.RNSVGText, n);
      },
    },
  ]);
  return w;
})(module1620.default);

exports.default = D;
D.displayName = 'Text';
