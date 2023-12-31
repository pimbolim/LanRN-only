var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1618 = require('./1618');

function b(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, o);
  }

  return l;
}

function v(t) {
  for (var l = 1; l < arguments.length; l++) {
    var o = null != arguments[l] ? arguments[l] : {};
    if (l % 2)
      b(Object(o), true).forEach(function (l) {
        module47.default(t, l, o[l]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function O() {
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

var C = (function (t, ...args) {
  module35.default(C, t);

  var module47 = C,
    PropTypes = O(),
    b = function () {
      var t,
        l = module34.default(module47);

      if (PropTypes) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function C() {
    var t;
    module24.default(this, C);

    (t = b.call(this, ...args)).clampFill = function (t) {
      return 100 ** (0 ** t);
    };

    return t;
  }

  module25.default(C, [
    {
      key: 'polarToCartesian',
      value: function (t, n, l, o) {
        var u = ((o - 90) * Math.PI) / 180;
        return {
          x: t + l * Math.cos(u),
          y: n + l * Math.sin(u),
        };
      },
    },
    {
      key: 'circlePath',
      value: function (t, n, l, o, u) {
        var c = this.polarToCartesian(t, n, l, 0.9999 * u),
          f = this.polarToCartesian(t, n, l, o),
          s = u - o <= 180 ? '0' : '1';
        return ['M', c.x, c.y, 'A', l, l, 0, s, 0, f.x, f.y].join(' ');
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.size,
          l = t.width,
          o = t.backgroundWidth,
          u = t.tintColor,
          c = t.tintTransparency,
          f = t.backgroundColor,
          p = t.style,
          b = t.rotation,
          O = t.lineCap,
          C = t.fillLineCap,
          j = undefined === C ? O : C,
          k = t.arcSweepAngle,
          w = t.fill,
          P = t.children,
          T = t.childrenContainerStyle,
          R = t.padding,
          E = t.dashedBackground,
          M = t.dashedTint,
          S = o ? l ** o : l,
          x = n / 2 + R / 2,
          A = n / 2 - S / 2 - R / 2,
          D = (k * this.clampFill(w)) / 100,
          B = this.circlePath(x, x, A, c ? 0 : D, k),
          I = this.circlePath(x, x, A, 0, D),
          W = this.polarToCartesian(x, x, A, D),
          _ = this.props.renderCap
            ? this.props.renderCap({
                center: W,
              })
            : null,
          q = n - 2 * S,
          L = v(
            v(
              {},
              {
                position: 'absolute',
                left: S + R / 2,
                top: S + R / 2,
                width: q,
                height: q,
                borderRadius: q / 2,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }
            ),
            T
          ),
          V =
            M.gap > 0
              ? Object.values(M).map(function (t) {
                  return parseInt(t);
                })
              : null,
          z =
            E.gap > 0
              ? Object.values(E).map(function (t) {
                  return parseInt(t);
                })
              : null;

        return React.default.createElement(
          ReactNative.View,
          {
            style: p,
          },
          React.default.createElement(
            module1618.Svg,
            {
              width: n + R,
              height: n + R,
            },
            React.default.createElement(
              module1618.G,
              {
                rotation: b,
                originX: (n + R) / 2,
                originY: (n + R) / 2,
              },
              f &&
                React.default.createElement(module1618.Path, {
                  d: B,
                  stroke: f,
                  strokeWidth: o || l,
                  strokeLinecap: O,
                  strokeDasharray: z,
                  fill: 'transparent',
                }),
              w > 0 &&
                React.default.createElement(module1618.Path, {
                  d: I,
                  stroke: u,
                  strokeWidth: l,
                  strokeLinecap: j,
                  strokeDasharray: V,
                  fill: 'transparent',
                }),
              _
            )
          ),
          P &&
            React.default.createElement(
              ReactNative.View,
              {
                style: L,
              },
              P(w)
            )
        );
      },
    },
  ]);
  return C;
})(React.default.PureComponent);

exports.default = C;
C.propTypes = {
  style: PropTypes.default.object,
  size: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.instanceOf(ReactNative.Animated.Value)]).isRequired,
  fill: PropTypes.default.number.isRequired,
  width: PropTypes.default.number.isRequired,
  backgroundWidth: PropTypes.default.number,
  tintColor: PropTypes.default.string,
  tintTransparency: PropTypes.default.bool,
  backgroundColor: PropTypes.default.string,
  rotation: PropTypes.default.number,
  lineCap: PropTypes.default.string,
  arcSweepAngle: PropTypes.default.number,
  children: PropTypes.default.func,
  childrenContainerStyle: PropTypes.default.object,
  padding: PropTypes.default.number,
  renderCap: PropTypes.default.func,
  dashedBackground: PropTypes.default.object,
  dashedTint: PropTypes.default.object,
};
C.defaultProps = {
  tintColor: 'black',
  tintTransparency: true,
  rotation: 90,
  lineCap: 'butt',
  arcSweepAngle: 360,
  padding: 0,
  dashedBackground: {
    width: 0,
    gap: 0,
  },
  dashedTint: {
    width: 0,
    gap: 0,
  },
};
