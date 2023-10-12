module.exports = {
  name: 'Nth',
  structure: {
    nth: ['AnPlusB', 'Identifier'],
    selector: ['SelectorList', null],
  },
  parse: function (t) {
    this.scanner.skipSC();
    var n,
      s = this.scanner.tokenStart,
      o = s,
      h = null;
    n = this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even') ? this.Identifier() : this.AnPlusB();
    this.scanner.skipSC();

    if (t && this.scanner.lookupValue(0, 'of')) {
      this.scanner.next();
      h = this.SelectorList();
      if (this.needPositions) o = this.getLastListNode(h.children).loc.end.offset;
    } else if (this.needPositions) o = n.loc.end.offset;

    return {
      type: 'Nth',
      loc: this.getLocation(s, o),
      nth: n,
      selector: h,
    };
  },
  generate: function (t) {
    this.node(t.nth);

    if (null !== t.selector) {
      this.chunk(' of ');
      this.node(t.selector);
    }
  },
};
