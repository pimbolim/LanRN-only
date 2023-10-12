module.exports = {
  name: 'Selector',
  structure: {
    children: [['TypeSelector', 'IdSelector', 'ClassSelector', 'AttributeSelector', 'PseudoClassSelector', 'PseudoElementSelector', 'Combinator', 'WhiteSpace']],
  },
  parse: function () {
    var t = this.readSequence(this.scope.Selector);
    if (null === this.getFirstListNode(t)) this.error('Selector is expected');
    return {
      type: 'Selector',
      loc: this.getLocationFromList(t),
      children: t,
    };
  },
  generate: function (t) {
    this.children(t);
  },
};
