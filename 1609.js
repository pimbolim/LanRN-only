var module474 = require('./474'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    horizontalCategoryFlatList: {
      paddingBottom: 0,
      marginBottom: 0,
      height: module474.ms(40),
      marginTop: module474.ms(5),
      paddingHorizontal: module474.ms(20),
      alignItems: 'center',
    },
    horizontalCategoryCardContainer: {
      height: module474.ms(40),
      justifyContent: 'center',
      marginRight: module474.ms(30),
      alignItems: 'center',
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
    categoryImageContainer: {
      width: '100%',
      height: module474.ms(150),
    },
    categoryImage: {
      width: '100%',
      height: '100%',
    },
    categoryTextContainer: {
      height: module474.ms(45),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: module474.ms(20),
    },
  });

exports.CStyles = module480;
