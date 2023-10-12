var module11 = require('./11'),
  module20 = require('./20'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1633 = require('./1633'),
  module1644 = require('./1644'),
  module1626 = require('./1626'),
  module1620 = require('./1620'),
  module1645 = require('./1645'),
  module1635 = require('./1635'),
  P = ['style', 'opacity', 'viewBox', 'children', 'onLayout', 'preserveAspectRatio'];

function L(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function D(t) {
  for (var o = 1; o < arguments.length; o++) {
    var n = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      L(Object(n), true).forEach(function (o) {
        module47.default(t, o, n[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      L(Object(n)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
      });
  }

  return t;
}

function S() {
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

var M = ReactNative.NativeModules.RNSVGSvgViewManager,
  A = ReactNative.StyleSheet.create({
    svg: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  }).svg,
  W = (function (t, ...args) {
    module35.default(W, t);

    var module47 = W,
      module1620 = S(),
      L = function () {
        var t,
          o = module34.default(module47);

        if (module1620) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function W() {
      var t;
      module24.default(this, W);

      (t = L.call(this, ...args)).measureInWindow = function (o) {
        var n = module39.default(t).root;
        if (n) n.measureInWindow(o);
      };

      t.measure = function (o) {
        var n = module39.default(t).root;
        if (n) n.measure(o);
      };

      t.measureLayout = function (o, n, l) {
        var s = module39.default(t).root;
        if (s) s.measureLayout(o, n, l);
      };

      t.setNativeProps = function (o) {
        var n = o.width,
          l = o.height;
        if (n) o.bbWidth = n;
        if (l) o.bbHeight = l;
        var s = module39.default(t).root;
        if (s) s.setNativeProps(o);
      };

      t.toDataURL = function (o, n) {
        if (o) {
          var l = ReactNative.findNodeHandle(t.root);
          M.toDataURL(l, n, o);
        }
      };

      return t;
    }

    module25.default(W, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.style,
            u = t.opacity,
            f = t.viewBox,
            c = t.children,
            p = t.onLayout,
            h = t.preserveAspectRatio,
            v = module53.default(t, P),
            b = D(D({}, Array.isArray(l) ? Object.assign({}, ...module20.default(l)) : l), v),
            w = b.color,
            L = b.width,
            S = b.height,
            M = b.focusable,
            W = b.font,
            x = b.transform,
            B = b.fill,
            E = b.fillOpacity,
            I = b.fillRule,
            _ = b.stroke,
            H = b.strokeWidth,
            V = b.strokeOpacity,
            C = b.strokeDasharray,
            G = b.strokeDashoffset,
            U = b.strokeLinecap,
            Y = b.strokeLinejoin,
            q = b.strokeMiterlimit;
          if (undefined === L && undefined === S) L = S = '100%';
          var z = v;
          z.focusable = Boolean(M) && 'false' !== M;
          var F = [A];
          if (l) F.push(l);
          var J = false,
            K = {},
            Q = null != u ? +u : NaN;

          if ((isNaN(Q) || ((J = true), (K.opacity = Q)), L && S)) {
            J = true;
            var T = parseInt(L, 10),
              X = parseInt(S, 10),
              Z = isNaN(T) || '%' === L[L.length - 1],
              $ = isNaN(X) || '%' === S[S.length - 1];
            K.width = Z ? L : T;
            K.height = $ ? S : X;
            K.flex = 0;
          }

          if (J) F.push(K);
          z.style = F.length > 1 ? F : A;
          if (null != L) z.bbWidth = L;
          if (null != S) z.bbHeight = S;
          module1633.default(z, z, this);
          var ee = module1626.default(w);

          if (null != ee) {
            z.color = ee;
            z.tintColor = ee;
          }

          if (null != p) z.onLayout = p;
          return React.default.createElement(
            module1635.RNSVGSvg,
            module11.default(
              {},
              z,
              {
                ref: this.refMethod,
              },
              module1644.default({
                viewBox: f,
                preserveAspectRatio: h,
              })
            ),
            React.default.createElement(module1645.default, {
              children: c,
              style: l,
              font: W,
              transform: x,
              fill: B,
              fillOpacity: E,
              fillRule: I,
              stroke: _,
              strokeWidth: H,
              strokeOpacity: V,
              strokeDasharray: C,
              strokeDashoffset: G,
              strokeLinecap: U,
              strokeLinejoin: Y,
              strokeMiterlimit: q,
            })
          );
        },
      },
    ]);
    return W;
  })(module1620.default);

exports.default = W;
W.displayName = 'Svg';
W.defaultProps = {
  preserveAspectRatio: 'xMidYMid meet',
};
