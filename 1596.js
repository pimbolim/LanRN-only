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
    var o = A(n);
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
  module458 = require('./458'),
  module472 = require('./472'),
  module1597 = require('./1597'),
  module1394 = require('./1394'),
  module1224 = require('./1224'),
  module474 = require('./474'),
  module1272 = require('./1272'),
  module1598 = require('./1598'),
  module1226 = require('./1226'),
  module1262 = require('./1262'),
  module1604 = require('./1604'),
  module1511 = require('./1511'),
  module465 = require('./465'),
  module1263 = require('./1263'),
  module1606 = require('./1606');

function A(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (A = function (t) {
    return t ? o : n;
  })(t);
}

function D(t, n) {
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

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      D(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      D(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function z() {
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

var B = function (t, n) {
    return 'horizontalCateg__' + t.name;
  },
  F = (function (t) {
    module35.default(D, t);

    var module47 = D,
      module400 = z(),
      A = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);

      (n = A.call(this, t)).focusListener = function () {};

      n.homeFlatList = React.default.createRef();
      n.categFlatList = React.default.createRef();
      n._swiper = React.default.createRef();
      n._verticalSwiper = React.default.createRef();
      n.currentIndex = 0;
      n.currentVerticalIndex = 0;
      n.qrCodeRead = false;
      n.player = React.default.createRef();

      n.handleSwipeIndexChange = function (t) {
        var o,
          l = n.state.categories,
          s = n.props.dispatch;
        console.log('index swipe', t);
        n.currentIndex = t;
        if (null != (o = n.categFlatList.current))
          o.scrollToIndex({
            animated: true,
            index: t,
          });
        n.setState(
          {
            selectedCategory: l[t].name,
            loadedImage: false,
            loadedVideo: false,
          },
          function () {
            return s(module1224.setHomeSelectedCategory(l[t].name));
          }
        );
      };

      n.state = {
        showSheet: false,
        headerSearchValue: '',
        searchPhoto: null,
        searchPhotoType: '',
        scanningInfo: '',
        showCamReader: false,
        newsletterInputEmail: '',
        categories: [],
        selectedCategory: '',
        availableHeight: 0,
        loaded: false,
        loadedImage: false,
        loadedVideo: false,
        viewableItems: [],
        currentLang: null,
        opacity: 0,
        didMount: 0,
      };
      n.getHomeData = n.getHomeData.bind(module39.default(n));
      n.goToProfile = n.goToProfile.bind(module39.default(n));
      n.categoryPressHandler = n.categoryPressHandler.bind(module39.default(n));
      n.renderHorizontalCategoryItem = n.renderHorizontalCategoryItem.bind(module39.default(n));
      n.onViewableItemsChanged = n.onViewableItemsChanged.bind(module39.default(n));
      n.renderSectionItem = n.renderSectionItem.bind(module39.default(n));
      n.renderSectionImage = n.renderSectionImage.bind(module39.default(n));
      n.renderSectionVideo = n.renderSectionVideo.bind(module39.default(n));
      n.navigationHandler = n.navigationHandler.bind(module39.default(n));
      n.headerSearchValueHandler = n.headerSearchValueHandler.bind(module39.default(n));
      n.photoSelectionHandler = n.photoSelectionHandler.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.getItemLayout = n.getItemLayout.bind(module39.default(n));
      n.setRefFlatList = n.setRefFlatList.bind(module39.default(n));
      n.renderAllSectionsAreas = n.renderAllSectionsAreas.bind(module39.default(n));
      return n;
    }

    module25.default(D, [
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            module47,
            module24,
            s,
            u = this;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props;
                    module47 = t.navigation;
                    module24 = t.dispatch;
                    c.next = 3;
                    return regeneratorRuntime.default.awrap(module1394.default.getToken());

                  case 3:
                    s = c.sent;
                    module24(module1224.setNotificationToken(s));
                    this.getHomeData();
                    console.log('this.props', this.props);
                    this._onFocus = module47.addListener('focus', function () {
                      u.getHomeData();
                    });

                  case 8:
                  case 'end':
                    return c.stop();
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
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
      {
        key: 'isLoggedIn',
        get: function () {
          var t = this.props,
            n = t.user,
            o = t.token;
          return Boolean(n.value && o.value);
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'getHomeData',
        value: function () {
          var t,
            o,
            l,
            s,
            u = this;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props.dispatch;
                    c.prev = 1;
                    t(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.home() + '/' + (null == (o = this.user) ? undefined : o.IdCliente),
                        axiosConfig: {
                          callback: this.getHomeData,
                        },
                      })
                    );

                  case 5:
                    if (((l = c.sent), console.log('home', l), !l.ok)) {
                      c.next = 20;
                      break;
                    }

                    if ((t(module1224.setLoader(false)), !(s = l.data.categories).length)) {
                      c.next = 17;
                      break;
                    }

                    console.log('nameIdioma', s[0].name);
                    c.next = 14;
                    return regeneratorRuntime.default.awrap(
                      this.setState({
                        categories: s,
                        loaded: true,
                        selectedCategory: this.props.selectedCategory.value ? this.props.selectedCategory.value : s[0].name,
                        didMount: 1,
                      })
                    );

                  case 14:
                    if (this.props.selectedCategory.value)
                      this.currentIndex = s.findIndex(function (t) {
                        return t.name == u.props.selectedCategory.value;
                      });
                    c.next = 18;
                    break;

                  case 17:
                    this.setState({
                      loaded: true,
                      categories: s,
                    });

                  case 18:
                    c.next = 22;
                    break;

                  case 20:
                    t(module1224.setLoader(false));
                    if (401 !== l.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });

                  case 22:
                    c.next = 28;
                    break;

                  case 24:
                    c.prev = 24;
                    c.t0 = c.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 28:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[1, 24]],
            Promise
          );
        },
      },
      {
        key: 'goToProfile',
        value: function () {
          var t = this.props.navigation;
          this.video = null;
          if (this.isLoggedIn) t.navigate('Profile');
          else t.navigate('Login');
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
        key: 'photoSelectionHandler',
        value: function (t) {
          this.setState({
            searchPhoto: null == t ? undefined : t.uri,
            searchPhotoType: null == t ? undefined : t.type,
          });
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
                    module35 = new module1604.Buffer(module39.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
                    module37 = {
                      byteArray: module35,
                    };
                    p.prev = 4;
                    module47(module1224.setLoader(true));
                    p.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.searchPhoto(),
                        data: _({}, module37),
                      })
                    );

                  case 8:
                    if ((h = p.sent).ok) {
                      module47(module1224.setLoader(false));
                      this.video = null;
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
        key: 'renderUpperArea',
        value: function () {
          var t = this,
            n = this.props.navigation,
            o = this.state.headerSearchValue;
          return React.default.createElement(module472.HomeSearchHeader, {
            searchValue: o,
            searchValueHandler: this.headerSearchValueHandler,
            searchNavigation: function () {
              t.video = null;
              n.navigate('Search');
            },
            photoSelectionHandler: this.photoSelectionHandler,
            camReaderHandler: this.qrReader,
            onPhotoPress: function () {
              return t.onPhotoPress();
            },
          });
        },
      },
      {
        key: 'categoryPressHandler',
        value: function (t) {
          var n = this.props.dispatch,
            o = this.state.categories.findIndex(function (n) {
              return n.name == t;
            });
          console.log('index categ', o);
          this.setState({
            selectedCategory: t,
            loadedImage: false,
            loadedVideo: false,
          });

          this._swiper.scrollTo(o);

          n(module1224.setHomeSelectedCategory(t));
        },
      },
      {
        key: 'renderHorizontalCategoryItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = module1597.CStyles(),
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
                    o.nameIdioma[module1262.languageSchemaEnConverter(module1262.convertLanguage())]
                  )
                )
              )
            : null;
        },
      },
      {
        key: 'setRefFlatList',
        value: function (t) {
          this.setState({
            refFLatList: t,
          });
        },
      },
      {
        key: 'getItemLayout',
        value: function (t, n) {
          return {
            length: module474.ms(85),
            offset: module474.ms(85) * n,
            index: n,
          };
        },
      },
      {
        key: 'renderHorizontalCategories',
        value: function () {
          var t = this.state.categories,
            n = module1597.CStyles();
          return React.default.createElement(ReactNative.FlatList, {
            key: 'categFlatList',
            ref: this.categFlatList,
            keyExtractor: B,
            horizontal: true,
            style: {
              flexGrow: 0,
            },
            contentContainerStyle: n.horizontalCategoryFlatList,
            showsHorizontalScrollIndicator: false,
            renderItem: this.renderHorizontalCategoryItem,
            data: t,
            getItemLayout: this.getItemLayout,
            initialScrollIndex: 0,
          });
        },
      },
      {
        key: 'navigationHandler',
        value: function (t) {
          var n = this.props.navigation,
            o = this.state,
            l = o.selectedCategory,
            s = o.categories,
            u = t.app_action,
            c = t.app_url,
            f = s.find(function (t) {
              return t.name == l;
            });

          if ('template' === u) {
            this.video = null;
            n.navigate('TemplateScreen', {
              templateId: c,
              catalogueTitle: module1262.translate(f.nameIdioma),
            });
          } else if ('catalog' === u) {
            this.video = null;
            n.navigate('Catalogue', {
              screen: 'Products',
              params: {
                catalogueLink: c,
                fromHome: true,
                catalogueTitle: module1262.translate(f.nameIdioma),
              },
            });
          }
        },
      },
      {
        key: 'navigationListHandler',
        value: function (t) {
          var n = this.props.navigation,
            o = this.state,
            l = t.app_action,
            s = t.app_url;

          if ('template' === l) {
            this.video = null;
            n.navigate('TemplateScreen', {
              templateId: s,
            });
          } else if ('catalog' === l) {
            this.video = null;
            n.navigate('Catalogue', {
              screen: 'Products',
              params: {
                catalogueLink: s,
                fromHome: true,
                catalogueTitle: t.linkText.toUpperCase(),
              },
            });
          }
        },
      },
      {
        key: 'renderSectionVideo',
        value: function (t) {
          var n = this,
            o = module1597.CStyles(),
            l = this.state,
            s = l.loadedVideo,
            u = l.opacity,
            c = t.background,
            f = c.videoSrcPath + c.videoId.mobile;
          return null != f && f.includes('http')
            ? React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    return n.navigationHandler(t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].links[0]);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: o.maxResize,
                  },
                  s &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: o.mainContainerTextArea,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: o.bigText,
                        },
                        t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].sectionTitle.toUpperCase()
                      ),
                      t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].links.map(function (t) {
                        return n.renderSectionItemButton(t);
                      })
                    ),
                  React.default.createElement(module1598.default, {
                    key: 'video_' + t.info.sectionTitle,
                    source: {
                      uri: f,
                    },
                    ref: this.player,
                    onLoad: function () {
                      var t;
                      if (!(null == n || null == (t = n.player))) t.current.seek(0);
                      n.setState({
                        loadedVideo: true,
                        opacity: 0,
                      });
                    },
                    onLoadStart: function () {
                      return n.setState({
                        opacity: 1,
                      });
                    },
                    volume: 0,
                    repeat: true,
                    paused: false,
                    controls: false,
                    resizeMode: 'cover',
                    onError: this.videoError,
                    style: o.maxResize,
                  }),
                  React.default.createElement(ReactNative.ActivityIndicator, {
                    animating: true,
                    size: 'large',
                    color: 'black',
                    style: [
                      {
                        opacity: u,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                      },
                    ],
                  })
                )
              )
            : null;
        },
      },
      {
        key: 'renderSectionItemButton',
        value: function (t) {
          var n = this,
            o = module1597.CStyles();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.navigationHandler(t);
              },
              hitSlop: module474.HitSlop.big,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.linkUnderlineText,
              },
              t.linkText
            )
          );
        },
      },
      {
        key: 'renderSectionItemListButton',
        value: function (t) {
          var n = this,
            o = module1597.CStyles();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.navigationListHandler(t);
              },
              hitSlop: module474.HitSlop.big,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.linkUnderlineText,
              },
              t.linkText
            )
          );
        },
      },
      {
        key: 'renderSectionImage',
        value: function (t) {
          this.state.loadedImage;
          var n = this,
            o = module1597.CStyles(),
            l = t.background,
            s = l.imgSrcPath + l.sizes.mobile;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.navigationHandler(t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].links[0]);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: o.maxResize,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: o.mainContainerTextArea,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: o.bigText,
                  },
                  t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].sectionTitle.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: o.rowCenteredItems,
                  },
                  t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].links.map(function (o) {
                    return 1 == t.info[module1262.languageSchemaEnConverter(module1262.convertLanguage()).toUpperCase()].links.length
                      ? n.renderSectionItemButton(o)
                      : n.renderSectionItemListButton(o);
                  })
                )
              ),
              React.default.createElement(module1272.default, {
                resizeMode: 'stretch',
                onLoad: function () {
                  return n.setState({
                    loadedImage: true,
                  });
                },
                source: {
                  uri: s,
                },
                style: o.maxResize,
              })
            )
          );
        },
      },
      {
        key: 'renderSectionItem',
        value: function (t) {
          var n = this.state.availableHeight;
          return t.activeInIdiom[module1262.languageSchemaEnConverter(module1262.convertLanguage())]
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    width: '100%',
                    height: n,
                  },
                },
                'image' === t.background.type
                  ? this.renderSectionImage(t)
                  : 'video' === t.background.type
                  ? this.renderSectionVideo(t)
                  : React.default.createElement(React.default.Fragment, null)
              )
            : null;
        },
      },
      {
        key: 'onViewableItemsChanged',
        value: function (t) {
          var n = t.viewableItems;
          t.changed;
          this.setState({
            viewableItems: n,
          });
        },
      },
      {
        key: 'renderSectionDotsCounter',
        value: function () {
          var t = this.state,
            n = t.categories,
            o = t.selectedCategory,
            l = t.viewableItems;

          if (n.length && o) {
            var s = n.find(function (t) {
                return o === t.name;
              }),
              u = module1597.CStyles();
            if (s.sections.length)
              return React.default.createElement(
                ReactNative.View,
                {
                  style: u.benefitsAreaDotsArea,
                },
                s.sections.map(function (t, n) {
                  var o;
                  return t.activeInIdiom[module1262.languageSchemaEnConverter(module1262.convertLanguage())]
                    ? React.default.createElement(ReactNative.View, {
                        key: t + '_' + n,
                        style: [
                          u.benefitsAreaDot,
                          {
                            backgroundColor: (null == (o = l[0]) ? undefined : o.index) === n ? 'white' : 'black',
                          },
                        ],
                      })
                    : null;
                })
              );
          }
        },
      },
      {
        key: 'videoError',
        value: function (t) {
          this.setState({
            opacity: 0,
          });
        },
      },
      {
        key: 'renderAllSectionsAreas',
        value: function (t) {
          var n = this;
          this.setState({
            sectionsLoaded: true,
          });
          return t.map(function (t, o) {
            return React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
                onLayout: function (t) {
                  var o = t.nativeEvent.layout.height;
                  n.setState({
                    availableHeight: o,
                  });
                },
              },
              n.renderSectionArea(t.sections)
            );
          });
        },
      },
      {
        key: 'renderSectionArea',
        value: function (t) {
          var n = this,
            o = this.state,
            l = o.categories,
            s = o.selectedCategory;
          if (l.length && s)
            return React.default.createElement(
              module1606.default,
              {
                ref: function (t) {
                  n._verticalSwiper = t;
                },
                paginationStyle: {
                  justifyContent: 'flex-end',
                  paddingBottom: module474.ms(20),
                },
                activeDotColor: 'white',
                dotColor: 'black',
                horizontal: false,
                autoplay: false,
                loop: false,
                showsPagination: true,
                loadMinimal: true,
                loadMinimalSize: 5,
                removeClippedSubviews: false,
              },
              t.map(function (t) {
                return n.renderSectionItem(t);
              })
            );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.showCamReader,
            l = n.loaded,
            s = n.categories;
          if (!l) return null;
          var u = s,
            c = module1597.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              style: c.root,
              edges: ['top', 'left', 'right'],
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              o
                ? this.renderCamReader()
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    this.renderUpperArea(),
                    this.renderHorizontalCategories(),
                    React.default.createElement(
                      module1606.default,
                      {
                        ref: function (n) {
                          t._swiper = n;
                        },
                        dotColor: 'black',
                        activeDotColor: 'white',
                        onIndexChanged: this.handleSwipeIndexChange,
                        index: this.currentIndex,
                        autoplay: false,
                        loop: false,
                        showsPagination: false,
                        removeClippedSubviews: false,
                      },
                      this.renderAllSectionsAreas(u)
                    )
                  )
            )
          );
        },
      },
    ]);
    return D;
  })(React.PureComponent),
  j = module400.connect(function (t) {
    return {
      user: t.user,
      token: t.token,
      hideNavTab: t.hideNavTab,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      selectedCategory: t.homeSelectedCategory,
    };
  })(F);

exports.default = j;
