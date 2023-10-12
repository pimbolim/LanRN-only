var ReactNative = require('react-native'),
  module474 = require('./474'),
  module480 = require('./480'),
  _ = module474.ms(50);

exports.CELL_SIZE = _;
exports.CELL_BORDER_RADIUS = 0;
exports.DEFAULT_CELL_BG_COLOR = 'white';
exports.NOT_EMPTY_CELL_BG_COLOR = 'black';
exports.ACTIVE_CELL_BG_COLOR = 'white';
var C = module480.CreateStyles({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  focusCell: {
    borderColor: '#000',
  },
  cell: {
    marginHorizontal: module474.ms(8),
    height: _,
    width: _,
    backgroundColor: 'white',
    marginBottom: module474.ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2 * ReactNative.StyleSheet.hairlineWidth,
    borderColor: module474.Color.lightGray,
  },
  cellValue: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    lineHeight: 30,
  },
  codeFieldRoot: {
    height: _,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
exports.CStyles = C;
