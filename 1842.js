var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: module474.ms(10),
    },
    sectionBigText: {
      fontSize: module474.FontSize.l,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
      marginLeft: module474.ms(20),
      marginBottom: module474.ms(10),
    },
    biggerOptionContainer: {
      marginHorizontal: module474.ms(10),
      height: module474.ms(90),
      marginTop: module474.ms(25),
      paddingVertical: module474.ms(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderBottomColor: module474.Color.veryLightGray,
      borderTopColor: module474.Color.veryLightGray,
    },
    optionTextContainer: {
      height: '100%',
      width: '90%',
      paddingLeft: module474.ms(10),
      justifyContent: 'space-between',
    },
    optionBlackText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    iconContainer: {
      width: '10%',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    smallerOptionContainer: {
      height: module474.ms(55),
      marginHorizontal: module474.ms(10),
      paddingLeft: module474.ms(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth * module474.ms(2),
      borderBottomColor: module474.Color.veryLightGray,
    },
    logoutButtonAbsolute: {
      width: ReactNative.Dimensions.get('window').width - module474.ms(40),
      height: module474.ms(40),
      borderWidth: 1,
      borderColor: 'black',
      position: 'absolute',
      bottom: module474.ms(22.5),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoutButtonRelative: {
      width: ReactNative.Dimensions.get('window').width - module474.ms(40),
      height: module474.ms(40),
      borderWidth: 1,
      borderColor: 'black',
      marginTop: module474.ms(22.5),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    logoutButtonText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    iconRotate: {
      transform: [
        {
          rotateY: '180deg',
        },
      ],
    },
  });

exports.CStyles = module480;
