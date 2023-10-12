exports.createTransitioningComponent = N;

var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  React = require('react'),
  ReactNative = require('react-native'),
  module908 = require('./908'),
  y = ['transition'];

function k(t) {
  var n = M();
  return function () {
    var o,
      u = module34.default(t);

    if (n) {
      var s = module34.default(this).constructor;
      o = Reflect.construct(u, arguments, s);
    } else o = u.apply(this, arguments);

    return module37.default(this, o);
  };
}

function M() {
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

var x = React.default.createContext();

function T(t, n) {
  var o = {
    type: t,
  };
  if ('durationMs' in n) o.durationMs = n.durationMs;
  if ('interpolation' in n) o.interpolation = n.interpolation;
  if ('type' in n) o.animation = n.type;
  if ('delayMs' in n) o.delayMs = n.delayMs;
  if ('propagation' in n) o.propagation = n.propagation;
  return o;
}

function C(t) {
  return function (n) {
    return React.default.createElement(x.Consumer, null, function (o) {
      return React.default.createElement(
        t,
        module11.default(
          {
            context: o,
          },
          n
        )
      );
    });
  };
}

var R = (function (t) {
    module35.default(l, t);
    var n = k(l);

    function l() {
      module24.default(this, l);
      return n.apply(this, arguments);
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(T('in', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  w = (function (t) {
    module35.default(l, t);
    var n = k(l);

    function l() {
      module24.default(this, l);
      return n.apply(this, arguments);
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(T('change', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  E = (function (t) {
    module35.default(l, t);
    var n = k(l);

    function l() {
      module24.default(this, l);
      return n.apply(this, arguments);
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(T('out', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return l;
  })(React.default.Component),
  P = (function (t, ...args) {
    module35.default(l, t);
    var n = k(l);

    function l() {
      var t;
      module24.default(this, l);
      (t = n.call(this, ...args)).transitions = [];
      return t;
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = T('group', this.props);
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            x.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return l;
  })(React.default.Component),
  D = (function (t, ...args) {
    module35.default(l, t);
    var n = k(l);

    function l() {
      var t;
      module24.default(this, l);
      (t = n.call(this, ...args)).transitions = [];
      return t;
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = T('group', this.props);
          t.sequence = true;
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            x.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return l;
  })(React.default.Component);

function N(t) {
  return (function (l, ...args) {
    module35.default(M, l);
    var f = k(M);

    function M() {
      var n;
      module24.default(this, M);
      (n = f.call(this, ...args)).propTypes = t.propTypes;
      n.transitions = [];
      n.viewRef = React.default.createRef();
      return n;
    }

    module25.default(M, [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.animateMount) this.animateNextTransition();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this.viewRef.current.setNativeProps(t);
        },
      },
      {
        key: 'animateNextTransition',
        value: function () {
          var t = ReactNative.findNodeHandle(this.viewRef.current);
          module908.default.animateNextTransition(t, {
            transitions: this.transitions,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this.props,
            u = o.transition,
            s = module53.default(o, y);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              x.Provider,
              {
                value: this.transitions,
              },
              u
            ),
            React.default.createElement(
              t,
              module11.default({}, s, {
                ref: this.viewRef,
                collapsable: false,
              })
            )
          );
        },
      },
    ]);
    return M;
  })(React.default.Component);
}

var _ = {
  View: N(ReactNative.View),
};
exports.Transitioning = _;
var A = {
  Sequence: C(D),
  Together: C(P),
  In: C(R),
  Out: C(E),
  Change: C(w),
};
exports.Transition = A;
