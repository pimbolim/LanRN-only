var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = V(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1834 = require('./1834'),
  module474 = require('./474'),
  module1528 = V(require('./1528')),
  module1503 = require('./1503'),
  module1224 = require('./1224');

function x(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (x = function (t) {
    return t ? l : n;
  })(t);
}

function V(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var l = x(n);
  if (l && l.has(t)) return l.get(t);
  var o = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
      else o[s] = t[s];
    }

  o.default = t;
  if (l) l.set(t, o);
  return o;
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

var S = (function (t) {
    module35.default(S, t);

    var module400 = S,
      x = R(),
      V = function () {
        var t,
          n = module34.default(module400);

        if (x) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function S(t) {
      var n;
      module24.default(this, S);
      (n = V.call(this, t)).state = {
        giftReceipt: n.giftReceipt,
        giftEnvelopeType: n.giftEnvelopeType,
        messageValue: n.messageValue,
        showMessage: !!n.messageValue,
      };
      n.renderGiftReceiptArea = n.renderGiftReceiptArea.bind(module39.default(n));
      n.renderGiftEnvelopeArea = n.renderGiftEnvelopeArea.bind(module39.default(n));
      n.renderCustomMessageArea = n.renderCustomMessageArea.bind(module39.default(n));
      n.messageInputHandler = n.messageInputHandler.bind(module39.default(n));
      n.navigateBackAction = n.navigateBackAction.bind(module39.default(n));
      return n;
    }

    module25.default(S, [
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
          return this.props.user.value || null;
        },
      },
      {
        key: 'giftReceipt',
        get: function () {
          return this.giftOptions.giftReceipt;
        },
      },
      {
        key: 'giftEnvelopeType',
        get: function () {
          return this.giftOptions.giftEnvelopeType;
        },
      },
      {
        key: 'messageValue',
        get: function () {
          return this.giftOptions.messageValue;
        },
      },
      {
        key: 'giftOptions',
        get: function () {
          return this.props.giftOptions.value;
        },
      },
      {
        key: 'clearGifts',
        get: function () {
          return this.params.clearGifts || null;
        },
      },
      {
        key: 'confirmAction',
        get: function () {
          return this.params.confirmAction || null;
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var t, module24, module25, module39, module35;
          return regeneratorRuntime.default.async(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state;
                    module25 = module24.giftReceipt;
                    module39 = module24.giftEnvelopeType;
                    module35 = module24.messageValue;
                    c.next = 4;
                    return regeneratorRuntime.default.awrap(
                      t(
                        module1224.setGiftOptions({
                          giftReceipt: module25,
                          giftEnvelopeType: module39,
                          messageValue: module35,
                        })
                      )
                    );

                  case 4:
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
        key: 'renderGiftReceiptArea',
        value: function () {
          var t = this,
            n = module1834.CStyles(),
            l = this.state.giftReceipt;
          return React.default.createElement(
            ReactNative.View,
            {
              style: [
                n.mainContainer,
                {
                  marginTop: module474.ms(20),
                },
              ],
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.areaContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.areaTextTitle,
                },
                module458.default.generic.giftReceipt
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.areaText,
                },
                module458.default.generic.giftReceiptText
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.switchAreaContainer,
              },
              React.default.createElement(ReactNative.Switch, {
                style: {
                  transform: [
                    {
                      scaleX: 1,
                    },
                    {
                      scaleY: 0.9,
                    },
                  ],
                },
                trackColor: {
                  false: module474.Color.white,
                  true: module474.Color.primary,
                },
                thumbColor: module474.Color.white,
                onValueChange: function () {
                  return l
                    ? t.setState({
                        giftReceipt: false,
                      })
                    : t.setState({
                        giftReceipt: true,
                      });
                },
                value: l,
              })
            )
          );
        },
      },
      {
        key: 'radioButtonPress',
        value: function (t) {
          this.setState({
            giftEnvelopeType: t.type,
          });
        },
      },
      {
        key: 'renderGiftEnvelopeArea',
        value: function () {
          var t = this,
            n = module1834.CStyles(),
            l = this.state.giftEnvelopeType,
            o = [
              {
                label: module458.default.generic.giftPerItem,
                value: true,
                type: 'item',
              },
              {
                label: module458.default.generic.giftPerOrder,
                value: false,
                type: 'order',
              },
            ];
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.mainContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: n.areaContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.areaTextTitle,
                },
                module458.default.generic.giftEnvelope
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: n.areaText,
                },
                module458.default.generic.giftEnvelopeText
              ),
              o.length &&
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      marginTop: module474.ms(15),
                    },
                  },
                  React.default.createElement(
                    module1528.default,
                    {
                      formHorizontal: false,
                      animation: true,
                    },
                    o.map(function (n, o) {
                      return React.default.createElement(
                        module1528.RadioButton,
                        {
                          labelHorizontal: true,
                          key: o,
                        },
                        React.default.createElement(module1528.RadioButtonInput, {
                          obj: n,
                          index: o,
                          isSelected: l === n.type,
                          onPress: function () {
                            return t.radioButtonPress(n);
                          },
                          borderWidth: 1,
                          buttonInnerColor: 'black',
                          buttonOuterColor: (n.value, n.value, 'black'),
                          buttonSize: module474.ms(12),
                          buttonOuterSize: module474.ms(20),
                          buttonStyle: {},
                          buttonWrapStyle: {
                            marginBottom: module474.ms(5),
                          },
                        }),
                        React.default.createElement(module1528.RadioButtonLabel, {
                          obj: n,
                          index: o,
                          labelHorizontal: true,
                          onPress: function () {
                            return t.radioButtonPress(n);
                          },
                          labelStyle: {
                            fontSize: module474.FontSize.s,
                            color: module474.Color.black,
                            marginTop: -module474.ms(6),
                            fontFamily: l === n.type ? module474.FontFamily.bold : module474.FontFamily.regular,
                          },
                          labelWrapStyle: {},
                        })
                      );
                    })
                  )
                )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: n.switchAreaContainer,
              },
              React.default.createElement(ReactNative.Switch, {
                style: {
                  transform: [
                    {
                      scaleX: 1,
                    },
                    {
                      scaleY: 0.9,
                    },
                  ],
                },
                trackColor: {
                  false: module474.Color.white,
                  true: module474.Color.primary,
                },
                thumbColor: module474.Color.white,
                value: !!l,
                onValueChange: function () {
                  if (l)
                    t.setState({
                      giftEnvelopeType: null,
                    });
                  else t.radioButtonPress(o[0]);
                },
              })
            )
          );
        },
      },
      {
        key: 'messageInputHandler',
        value: function (t) {
          if (!(t.length > 200))
            this.setState({
              messageValue: t,
            });
        },
      },
      {
        key: 'renderCustomMessageArea',
        value: function () {
          var t = this,
            n = module1834.CStyles(),
            l = this.state,
            o = l.messageValue,
            u = l.showMessage;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                width: '100%',
                paddingHorizontal: module474.ms(15),
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  n.mainContainer,
                  {
                    paddingHorizontal: 0,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.areaContainer,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.areaTextTitle,
                  },
                  module458.default.generic.message
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: n.areaText,
                  },
                  module458.default.generic.messageText
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: n.switchAreaContainer,
                },
                React.default.createElement(ReactNative.Switch, {
                  style: {
                    transform: [
                      {
                        scaleX: 1,
                      },
                      {
                        scaleY: 0.9,
                      },
                    ],
                  },
                  trackColor: {
                    false: module474.Color.white,
                    true: module474.Color.primary,
                  },
                  thumbColor: module474.Color.white,
                  onValueChange: function () {
                    return t.setState({
                      messageValue: '',
                      showMessage: !u,
                    });
                  },
                  value: u,
                })
              )
            ),
            React.default.createElement(
              ReactNative.View,
              null,
              u &&
                React.default.createElement(module472.FloatingInput, {
                  onChange: this.messageInputHandler,
                  value: o,
                  label: '',
                  keyboardType: 'default',
                  characterRestriction: 200,
                  multiline: true,
                  isLigthGrey: true,
                })
            )
          );
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return React.default.createElement(ReactNative.View, null, this.renderGiftReceiptArea(), this.renderGiftEnvelopeArea(), this.renderCustomMessageArea());
        },
      },
      {
        key: 'navigateBackAction',
        value: function () {
          var t, l, o, u;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    if (((t = this.props.navigation), (l = this.state), (o = l.giftReceipt), (u = l.giftEnvelopeType), o || u)) {
                      s.next = 8;
                      break;
                    }

                    s.next = 5;
                    return regeneratorRuntime.default.awrap(this.clearGifts());

                  case 5:
                    t.goBack();
                    s.next = 13;
                    break;

                  case 8:
                    if (((s.t0 = this.confirmAction), !s.t0)) {
                      s.next = 12;
                      break;
                    }

                    s.next = 12;
                    return regeneratorRuntime.default.awrap(this.confirmAction());

                  case 12:
                    t.goBack();

                  case 13:
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
        key: 'renderButtons',
        value: function () {
          var t = this,
            l = module1834.CStyles(),
            o = this.props.navigation,
            u = true,
            s = this.state,
            c = s.giftReceipt,
            f = s.giftEnvelopeType,
            h = s.messageValue;
          if (!(c === this.giftReceipt && f === this.giftEnvelopeType && h === this.messageValue)) u = false;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                justifyContent: 'flex-end',
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: l.buttonContainer,
              },
              !u &&
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: l.button,
                    onPress: function () {
                      return regeneratorRuntime.default.async(
                        function (l) {
                          for (;;)
                            switch ((l.prev = l.next)) {
                              case 0:
                                l.next = 2;
                                return regeneratorRuntime.default.awrap(t.navigateBackAction());

                              case 2:
                                return l.abrupt('return', l.sent);

                              case 3:
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
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: l.buttonText,
                    },
                    module458.default.generic.done.toUpperCase()
                  )
                ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  onPress: function () {
                    return o.goBack();
                  },
                  style: [
                    l.button,
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
                      l.buttonText,
                      {
                        color: module474.Color.primary,
                      },
                    ],
                  },
                  module458.default.generic.cancel.toUpperCase()
                )
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1834.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              edges: ['left', 'right'],
              style: t.root,
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.generic.giftEnvelope,
            }),
            React.default.createElement(
              module1503.KeyboardAwareScrollView,
              {
                contentContainerStyle: {
                  flex: 0.7,
                },
              },
              this.renderContent()
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 0.3,
                },
              },
              this.renderButtons()
            )
          );
        },
      },
    ]);
    return S;
  })(React.Component),
  A = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      giftOptions: t.giftOptions,
    };
  })(S);

exports.default = A;
