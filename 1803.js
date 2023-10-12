var t = (exports.getChildren = function (t) {
    return t.children;
  }),
  n = (exports.getParent = function (t) {
    return t.parent;
  });

exports.getSiblings = function (u) {
  var c = n(u);
  return c ? t(c) : [u];
};

exports.getAttributeValue = function (t, n) {
  return t.attribs && t.attribs[n];
};

exports.hasAttrib = function (t, n) {
  return !!t.attribs && hasOwnProperty.call(t.attribs, n);
};

exports.getName = function (t) {
  return t.name;
};
