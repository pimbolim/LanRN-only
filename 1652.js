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
  module35.default(b, t);

  var module1620 = b,
    R = v(),
    _ = function () {
      var t,
        n = module34.default(module1620);

      if (R) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return _.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.id,
          f = t.children;
        return React.default.createElement(
          module1635.RNSVGSymbol,
          module11.default(
            {
              ref: this.refMethod,
              name: u,
            },
            module1644.default(t)
          ),
          f
        );
      },
    },
  ]);
  return b;
})(module1620.default);

exports.default = R;
R.displayName = 'Symbol';
