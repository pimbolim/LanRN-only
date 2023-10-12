exports.__esModule = true;
exports.createDispatchHook = c;

var module403 = require('./403'),
  module426 = require('./426');

function c(c) {
  if (undefined === c) c = module403.ReactReduxContext;
  var u = c === module403.ReactReduxContext ? module426.useStore : module426.createStoreHook(c);
  return function () {
    return u().dispatch;
  };
}

var u = c();
exports.useDispatch = u;
