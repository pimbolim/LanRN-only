var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1623 = require('./1623'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function v() {
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

var R = (function (t) {
  module35.default(w, t);

  var module1620 = w,
    R = v(),
    x = function () {
      var t,
        u = module34.default(module1620);

      if (R) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return x.apply(this, arguments);
  }

  module25.default(w, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.x,
          f = t.y,
          c = t.width,
          l = t.height,
          o = t.rx,
          y = t.ry;
        return React.default.createElement(
          module1635.RNSVGRect,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.withoutXY(this, t),
            {
              x: n,
              y: f,
              width: c,
              height: l,
              rx: o,
              ry: y,
            }
          )
        );
      },
    },
  ]);
  return w;
})(module1620.default);

exports.default = R;
R.displayName = 'Rect';
R.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
