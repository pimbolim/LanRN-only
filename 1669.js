function t(t) {
  return {
    prev: null,
    next: null,
    data: t,
  };
}

function n(t, n, o) {
  var l;

  if (null !== s) {
    l = s;
    s = s.cursor;
    l.prev = n;
    l.next = o;
    l.cursor = t.cursor;
  } else
    l = {
      prev: n,
      next: o,
      cursor: t.cursor,
    };

  t.cursor = l;
  return l;
}

function o(t) {
  var n = t.cursor;
  t.cursor = n.cursor;
  n.prev = null;
  n.next = null;
  n.cursor = s;
  s = n;
}

var s = null,
  l = function () {
    this.cursor = null;
    this.head = null;
    this.tail = null;
  };

l.createItem = t;
l.prototype.createItem = t;

l.prototype.updateCursors = function (t, n, o, s) {
  for (var l = this.cursor; null !== l; ) {
    if (l.prev === t) l.prev = n;
    if (l.next === o) l.next = s;
    l = l.cursor;
  }
};

l.prototype.getSize = function () {
  for (var t = 0, n = this.head; n; ) {
    t++;
    n = n.next;
  }

  return t;
};

l.prototype.fromArray = function (n) {
  var o = null;
  this.head = null;

  for (var s = 0; s < n.length; s++) {
    var l = t(n[s]);
    if (null !== o) o.next = l;
    else this.head = l;
    l.prev = o;
    o = l;
  }

  this.tail = o;
  return this;
};

l.prototype.toArray = function () {
  for (var t = this.head, n = []; t; ) {
    n.push(t.data);
    t = t.next;
  }

  return n;
};

l.prototype.toJSON = l.prototype.toArray;

l.prototype.isEmpty = function () {
  return null === this.head;
};

l.prototype.first = function () {
  return this.head && this.head.data;
};

l.prototype.last = function () {
  return this.tail && this.tail.data;
};

l.prototype.each = function (t, s) {
  var l;
  if (undefined === s) s = this;

  for (var h = n(this, null, this.head); null !== h.next; ) {
    l = h.next;
    h.next = l.next;
    t.call(s, l.data, l, this);
  }

  o(this);
};

l.prototype.forEach = l.prototype.each;

l.prototype.eachRight = function (t, s) {
  var l;
  if (undefined === s) s = this;

  for (var h = n(this, this.tail, null); null !== h.prev; ) {
    l = h.prev;
    h.prev = l.prev;
    t.call(s, l.data, l, this);
  }

  o(this);
};

l.prototype.forEachRight = l.prototype.eachRight;

l.prototype.reduce = function (t, s, l) {
  var h;
  if (undefined === l) l = this;

  for (var p = n(this, null, this.head), u = s; null !== p.next; ) {
    h = p.next;
    p.next = h.next;
    u = t.call(l, u, h.data, h, this);
  }

  o(this);
  return u;
};

l.prototype.reduceRight = function (t, s, l) {
  var h;
  if (undefined === l) l = this;

  for (var p = n(this, this.tail, null), u = s; null !== p.prev; ) {
    h = p.prev;
    p.prev = h.prev;
    u = t.call(l, u, h.data, h, this);
  }

  o(this);
  return u;
};

l.prototype.nextUntil = function (t, s, l) {
  if (null !== t) {
    var h;
    if (undefined === l) l = this;

    for (var p = n(this, null, t); null !== p.next && ((h = p.next), (p.next = h.next), !s.call(l, h.data, h, this)); );

    o(this);
  }
};

l.prototype.prevUntil = function (t, s, l) {
  if (null !== t) {
    var h;
    if (undefined === l) l = this;

    for (var p = n(this, t, null); null !== p.prev && ((h = p.prev), (p.prev = h.prev), !s.call(l, h.data, h, this)); );

    o(this);
  }
};

l.prototype.some = function (t, n) {
  var o = this.head;

  for (undefined === n && (n = this); null !== o; ) {
    if (t.call(n, o.data, o, this)) return true;
    o = o.next;
  }

  return false;
};

l.prototype.map = function (t, n) {
  var o = new l(),
    s = this.head;

  for (undefined === n && (n = this); null !== s; ) {
    o.appendData(t.call(n, s.data, s, this));
    s = s.next;
  }

  return o;
};

l.prototype.filter = function (t, n) {
  var o = new l(),
    s = this.head;

  for (undefined === n && (n = this); null !== s; ) {
    if (t.call(n, s.data, s, this)) o.appendData(s.data);
    s = s.next;
  }

  return o;
};

l.prototype.clear = function () {
  this.head = null;
  this.tail = null;
};

l.prototype.copy = function () {
  for (var n = new l(), o = this.head; null !== o; ) {
    n.insert(t(o.data));
    o = o.next;
  }

  return n;
};

l.prototype.prepend = function (t) {
  this.updateCursors(null, t, this.head, t);

  if (null !== this.head) {
    this.head.prev = t;
    t.next = this.head;
  } else this.tail = t;

  this.head = t;
  return this;
};

l.prototype.prependData = function (n) {
  return this.prepend(t(n));
};

l.prototype.append = function (t) {
  return this.insert(t);
};

l.prototype.appendData = function (n) {
  return this.insert(t(n));
};

l.prototype.insert = function (t, n) {
  if (undefined !== n && null !== n) {
    if ((this.updateCursors(n.prev, t, n, t), null === n.prev)) {
      if (this.head !== n) throw new Error("before doesn't belong to list");
      this.head = t;
      n.prev = t;
      t.next = n;
      this.updateCursors(null, t);
    } else {
      n.prev.next = t;
      t.prev = n.prev;
      n.prev = t;
      t.next = n;
    }
  } else {
    this.updateCursors(this.tail, t, null, t);

    if (null !== this.tail) {
      this.tail.next = t;
      t.prev = this.tail;
    } else this.head = t;

    this.tail = t;
  }
  return this;
};

l.prototype.insertData = function (n, o) {
  return this.insert(t(n), o);
};

l.prototype.remove = function (t) {
  if ((this.updateCursors(t, t.prev, t, t.next), null !== t.prev)) t.prev.next = t.next;
  else {
    if (this.head !== t) throw new Error("item doesn't belong to list");
    this.head = t.next;
  }
  if (null !== t.next) t.next.prev = t.prev;
  else {
    if (this.tail !== t) throw new Error("item doesn't belong to list");
    this.tail = t.prev;
  }
  t.prev = null;
  t.next = null;
  return t;
};

l.prototype.push = function (n) {
  this.insert(t(n));
};

l.prototype.pop = function () {
  if (null !== this.tail) return this.remove(this.tail);
};

l.prototype.unshift = function (n) {
  this.prepend(t(n));
};

l.prototype.shift = function () {
  if (null !== this.head) return this.remove(this.head);
};

l.prototype.prependList = function (t) {
  return this.insertList(t, this.head);
};

l.prototype.appendList = function (t) {
  return this.insertList(t);
};

l.prototype.insertList = function (t, n) {
  if (null === t.head) return this;
  else {
    if (undefined !== n && null !== n) {
      this.updateCursors(n.prev, t.tail, n, t.head);

      if (null !== n.prev) {
        n.prev.next = t.head;
        t.head.prev = n.prev;
      } else this.head = t.head;

      n.prev = t.tail;
      t.tail.next = n;
    } else {
      this.updateCursors(this.tail, t.tail, null, t.head);

      if (null !== this.tail) {
        this.tail.next = t.head;
        t.head.prev = this.tail;
      } else this.head = t.head;

      this.tail = t.tail;
    }

    t.head = null;
    t.tail = null;
    return this;
  }
};

l.prototype.replace = function (t, n) {
  if ('head' in n) this.insertList(n, t);
  else this.insert(n, t);
  this.remove(t);
};

module.exports = l;
