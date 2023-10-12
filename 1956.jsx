exports.default = function (t) {
  var f = module482.useTheme().colors,
    y = t.icon,
    p = t.label,
    h = t.labelStyle,
    w = t.to,
    O = t.focused,
    C = undefined !== O && O,
    k = t.activeTintColor,
    S = undefined === k ? f.primary : k,
    E = t.inactiveTintColor,
    R = undefined === E ? module1356.default(f.text).alpha(0.68).rgb().string() : E,
    T = t.activeBackgroundColor,
    j = undefined === T ? module1356.default(S).alpha(0.12).rgb().string() : T,
    _ = t.inactiveBackgroundColor,
    x = undefined === _ ? 'transparent' : _,
    I = t.style,
    M = t.onPress,
    V = module53.default(t, b),
    B = ReactNative.StyleSheet.flatten(I || {}).borderRadius,
    D = undefined === B ? 4 : B,
    K = C ? S : R,
    W = C ? j : x,
    L = y
      ? y({
          size: 24,
          focused: C,
          color: K,
        })
      : null;
  return (
    <ReactNative.View>
      <v
        delayPressIn={0}
        onPress={M}
        style={[
          P.wrapper,
          {
            borderRadius: D,
          },
        ]}
        accessibilityTraits={C ? ['button', 'selected'] : 'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityState={{
          selected: C,
        }}
        accessibilityStates={C ? ['selected'] : []}
        to={w}
      >
        <React.Fragment>
          {L}
          <ReactNative.View
            style={[
              P.label,
              {
                marginLeft: L ? 32 : 0,
                marginVertical: 5,
              },
            ]}
          >
            {'string' == typeof p ? (
              <ReactNative.Text
                numberOfLines={1}
                style={[
                  {
                    color: K,
                    fontWeight: '500',
                  },
                  h,
                ]}
              >
                {p}
              </ReactNative.Text>
            ) : (
              p({
                color: K,
                focused: C,
              })
            )}
          </ReactNative.View>
        </React.Fragment>
      </v>
    </ReactNative.View>
  );
};

var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = p(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, s, u);
        else o[s] = t[s];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module482 = require('./482'),
  module1356 = require('./1356'),
  module1957 = require('./1957'),
  y = ['children', 'style', 'onPress', 'to', 'accessibilityRole', 'delayPressIn'],
  b = ['icon', 'label', 'labelStyle', 'to', 'focused', 'activeTintColor', 'inactiveTintColor', 'activeBackgroundColor', 'inactiveBackgroundColor', 'style', 'onPress'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (p = function (t) {
    return t ? n : l;
  })(t);
}

var v = function (t) {
  var u = t.children,
    b = t.style,
    p = t.onPress,
    v = t.to,
    h = t.accessibilityRole,
    w = t.delayPressIn,
    O = module53.default(t, y);
  return 'web' === ReactNative.Platform.OS && v ? (
    <module482.Link>{u}</module482.Link>
  ) : (
    <module1957.default>
      <ReactNative.View style={b}>{u}</ReactNative.View>
    </module1957.default>
  );
};

var P = ReactNative.StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4,
    overflow: 'hidden',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  label: {
    marginRight: 32,
    flex: 1,
  },
  button: {
    display: 'flex',
  },
});
