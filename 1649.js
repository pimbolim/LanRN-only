var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1630 = require('./1630'),
  module1623 = require('./1623'),
  module1646 = require('./1646'),
  module1634 = require('./1634'),
  module1620 = require('./1620'),
  module1648 = require('./1648'),
  module1635 = require('./1635'),
  k = ['children', 'xlinkHref', 'href', 'startOffset', 'method', 'spacing', 'side', 'alignmentBaseline', 'midLine'];

function B() {
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

var O = (function (t, ...args) {
  module35.default(w, t);

  var module1620 = w,
    O = B(),
    _ = function () {
      var t,
        n = module34.default(module1620);

      if (O) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, f);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    var t;
    module24.default(this, w);

    (t = _.call(this, ...args)).setNativeProps = function (n) {
      var l = !n.matrix && module1630.default(n);
      if (l) n.matrix = l;
      module11.default(n, module1634.pickNotNil(module1646.default(n, true)));
      if (t.root) t.root.setNativeProps(n);
    };

    return t;
  }

  module25.default(w, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.children,
          o = t.xlinkHref,
          u = t.href,
          c = undefined === u ? o : u,
          s = t.startOffset,
          p = undefined === s ? 0 : s,
          P = t.method,
          B = t.spacing,
          O = t.side,
          _ = t.alignmentBaseline,
          w = t.midLine,
          L = module53.default(t, k),
          M = c && c.match(module1634.idPattern),
          T = M && M[1];

        if (T) {
          var b = module1623.withoutXY(this, L);
          module11.default(
            b,
            module1646.default(
              {
                children: l,
              },
              true
            ),
            {
              href: T,
              startOffset: p,
              method: P,
              spacing: B,
              side: O,
              alignmentBaseline: _,
              midLine: w,
            }
          );
          b.ref = this.refMethod;
          return React.default.createElement(module1635.RNSVGTextPath, b);
        }

        console.warn('Invalid `href` prop for `TextPath` element, expected a href like "#id", but got: "' + c + '"');
        return React.default.createElement(
          module1648.default,
          {
            ref: this.refMethod,
          },
          l
        );
      },
    },
  ]);
  return w;
})(module1620.default);

exports.default = O;
O.displayName = 'TextPath';
