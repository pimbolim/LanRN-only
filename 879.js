var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
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
  })(require('react')),
  module400 = require('./400'),
  module431 = require('./431'),
  module880 = require('./880'),
  O = ['children', 'edges', 'style'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function P() {
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

var j = (function (t) {
    module35.default(w, t);

    var module400 = w,
      b = P(),
      j = function () {
        var t,
          n = module34.default(module400);

        if (b) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w() {
      module24.default(this, w);
      return j.apply(this, arguments);
    }

    module25.default(w, [
      {
        key: 'edges',
        get: function () {
          var t = this.props.edges;
          return Array.isArray(t) ? t : ['bottom', 'left', 'right'];
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            u = t.children,
            f = t.style,
            c = module53.default(t, O),
            l = module880.CStyles();
          return React.default.createElement(
            module431.SafeAreaView,
            module11.default(
              {
                style: [l.root, f],
                edges: this.edges,
              },
              c
            ),
            u
          );
        },
      },
    ]);
    return w;
  })(React.PureComponent),
  w = module400.connect(function (t) {
    return {
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(j);

exports.default = w;
