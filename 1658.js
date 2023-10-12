var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function l() {
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

var React = (function (t, ...args) {
  module35.default(y, t);

  var React = y,
    s = l(),
    v = function () {
      var t,
        n = module34.default(React);

      if (s) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y() {
    var t;
    module24.default(this, y);

    (t = v.call(this, ...args)).setNativeProps = function () {
      var n = t.props.parent;
      if (n) n.forceUpdate();
    };

    return t;
  }

  module25.default(y, [
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return y;
})(require('react').Component);

exports.default = React;
React.displayName = 'Stop';
