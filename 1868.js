var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    upperAreaContainer: {
      height: module474.ms(45),
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: module474.ms(15),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchInputContainer: {
      width: '75%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchAreaTextInput: {
      width: '100%',
      height: '100%',
      paddingHorizontal: module474.ms(10),
      fontFamily: module474.FontFamily.regular,
      fontSize: module474.FontSize.s,
      color: module474.Color.black,
    },
    headerClearContainer: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerClearText: {
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    areaContainer: {
      backgroundColor: 'white',
      width: '100%',
      paddingHorizontal: module474.ms(15),
    },
    innerAreaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: module474.ms(5),
    },
    listItemContainer: {
      width: '100%',
      height: module474.ms(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: module474.FontSize.s,
      fontFamily: module474.FontFamily.regular,
      color: module474.Color.black,
    },
    forwardIcon: {
      color: module474.Color.black,
      transform: [
        {
          rotateY: '180deg',
        },
      ],
      marginRight: module474.ms(10),
    },
    bottomTabContainer: {
      width: '100%',
      height: module474.ms(50),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    searchPhotoArea: {
      width: '25%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchPhotoText: {
      fontSize: module474.FontSize.xs,
      fontFamily: module474.FontFamily.light,
      color: module474.Color.black,
      marginTop: module474.ms(2.5),
    },
  });

exports.CStyles = module480;
