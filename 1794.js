var module1795 = require('./1795'),
  module1801 = require('./1801');

exports.decode = function (c, n) {
  return (!n || n <= 0 ? module1795.decodeXML : module1795.decodeHTML)(c);
};

exports.decodeStrict = function (c, n) {
  return (!n || n <= 0 ? module1795.decodeXML : module1795.decodeHTMLStrict)(c);
};

exports.encode = function (t, n) {
  return (!n || n <= 0 ? module1801.encodeXML : module1801.encodeHTML)(t);
};

var module1801 = require('./1801');

Object.defineProperty(exports, 'encodeXML', {
  enumerable: true,
  get: function () {
    return module1801.encodeXML;
  },
});
Object.defineProperty(exports, 'encodeHTML', {
  enumerable: true,
  get: function () {
    return module1801.encodeHTML;
  },
});
Object.defineProperty(exports, 'encodeNonAsciiHTML', {
  enumerable: true,
  get: function () {
    return module1801.encodeNonAsciiHTML;
  },
});
Object.defineProperty(exports, 'escape', {
  enumerable: true,
  get: function () {
    return module1801.escape;
  },
});
Object.defineProperty(exports, 'escapeUTF8', {
  enumerable: true,
  get: function () {
    return module1801.escapeUTF8;
  },
});
Object.defineProperty(exports, 'encodeHTML4', {
  enumerable: true,
  get: function () {
    return module1801.encodeHTML;
  },
});
Object.defineProperty(exports, 'encodeHTML5', {
  enumerable: true,
  get: function () {
    return module1801.encodeHTML;
  },
});

var module1795 = require('./1795');

Object.defineProperty(exports, 'decodeXML', {
  enumerable: true,
  get: function () {
    return module1795.decodeXML;
  },
});
Object.defineProperty(exports, 'decodeHTML', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTML;
  },
});
Object.defineProperty(exports, 'decodeHTMLStrict', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTMLStrict;
  },
});
Object.defineProperty(exports, 'decodeHTML4', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTML;
  },
});
Object.defineProperty(exports, 'decodeHTML5', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTML;
  },
});
Object.defineProperty(exports, 'decodeHTML4Strict', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTMLStrict;
  },
});
Object.defineProperty(exports, 'decodeHTML5Strict', {
  enumerable: true,
  get: function () {
    return module1795.decodeHTMLStrict;
  },
});
Object.defineProperty(exports, 'decodeXMLStrict', {
  enumerable: true,
  get: function () {
    return module1795.decodeXML;
  },
});
