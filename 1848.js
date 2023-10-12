var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerInfoContainer: {
      width: '100%',
      flexDirection: 'row',
      height: module474.ms(75),
      alignItems: 'center',
      position: 'absolute',
      bottom: module474.ms(55),
      zIndex: 10,
    },
    backIcon: {
      flex: 1,
      width: module474.ms(40),
      height: module474.ms(40),
      position: 'absolute',
      left: module474.ms(15),
      paddingTop: module474.ms(5),
      textAlign: 'center',
      transform: [
        {
          rotateY: '180deg',
        },
      ],
    },
    wishlistIcon: {
      width: module474.ms(40),
      height: module474.ms(40),
      position: 'absolute',
      right: module474.ms(15),
      paddingTop: module474.ms(5),
      textAlign: 'center',
    },
    deliveryLabelContainer: {
      height: module474.ms(20),
      width: '40%',
      backgroundColor: module474.Color.veryLightGrayTransparent,
      position: 'absolute',
      left: 0,
      bottom: module474.ms(50),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
    },
    deliveryLabelText: {
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.primary,
    },
    imageCounterDotsArea: {
      position: 'absolute',
      minWidth: module474.ms(50),
      bottom: module474.ms(17.5),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    imageCounterDot: {
      height: module474.ms(6.5),
      width: module474.ms(6.5),
      borderRadius: module474.ms(6.5) / 2,
      marginRight: module474.ms(3.5),
    },
    imageFullScreenCrossContainer: {
      height: module474.ms(50),
      width: module474.ms(50),
      backgroundColor: module474.Color.darkGray,
      borderRadius: module474.ms(50) / 2,
      position: 'absolute',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    blackBar: {
      alignSelf: 'center',
      backgroundColor: module474.Color.black,
      height: module474.ms(3),
      width: module474.ms(75),
      borderRadius: module474.ms(5),
    },
    button: {
      height: module474.ms(40),
      width: '47.5%',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: module474.ms(10),
      marginBottom: module474.ms(15),
      backgroundColor: 'black',
      flexDirection: 'row',
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
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
    infoAreaContainer: {
      width: '100%',
      paddingHorizontal: module474.ms(10),
      paddingTop: module474.ms(7.5),
    },
    SimilarAreaContainer: {
      width: '100%',
      paddingHorizontal: module474.ms(10),
      paddingTop: module474.ms(40),
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '100%',
    },
    infoText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xl,
      color: module474.Color.black,
    },
    infoTextBig: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xxl,
      color: module474.Color.black,
    },
    colorCircle: {
      height: module474.ms(18),
      width: module474.ms(18),
      borderRadius: module474.ms(18) / 2,
      alignSelf: 'center',
      borderColor: module474.Color.grayBorder,
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
    },
    selectedColorCircle: {
      height: module474.ms(25),
      width: module474.ms(25),
      borderRadius: module474.ms(25) / 2,
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: module474.Color.grayBorder,
      backgroundColor: 'white',
    },
    filterItemPressContainer: {
      width: '48.5%',
      height: module474.ms(40),
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: module474.ms(10),
    },
    filterItemPressContainerText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
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
    expandableContainer: {
      height: module474.ms(55),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    expandableTopBorder: {
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderTopColor: 'gray',
    },
    expandableBottomBorder: {
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomColor: 'gray',
    },
    expandableContainerText: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.l,
      color: module474.Color.black,
    },
    expandableContainerCollapsableArea: {
      width: '100%',
      justifyContent: 'center',
      paddingBottom: module474.ms(20),
      paddingHorizontal: module474.ms(15),
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomColor: 'gray',
    },
    expandableContainerCollapsableAreaText: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
      marginVertical: module474.ms(3),
    },
    buttonHeaderContainer: {
      position: 'absolute',
      width: '100%',
      height: module474.ms(40),
    },
    similarProductTitle: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.l,
      marginLeft: module474.ms(5),
      color: module474.Color.black,
    },
    similarProductText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
      marginBottom: module474.ms(2),
    },
    availableHeightView: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    sizeGuideTitleText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.semiBold,
      color: module474.Color.black,
    },
    sizeGuideIconWrapper: {
      height: module474.ms(26),
      width: module474.ms(26),
      borderRadius: module474.ms(26) / 2,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -module474.ms(5),
    },
    sizeGuideArea: {
      width: '100%',
      alignItems: 'center',
    },
    findYourSizeText: {
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      marginRight: module474.ms(15),
      color: 'gray',
    },
    storesButton: {
      marginVertical: module474.ms(20),
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    searchStoresTitle: {
      fontSize: module474.FontSize.l,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
      paddingLeft: module474.ms(5),
    },
    similarItemArea: {
      marginHorizontal: module474.ms(5),
      minHeight: module474.ms(240),
    },
    similarItemImage: {
      width: '100%',
      height: module474.ms(220),
    },
    similarItemDescription: {
      width: module474.ms(150),
      marginTop: module474.ms(10),
    },
    productInfoContainer: {
      width: module474.ms(150),
      paddingHorizontal: module474.ms(5),
      marginTop: module474.ms(5),
    },
    productInfoText: {
      fontSize: module474.FontSize.xxxs,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    productInfoTextBold: {
      fontSize: module474.FontSize.xxxs,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
    },
    productInfoPrice: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
    },
    fullScreenButtonIcon: {
      fontSize: module474.ms(22, 0.2),
      color: 'white',
    },
  });

exports.CStyles = module480;
