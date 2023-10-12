exports.getCallID = function () {
  return y;
};

exports.setCallID = function (t) {
  y = t;
};

var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module908 = require('./908'),
  ReactNative = require('react-native');

function s(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(t);

    if (n)
      _ = _.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, _);
  }

  return o;
}

function c(t) {
  for (var o = 1; o < arguments.length; o++) {
    var _ = null != arguments[o] ? arguments[o] : {};

    if (o % 2)
      s(Object(_), true).forEach(function (o) {
        module47.default(t, o, _[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(_));
    else
      s(Object(_)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(_, n));
      });
  }

  return t;
}

var h = [],
  f = 1,
  v = null,
  p = 0,
  y = '';

function D(t) {
  if ('web' === ReactNative.Platform.OS || ['undefined', 'string', 'function', 'boolean', 'number'].includes(typeof t)) return t;
  if (Array.isArray(t)) return t.map(D);
  if (t instanceof k) return t.__nodeID;

  if ('object' == typeof t) {
    var n = {};

    for (var o in t) o in t && (n[o] = D(t[o]));

    return n;
  }

  return t;
}

function I() {
  for (
    var t = new Set(),
      n = function n(o) {
        if (o) {
          if (!t.has(o))
            if ((t.add(o), 'function' == typeof o.update)) o.update();
            else {
              var _ = o.__getChildren();

              if (_) for (var l = 0, u = _.length; l < u; l++) n(_[l]);
            }
        } else console.warn('findAndUpdateNodes was passed a nullish node');
      },
      o = 0;
    o < h.length;
    o++
  ) {
    n(h[o]);
  }

  h.length = 0;
  v = null;
  f += 1;
}

var k = (function () {
  function t(n, _) {
    module24.default(this, t);
    this.__lastLoopID = {
      '': -1,
    };
    this.__memoizedValue = {
      '': null,
    };
    this.__children = [];
    this.__nodeID = ++p;
    this.__nodeConfig = D(n);
    this.__initialized = false;
    this.__inputNodes =
      _ &&
      _.filter(function (n) {
        return n instanceof t;
      });
  }

  module25.default(t, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedNode, id: ' + this.__nodeID;
      },
    },
    {
      key: '__attach',
      value: function () {
        this.__nativeInitialize();

        var t = this.__inputNodes;
        if (t) for (var n = 0, o = t.length; n < o; n++) t[n].__addChild(this);
      },
    },
    {
      key: '__detach',
      value: function () {
        var t = this.__inputNodes;
        if (t) for (var n = 0, o = t.length; n < o; n++) t[n].__removeChild(this);

        this.__nativeTearDown();
      },
    },
    {
      key: '__getValue',
      value: function () {
        if (!(y in this.__lastLoopID) || this.__lastLoopID[y] < f) {
          this.__lastLoopID[y] = f;

          var t = this.__onEvaluate();

          this.__memoizedValue[y] = t;
          return t;
        }

        return this.__memoizedValue[y];
      },
    },
    {
      key: '__forceUpdateCache',
      value: function (t) {
        this.__memoizedValue[y] = t;

        this.__markUpdated();
      },
    },
    {
      key: '__dangerouslyRescheduleEvaluate',
      value: function () {
        this.__lastLoopID[y] = -1;

        this.__markUpdated();
      },
    },
    {
      key: '__markUpdated',
      value: function () {
        h.push(this);
        if (!v) v = setImmediate(I);
      },
    },
    {
      key: '__nativeInitialize',
      value: function () {
        if (!this.__initialized) {
          module908.default.createNode(this.__nodeID, c({}, this.__nodeConfig));
          this.__initialized = true;
        }
      },
    },
    {
      key: '__nativeTearDown',
      value: function () {
        if (this.__initialized) {
          module908.default.dropNode(this.__nodeID);
          this.__initialized = false;
        }
      },
    },
    {
      key: 'isNativelyInitialized',
      value: function () {
        return this.__initialized;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        throw new Error('Missing implementation of onEvaluate');
      },
    },
    {
      key: '__getProps',
      value: function () {
        return this.__getValue();
      },
    },
    {
      key: '__getChildren',
      value: function () {
        return this.__children;
      },
    },
    {
      key: '__addChild',
      value: function (t) {
        if (0 === this.__children.length) this.__attach();

        this.__children.push(t);

        t.__nativeInitialize();

        if (module908.default.connectNodes) module908.default.connectNodes(this.__nodeID, t.__nodeID);
        else t.__dangerouslyRescheduleEvaluate();
      },
    },
    {
      key: '__removeChild',
      value: function (t) {
        var n = this.__children.indexOf(t);

        if (-1 !== n) {
          if (module908.default.disconnectNodes) module908.default.disconnectNodes(this.__nodeID, t.__nodeID);

          this.__children.splice(n, 1);

          if (0 === this.__children.length) this.__detach();
        } else console.warn("Trying to remove a child that doesn't exist");
      },
    },
    {
      key: '_connectAnimatedView',
      value: function (t) {
        if (module908.default.connectNodeToView) module908.default.connectNodeToView(this.__nodeID, t);
        else this.__dangerouslyRescheduleEvaluate();
      },
    },
    {
      key: '_disconnectAnimatedView',
      value: function (t) {
        module908.default.disconnectNodeFromView(this.__nodeID, t);
      },
    },
  ]);
  return t;
})();

exports.default = k;
