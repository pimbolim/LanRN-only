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
    var l = L(n);
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
  module1496 = require('./1496'),
  module474 = require('./474'),
  module1185 = require('./1185'),
  module1497 = require('./1497'),
  module1226 = require('./1226'),
  module1224 = require('./1224'),
  module1503 = require('./1503'),
  module1278 = require('./1278');

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (L = function (t) {
    return t ? l : n;
  })(t);
}

function I() {
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

var P = function (t, n) {
    return 'child__' + t.Id;
  },
  N = (function (t) {
    module35.default(F, t);

    var module400 = F,
      L = I(),
      N = function () {
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
      (n = N.call(this, t)).state = {
        name: '',
        birthDate: '',
        showDatePicker: false,
        childName: '',
        childBirthDate: '',
        childList: [],
        addNew: false,
        editChilds: false,
        loaded: false,
        listToUpdate: [],
        childToEdit: {},
      };
      n.renderDetails = n.renderDetails.bind(module39.default(n));
      n.postChildrenData = n.postChildrenData.bind(module39.default(n));
      n.getChildrenData = n.getChildrenData.bind(module39.default(n));
      n.putChildrenData = n.putChildrenData.bind(module39.default(n));
      n.deleteChildrenData = n.deleteChildrenData.bind(module39.default(n));
      return n;
    }

    module25.default(F, [
      {
        key: 'componentDidMount',
        value: function () {
          this.getChildrenData();
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || null;
        },
      },
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
        key: 'getChildrenData',
        value: function () {
          var t, l;
          return regeneratorRuntime.default.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (((t = this.props.dispatch), !this.laCard)) {
                      o.next = 16;
                      break;
                    }

                    o.prev = 2;
                    t(module1224.setLoader(true));
                    o.next = 6;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.get({
                        url: module1226.Endpoints.getChildren(this.laCard),
                        axiosConfig: {
                          callback: this.getChildrenData,
                        },
                      })
                    );

                  case 6:
                    if ((l = o.sent).ok) {
                      t(module1224.setLoader(false));
                      this.setState({
                        childList: l.data,
                        loaded: true,
                      });
                      if (l.data && l.data.length > 0)
                        this.setState({
                          addNew: false,
                        });
                      else
                        this.setState({
                          addNew: true,
                        });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== l.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    o.next = 14;
                    break;

                  case 10:
                    o.prev = 10;
                    o.t0 = o.catch(2);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 14:
                    o.next = 17;
                    break;

                  case 16:
                    this.setState({
                      loaded: true,
                    });

                  case 17:
                  case 'end':
                    return o.stop();
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
        key: 'postChildrenData',
        value: function () {
          var t, module24, module25, module39, module35, c;
          return regeneratorRuntime.default.async(
            function (f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state;
                    module25 = module24.childName;
                    module39 = module24.childBirthDate;
                    module35 = {
                      Nome: module25,
                      dataNascimento: module39,
                    };
                    f.prev = 3;
                    t(module1224.setLoader(true));
                    f.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.post({
                        url: module1226.Endpoints.getChildren(this.laCard),
                        data: module35,
                        axiosConfig: {
                          callback: this.postChildrenData,
                        },
                      })
                    );

                  case 7:
                    if ((c = f.sent).ok) {
                      t(module1224.setLoader(false));
                      this.setState({
                        addNew: false,
                        childList: c.data,
                      });
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== c.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    f.next = 15;
                    break;

                  case 11:
                    f.prev = 11;
                    f.t0 = f.catch(3);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return f.stop();
                }
            },
            null,
            this,
            [[3, 11]],
            Promise
          );
        },
      },
      {
        key: 'putChildrenData',
        value: function () {
          var t, module24, module25, s;
          return regeneratorRuntime.default.async(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    t = this.props.dispatch;
                    module24 = this.state.childList;
                    module25 = module24;
                    u.prev = 3;
                    t(module1224.setLoader(true));
                    u.next = 7;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.put({
                        url: module1226.Endpoints.getChildren(this.laCard),
                        data: module25,
                        axiosConfig: {
                          callback: this.putChildrenData,
                        },
                      })
                    );

                  case 7:
                    if ((s = u.sent).ok) {
                      this.setState({
                        editChilds: false,
                      });
                      t(module1224.setLoader(false));
                    } else {
                      t(module1224.setLoader(false));
                      if (401 !== s.status)
                        module472.DropDown.alert({
                          type: 'error',
                          title: module458.default.generic.oops,
                          message: module458.default.error.generic,
                        });
                    }

                    u.next = 15;
                    break;

                  case 11:
                    u.prev = 11;
                    u.t0 = u.catch(3);
                    t(module1224.setLoader(false));
                    module472.DropDown.alert({
                      type: 'error',
                      title: module458.default.generic.oops,
                      message: module458.default.error.generic,
                    });

                  case 15:
                  case 'end':
                    return u.stop();
                }
            },
            null,
            this,
            [[3, 11]],
            Promise
          );
        },
      },
      {
        key: 'deleteChildrenData',
        value: function (t) {
          var module24, o;
          return regeneratorRuntime.default.async(
            function (s) {
              for (;;)
                switch ((s.prev = s.next)) {
                  case 0:
                    module24 = this.props.dispatch;
                    s.prev = 1;
                    module24(module1224.setLoader(true));
                    s.next = 5;
                    return regeneratorRuntime.default.awrap(
                      module1226.API.delete({
                        url: module1226.Endpoints.deleteChildren(this.laCard, t),
                        axiosConfig: {
                          callback: this.deleteChildrenData,
                        },
                      })
                    );

                  case 5:
                    if ((o = s.sent).ok) {
                      module24(module1224.setLoader(false));
                      this.setState({
                        childList: o.data,
                      });
                      if (o.data && o.data.length > 0)
                        this.setState({
                          addNew: false,
                        });
                      else
                        this.setState({
                          addNew: true,
                        });
                    } else {
                      module24(module1224.setLoader(false));
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
                    module24(module1224.setLoader(false));
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
        key: 'getLACardButton',
        value: function () {
          var t = module1496.CStyles(),
            n = this.props.navigation;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.navigate('LanidorCard');
                },
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
                module458.default.profile.joinLaCard.toUpperCase()
              )
            ),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  return n.navigate('LaCardInfo');
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: t.laCardInfoText,
                },
                module458.default.authentication.laCardInfo
              )
            )
          );
        },
      },
      {
        key: 'createLACard',
        value: function () {
          var t = this.state,
            n = this.user;
        },
      },
      {
        key: 'convertDateToString',
        value: function (t) {
          if (this.state.editChilds)
            this.setState({
              birthDate: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
            });
          else
            this.setState({
              childBirthDate: module1278.DateTime.fromJSDate(t).toFormat('dd-MM-yyyy'),
            });
        },
      },
      {
        key: 'renderMainImage',
        value: function () {
          var t = module1496.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: t.mainImageContainer,
            },
            React.default.createElement(ReactNative.Image, {
              source: module1185.birthdayDiscounts,
              style: t.mainImage,
            })
          );
        },
      },
      {
        key: 'renderDetails',
        value: function () {
          var t = module1496.CStyles();
          this.props.navigation;
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: t.mainTextContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.semiBoldText,
                    {
                      textAlign: 'center',
                    },
                  ],
                },
                module458.default.profile.birthdayDiscountText1.toUpperCase()
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.boldBigText,
                    {
                      textAlign: 'center',
                      marginTop: module474.ms(10),
                    },
                  ],
                },
                module458.default.formatString(module458.default.profile.birthdayDiscountText2, '-30')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.regularText,
                    {
                      marginTop: module474.ms(20),
                    },
                  ],
                },
                module458.default.formatString(module458.default.profile.birthdayDiscountText3, '30')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    t.regularText,
                    {
                      marginTop: module474.ms(20),
                    },
                  ],
                },
                module458.default.formatString(module458.default.profile.birthdayDiscountText4, '35', '50', '100')
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: t.yellowAreaContainer,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.iconContainer,
                },
                React.default.createElement(module472.Icon, {
                  name: 'info2',
                  size: module474.ms(16),
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: t.downContainer,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.regularText,
                      {
                        fontFamily: module474.FontFamily.regular,
                      },
                    ],
                  },
                  module458.default.profile.birthdayDiscountText5.toUpperCase()
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [
                      t.regularText,
                      {
                        marginTop: module474.ms(2.5),
                      },
                    ],
                  },
                  module458.default.formatString(module458.default.profile.birthdayDiscountText6, '25', '30')
                )
              )
            )
          );
        },
      },
      {
        key: 'renderChildrenDataInputs',
        value: function () {
          var t = this,
            n = this.state,
            l = n.childName,
            o = n.childBirthDate;
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(15),
              },
              label: module458.default.authentication.name,
              value: l,
              onChange: function (n) {
                t.setState({
                  childName: n,
                });
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return t.setState({
                    showDatePicker: true,
                  });
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.authentication.birthDate,
                  value: o,
                  disabled: true,
                  onChange: function (n) {
                    t.setState({
                      childBirthDate: n,
                    });
                  },
                })
              )
            )
          );
        },
      },
      {
        key: 'renderChildItem',
        value: function (t) {
          var n = this,
            l = t.item,
            o = module1496.CStyles(),
            s = module1278.DateTime.fromISO(l.dataNascimento).toFormat('dd-MM-yyyy');
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                marginVertical: module474.ms(10),
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: o.semiBoldText,
              },
              l.Nome
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: o.childItemContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: o.regularText,
                },
                module458.default.authentication.birthDate + ': ' + s
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  onPress: function () {
                    return n.deleteChildrenData(l.Id);
                  },
                  style: [
                    o.text,
                    {
                      fontSize: module474.FontSize.xxs,
                      color: module474.Color.lightGray,
                    },
                  ],
                },
                module458.default.generic.delete.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderEditChildList',
        value: function () {
          var t = this,
            n = this.state.childList;
          return React.default.createElement(ReactNative.FlatList, {
            key: 'keyExtractorChild',
            keyExtractor: P,
            style: {
              flexGrow: 1,
            },
            showsVerticalScrollIndicator: false,
            data: n,
            renderItem: function (n) {
              return t.renderEditChildItem(n);
            },
          });
        },
      },
      {
        key: 'renderEditChildItem',
        value: function (t) {
          var n = this,
            l = t.item,
            o = this.state,
            s = o.childList;
          ReactNative.Appearance.getColorScheme();

          if (l.dataNascimento) {
            var u = module1278.DateTime.fromISO(l.dataNascimento).toFormat('dd-MM-yyyy').split('-');
            new Date(+u[2], u[1] - 1, +u[0]);
          }

          var c = s,
            f = module1278.DateTime.fromISO(l.dataNascimento).toFormat('dd-MM-yyyy');
          return React.default.createElement(
            ReactNative.View,
            null,
            React.default.createElement(module472.FloatingInput, {
              containerExtraStyle: {
                marginTop: module474.ms(15),
              },
              label: module458.default.authentication.name,
              value: l.Nome,
              onChange: function (t) {
                var o = c.findIndex(function (t) {
                  return t.Id === l.Id;
                });
                c[o].Nome = t;
                n.setState({
                  childList: c,
                });
              },
            }),
            React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                onPress: function () {
                  return n.setState(
                    {
                      birthDate: l.dataNascimento,
                      childToUpdate: l,
                    },
                    function () {
                      n.setState({
                        showDatePicker: true,
                      });
                    }
                  );
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                },
                React.default.createElement(module472.FloatingInput, {
                  label: module458.default.authentication.birthDate,
                  value: f,
                  disabled: true,
                  onChange: function () {
                    n.setState({
                      childToUpdate: l,
                    });
                  },
                })
              )
            )
          );
        },
      },
      {
        key: 'renderDatePicker',
        value: function () {
          ReactNative.Appearance.getColorScheme();
          var t = this,
            n = this.state,
            l = n.showDatePicker,
            o = n.birthDate,
            s = n.editChilds,
            u = n.childList,
            c = n.childToUpdate,
            f = u;
          new Date(o);
          return React.default.createElement(module1497.default, {
            mode: 'date',
            modal: true,
            textColor: 'black',
            open: l,
            date: new Date(),
            onConfirm: function (n) {
              if (s)
                t.setState(
                  {
                    showDatePicker: false,
                  },
                  function () {
                    var l = f.findIndex(function (t) {
                      return t.Id === c.Id;
                    });
                    f[l].dataNascimento = module1278.DateTime.fromJSDate(n).toFormat('yyyy-MM-dd');
                    t.setState({
                      childList: f,
                      birthDate: module1278.DateTime.fromJSDate(n).toFormat('dd-MM-yyyy'),
                    });
                  }
                );
              else
                t.setState(
                  {
                    showDatePicker: false,
                  },
                  function () {
                    t.convertDateToString(n);
                  }
                );
            },
            onCancel: function () {
              t.setState({
                showDatePicker: false,
              });
            },
          });
        },
      },
      {
        key: 'renderChildList',
        value: function () {
          var t = this,
            n = this.state.childList;
          return React.default.createElement(ReactNative.FlatList, {
            key: 'keyExtractorChild',
            keyExtractor: P,
            style: {
              flexGrow: 1,
            },
            showsVerticalScrollIndicator: false,
            data: n,
            renderItem: function (n) {
              return t.renderChildItem(n);
            },
          });
        },
      },
      {
        key: 'renderExpandedArea',
        value: function () {
          var t = this,
            n = this.state,
            l = n.childList,
            o = n.addNew,
            s = n.editChilds,
            u = module1496.CStyles();
          return React.default.createElement(
            ReactNative.View,
            {
              style: u.whiteAreaContainer,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: u.childItemContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    u.semiBoldText,
                    {
                      marginTop: module474.ms(10),
                    },
                  ],
                },
                module458.default.authentication.myChildren
              ),
              l.length > 0 &&
                !s &&
                !o &&
                React.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      return t.setState({
                        editChilds: true,
                      });
                    },
                    style: [
                      u.regularText,
                      {
                        textDecorationLine: 'underline',
                        alignSelf: 'center',
                      },
                    ],
                  },
                  module458.default.generic.edit
                )
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  u.regularGreyText,
                  {
                    marginTop: module474.ms(30),
                  },
                ],
              },
              module458.default.authentication.myChildrenText2
            ),
            React.default.createElement(
              React.default.Fragment,
              null,
              o && this.renderChildrenDataInputs(),
              s && this.renderEditChildList(),
              !o && !s && this.renderChildList(),
              !o &&
                !s &&
                React.default.createElement(
                  ReactNative.Text,
                  {
                    onPress: function () {
                      return t.setState({
                        addNew: true,
                      });
                    },
                    style: [
                      u.regularText,
                      {
                        textDecorationLine: 'underline',
                        alignSelf: 'center',
                        marginVertical: module474.ms(20),
                      },
                    ],
                  },
                  module458.default.payments.addNew
                ),
              (o || s) &&
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      return t.onSubmitHandler();
                    },
                    style: [
                      u.button,
                      {
                        marginTop: module474.ms(15),
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: u.buttonText,
                    },
                    module458.default.generic.submit.toUpperCase()
                  )
                ),
              (o || s) &&
                l.length > 0 &&
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    onPress: function () {
                      return t.onCancelSubmit();
                    },
                    style: [
                      u.button,
                      {
                        backgroundColor: 'white',
                      },
                    ],
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: [
                        u.buttonText,
                        {
                          color: 'black',
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
        key: 'onSubmitHandler',
        value: function () {
          var t = this.state,
            n = t.addNew,
            l = t.editChilds;

          if (n) {
            this.postChildrenData();
            this.setState({
              childName: '',
              childBirthDate: '',
            });
          } else if (l) this.putChildrenData();
          else this.props.navigation.navigate('LaCardInfo');
        },
      },
      {
        key: 'onCancelSubmit',
        value: function () {
          var t = this.state,
            n = t.addNew,
            l = t.editChilds;
          if (n)
            this.setState({
              childName: '',
              childBirthDate: '',
              addNew: false,
            });
          else if (l)
            this.setState({
              editChilds: false,
            });
        },
      },
      {
        key: 'renderContent',
        value: function () {
          return React.default.createElement(
            module1503.KeyboardAwareScrollView,
            {
              key: 'birthdayDiscountsScrollView',
              showsVerticalScrollIndicator: false,
              contentContainerStyle: {
                paddingBottom: module474.ms(10),
              },
            },
            this.renderMainImage(),
            this.renderDetails(),
            this.laCard ? this.renderExpandedArea() : this.getLACardButton(),
            this.renderDatePicker()
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1496.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.birthdayDiscounts,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['left', 'right'],
                style: t.root,
              },
              this.renderContent()
            )
          );
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
  })(N);

exports.default = F;
