var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
    },
    filterBarContainer: {
      height: module474.ms(50),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: module474.ms(20),
      paddingRight: module474.ms(15),
    },
    productSizesBSContainer: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
    },
    productSizeItemContainer: {
      width: module474.ms(50),
      justifyContent: 'center',
      alignItems: 'center',
      height: module474.ms(50),
    },
    productSizeItemText: {
      fontSize: module474.FontSize.xl,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.lightGray,
    },
    absoluteButton: {
      height: module474.ms(40),
      width: '80%',
      bottom: module474.ms(5),
      borderWidth: 1,
      position: 'absolute',
      alignSelf: 'center',
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
  });

exports.CStyles = module480;
