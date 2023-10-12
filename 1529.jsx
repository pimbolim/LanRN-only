var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1530 = require('./1530');

function b(t) {
  var s = f();
  return function () {
    var o,
      l = module34.default(t);

    if (s) {
      var n = module34.default(this).constructor;
      o = Reflect.construct(l, arguments, n);
    } else o = l.apply(this, arguments);

    return module37.default(this, o);
  };
}

function f() {
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

var React = require('react'),
  ReactNative = require('react-native'),
  S = ReactNative.Text,
  C = ReactNative.View,
  L = ReactNative.TouchableOpacity,
  _ = ReactNative.TouchableWithoutFeedback,
  z = ReactNative.LayoutAnimation,
  I = ReactNative.UIManager,
  B = (function (t) {
    module35.default(u, t);
    var s = b(u);

    function u(t) {
      var l;
      module24.default(this, u);
      (l = s.call(this, t)).state = {
        is_active_index: t.initial,
      };
      if (I.setLayoutAnimationEnabledExperimental) I.setLayoutAnimationEnabledExperimental(true);
      l._renderButton = l._renderButton.bind(module39.default(l));
      return l;
    }

    module25.default(u, [
      {
        key: 'updateIsActiveIndex',
        value: function (t) {
          this.setState({
            is_active_index: t,
          });
          this.props.onPress(this.props.radio_props[t], t);
        },
      },
      {
        key: 'clearSelection',
        value: function () {
          this.setState({
            is_active_index: -1,
          });
        },
      },
      {
        key: '_renderButton',
        value: function (t, s) {
          var o = this;
          return (
            <E
              accessible={this.props.accessible}
              accessibilityLabel={this.props.accessibilityLabel ? this.props.accessibilityLabel + '|' + s : 'radioButton|' + s}
              testID={this.props.testID ? this.props.testID + '|' + s : 'radioButton|' + s}
              isSelected={this.state.is_active_index === s}
              obj={t}
              key={s}
              index={s}
              buttonColor={this.state.is_active_index === s ? this.props.selectedButtonColor : this.props.buttonColor}
              buttonSize={this.props.buttonSize}
              buttonOuterSize={this.props.buttonOuterSize}
              labelHorizontal={this.props.labelHorizontal}
              labelColor={this.state.is_active_index === s ? this.props.selectedLabelColor : this.props.labelColor}
              labelStyle={this.props.labelStyle}
              style={this.props.radioStyle}
              animation={this.props.animation}
              disabled={this.props.disabled}
              onPress={function (t, s) {
                o.props.onPress(t, s);
                o.setState({
                  is_active_index: s,
                });
              }}
            />
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = false;
          t = this.props.radio_props.length ? this.props.radio_props.map(this._renderButton) : this.props.children;
          return <C style={[module1530.default.radioFrom, this.props.style, this.props.formHorizontal && module1530.default.formHorizontal]}>{t}</C>;
        },
      },
    ]);
    return u;
  })(React.Component);

exports.default = B;
B.defaultProps = {
  radio_props: [],
  initial: 0,
  buttonColor: '#2196f3',
  selectedButtonColor: '#2196f3',
  formHorizontal: false,
  labelHorizontal: true,
  animation: true,
  labelColor: '#000',
  selectedLabelColor: '#000',
  wrapStyle: {},
  disabled: false,
};

var E = (function (t) {
  module35.default(u, t);
  var n = b(u);

  function u(t) {
    var s;
    module24.default(this, u);
    (s = n.call(this, t)).state = {};
    return s;
  }

  module25.default(u, [
    {
      key: 'shouldComponentUpdate',
      value: function (t, s) {
        return true;
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        if (this.props.animation) z.spring();
      },
    },
    {
      key: 'render',
      value: function () {
        var t,
          o = this.props.children,
          l = this.props.idSeparator ? this.props.idSeparator : '|',
          n = this.props.accessibilityLabel ? this.props.accessibilityLabel.indexOf(l) : -1,
          p = this.props.testID ? this.props.testID.indexOf(l) : -1,
          u = this.props.accessibilityLabel ? (-1 !== n ? this.props.accessibilityLabel.substring(0, n) : this.props.accessibilityLabel) : 'radioButton',
          c = this.props.testID ? (-1 !== p ? this.props.testID.substring(0, p) : this.props.testID) : 'radioButton',
          b = this.props.accessibilityLabel && -1 !== n ? this.props.accessibilityLabel.substring(n + 1) : '',
          f = this.props.testID && -1 !== f ? this.props.testID.split(f + 1) : '';
        t = o ? (
          <C style={[module1530.default.radioWrap, this.props.style, !this.props.labelHorizontal && module1530.default.labelVerticalWrap]}>{o}</C>
        ) : (
          <C style={[module1530.default.radioWrap, this.props.style, !this.props.labelHorizontal && module1530.default.labelVerticalWrap]}>
            <x />
            <D />
          </C>
        );
        return <C style={this.props.wrapStyle}>{t}</C>;
      },
    },
  ]);
  return u;
})(React.Component);

exports.RadioButton = E;
E.defaultProps = {
  isSelected: false,
  buttonColor: '#2196f3',
  selectedButtonColor: '#2196f3',
  labelHorizontal: true,
  disabled: false,
  idSeparator: '|',
};

var x = (function (t) {
  module35.default(n, t);
  var s = b(n);

  function n(t) {
    var l;
    module24.default(this, n);
    (l = s.call(this, t)).state = {
      isSelected: false,
      buttonColor: t.buttonColor || '#2196f3',
    };
    return l;
  }

  module25.default(n, [
    {
      key: 'render',
      value: function () {
        var t = this,
          s = {
            width: 20,
            height: 20,
            borderRadius: 10,
          },
          o = {
            width: 30,
            height: 30,
            borderRadius: 15,
          };

        if (this.props.buttonSize) {
          s.width = this.props.buttonSize;
          s.height = this.props.buttonSize;
          s.borderRadius = this.props.buttonSize / 2;
          o.width = this.props.buttonSize + 10;
          o.height = this.props.buttonSize + 10;
          o.borderRadius = (this.props.buttonSize + 10) / 2;
        }

        if (this.props.buttonOuterSize) {
          o.width = this.props.buttonOuterSize;
          o.height = this.props.buttonOuterSize;
          o.borderRadius = this.props.buttonOuterSize / 2;
        }

        var l = this.props.buttonOuterColor,
          n = this.props.borderWidth || 3,
          p = this.props.buttonInnerColor;

        if (this.props.buttonColor) {
          l = this.props.buttonColor;
          p = this.props.buttonColor;
        }

        var u = (
            <C
              style={[
                module1530.default.radioNormal,
                this.props.isSelected && module1530.default.radioActive,
                this.props.isSelected && s,
                this.props.isSelected && {
                  backgroundColor: p,
                },
              ]}
            />
          ),
          c = [
            module1530.default.radio,
            {
              borderColor: l,
              borderWidth: n,
            },
            this.props.buttonStyle,
            o,
          ];
        return this.props.disabled ? (
          <C style={this.props.buttonWrapStyle}>
            <C style={c}>{u}</C>
          </C>
        ) : (
          <C style={this.props.buttonWrapStyle}>
            <L
              accessible={this.props.accessible}
              accessibilityLabel={this.props.accessibilityLabel}
              testID={this.props.testID}
              style={c}
              onPress={function () {
                t.props.onPress(t.props.obj.value, t.props.index);
              }}
            >
              {u}
            </L>
          </C>
        );
      },
    },
  ]);
  return n;
})(React.Component);

exports.RadioButtonInput = x;
x.defaultProps = {
  buttonInnerColor: '#2196f3',
  buttonOuterColor: '#2196f3',
  disabled: false,
};

var D = (function (t) {
  module35.default(n, t);
  var s = b(n);

  function n(t) {
    var l;
    module24.default(this, n);
    (l = s.call(this, t)).state = {
      isSelected: false,
      buttonColor: '#2196f3',
    };
    return l;
  }

  module25.default(n, [
    {
      key: 'render',
      value: function () {
        var t = this;
        return (
          <_
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel}
            testID={this.props.testID}
            onPress={function () {
              if (!t.props.disabled) t.props.onPress(t.props.obj.value, t.props.index);
            }}
          >
            <C style={[this.props.labelWrapStyle, module1530.default.labelWrapStyle]}>
              <S
                style={[
                  module1530.default.radioLabel,
                  !this.props.labelHorizontal && module1530.default.labelVertical,
                  {
                    color: this.props.labelColor,
                  },
                  this.props.labelStyle,
                ]}
              >
                {this.props.obj.label}
              </S>
            </C>
          </_>
        );
      },
    },
  ]);
  return n;
})(React.Component);

exports.RadioButtonLabel = D;
