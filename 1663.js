var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1623 = require('./1623'),
  module1645 = require('./1645'),
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
  module35.default(x, t);

  var module1645 = x,
    R = v(),
    w = function () {
      var t,
        n = module34.default(module1645);

      if (R) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function x() {
    module24.default(this, x);
    return w.apply(this, arguments);
  }

  module25.default(x, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.x,
          f = t.y,
          o = t.width,
          c = t.height,
          l = t.children;
        return React.default.createElement(
          module1635.RNSVGForeignObject,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.withoutXY(this, t),
            {
              x: u,
              y: f,
              width: o,
              height: c,
            }
          ),
          l
        );
      },
    },
  ]);
  return x;
})(module1645.default);

exports.default = R;
R.displayName = 'ForeignObject';
R.defaultProps = {
  x: '0%',
  y: '0%',
  width: '100%',
  height: '100%',
};
