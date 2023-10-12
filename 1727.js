var module1681 = require('./1681').TYPE.Ident;

module.exports = {
  name: 'ClassSelector',
  structure: {
    name: String,
  },
  parse: function () {
    if (!this.scanner.isDelim(46)) this.error('Full stop is expected');
    this.scanner.next();
    return {
      type: 'ClassSelector',
      loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
      name: this.consume(module1681),
    };
  },
  generate: function (t) {
    this.chunk('.');
    this.chunk(t.name);
  },
};
