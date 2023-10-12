var module96 = require('./96'),
  module1085 = require('./1085'),
  module1086 = require('./1086'),
  module1087 = require('./1087'),
  module1088 = require('./1088'),
  module1089 = require('./1089'),
  module1090 = require('./1090'),
  module1091 = require('./1091'),
  module1092 = require('./1092'),
  module1093 = require('./1093'),
  module1094 = require('./1094'),
  P = {
    Tap: function () {
      return new module1092.TapGesture();
    },
    Pan: function () {
      return new module1089.PanGesture();
    },
    Pinch: function () {
      return new module1090.PinchGesture();
    },
    Rotation: function () {
      return new module1091.RotationGesture();
    },
    Fling: function () {
      return new module1085.FlingGesture();
    },
    LongPress: function () {
      return new module1088.LongPressGesture();
    },
    ForceTouch: function () {
      return new module1086.ForceTouchGesture();
    },
    Native: function () {
      return new module1093.NativeGesture();
    },
    Manual: function () {
      return new module1094.ManualGesture();
    },
    Race: function (...args) {
      return module96.default(module1087.ComposedGesture, args);
    },
    Simultaneous: function (...args) {
      return module96.default(module1087.SimultaneousGesture, args);
    },
    Exclusive: function (...args) {
      return module96.default(module1087.ExclusiveGesture, args);
    },
  };

exports.GestureObjects = P;
