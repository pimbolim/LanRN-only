var module1681 = require('./1681').TYPE,
  n = module1681.Semicolon,
  s = module1681.LeftCurlyBracket;

module.exports = {
  name: 'AtrulePrelude',
  structure: {
    children: [[]],
  },
  parse: function (t) {
    var l = null;
    if (null !== t) t = t.toLowerCase();
    this.scanner.skipSC();
    l = this.atrule.hasOwnProperty(t) && 'function' == typeof this.atrule[t].prelude ? this.atrule[t].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude);
    this.scanner.skipSC();
    if (true !== this.scanner.eof && this.scanner.tokenType !== s && this.scanner.tokenType !== n) this.error('Semicolon or block is expected');
    if (null === l) l = this.createList();
    return {
      type: 'AtrulePrelude',
      loc: this.getLocationFromList(l),
      children: l,
    };
  },
  generate: function (t) {
    this.children(t);
  },
  walkContext: 'atrulePrelude',
};
