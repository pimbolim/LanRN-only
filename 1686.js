var module1687 = require('./1687'),
  s = function (t) {
    this.str = t;
    this.pos = 0;
  };

s.prototype = {
  charCodeAt: function (t) {
    return t < this.str.length ? this.str.charCodeAt(t) : 0;
  },
  charCode: function () {
    return this.charCodeAt(this.pos);
  },
  nextCharCode: function () {
    return this.charCodeAt(this.pos + 1);
  },
  nextNonWsCode: function (t) {
    return this.charCodeAt(this.findWsEnd(t));
  },
  findWsEnd: function (t) {
    for (; t < this.str.length; t++) {
      var s = this.str.charCodeAt(t);
      if (13 !== s && 10 !== s && 12 !== s && 32 !== s && 9 !== s) break;
    }

    return t;
  },
  substringToPos: function (t) {
    return this.str.substring(this.pos, (this.pos = t));
  },
  eat: function (t) {
    if (this.charCode() !== t) this.error('Expect `' + String.fromCharCode(t) + '`');
    this.pos++;
  },
  peek: function () {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : '';
  },
  error: function (s) {
    throw new module1687(s, this.str, this.pos);
  },
};
module.exports = s;
