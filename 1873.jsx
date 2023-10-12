var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var c = o(n);
    if (c && c.has(t)) return c.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, f, p);
        else l[f] = t[f];
      }

    l.default = t;
    if (c) c.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    c = new WeakMap();
  return (o = function (t) {
    return t ? c : n;
  })(t);
}

var c = ReactNative.StyleSheet.create({
  buttonText: {
    color: '#2c2c2c',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 30,
  },
});

exports.default = function (o) {
  var l = o.buttonStyle,
    u = o.onPress,
    f = o.iconSrc,
    p = o.textStyle,
    y = o.children;
  return (
    <ReactNative.TouchableOpacity activeOpacity={0.5} style={[c.button, l]} onPress={u}>
      <ReactNative.Image style={c.icon} source={f} />
      <ReactNative.Text style={[c.buttonText, p]}>{y}</ReactNative.Text>
    </ReactNative.TouchableOpacity>
  );
};
