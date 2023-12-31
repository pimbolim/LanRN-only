var module1229 = require('./1229');

function t(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

module.exports = function (c, o, f) {
  if (!o) return c;
  var s;
  if (f) s = f(o);
  else if (module1229.isURLSearchParams(o)) s = o.toString();
  else {
    var l = [];
    module1229.forEach(o, function (c, o) {
      if (null !== c && undefined !== c) {
        if (module1229.isArray(c)) o += '[]';
        else c = [c];
        module1229.forEach(c, function (c) {
          if (module1229.isDate(c)) c = c.toISOString();
          else if (module1229.isObject(c)) c = JSON.stringify(c);
          l.push(t(o) + '=' + t(c));
        });
      }
    });
    s = l.join('&');
  }

  if (s) {
    var u = c.indexOf('#');
    if (-1 !== u) c = c.slice(0, u);
    c += (-1 === c.indexOf('?') ? '?' : '&') + s;
  }

  return c;
};
