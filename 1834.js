var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    mainContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: module474.ms(15),
      marginTop: module474.ms(30),
    },
    areaContainer: {
      width: '70%',
    },
    areaTextTitle: {
      fontSize: module474.FontSize.l,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
    areaText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      marginTop: module474.ms(5),
    },
    switchAreaContainer: {
      width: '20%',
      alignItems: 'flex-end',
    },
    buttonContainer: {
      height: module474.ms(135),
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: module474.ms(15),
    },
    button: {
      height: module474.ms(40),
      width: '100%',
      padding: module474.ms(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
  });

exports.CStyles = module480;
