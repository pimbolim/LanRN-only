var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = O(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module474 = require('./474'),
  module1611 = require('./1611'),
  module1185 = require('./1185'),
  module1272 = require('./1272');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
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

var E = (function (t) {
    module35.default(k, t);

    var module400 = k,
      O = b(),
      E = function () {
        var t,
          n = module34.default(module400);

        if (O) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function k(t) {
      var l;
      module24.default(this, k);
      (l = E.call(this, t)).state = {};
      return l;
    }

    module25.default(k, [
      {
        key: 'getCardAdvantagesStrings',
        value: function () {
          return [
            module458.default.profile.specialConditionsCampaignsOffers,
            module458.default.profile.gatheringPointsLanidorProgram,
            module458.default.formatString(module458.default.profile.lanidorWomanBirthdayDiscount, '25%'),
            module458.default.formatString(module458.default.profile.lanidorKidsWomanBirthdayDiscount, '30%'),
            module458.default.profile.bonusVouchersSeveralStores,
            module458.default.profile.sewingFixes,
            module458.default.profile.friendlyBrandsDiscounts,
            module458.default.profile.warehouseLaCaffeDiscount,
          ];
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = module1611.CStyles();
          return React.default.createElement(
            ReactNative.ScrollView,
            {
              key: 'step3Scroll',
              showsVerticalScrollIndicator: false,
              contentContainerStyle: {
                flexGrow: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: t.imageContainer,
              },
              React.default.createElement(module1272.default, {
                resizeMode: 'cover',
                source: module1185.lanidorCard,
                style: t.image,
              })
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: t.title,
              },
              module458.default.formatString(module458.default.profile.laAdvantages.toUpperCase(), module458.default.profile.card)
            ),
            this.getCardAdvantagesStrings().map(function (n) {
              return React.default.createElement(
                ReactNative.View,
                {
                  style: t.textContainer,
                },
                React.default.createElement(module472.Icon, {
                  name: 'checkIcon',
                  size: module474.ms(15),
                  style: {
                    paddingRight: module474.ms(10),
                  },
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: t.regularText,
                  },
                  n
                )
              );
            })
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1611.CStyles();
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              back: true,
              title: module458.default.profile.lanidorCard,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['top', 'left', 'right', 'bottom'],
                style: t.root,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return k;
  })(React.Component),
  k = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(E);

exports.default = k;
