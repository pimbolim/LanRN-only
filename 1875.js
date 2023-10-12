var regeneratorRuntime = require('regenerator-runtime'),
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
    var o = L(n);
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
  module1876 = require('./1876'),
  module474 = require('./474'),
  module961 = require('./961'),
  module1226 = require('./1226'),
  module1262 = require('./1262'),
  module1877 = require('./1877'),
  module1881 = require('./1881'),
  module1883 = require('./1883'),
  module1224 = require('./1224');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
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

var I = function (t, n) {
    return 'storeList__' + ((null == t ? undefined : t.idLoja) || (null == t ? undefined : t.CodigoLoja));
  },
  D = module1876.CStyles(),
  _ = function (t, n) {
    return React.default.createElement(
      ReactNative.TouchableOpacity,
      {
        style: [D.radioButtonContainer],
        onPress: function () {
          return n();
        },
      },
      t &&
        React.default.createElement(ReactNative.View, {
          style: D.innerRadio,
        })
    );
  },
  O = (function (t) {
    module35.default(z, t);

    var module400 = z,
      L = V(),
      O = function () {
        var t,
          n = module34.default(module400);

        if (L) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function z(t) {
      var n;
      module24.default(this, z);

      (n = O.call(this, t)).onLocationSelect = function (t, o) {
        var l = o.address_components,
          s = '',
          u = '',
          c = '';

        try {
          var f = l.find(function (t) {
            return (
              t.types.indexOf('postal_town') >= 0 ||
              t.types.indexOf('locality') >= 0 ||
              t.types.indexOf('administrative_area_level_1') >= 0 ||
              t.types.indexOf('administrative_area_level_2') >= 0
            );
          });
          if (f) c = f.long_name;
          var h = l.find(function (t) {
            return -1 !== t.types.indexOf('street_address') || -1 !== t.types.indexOf('route');
          });
          if (h) s = h.long_name;
          var p = l.find(function (t) {
            return -1 !== t.types.indexOf('street_number');
          });
          if (p) u = p.long_name;
        } catch (t) {}

        var y = o.geometry.location,
          S = y.lat,
          v = y.lng;
        n.onSubmit({
          street: s,
          number: u,
          city: c,
          coords: {
            latitude: S,
            longitude: v,
          },
          place_id: o.place_id,
          data: t,
        });
      };

      n.state = {
        step: n.favoriteStore ? 2 : 1,
        search: '',
        filters: [],
        stores: [],
        noLocation: false,
        filterTypes: n.filterTypes,
        selectedFilters: [],
        byLocation: false,
        expand: false,
        shopSchedule: '',
        phoneNumber: '',
        location: '',
        openedItem: {},
        favoriteStoreId: '',
        onFocusSearch: false,
      };
      n.renderStoreItem = n.renderStoreItem.bind(module39.default(n));
      return n;
    }

    module25.default(z, [
      {
        key: 'componentDidMount',
        value: function () {
          var t;
          if (null != (t = this.params) && t.from) this.getCurrentPosition();
          else if (this.favoriteStore) {
            var n = this.favoriteStore;
            this.setState({
              stores: [n],
              loaded: true,
            });
          }
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'favoriteStore',
        get: function () {
          var t, n;
          return (null == (t = this.props) ? undefined : null == (n = t.favoriteStore) ? undefined : n.value) || null;
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
        key: 'lastSearchedLocation',
        get: function () {
          return this.props.lastSearch.value || null;
        },
      },
      {
        key: 'filterTypes',
        get: function () {
          return [
            {
              key: 'tudo',
              name: module458.default.stores.allFilters,
            },
            {
              key: 'homem',
              name: module458.default.stores.man,
            },
            {
              key: 'mulher',
              name: module458.default.stores.woman,
            },
            {
              key: 'crianca',
              name: module458.default.stores.children,
            },
            {
              key: 'outlet',
              name: module458.default.stores.outlet,
            },
          ];
        },
      },
      {
        key: 'resetState',
        value: function () {
          this.setState({
            step: 1,
            search: '',
            filters: [],
            stores: [],
            noLocation: false,
            filterTypes: this.filterTypes,
            selectedFilters: [],
            onFilter: false,
            byLocation: false,
          });
        },
      },
      {
        key: 'goBack',
        value: function () {
          var t = this.state.step,
            n = this.props.navigation;
          if (1 != t) this.params.from || this.favoriteStore ? n.goBack() : this.resetState();
          else n.goBack();
        },
      },
      {
        key: 'getCurrentPosition',
        value: function () {
          var t = this;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    o.prev = 0;
                    o.next = 3;
                    return regeneratorRuntime.default.awrap(module1262.hasPermission('location'));

                  case 3:
                    if (o.sent) {
                      o.next = 7;
                      break;
                    }

                    this.setState({
                      noLocation: true,
                    });
                    return o.abrupt('return');

                  case 7:
                    ('ios' == ReactNative.Platform.OS ? module1877.default : module1881.default).getCurrentPosition(
                      function (n) {
                        var o = n.coords,
                          l = o.latitude,
                          s = o.longitude,
                          u = module1262.regionFrom({
                            lat: l,
                            long: s,
                            distance: 200,
                          }),
                          c = {
                            coords: {
                              latitude: u.latitude,
                              longitude: u.longitude,
                            },
                          };
                        t.setState(
                          {
                            region: c,
                            noPermission: false,
                          },
                          function () {
                            var n, o;
                            if ('ProductDetail' == (null == (n = t.params) ? undefined : null == (o = n.from) ? undefined : o.name)) t.getProductsInStock();
                            else t.getStoresLocation();
                          }
                        );
                      },
                      function (t) {}
                    );
                    o.next = 13;
                    break;

                  case 11:
                    o.prev = 11;
                    o.t0 = o.catch(0);

                  case 13:
                  case 'end':
                    return o.stop();
                }
            },
            null,
            this,
            [[0, 11]],
            Promise
          );
        },
      },
      {
        key: 'getStoresLocation',
        value: function () {
          var t, module24, module25, module39, u, c, f, h;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state.region;
                    module25 = module24.coords.latitude.toString().replace('.', ',');
                    module39 = module24.coords.longitude.toString().replace('.', ',');
                    t(module1224.setLoader(true));
                    p.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.storesByLocation(module25, module39),
                      })
                    );

                  case 7:
                    u = p.sent;
                    c = u.data;
                    f = c.lojas;
                    h = c.raio;
                    t(module1224.setLoader(false));
                    if (u.ok)
                      this.setState({
                        stores: f,
                        byLocation: true,
                        radius: h,
                        loaded: true,
                        search: '',
                        onFocusSearch: false,
                      });
                    else if (401 !== u.status)
                      module472.DropDown.alert({
                        type: 'error',
                        title: module458.default.generic.oops,
                        message: module458.default.error.generic,
                      });

                  case 11:
                  case 'end':
                    return p.stop();
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
        key: 'getStoresByFilter',
        value: function () {
          var t, module24, module25, s, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state.selectedFilters;
                    module25 = '';

                    if (module24.length) {
                      module25 = module24.toString();
                      if (
                        -1 !=
                        module24.findIndex(function (t) {
                          return 'tudo' == t;
                        })
                      )
                        module25 = '';
                    }

                    t(module1224.setLoader(true));
                    c.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.storesByFilter(module25),
                      })
                    );

                  case 7:
                    s = c.sent;
                    u = s.data;
                    t(module1224.setLoader(false));
                    if (s.ok)
                      this.setState({
                        loaded: true,
                        stores: u,
                        byLocation: false,
                      });
                    else {
                      this.setState({
                        loaded: true,
                      });
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                  case 11:
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
        key: 'getProductsInStock',
        value: function () {
          var t, module24, module25, s, u, c, f;
          return regeneratorRuntime.default.async(
            function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    t = this.state.region;
                    module24 = this.props.dispatch;
                    module25 = '';
                    if (null != t && t.city) module25 = null == t ? undefined : t.city;
                    else if (null != t && t.coords) {
                      s = t.coords.latitude.toString().replace('.', ',');
                      u = t.coords.longitude.toString().replace('.', ',');
                      module25 = s + '/' + u;
                    }
                    module24(module1224.setLoader(true));
                    h.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.productStockInShop(this.params.productId, module25),
                      })
                    );

                  case 7:
                    c = h.sent;
                    module24(module1224.setLoader(false));

                    if (c.ok) {
                      if ((f = c.data).length > 0)
                        f = c.data.filter(function (t) {
                          return null != t;
                        });
                      this.setState({
                        loaded: true,
                        stores: f,
                        byLocation: false,
                        search: '',
                        onFocusSearch: false,
                      });
                    } else {
                      this.setState({
                        loaded: true,
                      });
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                  case 10:
                  case 'end':
                    return h.stop();
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
        key: 'selectFavoriteStore',
        value: function (t, o) {
          var l;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    this.props.dispatch;
                    s.next = 3;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.favoriteStore(t, o.idLoja),
                      })
                    );

                  case 3:
                    if ((l = s.sent).ok) {
                      this.setState({
                        favoriteStore: o,
                      });
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.stores.favoriteStore,
                        message: module458.default.stores.favoriteStoreSelected,
                      });
                    } else {
                      this.setState({
                        loaded: true,
                      });
                      if (401 !== l.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
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
        key: 'onSubmit',
        value: function (t) {
          var n = this,
            o = this.props.dispatch;

          try {
            this.setState(
              {
                region: t,
              },
              function () {
                var t, o;
                if ('ProductDetail' == (null == (t = n.params) ? undefined : null == (o = t.from) ? undefined : o.name)) n.getProductsInStock();
                else n.getStoresLocation();
              }
            );
            o(module1224.setLastSearch(t));
          } catch (t) {}
        },
      },
      {
        key: 'handleFilterPress',
        value: function (t) {
          var n = this.state.selectedFilters,
            o = JSON.parse(JSON.stringify(n)),
            l = o.findIndex(function (n) {
              return n.key === t.key;
            });
          if (-1 === l) o.push(t.key);
          else o.splice(l, 1);
          this.setState({
            selectedFilters: o,
          });
        },
      },
      {
        key: 'renderSearchBar',
        value: function () {
          var t,
            n = this,
            o = this.state,
            l = o.search,
            s = o.onFilter;
          o.selectedFilters.length;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                paddingHorizontal: module474.ms(20),
              },
            },
            React.default.createElement(module472.Icon, {
              name: 'Search-Outline',
              size: module474.ms(20),
            }),
            React.default.createElement(module961.TextInput, {
              style: D.searchInput,
              placeholder: module458.default.stores.searchOneStore,
              placeholderTextColor: 'gray',
              value: l,
              onChangeText: function (t) {
                n.setState({
                  search: t,
                  onFilter: false,
                  selectedFilters: [],
                });
              },
              onFocus: function () {
                return n.setState({
                  onFocusSearch: true,
                });
              },
            }),
            !(null != (t = this.params) && t.from) &&
              !l &&
              React.default.createElement(
                ReactNative.Text,
                {
                  style: D.searchText,
                  onPress: function () {
                    if (s)
                      n.setState(
                        {
                          selectedFilters: [],
                          onFilter: false,
                        },
                        function () {
                          return n.getStoresByFilter();
                        }
                      );
                    else
                      n.setState({
                        onFilter: true,
                        search: '',
                        selectedStore: null,
                      });
                  },
                },
                s ? module458.default.stores.cleanFilter : module458.default.stores.filter
              ),
            !!l &&
              React.default.createElement(
                ReactNative.Text,
                {
                  style: D.searchText,
                  onPress: function () {
                    n.setState({
                      search: '',
                      selectedStore: null,
                    });
                  },
                },
                module458.default.generic.cancel
              )
          );
        },
      },
      {
        key: 'renderSearchGoogle',
        value: function () {
          var t = this,
            n = this.state,
            o = n.search,
            l = n.onFocusSearch,
            s = n.stores;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                position: 'absolute',
                zIndex: 10,
                width: '100%',
                backgroundColor: 'white',
              },
            },
            l && !o && !(null != s && s.length) && this.renderUserAddress(),
            React.default.createElement(module472.GooglePlacesAutocomplete, {
              minLength: 2,
              text: o.length > 3 && o,
              returnKeyType: 'search',
              listViewDisplayed: 'auto',
              textInputHide: true,
              suppressDefaultStyles: true,
              fetchDetails: true,
              styles: {
                container: {
                  flex: 1,
                },
                description: D.item,
              },
              getDefaultValue: function () {
                return t.state.search;
              },
              onPress: function (n) {
                var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
                t.onLocationSelect(n, o);
              },
              renderRow: function (t) {
                var n, o;
                return React.default.createElement(
                  ReactNative.View,
                  {
                    style: D.resultRow,
                  },
                  React.default.createElement(module472.Icon, {
                    style: D.resultIcon,
                    name: 'Map-Fill',
                  }),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [D.resultTextContainer],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: D.resultsText,
                      },
                      null == t ? undefined : null == (n = t.structured_formatting) ? undefined : n.main_text,
                      ',',
                      ' ',
                      null == t ? undefined : null == (o = t.structured_formatting) ? undefined : o.secondary_text
                    )
                  )
                );
              },
              query: {
                key: module1262.GEO_API_KEY,
                language: module458.default.getLanguage(),
                types: ['address'],
                components: 'country:pt',
              },
              GooglePlacesDetailsQuery: {
                fields: 'address_component,geometry,place_id',
              },
              debounce: 200,
            }),
            !!o &&
              o.length > 3 &&
              React.default.createElement(module961.TouchableWithoutFeedback, {
                onPress: function () {
                  t.setState({
                    search: '',
                  });
                },
                style: {
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0.1,
                },
              })
          );
        },
      },
      {
        key: 'renderUserAddress',
        value: function () {
          var t,
            n,
            o = this,
            l = this.props.user,
            s = (null == l ? undefined : null == (t = l.value) ? undefined : t.Morada) + ',' + (null == l ? undefined : null == (n = l.value) ? undefined : n.Localidade);
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              style: D.userAddressContainer,
              onPress: function () {
                return o.setState({
                  search: s,
                });
              },
            },
            _(false, function () {
              return o.setState({
                search: s,
              });
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'column',
                  marginLeft: module474.ms(15),
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    D.userAddressText,
                    {
                      fontFamily: module474.FontFamily.bold,
                    },
                  ],
                },
                l.value.Morada
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [D.userAddressText],
                },
                l.value.Morada
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [D.userAddressText],
                },
                l.value.CodPostal,
                ' ',
                l.value.Localidade
              )
            )
          );
        },
      },
      {
        key: 'renderStoreItem',
        value: function (t, n) {
          var o,
            l,
            s,
            u,
            c = this,
            f = module1876.CStyles(),
            y = this.state,
            S = y.expand,
            k = this.props.dispatch,
            T = (null == (o = this.favoriteStore) ? undefined : o.CodigoLoja) === (null == t ? undefined : t.CodigoLoja);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  marginTop: module474.ms(20),
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flexDirection: 'row',
                      width: '80%',
                    },
                  },
                  t.idLoja &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          alignSelf: 'center',
                        },
                      },
                      _(T, function () {
                        k(module1224.setFavoriteStore(t));
                        c.setState({
                          selectedStore: t,
                          stores: [t],
                        });
                        c.selectFavoriteStore(c.user.IdCliente, t);
                      })
                    ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flexDirection: 'column',
                        marginLeft: module474.ms(15),
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          f.storeText,
                          {
                            fontFamily: module474.FontFamily.bold,
                            fontSize: module474.FontSize.s,
                          },
                          T && {
                            color: module474.Color.orange,
                          },
                        ],
                      },
                      (null == t ? undefined : t.NomeAbrev) || (null == t ? undefined : t.Nome)
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [f.storeText],
                      },
                      null == t ? undefined : t.Morada
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [f.storeText],
                      },
                      (null == t ? undefined : t.CodPostal) || (null == t ? undefined : t.CodigoPostal),
                      ' ',
                      null == t ? undefined : t.Localidade
                    )
                  )
                ),
                this.params.from &&
                  !(null == t || null == (l = t.CoresTamanhos) || !l.length) &&
                  React.default.createElement(module472.Icon, {
                    onPress: function () {
                      return c.setState({
                        expand: c.state.openedTab !== t || !S,
                        openedTab: t,
                      });
                    },
                    style: {
                      alignSelf: 'flex-start',
                      color: module474.Color.lightGray,
                      transform: [
                        {
                          rotate: S && this.state.openedTab === t ? '180deg' : '0deg',
                        },
                      ],
                    },
                    name: 'Seta-baixo',
                    size: module474.ms(25),
                  })
              ),
              this.params.from &&
                !(null == t || null == (s = t.CoresTamanhos) || !s.length) &&
                this.state.expand &&
                this.state.openedTab === t &&
                this.renderProductInStockDetail(t),
              this.params.from && !(null != t && null != (u = t.CoresTamanhos) && u.length) && this.renderNoStock()
            )
          );
        },
      },
      {
        key: 'renderNoStock',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                justifyContent: 'center',
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: D.noStockText,
              },
              module458.default.stores.noStock
            )
          );
        },
      },
      {
        key: 'renderProductInStockDetail',
        value: function (t) {
          var n = [],
            o = [],
            l = [];
          if (!(null == t))
            t.CoresTamanhos.map(function (t, s) {
              var u;

              if (0 === s) {
                n.push(module458.default.stores.color);
                l.push(100);
              }

              var c = [];
              c.push(t.Cor);
              if (!(null == t || null == (u = t.Tamanhos)))
                u.map(function (t) {
                  if (0 === s) {
                    l.push(40);
                    n.push(t.Tamanho);
                  }

                  if (t.TemStock)
                    c.push(
                      React.default.createElement(ReactNative.View, {
                        style: {
                          backgroundColor: module474.Color.green,
                          height: module474.ms(10),
                          width: module474.ms(10),
                          borderRadius: module474.ms(5),
                        },
                      })
                    );
                  else c.push('');
                });
              o.push(c);
            });
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginVertical: module474.ms(20),
                marginHorizontal: module474.ms(15),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: D.storeText,
              },
              module458.default.stores.availableSizes + ':'
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              React.default.createElement(
                ReactNative.ScrollView,
                {
                  horizontal: true,
                },
                React.default.createElement(
                  ReactNative.View,
                  null,
                  React.default.createElement(
                    module1883.Table,
                    null,
                    React.default.createElement(module1883.Row, {
                      data: n,
                      widthArr: l,
                      style: {
                        height: 30,
                      },
                      textStyle: D.tableText,
                    })
                  ),
                  React.default.createElement(
                    module1883.Table,
                    null,
                    o.map(function (t, n) {
                      return React.default.createElement(module1883.Row, {
                        key: n,
                        data: t,
                        widthArr: l,
                        style: {
                          height: 30,
                        },
                        textStyle: D.tableText,
                      });
                    })
                  )
                )
              )
            ),
            this.state.expand && this.state.openedTab === t && this.renderStoreInfo(t)
          );
        },
      },
      {
        key: 'renderStoreInfo',
        value: function (t) {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginTop: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  marginVertical: module474.ms(5),
                },
              },
              t.Telefone &&
                React.default.createElement(
                  module961.TouchableWithoutFeedback,
                  {
                    onPress: function () {
                      return ReactNative.Linking.canOpenURL('tel: ' + t.Telefone).then(function (n) {
                        if (n) return ReactNative.Linking.openURL('tel: ' + t.Telefone);
                      });
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: D.storeText,
                    },
                    module458.default.stores.phone + ': ',
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: D.storeText,
                      },
                      t.Telefone
                    )
                  )
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  marginVertical: module474.ms(5),
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: D.storeText,
                },
                module458.default.stores.schedule + ': ',
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: D.storeText,
                  },
                  t.Horario
                )
              )
            )
          );
        },
      },
      {
        key: 'renderProductDetail',
        value: function () {
          var t = this.params.productDetails,
            n = t.Descricao,
            o = t.PVP,
            l = t.Referencia,
            s = t.ProdutoVistasCores;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                backgroundColor: module474.Color.grayBackground,
                height: module474.ms(150),
                justifyContent: 'center',
                width: '100%',
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    paddingHorizontal: module474.ms(20),
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: {
                    uri: s[0].Vistas[s[0].Vistas.length - 1].srcimagem,
                  },
                  style: {
                    height: module474.ms(100),
                    width: module474.ms(100),
                  },
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    height: module474.ms(100),
                    justifyContent: 'space-around',
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: D.detailTitleText,
                    },
                    n
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: D.detailTitleText,
                    },
                    o.toFixed(2) + ' \u20ac'
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: D.detailRefText,
                    },
                    'Ref: ' + l
                  )
                )
              )
            )
          );
        },
      },
      {
        key: 'renderStores',
        value: function () {
          var t = this,
            n = this.state,
            o = n.stores;
          return n.loaded
            ? o.length
              ? React.default.createElement(ReactNative.FlatList, {
                  key: 'storesList',
                  keyExtractor: I,
                  style: {
                    paddingHorizontal: module474.ms(20),
                    marginTop: module474.ms(10),
                  },
                  contentContainerStyle: {
                    paddingBottom: module474.ms(80),
                  },
                  showsVerticalScrollIndicator: false,
                  ItemSeparatorComponent: function () {
                    return React.default.createElement(ReactNative.View, {
                      style: {
                        height: module474.ms(15),
                      },
                    });
                  },
                  renderItem: function (n) {
                    var o = n.item,
                      l = n.index;
                    return t.renderStoreItem(o, l);
                  },
                  data: o,
                })
              : this.renderNoStoresFound()
            : null;
        },
      },
      {
        key: 'renderNoLocation',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: D.contentWrapper,
            },
            React.default.createElement(module472.Icon, {
              name: 'location',
              size: module474.ms(40),
              style: {
                alignSelf: 'center',
                paddingBottom: module474.ms(20),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [D.title],
              },
              module458.default.stores.locationServiceOff.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  D.text,
                  {
                    textAlign: 'center',
                    paddingHorizontal: module474.ms(20),
                  },
                ],
              },
              module458.default.stores.toActivateLocation
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                onPress: function () {
                  return ReactNative.Linking.openSettings();
                },
                style: D.locationSettingsText,
              },
              module458.default.stores.locationSettings
            )
          );
        },
      },
      {
        key: 'renderFilters',
        value: function () {
          var t = this,
            n = this.state.filterTypes;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                backgroundColor: module474.Color.grayBackground,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  paddingTop: module474.ms(25),
                  flex: 0.8,
                  marginHorizontal: module474.ms(20),
                },
              },
              n.map(function (n) {
                return t.renderFilterItem(n);
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: 'white',
                  paddingHorizontal: module474.ms(20),
                  paddingBottom: module474.ms(40),
                  flex: 0.2,
                },
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    return t.setState(
                      {
                        onFilter: false,
                      },
                      function () {
                        return t.getStoresByFilter();
                      }
                    );
                  },
                  style: [
                    D.clickableArea,
                    {
                      backgroundColor: module474.Color.black,
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      D.text,
                      {
                        alignSelf: 'center',
                        color: 'white',
                      },
                    ],
                  },
                  module458.default.stores.applyFilters.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'renderFilterItem',
        value: function (t) {
          var n = this,
            o =
              -1 !=
              this.state.selectedFilters.findIndex(function (n) {
                return n == t.key;
              });
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              onPress: function () {
                return n.handleFilterPress(t);
              },
              style: [D.filterTouchable],
            },
            React.default.createElement(module472.Icon, {
              name: o ? 'check' : 'uncheck',
              size: module474.ms(18),
              color: 'black',
              style: {
                marginRight: module474.ms(12.5),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [D.filterText],
              },
              t.name
            )
          );
        },
      },
      {
        key: 'renderStepLocalizeStores',
        value: function () {
          this.props.navigation;
          var t = this.state,
            n = t.noLocation,
            o = t.search,
            l = t.onFilter,
            s = t.stores,
            u = t.loaded,
            c = t.byLocation,
            f = t.radius,
            y = t.onFocusSearch;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                D.contentWrapper,
                {
                  paddingHorizontal: 0,
                },
              ],
            },
            this.renderSearchBar(),
            React.default.createElement(ReactNative.View, {
              style: {
                height: ReactNative.StyleSheet.hairlineWidth,
                backgroundColor: module474.Color.grayDivider,
              },
            }),
            l
              ? this.renderFilters()
              : React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      flex: 1,
                    },
                  },
                  n && !o && !u && this.renderNoLocation(),
                  (!!o || '' !== o || y) && this.renderSearchGoogle(),
                  c &&
                    !this.params.from &&
                    u &&
                    !l &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          backgroundColor: module474.Color.grayBackground,
                          justifyContent: 'center',
                          height: module474.ms(30),
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: [
                            D.resultsText,
                            {
                              textAlign: 'center',
                              fontFamily: module474.FontFamily.bold,
                              fontSize: module474.FontSize.xs,
                            },
                          ],
                        },
                        module458.default.formatString(module458.default.stores.resultsNearYou, s.length, f)
                      )
                    ),
                  this.params.from && this.renderProductDetail(),
                  u && this.renderStores()
                )
          );
        },
      },
      {
        key: 'renderNoStoresFound',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                justifyContent: 'center',
                flex: 1,
                marginHorizontal: module474.ms(40),
              },
            },
            React.default.createElement(module472.Icon, {
              name: 'Search-Stores',
              style: {
                alignSelf: 'center',
                marginRight: module474.ms(5),
                marginBottom: module474.ms(20),
              },
              size: module474.ms(80),
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  D.text,
                  {
                    alignSelf: 'center',
                    textAlign: 'center',
                  },
                ],
              },
              module458.default.stores.noStoresFound
            )
          );
        },
      },
      {
        key: 'renderSearchStores',
        value: function () {
          var t = this;
          this.props.navigation;
          return React.default.createElement(
            ReactNative.View,
            {
              style: D.contentWrapper,
            },
            React.default.createElement(module472.Icon, {
              name: 'Search-Stores',
              size: module474.ms(100),
              style: {
                alignSelf: 'center',
                marginBottom: module474.ms(40),
              },
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [D.title],
              },
              module458.default.stores.chooseFavoriteStore.toUpperCase()
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  D.text,
                  {
                    textAlign: 'center',
                    paddingHorizontal: module474.ms(20),
                  },
                ],
              },
              module458.default.stores.toFindStore
            ),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.setState(
                    {
                      step: 2,
                    },
                    function () {
                      return t.getCurrentPosition();
                    }
                  );
                },
                style: D.clickableArea,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    D.text,
                    {
                      alignSelf: 'center',
                    },
                  ],
                },
                module458.default.stores.searchStore.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return 1 == this.state.step ? this.renderSearchStores() : this.renderStepLocalizeStores();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.step;
          return React.default.createElement(
            module472.Wrapper,
            {
              style: D.root,
            },
            React.default.createElement(module472.Header, {
              title:
                1 == n
                  ? module458.default.stores.headerLocalize
                  : this.params.from
                  ? module458.default.stores.headerSearch
                  : this.favoriteStore
                  ? module458.default.stores.favoriteStore
                  : module458.default.stores.headerSearch,
              back: true,
              leftAction: function () {
                return t.goBack();
              },
            }),
            this.renderContent()
          );
        },
      },
    ]);
    return z;
  })(React.Component),
  z = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      lastSearch: t.lastSearch,
      favoriteStore: t.favoriteStore,
    };
  })(O);

exports.default = z;
