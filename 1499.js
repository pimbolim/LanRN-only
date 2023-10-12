var module11 = require('./11'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native');

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

function v(t) {
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

function y() {
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

function _(t, n) {
  return new Date(t.valueOf() + 60 * n * 1e3);
}

var D = ReactNative.requireNativeComponent('DatePickerManager', I, {
    nativeOnly: {
      onChange: true,
    },
  }),
  P = 180,
  b = 240,
  C = 310,
  I = (function (t, ...args) {
    module35.default(j, t);

    var module47 = j,
      h = y(),
      I = function () {
        var t,
          n = module34.default(module47);

        if (h) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function j() {
      var t;
      module24.default(this, j);

      (t = I.call(this, ...args)).getProps = function () {
        return v(
          v({}, t.props),
          {},
          {
            date: t._date(),
            minimumDate: t._minimumDate(),
            maximumDate: t._maximumDate(),
            utc: undefined !== t.props.timeZoneOffsetInMinutes,
            style: t._getStyle(),
          }
        );
      };

      t._getStyle = function () {
        return [
          {
            width: 'time' === t.props.mode ? b : C,
            height: P,
          },
          t.props.style,
        ];
      };

      t._onChange = function (n) {
        var o = t._fromIsoWithTimeZoneOffset(n.nativeEvent.date);

        if (t.props.onDateChange) t.props.onDateChange(o);
        if (t.props.onDateStringChange) t.props.onDateStringChange(n.nativeEvent.dateString);
      };

      t._maximumDate = function () {
        return t.props.maximumDate && t._toIsoWithTimeZoneOffset(t.props.maximumDate);
      };

      t._minimumDate = function () {
        return t.props.minimumDate && t._toIsoWithTimeZoneOffset(t.props.minimumDate);
      };

      t._date = function () {
        return t._toIsoWithTimeZoneOffset(t.props.date);
      };

      t._fromIsoWithTimeZoneOffset = function (n) {
        var o = new Date(n);
        return undefined === t.props.timeZoneOffsetInMinutes ? o : _(o, -t.props.timeZoneOffsetInMinutes);
      };

      t._toIsoWithTimeZoneOffset = function (n) {
        return undefined === t.props.timeZoneOffsetInMinutes ? n.toISOString() : _(n, t.props.timeZoneOffsetInMinutes).toISOString();
      };

      t._onConfirm = function (n) {
        t.props.onConfirm(t._fromIsoWithTimeZoneOffset(n));
      };

      return t;
    }

    module25.default(j, [
      {
        key: 'render',
        value: function () {
          var t = this.getProps();

          if (t.modal) {
            if (t.open) ReactNative.NativeModules.RNDatePicker.openPicker(t, this._onConfirm, this.props.onCancel);
            return null;
          } else
            return React.default.createElement(
              D,
              module11.default({}, t, {
                onChange: this._onChange,
              })
            );
        },
      },
    ]);
    return j;
  })(React.default.PureComponent),
  j = I;

exports.default = j;
