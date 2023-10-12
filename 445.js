exports.__esModule = true;

exports.default = function (n, o) {
  n.stateReconciler = undefined === n.stateReconciler ? module446.default : n.stateReconciler;
  return module439.default(n, module414.combineReducers(o));
};

var module414 = require('./414'),
  module439 = require('./439'),
  module446 = require('./446');
