(function (t, n, o) {
  'use strict';

  var s = function t(n, o, s) {
      s = u.extend({}, u.options, s);
      var f = u.runValidations(n, o, s);
      if (
        f.some(function (t) {
          return u.isPromise(t.error);
        })
      )
        throw new Error('Use validate.async if you want support for promises');
      return t.processValidationResults(f, s);
    },
    u = s;

  u.extend = function (t) {
    [].slice.call(arguments, 1).forEach(function (n) {
      for (var o in n) t[o] = n[o];
    });
    return t;
  };

  u.extend(s, {
    version: {
      major: 0,
      minor: 13,
      patch: 1,
      metadata: null,
      toString: function () {
        var t = u.format('%{major}.%{minor}.%{patch}', u.version);
        if (!u.isEmpty(u.version.metadata)) t += '+' + u.version.metadata;
        return t;
      },
    },
    Promise: 'undefined' != typeof Promise ? Promise : null,
    EMPTY_STRING_REGEXP: /^\s*$/,
    runValidations: function (t, n, o) {
      var s,
        f,
        l,
        c,
        p,
        h,
        y,
        v = [];

      for (s in ((u.isDomElement(t) || u.isJqueryElement(t)) && (t = u.collectFormValues(t)), n))
        for (f in ((l = u.getDeepObjectValue(t, s)), (c = u.result(n[s], l, t, s, o, n)))) {
          if (!(p = u.validators[f]))
            throw (
              ((y = u.format('Unknown validator %{name}', {
                name: f,
              })),
              new Error(y))
            );
          h = c[f];
          if ((h = u.result(h, l, t, s, o, n)))
            v.push({
              attribute: s,
              value: l,
              validator: f,
              globalOptions: o,
              attributes: t,
              options: h,
              error: p.call(p, l, h, s, t, o),
            });
        }

      return v;
    },
    processValidationResults: function (t, n) {
      t = u.pruneEmptyErrors(t, n);
      t = u.expandMultipleErrors(t, n);
      t = u.convertErrorMessages(t, n);
      var o = n.format || 'grouped';
      if ('function' != typeof u.formatters[o]) throw new Error(u.format('Unknown format %{format}', n));
      t = u.formatters[o](t);
      return u.isEmpty(t) ? undefined : t;
    },
    async: function (t, n, o) {
      var s =
        (o = u.extend({}, u.async.options, o)).wrapErrors ||
        function (t) {
          return t;
        };

      if (false !== o.cleanAttributes) t = u.cleanAttributes(t, n);
      var f = u.runValidations(t, n, o);
      return new u.Promise(function (l, c) {
        u.waitForResults(f).then(
          function () {
            var p = u.processValidationResults(f, o);
            if (p) c(new s(p, o, t, n));
            else l(t);
          },
          function (t) {
            c(t);
          }
        );
      });
    },
    single: function (t, n, o) {
      o = u.extend({}, u.single.options, o, {
        format: 'flat',
        fullMessages: false,
      });
      return u(
        {
          single: t,
        },
        {
          single: n,
        },
        o
      );
    },
    waitForResults: function (t) {
      return t.reduce(
        function (t, n) {
          return u.isPromise(n.error)
            ? t.then(function () {
                return n.error.then(function (t) {
                  n.error = t || null;
                });
              })
            : t;
        },
        new u.Promise(function (t) {
          t();
        })
      );
    },
    result: function (t) {
      var n = [].slice.call(arguments, 1);
      if ('function' == typeof t) t = t.apply(null, n);
      return t;
    },
    isNumber: function (t) {
      return 'number' == typeof t && !isNaN(t);
    },
    isFunction: function (t) {
      return 'function' == typeof t;
    },
    isInteger: function (t) {
      return u.isNumber(t) && t % 1 == 0;
    },
    isBoolean: function (t) {
      return 'boolean' == typeof t;
    },
    isObject: function (t) {
      return t === Object(t);
    },
    isDate: function (t) {
      return t instanceof Date;
    },
    isDefined: function (t) {
      return null !== t && undefined !== t;
    },
    isPromise: function (t) {
      return !!t && u.isFunction(t.then);
    },
    isJqueryElement: function (t) {
      return t && u.isString(t.jquery);
    },
    isDomElement: function (t) {
      return (
        !!t &&
        !(!t.querySelectorAll || !t.querySelector) &&
        (!(!u.isObject(document) || t !== document) ||
          ('object' == typeof HTMLElement ? t instanceof HTMLElement : t && 'object' == typeof t && null !== t && 1 === t.nodeType && 'string' == typeof t.nodeName))
      );
    },
    isEmpty: function (t) {
      var n;
      if (!u.isDefined(t)) return true;
      if (u.isFunction(t)) return false;
      if (u.isString(t)) return u.EMPTY_STRING_REGEXP.test(t);
      if (u.isArray(t)) return 0 === t.length;
      if (u.isDate(t)) return false;

      if (u.isObject(t)) {
        for (n in t) return false;

        return true;
      }

      return false;
    },
    format: u.extend(
      function (t, n) {
        return u.isString(t)
          ? t.replace(u.format.FORMAT_REGEXP, function (t, o, s) {
              return '%' === o ? '%{' + s + '}' : String(n[s]);
            })
          : t;
      },
      {
        FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g,
      }
    ),
    prettify: function (t) {
      if (u.isNumber(t)) return (100 * t) % 1 == 0 ? '' + t : parseFloat(Math.round(100 * t) / 100).toFixed(2);
      else
        return u.isArray(t)
          ? t
              .map(function (t) {
                return u.prettify(t);
              })
              .join(', ')
          : u.isObject(t)
          ? u.isDefined(t.toString)
            ? t.toString()
            : JSON.stringify(t)
          : (t = '' + t)
              .replace(/([^\s])\.([^\s])/g, '$1 $2')
              .replace(/\\+/g, '')
              .replace(/[_-]/g, ' ')
              .replace(/([a-z])([A-Z])/g, function (t, n, o) {
                return n + ' ' + o.toLowerCase();
              })
              .toLowerCase();
    },
    stringifyValue: function (t, n) {
      return ((n && n.prettify) || u.prettify)(t);
    },
    isString: function (t) {
      return 'string' == typeof t;
    },
    isArray: function (t) {
      return '[object Array]' === {}.toString.call(t);
    },
    isHash: function (t) {
      return u.isObject(t) && !u.isArray(t) && !u.isFunction(t);
    },
    contains: function (t, n) {
      return !!u.isDefined(t) && (u.isArray(t) ? -1 !== t.indexOf(n) : n in t);
    },
    unique: function (t) {
      return u.isArray(t)
        ? t.filter(function (t, n, o) {
            return o.indexOf(t) == n;
          })
        : t;
    },
    forEachKeyInKeypath: function (t, n, o) {
      if (u.isString(n)) {
        var s,
          f = '',
          l = false;

        for (s = 0; s < n.length; ++s)
          switch (n[s]) {
            case '.':
              if (l) {
                l = false;
                f += '.';
              } else {
                t = o(t, f, false);
                f = '';
              }

              break;

            case '\\':
              if (l) {
                l = false;
                f += '\\';
              } else l = true;

              break;

            default:
              l = false;
              f += n[s];
          }

        return o(t, f, true);
      }
    },
    getDeepObjectValue: function (t, n) {
      if (u.isObject(t))
        return u.forEachKeyInKeypath(t, n, function (t, n) {
          if (u.isObject(t)) return t[n];
        });
    },
    collectFormValues: function (t, n) {
      var o,
        s,
        f,
        l,
        c,
        p,
        h = {};
      if ((u.isJqueryElement(t) && (t = t[0]), !t)) return h;

      for (n = n || {}, l = t.querySelectorAll('input[name], textarea[name]'), o = 0; o < l.length; ++o)
        if (((f = l.item(o)), !u.isDefined(f.getAttribute('data-ignored')))) {
          var y = f.name.replace(/\./g, '\\\\.');
          p = u.sanitizeFormValue(f.value, n);
          if ('number' === f.type) p = p ? +p : null;
          else if ('checkbox' === f.type) f.attributes.value ? f.checked || (p = h[y] || null) : (p = f.checked);
          else if ('radio' === f.type) f.checked || (p = h[y] || null);
          h[y] = p;
        }

      for (l = t.querySelectorAll('select[name]'), o = 0; o < l.length; ++o)
        if (((f = l.item(o)), !u.isDefined(f.getAttribute('data-ignored')))) {
          if (f.multiple) for (s in ((p = []), f.options)) (c = f.options[s]) && c.selected && p.push(u.sanitizeFormValue(c.value, n));
          else {
            var v = undefined !== f.options[f.selectedIndex] ? f.options[f.selectedIndex].value : '';
            p = u.sanitizeFormValue(v, n);
          }
          h[f.name] = p;
        }

      return h;
    },
    sanitizeFormValue: function (t, n) {
      if (n.trim && u.isString(t)) t = t.trim();
      return false !== n.nullify && '' === t ? null : t;
    },
    capitalize: function (t) {
      return u.isString(t) ? t[0].toUpperCase() + t.slice(1) : t;
    },
    pruneEmptyErrors: function (t) {
      return t.filter(function (t) {
        return !u.isEmpty(t.error);
      });
    },
    expandMultipleErrors: function (t) {
      var n = [];
      t.forEach(function (t) {
        if (u.isArray(t.error))
          t.error.forEach(function (o) {
            n.push(
              u.extend({}, t, {
                error: o,
              })
            );
          });
        else n.push(t);
      });
      return n;
    },
    convertErrorMessages: function (t, n) {
      var o = [],
        s = (n = n || {}).prettify || u.prettify;
      t.forEach(function (t) {
        var f = u.result(t.error, t.value, t.attribute, t.options, t.attributes, t.globalOptions);

        if (u.isString(f)) {
          if ('^' === f[0]) f = f.slice(1);
          else if (false !== n.fullMessages) f = u.capitalize(s(t.attribute)) + ' ' + f;
          f = f.replace(/\\\^/g, '^');
          f = u.format(f, {
            value: u.stringifyValue(t.value, n),
          });
          o.push(
            u.extend({}, t, {
              error: f,
            })
          );
        } else o.push(t);
      });
      return o;
    },
    groupErrorsByAttribute: function (t) {
      var n = {};
      t.forEach(function (t) {
        var o = n[t.attribute];
        if (o) o.push(t);
        else n[t.attribute] = [t];
      });
      return n;
    },
    flattenErrorsToArray: function (t) {
      return t
        .map(function (t) {
          return t.error;
        })
        .filter(function (t, n, o) {
          return o.indexOf(t) === n;
        });
    },
    cleanAttributes: function (t, n) {
      function o(t, n, o) {
        return u.isObject(t[n]) ? t[n] : (t[n] = !!o || {});
      }

      return u.isObject(n) && u.isObject(t)
        ? (function t(n, o) {
            if (!u.isObject(n)) return n;
            var s,
              f,
              l = u.extend({}, n);

            for (f in n) {
              s = o[f];
              if (u.isObject(s)) l[f] = t(l[f], s);
              else if (!s) delete l[f];
            }

            return l;
          })(
            t,
            (n = (function (t) {
              var n,
                s = {};

              for (n in t) t[n] && u.forEachKeyInKeypath(s, n, o);

              return s;
            })(n))
          )
        : {};
    },
    exposeModule: function (t, n, o, s, u) {
      if (o) {
        if (s && s.exports) o = s.exports = t;
        o.validate = t;
      } else {
        n.validate = t;
        if (t.isFunction(u) && u.amd)
          u([], function () {
            return t;
          });
      }
    },
    warn: function (t) {
      if ('undefined' != typeof console && console.warn) console.warn('[validate.js] ' + t);
    },
    error: function (t) {
      if ('undefined' != typeof console && console.error) console.error('[validate.js] ' + t);
    },
  });
  s.validators = {
    presence: function (t, n) {
      if (false !== (n = u.extend({}, this.options, n)).allowEmpty ? !u.isDefined(t) : u.isEmpty(t)) return n.message || this.message || "can't be blank";
    },
    length: function (t, n, o) {
      if (u.isDefined(t)) {
        var s,
          f = (n = u.extend({}, this.options, n)).is,
          l = n.maximum,
          c = n.minimum,
          p = [],
          h = (t = (
            n.tokenizer ||
            function (t) {
              return t;
            }
          )(t)).length;

        if (u.isNumber(h)) {
          if (u.isNumber(f) && h !== f) {
            s = n.wrongLength || this.wrongLength || 'is the wrong length (should be %{count} characters)';
            p.push(
              u.format(s, {
                count: f,
              })
            );
          }

          if (u.isNumber(c) && h < c) {
            s = n.tooShort || this.tooShort || 'is too short (minimum is %{count} characters)';
            p.push(
              u.format(s, {
                count: c,
              })
            );
          }

          if (u.isNumber(l) && h > l) {
            s = n.tooLong || this.tooLong || 'is too long (maximum is %{count} characters)';
            p.push(
              u.format(s, {
                count: l,
              })
            );
          }

          return p.length > 0 ? n.message || p : undefined;
        } else return n.message || this.notValid || 'has an incorrect length';
      }
    },
    numericality: function (t, n, o, s, f) {
      if (u.isDefined(t)) {
        var l,
          c,
          p = [],
          h = {
            greaterThan: function (t, n) {
              return t > n;
            },
            greaterThanOrEqualTo: function (t, n) {
              return t >= n;
            },
            equalTo: function (t, n) {
              return t === n;
            },
            lessThan: function (t, n) {
              return t < n;
            },
            lessThanOrEqualTo: function (t, n) {
              return t <= n;
            },
            divisibleBy: function (t, n) {
              return t % n == 0;
            },
          },
          y = (n = u.extend({}, this.options, n)).prettify || (f && f.prettify) || u.prettify;

        if (u.isString(t) && n.strict) {
          var v = '^-?(0|[1-9]\\d*)';
          if ((n.onlyInteger || (v += '(\\.\\d+)?'), (v += '$'), !new RegExp(v).test(t)))
            return n.message || n.notValid || this.notValid || this.message || 'must be a valid number';
        }

        if ((true !== n.noStrings && u.isString(t) && !u.isEmpty(t) && (t = +t), !u.isNumber(t)))
          return n.message || n.notValid || this.notValid || this.message || 'is not a number';
        if (n.onlyInteger && !u.isInteger(t)) return n.message || n.notInteger || this.notInteger || this.message || 'must be an integer';

        for (l in h)
          if (((c = n[l]), u.isNumber(c) && !h[l](t, c))) {
            var b = 'not' + u.capitalize(l),
              x = n[b] || this[b] || this.message || 'must be %{type} %{count}';
            p.push(
              u.format(x, {
                count: c,
                type: y(l),
              })
            );
          }

        if (n.odd && t % 2 != 1) p.push(n.notOdd || this.notOdd || this.message || 'must be odd');
        if (n.even && t % 2 != 0) p.push(n.notEven || this.notEven || this.message || 'must be even');
        return p.length ? n.message || p : undefined;
      }
    },
    datetime: u.extend(
      function (t, n) {
        if (!u.isFunction(this.parse) || !u.isFunction(this.format)) throw new Error('Both the parse and format functions needs to be set to use the datetime/date validator');

        if (u.isDefined(t)) {
          var o,
            s = [],
            f = (n = u.extend({}, this.options, n)).earliest ? this.parse(n.earliest, n) : NaN,
            l = n.latest ? this.parse(n.latest, n) : NaN;
          t = this.parse(t, n);

          if (isNaN(t) || (n.dateOnly && t % 864e5 != 0)) {
            o = n.notValid || n.message || this.notValid || 'must be a valid date';
            return u.format(o, {
              value: arguments[0],
            });
          } else {
            if (!isNaN(f) && t < f) {
              o = n.tooEarly || n.message || this.tooEarly || 'must be no earlier than %{date}';
              o = u.format(o, {
                value: this.format(t, n),
                date: this.format(f, n),
              });
              s.push(o);
            }

            if (!isNaN(l) && t > l) {
              o = n.tooLate || n.message || this.tooLate || 'must be no later than %{date}';
              o = u.format(o, {
                date: this.format(l, n),
                value: this.format(t, n),
              });
              s.push(o);
            }

            return s.length ? u.unique(s) : undefined;
          }
        }
      },
      {
        parse: null,
        format: null,
      }
    ),
    date: function (t, n) {
      n = u.extend({}, n, {
        dateOnly: true,
      });
      return u.validators.datetime.call(u.validators.datetime, t, n);
    },
    format: function (t, n) {
      if (u.isString(n) || n instanceof RegExp)
        n = {
          pattern: n,
        };
      var o,
        s = (n = u.extend({}, this.options, n)).message || this.message || 'is invalid',
        f = n.pattern;
      if (u.isDefined(t))
        if (u.isString(t)) {
          if (u.isString(f)) f = new RegExp(n.pattern, n.flags);
          return (o = f.exec(t)) && o[0].length == t.length ? undefined : s;
        } else return s;
    },
    inclusion: function (t, n) {
      if (
        u.isDefined(t) &&
        (u.isArray(n) &&
          (n = {
            within: n,
          }),
        (n = u.extend({}, this.options, n)),
        !u.contains(n.within, t))
      ) {
        var o = n.message || this.message || '^%{value} is not included in the list';
        return u.format(o, {
          value: t,
        });
      }
    },
    exclusion: function (t, n) {
      if (
        u.isDefined(t) &&
        (u.isArray(n) &&
          (n = {
            within: n,
          }),
        (n = u.extend({}, this.options, n)),
        u.contains(n.within, t))
      ) {
        var o = n.message || this.message || '^%{value} is restricted';
        if (u.isString(n.within[t])) t = n.within[t];
        return u.format(o, {
          value: t,
        });
      }
    },
    email: u.extend(
      function (t, n) {
        var o = (n = u.extend({}, this.options, n)).message || this.message || 'is not a valid email';
        if (u.isDefined(t)) return u.isString(t) && this.PATTERN.exec(t) ? undefined : o;
      },
      {
        PATTERN: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
      }
    ),
    equality: function (t, n, o, s, f) {
      if (u.isDefined(t)) {
        if (u.isString(n))
          n = {
            attribute: n,
          };
        var l = (n = u.extend({}, this.options, n)).message || this.message || 'is not equal to %{attribute}';
        if (u.isEmpty(n.attribute) || !u.isString(n.attribute)) throw new Error('The attribute must be a non empty string');

        var c = u.getDeepObjectValue(s, n.attribute),
          p =
            n.comparator ||
            function (t, n) {
              return t === n;
            },
          h = n.prettify || (f && f.prettify) || u.prettify;

        return p(t, c, n, o, s)
          ? undefined
          : u.format(l, {
              attribute: h(n.attribute),
            });
      }
    },
    url: function (t, n) {
      if (u.isDefined(t)) {
        var o = (n = u.extend({}, this.options, n)).message || this.message || 'is not a valid url',
          s = n.schemes || this.schemes || ['http', 'https'],
          f = n.allowLocal || this.allowLocal || false,
          l = n.allowDataUrl || this.allowDataUrl || false;
        if (!u.isString(t)) return o;
        var c = '^(?:(?:' + s.join('|') + ')://)(?:\\S+(?::\\S*)?@)?(?:',
          p = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))';

        if (
          (f ? (p += '?') : (c += '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})'),
          (c +=
            '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
            p +
            ')(?::\\d{2,5})?(?:[/?#]\\S*)?$'),
          l)
        ) {
          c = '(?:' + c + ")|(?:^data:(?:\\w+\\/[-+.\\w]+(?:;[\\w=]+)*)?(?:;base64)?,[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*$)";
        }

        return new RegExp(c, 'i').exec(t) ? undefined : o;
      }
    },
    type: u.extend(
      function (t, n, o, s, f) {
        if (
          (u.isString(n) &&
            (n = {
              type: n,
            }),
          u.isDefined(t))
        ) {
          var l,
            c = u.extend({}, this.options, n),
            p = c.type;
          if (!u.isDefined(p)) throw new Error('No type was specified');
          if (((l = u.isFunction(p) ? p : this.types[p]), !u.isFunction(l))) throw new Error('validate.validators.type.types.' + p + ' must be a function.');

          if (!l(t, c, o, s, f)) {
            var h = n.message || this.messages[p] || this.message || c.message || (u.isFunction(p) ? 'must be of the correct type' : 'must be of type %{type}');
            if (u.isFunction(h)) h = h(t, n, o, s, f);
            return u.format(h, {
              attribute: u.prettify(o),
              type: p,
            });
          }
        }
      },
      {
        types: {
          object: function (t) {
            return u.isObject(t) && !u.isArray(t);
          },
          array: u.isArray,
          integer: u.isInteger,
          number: u.isNumber,
          string: u.isString,
          date: u.isDate,
          boolean: u.isBoolean,
        },
        messages: {},
      }
    ),
  };
  s.formatters = {
    detailed: function (t) {
      return t;
    },
    flat: u.flattenErrorsToArray,
    grouped: function (t) {
      var n;

      for (n in (t = u.groupErrorsByAttribute(t))) t[n] = u.flattenErrorsToArray(t[n]);

      return t;
    },
    constraint: function (t) {
      var n;

      for (n in (t = u.groupErrorsByAttribute(t)))
        t[n] = t[n]
          .map(function (t) {
            return t.validator;
          })
          .sort();

      return t;
    },
  };
  s.exposeModule(s, this, t, n, o);
}.call(this, undefined !== exports ? exports : null, undefined !== module ? module : null, 'undefined' != typeof define ? define : null));
