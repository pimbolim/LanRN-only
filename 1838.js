var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    topBorder: {
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderTopColor: module474.Color.lightGray,
    },
    emptyContentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: module474.ms(20),
      backgroundColor: 'white',
    },
    emptyContentButton: {
      height: module474.ms(40),
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: module474.ms(10),
      position: 'absolute',
      alignSelf: 'center',
      bottom: module474.ms(25),
    },
    mainText: {
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
      fontSize: module474.FontSize.l,
      marginTop: module474.ms(25),
      textAlign: 'center',
    },
    subText: {
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      fontSize: module474.FontSize.m,
      marginTop: module474.ms(10),
      textAlign: 'center',
    },
  });

exports.CStyles = module480;
