var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      width: '100%',
      backgroundColor: 'green',
    },
    deleteButton: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: module474.Color.red,
    },
    deleteIcon: {
      fontSize: module474.ms(22),
      color: 'white',
    },
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    topBorder: {
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(1.5),
      borderTopColor: module474.Color.lightGray,
    },
    content: {
      flexDirection: 'row',
      width: '35%',
    },
    textContent: {
      paddingRight: module474.ms(15),
      paddingLeft: module474.ms(17.5),
      paddingVertical: module474.ms(5),
      justifyContent: 'space-around',
      width: '65%',
    },
    productImageContainer: {
      width: '100%',
      height: '100%',
    },
    productImage: {
      width: '100%',
      height: '100%',
    },
    textRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    button: {
      height: module474.ms(30),
      width: module474.ms(100),
      paddingHorizontal: module474.ms(5),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: module474.Color.primary,
    },
    exchangeButtonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingRight: module474.ms(5),
    },
    exchangeButton: {
      height: module474.ms(30),
      width: '45%',
      paddingHorizontal: module474.ms(5),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
    },
    smallerText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xs,
      color: module474.Color.black,
    },
    semiboldText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    redText: {
      color: module474.Color.red,
    },
    regularText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    bigBoldText: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.l,
      color: module474.Color.black,
    },
    colorCircle: {
      height: module474.ms(18),
      width: module474.ms(18),
      borderRadius: module474.ms(18) / 2,
      marginRight: module474.ms(7.5),
      borderColor: module474.Color.grayBorder,
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
    },
  });

exports.CStyles = module480;
