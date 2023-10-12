var module414 = require('./414').compose;

exports.__esModule = true;
exports.composeWithDevTools =
  'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (0 !== arguments.length) return 'object' == typeof arguments[0] ? module414 : module414.apply(null, arguments);
      };
exports.devToolsEnhancer =
  'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (_) {
          return _;
        };
      };
