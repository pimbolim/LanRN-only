var module11 = require('./11'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function h(t, n) {
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

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      h(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function P() {
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

var b = ReactNative.requireNativeComponent('RNDatePicker'),
  D = (function (t, ...args) {
    module35.default(D, t);

    var module47 = D,
      y = P(),
      h = function () {
        var t,
          n = module34.default(module47);

        if (y) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D() {
      var t;
      module24.default(this, D);
      (t = h.call(this, ...args))._picker = null;

      t._onChange = function (n) {
        var o = n.nativeEvent.timestamp;
        if (t.props.onDateChange) t.props.onDateChange(new Date(o));
      };

      t._toIosProps = function (t) {
        return O(
          O({}, t),
          {},
          {
            style: [j.datePickerIOS, t.style],
            date: t.date ? t.date.getTime() : undefined,
            locale: t.locale ? t.locale : undefined,
            maximumDate: t.maximumDate ? t.maximumDate.getTime() : undefined,
            minimumDate: t.minimumDate ? t.minimumDate.getTime() : undefined,
          }
        );
      };

      t._onConfirm = function (n) {
        var o = n.timestamp;
        t.props.onConfirm(new Date(o));
      };

      return t;
    }

    module25.default(D, [
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this.props.date) {
            var t = this.props.date.getTime();
            if (this._picker)
              this._picker.setNativeProps({
                date: t,
              });
          }
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this._toIosProps(this.props);

          if (o.modal) {
            if (o.open) ReactNative.NativeModules.RNDatePickerManager.openPicker(o, this._onConfirm, o.onCancel);
            return null;
          } else
            return React.default.createElement(
              b,
              module11.default(
                {
                  key: o.textColor,
                  ref: function (n) {
                    t._picker = n;
                  },
                  onChange: this._onChange,
                  onStartShouldSetResponder: function () {
                    return true;
                  },
                  onResponderTerminationRequest: function () {
                    return false;
                  },
                },
                o
              )
            );
        },
      },
    ]);
    return D;
  })(React.default.Component);

exports.default = D;
var j = ReactNative.StyleSheet.create({
  datePickerIOS: {
    height: 216,
    width: 310,
  },
});
