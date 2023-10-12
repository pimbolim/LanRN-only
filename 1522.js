var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    availableCreditContainer: {
      width: ReactNative.Dimensions.get('window').width - 2 * module474.ms(15),
      padding: module474.ms(22.5),
      minHeight: module474.ms(240),
      backgroundColor: module474.Color.evenLighterGray,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: module474.ms(15),
    },
    hugeText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.availableCredit,
      color: 'black',
    },
    bigText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.xxxl,
      color: 'black',
    },
    mediumText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: 'black',
    },
    smallText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: 'black',
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '100%',
    },
    voucherItemContainer: {
      width: '100%',
      paddingHorizontal: module474.ms(15),
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingTop: module474.ms(15),
    },
  });

exports.CStyles = module480;
