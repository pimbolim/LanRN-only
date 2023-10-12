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
    var o = I(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module1511 = require('./1511'),
  module472 = require('./472'),
  module1514 = require('./1514'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1272 = require('./1272'),
  module1262 = require('./1262'),
  module465 = require('./465'),
  module1263 = require('./1263');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (I = function (t) {
    return t ? o : n;
  })(t);
}

function D(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      D(Object(s), true).forEach(function (n) {
        module47.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      D(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

function L() {
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
    return 'catalogueHorizCateg__' + t.descricao;
  },
  z = function (t, n) {
    return 'catalogueCateg__' + t.descricao;
  },
  V = (function (t) {
    module35.default(D, t);

    var module47 = D,
      module400 = L(),
      I = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);
      (n = I.call(this, t)).qrCodeRead = false;
      n.state = {
        loaded: false,
        categories: [],
        selectedCategory: null,
        didMount: 0,
      };
      n.getData = n.getData.bind(module39.default(n));
      n.renderEmptyContent = n.renderEmptyContent.bind(module39.default(n));
      n.headerSearchValueHandler = n.headerSearchValueHandler.bind(module39.default(n));
      n.photoSelectionHandler = n.photoSelectionHandler.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.horizontalCategoryPressHandler = n.horizontalCategoryPressHandler.bind(module39.default(n));
      n.categoryPressHandler = n.categoryPressHandler.bind(module39.default(n));
      n.renderHorizontalCategoryItem = n.renderHorizontalCategoryItem.bind(module39.default(n));
      n.renderCatalogueUpperImg = n.renderCatalogueUpperImg.bind(module39.default(n));
      n.renderCategory = n.renderCategory.bind(module39.default(n));
      n.categoryPressCallBack = n.categoryPressCallBack.bind(module39.default(n));
      n.headerSearchValueHandler = n.headerSearchValueHandler.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.onBarCodeFound = n.onBarCodeFound.bind(module39.default(n));
      return n;
    }

    module25.default(D, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props.navigation;
          this._onFocus = n.addListener('focus', function () {
            return t.getData();
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof this._onFocus) this._onFocus();
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'getData',
        value: function () {
          var t, o, s, l;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    t = this.props.dispatch;
                    u.prev = 1;
                    t(module1224.setLoader(true));
                    u.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.catalogue(null == (o = this.user) ? undefined : o.IdCliente),
                        axiosConfig: {
                          callback: this.getData,
                        },
                      })
                    );

                  case 5:
                    if ((s = u.sent).ok) {
                      t(module1224.setLoader(false));

                      if ((l = s.data.menus).length) {
                        if (0 == this.state.didMount) t(module1224.setSelectedCategory(l[0]));
                        this.setState({
                          categories: l,
                          loaded: true,
                          selectedCategory: 0 != this.state.didMount && this.props.selectedCategory.value ? this.props.selectedCategory.value : l[0],
                          didMount: 1,
                        });
                      }
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    u.next = 13;
                    break;

                  case 9:
                    u.prev = 9;
                    u.t0 = u.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return u.stop();
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
        key: 'renderEmptyContent',
        value: function () {
          var t = this,
            n = module1514.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.emptyContentContainer,
            },
            React.default.createElement(module472.Icon, {
              name: 'Burger-Nav-Fill',
              size: module474.ms(44),
              style: {
                marginTop: -module474.ms(150),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.mainText,
              },
              module458.default.empty.improveSearchCatalogue.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: n.subText,
              },
              module458.default.empty.chooseYourFavoriteProducts
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.props.navigation.navigate('Home');
                },
                style: n.button,
              },
              React.default.createElement(module472.Icon, {
                name: 'Search-Outline',
                size: module474.ms(20),
                style: {
                  marginRight: module474.ms(10),
                },
              }),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.buyText,
                },
                module458.default.generic.buy.toUpperCase()
              )
            )
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
          var module47, module24, module25, u;
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = module47.navigation;
                    alert(t);
                    this.qrReader();
                    return n.abrupt('return');

                  case 8:
                    if ((u = n.sent).ok) module25.navigate('ProductDetail');
                    else {
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module1262.translate(u.data.message),
                      });
                    }
                    n.next = 15;
                    break;

                  case 12:
                    n.prev = 12;
                    n.t0 = n.catch(5);
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                    n.prev = 15;
                    module24(module1224.setLoader(false));
                    return n.finish(15);

                  case 18:
                  case 'end':
                    return n.stop();
                }
            },
            null,
            this,
            [[5, 12, 15, 18]],
            Promise
          );
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
                        data: T({}, module37),
                      })
                    );

                  case 8:
                    if ((h = p.sent).ok) {
                      module47(module1224.setLoader(false));
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
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((o = null), 'android' !== ReactNative.Platform.OS)) {
                      s.next = 12;
                      break;
                    }

                    if ('camera' !== t) {
                      s.next = 6;
                      break;
                    }

                    s.next = 5;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.CAMERA));

                  case 5:
                    o = s.sent;

                  case 6:
                    if ('gallery' !== t) {
                      s.next = 10;
                      break;
                    }

                    s.next = 9;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));

                  case 9:
                    o = s.sent;

                  case 10:
                    s.next = 20;
                    break;

                  case 12:
                    if ('camera' !== t) {
                      s.next = 16;
                      break;
                    }

                    s.next = 15;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.CAMERA));

                  case 15:
                    o = s.sent;

                  case 16:
                    if ('gallery' !== t) {
                      s.next = 20;
                      break;
                    }

                    s.next = 19;
                    return regeneratorRuntime.default.awrap(module1263.request(module1263.PERMISSIONS.IOS.PHOTO_LIBRARY));

                  case 19:
                    o = s.sent;

                  case 20:
                    return s.abrupt('return', {
                      status: o,
                    });

                  case 21:
                  case 'end':
                    return s.stop();
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
        key: 'onLaunchCamera',
        value: function (t) {
          var o = this;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('camera'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchCamera(t, function (t) {
                      var n = t.didCancel,
                        s = t.error,
                        l = t.customButton;
                      if (s)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.generic.cameraPermission,
                        });
                      module465.default.lockToPortrait();
                      if (!(n || s || l)) o.setPhoto(t);
                    });

                  case 4:
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
        key: 'onLaunchLibrary',
        value: function (t) {
          var o = this;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    s.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestPermissions('gallery'));

                  case 2:
                    module465.default.unlockAllOrientations();
                    module1511.default.launchImageLibrary(t, function (t) {
                      var n = t.didCancel,
                        s = t.error,
                        l = t.customButton;
                      module465.default.lockToPortrait();
                      if (!(n || s || l)) o.setPhoto(t);
                    });

                  case 4:
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
            s = {
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
          module1511.default.showImagePicker(s, function (n) {
            switch (n.customButton) {
              case 'take':
                t.onLaunchCamera(s);
                break;

              case 'choose':
                t.onLaunchLibrary(s);
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
            barcodeSearchAction: this.onBarCodeFound,
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
              return n.navigate('Search');
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
        key: 'horizontalCategoryPressHandler',
        value: function (t) {
          var n = this.props.dispatch;
          this.setState({
            selectedCategory: t,
            loadedImage: false,
            loadedVideo: false,
          });
          n(module1224.setSelectedCategory(t));
        },
      },
      {
        key: 'renderHorizontalCategoryItem',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1514.CStyles(),
            l = this.state.selectedCategory;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.horizontalCategoryPressHandler(o);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  s.horizontalCategoryCardContainer,
                  l.descricao === o.descricao && {
                    borderBottomColor: module474.Color.black,
                    borderBottomWidth: module474.ms(1),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    s.horizontalCategoryCardText,
                    l.descricao === o.descricao && {
                      color: 'black',
                    },
                  ],
                },
                o.descricao.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderHorizontalCategories',
        value: function () {
          var t = this.state.categories,
            n = module1514.CStyles();
          return React.default.createElement(ReactNative.FlatList, {
            key: 'categFlatList',
            horizontal: true,
            keyExtractor: B,
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
        key: 'renderCatalogueUpperImg',
        value: function () {
          var t = module1514.CStyles(),
            n = this.state.selectedCategory;
          return n
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: t.categoryImageContainer,
                },
                React.default.createElement(module1272.default, {
                  resizeMode: 'cover',
                  source: {
                    uri: n.imagemsrc,
                  },
                  style: t.categoryImage,
                })
              )
            : React.default.createElement(React.default.Fragment, null);
        },
      },
      {
        key: 'categoryPressCallBack',
        value: function (t) {
          this.setState({
            selectedCategory: t,
          });
        },
      },
      {
        key: 'categoryPressHandler',
        value: function (t) {
          var n = this.state,
            o = n.selectedCategory,
            s = n.categories;
          if (t.items)
            this.props.navigation.navigate('InnerCatalogue', {
              selectedCategory: o,
              categories: s,
              innerCategory: t,
              categoryPressCallBack: this.categoryPressCallBack,
            });
          else
            this.props.navigation.navigate('Products', {
              catalogueLink: t.link,
              catalogueTitle: t.descricao,
            });
        },
      },
      {
        key: 'renderCategory',
        value: function (t) {
          var n = this,
            o = t.item,
            s = module1514.CStyles();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return n.categoryPressHandler(o);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: s.categoryTextContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: s.itemDescriptionText,
                },
                o.descricao.toUpperCase()
              ),
              o.items &&
                React.default.createElement(module472.Icon, {
                  name: 'right',
                  size: module474.ms(22),
                  style: {
                    marginTop: -module474.ms(1),
                  },
                })
            )
          );
        },
      },
      {
        key: 'renderCatalogueCategories',
        value: function () {
          var t = this.state.selectedCategory;
          if (t)
            return React.default.createElement(ReactNative.FlatList, {
              key: 'horizontalCategFlatList',
              keyExtractor: z,
              style: {
                flexGrow: 0,
              },
              showsVerticalScrollIndicator: false,
              ListHeaderComponent: this.renderCatalogueUpperImg,
              ListHeaderComponentStyle: {
                marginBottom: module474.ms(10),
              },
              data: t.items,
              renderItem: this.renderCategory,
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1514.CStyles(),
            o = this.state,
            s = o.loaded,
            l = o.showCamReader,
            u = o.categories;
          return React.default.createElement(
            module472.Wrapper,
            {
              style: n.root,
              edges: ['top', 'left', 'right'],
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              u.length
                ? l
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
                        this.renderCatalogueCategories()
                      )
                    )
                : s && this.renderEmptyContent()
            )
          );
        },
      },
    ]);
    return D;
  })(React.Component),
  q = module400.connect(function (t) {
    return {
      user: t.user,
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      selectedCategory: t.selectedCategory,
    };
  })(V);

exports.default = q;
