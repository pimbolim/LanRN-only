var module47 = require('./47'),
  ReactNative = require('react-native'),
  module474 = require('./474');

function s(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function h(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      s(Object(l)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
      });
  }

  return t;
}

var module480 = require('./480').CreateStyles({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  userContainer: {
    width: '100%',
    height: module474.ms(180),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    top: 0,
    bottom: 0,
  },
  imageOverlay: h(
    h({}, ReactNative.StyleSheet.absoluteFill),
    {},
    {
      backgroundColor: 'rgba(20,20,51,0.7)',
    }
  ),
  avatarContainer: {
    width: module474.ms(90),
    height: module474.ms(90),
    borderRadius: module474.ms(90) / 2,
    overflow: 'hidden',
    borderWidth: 2 * ReactNative.StyleSheet.hairlineWidth,
    borderColor: module474.Color.primary,
    marginBottom: module474.ms(10),
    justifyContent: 'flex-end',
  },
  avatarEditContainer: {
    width: '100%',
    height: module474.ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100,0.4)',
  },
  avatarEditIcon: {
    color: 'white',
    fontSize: module474.ms(14),
  },
  name: {
    color: 'white',
    fontSize: module474.FontSize.m,
    fontFamily: module474.FontFamily.bold,
  },
  myBenefitsText: {
    color: module474.Color.black,
    fontSize: module474.FontSize.xl,
    fontFamily: module474.FontFamily.bold,
  },
  email: {
    color: 'white',
    fontSize: module474.FontSize.m,
    fontFamily: module474.FontFamily.regular,
  },
  imageAbsoluteView: {
    backgroundColor: 'black',
    width: '100%',
    height: module474.ms(65, 0.8),
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: module474.ms(20, 1),
  },
  imageAbsoluteText: {
    fontFamily: module474.FontFamily.bold,
    fontSize: module474.FontSize.xl,
    lineHeight: module474.FontSize.xl + 6,
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: module474.ms(12.5),
  },
  benefitItemImgWrapper: {
    height: module474.ms(110),
    marginRight: module474.ms(30),
  },
  benefitImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  benefitsAreaDotsArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: module474.ms(42.5),
  },
  benefitsAreaDot: {
    height: module474.ms(5),
    width: module474.ms(5),
    borderRadius: module474.ms(5) / 2,
    marginRight: module474.ms(3.5),
  },
  optionItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: module474.ms(45),
    paddingHorizontal: module474.ms(20),
    borderBottomWidth: 1,
    borderBottomColor: module474.Color.veryLightGray,
  },
  optionItemLeftArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  optionItemText: {
    fontFamily: module474.FontFamily.regular,
    fontSize: module474.FontSize.s,
    color: module474.Color.black,
    marginBottom: -module474.ms(1),
  },
  pointsArea: {
    width: '100%',
    backgroundColor: '#F2EDE1',
  },
  pointsUpperArea: {
    width: '100%',
    height: module474.ms(160),
    flexDirection: 'row',
  },
  pointsUpperLeftArea: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsUpperRightArea: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  pointsUpperRightAreaHorizontalTextContainer: {
    flexDirection: 'row',
    paddingRight: module474.ms(5),
    flexWrap: 'wrap',
  },
  pointsLowerArea: {
    width: '100%',
    height: module474.ms(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: module474.ms(20),
  },
  pointsAreaRegularText: {
    fontFamily: module474.FontFamily.regular,
    fontSize: module474.FontSize.s,
    color: module474.Color.black,
  },
  pointsAreaLightText: {
    fontFamily: module474.FontFamily.light,
    fontSize: module474.FontSize.s,
    color: module474.Color.black,
  },
  historyAreaContainer: {
    marginTop: module474.ms(10),
    height: module474.ms(80),
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyAreaLeft: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyAreaRight: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

exports.CStyles = module480;
