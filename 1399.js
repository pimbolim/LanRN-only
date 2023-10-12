var ReactNative = require('react-native'),
  v = {},
  u = {},
  module40 = new (require('./40').default)();

exports.SharedEventEmitter = module40;

exports.getAppEventName = function (t, n) {
  return t.app.name + '-' + n;
};

var p = function (t, u) {
    var o = u.app.name + '-' + t,
      p = ReactNative.NativeModules[t];
    if (!v[o]) v[o] = new ReactNative.NativeEventEmitter(p);
    return v[o];
  },
  E = function (t, n, v) {
    if (!u[v]) {
      p(t, n).addListener(v, function (t) {
        if (t.appName) module40.emit(t.appName + '-' + v, t);
        else module40.emit(v, t);
      });
      u[v] = true;
    }
  };

exports.initialiseNativeModuleEventEmitter = function (t, n) {
  var v = n.events,
    u = n.moduleName;
  if (v && v.length) for (var o = 0, p = v.length; o < p; o++) E(u, t, v[o]);
};
