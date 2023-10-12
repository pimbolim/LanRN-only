var regeneratorRuntime = require('regenerator-runtime'),
  module1879 = require('./1879'),
  module3 = require('./3'),
  module1880 = require('./1880'),
  u = [],
  l = false,
  v = {
    setRNConfiguration: function (o) {
      if (module1879.RNCGeolocation.setConfiguration) module1879.RNCGeolocation.setConfiguration(o);
    },
    requestAuthorization: function () {
      module1879.RNCGeolocation.requestAuthorization();
    },
    getCurrentPosition: function (o, u, l) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                module3.default('function' == typeof o, 'Must provide a valid geo_success callback.');
                module1879.RNCGeolocation.getCurrentPosition(l || {}, o, u || module1880.logError);

              case 2:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    watchPosition: function (o, t, s) {
      if (!l) {
        module1879.RNCGeolocation.startObserving(s || {});
        l = true;
      }

      var c = u.length;
      u.push([module1879.GeolocationEventEmitter.addListener('geolocationDidChange', o), t ? module1879.GeolocationEventEmitter.addListener('geolocationError', t) : null]);
      return c;
    },
    clearWatch: function (o) {
      var t = u[o];

      if (t) {
        t[0].remove();
        var n = t[1];
        if (n) n.remove();
        u[o] = undefined;

        for (var s = true, c = 0; c < u.length; c++) u[c] && (s = false);

        if (s) v.stopObserving();
      }
    },
    stopObserving: function () {
      if (l) {
        module1879.RNCGeolocation.stopObserving();
        l = false;

        for (var o = 0; o < u.length; o++) {
          var t = u[o];

          if (t) {
            module1880.warning(false, 'Called stopObserving with existing subscriptions.');
            t[0].remove();
            var s = t[1];
            if (s) s.remove();
          }
        }

        u = [];
      }
    },
  };

module.exports = v;
