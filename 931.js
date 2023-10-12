var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module927 = require('./927'),
  module907 = require('./907');

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

var h = (function (t) {
  module35.default(v, t);

  var React = v,
    module907 = y(),
    h = function () {
      var t,
        n = module34.default(React);

      if (module907) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    module24.default(this, v);
    return h.apply(this, arguments);
  }

  module25.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props,
          n = t.children,
          o = t.exec,
          u = v.resolveNode(n),
          l = v.resolveNode(o);
        if (null === u && null === l)
          throw new Error(
            "<Animated.Code /> expects the 'exec' prop or children to be an animated node or a function returning an animated node. " +
              (null === u ? 'Got "' + typeof n + '" type passed to children' : 'Got "' + typeof o + '" type passed to exec')
          );
        this.always = module927.createAnimatedAlways(l || u);

        this.always.__attach();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.always.__detach();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        this.componentWillUnmount();
        this.componentDidMount();
      },
    },
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return v;
})(React.default.PureComponent);

h.resolveNode = function (t) {
  return 'function' == typeof t ? h.resolveNode(t()) : t instanceof module907.default ? t : null;
};

var v = h;
exports.default = v;
