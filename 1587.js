var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    content: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: module474.ms(20),
    },
    sectionBigText: {
      marginTop: module474.ms(25),
      fontSize: module474.FontSize.xl,
      fontFamily: module474.FontFamily.semiBold,
      color: 'black',
    },
    sectionIntermediateText: {
      marginTop: module474.ms(50),
      fontSize: module474.FontSize.xl,
      fontFamily: module474.FontFamily.bold,
      color: 'black',
    },
    sectionSmallText: {
      marginTop: module474.ms(25),
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: 'black',
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
    secondStepContent: {
      width: '100%',
      alignItems: 'center',
    },
  });

exports.CStyles = module480;
