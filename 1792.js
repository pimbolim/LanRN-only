var module11 = require('./11'),
  module1793 = require('./1793'),
  module1794 = require('./1794'),
  module1802 = require('./1802');

module1802.elementNames.__proto__ = null;
module1802.attributeNames.__proto__ = null;
var c = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true,
};

function u(n, t) {
  if (n) {
    var c,
      u = '';

    for (var f in n) {
      c = n[f];
      if (u) u += ' ';
      if ('foreign' === t.xmlMode) f = module1802.attributeNames[f] || f;
      u += f;
      if ((null !== c && '' !== c) || t.xmlMode) u += '="' + (t.decodeEntities ? module1794.encodeXML(c) : c.replace(/\"/g, '&quot;')) + '"';
    }

    return u;
  }
}

var f = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
  },
  s = (module.exports = function (n, o) {
    if (!(Array.isArray(n) || n.cheerio)) n = [n];
    o = o || {};

    for (var l = '', c = 0; c < n.length; c++) {
      var u = n[c];
      if ('root' === u.type) l += s(u.children, o);
      else if (module1793.isTag(u)) l += x(u, o);
      else if (u.type === module1793.Directive) l += _(u);
      else if (u.type === module1793.Comment) l += b(u);
      else if (u.type === module1793.CDATA) l += v(u);
      else l += h(u, o);
    }

    return l;
  }),
  p = ['mi', 'mo', 'mn', 'ms', 'mtext', 'annotation-xml', 'foreignObject', 'desc', 'title'];

function x(t, o) {
  if ('foreign' === o.xmlMode) {
    t.name = module1802.elementNames[t.name] || t.name;
    if (t.parent && p.indexOf(t.parent.name) >= 0)
      o = module11({}, o, {
        xmlMode: false,
      });
  }

  if (!o.xmlMode && ['svg', 'math'].indexOf(t.name) >= 0)
    o = module11({}, o, {
      xmlMode: 'foreign',
    });
  var c = '<' + t.name,
    x = u(t.attribs, o);
  if (x) c += ' ' + x;

  if (!o.xmlMode || (t.children && 0 !== t.children.length)) {
    c += '>';
    if (t.children) c += s(t.children, o);
    if (!(f[t.name] && !o.xmlMode)) c += '</' + t.name + '>';
  } else c += '/>';

  return c;
}

function _(n) {
  return '<' + n.data + '>';
}

function h(n, t) {
  var l = n.data || '';
  if (!(!t.decodeEntities || (n.parent && n.parent.name in c))) l = module1794.encodeXML(l);
  return l;
}

function v(n) {
  return '<![CDATA[' + n.children[0].data + ']]>';
}

function b(n) {
  return '\x3c!--' + n.data + '--\x3e';
}
