var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      alignItems: 'center',
    },
    optionItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: module474.ms(42.5),
      borderBottomWidth: 1,
      borderBottomColor: module474.Color.veryLightGray,
    },
    optionItemText: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
      marginBottom: -module474.ms(1),
    },
    normalContainer: {
      justifyContent: 'center',
      width: '100%',
      height: module474.ms(40),
      paddingHorizontal: module474.ms(20),
    },
    whiteContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: module474.ms(20),
      marginBottom: module474.ms(2),
      width: '100%',
      height: module474.ms(40),
      backgroundColor: 'white',
    },
  });

exports.CStyles = module480;
