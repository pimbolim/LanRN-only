var regeneratorRuntime = require('regenerator-runtime'),
  ReactNative = require('react-native'),
  s = ReactNative.NativeModules.RNFusedLocation,
  u = new ReactNative.NativeEventEmitter(s),
  l = function () {},
  c = [],
  v = false,
  f = {
    setRNConfiguration: function (t) {},
    requestAuthorization: function (t) {
      return regeneratorRuntime.default.async(
        function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                if ('ios' === ReactNative.Platform.OS) {
                  o.next = 2;
                  break;
                }

                return o.abrupt('return', Promise.reject('requestAuthorization is only for iOS'));

              case 2:
                if (!t) console.error('authorizationLevel must be provided');
                return o.abrupt('return', s.requestAuthorization(t));

              case 4:
              case 'end':
                return o.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    getCurrentPosition: function (t) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : l,
        n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      if (!t) console.error('Must provide a success callback');
      s.getCurrentPosition(n, t, o);
    },
    watchPosition: function (t) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      if (!t) console.error('Must provide a success callback');

      if (!v) {
        s.startObserving(n);
        v = true;
      }

      var l = c.length;
      c.push([u.addListener('geolocationDidChange', t), o ? u.addListener('geolocationError', o) : null]);
      return l;
    },
    clearWatch: function (t) {
      var o = c[t];

      if (o) {
        o[0].remove();
        var n = o[1];
        if (n) n.remove();
        c[t] = undefined;

        for (var s = true, u = 0; u < c.length; u += 1) c[u] && (s = false);

        if (s) f.stopObserving();
      }
    },
    stopObserving: function () {
      if (v) {
        s.stopObserving();
        v = false;

        for (var t = 0; t < c.length; t += 1) {
          var o = c[t];

          if (o) {
            console.warn('Called stopObserving with existing subscriptions.');
            o[0].remove();
            var n = o[1];
            if (n) n.remove();
          }
        }

        c = [];
      }
    },
  },
  h = f;

exports.default = h;
