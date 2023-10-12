var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    contentWrapper: {
      justifyContent: 'center',
      paddingHorizontal: module474.ms(20),
      backgroundColor: 'white',
      height: '100%',
    },
    clickableArea: {
      alignSelf: 'flex-end',
      width: '100%',
      height: module474.ms(40),
      backgroundColor: 'white',
      borderWidth: 1,
      paddingHorizontal: module474.ms(7.5),
      justifyContent: 'center',
      marginVertical: module474.ms(40),
    },
    title: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.xl,
      color: module474.Color.black,
      textAlign: 'center',
      paddingBottom: module474.ms(20),
    },
    text: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    searchInput: {
      color: module474.Color.black,
      height: module474.ms(40),
      paddingLeft: module474.ms(8),
      paddingRight: module474.ms(10),
      alignItems: 'center',
      flex: 1,
      fontFamily: module474.FontFamily.regular,
    },
    searchText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    resultRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: module474.ms(50),
      paddingHorizontal: module474.ms(20),
      backgroundColor: 'white',
    },
    resultIcon: {
      fontSize: module474.FontSize.xl,
      color: module474.Color.lightGray,
      marginRight: module474.ms(10),
    },
    resultTextContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
    },
    resultTitle: {
      fontSize: module474.FontSize.l,
      fontFamily: module474.FontFamily.regular,
      marginBottom: module474.ms(6),
      color: module474.Color.black,
    },
    resultRegion: {
      fontSize: module474.ms(12),
      fontFamily: module474.FontFamily.regular,
      color: '#868686',
    },
    resultsText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
    },
    item: {
      color: module474.Color.black,
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    separator: {
      flex: 1,
      marginHorizontal: module474.ms(30),
      height: ReactNative.StyleSheet.hairlineWidth,
      backgroundColor: 'rgb(220, 220, 220)',
    },
    locationSettingsText: {
      textDecorationLine: 'underline',
      textAlign: 'center',
      paddingHorizontal: module474.ms(20),
      marginTop: module474.ms(30),
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    filterText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
      textAlign: 'center',
      paddingVertical: module474.ms(7),
    },
    filterTouchable: {
      marginBottom: module474.ms(10),
      marginTop: module474.ms(2.5),
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButtonContainer: {
      height: module474.ms(22),
      width: module474.ms(22),
      borderRadius: module474.ms(11),
      borderWidth: module474.ms(1),
      borderColor: module474.Color.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerRadio: {
      height: module474.ms(12),
      width: module474.ms(12),
      borderRadius: module474.ms(6),
      backgroundColor: module474.Color.primary,
    },
    storeText: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      paddingVertical: module474.ms(3),
    },
    userAddressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: module474.Color.lightGray,
      paddingVertical: module474.ms(10),
      paddingLeft: module474.ms(15),
    },
    userAddressText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    myLocationButton: {
      alignItems: 'center',
      height: module474.ms(50),
      marginHorizontal: module474.ms(10),
      flexDirection: 'row',
      backgroundColor: 'white',
      marginLeft: module474.ms(20),
    },
    locationText: {
      color: module474.Color.black,
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
    },
    detailTitleText: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.m,
    },
    detailRefText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.textGray,
    },
    noStockText: {
      color: module474.Color.red,
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xs,
      marginLeft: module474.ms(37),
    },
    tableText: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
  });

exports.CStyles = module480;