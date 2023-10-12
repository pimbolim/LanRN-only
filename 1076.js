var module20 = require('./20'),
  module977 = require('./977'),
  module1067 = require('./1067'),
  o = ['numberOfPointers', 'direction'];

exports.flingGestureHandlerProps = o;
exports.flingHandlerName = 'FlingGestureHandler';
var u = module977.default({
  name: 'FlingGestureHandler',
  allowedProps: [].concat(module20.default(module1067.baseGestureHandlerProps), o),
  config: {},
});
exports.FlingGestureHandler = u;
