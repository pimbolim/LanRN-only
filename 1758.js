module.exports = {
  parseContext: {
    default: 'StyleSheet',
    stylesheet: 'StyleSheet',
    atrule: 'Atrule',
    atrulePrelude: function (t) {
      return this.AtrulePrelude(t.atrule ? String(t.atrule) : null);
    },
    mediaQueryList: 'MediaQueryList',
    mediaQuery: 'MediaQuery',
    rule: 'Rule',
    selectorList: 'SelectorList',
    selector: 'Selector',
    block: function () {
      return this.Block(true);
    },
    declarationList: 'DeclarationList',
    declaration: 'Declaration',
    value: 'Value',
  },
  scope: require('./1759'),
  atrule: require('./1766'),
  pseudo: require('./1772'),
  node: require('./1717'),
};
