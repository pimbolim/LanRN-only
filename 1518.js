var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(20),
    },
    button: {
      width: '100%',
      height: module474.ms(40),
      borderWidth: 1,
      position: 'absolute',
      bottom: module474.ms(50),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    buttonText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: 'white',
    },
  });

exports.CStyles = module480;
