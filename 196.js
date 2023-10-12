var module47 = require('./47'),
  module197 = require('./197');

function o(t, n) {
  var c = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    c.push.apply(c, o);
  }

  return c;
}

function s(t) {
  for (var c = 1; c < arguments.length; c++) {
    var s = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(s), true).forEach(function (c) {
        module47.default(t, c, s[c]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      o(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var module173 = require('./173'),
  module188 = require('./188');

module.exports = function (t, n) {
  var o = {
    uiViewClassName: t,
    Commands: {},
    bubblingEventTypes: s(s({}, module188.bubblingEventTypes), n.bubblingEventTypes || {}),
    directEventTypes: s(s({}, module188.directEventTypes), n.directEventTypes || {}),
    validAttributes: s(s({}, module188.validAttributes), n.validAttributes || {}),
  };
  module173.register(t, function () {
    module197.default(t, o);
    return o;
  });
};
