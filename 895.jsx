var module11 = require('./11'),
  module20 = require('./20'),
  module12 = require('./12'),
  o =
    (this && this.__importStar) ||
    function (n) {
      if (n && n.__esModule) return n;
      var t = {};
      if (null != n) for (var u in n) Object.hasOwnProperty.call(n, u) && (t[u] = n[u]);
      t.default = n;
      return t;
    };

var React = o(require('react')),
  ReactNative = require('react-native');

exports.Manager = React.forwardRef(function (o, f) {
  var s = React.useState([]),
    p = module12(s, 2),
    v = p[0],
    y = p[1];
  React.useImperativeHandle(f, function () {
    return {
      mount: function (n, u) {
        y(function (o) {
          return [].concat(module20(o), [
            {
              key: n,
              children: u,
            },
          ]);
        });
      },
      update: function (t, u) {
        y(function (o) {
          return o.map(function (o) {
            return o.key === t
              ? module11(module11({}, o), {
                  children: u,
                })
              : o;
          });
        });
      },
      unmount: function (n) {
        y(function (t) {
          return t.filter(function (t) {
            return t.key !== n;
          });
        });
      },
    };
  });
  return v.map(function (n, t) {
    var u = n.key,
      o = n.children;
    return (
      <ReactNative.View key={'react-native-portalize-' + u + '-' + t} collapsable={false} pointerEvents="box-none" style={ReactNative.StyleSheet.absoluteFill}>
        {o}
      </ReactNative.View>
    );
  });
});
