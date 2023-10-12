var module11 = require('./11'),
  React = require('react'),
  module1411 = require('./1411');

function s(t) {
  var s = module11.default({}, t);
  return React.default.createElement(
    module1411.default,
    module11.default({}, s, {
      class: 'RNFirebaseAdMobNativeExpress',
    })
  );
}

s.propTypes = module1411.default.propTypes;
s.defaultProps = {
  size: 'SMART_BANNER',
};
var o = s;
exports.default = o;
