var t = function () {};

function n(n) {
  return 'function' == typeof n ? n : t;
}

module.exports = function (o, c, s) {
  var f = t,
    u = t;
  if (('function' == typeof c ? (f = c) : c && ((f = n(c.enter)), (u = n(c.leave))), f === t && u === t))
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  !(function t(n) {
    switch ((f.call(s, n), n.type)) {
      case 'Group':
        n.terms.forEach(t);
        break;

      case 'Multiplier':
        t(n.term);
        break;

      case 'Type':
      case 'Property':
      case 'Keyword':
      case 'AtKeyword':
      case 'Function':
      case 'String':
      case 'Token':
      case 'Comma':
        break;

      default:
        throw new Error('Unknown type: ' + n.type);
    }

    u.call(s, n);
  })(o);
};
