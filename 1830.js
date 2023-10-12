var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(20),
    },
    newsletterText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
      marginTop: module474.ms(20),
    },
    privacyPolicyText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.s,
      color: 'grey',
    },
    availableNewsLettersContainer: {
      marginTop: module474.ms(25),
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: module474.ms(30),
    },
    newsLettersItem: {
      height: module474.ms(40),
      borderWidth: 1,
      marginBottom: module474.ms(10),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: module474.ms(3),
      paddingVertical: module474.ms(1),
    },
    newsLettersItemText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xs,
      color: module474.Color.black,
      textAlign: 'center',
    },
    button: {
      marginTop: module474.ms(10),
      width: '100%',
      height: module474.ms(40),
      borderWidth: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: 'white',
    },
    availableNewsLettersItem: {
      marginBottom: module474.ms(10),
      marginTop: module474.ms(2.5),
      flexDirection: 'row',
      alignItems: 'center',
    },
    availableNewsLettersCheckContainer: {
      height: module474.ms(15),
      width: module474.ms(15),
      marginRight: module474.ms(12.5),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: module474.ms(1),
      borderRadius: module474.ms(2),
    },
    availableNewsLettersItemText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
      textAlign: 'center',
    },
  });

exports.CStyles = module480;
