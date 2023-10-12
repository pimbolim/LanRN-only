var module1681 = require('./1681').TYPE,
  t = module1681.WhiteSpace,
  s = module1681.Comment;

module.exports = function (n) {
  var c = this.createList(),
    o = null,
    h = {
      recognizer: n,
      space: null,
      ignoreWS: false,
      ignoreWSAfter: false,
    };

  for (this.scanner.skipSC(); !this.scanner.eof; ) {
    switch (this.scanner.tokenType) {
      case s:
        this.scanner.next();
        continue;

      case t:
        if (h.ignoreWS) this.scanner.next();
        else h.space = this.WhiteSpace();
        continue;
    }

    if (undefined === (o = n.getNode.call(this, h))) break;

    if (null !== h.space) {
      c.push(h.space);
      h.space = null;
    }

    c.push(o);

    if (h.ignoreWSAfter) {
      h.ignoreWSAfter = false;
      h.ignoreWS = true;
    } else h.ignoreWS = false;
  }

  return c;
};
