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
    var o = k(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1838 = require('./1838'),
  module1226 = require('./1226'),
  module1224 = require('./1224'),
  module474 = require('./474');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (k = function (t) {
    return t ? o : n;
  })(t);
}

function w() {
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

var I = function (t) {
    return 'OrderItem_' + t.idVendasCabec;
  },
  F = (function (t) {
    module35.default(P, t);

    var module400 = P,
      k = w(),
      F = function () {
        var t,
          n = module34.default(module400);

        if (k) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      var n;
      module24.default(this, P);
      (n = F.call(this, t)).state = {
        loaded: false,
        orders: [],
        flatListScrollable: true,
      };
      n.renderOrderItem = n.renderOrderItem.bind(module39.default(n));
      return n;
    }

    module25.default(P, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
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
        key: 'getData',
        value: function () {
          var t, o, l;
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
                        url: module1226.Endpoints.orders(this.user.IdCliente),
                      })
                    );

                  case 5:
                    if ((o = u.sent).ok) {
                      t(module1224.setLoader(false));
                      if (null != o && null != (l = o.data) && l.length)
                        this.setState({
                          loaded: true,
                          orders: o.data,
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
            n = module1838.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.emptyContentContainer,
            },
            React.default.createElement(module472.Icon, {
              name: 'Bag-Fill',
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
              module458.default.empty.noOrdersYet.toUpperCase()
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
                style: n.emptyContentButton,
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
                  style: {
                    fontFamily: module474.FontFamily.bold,
                    fontSize: module474.FontSize.m,
                  },
                },
                module458.default.cart.buy.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderOrderItem',
        value: function (t) {
          var n = this,
            o = t.item,
            l = this.props.navigation;
          return React.default.createElement(module472.WishlistCard, {
            isOrderCard: true,
            hideRightContent: true,
            onSelect: function () {
              return l.navigate('OrderDetail', {
                orderId: o.idVendasCabec,
              });
            },
            product: o,
            scrollable: this.state.flatListScrollable,
            onScroll: function (t) {
              return n.setState({
                flatListScrollable: t,
              });
            },
          });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = this,
            n = module1838.CStyles(),
            o = this.state.orders;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                {
                  flex: 1,
                },
                n.topBorder,
              ],
            },
            React.default.createElement(ReactNative.FlatList, {
              showsVerticalScrollIndicator: false,
              key: 'ordersFlatlist',
              style: {
                backgroundColor: 'white',
              },
              keyExtractor: I,
              data: o,
              renderItem: this.renderOrderItem,
              ItemSeparatorComponent: function () {
                return React.default.createElement(ReactNative.View, {
                  style: {
                    height: module474.ms(10),
                    width: '100%',
                  },
                });
              },
              scrollEnabled: this.state.flatListScrollable,
              refreshControl: React.default.createElement(ReactNative.RefreshControl, {
                tintColor: 'white',
                colors: ['white'],
                refreshing: false,
                onRefresh: function () {
                  return t.getData();
                },
              }),
            })
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.state,
            n = t.loaded,
            o = t.orders,
            l = module1838.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.allPurchases,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['right', 'left'],
                style: l.root,
              },
              n && o.length && this.renderContent(),
              n && !o.length && this.renderEmptyContent()
            )
          );
        },
      },
    ]);
    return P;
  })(React.Component),
  P = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(F);

exports.default = P;
