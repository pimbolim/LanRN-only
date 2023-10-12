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

var x = (function (t) {
  module35.default(_, t);

  var module1620 = _,
    x = v(),
    R = function () {
      var t,
        u = module34.default(module1620);

      if (x) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function _() {
    module24.default(this, _);
    return R.apply(this, arguments);
  }

  module25.default(_, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.cx,
          f = t.cy,
          c = t.rx,
          l = t.ry;
        return React.default.createElement(
          module1635.RNSVGEllipse,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.extract(this, t),
            {
              cx: n,
              cy: f,
              rx: c,
              ry: l,
            }
          )
        );
      },
    },
  ]);
  return _;
})(module1620.default);

exports.default = x;
x.displayName = 'Ellipse';
x.defaultProps = {
  cx: 0,
  cy: 0,
  rx: 0,
  ry: 0,
};
