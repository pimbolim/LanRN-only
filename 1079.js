require('./1082');

var n,
  o,
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = B(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module1080 = require('./1080'),
  module970 = require('./970'),
  module966 = require('./966'),
  module971 = require('./971'),
  module1067 = require('./1067'),
  module969 = require('./969'),
  module1076 = require('./1076'),
  module1070 = require('./1070'),
  module1072 = require('./1072'),
  module1073 = require('./1073'),
  module976 = require('./976'),
  module964 = require('./964'),
  module965 = require('./965'),
  module1068 = require('./1068'),
  module967 = require('./967'),
  module1081 = require('./1081'),
  ReactNative = require('react-native'),
  module963 = require('./963'),
  module1083 = require('./1083');

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (B = function (t) {
    return t ? o : n;
  })(t);
}

function D() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function k(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = K(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var l = 0;
    return function () {
      return l >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[l++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function K(t, n) {
  if (t) {
    if ('string' == typeof t) return Y(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Y(t, n) : undefined;
  }
}

function Y(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, l = new Array(n); o < n; o++) l[o] = t[o];

  return l;
}

var M = [].concat(
  module20.default(module1067.baseGestureHandlerWithMonitorProps),
  module20.default(module976.tapGestureHandlerProps),
  module20.default(module1073.panGestureHandlerProps),
  module20.default(module1073.panGestureHandlerCustomNativeProps),
  module20.default(module1072.longPressGestureHandlerProps),
  module20.default(module1070.forceTouchGestureHandlerProps),
  module20.default(module1076.flingGestureHandlerProps)
);

function F(t) {
  return 'number' == typeof t ? t : t instanceof module1080.BaseGesture ? t.handlerTag : null != (n = null == (o = t.current) ? undefined : o.handlerTag) ? n : -1;
  var n, o;
}

function W(t) {
  var n, o;
  return null !=
    (n =
      null == t
        ? undefined
        : null == (o = t.map(F))
        ? undefined
        : o.filter(function (t) {
            return t > 0;
          }))
    ? n
    : [];
}

function j(t) {
  for (var n, o = k(t.config); !(n = o()).done; ) {
    var l = n.value;
    module971.default.dropGestureHandler(l.handlerTag);
    module966.unregisterHandler(l.handlerTag, l.config.testId);
  }

  module1067.scheduleFlushOperations();
}

function x(t) {
  if (!t.config.runOnJS) {
    var n = t.handlers.isWorklet.includes(false),
      o = t.handlers.isWorklet.includes(true);
    if (n && o)
      console.error(
        module967.tagMessage(
          "Some of the callbacks in the gesture are worklets and some are not. Either make sure that all calbacks are marked as 'worklet' if you wish to run them on the UI thread or use '.runOnJS(true)' modifier on the gesture explicitly to run all callbacks on the JS thread."
        )
      );
  }
}

function V(t) {
  var n = t.preparedGesture,
    o = t.gestureConfig,
    l = t.gesture,
    u = t.viewTag,
    s = t.webEventHandlersRef;
  if (n.firstExecution) n.firstExecution = false;
  else if (!(null == o)) o.initialize();
  setImmediate(function () {
    if (!(null == o)) o.prepare();
  });

  for (var c, f = k(l); !(c = f()).done; ) {
    var h = c.value;
    x(h);
    module971.default.createGestureHandler(h.handlerName, h.handlerTag, module1067.filterConfig(h.config, M));
    module966.registerHandler(h.handlerTag, h, h.config.testId);
  }

  setImmediate(function () {
    for (var t, n = k(l); !(t = n()).done; ) {
      var o = t.value,
        u = [];
      if (o.config.requireToFail) u = W(o.config.requireToFail);
      var s = [];
      if (o.config.simultaneousWith) s = W(o.config.simultaneousWith);
      module971.default.updateGestureHandler(
        o.handlerTag,
        module1067.filterConfig(o.config, M, {
          simultaneousHandlers: s,
          waitFor: u,
        })
      );
    }

    module1067.scheduleFlushOperations();
  });
  n.config = l;

  for (var v, E = k(n.config); !(v = E()).done; ) {
    var T = v.value,
      L = T.shouldUseReanimated ? module1068.ActionType.REANIMATED_WORKLET : module1068.ActionType.JS_FUNCTION_NEW_API;
    if ('web' === ReactNative.Platform.OS) module971.default.attachGestureHandler(T.handlerTag, u, module1068.ActionType.JS_FUNCTION_OLD_API, s);
    else module971.default.attachGestureHandler(T.handlerTag, u, L);
  }

  if (n.animatedHandlers) {
    n.animatedHandlers.value = l
      .filter(function (t) {
        return t.shouldUseReanimated;
      })
      .map(function (t) {
        return t.handlers;
      });
  }
}

function J(t, n, o) {
  if (!(null == n)) n.prepare();

  for (var l = 0; l < o.length; l++) {
    var u = t.config[l];
    x(u);

    if (o[l].handlerTag !== u.handlerTag) {
      o[l].handlerTag = u.handlerTag;
      o[l].handlers.handlerTag = u.handlerTag;
    }
  }

  setImmediate(function () {
    for (var n = 0; n < o.length; n++) {
      var l = t.config[n];
      l.config = o[n].config;
      l.handlers = o[n].handlers;
      var u = W(l.config.requireToFail),
        s = W(l.config.simultaneousWith);
      module971.default.updateGestureHandler(
        l.handlerTag,
        module1067.filterConfig(l.config, M, {
          simultaneousHandlers: s,
          waitFor: u,
        })
      );
      module966.registerHandler(l.handlerTag, l, l.config.testId);
    }

    if (t.animatedHandlers) {
      var c,
        f = null != (c = t.animatedHandlers.value) ? c : [],
        h = t.config
          .filter(function (t) {
            return t.shouldUseReanimated;
          })
          .map(function (t) {
            return t.handlers;
          }),
        v = f.length !== h.length;
      if (!v)
        for (var E = 0; E < h.length; E++)
          if (h[E].gestureId !== f[E].gestureId) {
            v = true;
            break;
          }
      if (v) t.animatedHandlers.value = h;
    }

    module1067.scheduleFlushOperations();
  });
}

function z(t, n) {
  if (n.length !== t.config.length) return true;

  for (var o = 0; o < n.length; o++) if (n[o].handlerName !== t.config[o].handlerName || n[o].shouldUseReanimated !== t.config[o].shouldUseReanimated) return true;

  return false;
}

function q(t) {
  'worklet';

  return null != t.oldState;
}

function Z(t) {
  'worklet';

  return null != t.eventType;
}

function $(t, n) {
  'worklet';

  switch (t) {
    case module1080.CALLBACK_TYPE.BEGAN:
      return n.onBegin;

    case module1080.CALLBACK_TYPE.START:
      return n.onStart;

    case module1080.CALLBACK_TYPE.UPDATE:
      return n.onUpdate;

    case module1080.CALLBACK_TYPE.CHANGE:
      return n.onChange;

    case module1080.CALLBACK_TYPE.END:
      return n.onEnd;

    case module1080.CALLBACK_TYPE.FINALIZE:
      return n.onFinalize;

    case module1080.CALLBACK_TYPE.TOUCHES_DOWN:
      return n.onTouchesDown;

    case module1080.CALLBACK_TYPE.TOUCHES_MOVE:
      return n.onTouchesMove;

    case module1080.CALLBACK_TYPE.TOUCHES_UP:
      return n.onTouchesUp;

    case module1080.CALLBACK_TYPE.TOUCHES_CANCELLED:
      return n.onTouchesCancelled;
  }
}

function Q(t) {
  'worklet';

  switch (t) {
    case module965.TouchEventType.TOUCHES_DOWN:
      return module1080.CALLBACK_TYPE.TOUCHES_DOWN;

    case module965.TouchEventType.TOUCHES_MOVE:
      return module1080.CALLBACK_TYPE.TOUCHES_MOVE;

    case module965.TouchEventType.TOUCHES_UP:
      return module1080.CALLBACK_TYPE.TOUCHES_UP;

    case module965.TouchEventType.TOUCHES_CANCELLED:
      return module1080.CALLBACK_TYPE.TOUCHES_CANCELLED;
  }

  return module1080.CALLBACK_TYPE.UNDEFINED;
}

function X(t, n, o) {
  'worklet';

  var l = $(t, n);

  if (n.isWorklet[t]) {
    for (var u = arguments.length, s = new Array(u > 3 ? u - 3 : 0), c = 3; c < u; c++) s[c - 3] = arguments[c];

    if (!(null == l)) l.apply(undefined, [o].concat(s));
  } else l && console.warn(module967.tagMessage('Animated gesture callback must be a worklet'));
}

function ee(t, n) {
  if (module970.Reanimated) {
    var o = module970.Reanimated.useSharedValue(null),
      l = module970.Reanimated.useSharedValue([]),
      u = [],
      s = module970.Reanimated.useEvent(
        function (t) {
          'worklet';

          var n = o.value;
          if (n)
            for (var s = 0; s < n.length; s++) {
              var c = n[s];
              if (t.handlerTag === c.handlerTag)
                q(t)
                  ? t.oldState === module964.State.UNDETERMINED && t.state === module964.State.BEGAN
                    ? X(module1080.CALLBACK_TYPE.BEGAN, c, t)
                    : (t.oldState !== module964.State.BEGAN && t.oldState !== module964.State.UNDETERMINED) || t.state !== module964.State.ACTIVE
                    ? t.oldState !== t.state && t.state === module964.State.END
                      ? (t.oldState === module964.State.ACTIVE && X(module1080.CALLBACK_TYPE.END, c, t, true), X(module1080.CALLBACK_TYPE.FINALIZE, c, t, true))
                      : (t.state !== module964.State.FAILED && t.state !== module964.State.CANCELLED) ||
                        t.state === t.oldState ||
                        (t.oldState === module964.State.ACTIVE && X(module1080.CALLBACK_TYPE.END, c, t, false), X(module1080.CALLBACK_TYPE.FINALIZE, c, t, false))
                    : (X(module1080.CALLBACK_TYPE.START, c, t), (l.value[c.handlerTag] = undefined))
                  : Z(t)
                  ? (u[s] || (u[s] = module969.GestureStateManager.create(t.handlerTag)), t.eventType !== module965.TouchEventType.UNDETERMINED && X(Q(t.eventType), c, t, u[s]))
                  : (X(module1080.CALLBACK_TYPE.UPDATE, c, t),
                    c.onChange &&
                      c.changeEventCalculator &&
                      (X(module1080.CALLBACK_TYPE.CHANGE, c, null == c.changeEventCalculator ? undefined : c.changeEventCalculator(t, l.value[c.handlerTag])),
                      (l.value[c.handlerTag] = t)));
            }
        },
        ['onGestureHandlerStateChange', 'onGestureHandlerEvent'],
        n
      );
    t.animatedEventHandler = s;
    t.animatedHandlers = o;
  }
}

exports.GestureDetector = function (t) {
  var n,
    o = t.gesture,
    l = null != (n = null == o ? undefined : null == o.toGestureArray ? undefined : o.toGestureArray()) ? n : [],
    u = l.some(function (t) {
      return t.shouldUseReanimated;
    }),
    s = React.useRef(null),
    c = React.useRef(true),
    f = React.useRef({
      onGestureHandlerEvent: function (t) {
        module963.onGestureHandlerEvent(t.nativeEvent);
      },
      onGestureHandlerStateChange: module1083.isExperimentalWebImplementationEnabled()
        ? function (t) {
            module963.onGestureHandlerEvent(t.nativeEvent);
          }
        : undefined,
    }),
    h = React.default.useRef({
      config: l,
      animatedEventHandler: null,
      animatedHandlers: null,
      firstExecution: true,
      useReanimatedHook: u,
    }).current;
  if (u !== h.useReanimatedHook) throw new Error(module967.tagMessage('You cannot change the thread the callbacks are ran on while the app is running'));
  var E = h.firstExecution || z(h, l);
  if (h.firstExecution) null == o || null == o.initialize || o.initialize();
  if (u) ee(h, E);
  React.useEffect(function () {
    c.current = true;
    var t = module1067.findNodeHandle(s.current);
    V({
      preparedGesture: h,
      gestureConfig: o,
      gesture: l,
      viewTag: t,
      webEventHandlersRef: f,
    });
    return function () {
      j(h);
    };
  }, []);
  React.useEffect(
    function () {
      if (c.current) c.current = false;
      else {
        var t = module1067.findNodeHandle(s.current);

        if (z(h, l)) {
          s.current;
          j(h);
          V({
            preparedGesture: h,
            gestureConfig: o,
            gesture: l,
            viewTag: t,
            webEventHandlersRef: f,
          });
        } else J(h, o, l);
      }
    },
    [t]
  );

  var T = function (t) {
    if (null !== t && ((s.current = t), module967.isFabric())) {
      var n = module1081.getShadowNodeFromRef(t);
      if (false === globals.isFormsStackingContext(n))
        console.error(
          module967.tagMessage(
            'GestureDetector has received a child that may get view-flattened. \nTo prevent it from misbehaving you need to wrap the child with a `<View collapsable={false}>`.'
          )
        );
    }
  };

  return u
    ? React.default.createElement(
        ne,
        {
          ref: T,
          onGestureHandlerEvent: h.animatedEventHandler,
        },
        t.children
      )
    : React.default.createElement(
        te,
        {
          ref: T,
        },
        t.children
      );
};

var te = (function (t) {
    module35.default(E, t);

    var n = E,
      o = D(),
      h = function () {
        var t,
          l = module34.default(n);

        if (o) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(l, arguments, u);
        } else t = l.apply(this, arguments);

        return module37.default(this, t);
      };

    function E() {
      module24.default(this, E);
      return h.apply(this, arguments);
    }

    module25.default(E, [
      {
        key: 'render',
        value: function () {
          try {
            var t = React.default.Children.only(this.props.children);
            return React.default.cloneElement(
              t,
              {
                collapsable: false,
              },
              t.props.children
            );
          } catch (t) {
            throw new Error(
              module967.tagMessage(
                'GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.'
              )
            );
          }
        },
      },
    ]);
    return E;
  })(React.default.Component),
  ne = null != (n = null == module970.Reanimated ? undefined : null == (o = module970.Reanimated.default) ? undefined : o.createAnimatedComponent(te)) ? n : te;
