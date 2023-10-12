var module20 = require('./20'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = k(require('react')),
  ReactNative = require('react-native'),
  module482 = require('./482'),
  module1340 = require('./1340'),
  module1383 = k(require('./1383')),
  module1384 = require('./1384'),
  module1385 = k(require('./1385')),
  module1389 = require('./1389'),
  module1392 = require('./1392');

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (B = function (t) {
    return t ? o : n;
  })(t);
}

function k(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = B(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = u ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
      else l[c] = t[c];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

function E(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function S(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      E(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      E(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function H() {
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

function D(t) {
  var n = t.isFocused,
    o = t.children,
    l = t.style,
    u = module482.useTheme().colors;
  return (
    <ReactNative.View
      accessibilityElementsHidden={!n}
      importantForAccessibility={n ? 'auto' : 'no-hide-descendants'}
      style={[
        C.content,
        {
          backgroundColor: u.background,
        },
        l,
      ]}
    >
      {o}
    </ReactNative.View>
  );
}

var x = (function (t) {
  module35.default(E, t);

  var module47 = E,
    B = H(),
    k = function () {
      var t,
        n = module34.default(module47);

      if (B) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E(t) {
    var n;
    module24.default(this, E);

    (n = k.call(this, t)).renderTabBar = function () {
      var t = n.props,
        o = t.tabBar,
        l =
          undefined === o
            ? function (t) {
                return <module1385.default />;
              }
            : o,
        u = t.tabBarOptions,
        c = t.state,
        s = t.navigation,
        f = t.descriptors;
      return l(
        S(
          S({}, u),
          {},
          {
            state: c,
            descriptors: f,
            navigation: s,
          }
        )
      );
    };

    n.handleTabBarHeightChange = function (t) {
      n.setState(function (n) {
        return n.tabBarHeight !== t
          ? {
              tabBarHeight: t,
            }
          : null;
      });
    };

    var o = n.props,
      u = o.state,
      c = o.tabBarOptions,
      s = ReactNative.Dimensions.get('window'),
      f = module1385.getTabBarHeight({
        state: u,
        dimensions: s,
        layout: {
          width: s.width,
          height: 0,
        },
        insets: module1383.initialSafeAreaInsets,
        adaptive: null == c ? undefined : c.adaptive,
        labelPosition: null == c ? undefined : c.labelPosition,
        tabStyle: null == c ? undefined : c.tabStyle,
        style: null == c ? undefined : c.style,
      });
    n.state = {
      loaded: [u.routes[u.index].key],
      tabBarHeight: f,
    };
    return n;
  }

  module25.default(
    E,
    [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.state,
            o = t.descriptors,
            l = t.navigation,
            u = t.lazy,
            c = t.detachInactiveScreens,
            s = undefined === c || c,
            f = t.sceneContainerStyle,
            P = n.routes,
            B = this.state,
            k = B.loaded,
            E = B.tabBarHeight,
            S = (null == module1340.screensEnabled ? undefined : module1340.screensEnabled()) && s;
          return React.createElement(
            module482.NavigationHelpersContext.Provider,
            {
              value: l,
            },
            React.createElement(
              module1383.default,
              null,
              React.createElement(
                module1340.ScreenContainer,
                {
                  enabled: S,
                  style: C.container,
                },
                P.map(function (t, l) {
                  var c = o[t.key],
                    s = c.options.unmountOnBlur,
                    v = n.index === l;
                  return s && !v
                    ? null
                    : !u || k.includes(t.key) || v
                    ? React.createElement(
                        module1384.default,
                        {
                          key: t.key,
                          style: ReactNative.StyleSheet.absoluteFill,
                          isVisible: v,
                          enabled: S,
                        },
                        React.createElement(
                          D,
                          {
                            isFocused: v,
                            style: f,
                          },
                          React.createElement(
                            module1392.default.Provider,
                            {
                              value: E,
                            },
                            c.render()
                          )
                        )
                      )
                    : null;
                })
              ),
              React.createElement(
                module1389.default.Provider,
                {
                  value: this.handleTabBarHeightChange,
                },
                this.renderTabBar()
              )
            )
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, o) {
          var l = t.state.routes[t.state.index].key;
          return {
            loaded: o.loaded.includes(l) ? o.loaded : [].concat(module20.default(o.loaded), [l]),
          };
        },
      },
    ]
  );
  return E;
})(React.Component);

exports.default = x;
x.defaultProps = {
  lazy: true,
};
var C = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
});
