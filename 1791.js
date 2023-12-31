module.exports = {
  Text: 'text',
  Directive: 'directive',
  Comment: 'comment',
  Script: 'script',
  Style: 'style',
  Tag: 'tag',
  CDATA: 'cdata',
  Doctype: 'doctype',
  isTag: function (t) {
    return 'tag' === t.type || 'script' === t.type || 'style' === t.type;
  },
};
