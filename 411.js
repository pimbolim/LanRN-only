exports.__esModule = true;
exports.createConnect = E;

var module11 = require('./11'),
  module54 = require('./54'),
  module406 = require('./406'),
  module412 = require('./412'),
  module413 = require('./413'),
  module421 = require('./421'),
  module422 = require('./422'),
  module423 = require('./423');

function v(t, o, n) {
  for (var u = o.length - 1; u >= 0; u--) {
    var p = o[u](t);
    if (p) return p;
  }

  return function (o, u) {
    throw new Error('Invalid value of type ' + typeof t + ' for ' + n + ' argument when connecting component ' + u.wrappedComponentName + '.');
  };
}

function P(t, o) {
  return t === o;
}

function E(t) {
  var E = undefined === t ? {} : t,
    q = E.connectHOC,
    S = undefined === q ? module406.default : q,
    h = E.mapStateToPropsFactories,
    w = undefined === h ? module421.default : h,
    M = E.mapDispatchToPropsFactories,
    T = undefined === M ? module413.default : M,
    C = E.mergePropsFactories,
    y = undefined === C ? module422.default : C,
    D = E.selectorFactory,
    F = undefined === D ? module423.default : D;
  return function (t, u, s, l) {
    if (undefined === l) l = {};
    var c = l,
      f = c.pure,
      E = undefined === f || f,
      q = c.areStatesEqual,
      h = undefined === q ? P : q,
      M = c.areOwnPropsEqual,
      C = undefined === M ? module412.default : M,
      D = c.areStatePropsEqual,
      O = undefined === D ? module412.default : D,
      _ = c.areMergedPropsEqual,
      N = undefined === _ ? module412.default : _,
      H = module54.default(c, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
      B = v(t, w, 'mapStateToProps'),
      I = v(u, T, 'mapDispatchToProps'),
      b = v(s, y, 'mergeProps');
    return S(
      F,
      module11.default(
        {
          methodName: 'connect',
          getDisplayName: function (t) {
            return 'Connect(' + t + ')';
          },
          shouldHandleStateChanges: Boolean(t),
          initMapStateToProps: B,
          initMapDispatchToProps: I,
          initMergeProps: b,
          pure: E,
          areStatesEqual: h,
          areOwnPropsEqual: C,
          areStatePropsEqual: O,
          areMergedPropsEqual: N,
        },
        H
      )
    );
  };
}

var q = E();
exports.default = q;
