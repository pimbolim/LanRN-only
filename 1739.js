var module1681 = require('./1681').TYPE.Comma;

module.exports = {
  name: 'MediaQueryList',
  structure: {
    children: [['MediaQuery']],
  },
  parse: function (n) {
    var s = this.createList();

    for (this.scanner.skipSC(); !this.scanner.eof && (s.push(this.MediaQuery(n)), this.scanner.tokenType === module1681); ) this.scanner.next();

    return {
      type: 'MediaQueryList',
      loc: this.getLocationFromList(s),
      children: s,
    };
  },
  generate: function (t) {
    this.children(t, function () {
      this.chunk(',');
    });
  },
};
