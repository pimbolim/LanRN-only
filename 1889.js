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
    var o = O(n);
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
  module472 = require('./472'),
  module1890 = require('./1890'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module474 = require('./474'),
  module1272 = require('./1272'),
  module1511 = require('./1511'),
  module465 = require('./465'),
  module1263 = require('./1263');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function I(t, n) {
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

function C(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      I(Object(s), true).forEach(function (n) {
        module47.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      I(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

function R() {
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

var F = (function (t) {
    module35.default(I, t);

    var module47 = I,
      module400 = R(),
      O = function () {
        var t,
          n = module34.default(module47);

        if (module400) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function I(t) {
      var n;
      module24.default(this, I);
      (n = O.call(this, t)).qrCodeRead = false;
      n.player = React.default.createRef();
      n.state = {
        loaded: false,
        showCamReader: false,
        availableHeight: 0,
        sections: [],
      };
      n.requestDetailsData = n.requestDetailsData.bind(module39.default(n));
      n.renderSectionItem = n.renderSectionItem.bind(module39.default(n));
      n.renderSectionProduct = n.renderSectionProduct.bind(module39.default(n));
      n.addProductToWishList = n.addProductToWishList.bind(module39.default(n));
      n.removeProductFromWishList = n.removeProductFromWishList.bind(module39.default(n));
      n.headerSearchValueHandler = n.headerSearchValueHandler.bind(module39.default(n));
      n.photoSelectionHandler = n.photoSelectionHandler.bind(module39.default(n));
      n.qrReader = n.qrReader.bind(module39.default(n));
      n.onBarCodeFound = n.onBarCodeFound.bind(module39.default(n));
      return n;
    }

    module25.default(I, [
      {
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.requestDetailsData());

                  case 2:
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
        key: 'detailsIdParams',
        get: function () {
          return this.props.route.params.detailsId;
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'catalogueTitle',
        get: function () {
          return this.props.route.params.catalogueTitle || module458.default.tabBar.catalogue;
        },
      },
      {
        key: 'searchPhoto',
        value: function () {
          var t, module47, module24, module25, module39, module35, module37, p;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
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
                    h.prev = 4;
                    module47(module1224.setLoader(true));
                    h.next = 8;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.searchPhoto(),
                        data: C({}, module37),
                      })
                    );

                  case 8:
                    if ((p = h.sent).ok) {
                      module47(module1224.setLoader(false));
                      this.setState({
                        paused: true,
                      });
                      module24.navigate('Products', {
                        resultsList: p.data.listaprodutos,
                        totalResultsValue: p.data.totalartigos,
                      });
                    } else {
                      module47(module1224.setLoader(false));
                      if (401 !== p.status)
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
        key: 'requestDetailsData',
        value: function () {
          var t, module47, module24, l, u;
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
                        url: module1226.Endpoints.editsDetail(this.detailsIdParams, null == (l = this.user) ? undefined : l.IdCliente),
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
        key: 'removeProductFromWishList',
        value: function (t) {
          var module47, module24, module25, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    module47 = this.props;
                    module24 = module47.dispatch;
                    module25 = module47.user;
                    c.prev = 1;
                    module24(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.wishlist(module25.value.IdCliente) + '/' + t,
                        axiosConfig: {
                          callback: this.removeProductFromWishList,
                        },
                      })
                    );

                  case 5:
                    if (!(u = c.sent).ok) {
                      c.next = 14;
                      break;
                    }

                    this.setState({
                      sections: [],
                    });
                    c.next = 10;
                    return regeneratorRuntime.default.awrap(this.requestDetailsData());

                  case 10:
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.tabBar.favorites,
                      message: u.data.message,
                    });
                    c.next = 16;
                    break;

                  case 14:
                    module24(module1224.setLoader(false));
                    if (401 !== u.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: u.data.message,
                      });

                  case 16:
                    c.next = 22;
                    break;

                  case 18:
                    c.prev = 18;
                    c.t0 = c.catch(1);
                    module24(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 22:
                  case 'end':
                    return c.stop();
                }
            },
            null,
            this,
            [[1, 18]],
            Promise
          );
        },
      },
      {
        key: 'addProductToWishList',
        value: function (t, o) {
          var module24, module25, module39, module35, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    module24 = this.props;
                    module25 = module24.dispatch;
                    module39 = module24.user;
                    p.prev = 1;
                    module35 = {};
                    module25(module1224.setLoader(true));
                    p.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.wishlist(module39.value.IdCliente) + '/' + t + '/' + o,
                        data: module35,
                        axiosConfig: {
                          callback: this.addProductToWishList,
                        },
                      })
                    );

                  case 6:
                    if (!(f = p.sent).ok || !f.data.success) {
                      p.next = 15;
                      break;
                    }

                    this.setState({
                      sections: [],
                    });
                    p.next = 11;
                    return regeneratorRuntime.default.awrap(this.requestDetailsData());

                  case 11:
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'success',
                      title: module458.default.generic.success,
                      message: f.data.message,
                    });
                    p.next = 17;
                    break;

                  case 15:
                    module25(module1224.setLoader(false));
                    if (401 !== f.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: f.data.message,
                      });

                  case 17:
                    p.next = 23;
                    break;

                  case 19:
                    p.prev = 19;
                    p.t0 = p.catch(1);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 23:
                  case 'end':
                    return p.stop();
                }
            },
            null,
            this,
            [[1, 19]],
            Promise
          );
        },
      },
      {
        key: 'renderSectionProduct',
        value: function (t) {
          var n,
            o,
            s = this,
            l = module1890.CStyles(),
            u = this.state.availableHeight,
            c = this.props,
            f = c.navigation,
            p = c.user,
            v = ReactNative.Dimensions.get('window').width;
          if (0 !== u)
            return t.products.length > 1
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    style: [
                      l.horizontalImagesContainer,
                      {
                        height: u / t.products.length + module474.ms(75),
                      },
                    ],
                  },
                  t.products.map(function (n) {
                    var o = (null == n ? undefined : n.PricePromo) > 0,
                      c = (null == n ? undefined : n.idGiftListaProduto) > 0;
                    return React.default.createElement(
                      ReactNative.TouchableWithoutFeedback,
                      {
                        onPress: function () {
                          return f.navigate('ProductDetail', {
                            catalogueTitle: s.detailsIdParams,
                            productId: n.productId,
                          });
                        },
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: {
                            width: v / t.products.length,
                            alignItems: 'center',
                            height: u / t.products.length - module474.ms(5) + module474.ms(75),
                          },
                        },
                        React.default.createElement(module1272.default, {
                          resizeMode: 'cover',
                          source: {
                            uri: null == n ? undefined : n.imageurl,
                          },
                          style: {
                            height: u / t.products.length - module474.ms(25),
                            width: '95%',
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
                            ),
                            React.default.createElement(
                              ReactNative.TouchableOpacity,
                              {
                                onPress: function () {
                                  if (null != p && p.value)
                                    c ? s.removeProductFromWishList(null == n ? undefined : n.idGiftListaProduto) : s.addProductToWishList(n.productId, n.colorNumber);
                                  else
                                    module472.DropDown.alert({
                                      type: 'error',
                                      title: module458.default.generic.oops,
                                      message: module458.default.authentication.toExecuteThisActionLogin,
                                    });
                                },
                              },
                              React.default.createElement(module472.Icon, {
                                name: c ? 'Like-Fill' : 'Like-Outline',
                                size: ReactNative.Dimensions.get('window').width < 375 ? module474.ms(16) : module474.ms(20),
                              })
                            )
                          ),
                          !(null == n || !n.description) &&
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
                            o &&
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
                )
              : React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    {
                      onPress: function () {
                        return f.navigate('ProductDetail', {
                          catalogueTitle: s.detailsIdParams,
                          productId: t.products[0].productId,
                        });
                      },
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          height: u,
                          width: v / 2,
                          alignItems: 'center',
                        },
                      },
                      React.default.createElement(module1272.default, {
                        source: {
                          uri: t.products[0].imageurl,
                        },
                        style: {
                          height: u / 2 - module474.ms(5) + module474.ms(75),
                          width: '95%',
                        },
                        resizeMode: 'cover',
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
                          ),
                          React.default.createElement(
                            ReactNative.TouchableOpacity,
                            {
                              onPress: function () {
                                var n, o;
                                return null != (n = t.products[0]) && n.idGiftListaProduto
                                  ? s.addProductToWishList(t.products[0].productId, t.products[0].colorNumber)
                                  : s.removeProductFromWishList(null == (o = t.products[0]) ? undefined : o.idGiftListaProduto);
                              },
                            },
                            React.default.createElement(module472.Icon, {
                              name: (null == (n = t.products[0]) ? undefined : n.idGiftListaProduto) > 0 ? 'Like-Fill' : 'Like-Outline',
                              size: ReactNative.Dimensions.get('window').width < 375 ? module474.ms(16) : module474.ms(20),
                            })
                          )
                        ),
                        !(null == (o = t.products[0]) || !o.description) &&
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
                            t.products[0].description.toUpperCase()
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
                                t.products[0].PricePromo && {
                                  textDecorationLine: 'line-through',
                                },
                              ],
                            },
                            Math.round((100 * (t.products[0].Price + Number.EPSILON)) / 100).toFixed(2) + '\u20ac '
                          ),
                          t.products[0].PricePromo > 0 &&
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
                              Math.round((100 * (t.products[0].PricePromo + Number.EPSILON)) / 100).toFixed(2) + '\u20ac '
                            )
                        )
                      )
                    )
                  )
                );
        },
      },
      {
        key: 'renderSectionItem',
        value: function (t) {
          var n = t.item;
          return 'product' === n.type.toLowerCase()
            ? this.renderSectionProduct(n)
            : 'video' === n.type.toLowerCase()
            ? React.default.createElement(ReactNative.View, null)
            : (n.type.toLowerCase(), React.default.createElement(ReactNative.View, null));
        },
      },
      {
        key: 'renderSectionArea',
        value: function () {
          var t = this.state.sections;
          if (t.length)
            return React.default.createElement(ReactNative.FlatList, {
              keyExtractor: function (t, n) {
                return 'item_' + t + '_' + n;
              },
              viewabilityConfig: {
                itemVisiblePercentThreshold: 50.1,
              },
              contentContainerStyle: {
                flexGrow: 1,
              },
              key: 'templates sections List',
              showsVerticalScrollIndicator: false,
              renderItem: this.renderSectionItem,
              data: t,
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state,
            o = n.showCamReader,
            s = n.loaded;
          n.sections;
          if (!s) return null;
          var l = module1890.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              style: l.root,
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
                ? this.renderCamReader()
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flex: 1,
                      },
                    },
                    this.renderUpperArea(),
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
                      this.renderSectionArea()
                    )
                  )
            )
          );
        },
      },
    ]);
    return I;
  })(React.Component),
  A = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(F);

exports.default = A;
