var module1681 = require('./1681').TYPE.Ident;

module.exports = {
  name: 'Identifier',
  structure: {
    name: String,
  },
  parse: function () {
    return {
      type: 'Identifier',
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      name: this.consume(module1681),
    };
  },
  generate: function (n) {
    this.chunk(n.name);
  },
};
