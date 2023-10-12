var t,
  module171 = require('./171');

t = require('react-dom');
if (globals.RN$Bridgeless) globals.RN$stopSurface = t.stopSurface;
else module171.BatchedBridge.registerCallableModule('ReactFabric', t);
module.exports = t;
