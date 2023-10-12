var module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  s = module1681.Comma,
  h = module1681.WhiteSpace;

module.exports = function () {
  var n = this.createList();

  if ((this.scanner.skipSC(), n.push(this.Identifier()), this.scanner.skipSC(), this.scanner.tokenType === s)) {
    n.push(this.Operator());
    var o = this.scanner.tokenIndex,
      p = this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.tokenIndex, module1720.exclamationMarkOrSemicolon, false);
    if ('Value' === p.type && p.children.isEmpty())
      for (var c = o - this.scanner.tokenIndex; c <= 0; c++)
        if (this.scanner.lookupType(c) === h) {
          p.children.appendData({
            type: 'WhiteSpace',
            loc: null,
            value: ' ',
          });
          break;
        }
    n.push(p);
  }

  return n;
};
