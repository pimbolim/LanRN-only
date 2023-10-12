var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 0.95 * module474.FontSize.s,
      fontFamily: module474.FontFamily.semiBold,
    },
    badgeContainer: {
      position: 'absolute',
      left: module474.ms(20),
      top: 0,
      backgroundColor: 'red',
      borderRadius: module474.ms(9),
      width: module474.ms(18),
      height: module474.ms(18),
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xxs,
      color: 'white',
      textAlignVertical: 'center',
    },
  });

exports.CStyles = module480;
