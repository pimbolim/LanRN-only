exports.__esModule = true;
exports.whenMapDispatchToPropsIsFunction = t;
exports.whenMapDispatchToPropsIsMissing = p;
exports.whenMapDispatchToPropsIsObject = s;

var module414 = require('./414'),
  module417 = require('./417');

function t(o) {
  return 'function' == typeof o ? module417.wrapMapToPropsFunc(o, 'mapDispatchToProps') : undefined;
}

function p(o) {
  return o
    ? undefined
    : module417.wrapMapToPropsConstant(function (o) {
        return {
          dispatch: o,
        };
      });
}

function s(t) {
  return t && 'object' == typeof t
    ? module417.wrapMapToPropsConstant(function (n) {
        return module414.bindActionCreators(t, n);
      })
    : undefined;
}

var c = [t, p, s];
exports.default = c;
