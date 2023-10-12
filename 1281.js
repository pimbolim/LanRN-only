exports.default = function (t) {
  var O = (function (O) {
    module35.default(w, O);

    var b = w,
      P = j(),
      F = function () {
        var t,
          n = module34.default(b);

        if (P) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w() {
      var t;
      module24.default(this, w);

      (t = F.call(this)).setValues = function (n) {
        var o = _(_({}, t.state.values), n),
          u = t._displayedFields(),
          c = new module1282.default(u).formatValues(o),
          s = new module1302.default(u).validateValues(c),
          f = _(
            {
              values: c,
            },
            s
          );

        t.setState(f, function () {
          t.props.onChange(f);
        });
      };

      t.focus = function () {
        var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 'number';
        t.setState({
          focused: n,
        });
      };

      t._displayedFields = function () {
        return module603.compact(['name', 'number', 'expiry', 'cvc']);
      };

      t._focusPreviousField = function (n) {
        var o = t._displayedFields(),
          u = o.indexOf(n),
          c = o[u - 1];

        if (c) t.focus(c);
      };

      t._focusNextField = function (n) {
        var o = t._displayedFields(),
          u = o.indexOf(n),
          c = o[u + 1];

        if (c) t.focus(c);
      };

      t._change = function (n, u) {
        t.setValues(module47.default({}, n, u));
      };

      t._blur = function (n) {
        var u = t.state,
          c = u.status,
          s = _({}, t.state.values),
          f = t._displayedFields(),
          l = new module1282.default(f).formatValues(s),
          p = new module1302.default([n]).validateValues(l),
          v = p.status[n];

        if ('incomplete' === v) v = 'invalid';
        var O = {
          values: l,
          status: _(_({}, c), {}, module47.default({}, n, v)),
          valid: p.valid,
        };
        t.setState(O, function () {
          t.props.onChange(O);
        });
      };

      t._onFocus = function (n) {
        t.focus(n);
        t.props.onFocus(n);
      };

      t.state = {
        focused: '',
        values: {},
        status: {},
      };
      return t;
    }

    module25.default(w, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.timeout = setTimeout(function () {
            if (t.props.autoFocus) t.focus('name');
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          clearTimeout(this.timeout);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            t,
            module11.default({}, this.props, this.state, {
              onFocus: this._onFocus,
              onChange: this._change,
              onBlur: this._blur,
              onBecomeEmpty: this._focusPreviousField,
              onBecomeValid: this._focusNextField,
            })
          );
        },
      },
    ]);
    return w;
  })(React.Component);

  O.propTypes = {};
  O.defaultProps = {
    autoFocus: false,
    onChange: function () {},
    onFocus: function () {},
  };
  return O;
};

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
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module603 = require('./603'),
  module1282 = require('./1282'),
  module1302 = require('./1302');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function b(t, n) {
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

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      b(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function j() {
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
