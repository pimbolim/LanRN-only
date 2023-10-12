var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
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
    var l = L(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, c, u);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1522 = require('./1522'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module1278 = require('./1278'),
  module1262 = require('./1262');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (L = function (t) {
    return t ? l : n;
  })(t);
}

function b() {
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

var R = function (t) {
    return "Voucher' + " + t.DataRegisto + '+ ' + t.NOperacao;
  },
  I = function (t) {
    return "Credit' + " + t.DataRegisto + ' + ' + t.NOperacao;
  },
  O = (function (t) {
    module35.default(F, t);

    var module400 = F,
      L = b(),
      O = function () {
        var t,
          n = module34.default(module400);

        if (L) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function F(t) {
      var n;
      module24.default(this, F);
      (n = O.call(this, t)).state = {
        loaded: false,
        voucherList: [],
        creditsList: [],
        openedVouchers: [],
        openedCredits: [],
      };
      n.renderVoucherList = n.renderVoucherList.bind(module39.default(n));
      n.renderVoucherListItem = n.renderVoucherListItem.bind(module39.default(n));
      n.renderCreditListItem = n.renderCreditListItem.bind(module39.default(n));
      return n;
    }

    module25.default(F, [
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t,
            l = this;
          return regeneratorRuntime.default.async(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    t = this.props.navigation;
                    this._onFocus = t.addListener('focus', function () {
                      l.getData();
                    });

                  case 2:
                  case 'end':
                    return n.stop();
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
        key: 'getData',
        value: function () {
          var t, o, s, c, u, f, y, h;
          return regeneratorRuntime.default.async(
            function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    t = this.props.dispatch;
                    p.prev = 1;
                    t(module1224.setLoader(true));
                    p.next = 5;
                    return regeneratorRuntime.default.awrap(
                      Promise.all([
                        module1226.API.get({
                          url: module1226.Endpoints.creditsVouchers(this.user.IdCliente),
                          axiosConfig: {
                            callback: this.getData,
                          },
                        }),
                      ])
                    );

                  case 5:
                    o = p.sent;
                    s = module12.default(o, 1);
                    c = s[0];
                    u = c.data;
                    f = u.CreditoDisponivel;
                    y = u.Creditos;
                    h = u.Vales;
                    this.setState({
                      loaded: true,
                      creditsList: y,
                      voucherList: h,
                      creditAvailable: f,
                    });
                    if (c.ok) t(module1224.setLoader(false));
                    else {
                      t(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }
                    p.next = 17;
                    break;

                  case 13:
                    p.prev = 13;
                    p.t0 = p.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 17:
                  case 'end':
                    return p.stop();
                }
            },
            null,
            this,
            [[1, 13]],
            Promise
          );
        },
      },
      {
        key: 'renderAvailableCredit',
        value: function () {
          var t = module1522.CStyles(),
            n = this.state.creditAvailable;
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.availableCreditContainer,
            },
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.bigText,
                    {
                      fontSize: module474.FontSize.xl,
                      textAlign: 'center',
                    },
                  ],
                },
                module458.default.checkCreditsVouchers.availableCredit
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.hugeText,
                    {
                      textAlign: 'center',
                      marginTop: module474.ms(5),
                    },
                  ],
                },
                module1262.priceFormat(n)
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  marginTop: module474.ms(15),
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.mediumText,
                    {
                      textAlign: 'center',
                    },
                  ],
                },
                module458.default.profile.creditsVoucherText1
              )
            ),
            React.default.createElement(
              ReactNative.View,
              null,
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.mediumText,
                    {
                      textAlign: 'center',
                    },
                  ],
                },
                module458.default.profile.creditsVoucherText2
              )
            )
          );
        },
      },
      {
        key: 'voucherItemPressHandler',
        value: function (t) {
          var n = this.state.openedVouchers,
            l = JSON.parse(JSON.stringify(n)),
            o = l.findIndex(function (n) {
              return t.DataRegisto === n.DataRegisto && t.NOperacao === n.NOperacao;
            });
          if (-1 !== o) l.splice(o, 1);
          else l.push(t);
          this.setState({
            openedVouchers: l,
          });
        },
      },
      {
        key: 'renderCreditListItem',
        value: function (t, n) {
          var l = this,
            o = t.item,
            s = this.state.openedVouchers,
            c = module1522.CStyles(),
            u = s.find(function (t) {
              return t.DataRegisto === o.DataRegisto;
            }),
            f = module1278.DateTime.fromISO(o.DataRegisto).toFormat('dd-MM-yyyy'),
            y = o.Valor > 0 ? module1262.priceFormat(o.Valor) : module1262.priceFormat(0),
            x = o.Valor < 0 ? module1262.priceFormat(o.Valor) : module1262.priceFormat(0);
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                l.voucherItemPressHandler(o);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  c.voucherItemContainer,
                  {
                    height: u ? module474.ms(100) : module474.ms(50),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    c.textRow,
                    {
                      marginBottom: module474.ms(10),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: c.smallText,
                  },
                  'N\xba ',
                  o.NOperacao
                ),
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
                      style: [
                        c.mediumText,
                        {
                          color: 'grey',
                        },
                      ],
                    },
                    f
                  ),
                  React.default.createElement(module472.Icon, {
                    name: 'anterior',
                    size: module474.ms(16),
                    style: {
                      transform: [
                        {
                          rotate: u ? '90deg' : '270deg',
                        },
                      ],
                      marginLeft: module474.ms(15),
                    },
                  })
                )
              ),
              u &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        c.textRow,
                        {
                          marginBottom: module474.ms(10),
                          marginTop: module474.ms(5),
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: c.smallText,
                      },
                      module458.default.checkCreditsVouchers.credit
                    ),
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
                          style: c.smallText,
                        },
                        y
                      )
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        c.textRow,
                        {
                          marginBottom: module474.ms(10),
                          marginTop: module474.ms(5),
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: c.smallText,
                      },
                      module458.default.checkCreditsVouchers.discount
                    ),
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
                          style: c.smallText,
                        },
                        x
                      )
                    )
                  )
                )
            )
          );
        },
      },
      {
        key: 'renderVoucherListItem',
        value: function (t, n) {
          var l = this,
            o = t.item,
            s = this.state.openedVouchers,
            c = o.DataRegisto,
            u = o.Valor,
            f = o.PercentagemDesconto,
            y = o.NOperacaoDescontado,
            x = o.DataDescontado,
            w = module1522.CStyles(),
            D = s.find(function (t) {
              return o.DataRegisto === t.DataRegisto && o.NOperacao === t.NOperacao;
            }),
            L = module1278.DateTime.fromISO(c).toFormat('dd-MM-yyyy'),
            b = x ? module1278.DateTime.fromISO(x).toFormat('dd-MM-yyyy') : null;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return l.voucherItemPressHandler(o);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  w.voucherItemContainer,
                  {
                    height: D && b ? module474.ms(120) : D ? module474.ms(100) : module474.ms(50),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    w.textRow,
                    {
                      marginBottom: module474.ms(10),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: w.smallText,
                  },
                  'N\xba ',
                  null == o ? undefined : o.NOperacao
                ),
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
                      style: [
                        w.mediumText,
                        {
                          color: 'grey',
                        },
                      ],
                    },
                    L
                  ),
                  React.default.createElement(module472.Icon, {
                    name: 'anterior',
                    size: module474.ms(16),
                    style: {
                      transform: [
                        {
                          rotate: D ? '90deg' : '270deg',
                        },
                      ],
                      marginLeft: module474.ms(15),
                    },
                  })
                )
              ),
              !!D &&
                React.default.createElement(
                  React.default.Fragment,
                  null,
                  !isNaN(Number(u)) &&
                    0 != u &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          w.textRow,
                          {
                            marginRight: module474.ms(30),
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: w.mediumText,
                        },
                        module458.default.checkCreditsVouchers.value
                      ),
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
                            style: w.mediumText,
                          },
                          module1262.priceFormat(u)
                        )
                      )
                    ),
                  f > 0 &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          w.textRow,
                          {
                            marginRight: module474.ms(30),
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: w.mediumText,
                        },
                        module458.default.checkCreditsVouchers.percentage
                      ),
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
                            style: w.mediumText,
                          },
                          f,
                          '%'
                        )
                      )
                    ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        w.textRow,
                        {
                          marginRight: module474.ms(30),
                          marginTop: module474.ms(5),
                        },
                      ],
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: w.mediumText,
                      },
                      module458.default.checkCreditsVouchers.discounted
                    ),
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
                          style: w.mediumText,
                        },
                        y
                      )
                    )
                  ),
                  b &&
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          w.textRow,
                          {
                            marginRight: module474.ms(30),
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: w.mediumText,
                        },
                        module458.default.checkCreditsVouchers.date
                      ),
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
                            style: w.mediumText,
                          },
                          b
                        )
                      )
                    )
                )
            )
          );
        },
      },
      {
        key: 'renderCreditList',
        value: function () {
          var t = this,
            n = this.state.creditsList;
          return React.default.createElement(ReactNative.FlatList, {
            key: 'availableCreditList',
            keyExtractor: I,
            style: {
              marginTop: module474.ms(30),
            },
            data: n,
            showsVerticalScrollIndicator: false,
            scrollEnabled: false,
            renderItem: function (n, l) {
              return t.renderCreditListItem(n, l);
            },
          });
        },
      },
      {
        key: 'renderVoucherList',
        value: function () {
          var t = this,
            n = this.state,
            l = n.voucherList,
            o = n.creditsList,
            s = l.concat(o).sort(function (t, n) {
              return new Date(n.DataRegisto).getTime() - new Date(t.DataRegisto).getTime();
            });
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginTop: module474.ms(20),
              },
            },
            React.default.createElement(ReactNative.FlatList, {
              key: 'availableVoucherList',
              keyExtractor: R,
              style: {
                marginTop: module474.ms(10),
              },
              data: s,
              showsVerticalScrollIndicator: false,
              scrollEnabled: false,
              renderItem: function (n, l) {
                return t.renderVoucherListItem(n, l);
              },
            })
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              showsVerticalScrollIndicator: false,
            },
            this.renderAvailableCredit(),
            this.renderVoucherList()
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1522.CStyles();
          return this.state.loaded
            ? React.default.createElement(
                React.default.Fragment,
                null,
                React.default.createElement(module472.Header, {
                  back: true,
                  title: module458.default.profile.creditsAndVouchers,
                }),
                React.default.createElement(
                  module472.Wrapper,
                  {
                    style: t.root,
                  },
                  this.renderContent()
                )
              )
            : React.default.createElement(ReactNative.View, null);
        },
      },
    ]);
    return F;
  })(React.Component),
  F = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(O);

exports.default = F;
