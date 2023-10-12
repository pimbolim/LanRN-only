var module1791 = require('./1791'),
  n = (exports.isTag = module1791.isTag);

exports.testElement = function (t, u) {
  for (var f in t)
    if (t.hasOwnProperty(f)) {
      if ('tag_name' === f) {
        if (!n(u) || !t.tag_name(u.name)) return false;
      } else if ('tag_type' === f) {
        if (!t.tag_type(u.type)) return false;
      } else if ('tag_contains' === f) {
        if (n(u) || !t.tag_contains(u.data)) return false;
      } else if (!u.attribs || !t[f](u.attribs[f])) return false;
    } else;

  return true;
};

var u = {
  tag_name: function (t) {
    return 'function' == typeof t
      ? function (u) {
          return n(u) && t(u.name);
        }
      : '*' === t
      ? n
      : function (u) {
          return n(u) && u.name === t;
        };
  },
  tag_type: function (t) {
    return 'function' == typeof t
      ? function (n) {
          return t(n.type);
        }
      : function (n) {
          return n.type === t;
        };
  },
  tag_contains: function (t) {
    return 'function' == typeof t
      ? function (u) {
          return !n(u) && t(u.data);
        }
      : function (u) {
          return !n(u) && u.data === t;
        };
  },
};

function f(t, n) {
  return 'function' == typeof n
    ? function (u) {
        return u.attribs && n(u.attribs[t]);
      }
    : function (u) {
        return u.attribs && u.attribs[t] === n;
      };
}

function o(t, n) {
  return function (u) {
    return t(u) || n(u);
  };
}

exports.getElements = function (t, n, c, s) {
  var y = Object.keys(t).map(function (n) {
    var o = t[n];
    return n in u ? u[n](o) : f(n, o);
  });
  return 0 === y.length ? [] : this.filter(y.reduce(o), n, c, s);
};

exports.getElementById = function (t, n, u) {
  if (!Array.isArray(n)) n = [n];
  return this.findOne(f('id', t), n, false !== u);
};

exports.getElementsByTagName = function (t, n, f, o) {
  return this.filter(u.tag_name(t), n, f, o);
};

exports.getElementsByTagType = function (t, n, f, o) {
  return this.filter(u.tag_type(t), n, f, o);
};
