var module176 = require('./176'),
  module44 = require('./44');

var p = function (n, p) {
  var f = p && p.paperComponentName ? p.paperComponentName : n;
  if (null != p && null != p.paperComponentNameDeprecated)
    if (module44.default.getViewManagerConfig(n)) f = n;
    else {
      if (null == p.paperComponentNameDeprecated || !module44.default.getViewManagerConfig(p.paperComponentNameDeprecated))
        throw new Error('Failed to find native component for either ' + n + ' or ' + (p.paperComponentNameDeprecated || '(unknown)'));
      f = p.paperComponentNameDeprecated;
    }
  return module176.default(f);
};

exports.default = p;
