var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module909 = require('./909'),
  module907 = require('./907'),
  module906 = require('./906');

function v(t) {
  var n = y();
  return function () {
    var u,
      l = module34.default(t);

    if (n) {
      var c = module34.default(this).constructor;
      u = Reflect.construct(l, arguments, c);
    } else u = l.apply(this, arguments);

    return module37.default(this, u);
  };
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

var p = new ((function (t) {
    module35.default(_, t);
    var f = v(_);

    function _() {
      var t;
      module24.default(this, _);

      (t = f.call(this, {
        type: 'MAIN_CLOCK',
      }))._runFrame = function () {
        t._updateValue(0);

        if (t.__children.length > 0) t._frameCallback = requestAnimationFrame(t._runFrame);
      };

      return t;
    }

    module25.default(_, [
      {
        key: '__onEvaluate',
        value: function () {
          return +new Date();
        },
      },
      {
        key: '__attach',
        value: function () {
          module32.default(module34.default(_.prototype), '__attach', this).call(this);
          if (!this._frameCallback) this._frameCallback = requestAnimationFrame(this._runFrame);
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._frameCallback) {
            cancelAnimationFrame(this._frameCallback);
            this._frameCallback = null;
          }

          module32.default(module34.default(_.prototype), '__detach', this).call(this);
        },
      },
    ]);
    return _;
  })(module909.default))(),
  k = (function (t) {
    module35.default(_, t);
    var f = v(_);

    function _() {
      module24.default(this, _);
      return f.call(this, {
        type: 'clock',
      });
    }

    module25.default(_, [
      {
        key: 'toString',
        value: function () {
          return 'AnimatedClock, id: ' + this.__nodeID;
        },
      },
      {
        key: '__onEvaluate',
        value: function () {
          return module906.val(p);
        },
      },
      {
        key: '__attach',
        value: function () {
          module32.default(module34.default(_.prototype), '__attach', this).call(this);
          if (this._started && !this._attached) p.__addChild(this);
          this._attached = true;
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._started && this._attached) p.__removeChild(this);
          this._attached = false;
          module32.default(module34.default(_.prototype), '__detach', this).call(this);
        },
      },
      {
        key: 'start',
        value: function () {
          if (!this._started && this._attached) p.__addChild(this);
          this._started = true;
        },
      },
      {
        key: 'stop',
        value: function () {
          if (this._started && this._attached) p.__removeChild(this);
          this._started = false;
        },
      },
      {
        key: 'isStarted',
        value: function () {
          return this._started;
        },
      },
    ]);
    return _;
  })(module907.default);

exports.default = k;
