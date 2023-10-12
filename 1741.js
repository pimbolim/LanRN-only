var module1681 = require('./1681').TYPE.Number;

module.exports = {
  name: 'Number',
  structure: {
    value: String,
  },
  parse: function () {
    return {
      type: 'Number',
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.consume(module1681),
    };
  },
  generate: function (t) {
    this.chunk(t.value);
  },
};
