var t;

(function (t) {
  t.Root = 'root';
  t.Text = 'text';
  t.Directive = 'directive';
  t.Comment = 'comment';
  t.Script = 'script';
  t.Style = 'style';
  t.Tag = 'tag';
  t.CDATA = 'cdata';
  t.Doctype = 'doctype';
})((t = exports.ElementType || (exports.ElementType = {})));

exports.isTag = function (o) {
  return o.type === t.Tag || o.type === t.Script || o.type === t.Style;
};

exports.Root = t.Root;
exports.Text = t.Text;
exports.Directive = t.Directive;
exports.Comment = t.Comment;
exports.Script = t.Script;
exports.Style = t.Style;
exports.Tag = t.Tag;
exports.CDATA = t.CDATA;
exports.Doctype = t.Doctype;
