var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module967 = require('./967'),
  module1071 = require('./1071'),
  module977 = require('./977'),
  module1067 = require('./1067');

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (o) {
    return false;
  }
}

var b = ['minForce', 'maxForce', 'feedbackOnActivation'];
exports.forceTouchGestureHandlerProps = b;

var H = (function (o) {
  module35.default(p, o);

  var module20 = p,
    React = y(),
    v = function () {
      var o,
        c = module34.default(module20);

      if (React) {
        var u = module34.default(this).constructor;
        o = Reflect.construct(c, arguments, u);
      } else o = c.apply(this, arguments);

      return module37.default(this, o);
    };

  function p() {
    module24.default(this, p);
    return v.apply(this, arguments);
  }

  module25.default(p, [
    {
      key: 'componentDidMount',
      value: function () {
        console.warn(
          module967.tagMessage(
            'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase'
          )
        );
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children;
      },
    },
  ]);
  return p;
})(React.default.Component);

H.forceTouchAvailable = false;
exports.forceTouchHandlerName = 'ForceTouchGestureHandler';
var G =
  null != module1071.default && module1071.default.forceTouchAvailable
    ? module977.default({
        name: 'ForceTouchGestureHandler',
        allowedProps: [].concat(module20.default(module1067.baseGestureHandlerProps), b),
        config: {},
      })
    : H;
exports.ForceTouchGestureHandler = G;
G.forceTouchAvailable = (null == module1071.default ? undefined : module1071.default.forceTouchAvailable) || false;
