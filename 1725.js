var module1681 = require('./1681').TYPE.CDC;

module.exports = {
  name: 'CDC',
  structure: [],
  parse: function () {
    var n = this.scanner.tokenStart;
    this.eat(module1681);
    return {
      type: 'CDC',
      loc: this.getLocation(n, this.scanner.tokenStart),
    };
  },
  generate: function () {
    this.chunk('--\x3e');
  },
};
