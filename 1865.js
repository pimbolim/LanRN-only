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
    var o = x(n);
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
  module1866 = require('./1866'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module474 = require('./474');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (x = function (t) {
    return t ? o : n;
  })(t);
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

var S = function (t) {
    return 'ReservationItem_' + t.idReserva;
  },
  I = (function (t) {
    module35.default(T, t);

    var module400 = T,
      x = R(),
      I = function () {
        var t,
          n = module34.default(module400);

        if (x) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function T(t) {
      var n;
      module24.default(this, T);
      (n = I.call(this, t)).state = {
        loaded: false,
        reservations: null,
        scrollViewScrollable: true,
      };
      n.renderReservationItem = n.renderReservationItem.bind(module39.default(n));
      n.addToCart = n.addToCart.bind(module39.default(n));
      n.deleteReservation = n.deleteReservation.bind(module39.default(n));
      return n;
    }

    module25.default(T, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          return regeneratorRuntime.default.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    t.next = 2;
                    return regeneratorRuntime.default.awrap(this.getData());

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
        key: 'getData',
        value: function () {
          var t, o, l;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    t = this.props.dispatch;
                    s.prev = 1;
                    t(module1224.setLoader(true));
                    s.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.reservations(this.user.IdCliente),
                        axiosConfig: {
                          callback: this.getData,
                        },
                      })
                    );

                  case 5:
                    if ((o = s.sent).ok) {
                      t(module1224.setLoader(false));
                      this.setState({
                        loaded: true,
                        reservations: null != (l = o.data) && l.length ? o.data : [],
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== o.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    s.next = 13;
                    break;

                  case 9:
                    s.prev = 9;
                    s.t0 = s.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 13:
                  case 'end':
                    return s.stop();
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
        key: 'deleteReservation',
        value: function (t) {
          var module24, l, s, u;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    module24 = this.props.dispatch;
                    c.prev = 1;
                    module24(module1224.setLoader(true));
                    c.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.deleteReservations(null == (l = this.user) ? undefined : l.IdCliente, t.idReserva),
                      })
                    );

                  case 5:
                    if ((s = c.sent).ok) {
                      module24(module1224.setLoader(false));
                      this.getData();
                    } else {
                      module24(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: (null == s ? undefined : null == (u = s.data) ? undefined : u.message) || module458.default.error.generic,
                        });
                    }

                    c.next = 13;
                    break;

                  case 9:
                    c.prev = 9;
                    c.t0 = c.catch(1);
                    module24(module1224.setLoader(false));
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
        key: 'addToCart',
        value: function (t) {
          var module24, module25, module39, module35, c, f;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    module24 = this.props;
                    module25 = module24.dispatch;
                    module39 = module24.cartNumber;
                    module35 = {};
                    p.prev = 2;
                    module25(module1224.setLoader(true));
                    p.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.addItemToCart(this.user.IdCliente, t.IdProduto, t.NumeroCor, t.Tamanho) + t.idReserva,
                        data: module35,
                        axiosConfig: {
                          callback: this.addToCart,
                        },
                      })
                    );

                  case 6:
                    if ((c = p.sent).ok && c.data.success) {
                      module25(module1224.setLoader(false));

                      if (219 !== c.status && 319 !== c.status) {
                        module25(module1224.setCartNumber(module39.value + 1));
                        module472.DropDown.alert({
                          type: 'success',
                          title: module458.default.generic.success,
                          message: module458.default.generic.itemAddedToCart,
                        });
                        this.getData();
                      }
                    } else {
                      module25(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: (null == c ? undefined : null == (f = c.data) ? undefined : f.message) || module458.default.generic.errorMessage,
                        });
                    }

                    p.next = 14;
                    break;

                  case 10:
                    p.prev = 10;
                    p.t0 = p.catch(2);
                    module25(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 14:
                  case 'end':
                    return p.stop();
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
        key: 'renderInfoArea',
        value: function () {
          var t = module1866.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.infoArea,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.infoTextSemibold,
              },
              module458.default.profile.reservationsText1
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.infoTextRegular,
              },
              module458.default.profile.reservationsText2
            )
          );
        },
      },
      {
        key: 'renderReservationItem',
        value: function (t) {
          var n = this,
            o = t.item;
          return React.default.createElement(module472.WishlistCard, {
            isReservationCard: true,
            product: o,
            scrollable: this.state.scrollViewScrollable,
            onScroll: function (t) {
              return n.setState({
                scrollViewScrollable: t,
              });
            },
            onAddToCart: function (t) {
              return n.addToCart(t);
            },
            onDelete: function (t) {
              return n.deleteReservation(t);
            },
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = this.state,
            n = t.reservations;

          if (t.loaded) {
            var o = module1866.CStyles();
            return React.default.createElement(
              ReactNative.ScrollView,
              {
                key: 'reservationScrollView',
                showsVerticalScrollIndicator: false,
                scrollEnabled: this.state.scrollViewScrollable,
                contentContainerStyle: {
                  flexGrow: 1,
                },
              },
              this.renderInfoArea(),
              React.default.createElement(ReactNative.FlatList, {
                showsVerticalScrollIndicator: false,
                key: 'reservationFlatlist',
                style: [
                  o.flatListStyle,
                  n.length > 0
                    ? {
                        borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
                        borderTopColor: module474.Color.veryLightGray,
                      }
                    : null,
                ],
                keyExtractor: S,
                data: n,
                renderItem: this.renderReservationItem,
                scrollEnabled: false,
              })
            );
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1866.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.myReservations,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['right', 'left'],
                style: t.root,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return T;
  })(React.Component),
  T = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
      cartNumber: t.cartNumber,
    };
  })(I);

exports.default = T;
