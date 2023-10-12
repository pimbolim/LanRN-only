var module20 = require('./20'),
  module977 = require('./977'),
  module1067 = require('./1067'),
  p = ['maxDurationMs', 'maxDelayMs', 'numberOfTaps', 'maxDeltaX', 'maxDeltaY', 'maxDist', 'minPointers'];

exports.tapGestureHandlerProps = p;
exports.tapHandlerName = 'TapGestureHandler';
var u = module977.default({
  name: 'TapGestureHandler',
  allowedProps: [].concat(module20.default(module1067.baseGestureHandlerProps), p),
  config: {},
});
exports.TapGestureHandler = u;
