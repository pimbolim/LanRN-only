var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    button: {
      marginTop: module474.ms(10),
      alignItems: 'center',
      justifyContent: 'center',
      padding: module474.ms(10),
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      color: 'white',
    },
    horizontalCategoryFlatList: {
      paddingBottom: 0,
      marginBottom: 0,
      height: module474.ms(40),
      marginTop: module474.ms(15),
      paddingHorizontal: module474.ms(20),
      alignItems: 'center',
    },
    horizontalCategoryCardContainer: {
      height: module474.ms(40),
      justifyContent: 'center',
      marginRight: module474.ms(30),
      alignItems: 'center',
      paddingHorizontal: module474.ms(2.5),
    },
    horizontalCategoryCardImg: {
      width: module474.ms(55),
      height: module474.ms(55),
      borderRadius: module474.ms(55) / 2,
      backgroundColor: 'blue',
    },
    horizontalCategoryCardText: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.m,
      color: module474.Color.lightGray,
    },
    verticalCategoryContainer: {
      width: '100%',
      height: module474.ms(55),
      justifyContent: 'center',
      alignItems: 'center',
    },
    verticalCategoryText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.xl,
      color: 'black',
    },
    mainContainerTextArea: {
      height: '50%',
      width: '100%',
      top: '50%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'flex-start',
      zIndex: 1,
    },
    bigText: {
      color: 'white',
      fontSize: module474.FontSize.titlehome,
      fontFamily: module474.FontFamily.regular,
      shadowOpacity: 0.5,
      width: '90%',
      textAlign: 'center',
      marginBottom: module474.ms(20),
    },
    smallerText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      marginTop: module474.ms(15),
      shadowOpacity: 0.5,
    },
    linkUnderlineText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.bold,
      marginVertical: module474.ms(7.5),
      shadowOpacity: 0.5,
      textDecorationLine: 'underline',
      marginHorizontal: module474.ms(5),
    },
    benefitsAreaDotsArea: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'absolute',
      bottom: module474.ms(20),
      right: module474.ms(25),
      zIndex: 1,
    },
    benefitsAreaDot: {
      height: module474.ms(6),
      width: module474.ms(6),
      borderRadius: module474.ms(6) / 2,
      marginBottom: module474.ms(3.5),
    },
    swiperFooter: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(15),
      paddingTop: module474.ms(25),
      paddingBottom: module474.ms(10),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    swiperFooterTitle: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.xl,
      color: module474.Color.black,
      maxWidth: '97.5%',
    },
    swiperFooterTextInput: {
      minWidth: '80%',
      maxWidth: '90%',
      height: module474.ms(30),
      backgroundColor: 'white',
      borderBottomWidth: module474.ms(1),
      borderBottomColor: module474.Color.lightGray,
      textAlign: 'center',
      marginBottom: module474.ms(10),
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    swiperSubscribeButtonWrapper: {
      minWidth: '80%',
      maxWidth: '90%',
      height: module474.ms(27.5),
      backgroundColor: module474.Color.black,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: module474.ms(10),
      borderRadius: 5,
    },
    swiperSubscribeButtonText: {
      color: 'white',
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.s,
    },
    swiperSocialIconsArea: {
      backgroundColor: 'white',
      height: module474.ms(30),
      marginBottom: module474.ms(10),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    swiperFooterLowerTextStyle: {
      color: 'black',
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.s,
      textAlign: 'center',
      maxWidth: '85%',
    },
    swiperFooterLowerSmallerTextStyle: {
      color: module474.Color.darkGray,
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.xs,
      textAlign: 'center',
      maxWidth: '85%',
    },
    swiperFooterLanguageButtonWrapper: {
      minWidth: '80%',
      maxWidth: '90%',
      height: module474.ms(22.5),
      marginTop: module474.ms(12.5),
      marginBottom: module474.ms(5),
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: module474.Color.black,
      justifyContent: 'center',
      alignItems: 'center',
    },
    swiperFooterLanguageButtonText: {
      color: 'black',
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.xs,
      textAlign: 'center',
    },
    swiperFooterBig: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      paddingHorizontal: module474.ms(15),
      paddingTop: module474.ms(75),
      paddingBottom: module474.ms(20),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    swiperFooterTitleBig: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.xxl,
      color: module474.Color.black,
      maxWidth: '80%',
    },
    swiperFooterTextInputBig: {
      minWidth: '75%',
      maxWidth: '80%',
      height: module474.ms(40),
      backgroundColor: 'white',
      borderBottomWidth: module474.ms(1),
      borderBottomColor: module474.Color.lightGray,
      textAlign: 'center',
      marginBottom: module474.ms(10),
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    swiperSubscribeButtonWrapperBig: {
      minWidth: '75%',
      maxWidth: '80%',
      height: module474.ms(40),
      backgroundColor: module474.Color.black,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: module474.ms(20),
      borderRadius: 5,
    },
    swiperSubscribeButtonTextBig: {
      color: 'white',
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.m,
    },
    swiperSocialIconsAreaBig: {
      backgroundColor: 'white',
      height: module474.ms(60),
      marginBottom: module474.ms(20),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    swiperFooterLowerTextStyleBig: {
      color: 'black',
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.m,
      textAlign: 'center',
      maxWidth: '85%',
    },
    swiperFooterLowerSmallerTextStyleBig: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.s,
      textAlign: 'center',
      maxWidth: '85%',
      color: module474.Color.darkGray,
    },
    swiperFooterLanguageButtonWrapperBig: {
      minWidth: '75%',
      maxWidth: '80%',
      height: module474.ms(40),
      marginTop: module474.ms(30),
      marginBottom: module474.ms(10),
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: module474.Color.black,
      justifyContent: 'center',
      alignItems: 'center',
    },
    swiperFooterLanguageButtonTextBig: {
      color: 'black',
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.s,
      textAlign: 'center',
    },
    maxResize: {
      width: '100%',
      height: '100%',
    },
    rowCenteredItems: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

exports.CStyles = module480;
