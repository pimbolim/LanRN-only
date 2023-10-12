var module1669 = require('./1669'),
  module1670 = require('./1670'),
  module1672 = require('./1672'),
  module1676 = require('./1676'),
  module1695 = require('./1695'),
  module1681 = require('./1681'),
  module1696 = require('./1696'),
  module1699 = require('./1699'),
  module1707 = require('./1707'),
  module1708 = require('./1708'),
  module1709 = require('./1709'),
  module1679 = require('./1679'),
  module1710 = require('./1710');

function b(j) {
  var v = module1696(j),
    w = module1708(j),
    L = module1699(j),
    O = module1707(w),
    S = {
      List: module1669,
      SyntaxError: module1670,
      TokenStream: module1672,
      Lexer: module1676,
      vendorPrefix: module1679.vendorPrefix,
      keyword: module1679.keyword,
      property: module1679.property,
      isCustomProperty: module1679.isCustomProperty,
      definitionSyntax: module1695,
      lexer: null,
      createLexer: function (n) {
        return new module1676(n, S, S.lexer.structure);
      },
      tokenize: module1681,
      parse: v,
      walk: w,
      generate: L,
      find: w.find,
      findLast: w.findLast,
      findAll: w.findAll,
      clone: module1709,
      fromPlainObject: O.fromPlainObject,
      toPlainObject: O.toPlainObject,
      createSyntax: function (n) {
        return b(module1710({}, n));
      },
      fork: function (n) {
        var t = module1710({}, j);
        return b('function' == typeof n ? n(t, Object.assign) : module1710(t, n));
      },
    };
  S.lexer = new module1676(
    {
      generic: true,
      types: j.types,
      atrules: j.atrules,
      properties: j.properties,
      node: j.node,
    },
    S
  );
  return S;
}

exports.create = function (n) {
  return b(module1710({}, n));
};
