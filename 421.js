exports.__esModule = true;
exports.whenMapStateToPropsIsFunction = t;
exports.whenMapStateToPropsIsMissing = n;

var module417 = require('./417');

function t(t) {
  return 'function' == typeof t ? module417.wrapMapToPropsFunc(t, 'mapStateToProps') : undefined;
}

function n(t) {
  return t
    ? undefined
    : module417.wrapMapToPropsConstant(function () {
        return {};
      });
}

var u = [t, n];
exports.default = u;
