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
    var o = D(n);
    if (o && o.has(t)) return o.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(c, l, f);
        else c[l] = t[l];
      }

    c.default = t;
    if (o) o.set(t, c);
    return c;
  })(require('react')),
  ReactNative = require('react-native'),
  module474 = require('./474'),
  module565 = require('./565'),
  module882 = require('./882'),
  module883 = require('./883');

function D(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (D = function (t) {
    return t ? o : n;
  })(t);
}

function w() {
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

var C = (function (t, ...args) {
  module35.default(k, t);

  var D = k,
    C = w(),
    I = function () {
      var t,
        n = module34.default(D);

      if (C) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k() {
    var t;
    module24.default(this, k);

    (t = I.call(this, ...args)).onRef = function (n) {
      var o = t.props.propRef;
      E.setReference(n);
      if ('function' == typeof o) o(n);
    };

    t.renderDropImage = function (n, o) {
      switch (o.type) {
        case 'error':
          return t.renderDropIcon('error', '#3c3c42');

        case 'success':
          return t.renderDropIcon('checkIcon', '#3c3c42');

        case 'warn':
          return t.renderDropIcon('warning', '#3c3c42');

        default:
          return t.renderDropIcon('info', '#3c3c42');
      }
    };

    t.renderDropTitle = function (t, n) {
      var o = module882.CStyles();
      return React.default.createElement(
        ReactNative.View,
        {
          style: {
            marginBottom: module474.vs(3),
          },
        },
        React.default.createElement(
          ReactNative.Text,
          {
            style: o.titleText,
          },
          n.title.toUpperCase()
        )
      );
    };

    t.renderDropContainer = function (t, n) {
      var o = module882.CStyles();
      return React.default.createElement(
        ReactNative.View,
        null,
        React.default.createElement(
          ReactNative.Text,
          {
            style: o.messageText,
          },
          n.message
        )
      );
    };

    return t;
  }

  module25.default(k, [
    {
      key: 'renderDropIcon',
      value: function (t, n) {
        var o = module882.CStyles();
        return React.default.createElement(
          ReactNative.View,
          {
            style: o.dropIconView,
          },
          React.default.createElement(module565.default, {
            name: t,
            color: n,
            size: module474.ms(15),
          })
        );
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(module883.default, {
          ref: this.onRef,
          closeInterval: 2e3,
          useNativeDriver: true,
          inactiveStatusBarStyle: 'dark-content',
          inactiveStatusBarBackgroundColor: 'white',
          renderImage: this.renderDropImage,
          renderTitle: this.renderDropTitle,
          renderMessage: this.renderDropContainer,
          renderCancel: function () {
            return null;
          },
          infoColor: '#FDF1E5',
          errorColor: '#FDF1E5',
          successColor: '#FDF1E5',
          warnColor: '#FDF1E5',
        });
      },
    },
  ]);
  return k;
})(React.Component);

exports.default = C;
var E = new ((function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, [
      {
        key: 'setReference',
        value: function (t) {
          this.dropdown = t;
        },
      },
      {
        key: 'alert',
        value: function (t) {
          var n = t.type,
            o = t.title,
            c = t.message,
            u = t.interval;

          try {
            this.dropdown.alertWithType(n, o, c, null, u);
          } catch (t) {}
        },
      },
    ]);
    return t;
  })())(),
  I = E;
exports.DropDown = I;
