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
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
    button: {
      height: module474.ms(40),
      alignItems: 'center',
      justifyContent: 'center',
      padding: module474.ms(10),
      backgroundColor: module474.Color.primary,
      marginBottom: module474.ms(25),
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    termsTextsContainer: {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
    },
    termsText: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.xs,
      color: 'gray',
    },
    availableNewsLettersContainer: {
      marginTop: module474.ms(10),
    },
    subNewsLetterArea: {
      marginTop: module474.ms(15),
      flexDirection: 'row',
    },
    subNewsLetterIconContainer: {
      height: module474.ms(20),
      width: module474.ms(20),
      marginRight: module474.ms(12.5),
      marginTop: module474.ms(5),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: module474.ms(3),
      borderRadius: module474.ms(2),
    },
    subNewsLetterText: {
      fontFamily: module474.FontFamily.regular,
      lineHeight: module474.ms(22),
      fontSize: module474.FontSize.s,
      color: 'grey',
      width: '90%',
    },
  });

exports.CStyles = module480;
