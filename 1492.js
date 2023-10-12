var module1436 = require('./1436'),
  u = {
    cleanup: function () {
      module1436.default.removeListenersForRegistrations(Object.keys(module1436.default._reverseLookup));
    },
  };

exports.default = u;
