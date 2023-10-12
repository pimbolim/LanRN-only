Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () {
    return module1873.default;
  },
});
Object.defineProperty(exports, 'Overlay', {
  enumerable: true,
  get: function () {
    return module1871.default;
  },
});
Object.defineProperty(exports, 'Sheet', {
  enumerable: true,
  get: function () {
    return module1872.default;
  },
});

var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module1871 = require('./1871'),
  module1872 = require('./1872'),
  module1873 = require('./1873'),
  A = ['style', 'overlayStyle'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

function I() {
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

var M = parseInt(ReactNative.Platform.Version, 10) < 19,
  O = ReactNative.StyleSheet.create({
    actionSheetContainer: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 0,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
      overflow: 'hidden',
      backgroundColor: 'white',
      paddingBottom: 5,
      paddingTop: 5,
    },
  }),
  P = {
    flex: 1,
  },
  _ = (function (t) {
    module35.default(M, t);

    var regeneratorRuntime = M,
      module1873 = I(),
      v = function () {
        var t,
          o = module34.default(regeneratorRuntime);

        if (module1873) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, u);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function M() {
      module24.default(this, M);
      return v.apply(this, arguments);
    }

    module25.default(M, [
      {
        key: 'componentDidMount',
        value: function () {
          this.backButtonHandler = this.backButtonHandler.bind(this);
          ReactNative.BackHandler.addEventListener('backPress', this.backButtonHandler);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          ReactNative.BackHandler.removeEventListener('backPress', this.backButtonHandler);
        },
      },
      {
        key: 'backButtonHandler',
        value: function () {
          return !!this.props.visible && (this.props.onCancel(), true);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.style,
            s = undefined === n ? {} : n,
            l = t.overlayStyle,
            c = undefined === l ? {} : l,
            f = module53.default(t, A);
          return (
            <module1871.default>
              <ReactNative.View style={[O.actionSheetContainer, c]}>
                <ReactNative.TouchableOpacity style={P} onPress={this.props.onCancel} />
                <module1872.default visible={this.props.visible}>
                  <ReactNative.View style={[O.buttonContainer, s]}>{this.props.children}</ReactNative.View>
                </module1872.default>
              </ReactNative.View>
            </module1871.default>
          );
        },
      },
    ]);
    return M;
  })(React.Component);

exports.ShareSheet = _;

var b = function (t) {
    var module11, u;
    return regeneratorRuntime.default.async(
      function (s) {
        for (;;)
          switch ((s.prev = s.next)) {
            case 0:
              if ((!t.url && !t.urls) || 'android' !== ReactNative.Platform.OS) {
                s.next = 26;
                break;
              }

              module11 = t.urls || (t.url ? [t.url] : []);
              s.prev = 2;
              s.next = 5;
              return regeneratorRuntime.default.awrap(
                Promise.all(
                  module11.map(function (t) {
                    return new Promise(function (n, o) {
                      ReactNative.NativeModules.RNShare.isBase64File(
                        t,
                        function (t) {
                          o(t);
                        },
                        function (t) {
                          n(t);
                        }
                      );
                    });
                  })
                )
              );

            case 5:
              if (((u = s.sent), u.includes(true))) {
                s.next = 9;
                break;
              }

              return s.abrupt('return', Promise.resolve(true));

            case 9:
              s.next = 11;
              return regeneratorRuntime.default.awrap(ReactNative.PermissionsAndroid.check(ReactNative.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE));

            case 11:
              if (!s.sent) {
                s.next = 14;
                break;
              }

              return s.abrupt('return', Promise.resolve(true));

            case 14:
              if (!M) {
                s.next = 21;
                break;
              }

              s.next = 17;
              return regeneratorRuntime.default.awrap(ReactNative.PermissionsAndroid.request(ReactNative.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE));

            case 17:
              if (s.sent !== ReactNative.PermissionsAndroid.RESULTS.GRANTED) {
                s.next = 20;
                break;
              }

              return s.abrupt('return', Promise.resolve());

            case 20:
              throw new Error('Write Permission not available');

            case 21:
              s.next = 26;
              break;

            case 23:
              s.prev = 23;
              s.t0 = s.catch(2);
              return s.abrupt('return', Promise.reject(s.t0));

            case 26:
              return s.abrupt('return', Promise.resolve(true));

            case 27:
            case 'end':
              return s.stop();
          }
      },
      null,
      null,
      [[2, 23]],
      Promise
    );
  },
  k = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'open',
        value: function (t) {
          return new Promise(function (n, o) {
            b(t)
              .then(function () {
                if ('ios' === ReactNative.Platform.OS && t.url && !t.urls) {
                  var u = t.url;
                  delete t.url;
                  t.urls = [u];

                  if (t.filename && !t.filenames) {
                    t.filenames = [t.filename];
                    delete t.filename;
                  }
                }

                ReactNative.NativeModules.RNShare.open(
                  t,
                  function (t) {
                    return o({
                      error: t,
                    });
                  },
                  function (u, s) {
                    return u
                      ? n({
                          app: s,
                          message: s,
                        })
                      : false === t.failOnCancel
                      ? n({
                          dismissedAction: true,
                        })
                      : void o(new Error('User did not share'));
                  }
                );
              })
              .catch(function (t) {
                return o(t);
              });
          });
        },
      },
      {
        key: 'shareSingle',
        value: function (t) {
          if ('ios' === ReactNative.Platform.OS || 'android' === ReactNative.Platform.OS)
            return new Promise(function (n, o) {
              b(t)
                .then(function () {
                  ReactNative.NativeModules.RNShare.shareSingle(
                    t,
                    function (t) {
                      return o({
                        error: t,
                      });
                    },
                    function (t, o) {
                      return n({
                        message: t,
                        app: o,
                      });
                    }
                  );
                })
                .catch(function (t) {
                  return o(t);
                });
            });
          throw new Error('Not implemented');
        },
      },
      {
        key: 'isPackageInstalled',
        value: function (t) {
          if ('android' === ReactNative.Platform.OS)
            return new Promise(function (n, o) {
              ReactNative.NativeModules.RNShare.isPackageInstalled(
                t,
                function (t) {
                  return o({
                    error: t,
                  });
                },
                function (t) {
                  return n({
                    isInstalled: t,
                    message: 'Package is Installed',
                  });
                }
              );
            });
          throw new Error('Not implemented');
        },
      },
    ]);
    return t;
  })();

k.Social = {
  FACEBOOK: ReactNative.NativeModules.RNShare.FACEBOOK || 'facebook',
  FACEBOOK_STORIES: ReactNative.NativeModules.RNShare.FACEBOOK_STORIES || 'facebookstories',
  PAGESMANAGER: ReactNative.NativeModules.RNShare.PAGESMANAGER || 'pagesmanager',
  TWITTER: ReactNative.NativeModules.RNShare.TWITTER || 'twitter',
  WHATSAPP: ReactNative.NativeModules.RNShare.WHATSAPP || 'whatsapp',
  INSTAGRAM: ReactNative.NativeModules.RNShare.INSTAGRAM || 'instagram',
  INSTAGRAM_STORIES: ReactNative.NativeModules.RNShare.INSTAGRAM_STORIES || 'instagramstories',
  GOOGLEPLUS: ReactNative.NativeModules.RNShare.GOOGLEPLUS || 'googleplus',
  EMAIL: ReactNative.NativeModules.RNShare.EMAIL || 'email',
  PINTEREST: ReactNative.NativeModules.RNShare.PINTEREST || 'pinterest',
  LINKEDIN: ReactNative.NativeModules.RNShare.LINKEDIN || 'linkedin',
  SMS: ReactNative.NativeModules.RNShare.SMS || 'sms',
};
k.InstagramStories = {
  SHARE_BACKGROUND_IMAGE: ReactNative.NativeModules.RNShare.SHARE_BACKGROUND_IMAGE || 'shareBackgroundImage',
  SHARE_BACKGROUND_VIDEO: ReactNative.NativeModules.RNShare.SHARE_BACKGROUND_VIDEO || 'shareBackgroundVideo',
  SHARE_STICKER_IMAGE: ReactNative.NativeModules.RNShare.SHARE_STICKER_IMAGE || 'shareStickerImage',
  SHARE_BACKGROUND_AND_STICKER_IMAGE: ReactNative.NativeModules.RNShare.SHARE_BACKGROUND_AND_STICKER_IMAGE || 'shareBackgroundAndStickerImage',
};
k.FacebookStories = {
  SHARE_BACKGROUND_IMAGE: ReactNative.NativeModules.RNShare.SHARE_BACKGROUND_IMAGE || 'shareBackgroundImage',
  SHARE_STICKER_IMAGE: ReactNative.NativeModules.RNShare.SHARE_STICKER_IMAGE || 'shareStickerImage',
  SHARE_BACKGROUND_AND_STICKER_IMAGE: ReactNative.NativeModules.RNShare.SHARE_BACKGROUND_AND_STICKER_IMAGE || 'shareBackgroundAndStickerImage',
};
var y = k;
exports.default = y;
