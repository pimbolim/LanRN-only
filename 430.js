var React = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var s = {},
    p = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var f = p ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (f && (f.get || f.set)) Object.defineProperty(s, c, f);
      else s[c] = t[c];
    }

  s.default = t;
  if (u) u.set(t, s);
  return s;
})(require('react'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

function o(t) {
  return (o =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
}

function u(t, n) {
  if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
}

function s(t, n) {
  for (var o = 0; o < n.length; o++) {
    var u = n[o];
    u.enumerable = u.enumerable || false;
    u.configurable = true;
    if ('value' in u) u.writable = true;
    Object.defineProperty(t, u.key, u);
  }
}

function p(t) {
  return (p = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}

function c(t) {
  if (undefined === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}

function f(t, n) {
  if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true,
    },
  });
  if (n) l(t, n);
}

function l(t, n) {
  return (l =
    Object.setPrototypeOf ||
    function (t, n) {
      t.__proto__ = n;
      return t;
    })(t, n);
}

function b(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var y = (function (n, ...args) {
  function l() {
    var t, n, s, f;
    u(this, l);
    s = this;
    f = (t = p(l)).call.apply(t, [this].concat(args));
    b(c((n = !f || ('object' !== o(f) && 'function' != typeof f) ? c(s) : f)), 'state', {
      bootstrapped: false,
    });
    b(c(n), '_unsubscribe', undefined);
    b(c(n), 'handlePersistorState', function () {
      if (n.props.persistor.getState().bootstrapped) {
        if (n.props.onBeforeLift)
          Promise.resolve(n.props.onBeforeLift()).finally(function () {
            return n.setState({
              bootstrapped: true,
            });
          });
        else
          n.setState({
            bootstrapped: true,
          });
        if (n._unsubscribe) n._unsubscribe();
      }
    });
    return n;
  }

  var y, h, v;
  f(l, React.PureComponent);
  y = l;
  if (
    (h = [
      {
        key: 'componentDidMount',
        value: function () {
          this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
          this.handlePersistorState();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this._unsubscribe) this._unsubscribe();
        },
      },
      {
        key: 'render',
        value: function () {
          return 'function' == typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
        },
      },
    ])
  )
    s(y.prototype, h);
  if (v) s(y, v);
  return l;
})();

exports.PersistGate = y;
b(y, 'defaultProps', {
  children: null,
  loading: null,
});
