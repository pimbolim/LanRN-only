var module1681 = require('./1681').TYPE.CDO;

module.exports = {
  name: 'CDO',
  structure: [],
  parse: function () {
    var n = this.scanner.tokenStart;
    this.eat(module1681);
    return {
      type: 'CDO',
      loc: this.getLocation(n, this.scanner.tokenStart),
    };
  },
  generate: function () {
    this.chunk('\x3c!--');
  },
};
