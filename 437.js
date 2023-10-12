var module414 = require('./414'),
  module438 = require('./438'),
  module450 = require('./450'),
  module451 = require('./451'),
  v = (function () {
    var t,
      n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : undefined,
      v = module414.createStore(module451.default, n, module450.devToolsEnhancer({}));
    if (!(null == (t = module.hot)))
      t.accept(module451.default, function () {
        var module451 = require('./451');

        v.replaceReducer(module451);
      });
    return v;
  })();

exports.Store = v;
var l = module438.persistStore(v);
exports.Persistor = l;
