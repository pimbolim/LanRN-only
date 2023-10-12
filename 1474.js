var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1399 = require('./1399'),
  module1403 = require('./1403'),
  module1405 = require('./1405'),
  module1404 = require('./1404'),
  module1401 = require('./1401'),
  module1475 = require('./1475'),
  module1478 = require('./1478'),
  module1479 = require('./1479'),
  module1480 = require('./1480'),
  module1481 = require('./1481'),
  module1476 = require('./1476'),
  module1482 = require('./1482'),
  module1477 = require('./1477');

function D() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var k = ['notifications_notification_displayed', 'notifications_notification_opened', 'notifications_notification_received'],
  O = 'RNFirebaseNotifications';
exports.MODULE_NAME = O;
var j = 'notifications';
exports.NAMESPACE = j;

var x = (function (t) {
  module35.default(S, t);

  var module1405 = S,
    module1475 = D(),
    _ = function () {
      var t,
        n = module34.default(module1405);

      if (module1475) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function S(t) {
    var o;
    module24.default(this, S);
    (o = _.call(this, t, {
      events: k,
      hasCustomUrlSupport: false,
      moduleName: O,
      hasMultiAppSupport: false,
      namespace: j,
    }))._android = new module1480.default(module39.default(o));
    o._ios = new module1481.default(module39.default(o));
    module1399.SharedEventEmitter.addListener('notifications_notification_displayed', function (t) {
      module1399.SharedEventEmitter.emit('onNotificationDisplayed', new module1482.default(t, module39.default(o)));
    });
    module1399.SharedEventEmitter.addListener('notifications_notification_opened', function (t) {
      module1399.SharedEventEmitter.emit('onNotificationOpened', {
        action: t.action,
        notification: new module1482.default(t.notification, module39.default(o)),
        results: t.results,
      });
    });
    module1399.SharedEventEmitter.addListener('notifications_notification_received', function (t) {
      module1399.SharedEventEmitter.emit('onNotification', new module1482.default(t, module39.default(o)));
    });
    if ('ios' === ReactNative.Platform.OS) module1404.getNativeModule(module39.default(o)).jsInitialised();
    return o;
  }

  module25.default(S, [
    {
      key: 'android',
      get: function () {
        return this._android;
      },
    },
    {
      key: 'ios',
      get: function () {
        return this._ios;
      },
    },
    {
      key: 'cancelAllNotifications',
      value: function () {
        return module1404.getNativeModule(this).cancelAllNotifications();
      },
    },
    {
      key: 'cancelNotification',
      value: function (t) {
        return t ? module1404.getNativeModule(this).cancelNotification(t) : Promise.reject(new Error('Notifications: cancelNotification expects a `notificationId`'));
      },
    },
    {
      key: 'displayNotification',
      value: function (t) {
        if (!(t instanceof module1482.default)) return Promise.reject(new Error("Notifications:displayNotification expects a 'Notification' but got type " + typeof t));

        try {
          return module1404.getNativeModule(this).displayNotification(t.build());
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'getBadge',
      value: function () {
        return module1404.getNativeModule(this).getBadge();
      },
    },
    {
      key: 'getInitialNotification',
      value: function () {
        var t = this;
        return module1404
          .getNativeModule(this)
          .getInitialNotification()
          .then(function (n) {
            return n
              ? {
                  action: n.action,
                  notification: new module1482.default(n.notification, t),
                  results: n.results,
                }
              : null;
          });
      },
    },
    {
      key: 'getScheduledNotifications',
      value: function () {
        return module1404.getNativeModule(this).getScheduledNotifications();
      },
    },
    {
      key: 'onNotification',
      value: function (t) {
        var n,
          o = this;
        if (module1401.isFunction(t)) n = t;
        else {
          if (!module1401.isObject(t) || !module1401.isFunction(t.next))
            throw new Error('Notifications.onNotification failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module1403.getLogger(this).info('Creating onNotification listener');
        module1399.SharedEventEmitter.addListener('onNotification', n);
        return function () {
          module1403.getLogger(o).info('Removing onNotification listener');
          module1399.SharedEventEmitter.removeListener('onNotification', n);
        };
      },
    },
    {
      key: 'onNotificationDisplayed',
      value: function (t) {
        var n,
          o = this;
        if (module1401.isFunction(t)) n = t;
        else {
          if (!module1401.isObject(t) || !module1401.isFunction(t.next))
            throw new Error('Notifications.onNotificationDisplayed failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module1403.getLogger(this).info('Creating onNotificationDisplayed listener');
        module1399.SharedEventEmitter.addListener('onNotificationDisplayed', n);
        return function () {
          module1403.getLogger(o).info('Removing onNotificationDisplayed listener');
          module1399.SharedEventEmitter.removeListener('onNotificationDisplayed', n);
        };
      },
    },
    {
      key: 'onNotificationOpened',
      value: function (t) {
        var n,
          o = this;
        if (module1401.isFunction(t)) n = t;
        else {
          if (!module1401.isObject(t) || !module1401.isFunction(t.next))
            throw new Error('Notifications.onNotificationOpened failed: First argument must be a function or observer object with a `next` function.');
          n = t.next;
        }
        module1403.getLogger(this).info('Creating onNotificationOpened listener');
        module1399.SharedEventEmitter.addListener('onNotificationOpened', n);
        return function () {
          module1403.getLogger(o).info('Removing onNotificationOpened listener');
          module1399.SharedEventEmitter.removeListener('onNotificationOpened', n);
        };
      },
    },
    {
      key: 'removeAllDeliveredNotifications',
      value: function () {
        return module1404.getNativeModule(this).removeAllDeliveredNotifications();
      },
    },
    {
      key: 'removeDeliveredNotification',
      value: function (t) {
        return t
          ? module1404.getNativeModule(this).removeDeliveredNotification(t)
          : Promise.reject(new Error('Notifications: removeDeliveredNotification expects a `notificationId`'));
      },
    },
    {
      key: 'scheduleNotification',
      value: function (t, n) {
        if (!(t instanceof module1482.default)) return Promise.reject(new Error("Notifications:scheduleNotification expects a 'Notification' but got type " + typeof t));

        try {
          var o = t.build();
          o.schedule = n;
          return module1404.getNativeModule(this).scheduleNotification(o);
        } catch (t) {
          return Promise.reject(t);
        }
      },
    },
    {
      key: 'setBadge',
      value: function (t) {
        return module1404.getNativeModule(this).setBadge(t);
      },
    },
  ]);
  return S;
})(module1405.default);

exports.default = x;
var P = {
  Android: {
    Action: module1475.default,
    BadgeIconType: module1477.BadgeIconType,
    Category: module1477.Category,
    Channel: module1478.default,
    ChannelGroup: module1479.default,
    Defaults: module1477.Defaults,
    GroupAlert: module1477.GroupAlert,
    Importance: module1477.Importance,
    Priority: module1477.Priority,
    RemoteInput: module1476.default,
    SemanticAction: module1477.SemanticAction,
    Visibility: module1477.Visibility,
  },
  Notification: module1482.default,
};
exports.statics = P;
