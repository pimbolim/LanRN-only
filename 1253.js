var module1252 = require('./1252');

function o(o) {
  if ('function' != typeof o) throw new TypeError('executor must be a function.');
  var t;
  this.promise = new Promise(function (n) {
    t = n;
  });
  var s = this;
  o(function (o) {
    if (!s.reason) {
      s.reason = new module1252(o);
      t(s.reason);
    }
  });
}

o.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};

o.source = function () {
  var n;
  return {
    token: new o(function (o) {
      n = o;
    }),
    cancel: n,
  };
};

module.exports = o;
