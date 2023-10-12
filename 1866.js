var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    infoArea: {
      width: '90%',
      height: module474.ms(250),
      backgroundColor: module474.Color.evenLighterGray,
      alignSelf: 'center',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: module474.ms(50),
      marginTop: module474.ms(20),
    },
    infoTextSemibold: {
      color: module474.Color.black,
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.m,
      maxWidth: '80%',
      textAlign: 'center',
      lineHeight: module474.ms(20),
    },
    infoTextRegular: {
      color: module474.Color.darkGray,
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      maxWidth: '80%',
      textAlign: 'center',
      lineHeight: module474.ms(20),
      paddingTop: module474.ms(20),
    },
    flatListStyle: {
      backgroundColor: 'white',
      marginTop: module474.ms(25),
    },
  });

exports.CStyles = module480;
