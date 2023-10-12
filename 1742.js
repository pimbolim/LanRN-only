module.exports = {
  name: 'Operator',
  structure: {
    value: String,
  },
  parse: function () {
    var t = this.scanner.tokenStart;
    this.scanner.next();
    return {
      type: 'Operator',
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t),
    };
  },
  generate: function (t) {
    this.chunk(t.value);
  },
};
