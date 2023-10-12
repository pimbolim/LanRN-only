var module24 = require('./24'),
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
  module400 = require('./400'),
  module458 = require('./458'),
  module472 = require('./472'),
  module1901 = require('./1901'),
  module1902 = require('./1902');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var P = module1901.CStyles(),
  b = (function (t) {
    module35.default(b, t);

    var module400 = b,
      module1901 = k(),
      O = function () {
        var t,
          n = module34.default(module400);

        if (module1901) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var o;
      module24.default(this, b);
      (o = O.call(this, t)).state = {};
      return o;
    }

    module25.default(b, [
      {
        key: 'params',
        get: function () {
          try {
            return this.props.route.params || {};
          } catch (t) {
            return {};
          }
        },
      },
      {
        key: 'renderContent',
        value: function () {
          var t = {
              uri: this.params.receipt.Documento,
              cache: true,
            },
            n = this.props.navigation;
          return React.default.createElement(module1902.default, {
            source: t,
            onLoadComplete: function (t, n) {},
            onPageChanged: function (t, n) {},
            onError: function (t) {
              module472.DropDown.alert({
                type: 'error',
                title: module458.default.generic.oops,
                message: module458.default.error.generic,
              });
              n.goBack();
            },
            onPressLink: function (t) {},
            style: P.pdf,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(module472.Header, {
              title: this.params.receipt.Descricao,
              back: true,
            }),
            React.default.createElement(
              module472.Wrapper,
              {
                edges: ['right', 'left'],
                style: P.root,
              },
              this.renderContent()
            )
          );
        },
      },
    ]);
    return b;
  })(React.Component),
  j = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(b);

exports.default = j;
