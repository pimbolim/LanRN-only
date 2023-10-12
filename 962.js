exports.initialize = function () {
  module963.startListening();
};

exports.maybeInitializeFabric = function () {
  if (module967.isFabric() && !u) {
    module971.default.install();
    u = true;
  }
};

var module963 = require('./963'),
  module971 = require('./971'),
  module967 = require('./967'),
  u = false;
