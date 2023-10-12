var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    row: {
      height: module474.ms(45),
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingLeft: module474.ms(30),
      borderTopColor: module474.Color.veryLightGray,
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
    },
    lowerRow: {
      borderBottomColor: module474.Color.veryLightGray,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
    },
    language: {
      color: module474.Color.black,
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    selected: {
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
  });

exports.CStyles = module480;
