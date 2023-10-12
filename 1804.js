exports.removeElement = function (n) {
  if ((n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent)) {
    var p = n.parent.children;
    p.splice(p.lastIndexOf(n), 1);
  }
};

exports.replaceElement = function (n, p) {
  var t = (p.prev = n.prev);
  if (t) t.next = p;
  var v = (p.next = n.next);
  if (v) v.prev = p;
  var l = (p.parent = n.parent);

  if (l) {
    var c = l.children;
    c[c.lastIndexOf(n)] = p;
  }
};

exports.appendChild = function (n, p) {
  if (((p.parent = n), 1 !== n.children.push(p))) {
    var t = n.children[n.children.length - 2];
    t.next = p;
    p.prev = t;
    p.next = null;
  }
};

exports.append = function (n, p) {
  var t = n.parent,
    v = n.next;

  if (((p.next = v), (p.prev = n), (n.next = p), (p.parent = t), v)) {
    if (((v.prev = p), t)) {
      var l = t.children;
      l.splice(l.lastIndexOf(v), 0, p);
    }
  } else t && t.children.push(p);
};

exports.prepend = function (n, p) {
  var t = n.parent;

  if (t) {
    var v = t.children;
    v.splice(v.lastIndexOf(n), 0, p);
  }

  if (n.prev) n.prev.next = p;
  p.parent = t;
  p.prev = n.prev;
  p.next = n;
  n.prev = p;
};
