var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(20),
      paddingVertical: module474.ms(10),
    },
    sectionBigText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: module474.ms(10),
      marginBottom: module474.ms(15),
      height: module474.ms(40),
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    halfSizedInputsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: module474.ms(10),
    },
    availableNewsLettersContainer: {
      marginTop: module474.ms(10),
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    availableNewsLettersItem: {
      height: module474.ms(40),
      borderWidth: 1,
      marginBottom: module474.ms(10),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: module474.ms(3),
      paddingVertical: module474.ms(1),
    },
    availableNewsLettersItemText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xs,
      color: module474.Color.black,
      textAlign: 'center',
    },
    countryItem: {
      width: '100%',
      height: module474.ms(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderTopColor: module474.Color.veryLightGray,
      paddingHorizontal: module474.ms(20),
    },
    countryText: {
      color: module474.Color.black,
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
    },
  });

exports.CStyles = module480;
