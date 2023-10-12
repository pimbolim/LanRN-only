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
  module35.default(_, t);

  var module1620 = _,
    R = v(),
    x = function () {
      var t,
        u = module34.default(module1620);

      if (R) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, c);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function _() {
    module24.default(this, _);
    return x.apply(this, arguments);
  }

  module25.default(_, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          c = t.cx,
          n = t.cy,
          f = t.r;
        return React.default.createElement(
          module1635.RNSVGCircle,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.extract(this, t),
            {
              cx: c,
              cy: n,
              r: f,
            }
          )
        );
      },
    },
  ]);
  return _;
})(module1620.default);

exports.default = R;
R.displayName = 'Circle';
R.defaultProps = {
  cx: 0,
  cy: 0,
  r: 0,
};
