var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = L(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1868 = require('./1868'),
  module474 = require('./474'),
  module1511 = require('./1511'),
  module465 = require('./465'),
  module1263 = require('./1263'),
  module1226 = require('./1226'),
  module1224 = require('./1224'),
  module1604 = require('./1604');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (L = function (t) {
    return t ? s : n;
  })(t);
}

function R(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function C(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      R(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      R(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function V() {
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

var A = (function (t) {
    module35.default(R, t);

    var module47 = R,
      module400 = V(),
      L = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var n;
      module24.default(this, R);
      (n = L.call(this, t)).qrCodeRead = false;

      n.barCodesDetected = function (t) {
        if (!(null == t || !t.data)) n.qrCodeRead;
      };

      n.state = {
        searchValue: '',
        showCamReader: false,
        photo: null,
        photoType: '',
        resultsList: [],
        totalResultsValue: '',
        historyList: n.props.historyList ? n.props.historyList.value : [],
      };
      n.searchValueHandler = n.searchValueHandler.bind(module39.default(n));
      n.onPhotoPress = n.onPhotoPress.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.renderSearchHistoryItem = n.renderSearchHistoryItem.bind(module39.default(n));
      return n;
    }

    module25.default(R, [
      {
        key: 'TEMP_HIST_ITEMS',
        get: function () {
          return [
            {
              id: 1,
              text: 'HIST1',
            },
            {
              id: 2,
              text: 'HIST2',
            },
            {
              id: 3,
              text: 'HIST3',
            },
          ];
        },
      },
      {
        key: 'TEMP_FAV_ITEMS',
        get: function () {
          return [
            {
              id: 1,
              text: 'FAV1',
            },
            {
              id: 2,
              text: 'FAV2',
            },
            {
              id: 3,
              text: 'FAV3',
            },
          ];
        },
      },
      {
        key: 'params',
        get: function () {
          try {
            return this.props.route.params || {};
          } catch (t) {
            return {};
          }
        },
      },
      {
        key: 'user',
        get: function () {
          var t, n;
          return (null == (t = this.props) ? undefined : null == (n = t.user) ? undefined : n.value) || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this.props.navigation;
          this._onFocus = t.addListener('focus', function () {});
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
      {
        key: 'requestPermissions',
        value: function (t) {
          var s;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (((s = null), 'android' !== ReactNative.Platform.OS)) {
                      o.next = 12;
                      break;
                    }

                    if ('camera' !== t) {
                      o.next = 6;
                      break;
                    }

                    o.next = 5;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.CAMERA));

                  case 5:
                    s = o.sent;

                  case 6:
                    if ('gallery' !== t) {
                      o.next = 10;
                      break;
                    }

                    o.next = 9;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));

                  case 9:
                    s = o.sent;

                  case 10:
                    o.next = 20;
                    break;

                  case 12:
                    if ('camera' !== t) {
                      o.next = 16;
                      break;
                    }

                    o.next = 15;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.CAMERA));

                  case 15:
                    s = o.sent;

                  case 16:
                    if ('gallery' !== t) {
                      o.next = 20;
                      break;
                    }

                    o.next = 19;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.PHOTO_LIBRARY));

                  case 19:
                    s = o.sent;

                  case 20:
                    return o.abrupt('return', {
                      status: s,
                    });

                  case 21:
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
      },
      {
        key: 'setPhoto',
        value: function (t) {
          var n = this;
          this.setState(
            {
              photo: null == t ? undefined : t.data,
              photoType: null == t ? undefined : t.type,
            },
            function () {
              return n.searchPhoto();
            }
          );
        },
      },
      {
        key: 'onLaunchCamera',
        value: function (t) {
          var s = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('camera'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchCamera(t, function (t) {
                      var n = t.didCancel,
                        o = t.error,
                        l = t.customButton;
                      if (o)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.generic.cameraPermission,
                        });
                      module465.default.lockToPortrait();
                      if (!(n || o || l)) s.setPhoto(t);
                    });

                  case 4:
                  case 'end':
                    return o.stop();
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
        key: 'onLaunchLibrary',
        value: function (t) {
          var s = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('gallery'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchImageLibrary(t, function (t) {
                      var n = t.didCancel,
                        o = t.error,
                        l = t.customButton;
                      module465.default.lockToPortrait();
                      if (!(n || o || l)) s.setPhoto(t);
                    });

                  case 4:
                  case 'end':
                    return o.stop();
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
        key: 'searchPhoto',
        value: function () {
          var t, module47, module24, module25, module39, module35, f;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = this.state;
                    module25 = module24.photo;
                    module39 = new module1604.Buffer(module25.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
                    module35 = {
                      byteArray: module39,
                    };
                    h.prev = 4;
                    module47(module1224.setLoader(true));
                    h.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.searchPhoto(),
                        data: C({}, module35),
                      })
                    );

                  case 8:
                    if ((f = h.sent).ok) {
                      module47(module1224.setLoader(false));
                      this.props.navigation.navigate('Products', {
                        resultsList: f.data.listaprodutos,
                        totalResultsValue: f.data.totalartigos,
                      });
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== f.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    h.next = 16;
                    break;

                  case 12:
                    h.prev = 12;
                    h.t0 = h.catch(4);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                  case 'end':
                    return h.stop();
                }
            },
            null,
            this,
            [[4, 12]],
            Promise
          );
        },
      },
      {
        key: 'searchText',
        value: function (t) {
          var s, o, l, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    if (((s = this.props), (o = s.dispatch), s.historyList, ' ' !== t.charAt(t.length - 1))) {
                      c.next = 3;
                      break;
                    }

                    return c.abrupt('return', null);

                  case 3:
                    c.prev = 3;
                    c.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.searchText(t, (null == (l = this.user) ? undefined : l.IdCliente) || ''),
                        displayLoader: false,
                      })
                    );

                  case 6:
                    if ((u = c.sent).ok) {
                      this.setState({
                        resultsList: u.data.listaprodutos,
                        totalResultsValue: u.data.totalartigos,
                      });
                      o(module1224.setLoader(false));
                    } else {
                      o(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    c.next = 14;
                    break;

                  case 10:
                    c.prev = 10;
                    c.t0 = c.catch(3);
                    o(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 14:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[3, 10]],
            Promise
          );
        },
      },
      {
        key: 'onPhotoPress',
        value: function () {
          var t = this,
            n = 'android' === ReactNative.Platform.OS ? '...' : '',
            s = [
              {
                name: 'take',
                title: module458.default.imagePicker.take + n,
              },
              {
                name: 'choose',
                title: module458.default.imagePicker.choose + n,
              },
            ],
            o = {
              title: 'android' === ReactNative.Platform.OS ? module458.default.imagePicker.select : null,
              customButtons: s,
              takePhotoButtonTitle: undefined,
              chooseFromLibraryButtonTitle: undefined,
              cancelButtonTitle: module458.default.generic.cancel,
              cameraType: 'front',
              mediaType: 'photo',
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
              includeBase64: false,
              maxWidth: 800,
              maxHeight: 800,
              quality: 0.7,
            };
          module1511.default.showImagePicker(o, function (n) {
            switch (n.customButton) {
              case 'take':
                t.onLaunchCamera(o);
                break;

              case 'choose':
                t.onLaunchLibrary(o);
                break;

              default:
                module465.default.lockToPortrait();
            }
          });
        },
      },
      {
        key: 'cleanHistory',
        value: function () {
          this.props.dispatch(module1224.setHistoryList([]));
        },
      },
      {
        key: 'searchValueHandler',
        value: function (t) {
          var n = this;
          this.setState(
            {
              searchValue: t,
            },
            function () {
              if (t.length > 3) n.searchText(t);
            }
          );
        },
      },
      {
        key: 'renderSearchArea',
        value: function () {
          var t = this,
            n = this.state,
            s = n.searchValue,
            o = n.resultsList,
            l = n.totalResultsValue,
            u = this.props,
            c = u.dispatch,
            f = u.historyList,
            h = u.navigation,
            v = module1868.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: v.upperAreaContainer,
            },
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return h.goBack();
                },
              },
              React.default.createElement(module472.Icon, {
                name: 'Seta-perfil1',
                size: module474.ms(22),
                style: {
                  color: module474.Color.black,
                  transform: [
                    {
                      rotateY: '180deg',
                    },
                  ],
                },
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: v.searchInputContainer,
              },
              React.default.createElement(ReactNative.TextInput, {
                placeholder: module458.default.home.searchProducts,
                placeholderTextColor: 'grey',
                defaultValue: s,
                onChangeText: this.searchValueHandler,
                style: v.searchAreaTextInput,
                numberOfLines: 1,
              })
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  var n = f.value ? f.value : [];

                  if (s && '' !== s) {
                    t.searchValueHandler(s);
                    t.props.navigation.navigate('Products', {
                      resultsList: o,
                      totalResultsValue: l,
                      searchValue: s,
                    });
                    if (5 === n.length) n.pop();
                    n.unshift(t.state.searchValue);
                  }

                  c(module1224.setHistoryList(n));
                },
                style: v.headerClearContainer,
              },
              React.default.createElement(module472.Icon, {
                name: 'Search-Fill',
                size: module474.ms(20),
              })
            )
          );
        },
      },
      {
        key: 'renderSearchHistoryItem',
        value: function (t) {
          var s = this,
            o = t.item,
            l = module1868.CStyles(),
            u = this.state;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              style: l.listItemContainer,
              onPress: function () {
                return regeneratorRuntime.default.async(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          t.next = 2;
                          return regeneratorRuntime.default.awrap(s.searchText(o));

                        case 2:
                          s.props.navigation.navigate('Products', {
                            resultsList: s.state.resultsList,
                            totalResultsValue: s.state.totalResultsValue,
                            searchValue: o,
                          });

                        case 3:
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
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: l.listItemText,
              },
              ' - ',
              o
            ),
            React.default.createElement(module472.Icon, {
              name: 'right',
              size: module474.ms(12),
              style: {
                marginRight: module474.ms(2.5),
              },
            })
          );
        },
      },
      {
        key: 'renderHistoryList',
        value: function () {
          var t = this,
            n = module1868.CStyles(),
            s = this.props.historyList;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                n.areaContainer,
                {
                  paddingVertical: module474.ms(20),
                },
              ],
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.innerAreaContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    n.headerClearText,
                    {
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                module458.default.searchScreen.searchHistory
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    return t.cleanHistory();
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.headerClearText,
                  },
                  module458.default.generic.clear
                )
              )
            ),
            React.default.createElement(ReactNative.FlatList, {
              data: null != s && s.value ? (null == s ? undefined : s.value) : [],
              renderItem: this.renderSearchHistoryItem,
              showsVerticalScrollIndicator: false,
              extraData: this.state,
            })
          );
        },
      },
      {
        key: 'renderPopularSearchesArea',
        value: function () {
          var t = module1868.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.areaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.innerAreaContainer,
              },
              React.default.createElement(ReactNative.Text, null, module458.default.searchScreen.mostPopularSearches)
            ),
            React.default.createElement(ReactNative.FlatList, {
              data: this.TEMP_FAV_ITEMS,
              renderItem: this.renderPopularSearchItem,
              showsVerticalScrollIndicator: false,
            })
          );
        },
      },
      {
        key: 'renderCamReader',
        value: function () {
          var t = this.props.navigation;
          return React.default.createElement(module472.QrReader, {
            qrReaderAction: this.qrReader,
            navigation: t,
          });
        },
      },
      {
        key: 'renderTabArea',
        value: function () {
          var t = this,
            n = module1868.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.bottomTabContainer,
            },
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: n.searchPhotoArea,
                onPress: this.onPhotoPress,
              },
              React.default.createElement(module472.Icon, {
                name: 'camera',
                size: module474.ms(22.5),
                style: {
                  marginTop: module474.ms(2.5),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  numberOfLines: 1,
                  ellipsizeMode: 'tail',
                  style: n.searchPhotoText,
                },
                module458.default.home.photo
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: n.searchPhotoArea,
                onPress: this.qrReader,
              },
              React.default.createElement(module472.Icon, {
                name: 'barcode',
                size: module474.ms(22.5),
                style: {
                  marginTop: module474.ms(2.5),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  numberOfLines: 1,
                  ellipsizeMode: 'tail',
                  style: n.searchPhotoText,
                },
                module458.default.home.scan
              )
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: n.searchPhotoArea,
                onPress: function () {},
              },
              React.default.createElement(module472.Icon, {
                name: 'Search-Stores',
                size: module474.ms(22.5),
                style: {
                  marginTop: module474.ms(2.5),
                },
                onPress: function () {
                  return t.props.navigation.navigate('Stores');
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  numberOfLines: 1,
                  ellipsizeMode: 'tail',
                  style: n.searchPhotoText,
                },
                module458.default.searchScreen.searchStores
              )
            )
          );
        },
      },
      {
        key: 'qrReader',
        value: function () {
          this.props.dispatch;
          this.qrCodeRead = false;
          this.setState({
            showCamReader: !this.state.showCamReader,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.state.showCamReader,
            n = module1868.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              edges: ['top', 'left', 'bottom', 'right'],
              style: n.root,
            },
            t
              ? this.renderCamReader()
              : React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                        width: '100%',
                      },
                    },
                    this.renderSearchArea(),
                    this.renderHistoryList()
                  ),
                  this.renderTabArea()
                )
          );
        },
      },
    ]);
    return R;
  })(React.Component),
  D = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      historyList: t.historyList,
      user: t.user,
      token: t.token,
    };
  })(A);

exports.default = D;
