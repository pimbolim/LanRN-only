var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    halfSizedInputsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: module474.ms(10),
    },
    standardText: {
      fontFamily: module474.FontFamily.semiBold,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
    },
    underlineText: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.m,
      color: module474.Color.black,
      textDecorationLine: 'underline',
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: module474.Color.veryLightGray,
      marginVertical: module474.ms(20),
    },
    rowTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: module474.ms(10),
    },
    progressBarMainView: {
      height: module474.ms(4),
      width: '100%',
      backgroundColor: module474.Color.lightGray,
      alignSelf: 'center',
      borderRadius: module474.ms(2.5),
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: module474.ms(17.5),
    },
    progressBarInnerView: {
      height: '100%',
      backgroundColor: module474.Color.darkGray,
    },
    pointHistoryContainer: {
      borderTopWidth: module474.ms(1.5),
      borderBottomWidth: module474.ms(1.5),
      paddingHorizontal: module474.ms(5),
      marginTop: module474.ms(40),
    },
    horizontalHistoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoTextMainContainer: {
      width: '100%',
      flexDirection: 'row',
    },
    infoContainerIconArea: {
      width: '12.5%',
      height: '100%',
    },
    infoContainerTextArea: {
      width: '87.5%',
      height: '100%',
    },
    pointsArea: {
      height: module474.ms(160),
      width: '100%',
      backgroundColor: '#F2EDE1',
    },
    pointsUpperArea: {
      width: '100%',
      height: module474.ms(120),
      flexDirection: 'row',
    },
    pointsUpperLeftArea: {
      width: '40%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pointsUpperRightArea: {
      width: '60%',
      height: '100%',
      justifyContent: 'center',
    },
    pointsUpperRightAreaHorizontalTextContainer: {
      flexDirection: 'row',
      paddingRight: module474.ms(5),
      flexWrap: 'wrap',
    },
    pointsLowerArea: {
      width: '100%',
      height: module474.ms(40),
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: module474.ms(20),
    },
    button: {
      height: module474.ms(40),
      width: '100%',
      padding: module474.ms(10),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: module474.Color.primary,
    },
    buttonText: {
      color: 'white',
      fontSize: module474.FontSize.m,
      fontFamily: module474.FontFamily.regular,
    },
    textRegularSBlack: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
    },
    textLightSBlack: {
      fontFamily: module474.FontFamily.light,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
    },
    boldSmallText: {
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.bold,
      color: module474.Color.black,
    },
    discountRegister: {
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
      width: '60%',
    },
    pointsText: {
      fontFamily: module474.FontFamily.bold,
      fontSize: module474.FontSize.s,
      marginRight: module474.ms(30),
      color: module474.Color.black,
    },
    pointsListStyle: {
      flex: 1,
      paddingBottom: module474.ms(20),
      paddingVertical: module474.ms(5),
    },
  });

exports.CStyles = module480;
