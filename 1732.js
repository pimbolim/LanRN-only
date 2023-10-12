var module1674 = require('./1674').consumeNumber,
  module1681 = require('./1681').TYPE.Dimension;

module.exports = {
  name: 'Dimension',
  structure: {
    value: String,
    unit: String,
  },
  parse: function () {
    var s = this.scanner.tokenStart,
      u = module1674(this.scanner.source, s);
    this.eat(module1681);
    return {
      type: 'Dimension',
      loc: this.getLocation(s, this.scanner.tokenStart),
      value: this.scanner.source.substring(s, u),
      unit: this.scanner.source.substring(u, this.scanner.tokenStart),
    };
  },
  generate: function (n) {
    this.chunk(n.value);
    this.chunk(n.unit);
  },
};
