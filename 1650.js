var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1623 = require('./1623'),
  module1634 = require('./1634'),
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

var R = (function (t) {
  module35.default(P, t);

  var module1620 = P,
    R = x(),
    w = function () {
      var t,
        n = module34.default(module1620);

      if (R) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, f);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return w.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          f = t.children,
          u = t.x,
          l = t.y,
          o = t.width,
          c = t.height,
          v = t.xlinkHref,
          x = t.href,
          R = undefined === x ? v : x,
          w = R && R.match(module1634.idPattern),
          P = w && w[1];
        if (!P) console.warn('Invalid `href` prop for `Use` element, expected a href like "#id", but got: "' + R + '"');
        return React.default.createElement(
          module1635.RNSVGUse,
          module11.default(
            {
              ref: this.refMethod,
            },
            module1623.withoutXY(this, t),
            {
              href: P,
              x: u,
              y: l,
              width: o,
              height: c,
            }
          ),
          f
        );
      },
    },
  ]);
  return P;
})(module1620.default);

exports.default = R;
R.displayName = 'Use';
R.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
