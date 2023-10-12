var t =
  (this && this.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var n = {};
    if (null != t) for (var u in t) Object.hasOwnProperty.call(t, u) && (n[u] = t[u]);
    n.default = t;
    return n;
  };

var React = t(require('react')),
  ReactNative = require('react-native'),
  module894 = require('./894'),
  module895 = require('./895');

exports.Context = React.createContext(null);

exports.Host = function (t) {
  var l = t.children,
    s = t.style,
    f = React.useRef(null),
    p = [],
    y = module894.useKey(),
    v = y.generateKey,
    h = y.removeKey;
  React.useEffect(function () {
    for (var t, n, u; p.length && f.current; ) {
      var o = p.pop();
      if (o)
        switch (o.type) {
          case 'mount':
            if (!(null === (t = f.current) || undefined === t)) t.mount(o.key, o.children);
            break;

          case 'update':
            if (!(null === (n = f.current) || undefined === n)) n.update(o.key, o.children);
            break;

          case 'unmount':
            if (!(null === (u = f.current) || undefined === u)) u.unmount(o.key);
        }
    }
  }, []);
  return React.createElement(
    exports.Context.Provider,
    {
      value: {
        mount: function (t) {
          var n = v();
          if (f.current) f.current.mount(n, t);
          else
            p.push({
              type: 'mount',
              key: n,
              children: t,
            });
          return n;
        },
        update: function (t, n) {
          if (f.current) f.current.update(t, n);
          else {
            var u = {
                type: 'mount',
                key: t,
                children: n,
              },
              o = p.findIndex(function (n) {
                return 'mount' === n.type || ('update' === n.type && n.key === t);
              });
            if (o > -1) p[o] = u;
            else p.push(u);
          }
        },
        unmount: function (t) {
          if (f.current) {
            f.current.unmount(t);
            h(t);
          } else
            p.push({
              type: 'unmount',
              key: t,
            });
        },
      },
    },
    React.createElement(
      ReactNative.View,
      {
        style: [
          {
            flex: 1,
          },
          s,
        ],
        collapsable: false,
        pointerEvents: 'box-none',
      },
      l
    ),
    React.createElement(module895.Manager, {
      ref: f,
    })
  );
};
