var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  y = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = D(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1615 = require('./1615'),
  module474 = require('./474'),
  module1224 = require('./1224'),
  module1226 = require('./1226'),
  module431 = require('./431'),
  module1616 = require('./1616'),
  module1278 = require('./1278'),
  module1497 = require('./1497');

function D(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (D = function (t) {
    return t ? l : n;
  })(t);
}

function F() {
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

var L = function (t) {
    return "Points' + " + t.IdPontoCartao;
  },
  V = (function (t) {
    module35.default(z, t);

    var module400 = z,
      D = F(),
      V = function () {
        var t,
          n = module34.default(module400);

        if (D) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function z(t) {
      var n;
      module24.default(this, z);
      (n = V.call(this, t)).state = {
        shouldRender: false,
        step: 0,
        idCCNumber: '',
        idPassport: '',
        ccDigitControl: '',
        cellPhone: '',
        laCardNumber: '',
        idCCNumberAtt: '',
        idPassportAtt: '',
        ccDigitControlAtt: '',
        cellPhoneAtt: '',
        laCardNumberAtt: '',
        currentPoints: 3e3,
        maxPoints: 15e3,
        isSilver: false,
        isGold: false,
        keepGoldAccumulatedPoints: 0,
        keepGoldMissingPoints: 0,
        keepSilverAccumulatedPoints: 0,
        keepSilverMissingPoints: 0,
        toGoldAccumulatedPoints: 0,
        toGoldMissingPoints: 0,
        toSilverAccumulatedPoints: 0,
        toSilverMissingPoints: 0,
        accumulatedPoints: 0,
        discountedPoints: 0,
        availablePoints: 0,
        visaAccumulatedPoints: 0,
        visaDiscountedPoints: 0,
        visaAvailablePoints: 0,
        showPointsHistory: false,
        overallWidth: ReactNative.Dimensions.get('window').width,
        showBottomSheet: false,
        pointsList: [],
        birthDateAtt: '',
        birthDateCre: '',
      };
      n.renderContent = n.renderContent.bind(module39.default(n));
      n.getCardData = n.getCardData.bind(module39.default(n));
      n.createLACard = n.createLACard.bind(module39.default(n));
      n.attachLACard = n.attachLACard.bind(module39.default(n));
      n.renderLaCardLoyaltyPointsSheet = n.renderLaCardLoyaltyPointsSheet.bind(module39.default(n));
      n.renderStep2NewUpperArea = n.renderStep2NewUpperArea.bind(module39.default(n));
      n.renderPointsListItem = n.renderPointsListItem.bind(module39.default(n));
      return n;
    }

    module25.default(z, [
      {
        key: 'laCard',
        get: function () {
          return this.props.user.value.NCartaoLanidor || '';
        },
      },
      {
        key: 'LACardIdNumber',
        get: function () {
          return this.props.user.value.LACARD_NumIdentificacao || '';
        },
      },
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
                    if (this.laCard) {
                      t.next = 4;
                      break;
                    }

                    this.setState({
                      step: 1,
                      shouldRender: true,
                    });
                    t.next = 6;
                    break;

                  case 4:
                    t.next = 6;
                    return regeneratorRuntime.default.awrap(this.getCardData());

                  case 6:
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
        key: 'attachLACard',
        value: function () {
          var t, module12, module24, module25, module39, module35, module37, module34, y, h, C, v;
          return regeneratorRuntime.default.async(
            function (b) {
              for (;;)
                switch ((b.prev = b.next)) {
                  case 0:
                    t = this.props;
                    module12 = t.dispatch;
                    module24 = this.state;
                    module25 = module24.idCCNumberAtt;
                    module39 = module24.cellPhoneAtt;
                    module35 = module24.laCardNumberAtt;
                    module37 = module24.idPassportAtt;
                    module34 = module24.birthDateAtt;
                    b.prev = 2;
                    module12(module1224.setLoader(true));
                    y = {};
                    y = {};
                    if (module39) y.telemovel = module39;
                    if (module25) y.numIdentificacao = module25;
                    if (module35) y.ncartaoLA = module35;
                    if (module37) y.numIdentificacao = module37;
                    if (module34) y.DataNascimento = module34;
                    b.next = 13;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.attachLACard(this.user.IdCliente),
                        data: y,
                        axiosConfig: {
                          callback: this.attachLACard,
                        },
                      })
                    );

                  case 13:
                    if ((h = b.sent).ok && h.data.success) {
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: h.data.message,
                      });
                      this.props.navigation.goBack();
                    } else {
                      module12(module1224.setLoader(false));

                      if (401 !== h.status) {
                        v = module458.default.error.generic;
                        if (null != h && null != (C = h.data) && C.message) v = h.data.message;
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: v,
                        });
                      }
                    }

                    module12(module1224.setLoader(false));
                    b.next = 22;
                    break;

                  case 18:
                    b.prev = 18;
                    b.t0 = b.catch(2);
                    module12(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 22:
                  case 'end':
                    return b.stop();
                }
            },
            null,
            this,
            [[2, 18]],
            Promise
          );
        },
      },
      {
        key: 'createLACard',
        value: function () {
          var t, module12, module24, module25, module39, module35, module37, module34, y, ReactNative, module400, module1615, b;
          return regeneratorRuntime.default.async(
            function (w) {
              for (;;)
                switch ((w.prev = w.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module12 = this.user;
                    module24 = module12.Nome;
                    module25 = module12.Email;
                    module39 = module12.DataNascimento;
                    module35 = this.state;
                    module37 = module35.idCCNumber;
                    module34 = module35.cellPhone;
                    y = module35.birthDateCre;
                    ReactNative = module35.idPassport;
                    module400 = module35.ccDigitControl;
                    w.prev = 3;
                    t(module1224.setLoader(true));
                    module1615 = {};
                    (module1615 = {
                      Nome: module24,
                      Email: module25,
                      Telemovel: module34,
                      CartaoCidadao_IdCivil: module37 || ReactNative,
                      PoliticaPriv: true,
                    }).DataNascimento = module39 || module1278.DateTime.fromFormat(y, 'dd-MM-yyyy').toFormat('yyyy-MM-dd');
                    if (module37) module1615.CartaoCidadao_CKAFCK = module400;
                    w.next = 11;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.createLACard(this.user.IdCliente),
                        data: module1615,
                        axiosConfig: {
                          callback: this.createLACard,
                        },
                      })
                    );

                  case 11:
                    if ((b = w.sent).ok && b.data.success) {
                      module472.DropDown.alert({
                        type: 'success',
                        title: module458.default.generic.success,
                        message: b.data.message,
                      });
                      this.props.navigation.goBack();
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== b.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: b.data.message,
                        });
                    }

                    t(module1224.setLoader(false));
                    w.next = 20;
                    break;

                  case 16:
                    w.prev = 16;
                    w.t0 = w.catch(3);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 20:
                  case 'end':
                    return w.stop();
                }
            },
            null,
            this,
            [[3, 16]],
            Promise
          );
        },
      },
      {
        key: 'getPointsList',
        value: function () {
          var t,
            l,
            o,
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
                        url: module1226.Endpoints.getLaCardPointsList(this.laCard, this.LACardIdNumber),
                        axiosConfig: {
                          callback: this.getPointsList,
                        },
                      })
                    );

                  case 5:
                    if ((l = c.sent).ok) {
                      t(module1224.setLoader(false));
                      if (l.data.length)
                        this.setState(
                          {
                            pointsList: l.data,
                          },
                          function () {
                            return u.setState({
                              showPointsHistory: true,
                            });
                          }
                        );
                    } else {
                      t(module1224.setLoader(false));
                      s = module458.default.error.generic;
                      if (null != l && null != (o = l.data) && o.message) s = l.data.message;
                      if (401 !== l.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: s,
                        });
                    }

                    c.next = 13;
                    break;

                  case 9:
                    c.prev = 9;
                    c.t0 = c.catch(1);
                    t(module1224.setLoader(false));
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
        key: 'getCardData',
        value: function () {
          var t, o, s, u, c, f, p, y, h, C, v, b, w, T, A, k, D, F, L, V, z;
          return regeneratorRuntime.default.async(
            function (I) {
              for (;;)
                switch ((I.prev = I.next)) {
                  case 0:
                    t = this.props.dispatch;
                    I.prev = 1;
                    t(module1224.setLoader(true));
                    I.next = 5;
                    return regeneratorRuntime.default.awrap(
                      Promise.all([
                        module1226.API.get({
                          url: module1226.Endpoints.getLaCardPoints(this.laCard, this.LACardIdNumber),
                          axiosConfig: {
                            callback: this.getCardData,
                          },
                        }),
                      ])
                    );

                  case 5:
                    o = I.sent;
                    s = module12.default(o, 2);
                    u = s[0];

                    if (u.ok) {
                      t(module1224.setLoader(false));
                      c = u.data;
                      f = c.ClienteGold;
                      p = c.ClienteSilver;
                      c.DataGold;
                      c.DataSilver;
                      y = c.ManterGold_PontosAcumulados;
                      h = c.ManterGold_PontosEmFalta;
                      C = c.ManterSilver_PontosAcumulados;
                      v = c.ManterSilver_PontosEmFalta;
                      b = c.ParaGold_PontosAcumulados;
                      w = c.ParaGold_PontosEmFalta;
                      T = c.ParaSilver_PontosAcumulados;
                      A = c.ParaSilver_PontosEmFalta;
                      k = c.PontosAcumulados;
                      D = c.PontosDescontados;
                      F = c.PontosDisponiveis;
                      L = c.Visa_PontosAcumulados;
                      V = c.Visa_PontosDescontados;
                      z = c.Visa_PontosDisponiveis;
                      this.setState({
                        step: 2,
                        shouldRender: true,
                        isSilver: p,
                        isGold: f,
                        keepGoldAccumulatedPoints: y,
                        keepGoldMissingPoints: h,
                        keepSilverAccumulatedPoints: C,
                        keepSilverMissingPoints: v,
                        toGoldAccumulatedPoints: b,
                        toGoldMissingPoints: w,
                        toSilverAccumulatedPoints: T,
                        toSilverMissingPoints: A,
                        accumulatedPoints: k,
                        discountedPoints: D,
                        availablePoints: F,
                        visaAccumulatedPoints: L,
                        visaDiscountedPoints: V,
                        visaAvailablePoints: z,
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== u.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    I.next = 16;
                    break;

                  case 12:
                    I.prev = 12;
                    I.t0 = I.catch(1);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 16:
                  case 'end':
                    return I.stop();
                }
            },
            null,
            this,
            [[1, 12]],
            Promise
          );
        },
      },
      {
        key: 'convertDateToString',
        value: function (t, n) {
          if ('att' === n)
            this.setState({
              birthDateAtt: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
            });
          else
            this.setState({
              birthDateCre: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
            });
        },
      },
      {
        key: 'renderSeparator',
        value: function () {
          var t = module1615.CStyles();
          return y.default.createElement(ReactNative.View, {
            style: t.separator,
          });
        },
      },
      {
        key: 'renderStep2NewUpperArea',
        value: function () {
          var t = module1615.CStyles(),
            n = this.state,
            l = n.availablePoints,
            o = 6e3 - l,
            s = 12e3 - l,
            u = false,
            c = 0,
            f = 0;

          if (l >= 12e3) {
            u = true;
            c = 100;
            f = Math.floor(l / 12e3);
          } else c = (l / 100).toFixed(0);

          return y.default.createElement(
            ReactNative.View,
            {
              style: t.pointsArea,
            },
            y.default.createElement(
              ReactNative.View,
              {
                style: t.pointsUpperArea,
              },
              y.default.createElement(
                ReactNative.View,
                {
                  style: t.pointsUpperLeftArea,
                },
                y.default.createElement(
                  module1616.AnimatedCircularProgress,
                  {
                    size: module474.ms(75),
                    width: module474.ms(4),
                    fill: c,
                    tintColor: module474.Color.black,
                    duration: 0,
                    rotation: 210,
                    arcSweepAngle: 300,
                    onAnimationComplete: function () {},
                    backgroundColor: module474.Color.grayBackground,
                  },
                  function (t) {
                    return y.default.createElement(
                      ReactNative.View,
                      {
                        style: {
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      },
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            color: 'grey',
                            fontFamily: module474.FontFamily.bold,
                            fontSize: module474.FontSize.xl,
                          },
                        },
                        '10 \u20ac'
                      )
                    );
                  }
                )
              ),
              y.default.createElement(
                ReactNative.View,
                {
                  style: t.pointsUpperRightArea,
                },
                y.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.semiBold,
                      fontSize: module474.FontSize.xl,
                      color: module474.Color.black,
                    },
                  },
                  l + ' ' + module458.default.generic.points
                ),
                u
                  ? y.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          t.pointsUpperRightAreaHorizontalTextContainer,
                          {
                            marginTop: module474.ms(5),
                          },
                        ],
                      },
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.textLightSBlack,
                        },
                        module458.default.lanidorCard.youHave
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.textRegularSBlack,
                        },
                        ' ',
                        f,
                        ' '
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.textLightSBlack,
                        },
                        module458.default.lanidorCard.vouchersAvailable
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: t.textRegularSBlack,
                        },
                        '10\u20ac'
                      )
                    )
                  : y.default.createElement(
                      y.default.Fragment,
                      null,
                      y.default.createElement(
                        ReactNative.View,
                        {
                          style: [
                            t.pointsUpperRightAreaHorizontalTextContainer,
                            {
                              marginTop: module474.ms(5),
                            },
                          ],
                        },
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textRegularSBlack,
                          },
                          o,
                          ' '
                        ),
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textLightSBlack,
                          },
                          module458.default.profile.pointsMissingTo
                        ),
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textRegularSBlack,
                          },
                          ' 5\u20ac'
                        )
                      ),
                      y.default.createElement(
                        ReactNative.View,
                        {
                          style: t.pointsUpperRightAreaHorizontalTextContainer,
                        },
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textRegularSBlack,
                          },
                          s,
                          ' '
                        ),
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textLightSBlack,
                          },
                          module458.default.profile.pointsMissingTo
                        ),
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: t.textRegularSBlack,
                          },
                          ' 10\u20ac'
                        )
                      )
                    )
              )
            ),
            y.default.createElement(
              ReactNative.View,
              {
                style: t.pointsLowerArea,
              },
              y.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    fontFamily: module474.FontFamily.italic,
                    fontSize: module474.FontSize.s,
                    color: module474.Color.black,
                  },
                },
                module458.default.formatString(module458.default.profile.pointsStep2Text1, '12000', '10')
              )
            )
          );
        },
      },
      {
        key: 'renderAttachCard',
        value: function () {
          var t = this,
            n = module1615.CStyles(),
            l = this.state,
            o = l.idCCNumberAtt,
            s = l.cellPhoneAtt,
            u = l.idPassportAtt,
            c = l.laCardNumberAtt,
            f = l.overallWidth,
            p = l.birthDateAtt;

          if (p) {
            var C = p.split('-');
            new Date(+C[2], C[1] - 1, +C[0]);
          }

          var x = !!(o || s || u || c);
          return y.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            y.default.createElement(
              ReactNative.Text,
              {
                style: [
                  n.standardText,
                  {
                    fontSize: module474.FontSize.l,
                    marginTop: module474.ms(40),
                  },
                ],
              },
              module458.default.profile.lanidorCardText1
            ),
            y.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                  marginTop: module474.ms(10),
                },
              },
              y.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                  },
                },
                y.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {},
                  label: module458.default.generic.idNumber,
                  value: o,
                  onChange: function (n) {
                    return t.setState({
                      idCCNumberAtt: n,
                    });
                  },
                })
              )
            ),
            y.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.cellPhone,
              value: s,
              onChange: function (n) {
                return t.setState({
                  cellPhoneAtt: n,
                });
              },
              keyboardType: 'numeric',
            }),
            y.default.createElement(module472.FloatingInput, {
              label: module458.default.generic.laCard,
              value: c,
              keyboardType: 'numeric',
              onChange: function (n) {
                return t.setState({
                  laCardNumberAtt: n,
                });
              },
            }),
            y.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  t.attachLACard();
                },
                disabled: !x,
                style: [
                  n.button,
                  {
                    width: f - module474.ms(40),
                  },
                  !x && {
                    opacity: 0.5,
                  },
                ],
              },
              y.default.createElement(
                ReactNative.Text,
                {
                  style: n.buttonText,
                },
                module458.default.generic.createCard
              )
            )
          );
        },
      },
      {
        key: 'renderCreateCard',
        value: function () {
          var t,
            n,
            l = this,
            o = module1615.CStyles(),
            s = this.state,
            u = s.idCCNumber,
            c = s.ccDigitControl,
            f = s.cellPhone,
            p = s.idPassport,
            C = s.overallWidth,
            x = s.showDatePickerCre,
            E = s.colorScheme,
            w = s.birthDateCre;

          if (w) {
            var T = w.split('-');
            n = new Date(+T[2], T[1] - 1, +T[0]);
          }

          var A = !!(u || f || p || w);
          return y.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            y.default.createElement(
              ReactNative.Text,
              {
                style: [
                  o.standardText,
                  {
                    fontSize: module474.FontSize.l,
                    marginTop: module474.ms(40),
                  },
                ],
              },
              module458.default.authentication.subscribeLaCardProgram
            ),
            y.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                  marginTop: module474.ms(10),
                },
              },
              y.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                  },
                },
                y.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {},
                  label: module458.default.generic.idNumber,
                  value: u,
                  onChange: function (t) {
                    return l.setState({
                      idCCNumber: t,
                    });
                  },
                })
              ),
              y.default.createElement(
                ReactNative.View,
                {
                  style: {
                    marginLeft: module474.ms(10),
                    flex: 0.3,
                  },
                },
                y.default.createElement(module472.FloatingInput, {
                  containerExtraStyle: {},
                  label: '',
                  value: c,
                  onChange: function (t) {
                    return l.setState({
                      ccDigitControl: t,
                    });
                  },
                })
              )
            ),
            !(null != (t = this.user) && t.DataNascimento) &&
              y.default.createElement(
                y.default.Fragment,
                null,
                y.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      return l.setState({
                        showDatePickerCre: true,
                      });
                    },
                  },
                  y.default.createElement(
                    ReactNative.View,
                    {
                      pointerEvents: 'none',
                    },
                    y.default.createElement(module472.FloatingInput, {
                      label: module458.default.authentication.birthDate,
                      value: w,
                      disabled: true,
                      onChange: function (t) {
                        return l.setState({
                          birthDateCre: t,
                        });
                      },
                    })
                  )
                ),
                y.default.createElement(module1497.default, {
                  mode: 'date',
                  modal: true,
                  textColor: 'dark' === E ? 'white' : 'black',
                  open: x,
                  date: w ? new Date(n) : new Date(),
                  onConfirm: function (t) {
                    l.setState(
                      {
                        showDatePickerCre: false,
                      },
                      function () {
                        return l.convertDateToString(t, 'cre');
                      }
                    );
                  },
                  onCancel: function () {
                    l.setState({
                      showDatePickerCre: false,
                    });
                  },
                })
              ),
            y.default.createElement(module472.FloatingInput, {
              label: module458.default.authentication.cellPhone,
              value: f,
              onChange: function (t) {
                return l.setState({
                  cellPhone: t,
                });
              },
              keyboardType: 'numeric',
            }),
            y.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  l.createLACard();
                },
                disabled: !A,
                style: [
                  o.button,
                  {
                    width: C - module474.ms(40),
                  },
                  !A && {
                    opacity: 0.5,
                  },
                ],
              },
              y.default.createElement(
                ReactNative.Text,
                {
                  style: o.buttonText,
                },
                module458.default.generic.associateCard
              )
            )
          );
        },
      },
      {
        key: 'renderPointsListItem',
        value: function (t, n) {
          var l = t.item,
            o = module1615.CStyles(),
            s = this.state.showPointsHistory,
            u = l.Pontos,
            c = l.DescTipoRegisto;
          return y.default.createElement(
            ReactNative.View,
            {
              style: [
                o.horizontalHistoryContainer,
                {
                  marginVertical: module474.ms(5),
                },
              ],
            },
            y.default.createElement(
              ReactNative.Text,
              {
                style: o.discountRegister,
              },
              c
            ),
            y.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                  alignItems: s ? 'flex-start' : 'center',
                },
              },
              y.default.createElement(
                ReactNative.Text,
                {
                  style: o.pointsText,
                },
                u + ' p'
              )
            )
          );
        },
      },
      {
        key: 'renderPointsList',
        value: function () {
          var t = this,
            n = module1615.CStyles(),
            l = this.state.pointsList;
          return l.length
            ? y.default.createElement(ReactNative.FlatList, {
                key: 'pointsList',
                keyExtractor: L,
                style: n.pointsListStyle,
                data: l,
                showsVerticalScrollIndicator: false,
                scrollEnabled: false,
                renderItem: function (n, l) {
                  return t.renderPointsListItem(n, l);
                },
              })
            : null;
        },
      },
      {
        key: 'renderContent',
        value: function () {
          ReactNative.Appearance.getColorScheme();
          var t = this,
            n = this.state,
            l = n.shouldRender,
            o = n.step,
            s = n.birthDateAtt,
            u = n.showPointsHistory,
            c = n.isGold,
            f = n.isSilver,
            p = n.availablePoints,
            C = n.toSilverMissingPoints,
            x = n.toSilverAccumulatedPoints,
            E = n.toGoldMissingPoints,
            w = n.toGoldAccumulatedPoints,
            T = this.props.navigation;

          if (l) {
            var A = module1615.CStyles();

            if (s) {
              var k = s.split('-');
              new Date(+k[2], k[1] - 1, +k[0]);
            }

            if (1 === o)
              return y.default.createElement(
                ReactNative.ScrollView,
                {
                  key: 'step1Scroll',
                  showsVerticalScrollIndicator: false,
                  contentContainerStyle: {
                    flexGrow: 1,
                    paddingBottom: module474.ms(5),
                    paddingHorizontal: module474.ms(20),
                  },
                },
                this.renderAttachCard(),
                this.renderCreateCard()
              );

            if (2 === o) {
              var D,
                F = 0;
              if (!c) f ? ((D = E), (F = w)) : ((D = C), (F = x));
              return y.default.createElement(
                ReactNative.ScrollView,
                {
                  key: 'step2Scroll',
                  showsVerticalScrollIndicator: false,
                  contentContainerStyle: {
                    flexGrow: 1,
                    paddingBottom: module474.ms(5),
                  },
                },
                this.renderStep2NewUpperArea(),
                y.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      paddingHorizontal: module474.ms(20),
                    },
                  },
                  y.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        A.rowTextContainer,
                        {
                          marginTop: module474.ms(50),
                        },
                      ],
                    },
                    y.default.createElement(
                      ReactNative.Text,
                      {
                        style: A.standardText,
                      },
                      module458.default.formatString(
                        module458.default.authentication.laCardLoyaltyPoints,
                        c ? module458.default.profile.gold : f ? module458.default.profile.silver : module458.default.profile.card
                      )
                    ),
                    y.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        onPress: function () {
                          return t.setState({
                            showBottomSheet: true,
                          });
                        },
                      },
                      y.default.createElement(module472.Icon, {
                        name: 'info',
                        size: module474.ms(20),
                        style: {
                          marginTop: -module474.ms(1.5),
                        },
                      })
                    )
                  ),
                  y.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        A.standardText,
                        {
                          fontFamily: module474.FontFamily.regular,
                          fontSize: module474.FontSize.s,
                        },
                      ],
                    },
                    module458.default.profile.checkPointsTab
                  ),
                  y.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    {
                      onPress: function () {
                        if (u)
                          t.setState({
                            showPointsHistory: !u,
                          });
                        else t.getPointsList();
                      },
                    },
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: [
                          A.pointHistoryContainer,
                          {
                            justifyContent: u ? 'space-around' : 'center',
                          },
                        ],
                      },
                      y.default.createElement(
                        ReactNative.View,
                        {
                          style: A.horizontalHistoryContainer,
                        },
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: {
                              fontFamily: module474.FontFamily.bold,
                              fontSize: module474.FontSize.s,
                              color: u ? module474.Color.red : module474.Color.black,
                              paddingVertical: module474.ms(5),
                            },
                          },
                          module458.default.profile.pointsHistory
                        ),
                        y.default.createElement(
                          ReactNative.View,
                          {
                            style: {
                              flexDirection: 'row',
                              alignItems: u ? 'flex-start' : 'center',
                            },
                          },
                          y.default.createElement(
                            ReactNative.Text,
                            {
                              style: {
                                fontFamily: module474.FontFamily.bold,
                                fontSize: module474.FontSize.s,
                                marginRight: module474.ms(20),
                                color: u ? module474.Color.red : module474.Color.black,
                              },
                            },
                            p,
                            ' p'
                          ),
                          y.default.createElement(module472.Icon, {
                            name: 'anterior',
                            size: module474.ms(10),
                            color: u ? module474.Color.red : 'black',
                            style: {
                              transform: [
                                {
                                  rotate: u ? '270deg' : '90deg',
                                },
                              ],
                              marginTop: u ? module474.ms(2.5) : 0,
                            },
                          })
                        )
                      ),
                      u && this.renderPointsList()
                    )
                  ),
                  y.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        A.infoTextMainContainer,
                        {
                          marginTop: module474.ms(30),
                        },
                      ],
                    },
                    y.default.createElement(ReactNative.View, {
                      style: A.infoContainerIconArea,
                    }),
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: A.infoContainerTextArea,
                      },
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: A.boldSmallText,
                        },
                        module458.default.profile.purchase
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            fontSize: module474.FontSize.s,
                            fontFamily: module474.FontFamily.regular,
                            color: module474.Color.black,
                          },
                        },
                        module458.default.formatString(module458.default.profile.everytimeYouBuy, 1, 1)
                      )
                    )
                  ),
                  y.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        A.infoTextMainContainer,
                        {
                          marginTop: module474.ms(25),
                        },
                      ],
                    },
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: A.infoContainerIconArea,
                      },
                      y.default.createElement(module472.Icon, {
                        name: 'la_credit-card',
                        size: module474.ms(24),
                      })
                    ),
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: A.infoContainerTextArea,
                      },
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: A.boldSmallText,
                        },
                        module458.default.profile.butTheresMore
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            fontSize: module474.FontSize.s,
                            fontFamily: module474.FontFamily.regular,
                            color: module474.Color.black,
                          },
                        },
                        module458.default.profile.butTheresMoreText
                      )
                    )
                  ),
                  y.default.createElement(
                    ReactNative.View,
                    {
                      style: [
                        A.infoTextMainContainer,
                        {
                          marginTop: module474.ms(25),
                        },
                      ],
                    },
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: A.infoContainerIconArea,
                      },
                      y.default.createElement(module472.Icon, {
                        name: 'mais',
                        size: module474.ms(24),
                      })
                    ),
                    y.default.createElement(
                      ReactNative.View,
                      {
                        style: A.infoContainerTextArea,
                      },
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: A.boldSmallText,
                        },
                        module458.default.profile.other
                      ),
                      y.default.createElement(
                        ReactNative.Text,
                        {
                          style: {
                            fontSize: module474.FontSize.s,
                            fontFamily: module474.FontFamily.regular,
                            color: module474.Color.black,
                          },
                        },
                        module458.default.profile.otherText
                      )
                    )
                  ),
                  !c &&
                    y.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          marginTop: module474.ms(40),
                          fontFamily: module474.FontFamily.regular,
                          fontSize: module474.FontSize.s,
                          color: module474.Color.textGray,
                        },
                      },
                      module458.default.formatString(
                        module458.default.profile.pointsRemaining,
                        y.default.createElement(
                          ReactNative.Text,
                          {
                            style: {
                              fontFamily: module474.FontFamily.bold,
                            },
                          },
                          D
                        ),
                        f ? module458.default.profile.gold : module458.default.profile.silver,
                        D + F
                      )
                    ),
                  y.default.createElement(
                    ReactNative.TouchableWithoutFeedback,
                    {
                      onPress: function () {
                        T.navigate('LaCardInfo');
                      },
                    },
                    y.default.createElement(
                      ReactNative.Text,
                      {
                        style: [
                          A.underlineText,
                          {
                            marginTop: module474.ms(25),
                          },
                        ],
                      },
                      module458.default.formatString(
                        module458.default.profile.laAdvantages,
                        c ? module458.default.profile.gold : f ? module458.default.profile.silver : module458.default.profile.card
                      )
                    )
                  )
                )
              );
            }
          }
        },
      },
      {
        key: 'renderLaCardLoyaltyPointsSheet',
        value: function (t) {
          var n = this,
            l = this.state,
            o = l.isGold,
            s = l.isSilver;
          return y.default.createElement(
            module472.BottomSheet,
            {
              visible: this.state.showBottomSheet,
              snapPoints: [-1, module474.ms(350)],
              onClose: function () {
                return n.setState({
                  showBottomSheet: false,
                });
              },
            },
            y.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: 'white',
                  paddingBottom: t.bottom,
                  flex: 1,
                  paddingHorizontal: module474.ms(20),
                },
              },
              y.default.createElement(
                ReactNative.ScrollView,
                null,
                y.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.bold,
                      fontSize: module474.FontSize.m,
                      color: module474.Color.black,
                      marginTop: module474.ms(10),
                    },
                  },
                  module458.default.formatString(
                    module458.default.authentication.laCardLoyaltyPoints,
                    o ? module458.default.profile.gold : s ? module458.default.profile.silver : module458.default.profile.card
                  )
                ),
                y.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.m,
                      color: module474.Color.black,
                      marginTop: module474.ms(15),
                    },
                  },
                  module458.default.authentication.infoLaCardText1
                ),
                y.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      fontFamily: module474.FontFamily.regular,
                      fontSize: module474.FontSize.m,
                      color: module474.Color.black,
                      marginTop: module474.ms(25),
                    },
                  },
                  module458.default.authentication.infoLaCardText2
                )
              )
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module1615.CStyles();
          return y.default.createElement(
            y.default.Fragment,
            null,
            y.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (l) {
              return y.default.createElement(
                y.default.Fragment,
                null,
                y.default.createElement(module472.Header, {
                  back: true,
                  title: module458.default.profile.lanidorCard,
                }),
                y.default.createElement(
                  module472.Wrapper,
                  {
                    edges: ['left', 'right'],
                    style: n.root,
                  },
                  t.renderContent()
                ),
                t.renderLaCardLoyaltyPointsSheet(l)
              );
            })
          );
        },
      },
    ]);
    return z;
  })(y.Component),
  z = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
      user: t.user,
    };
  })(V);

exports.default = z;
