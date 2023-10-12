var t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        },
  n = require('@babel/runtime/helpers/slicedToArray'),
  o =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
      }

      return t;
    },
  module462 = (function (t) {
    if (t && t.__esModule) return t;
    var n = {};
    if (null != t) for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    n.default = t;
    return n;
  })(require('./462'));

function l(t, n) {
  if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
}

var f = /(\{[\d|\w]+\})/,
  c = /(\$ref\{[\w|.]+\})/;

class h {
  constructor(t, n) {
    l(this, h);
    if ('function' == typeof n)
      n = {
        customLanguageInterface: n,
      };
    this._opts = o(
      {},
      {
        customLanguageInterface: module462.getInterfaceLanguage,
        pseudo: false,
        pseudoMultipleLanguages: false,
        logsEnabled: true,
      },
      n
    );
    this._interfaceLanguage = this._opts.customLanguageInterface();
    this._language = this._interfaceLanguage;
    this.setContent(t);
  }

  setContent(t) {
    var o = this,
      u = Object.keys(t),
      l = n(u, 1)[0];
    this._defaultLanguage = l;
    this._defaultLanguageFirstLevelKeys = [];
    this._props = t;
    module462.validateTranslationKeys(Object.keys(t[this._defaultLanguage]));
    Object.keys(this._props[this._defaultLanguage]).forEach(function (t) {
      if ('string' == typeof o._props[o._defaultLanguage][t]) o._defaultLanguageFirstLevelKeys.push(t);
    });
    this.setLanguage(this._interfaceLanguage);
    if (this._opts.pseudo) this._pseudoAllValues(this._props);
  }

  _pseudoAllValues(n) {
    var o = this;
    Object.keys(n).forEach(function (u) {
      if ('object' === t(n[u])) o._pseudoAllValues(n[u]);
      else if ('string' == typeof n[u]) {
        if (0 === n[u].indexOf('[') && n[u].lastIndexOf(']') === n[u].length - 1) return;

        for (var l = n[u].split(' '), h = 0; h < l.length; h += 1)
          if (l[h].match(f));
          else if (l[h].match(c));
          else {
            var p = l[h].length;
            if (o._opts.pseudoMultipleLanguages) p = parseInt(1.4 * p, 10);
            l[h] = module462.randomPseudo(p);
          }

        n[u] = '[' + l.join(' ') + ']';
      }
    });
  }

  setLanguage(t) {
    var n = this,
      u = module462.getBestMatchingLanguage(t, this._props),
      l = Object.keys(this._props)[0];

    if (((this._language = u), this._props[u])) {
      for (var f = 0; f < this._defaultLanguageFirstLevelKeys.length; f += 1) delete this[this._defaultLanguageFirstLevelKeys[f]];

      var c = o({}, this._props[this._language]);
      Object.keys(c).forEach(function (t) {
        n[t] = c[t];
      });

      if (l !== this._language) {
        c = this._props[l];

        this._fallbackValues(c, this);
      }
    }
  }

  _fallbackValues(t, n) {
    var o = this;
    Object.keys(t).forEach(function (u) {
      if (Object.prototype.hasOwnProperty.call(t, u) && !n[u] && '' !== n[u]) {
        n[u] = t[u];
        if (o._opts.logsEnabled) console.log("\ud83d\udea7 \ud83d\udc77 key '" + u + "' not found in localizedStrings for language " + o._language + ' \ud83d\udea7');
      } else if ('string' != typeof n[u]) o._fallbackValues(t[u], n[u]);
    });
  }

  getLanguage() {
    return this._language;
  }

  getInterfaceLanguage() {
    return this._interfaceLanguage;
  }

  getAvailableLanguages() {
    var t = this;

    if (!this._availableLanguages) {
      this._availableLanguages = [];
      Object.keys(this._props).forEach(function (n) {
        t._availableLanguages.push(n);
      });
    }

    return this._availableLanguages;
  }

  formatString(t) {
    for (var n = this, o = arguments.length, u = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) u[s - 1] = arguments[s];

    var l = t || '';
    if ('string' == typeof l) l = this.getString(t, null, true) || l;
    return l
      .split(c)
      .filter(function (t) {
        return !!t;
      })
      .map(function (o) {
        if (o.match(c)) {
          var u = o.slice(5, -1),
            s = n.getString(u);
          return s || (n._opts.logsEnabled && console.log("No Localization ref found for '" + o + "' in string '" + t + "'"), '$ref(id:' + u + ')');
        }

        return o;
      })
      .join('')
      .split(f)
      .filter(function (t) {
        return !!t;
      })
      .map(function (t) {
        if (t.match(f)) {
          var n = t.slice(1, -1),
            o = u[n];

          if (undefined === o) {
            var s = u[0][n];
            if (undefined === s) return o;
            o = s;
          }

          return o;
        }

        return t;
      })
      .join('');
  }

  getString(t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] && arguments[2];

    try {
      for (var u = this._props[n || this._language], s = t.split('.'), l = 0; l < s.length; l += 1) {
        if (undefined === u[s[l]]) throw Error(s[l]);
        u = u[s[l]];
      }

      return u;
    } catch (u) {
      if (!o && this._opts.logsEnabled) console.log("No localization found for key '" + t + "' and language '" + n + "', failed on " + u.message);
    }

    return null;
  }

  getContent() {
    return this._props;
  }
}

exports.default = h;
