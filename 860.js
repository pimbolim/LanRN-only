var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    container: {
      backgroundColor: 'white',
      marginTop: module474.ms(2),
      paddingHorizontal: module474.ms(25),
      paddingVertical: module474.ms(12.5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      color: module474.Color.black,
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
    },
    icon: {
      color: module474.Color.black,
      fontSize: module474.ms(16),
      transform: [
        {
          rotate: '180deg',
        },
      ],
    },
  });

exports.CStyles = module480;
