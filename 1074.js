var module977 = require('./977'),
  module1067 = require('./1067');

exports.pinchHandlerName = 'PinchGestureHandler';
var s = module977.default({
  name: 'PinchGestureHandler',
  allowedProps: module1067.baseGestureHandlerProps,
  config: {},
});
exports.PinchGestureHandler = s;
