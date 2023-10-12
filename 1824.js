var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: module474.ms(20),
      paddingVertical: module474.ms(10),
    },
    sectionBigText: {
      fontSize: module474.FontSize.l,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
      marginTop: module474.ms(30),
    },
    button: {
      height: module474.ms(40),
      alignItems: 'center',
      justifyContent: 'center',
      padding: module474.ms(10),
      backgroundColor: 'black',
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
    },
    forgotPasswordText: {
      marginTop: module474.ms(10),
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      textDecorationLine: 'underline',
    },
    termsTextsContainer: {
      flexDirection: 'row',
      marginTop: module474.ms(25),
      width: '100%',
      flexWrap: 'wrap',
    },
    termsText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xs,
      color: 'gray',
    },
    laCardInfoText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      textDecorationLine: 'underline',
      color: module474.Color.black,
      textAlign: 'center',
      marginTop: module474.ms(35),
    },
  });

exports.CStyles = module480;
