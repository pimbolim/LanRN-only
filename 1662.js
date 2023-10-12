var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1644 = require('./1644'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function k() {
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

var y = (function (t) {
  module35.default(B, t);

  var module1620 = B,
    y = k(),
    R = function () {
      var t,
        n = module34.default(module1620);

      if (y) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, f);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function B() {
    module24.default(this, B);
    return R.apply(this, arguments);
  }

  module25.default(B, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          f = t.id,
          u = t.viewBox,
          o = t.preserveAspectRatio,
          l = t.refX,
          c = t.refY,
          p = t.markerUnits,
          k = t.orient,
          y = t.markerWidth,
          R = t.markerHeight,
          B = t.children;
        return React.default.createElement(
          module1635.RNSVGMarker,
          module11.default(
            {
              ref: this.refMethod,
              name: f,
              refX: l,
              refY: c,
              orient: String(k),
              markerUnits: p,
              markerWidth: y,
              markerHeight: R,
            },
            module1644.default({
              viewBox: u,
              preserveAspectRatio: o,
            })
          ),
          B
        );
      },
    },
  ]);
  return B;
})(module1620.default);

exports.default = y;
y.displayName = 'Marker';
y.defaultProps = {
  refX: 0,
  refY: 0,
  orient: '0',
  markerWidth: 3,
  markerHeight: 3,
  markerUnits: 'strokeWidth',
};
