var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1380 = require('./1380'),
  module431 = require('./431');

function y() {
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

require('./1943').CStyles();

var p = (function (t) {
  module35.default(C, t);

  var p = C,
    b = y(),
    B = function () {
      var t,
        n = module34.default(p);

      if (b) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    module24.default(this, C);
    return B.call(this, t);
  }

  module25.default(C, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                zIndex: 1,
              },
            },
            React.default.createElement(module1380.BottomTabBar, t.props),
            React.default.createElement(ReactNative.View, {
              style: {
                width: '100%',
                height: null == n ? undefined : n.bottom,
                backgroundColor: 'white',
              },
            })
          );
        });
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.TabBar = p;
