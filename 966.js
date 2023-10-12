exports.findHandler = s;

exports.findHandlerByTestID = function (n) {
  var t,
    l = u.get(n);
  return undefined !== l && null != (t = s(l)) ? t : null;
};

exports.findOldGestureHandler = function (n) {
  return l.get(n);
};

exports.getNextHandlerTag = function () {
  return o++;
};

exports.registerHandler = function (l, o, s) {
  t.set(l, o);
  if (module967.isJestEnv() && s) u.set(s, l);
};

exports.registerOldGestureHandler = function (n, t) {
  l.set(n, t);
};

exports.unregisterHandler = function (l, o) {
  t.delete(l);
  if (module967.isJestEnv() && o) u.delete(o);
};

var module967 = require('./967');

exports.handlerIDToTag = {};
var t = new Map(),
  l = new Map(),
  u = new Map(),
  o = 1;

function s(n) {
  return t.get(n);
}
