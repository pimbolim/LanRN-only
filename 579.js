var module474 = require('./474'),
  module480 = require('./480'),
  ReactNative = require('react-native').Dimensions.get('window').width,
  l = module474.ms(48);

exports.height = l;
var s = module480.CreateStyles({
  root: {
    width: '100%',
    zIndex: 5,
  },
  rootTransparent: {
    width: '100%',
    zIndex: 5,
  },
  top: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    height: module474.ms(50),
    backgroundColor: 'white',
  },
  containerTransparent: {
    width: '100%',
    height: module474.ms(50),
  },
  contentContainer: {
    zIndex: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingHorizontal: module474.ms(10),
    maxWidth: ReactNative < 375 ? module474.ms(225) : ReactNative < 414 ? module474.ms(290) : module474.ms(350),
    color: module474.Color.black,
    fontSize: module474.FontSize.xxxl,
    textAlign: 'center',
    fontFamily: module474.FontFamily.regular,
  },
  productName: {
    paddingHorizontal: module474.ms(5),
    width: '100%',
    color: module474.Color.black,
    fontSize: module474.FontSize.l,
    textAlign: 'left',
    fontFamily: module474.FontFamily.bold,
  },
  icon: {
    color: module474.Color.black,
    fontSize: module474.ms(22),
  },
  back: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
  leftContainer: {
    flex: 1,
    paddingHorizontal: module474.ms(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: module474.ms(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  webViewRightIconContainer: {
    flex: 1,
    paddingHorizontal: module474.ms(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  addressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  address: {
    paddingRight: module474.ms(10),
    color: module474.Color.black,
    fontSize: module474.FontSize.l,
    fontFamily: module474.FontFamily.bold,
  },
  iconContainer: {
    width: module474.ms(34),
    alignItems: 'flex-end',
  },
});
exports.CStyles = s;
