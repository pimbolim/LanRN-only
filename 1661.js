var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1630 = require('./1630'),
  module1623 = require('./1623'),
  module1656 = require('./1656'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function R() {
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
  module35.default(M, t);

  var module1620 = M,
    w = R(),
    x = function () {
      var t,
        n = module34.default(module1620);

      if (w) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M() {
    module24.default(this, M);
    return x.apply(this, arguments);
  }

  module25.default(M, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.maskTransform,
          f = t.transform,
          o = t.x,
          l = t.y,
          s = t.width,
          y = t.height,
          R = t.maskUnits,
          w = t.maskContentUnits,
          x = t.children;
        return React.default.createElement(
          module1635.RNSVGMask,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.withoutXY(this, t),
            {
              x: o,
              y: l,
              width: s,
              height: y,
              maskTransform: module1630.default(u || f || t),
              maskUnits: undefined !== R ? module1656.default[R] : 0,
              maskContentUnits: undefined !== w ? module1656.default[w] : 1,
            }
          ),
          x
        );
      },
    },
  ]);
  return M;
})(module1620.default);

exports.default = w;
w.displayName = 'Mask';
w.defaultProps = {
  x: '0%',
  y: '0%',
  width: '100%',
  height: '100%',
};
