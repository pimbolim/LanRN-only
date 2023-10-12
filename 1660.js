var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1630 = require('./1630'),
  module1644 = require('./1644'),
  module1656 = require('./1656'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function x() {
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
  module35.default(B, t);

  var module1620 = B,
    w = x(),
    P = function () {
      var t,
        n = module34.default(module1620);

      if (w) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, f);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function B() {
    module24.default(this, B);
    return P.apply(this, arguments);
  }

  module25.default(B, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          f = t.patternTransform,
          u = t.transform,
          o = t.id,
          l = t.x,
          c = t.y,
          y = t.width,
          x = t.height,
          w = t.patternUnits,
          P = t.patternContentUnits,
          B = t.children,
          U = t.viewBox,
          _ = t.preserveAspectRatio,
          A = module1630.default(f || u || t);
        return React.default.createElement(
          module1635.RNSVGPattern,
          module11.default(
            {
              ref: this.refMethod,
              name: o,
              x: l,
              y: c,
              width: y,
              height: x,
              matrix: A,
              patternTransform: A,
              patternUnits: (w && module1656.default[w]) || 0,
              patternContentUnits: P ? module1656.default[P] : 1,
            },
            module1644.default({
              viewBox: U,
              preserveAspectRatio: _,
            })
          ),
          B
        );
      },
    },
  ]);
  return B;
})(module1620.default);

exports.default = w;
w.displayName = 'Pattern';
w.defaultProps = {
  x: '0%',
  y: '0%',
  width: '100%',
  height: '100%',
};
