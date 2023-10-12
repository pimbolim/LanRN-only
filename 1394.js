var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1395 = require('./1395'),
  l = 'com.lanidor.com',
  f = function (t) {
    var n = t.notificationId,
      s = t._messageId,
      o = t.title,
      f = t.body,
      h = t.data,
      p = new module1395.default.notifications.Notification();
    if (h && 'silent' === h.type) p.setNotificationId(n || s).setSound('disabled');
    else
      p.setNotificationId(n || s)
        .setSound('default')
        .setTitle(o || h.title)
        .setBody(f || h.body)
        .setData(h);
    if ('android' === ReactNative.Platform.OS)
      p.android.setChannelId(l).android.setPriority(module1395.default.notifications.Android.Priority.High).android.setSmallIcon('ic_notification');
    var v = Number(h.badge);
    if (!isNaN(v)) module1395.default.notifications().setBadge(Math.floor(v));
    if (n || 'android' === ReactNative.Platform.OS) module1395.default.notifications().displayNotification(p);
  },
  h = {
    navigate: function () {},
    reset: function () {},
  },
  p = new ((function () {
    function t() {
      var n = this;
      module24.default(this, t);

      this.navigator = function () {
        return null;
      };

      this.description = '';
      this.channelId = '';

      this.listener = function () {
        return null;
      };

      this.displayedListener = function () {
        return null;
      };

      this.openedListener = function () {
        return null;
      };

      this.messageListener = function () {
        return null;
      };

      this.onDisplayed = function (t) {};

      this.onNotification = function (t) {
        f(t);
      };

      this.onOpened = function (t) {
        try {
          t.action;
          var s = t.notification;
          n.onOpenNotification(s);
        } catch (t) {}
      };

      this.description = 'Lanidor Now Channel';
      this.channelId = l;
    }

    module25.default(t, [
      {
        key: 'navigation',
        get: function () {
          return this.navigator() || h;
        },
      },
      {
        key: 'saveNavigator',
        value: function (t) {
          this.navigator = t;
        },
      },
      {
        key: 'requestPermission',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.prev = 0;
                    t.next = 3;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().hasPermission());

                  case 3:
                    if (t.sent) {
                      t.next = 7;
                      break;
                    }

                    t.next = 7;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().requestPermission());

                  case 7:
                    t.next = 9;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().hasPermission());

                  case 9:
                    return t.abrupt('return', t.sent);

                  case 12:
                    t.prev = 12;
                    t.t0 = t.catch(0);
                    return t.abrupt('return', false);

                  case 15:
                  case 'end':
                    return t.stop();
                }
            },
            null,
            null,
            [[0, 12]],
            Promise
          );
        },
      },
      {
        key: 'getToken',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.prev = 0;
                    s.next = 3;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().hasPermission());

                  case 3:
                    if (s.sent) {
                      s.next = 7;
                      break;
                    }

                    s.next = 7;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().requestPermission());

                  case 7:
                    s.next = 9;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().getToken());

                  case 9:
                    t = s.sent;
                    return s.abrupt('return', t);

                  case 13:
                    s.prev = 13;
                    s.t0 = s.catch(0);
                    return s.abrupt('return', null);

                  case 16:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            null,
            [[0, 13]],
            Promise
          );
        },
      },
      {
        key: 'listen',
        value: function () {
          var t;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    this.getToken();
                    s.next = 3;
                    return regeneratorRuntime.default.awrap(this.requestPermission());

                  case 3:
                    if (s.sent) {
                      t = this.createChannel();
                      module1395.default.notifications().android.createChannel(t);
                      this.displayedListener = module1395.default.notifications().onNotificationDisplayed(this.onDisplayed);
                      this.listener = module1395.default.notifications().onNotification(this.onNotification);
                      this.openedListener = module1395.default.notifications().onNotificationOpened(this.onOpened);
                      this.messageListener = module1395.default.messaging().onMessage(this.onMessage);
                      this.getInitialNotification();
                    }

                  case 5:
                  case 'end':
                    return s.stop();
                }
            },
            null,
            this,
            null,
            Promise
          );
        },
      },
      {
        key: 'close',
        value: function () {
          if (this.displayedListener) this.displayedListener();
          if (this.listener) this.listener();
          if (this.openedListener) this.openedListener();
          if (this.messageListener) this.messageListener();

          this.displayedListener = function () {
            return null;
          };

          this.listener = function () {
            return null;
          };

          this.openedListener = function () {
            return null;
          };

          this.messageListener = function () {
            return null;
          };
        },
      },
      {
        key: 'getInitialNotification',
        value: function () {
          var t, s;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.prev = 0;
                    o.next = 3;
                    return regeneratorRuntime.default.awrap(module1395.default.notifications().getInitialNotification());

                  case 3:
                    if ((t = o.sent)) {
                      t.action;
                      s = t.notification;
                      this.onOpenNotification(s);
                    }

                    o.next = 9;
                    break;

                  case 7:
                    o.prev = 7;
                    o.t0 = o.catch(0);

                  case 9:
                  case 'end':
                    return o.stop();
                }
            },
            null,
            this,
            [[0, 7]],
            Promise
          );
        },
      },
      {
        key: 'setBadge',
        value: function (t) {
          if (!isNaN(Number(t))) module1395.default.notifications().setBadge(Math.floor(Number(t)));
        },
      },
      {
        key: 'createChannel',
        value: function () {
          var t = module1395.default.notifications.Android.Importance.Max;
          return new module1395.default.notifications.Android.Channel(this.channelId, this.description, t).setDescription(this.description);
        },
      },
      {
        key: 'logout',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.prev = 0;
                    this.close();
                    module1395.default.notifications().removeAllDeliveredNotifications();
                    module1395.default.notifications().cancelAllNotifications();
                    t.next = 6;
                    return regeneratorRuntime.default.awrap(module1395.default.messaging().deleteToken());

                  case 6:
                    this.navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Home',
                        },
                      ],
                    });
                    t.next = 11;
                    break;

                  case 9:
                    t.prev = 9;
                    t.t0 = t.catch(0);

                  case 11:
                  case 'end':
                    return t.stop();
                }
            },
            null,
            this,
            [[0, 9]],
            Promise
          );
        },
      },
      {
        key: 'onOpenNotification',
        value: function (t) {
          var n = this;
          setImmediate(function () {
            return n.navigation.navigate('Notifications');
          });
        },
      },
    ]);
    return t;
  })())();

exports.default = p;

exports.BgNotification = function (t) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            f(t);
            return n.abrupt('return', Promise.resolve());

          case 2:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};
