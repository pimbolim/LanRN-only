var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
    },
    content: {},
    itemContainer: {
      height: module474.ms(45),
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(20),
      borderBottomColor: module474.Color.veryLightGray,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
    },
    itemTextContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    dialCodeText: {
      width: module474.ms(40),
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
    },
    searchContainer: {
      backgroundColor: 'lightgray',
      paddingVertical: module474.ms(5),
      paddingHorizontal: module474.ms(5),
    },
    searchInput: {
      color: module474.Color.black,
      height: module474.ms(40),
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(15),
      borderRadius: module474.ms(4),
      alignItems: 'center',
    },
  });

exports.CStyles = module480;
