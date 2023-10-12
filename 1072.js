var module20 = require('./20'),
  module977 = require('./977'),
  module1067 = require('./1067'),
  t = ['minDurationMs', 'maxDist'];

exports.longPressGestureHandlerProps = t;
exports.longPressHandlerName = 'LongPressGestureHandler';
var u = module977.default({
  name: 'LongPressGestureHandler',
  allowedProps: [].concat(module20.default(module1067.baseGestureHandlerProps), t),
  config: {},
});
exports.LongPressGestureHandler = u;
