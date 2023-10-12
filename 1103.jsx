var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = b(require('react')),
  module1100 = b(require('./1100')),
  ReactNative = require('react-native'),
  v = ['style'];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function b(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = P(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
      else l[s] = t[s];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

function S(t, n) {
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

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      S(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      S(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function C() {
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

var E = (function (t) {
  module35.default(S, t);

  var module47 = S,
    P = C(),
    b = function () {
      var t,
        o = module34.default(module47);

      if (P) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, l);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var n;
    module24.default(this, S);

    (n = b.call(this, t)).showUnderlay = function () {
      if (n.hasPressHandler()) {
        n.setState({
          extraChildStyle: {
            opacity: n.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: n.props.underlayColor,
          },
        });
        if (!(null == n.props.onShowUnderlay)) n.props.onShowUnderlay();
      }
    };

    n.hasPressHandler = function () {
      return n.props.onPress || n.props.onPressIn || n.props.onPressOut || n.props.onLongPress;
    };

    n.hideUnderlay = function () {
      n.setState({
        extraChildStyle: null,
        extraUnderlayStyle: null,
      });
      if (!(null == n.props.onHideUnderlay)) n.props.onHideUnderlay();
    };

    n.onStateChange = function (t, o) {
      if (o === module1100.TOUCHABLE_STATE.BEGAN) n.showUnderlay();
      else if (!(o !== module1100.TOUCHABLE_STATE.UNDETERMINED && o !== module1100.TOUCHABLE_STATE.MOVED_OUTSIDE)) n.hideUnderlay();
    };

    n.state = {
      extraChildStyle: null,
      extraUnderlayStyle: null,
    };
    return n;
  }

  module25.default(S, [
    {
      key: 'renderChildren',
      value: function () {
        if (!this.props.children) return <ReactNative.View />;
        var t = React.Children.only(this.props.children);
        return React.cloneElement(t, {
          style: ReactNative.StyleSheet.compose(t.props.style, this.state.extraChildStyle),
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = undefined === n ? {} : n,
          s = module53.default(t, v),
          c = this.state.extraUnderlayStyle;
        return React.createElement(
          module1100.default,
          module11.default({}, s, {
            style: [u, c],
            onStateChange: this.onStateChange,
          }),
          this.renderChildren()
        );
      },
    },
  ]);
  return S;
})(React.Component);

exports.default = E;
E.defaultProps = j(
  j({}, module1100.default.defaultProps),
  {},
  {
    activeOpacity: 0.85,
    delayPressOut: 100,
    underlayColor: 'black',
  }
);
