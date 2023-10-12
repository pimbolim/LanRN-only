var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      paddingTop: module474.ms(10),
      paddingBottom: module474.ms(64),
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: module474.ms(30),
    },
    title: {
      marginTop: module474.ms(40),
      fontSize: module474.FontSize.xl,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      textAlign: 'center',
    },
    message: {
      marginTop: module474.ms(15),
      fontSize: module474.FontSize.m,
      lineHeight: module474.FontSize.l,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      textAlign: 'center',
    },
    icon: {
      color: module474.Color.primary,
      fontSize: module474.ms(50, 0.3),
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: module474.Color.primary,
      width: '80%',
      alignSelf: 'center',
    },
    buttonText: {
      fontFamily: module474.FontFamily.bold,
      color: 'white',
    },
  });

exports.CStyles = module480;
