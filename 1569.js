var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    mainRoot: {
      flex: 1,
      backgroundColor: 'white',
    },
    cardsContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingBottom: module474.ms(15),
    },
    buttonsContainer: {
      width: '85%%',
    },
    button: {
      height: module474.ms(40),
      width: '100%',
      padding: module474.ms(10),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    root: {
      flex: 1,
    },
    cardContainer: {
      height: module474.ms(180),
      width: '100%',
    },
    cardFace: {
      height: module474.ms(190),
      width: '100%',
    },
    icon: {
      position: 'absolute',
      top: module474.ms(5),
      right: module474.ms(7),
      width: module474.ms(50),
      height: module474.ms(50),
      resizeMode: 'contain',
    },
    baseText: {
      color: module474.Color.white,
      fontFamily: module474.FontFamily.regular,
      backgroundColor: 'transparent',
    },
    placeholder: {
      color: module474.Color.white,
    },
    focused: {
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.white,
    },
    number: {
      position: 'absolute',
      top: module474.ms(100),
      left: module474.ms(25),
      fontSize: module474.FontSize.xl,
    },
    name: {
      position: 'absolute',
      top: module474.ms(50),
      left: module474.ms(25),
      fontSize: module474.FontSize.xl,
    },
    expiryLabel: {
      position: 'absolute',
      bottom: module474.ms(38),
      left: module474.ms(210),
      fontSize: module474.FontSize.s,
    },
    expiry: {
      position: 'absolute',
      bottom: module474.ms(18),
      left: module474.ms(210),
      fontSize: module474.FontSize.l,
    },
    cvc: {
      position: 'absolute',
      top: module474.ms(82),
      right: module474.ms(20),
      fontSize: module474.FontSize.xl,
    },
    backgroundContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: module474.ms(20),
      overflow: 'hidden',
    },
    background: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: module474.Color.primary,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      opacity: 0.8,
    },
    backMagneticBand: {
      position: 'absolute',
      width: '100%',
      height: module474.ms(35),
      top: module474.ms(28),
      right: 0,
      left: 0,
    },
    backCvc: {
      position: 'absolute',
      width: '75%',
      height: module474.ms(28),
      top: module474.ms(82),
      marginLeft: '2.5%',
    },
    topBorder: {
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderTopColor: module474.Color.lightGray,
    },
    noCardsTextContainer: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      minHeight: module474.ms(125),
      paddingHorizontal: '7.5%',
      marginTop: module474.ms(10),
    },
    veryBigTextContaner: {
      height: module474.ms(75),
      justifyContent: 'center',
      marginBottom: -module474.ms(20),
    },
    veryBigText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.xxl,
      color: module474.Color.black,
    },
    regularText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    semiBoldText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    lightText: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.m,
      color: module474.Color.darkGray,
    },
  });

exports.CStyles = module480;
