var module1681 = require('./1681').TYPE.Hash;

module.exports = {
  name: 'Hash',
  structure: {
    value: String,
  },
  parse: function () {
    var n = this.scanner.tokenStart;
    this.eat(module1681);
    return {
      type: 'Hash',
      loc: this.getLocation(n, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(n + 1),
    };
  },
  generate: function (t) {
    this.chunk('#');
    this.chunk(t.value);
  },
};
