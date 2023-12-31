var module1229 = require('./1229');

module.exports = module1229.isStandardBrowserEnv()
  ? {
      write: function (t, o, u, s, c, p) {
        var h = [];
        h.push(t + '=' + encodeURIComponent(o));
        if (module1229.isNumber(u)) h.push('expires=' + new Date(u).toGMTString());
        if (module1229.isString(s)) h.push('path=' + s);
        if (module1229.isString(c)) h.push('domain=' + c);
        if (true === p) h.push('secure');
        document.cookie = h.join('; ');
      },
      read: function (n) {
        var t = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function (n) {
        this.write(n, '', Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
