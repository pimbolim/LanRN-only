module.exports = {
  name: 'Value',
  structure: {
    children: [[]],
  },
  parse: function () {
    var t = this.scanner.tokenStart,
      n = this.readSequence(this.scope.Value);
    return {
      type: 'Value',
      loc: this.getLocation(t, this.scanner.tokenStart),
      children: n,
    };
  },
  generate: function (t) {
    this.children(t);
  },
};
