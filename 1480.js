var module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1478 = require('./1478'),
  module1479 = require('./1479'),
  module1404 = require('./1404'),
  c = (function () {
    function t(o) {
      module24.default(this, t);
      this._notifications = o;
    }

    module25.default(t, [
      {
        key: 'createChannel',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if (!(t instanceof module1478.default)) throw new Error("AndroidNotifications:createChannel expects an 'AndroidChannel' but got type " + typeof t);
            return module1404.getNativeModule(this._notifications).createChannel(t.build());
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannelGroup',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if (!(t instanceof module1479.default)) throw new Error("AndroidNotifications:createChannelGroup expects an 'AndroidChannelGroup' but got type " + typeof t);
            return module1404.getNativeModule(this._notifications).createChannelGroup(t.build());
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannelGroups',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if (!Array.isArray(t)) throw new Error("AndroidNotifications:createChannelGroups expects an 'Array' but got type " + typeof t);

            for (var n = [], o = 0; o < t.length; o++) {
              var l = t[o];
              if (!(l instanceof module1479.default))
                throw new Error("AndroidNotifications:createChannelGroups expects array items of type 'AndroidChannelGroup' but got type " + typeof l);
              n.push(l.build());
            }

            return module1404.getNativeModule(this._notifications).createChannelGroups(n);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannels',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if (!Array.isArray(t)) throw new Error("AndroidNotifications:createChannels expects an 'Array' but got type " + typeof t);

            for (var n = [], o = 0; o < t.length; o++) {
              var f = t[o];
              if (!(f instanceof module1478.default)) throw new Error("AndroidNotifications:createChannels expects array items of type 'AndroidChannel' but got type " + typeof f);
              n.push(f.build());
            }

            return module1404.getNativeModule(this._notifications).createChannels(n);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'removeDeliveredNotificationsByTag',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:removeDeliveredNotificationsByTag expects an 'string' but got type " + typeof t);
            return module1404.getNativeModule(this._notifications).removeDeliveredNotificationsByTag(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'deleteChannelGroup',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:deleteChannelGroup expects an 'string' but got type " + typeof t);
            return module1404.getNativeModule(this._notifications).deleteChannelGroup(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'deleteChannel',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:deleteChannel expects an 'string' but got type " + typeof t);
            return module1404.getNativeModule(this._notifications).deleteChannel(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'getChannel',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:getChannel expects an 'string' but got type " + typeof t);
            return Promise.resolve(module1404.getNativeModule(this._notifications).getChannel(t));
          }

          return Promise.resolve(null);
        },
      },
      {
        key: 'getChannels',
        value: function () {
          return 'android' === ReactNative.Platform.OS ? Promise.resolve(module1404.getNativeModule(this._notifications).getChannels()) : Promise.resolve([]);
        },
      },
      {
        key: 'getChannelGroup',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:getChannel expects an 'string' but got type " + typeof t);
            return Promise.resolve(module1404.getNativeModule(this._notifications).getChannelGroup(t));
          }

          return Promise.resolve(null);
        },
      },
      {
        key: 'getChannelGroups',
        value: function () {
          return 'android' === ReactNative.Platform.OS ? Promise.resolve(module1404.getNativeModule(this._notifications).getChannelGroups()) : Promise.resolve([]);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
