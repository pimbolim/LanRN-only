var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module400 = require('./400'),
  module430 = require('./430'),
  module431 = require('./431'),
  module437 = require('./437'),
  module463 = require('./463');

function P() {
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
  module35.default(B, t);

  var R = B,
    E = P(),
    _ = function () {
      var t,
        n = module34.default(R);

      if (E) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function B() {
    module24.default(this, B);
    return _.apply(this, arguments);
  }

  module25.default(B, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module400.Provider,
          {
            store: module437.Store,
          },
          React.default.createElement(
            module430.PersistGate,
            {
              loading: null,
              persistor: module437.Persistor,
            },
            React.default.createElement(module431.SafeAreaProvider, null, React.default.createElement(module463.default, null))
          )
        );
      },
    },
  ]);
  return B;
})(React.default.Component);

exports.default = R;
