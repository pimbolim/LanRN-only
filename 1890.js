var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480'),
  l = ReactNative.Dimensions.get('window').width,
  s = module480.CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    horizontalImagesContainer: {
      width: '100%',
      flexDirection: 'row',
    },
    singleViewCardTextContainer: {
      width: '100%',
      height: module474.ms(75),
      paddingHorizontal: module474.ms(10),
      marginTop: module474.ms(7.5),
    },
    singleViewCardLanidorText: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    singleViewPriceText: {
      fontSize: module474.FontSize.xl,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
    },
    horizontalTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    cardTextContainer: {
      width: '95%',
      height: module474.ms(75),
      marginTop: module474.ms(7.5),
      paddingHorizontal: module474.ms(2.5),
    },
    cardLanidorText: {
      fontSize: l < 375 ? module474.FontSize.xxxs : module474.FontSize.xs,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
    },
    cardProductText: {
      fontSize: l < 375 ? module474.FontSize.xxxs : module474.FontSize.xs,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    cardTextPrice: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
      marginRight: module474.ms(7.5),
    },
  });

exports.CStyles = s;
