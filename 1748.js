var module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  s = module1681.LeftCurlyBracket;

function o(t) {
  return this.Raw(t, module1720.leftCurlyBracket, true);
}

function c() {
  var t = this.SelectorList();
  if ('Raw' !== t.type && false === this.scanner.eof && this.scanner.tokenType !== s) this.error();
  return t;
}

module.exports = {
  name: 'Rule',
  structure: {
    prelude: ['SelectorList', 'Raw'],
    block: ['Block'],
  },
  parse: function () {
    var module1681,
      module1720,
      s = this.scanner.tokenIndex,
      l = this.scanner.tokenStart;
    module1681 = this.parseRulePrelude ? this.parseWithFallback(c, o) : o.call(this, s);
    module1720 = this.Block(true);
    return {
      type: 'Rule',
      loc: this.getLocation(l, this.scanner.tokenStart),
      prelude: module1681,
      block: module1720,
    };
  },
  generate: function (t) {
    this.node(t.prelude);
    this.node(t.block);
  },
  walkContext: 'rule',
};
