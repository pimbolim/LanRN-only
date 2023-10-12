exports.__esModule = true;
exports.createStoreHook = n;

var React = require('react'),
  module403 = require('./403'),
  module427 = require('./427');

function n(n) {
  if (undefined === n) n = module403.ReactReduxContext;
  var c =
    n === module403.ReactReduxContext
      ? module427.useReduxContext
      : function () {
          return React.useContext(n);
        };
  return function () {
    return c().store;
  };
}

var c = n();
exports.useStore = c;
