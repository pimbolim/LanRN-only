var module11 = require('./11'),
  module47 = require('./47');

function o(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function s(t) {
  for (var s = 1; s < arguments.length; s++) {
    var c = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      o(Object(c), true).forEach(function (o) {
        module47(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      o(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var module62 = require('./62'),
  module44 = require('./44'),
  module179 = require('./179'),
  module3 = require('./3'),
  module180 = require('./180'),
  module181 = require('./181'),
  module76 = require('./76'),
  module182 = require('./182'),
  module183 = require('./183'),
  module79 = require('./79'),
  module5 = require('./5');

var w = false;

function T(t) {
  var n = module44.getConstants();
  if (n.ViewManagerNames || n.LazyViewManagersEnabled) t = P(t, module44.getDefaultEventTypes());
  else {
    t.bubblingEventTypes = P(t.bubblingEventTypes, n.genericBubblingEventTypes);
    t.directEventTypes = P(t.directEventTypes, n.genericDirectEventTypes);
  }
}

function P(t, n) {
  if (!n) return t;
  if (!t) return n;

  for (var o in n)
    if (n.hasOwnProperty(o)) {
      var s = n[o];

      if (t.hasOwnProperty(o)) {
        var c = t[o];
        if ('object' == typeof s && 'object' == typeof c) s = P(c, s);
      }

      t[o] = s;
    }

  return t;
}

function j(t) {
  switch (t) {
    case 'CATransform3D':
      return module180;

    case 'CGPoint':
      return module181;

    case 'CGSize':
      return module79;

    case 'UIEdgeInsets':
      return module179;
  }

  return null;
}

function h(t) {
  switch (t) {
    case 'CGColor':
    case 'UIColor':
      return module76;

    case 'CGColorArray':
    case 'UIColorArray':
      return module182;

    case 'CGImage':
    case 'UIImage':
    case 'RCTImageSource':
      return module183;

    case 'Color':
      return module76;

    case 'ColorArray':
      return module182;
  }

  return null;
}

module.exports = function (n) {
  var o = module44.getViewManagerConfig(n);
  module3(null != o && null != o.NativeProps, 'requireNativeComponent: "%s" was not found in the UIManager.', n);

  for (var l = o.baseModuleName, b = o.bubblingEventTypes, v = o.directEventTypes, f = o.NativeProps; l; ) {
    var y = module44.getViewManagerConfig(l);

    if (y) {
      b = s(s({}, y.bubblingEventTypes), b);
      v = s(s({}, y.directEventTypes), v);
      f = s(s({}, y.NativeProps), f);
      l = y.baseModuleName;
    } else {
      module5(false, 'Base module "%s" does not exist', l);
      l = null;
    }
  }

  var O = {};

  for (var C in f) {
    var P = f[C],
      I = j(P),
      N = h(P);
    O[C] = (null == I && null == N) || {
      diff: I,
      process: N,
    };
  }

  O.style = module62;
  module11(o, {
    uiViewClassName: n,
    validAttributes: O,
    bubblingEventTypes: b,
    directEventTypes: v,
  });

  if (!w) {
    T(o);
    w = true;
  }

  return o;
};
