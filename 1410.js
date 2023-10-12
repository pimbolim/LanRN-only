var module11 = require('./11'),
  React = require('react'),
  module1411 = require('./1411');

function n(t) {
  var n = module11.default({}, t);
  return React.default.createElement(
    module1411.default,
    module11.default({}, n, {
      class: 'RNFirebaseAdMobBanner',
    })
  );
}

n.propTypes = module1411.default.propTypes;
n.defaultProps = {
  size: 'SMART_BANNER',
};
var o = n;
exports.default = o;
