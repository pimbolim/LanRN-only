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
    var o = D(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module1511 = require('./1511'),
  module465 = require('./465'),
  module458 = require('./458'),
  module1263 = require('./1263'),
  module472 = require('./472'),
  module1892 = require('./1892'),
  module474 = require('./474'),
  module1598 = require('./1598'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1272 = require('./1272'),
  module1262 = require('./1262'),
  module431 = require('./431');

function D(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (D = function (t) {
    return t ? o : n;
  })(t);
}

function R(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      R(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      R(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function H() {
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

var A = function (t) {
    return "item_' + " + t.text;
  },
  q = (function (t) {
    module35.default(R, t);

    var module47 = R,
      module400 = H(),
      D = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var n;
      module24.default(this, R);
      (n = D.call(this, t)).qrCodeRead = false;
      n.player = React.default.createRef();
      n.state = {
        loaded: false,
        showCamReader: false,
        availableHeight: 0,
        heightScaled: 0,
        paused: false,
        sections: [],
        loadedImage: false,
        loadedVideo: false,
        showTexts: false,
        focused: true,
        opacity: 0,
      };
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.requestData = n.requestData.bind(module39.default(n));
      n.categoryPressHandler = n.categoryPressHandler.bind(module39.default(n));
      n.renderHorizontalCategoryItem = n.renderHorizontalCategoryItem.bind(module39.default(n));
      n.renderSectionArea = n.renderSectionArea.bind(module39.default(n));
      n.renderSectionItem = n.renderSectionItem.bind(module39.default(n));
      n.headerSearchValueHandler = n.headerSearchValueHandler.bind(module39.default(n));
      n.photoSelectionHandler = n.photoSelectionHandler.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.onBarCodeFound = n.onBarCodeFound.bind(module39.default(n));
      n.renderItemsBottomSheet = n.renderItemsBottomSheet.bind(module39.default(n));
      n.renderBottomSheetItem = n.renderBottomSheetItem.bind(module39.default(n));
      n.renderSectionProduct = n.renderSectionProduct.bind(module39.default(n));
      return n;
    }

    module25.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestData());

                  case 2:
                    this._onBlur = this.props.navigation.addListener('blur', function () {
                      return t.setState({
                        focused: false,
                        paused: true,
                      });
                    });

                  case 3:
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
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof this._onBlur) this._onBlur();
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
        key: 'templateId',
        get: function () {
          return this.props.route.params.templateId || null;
        },
      },
      {
        key: 'catalogueTitle',
        get: function () {
          return this.props.route.params.catalogueTitle || module458.default.tabBar.catalogue;
        },
      },
      {
        key: 'categories',
        get: function () {
          return this.props.route.params.categories || null;
        },
      },
      {
        key: 'selectedCategory',
        get: function () {
          return this.props.route.params.selectedCategory || null;
        },
      },
      {
        key: 'requestData',
        value: function () {
          var t,
            module47,
            module24,
            module25,
            u,
            c = arguments;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    t = c.length > 0 && undefined !== c[0] ? c[0] : null;
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = module47.navigation;
                    f.prev = 2;
                    module24(module1224.setLoader(true));
                    f.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.edits(t || this.templateId),
                        axiosConfig: {
                          callback: this.requestData,
                        },
                      })
                    );

                  case 6:
                    if ((u = f.sent).ok) {
                      module24(module1224.setLoader(false));
                      this.setState({
                        sections: u.data.Sections,
                        loaded: true,
                      });
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                      module25.goBack();
                    }

                    f.next = 14;
                    break;

                  case 10:
                    f.prev = 10;
                    f.t0 = f.catch(2);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 14:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[2, 10]],
            Promise
          );
        },
      },
      {
        key: 'headerSearchValueHandler',
        value: function (t) {
          this.setState({
            headerSearchValue: t,
          });
        },
      },
      {
        key: 'searchPhoto',
        value: function () {
          var t, module47, module24, module25, module39, module35, module37, h;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.navigation;
                    module25 = this.state;
                    module39 = module25.photo;
                    module35 = new Buffer(module39.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
                    module37 = {
                      byteArray: module35,
                    };
                    p.prev = 4;
                    module47(module1224.setLoader(true));
                    p.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.searchPhoto(),
                        data: V({}, module37),
                      })
                    );

                  case 8:
                    if ((h = p.sent).ok) {
                      module47(module1224.setLoader(false));
                      this.setState({
                        paused: true,
                      });
                      this.player = null;
                      module24.navigate('Products', {
                        resultsList: h.data.listaprodutos,
                        totalResultsValue: h.data.totalartigos,
                      });
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== h.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    p.next = 16;
                    break;

                  case 12:
                    p.prev = 12;
                    p.t0 = p.catch(4);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                  case 'end':
                    return p.stop();
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
        key: 'requestPermissions',
        value: function (t) {
          var o;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    if (((o = null), 'android' !== ReactNative.Platform.OS)) {
                      l.next = 12;
                      break;
                    }

                    if ('camera' !== t) {
                      l.next = 6;
                      break;
                    }

                    l.next = 5;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.CAMERA));

                  case 5:
                    o = l.sent;

                  case 6:
                    if ('gallery' !== t) {
                      l.next = 10;
                      break;
                    }

                    l.next = 9;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));

                  case 9:
                    o = l.sent;

                  case 10:
                    l.next = 20;
                    break;

                  case 12:
                    if ('camera' !== t) {
                      l.next = 16;
                      break;
                    }

                    l.next = 15;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.CAMERA));

                  case 15:
                    o = l.sent;

                  case 16:
                    if ('gallery' !== t) {
                      l.next = 20;
                      break;
                    }

                    l.next = 19;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.PHOTO_LIBRARY));

                  case 19:
                    o = l.sent;

                  case 20:
                    return l.abrupt('return', {
                      status: o,
                    });

                  case 21:
                  case 'end':
                    return l.stop();
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
          var o = this;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    l.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('camera'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchCamera(t, function (t) {
                      var n = t.didCancel,
                        l = t.error,
                        s = t.customButton;
                      if (l)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.generic.cameraPermission,
                        });
                      module465.default.lockToPortrait();
                      if (!(n || l || s)) o.setPhoto(t);
                    });

                  case 4:
                  case 'end':
                    return l.stop();
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
          var o = this;
          return regeneratorRuntime.default.async(
            function (l) {
              for (;;)
                switch ((l.prev = l.next)) {
                  case 0:
                    l.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('gallery'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchImageLibrary(t, function (t) {
                      var n = t.didCancel,
                        l = t.error,
                        s = t.customButton;
                      module465.default.lockToPortrait();
                      if (!(n || l || s)) o.setPhoto(t);
                    });

                  case 4:
                  case 'end':
                    return l.stop();
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
        key: 'onPhotoPress',
        value: function () {
          var t = this,
            n = 'android' === ReactNative.Platform.OS ? '...' : '',
            o = [
              {
                name: 'take',
                title: module458.default.imagePicker.take + n,
              },
              {
                name: 'choose',
                title: module458.default.imagePicker.choose + n,
              },
            ],
            l = {
              title: 'android' === ReactNative.Platform.OS ? module458.default.imagePicker.select : null,
              customButtons: o,
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
          module1511.default.showImagePicker(l, function (n) {
            switch (n.customButton) {
              case 'take':
                t.onLaunchCamera(l);
                break;

              case 'choose':
                t.onLaunchLibrary(l);
                break;

              default:
                module465.default.lockToPortrait();
            }
          });
        },
      },
      {
        key: 'requestDetailsData',
        value: function () {
          var t, module47, module24, s, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.dispatch;
                    module24 = t.navigation;
                    c.prev = 1;
                    module47(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.editsDetail(this.detailsIdParams, null == (s = this.user) ? undefined : s.IdCliente),
                        axiosConfig: {
                          callback: this.requestDetailsData,
                        },
                      })
                    );

                  case 5:
                    if ((u = c.sent).ok) {
                      module47(module1224.setLoader(false));
                      this.setState({
                        sections: u.data.Sections,
                        loaded: true,
                      });
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                      module24.goBack();
                    }

                    c.next = 13;
                    break;

                  case 9:
                    c.prev = 9;
                    c.t0 = c.catch(1);
                    module47(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[1, 9]],
            Promise
          );
        },
      },
      {
        key: 'photoSelectionHandler',
        value: function (t) {
          this.setState({
            searchPhoto: null == t ? undefined : t.uri,
            searchPhotoType: null == t ? undefined : t.type,
          });
        },
      },
      {
        key: 'onBarCodeFound',
        value: function (t) {
          var module47;
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    module47 = this.props;
                    this.qrReader();
                    return t.abrupt('return');

                  case 3:
                  case 'end':
                    return t.stop();
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
        key: 'qrReader',
        value: function () {
          var t = this,
            n = this.props.dispatch;
          this.qrCodeRead = false;
          this.setState(
            {
              showCamReader: !this.state.showCamReader,
            },
            function () {
              return n(module1224.setHideNavTab(t.state.showCamReader));
            }
          );
        },
      },
      {
        key: 'renderCamReader',
        value: function () {
          var t = this.props.navigation;
          return React.default.createElement(module472.QrReader, {
            qrReaderAction: this.qrReader,
            barcodeSearchAction: this.onBarCodeFound,
            navigation: t,
          });
        },
      },
      {
        key: 'renderUpperArea',
        value: function () {
          var t = this.props.navigation;
          return React.default.createElement(module472.Header, {
            style: {
              backgroundColor: 'red',
            },
            leftAction: function () {
              return t.goBack();
            },
            back: true,
            title: this.catalogueTitle,
            rightIcon: 'Search-Outline',
            rightAction: function () {
              return t.navigate('Search');
            },
          });
        },
      },
      {
        key: 'categoryPressHandler',
        value: function (t) {
          this.setState({
            selectedCategory: t,
            loadedImage: false,
            loadedVideo: false,
          });
        },
      },
      {
        key: 'renderHorizontalCategoryItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = module1892.CStyles(),
            s = this.state.selectedCategory;
          return o.nameIdioma[module1262.languageSchemaEnConverter(module1262.convertLanguage())]
            ? React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    return n.categoryPressHandler(o.name);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      l.horizontalCategoryCardContainer,
                      s === o.name && {
                        borderBottomColor: module474.Color.black,
                        borderBottomWidth: module474.ms(1),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        l.horizontalCategoryCardText,
                        s === o.name && {
                          color: 'black',
                        },
                      ],
                    },
                    module1262.translate(o.nameIdioma)
                  )
                )
              )
            : null;
        },
      },
      {
        key: 'renderHorizontalCategories',
        value: function () {
          var t = this.state.categories,
            n = module1892.CStyles();
          return React.default.createElement(ReactNative.FlatList, {
            key: 'categFlatList',
            horizontal: true,
            style: {
              flexGrow: 0,
            },
            contentContainerStyle: n.horizontalCategoryFlatList,
            showsHorizontalScrollIndicator: false,
            renderItem: this.renderHorizontalCategoryItem,
            data: t,
          });
        },
      },
      {
        key: 'videoError',
        value: function (t) {},
      },
      {
        key: 'renderSectionVideo',
        value: function (t) {
          var n,
            o,
            l,
            s = this,
            u = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
            c = module1892.CStyles(),
            f = this.state,
            h = f.availableHeight,
            v = f.heightScaled;
          f.opacity;
          return t.videos.length > 1 || u
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    c.horizontalImagesContainer,
                    {
                      height: h / (u ? 2 : t.videos.length),
                    },
                  ],
                },
                t.videos.map(function (n) {
                  return null != n && n.videourl && null != n && n.videourl.includes('http')
                    ? React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            width: '100%',
                            justifyContent: 'center',
                          },
                        },
                        React.default.createElement(module1598.default, {
                          key: 'video_' + n.videourl,
                          source: {
                            uri: null == n ? undefined : n.videourl,
                          },
                          ref: s.player,
                          onLoad: function (t) {
                            var n,
                              o = t.naturalSize,
                              l = o.width,
                              u = o.height * (ReactNative.Dimensions.get('window').width / l);
                            if (null != s && null != (n = s.player) && n.current) s.player.current.seek(0);
                            s.setState({
                              loadedVideo: true,
                              showTexts: true,
                              heightScaled: u,
                              opacity: 0,
                            });
                          },
                          onLoadStart: function () {
                            return s.setState({
                              opacity: 1,
                            });
                          },
                          volume: 50,
                          repeat: true,
                          paused: s.state.paused,
                          controls: true,
                          resizeMode: 'contain',
                          onError: s.videoError,
                          style: {
                            height: v / (u ? 2 : t.videos.length) - module474.ms(5),
                            width: '100%',
                          },
                        })
                      )
                    : null;
                })
              )
            : null != t && null != (n = t.videos[0]) && n.videourl && null != t && null != (o = t.videos[0]) && o.videourl.includes('http')
            ? React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  disabled: !(null != t && null != (l = t.videos[0]) && l.videourl),
                  onPress: function () {
                    return s.navigationHandler(t.videos[0]);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      width: '100%',
                      height: v,
                    },
                  },
                  React.default.createElement(module1598.default, {
                    key: 'video_' + t.videos[0].videourl,
                    source: {
                      uri: t.videos[0].videourl,
                    },
                    ref: this.player,
                    onLoad: function (t) {
                      var n;
                      if (null != s && null != (n = s.player) && n.current) s.player.current.seek(0);
                      var o = t.naturalSize,
                        l = o.width,
                        u = o.height * (ReactNative.Dimensions.get('window').width / l);
                      s.setState({
                        loadedVideo: true,
                        showTexts: true,
                        heightScaled: u,
                        opacity: 0,
                      });
                    },
                    onLoadStart: function () {
                      return s.setState({
                        opacity: 1,
                      });
                    },
                    volume: 50,
                    repeat: true,
                    paused: this.state.paused,
                    controls: true,
                    resizeMode: 'contain',
                    onError: this.videoError,
                    style: {
                      width: '100%',
                      height: v,
                    },
                  })
                )
              )
            : null;
        },
      },
      {
        key: 'navigationHandler',
        value: function (t) {
          var n = this,
            o = t.action,
            l = this.props.navigation;
          if ('template' === o) this.requestData(t.url);
          else if ('template-detail' === o) {
            this.setState(
              {
                paused: true,
              },
              function () {
                return (n.player = null);
              }
            );
            l.navigate('TemplateDetails', {
              detailsId: t.url ? t.url : '',
              catalogueTitle: this.catalogueTitle,
            });
          }
        },
      },
      {
        key: 'renderSectionImage',
        value: function (t) {
          var n,
            o = this,
            l = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
            s = module1892.CStyles(),
            u = this.state,
            c = u.availableHeight,
            f = 1 == (null == t ? undefined : null == (n = t.images) ? undefined : n.length);
          if (l) f = false;

          var h = function (n) {
            var u = false;
            return React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                disabled: !n.url,
                onPress: function () {
                  return o.navigationHandler(n);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                    paddingBottom: module474.ms(20),
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      width: '100%',
                      alignItems: 'center',
                    },
                  },
                  React.default.createElement(module1272.default, {
                    resizeMode: 'contain',
                    onLoad: function () {
                      u = true;
                      o.setState({
                        showTexts: true,
                      });
                    },
                    source: {
                      uri: n.imageurl,
                      priority: module1272.default.priority.high,
                    },
                    style: f
                      ? {
                          aspectRatio: 1,
                          width: '100%',
                        }
                      : {
                          height: c / (l ? 2 : t.images.length),
                          width: '98%',
                        },
                  })
                ),
                n.text &&
                  u &&
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        s.regularSBlack,
                        {
                          marginTop: module474.ms(10),
                          marginHorizontal: module474.ms(20),
                        },
                      ],
                    },
                    n.text
                  )
              )
            );
          };

          return f || l
            ? h(t.images[0])
            : React.default.createElement(
                ReactNative.View,
                {
                  style: [s.horizontalImagesContainer],
                },
                t.images.map(function (t) {
                  return h(t);
                })
              );
        },
      },
      {
        key: 'renderSectionVideoImage',
        value: function (t) {
          var n = this;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flexDirection: 'row',
              },
            },
            Object.keys(t).map(function (o) {
              return 'image' == o
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    n.renderSectionImage(
                      {
                        images: [t.image],
                      },
                      true
                    )
                  )
                : 'video' == o
                ? React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    n.renderSectionVideo(
                      {
                        videos: [t.video],
                      },
                      true
                    )
                  )
                : undefined;
            })
          );
        },
      },
      {
        key: 'renderText',
        value: function (t) {
          var n = this;
          module1892.CStyles();
          return this.state.showTexts
            ? React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    return t.action ? n.navigationHandler(t) : {};
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingHorizontal: module474.ms(20),
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      paddingBottom: module474.ms(20),
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        fontFamily: module474.FontFamily.regular,
                        fontSize: module474.FontSize.s,
                        color: module474.Color.black,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                      },
                    },
                    t.text
                  )
                )
              )
            : null;
        },
      },
      {
        key: 'renderDropBox',
        value: function (t) {
          var n = this,
            o = module1892.CStyles(),
            l = t.items[0].text;
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    itemsToRender: t.items,
                  },
                  function () {
                    return n.setState({
                      showBottomItems: true,
                    });
                  }
                );
              },
              style: o.dropBoxWrapper,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: o.dropBoxContent,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: o.dropBoxText,
                },
                l
              ),
              React.default.createElement(module472.Icon, {
                name: 'anterior',
                size: module474.ms(16),
                style: {
                  transform: [
                    {
                      rotate: '270deg',
                    },
                  ],
                  marginLeft: module474.ms(15),
                },
              })
            )
          );
        },
      },
      {
        key: 'renderBottomSheetItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = module1892.CStyles();
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.setState(
                  {
                    itemsToRender: null,
                    showBottomItems: false,
                  },
                  function () {
                    return n.navigationHandler(o);
                  }
                );
              },
              style: [l.boxItemContainer],
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: l.boxItemText,
              },
              o.text
            )
          );
        },
      },
      {
        key: 'renderItemsBottomSheet',
        value: function (t) {
          var n = this,
            o = module1892.CStyles(),
            l = this.state,
            s = l.showBottomItems,
            u = l.itemsToRender;
          if (u) 10 * u + '%';
          return React.default.createElement(
            module472.BottomSheet,
            {
              key: 'BSBox',
              visible: s,
              snapPoints: [-1, '20%'],
              onClose: function () {
                n.setState({
                  showBottomItems: false,
                  itemsToRender: null,
                });
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  o.itemsBottomSheetContainer,
                  {
                    paddingBottom: t.bottom,
                  },
                ],
              },
              React.default.createElement(ReactNative.FlatList, {
                key: 'itemsList',
                keyExtractor: A,
                renderItem: this.renderBottomSheetItem,
                data: u,
                showsVerticalScrollIndicator: false,
                removeClippedSubviews: true,
              })
            )
          );
        },
      },
      {
        key: 'renderSectionProduct',
        value: function (t) {
          var n,
            o = this,
            l = module1892.CStyles(),
            s = this.state.availableHeight,
            u = this.props.navigation,
            c = ReactNative.Dimensions.get('window').width;

          if (0 !== s) {
            var f = 1 == (null == t ? undefined : null == (n = t.products) ? undefined : n.length);
            return React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.horizontalImagesContainer,
                  {
                    height: s / t.products.length + module474.ms(75),
                  },
                ],
              },
              t.products.map(function (n) {
                var h = n.PricePromo > 0;
                return React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  {
                    onPress: function () {
                      o.player = null;
                      u.navigate('ProductDetail', {
                        catalogueTitle: n.url,
                        productId: n.productId,
                      });
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        width: c / t.products.length,
                        alignItems: 'center',
                        height: s / t.products.length - module474.ms(5) + module474.ms(75),
                      },
                    },
                    React.default.createElement(module1272.default, {
                      resizeMode: 'cover',
                      source: {
                        uri: n.imageurl,
                      },
                      style: {
                        height: s / t.products.length - module474.ms(25),
                        width: f ? '100%' : '95%',
                      },
                    }),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: l.cardTextContainer,
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: l.horizontalTextContainer,
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: {
                              flexDirection: 'row',
                            },
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: l.cardLanidorText,
                            },
                            module458.default.generic.lanidor.toUpperCase() + ' - '
                          ),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [
                                l.cardProductText,
                                {
                                  color: 'gray',
                                  fontFamily: module474.FontFamily.light,
                                },
                              ],
                            },
                            module458.default.generic.blackLabel.toUpperCase()
                          )
                        )
                      ),
                      n.description &&
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: [
                              l.cardProductText,
                              {
                                marginTop: module474.ms(10),
                              },
                            ],
                          },
                          n.description.toUpperCase()
                        ),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            flexDirection: 'row',
                            marginTop: module474.ms(5),
                          },
                        },
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: [
                              l.cardTextPrice,
                              n.PricePromo && {
                                textDecorationLine: 'line-through',
                              },
                            ],
                          },
                          Math.round((100 * (n.Price + Number.EPSILON)) / 100).toFixed(2) + '\u20ac '
                        ),
                        h &&
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [
                                l.cardTextPrice,
                                {
                                  color: module474.Color.red,
                                },
                              ],
                            },
                            Math.round((100 * (n.PricePromo + Number.EPSILON)) / 100).toFixed(2) + '\u20ac '
                          )
                      )
                    )
                  )
                );
              })
            );
          }
        },
      },
      {
        key: 'renderSectionItem',
        value: function (t) {
          var n = t.item;
          return 'product' === n.type.toLowerCase()
            ? this.renderSectionProduct(n)
            : 'image' === n.type.toLowerCase()
            ? this.renderSectionImage(n)
            : 'video' === n.type.toLowerCase()
            ? this.renderSectionVideo(n)
            : 'videoImage' === n.type
            ? this.renderSectionVideoImage(n)
            : 'text' === n.type.toLowerCase()
            ? this.renderText(n)
            : 'dropbox' === n.type.toLowerCase()
            ? this.renderDropBox(n)
            : React.default.createElement(React.default.Fragment, null);
        },
      },
      {
        key: 'renderSectionArea',
        value: function (t) {
          var n = this.state.sections;
          if (n.length)
            return React.default.createElement(ReactNative.FlatList, {
              keyExtractor: function (t, n) {
                return 'item_' + t + '_' + n;
              },
              viewabilityConfig: {
                itemVisiblePercentThreshold: 50.1,
              },
              contentContainerStyle: {
                flexGrow: 1,
                paddingBottom: null != t && t.bottom ? (null == t ? undefined : t.bottom) : module474.ms(10),
              },
              key: 'templates sections List',
              showsVerticalScrollIndicator: false,
              renderItem: this.renderSectionItem,
              data: n,
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.showCamReader,
            l = n.loaded;
          n.sections;
          if (!l) return null;
          var s = module1892.CStyles();
          return React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (n) {
            return React.default.createElement(
              module472.Wrapper,
              {
                style: s.root,
                edges: ['left', 'right'],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                  },
                },
                o
                  ? t.renderCamReader()
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          flex: 1,
                        },
                      },
                      t.renderUpperArea(),
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            flex: 1,
                          },
                          onLayout: function (n) {
                            var o = n.nativeEvent.layout.height;
                            t.setState({
                              availableHeight: o,
                            });
                          },
                        },
                        t.renderSectionArea(n),
                        t.renderItemsBottomSheet(n)
                      )
                    )
              )
            );
          });
        },
      },
    ]);
    return R;
  })(React.PureComponent),
  z = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(q);

exports.default = z;
