var module11 = require('./11'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module583 = require('./583'),
  module598 = require('./598');

function j(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, u);
  }

  return l;
}

function P(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      j(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      j(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function L() {
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

var w = (function (t) {
  module35.default(w, t);

  var module47 = w,
    module583 = L(),
    j = function () {
      var t,
        n = module34.default(module47);

      if (module583) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);
    (n = j.call(this, t)).onTextLayout = n.onTextLayout.bind(module39.default(n));
    n.state.labelWidth = new ReactNative.Animated.Value(0);
    return n;
  }

  module25.default(w, [
    {
      key: 'onTextLayout',
      value: function (t) {
        var n = t.nativeEvent.lines,
          l = this.props,
          u = l.fontSize,
          o = l.labelFontSize / u;
        this.state.labelWidth.setValue(n[0].width * o);
      },
    },
    {
      key: 'renderLabel',
      value: function (t) {
        var n = this.onTextLayout;
        return module32.default(module34.default(w.prototype), 'renderLabel', this).call(
          this,
          P(
            P({}, t),
            {},
            {
              onTextLayout: n,
            }
          )
        );
      },
    },
    {
      key: 'renderLine',
      value: function (t) {
        var l = this.state.labelWidth;
        return React.default.createElement(
          module598.default,
          module11.default({}, t, {
            labelWidth: l,
          })
        );
      },
    },
  ]);
  return w;
})(module583.default);

exports.default = w;
w.contentInset = P(
  P({}, module583.default.contentInset),
  {},
  {
    input: 16,
    top: 0,
    left: 12,
    right: 12,
  }
);
w.labelOffset = P(
  P({}, module583.default.labelOffset),
  {},
  {
    y0: 0,
    y1: -10,
  }
);
w.defaultProps = P(
  P({}, module583.default.defaultProps),
  {},
  {
    lineWidth: 1,
    disabledLineWidth: ReactNative.StyleSheet.hairlineWidth,
  }
);
