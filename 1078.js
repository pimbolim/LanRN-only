var module20 = require('./20'),
  module977 = require('./977'),
  module1067 = require('./1067'),
  v = ['shouldActivateOnStart', 'disallowInterruption'];

exports.nativeViewGestureHandlerProps = v;
var o = [].concat(module20.default(module1067.baseGestureHandlerProps), v);
exports.nativeViewProps = o;
exports.nativeViewHandlerName = 'NativeViewGestureHandler';
var u = module977.default({
  name: 'NativeViewGestureHandler',
  allowedProps: o,
  config: {},
});
exports.NativeViewGestureHandler = u;
