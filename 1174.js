var React = (function (n, t) {
    if (!t && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var l = o(t);
    if (l && l.has(n)) return l.get(n);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in n)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(n, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(n, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = n[c];
      }

    u.default = n;
    if (l) l.set(n, u);
    return u;
  })(require('react')),
  module1151 = require('./1151'),
  module1175 = require('./1175');

function o(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    l = new WeakMap();
  return (o = function (n) {
    return n ? l : t;
  })(n);
}

var f = function (n) {
  var o = n.children,
    f = React.useRef(null),
    c = React.useMemo(function () {
      return {
        present: function (...args) {
          var n;

          if (null != (n = f.current) && n.present) {
            if (!(null == (t = f.current))) t.present.apply(t, args);
          }
        },
        dismiss: function (...args) {
          var n;

          if (null != (n = f.current) && n.dismiss) {
            if (!(null == (t = f.current))) t.dismiss.apply(t, args);
          }
        },
        dismissAll: function (...args) {
          var n;

          if (null != (n = f.current) && n.dismissAll) {
            if (!(null == (t = f.current))) t.dismissAll.apply(t, args);
          }
        },
        snapTo: function (...args) {
          var n;

          if (null != (n = f.current) && n.snapTo) {
            if (!(null == (t = f.current))) t.snapTo.apply(t, args);
          }
        },
        expand: function (...args) {
          var n;

          if (null != (n = f.current) && n.expand) {
            if (!(null == (t = f.current))) t.expand.apply(t, args);
          }
        },
        collapse: function (...args) {
          var n;

          if (null != (n = f.current) && n.collapse) {
            if (!(null == (t = f.current))) t.collapse.apply(t, args);
          }
        },
      };
    }, []);
  return React.default.createElement(
    module1151.BottomSheetModalProvider,
    {
      value: c,
    },
    o,
    React.default.createElement(module1175.default, {
      ref: f,
    })
  );
};

exports.default = f;
