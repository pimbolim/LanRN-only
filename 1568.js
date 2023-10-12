var module24 = require('./24'),
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
    var l = k(n);
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
  module1569 = require('./1569'),
  module1570 = require('./1570'),
  module474 = require('./474'),
  module1278 = require('./1278'),
  module1580 = require('./1580');

function k(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (k = function (t) {
    return t ? l : n;
  })(t);
}

function x() {
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

var T = ReactNative.Dimensions.get('window').width,
  V = (function (t) {
    module35.default(I, t);

    var module400 = I,
      k = x(),
      V = function () {
        var t,
          n = module34.default(module400);

        if (k) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function I(t) {
      var l;
      module24.default(this, I);
      (l = V.call(this, t)).cards = [];
      l.state = {
        loaded: false,
        cards: [],
        showCards: false,
      };
      l.renderContent = l.renderContent.bind(module39.default(l));
      l.renderCardItem = l.renderCardItem.bind(module39.default(l));
      l.onChangeCard = l.onChangeCard.bind(module39.default(l));
      return l;
    }

    module25.default(I, [
      {
        key: 'onChangeCard',
        value: function (t, n) {
          var l = this.state.cards,
            o = JSON.parse(JSON.stringify(l));
          o.splice(n, 1, t);
          this.setState({
            cards: o,
          });
        },
      },
      {
        key: 'setCardFields',
        value: function (t, n, l, o, s) {
          var c,
            u = module1278.DateTime.fromISO(o + '-' + l).toFormat('LL/yy');
          if (!(null == (c = this.card)))
            c.setValues({
              name: t,
              number: n,
              expiry: u,
              cvc: s,
            });
        },
      },
      {
        key: 'scanCard',
        value: function () {
          var t = this;

          try {
            module1580.CardIOUtilities.preload();
          } catch (t) {}

          var n = this.state.scanCode;
          module1580.CardIOModule.scanCard({
            useCardIOLogo: true,
            hideCardIOLogo: true,
            usePaypalActionbarIcon: false,
            suppressManualEntry: true,
            suppressConfirmation: true,
          })
            .then(function (l) {
              t.setCardFields(l.cardholderName, l.cardNumber, l.expiryMonth, l.expiryYear, l.cvv);
              t.setState({
                scanCode: n + 1,
              });
            })
            .catch(function () {
              t.setState({
                scanCode: n + 1,
              });
            });
        },
      },
      {
        key: 'renderCardItem',
        value: function (t) {
          var n = this,
            l = module1569.CStyles(),
            o = t.index;
          return React.default.createElement(module472.CreditCardInput, {
            key: 'credit-card-input_' + o,
            ref: function (t) {
              return (n.cards[o] = t);
            },
            requiresCVC: true,
            backgroundColor: module474.Color.primary,
            onChange: this.onChangeCard,
            scanCard: this.scanCard,
            style: l,
            scrollDisabled: true,
            lockInputs: true,
          });
        },
      },
      {
        key: 'renderHasCardsContent',
        value: function () {
          var t = module1569.CStyles(),
            n = this.state.cards;
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              key: 'creditCardsScrollView',
              showsVerticalScrollIndicator: false,
              contentContainerStyle: t.cardsContainer,
            },
            React.default.createElement(module1570.default, {
              ref: 'carouselCards',
              data: 0 === n.length ? [{}] : n,
              layout: 'default',
              renderItem: this.renderCardItem,
              sliderWidth: T,
              itemWidth: 0.85 * T,
              removeClippedSubviews: false,
              horizontal: true,
              loop: true,
              loopClonesPerSide: 1,
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: t.buttonsContainer,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.button,
                    {
                      backgroundColor: 'white',
                      borderWidth: 1,
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.buttonText,
                      {
                        color: 'black',
                      },
                    ],
                  },
                  module458.default.generic.remove
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.button,
                    {
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.buttonText,
                  },
                  module458.default.generic.cancel
                )
              )
            )
          );
        },
      },
      {
        key: 'renderHasNoCardsContent',
        value: function () {
          var t = module1569.CStyles();
          this.state.cards;
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              key: 'creditCardsScrollView',
              showsVerticalScrollIndicator: false,
              contentContainerStyle: t.cardsContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.veryBigTextContaner,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.veryBigText,
                },
                module458.default.payments.creditCardsManagementText
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  width: '85%',
                },
              },
              React.default.createElement(module472.CreditCardInput, {
                key: 'credit-card-input_Disabled',
                requiresCVC: true,
                backgroundColor: module474.Color.primary,
                onChange: this.onChangeCard,
                scanCard: this.scanCard,
                style: t,
                scrollDisabled: true,
                lockInputs: true,
                hideForm: true,
              })
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [t.noCardsTextContainer, t.topBorder],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.regularText,
                    {
                      fontSize: module474.FontSize.s,
                    },
                  ],
                },
                module458.default.payments.noCardsYetText1
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.semiBoldText,
                    {
                      fontSize: module474.FontSize.s,
                    },
                  ],
                },
                module458.default.payments.noCardsYetText2
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  t.buttonsContainer,
                  {
                    marginTop: module474.ms(25),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.button,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.buttonText,
                  },
                  module458.default.generic.cancel
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    t.button,
                    {
                      backgroundColor: 'white',
                      borderWidth: 1,
                      marginTop: module474.ms(15),
                    },
                  ],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.buttonText,
                      {
                        color: 'black',
                      },
                    ],
                  },
                  module458.default.generic.remove
                )
              )
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          module1569.CStyles();
          var t = this.state,
            n = t.showCards;
          t.cards;
          return n ? this.renderHasCardsContent() : this.renderHasNoCardsContent();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1569.CStyles(),
            n = this.state;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.managePaymentCards,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['right', 'left'],
                style: t.mainRoot,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return I;
  })(React.Component),
  I = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(V);

exports.default = I;
