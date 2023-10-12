var module1681 = require('./1681').TYPE.Hash;

module.exports = {
  name: 'IdSelector',
  structure: {
    name: String,
  },
  parse: function () {
    var n = this.scanner.tokenStart;
    this.eat(module1681);
    return {
      type: 'IdSelector',
      loc: this.getLocation(n, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(n + 1),
    };
  },
  generate: function (t) {
    this.chunk('#');
    this.chunk(t.name);
  },
};
