var module1674 = require('./1674').consumeNumber,
  module1681 = require('./1681').TYPE.Percentage;

module.exports = {
  name: 'Percentage',
  structure: {
    value: String,
  },
  parse: function () {
    var s = this.scanner.tokenStart,
      c = module1674(this.scanner.source, s);
    this.eat(module1681);
    return {
      type: 'Percentage',
      loc: this.getLocation(s, this.scanner.tokenStart),
      value: this.scanner.source.substring(s, c),
    };
  },
  generate: function (t) {
    this.chunk(t.value);
    this.chunk('%');
  },
};
