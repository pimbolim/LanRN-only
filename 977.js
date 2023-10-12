exports.default = function (t) {
  var n = t.name,
    o = t.allowedProps,
    h = undefined === o ? [] : o,
    G = t.config,
    C = undefined === G ? {} : G,
    D = t.transformProps,
    P = t.customNativeProps,
    I = undefined === P ? [] : P,
    j = (function (t) {
      module35.default(j, t);

      var o = j,
        G = N(),
        P = function () {
          var t,
            n = module34.default(o);

          if (G) {
            var u = module34.default(this).constructor;
            t = Reflect.construct(n, arguments, u);
          } else t = n.apply(this, arguments);

          return module37.default(this, t);
        };

      function j(t) {
        var o;

        if (
          (module24.default(this, j),
          ((o = P.call(this, t)).updateEnqueued = null),
          (o.onGestureHandlerEvent = function (t) {
            if (t.nativeEvent.handlerTag === o.handlerTag) {
              if ('function' == typeof o.props.onGestureEvent) null == o.props.onGestureEvent || o.props.onGestureEvent(t);
            } else if (!(null == o.props.onGestureHandlerEvent)) o.props.onGestureHandlerEvent(t);
          }),
          (o.onGestureHandlerStateChange = function (t) {
            if (t.nativeEvent.handlerTag === o.handlerTag) {
              if ('function' == typeof o.props.onHandlerStateChange) null == o.props.onHandlerStateChange || o.props.onHandlerStateChange(t);
              var n = t.nativeEvent.state,
                u = J[n],
                s = u && o.props[u];
              if (s && 'function' == typeof s) s(t);
            } else null == o.props.onGestureHandlerStateChange || o.props.onGestureHandlerStateChange(t);
          }),
          (o.refHandler = function (t) {
            o.viewNode = t;
            var n = React.Children.only(o.props.children),
              u = n.ref;
            if (null !== u) 'function' == typeof u ? u(t) : (u.current = t);
          }),
          (o.createGestureHandler = function (t) {
            o.config = t;
            module971.default.createGestureHandler(n, o.handlerTag, t);
          }),
          (o.attachGestureHandler = function (t) {
            if (((o.viewTag = t), 'web' === ReactNative.Platform.OS))
              module971.default.attachGestureHandler(o.handlerTag, t, module1068.ActionType.JS_FUNCTION_OLD_API, o.propsRef);
            else {
              module966.registerOldGestureHandler(o.handlerTag, {
                onGestureEvent: o.onGestureHandlerEvent,
                onGestureStateChange: o.onGestureHandlerStateChange,
              });
              var n =
                null != (u = o.props) && u.onGestureEvent && 'current' in o.props.onGestureEvent
                  ? module1068.ActionType.REANIMATED_WORKLET
                  : null != (s = o.props) && s.onGestureEvent && '__isNative' in o.props.onGestureEvent
                  ? module1068.ActionType.NATIVE_ANIMATED_EVENT
                  : module1068.ActionType.JS_FUNCTION_OLD_API;
              module971.default.attachGestureHandler(o.handlerTag, t, n);
            }
            var u, s;
            module1067.scheduleFlushOperations();
          }),
          (o.updateGestureHandler = function (t) {
            o.config = t;
            module971.default.updateGestureHandler(o.handlerTag, t);
            module1067.scheduleFlushOperations();
          }),
          (o.handlerTag = module966.getNextHandlerTag()),
          (o.config = {}),
          (o.propsRef = React.createRef()),
          (o.state = {
            allowTouches: k,
          }),
          t.id)
        ) {
          if (undefined !== module966.handlerIDToTag[t.id]) throw new Error('Handler with ID "' + t.id + '" already registered');
          module966.handlerIDToTag[t.id] = o.handlerTag;
        }

        return o;
      }

      module25.default(j, [
        {
          key: 'componentDidMount',
          value: function () {
            var t = this,
              n = this.props;
            if (F(n))
              this.updateEnqueued = setImmediate(function () {
                t.updateEnqueued = null;
                t.update(q);
              });
            this.createGestureHandler(module1067.filterConfig(D ? D(this.props) : this.props, [].concat(module20.default(h), module20.default(I)), C));
            this.attachGestureHandler(module1067.findNodeHandle(this.viewNode));
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var t = module1067.findNodeHandle(this.viewNode);
            if (this.viewTag !== t) this.attachGestureHandler(t);
            this.update(q);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var t;
            if (!(null == (t = this.inspectorToggleListener))) t.remove();
            module971.default.dropGestureHandler(this.handlerTag);
            module1067.scheduleFlushOperations();
            if (this.updateEnqueued) clearImmediate(this.updateEnqueued);
            var n = this.props.id;
            if (n) delete module966.handlerIDToTag[n];
          },
        },
        {
          key: 'update',
          value: function (t) {
            var n = this,
              o = this.props;
            if (F(o) && t > 0)
              this.updateEnqueued = setImmediate(function () {
                n.updateEnqueued = null;
                n.update(t - 1);
              });
            else {
              var s = module1067.filterConfig(D ? D(this.props) : this.props, [].concat(module20.default(h), module20.default(I)), C);
              if (!module978.default(this.config, s)) this.updateGestureHandler(s);
            }
          },
        },
        {
          key: 'setNativeProps',
          value: function (t) {
            var n = b(b({}, this.props), t),
              o = module1067.filterConfig(D ? D(n) : n, [].concat(module20.default(h), module20.default(I)), C);
            this.updateGestureHandler(o);
          },
        },
        {
          key: 'render',
          value: function () {
            var t,
              o = this.onGestureHandlerEvent,
              u = this.props,
              s = u.onGestureEvent,
              l = u.onGestureHandlerEvent;

            if (s && 'function' != typeof s) {
              if (l) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              o = s;
            } else if (l && 'function' != typeof l) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var p = this.onGestureHandlerStateChange,
              c = this.props,
              f = c.onHandlerStateChange,
              h = c.onGestureHandlerStateChange;

            if (f && 'function' != typeof f) {
              if (h) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              p = f;
            } else if (h && 'function' != typeof h) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var y = {
              onGestureHandlerEvent: this.state.allowTouches ? o : undefined,
              onGestureHandlerStateChange: this.state.allowTouches ? p : undefined,
            };
            this.propsRef.current = y;
            var E = null;

            try {
              E = React.Children.only(this.props.children);
            } catch (t) {
              throw new Error(
                module967.tagMessage(
                  n + ' got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.'
                )
              );
            }

            var w = E.props.children;
            return React.cloneElement(
              E,
              b(
                b(
                  {
                    ref: this.refHandler,
                    collapsable: false,
                  },
                  module967.isJestEnv()
                    ? {
                        handlerType: n,
                        handlerTag: this.handlerTag,
                      }
                    : {}
                ),
                {},
                {
                  testID: null != (t = this.props.testID) ? t : E.props.testID,
                },
                y
              ),
              w
            );
          },
        },
      ]);
      return j;
    })(React.Component);

  j.displayName = n;
  return j;
};

var n,
  o,
  module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = C(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = s ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, l, p);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module978 = require('./978'),
  module971 = require('./971'),
  module964 = require('./964'),
  module966 = require('./966'),
  module1067 = require('./1067'),
  module967 = require('./967'),
  module1068 = require('./1068');

require('./1069');

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (C = function (t) {
    return t ? o : n;
  })(t);
}

function N() {
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

function D(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      D(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      D(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var P = ReactNative.UIManager,
  I = b(
    {
      onGestureHandlerEvent: {
        registrationName: 'onGestureHandlerEvent',
      },
      onGestureHandlerStateChange: {
        registrationName: 'onGestureHandlerStateChange',
      },
    },
    module967.isFabric() &&
      'android' === ReactNative.Platform.OS && {
        topOnGestureHandlerEvent: {
          registrationName: 'onGestureHandlerEvent',
        },
        topOnGestureHandlerStateChange: {
          registrationName: 'onGestureHandlerStateChange',
        },
      }
  );
P.genericDirectEventTypes = b(b({}, P.genericDirectEventTypes), I);
var j = null != (n = null == P.getViewManagerConfig ? undefined : P.getViewManagerConfig('getConstants')) ? n : null == P.getConstants ? undefined : P.getConstants();
if (j) j.genericDirectEventTypes = b(b({}, j.genericDirectEventTypes), I);
var A = P.setJSResponder,
  R = undefined === A ? function () {} : A,
  _ = P.clearJSResponder,
  M = undefined === _ ? function () {} : _;

P.setJSResponder = function (t, n) {
  module971.default.handleSetJSResponder(t, n);
  R(t, n);
};

P.clearJSResponder = function () {
  module971.default.handleClearJSResponder();
  M();
};

var k = true;

function F(t) {
  var n = function (t) {
    return Array.isArray(t)
      ? t.some(function (t) {
          return t && null === t.current;
        })
      : t && null === t.current;
  };

  return n(t.simultaneousHandlers) || n(t.waitFor);
}

o = {};
module47.default(o, module964.State.UNDETERMINED, undefined);
module47.default(o, module964.State.BEGAN, 'onBegan');
module47.default(o, module964.State.FAILED, 'onFailed');
module47.default(o, module964.State.CANCELLED, 'onCancelled');
module47.default(o, module964.State.ACTIVE, 'onActivated');
module47.default(o, module964.State.END, 'onEnded');
var J = o,
  q = 1;
