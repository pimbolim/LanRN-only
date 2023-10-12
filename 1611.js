var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(30),
    },
    imageContainer: {
      backgroundColor: 'red',
      width: '100%',
      height: module474.ms(200),
      overflow: 'hidden',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    title: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.xxl,
      color: module474.Color.black,
      alignSelf: 'center',
      marginTop: module474.ms(25),
      marginBottom: module474.ms(40),
    },
    textContainer: {
      width: '90%',
      flexDirection: 'row',
      marginBottom: module474.ms(20),
    },
    textBullet: {
      fontSize: 5,
      marginRight: module474.ms(5),
      marginTop: module474.ms(5),
    },
    regularText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
  });

exports.CStyles = module480;
