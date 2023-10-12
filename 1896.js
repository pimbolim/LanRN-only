var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
    },
    titleText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
      alignSelf: 'center',
      marginBottom: module474.ms(5),
    },
    screenText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
      alignSelf: 'center',
      marginBottom: module474.ms(15),
    },
    infoAreaContainer: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: module474.ms(15),
      padding: module474.ms(15),
    },
    infoAreaTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: module474.ms(25),
    },
    infoAreaTitleText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
    infoAreaTitleEditText: {
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
  });

exports.CStyles = module480;
