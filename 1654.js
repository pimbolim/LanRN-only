var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1655 = require('./1655'),
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
        n = module34.default(module1620);

      if (x) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

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
          u = t.x1,
          f = t.y1,
          l = t.x2,
          o = t.y2;
        return React.default.createElement(
          module1635.RNSVGLinearGradient,
          module11.default(
            {
              ref: this.refMethod,
              x1: u,
              y1: f,
              x2: l,
              y2: o,
            },
            module1655.default(t, this)
          )
        );
      },
    },
  ]);
  return _;
})(module1620.default);

exports.default = x;
x.displayName = 'LinearGradient';
x.defaultProps = {
  x1: '0%',
  y1: '0%',
  x2: '100%',
  y2: '0%',
};
