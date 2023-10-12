var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1639 = require('./1639'),
  module1620 = require('./1620'),
  module1640 = require('./1640');

function h() {
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

var P = (function (t, ...args) {
  module35.default(M, t);

  var module1620 = M,
    P = h(),
    R = function () {
      var t,
        n = module34.default(module1620);

      if (P) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M() {
    var t;
    module24.default(this, M);

    (t = R.call(this, ...args)).setNativeProps = function (n) {
      var o = n.points;
      if (o) n.d = 'M' + module1640.default(o) + 'z';
      if (t.root) t.root.setNativeProps(n);
    };

    return t;
  }

  module25.default(M, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.points;
        return React.default.createElement(
          module1639.default,
          module11.default(
            {
              ref: this.refMethod,
              d: o && 'M' + module1640.default(o) + 'z',
            },
            t
          )
        );
      },
    },
  ]);
  return M;
})(module1620.default);

exports.default = P;
P.displayName = 'Polygon';
P.defaultProps = {
  points: '',
};
