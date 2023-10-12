var module1681 = require('./1681').TYPE.Comment;

module.exports = {
  name: 'Comment',
  structure: {
    value: String,
  },
  parse: function () {
    var n = this.scanner.tokenStart,
      s = this.scanner.tokenEnd;
    this.eat(module1681);
    if (s - n + 2 >= 2 && 42 === this.scanner.source.charCodeAt(s - 2) && 47 === this.scanner.source.charCodeAt(s - 1)) s -= 2;
    return {
      type: 'Comment',
      loc: this.getLocation(n, this.scanner.tokenStart),
      value: this.scanner.source.substring(n + 2, s),
    };
  },
  generate: function (t) {
    this.chunk('/*');
    this.chunk(t.value);
    this.chunk('*/');
  },
};
