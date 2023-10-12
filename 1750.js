var module1681 = require('./1681').TYPE.Comma;

module.exports = {
  name: 'SelectorList',
  structure: {
    children: [['Selector', 'Raw']],
  },
  parse: function () {
    for (var n = this.createList(); !this.scanner.eof && (n.push(this.Selector()), this.scanner.tokenType === module1681); ) this.scanner.next();

    return {
      type: 'SelectorList',
      loc: this.getLocationFromList(n),
      children: n,
    };
  },
  generate: function (t) {
    this.children(t, function () {
      this.chunk(',');
    });
  },
  walkContext: 'selector',
};
