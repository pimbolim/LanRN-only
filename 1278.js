var module11 = require('./11');

function s(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ('value' in r) r.writable = true;
    Object.defineProperty(e, r.key, r);
  }
}

function c(e, t, n) {
  if (t) s(e.prototype, t);
  if (n) s(e, n);
  return e;
}

function l(e, t) {
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
}

function f(e) {
  return (f = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}

function d(e, t) {
  return (d =
    Object.setPrototypeOf ||
    function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
}

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function m(e, t, n) {
  return (m = h()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r))();
        if (n) d(i, n.prototype);
        return i;
      }).apply(null, arguments);
}

function y(e) {
  var t = 'function' == typeof Map ? new Map() : undefined;
  return (y = function (e) {
    if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
    var n;
    if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');

    if (undefined !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, r);
    }

    function r() {
      return m(e, arguments, f(this).constructor);
    }

    r.prototype = Object.create(e.prototype, {
      constructor: {
        value: r,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return d(r, e);
  })(e);
}

function v(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = {},
    o = Object.keys(e);

  for (r = 0; r < o.length; r++) {
    n = o[r];
    if (!(t.indexOf(n) >= 0)) i[n] = e[n];
  }

  return i;
}

function p(e, t) {
  if (e) {
    if ('string' == typeof e) return g(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ('Object' === n && e.constructor) n = e.constructor.name;
    return 'Map' === n || 'Set' === n ? Array.from(n) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : undefined;
  }
}

function g(e, t) {
  if (null == t || t > e.length) t = e.length;

  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

  return r;
}

function w(e) {
  var t = 0;

  if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = p(e)))
      return function () {
        return t >= e.length
          ? {
              done: true,
            }
          : {
              done: false,
              value: e[t++],
            };
      };
    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  return (t = e[Symbol.iterator]()).next.bind(t);
}

var k = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }

    l(t, e);
    return t;
  })(y(Error)),
  S = (function (e) {
    function t(t) {
      return e.call(this, 'Invalid DateTime: ' + t.toMessage()) || this;
    }

    l(t, e);
    return t;
  })(k),
  T = (function (e) {
    function t(t) {
      return e.call(this, 'Invalid Interval: ' + t.toMessage()) || this;
    }

    l(t, e);
    return t;
  })(k),
  b = (function (e) {
    function t(t) {
      return e.call(this, 'Invalid Duration: ' + t.toMessage()) || this;
    }

    l(t, e);
    return t;
  })(k),
  O = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }

    l(t, e);
    return t;
  })(k),
  M = (function (e) {
    function t(t) {
      return e.call(this, 'Invalid unit ' + t) || this;
    }

    l(t, e);
    return t;
  })(k),
  N = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }

    l(t, e);
    return t;
  })(k),
  E = (function (e) {
    function t() {
      return e.call(this, 'Zone is an abstract class') || this;
    }

    l(t, e);
    return t;
  })(k),
  D = 'numeric',
  I = 'short',
  V = 'long',
  L = {
    year: D,
    month: D,
    day: D,
  },
  x = {
    year: D,
    month: I,
    day: D,
  },
  C = {
    year: D,
    month: I,
    day: D,
    weekday: I,
  },
  F = {
    year: D,
    month: V,
    day: D,
  },
  Z = {
    year: D,
    month: V,
    day: D,
    weekday: V,
  },
  A = {
    hour: D,
    minute: D,
  },
  z = {
    hour: D,
    minute: D,
    second: D,
  },
  _ = {
    hour: D,
    minute: D,
    second: D,
    timeZoneName: I,
  },
  j = {
    hour: D,
    minute: D,
    second: D,
    timeZoneName: V,
  },
  q = {
    hour: D,
    minute: D,
    hour12: false,
  },
  H = {
    hour: D,
    minute: D,
    second: D,
    hour12: false,
  },
  U = {
    hour: D,
    minute: D,
    second: D,
    hour12: false,
    timeZoneName: I,
  },
  R = {
    hour: D,
    minute: D,
    second: D,
    hour12: false,
    timeZoneName: V,
  },
  P = {
    year: D,
    month: D,
    day: D,
    hour: D,
    minute: D,
  },
  W = {
    year: D,
    month: D,
    day: D,
    hour: D,
    minute: D,
    second: D,
  },
  J = {
    year: D,
    month: I,
    day: D,
    hour: D,
    minute: D,
  },
  Y = {
    year: D,
    month: I,
    day: D,
    hour: D,
    minute: D,
    second: D,
  },
  G = {
    year: D,
    month: I,
    day: D,
    weekday: I,
    hour: D,
    minute: D,
  },
  $ = {
    year: D,
    month: V,
    day: D,
    hour: D,
    minute: D,
    timeZoneName: I,
  },
  B = {
    year: D,
    month: V,
    day: D,
    hour: D,
    minute: D,
    second: D,
    timeZoneName: I,
  },
  Q = {
    year: D,
    month: V,
    day: D,
    weekday: V,
    hour: D,
    minute: D,
    timeZoneName: V,
  },
  K = {
    year: D,
    month: V,
    day: D,
    weekday: V,
    hour: D,
    minute: D,
    second: D,
    timeZoneName: V,
  };

function X(e) {
  return undefined === e;
}

function ee(e) {
  return 'number' == typeof e;
}

function te(e) {
  return 'number' == typeof e && e % 1 == 0;
}

function ne() {
  try {
    return 'undefined' != typeof Intl && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}

function re() {
  return !X(Intl.DateTimeFormat.prototype.formatToParts);
}

function ie() {
  try {
    return 'undefined' != typeof Intl && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

function oe(e, t, n) {
  if (0 !== e.length)
    return e.reduce(function (e, r) {
      var i = [t(r), r];
      return e && n(e[0], i[0]) === e[0] ? e : i;
    }, null)[1];
}

function ae(e, t) {
  return t.reduce(function (t, n) {
    t[n] = e[n];
    return t;
  }, {});
}

function ue(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}

function se(e, t, n) {
  return te(e) && e >= t && e <= n;
}

function ce(e, t) {
  if (undefined === t) t = 2;
  var n = e < 0 ? '-' : '',
    r = n ? -1 * e : e;
  return '' + n + (r.toString().length < t ? ('0'.repeat(t) + r).slice(-t) : r.toString());
}

function le(e) {
  return X(e) || null === e || '' === e ? undefined : parseInt(e, 10);
}

function fe(e) {
  if (!X(e) && null !== e && '' !== e) {
    var t = 1e3 * parseFloat('0.' + e);
    return Math.floor(t);
  }
}

function de(e, t, n) {
  if (undefined === n) n = false;
  var r = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * r) / r;
}

function he(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}

function me(e) {
  return he(e) ? 366 : 365;
}

function ye(e, t) {
  var n,
    r,
    i = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1;
  return 2 === i ? (he(e + (t - i) / 12) ? 29 : 28) : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i - 1];
}

function ve(e) {
  var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
  if (e.year < 100 && e.year >= 0) (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900);
  return +t;
}

function pe(e) {
  var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
    n = e - 1,
    r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return 4 === t || 3 === r ? 53 : 52;
}

function ge(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}

function we(e, t, n, r) {
  if (undefined === r) r = null;
  var i = new Date(e),
    o = {
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
  if (r) o.timeZone = r;
  var a = module11(
      {
        timeZoneName: t,
      },
      o
    ),
    s = ne();

  if (s && re()) {
    var c = new Intl.DateTimeFormat(n, a).formatToParts(i).find(function (e) {
      return 'timezonename' === e.type.toLowerCase();
    });
    return c ? c.value : null;
  }

  if (s) {
    var l = new Intl.DateTimeFormat(n, o).format(i);
    return new Intl.DateTimeFormat(n, a)
      .format(i)
      .substring(l.length)
      .replace(/^[, \u200e]+/, '');
  }

  return null;
}

function ke(e, t) {
  var n = parseInt(e, 10);
  if (Number.isNaN(n)) n = 0;
  var r = parseInt(t, 10) || 0;
  return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
}

function Se(e) {
  var t = Number(e);
  if ('boolean' == typeof e || '' === e || Number.isNaN(t)) throw new N('Invalid unit value ' + e);
  return t;
}

function Te(e, t, n) {
  var r = {};

  for (var i in e)
    if (ue(e, i)) {
      if (n.indexOf(i) >= 0) continue;
      var o = e[i];
      if (undefined === o || null === o) continue;
      r[t(i)] = Se(o);
    }

  return r;
}

function be(e, t) {
  var n = Math.trunc(Math.abs(e / 60)),
    r = Math.trunc(Math.abs(e % 60)),
    i = e >= 0 ? '+' : '-';

  switch (t) {
    case 'short':
      return '' + i + ce(n, 2) + ':' + ce(r, 2);

    case 'narrow':
      return '' + i + n + (r > 0 ? ':' + r : '');

    case 'techie':
      return '' + i + ce(n, 2) + ce(r, 2);

    default:
      throw new RangeError('Value format ' + t + ' is out of range for property format');
  }
}

function Oe(e) {
  return ae(e, ['hour', 'minute', 'second', 'millisecond']);
}

var Me = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function Ne(e) {
  return JSON.stringify(e, Object.keys(e).sort());
}

var Ee = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  De = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  Ie = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function Ve(e) {
  switch (e) {
    case 'narrow':
      return [].concat(Ie);

    case 'short':
      return [].concat(De);

    case 'long':
      return [].concat(Ee);

    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    case '2-digit':
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    default:
      return null;
  }
}

var Le = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  xe = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  Ce = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function Fe(e) {
  switch (e) {
    case 'narrow':
      return [].concat(Ce);

    case 'short':
      return [].concat(xe);

    case 'long':
      return [].concat(Le);

    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];

    default:
      return null;
  }
}

var Ze = ['AM', 'PM'],
  Ae = ['Before Christ', 'Anno Domini'],
  ze = ['BC', 'AD'],
  _e = ['B', 'A'];

function je(e) {
  switch (e) {
    case 'narrow':
      return [].concat(_e);

    case 'short':
      return [].concat(ze);

    case 'long':
      return [].concat(Ae);

    default:
      return null;
  }
}

function qe(e) {
  return Ze[e.hour < 12 ? 0 : 1];
}

function He(e, t) {
  return Fe(t)[e.weekday - 1];
}

function Ue(e, t) {
  return Ve(t)[e.month - 1];
}

function Re(e, t) {
  return je(t)[e.year < 0 ? 0 : 1];
}

function Pe(e, t, n, r) {
  if (undefined === n) n = 'always';
  if (undefined === r) r = false;
  var i = {
      years: ['year', 'yr.'],
      quarters: ['quarter', 'qtr.'],
      months: ['month', 'mo.'],
      weeks: ['week', 'wk.'],
      days: ['day', 'day', 'days'],
      hours: ['hour', 'hr.'],
      minutes: ['minute', 'min.'],
      seconds: ['second', 'sec.'],
    },
    o = -1 === ['hours', 'minutes', 'seconds'].indexOf(e);

  if ('auto' === n && o) {
    var a = 'days' === e;

    switch (t) {
      case 1:
        return a ? 'tomorrow' : 'next ' + i[e][0];

      case -1:
        return a ? 'yesterday' : 'last ' + i[e][0];

      case 0:
        return a ? 'today' : 'this ' + i[e][0];
    }
  }

  var u = Object.is(t, -0) || t < 0,
    s = Math.abs(t),
    c = 1 === s,
    l = i[e],
    f = r ? (c ? l[1] : l[2] || l[1]) : c ? i[e][0] : e;
  return u ? s + ' ' + f + ' ago' : 'in ' + s + ' ' + f;
}

function We(e) {
  switch (Ne(ae(e, ['weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hour12']))) {
    case Ne(L):
      return 'M/d/yyyy';

    case Ne(x):
      return 'LLL d, yyyy';

    case Ne(C):
      return 'EEE, LLL d, yyyy';

    case Ne(F):
      return 'LLLL d, yyyy';

    case Ne(Z):
      return 'EEEE, LLLL d, yyyy';

    case Ne(A):
      return 'h:mm a';

    case Ne(z):
      return 'h:mm:ss a';

    case Ne(_):
    case Ne(j):
      return 'h:mm a';

    case Ne(q):
      return 'HH:mm';

    case Ne(H):
      return 'HH:mm:ss';

    case Ne(U):
    case Ne(R):
      return 'HH:mm';

    case Ne(P):
      return 'M/d/yyyy, h:mm a';

    case Ne(J):
      return 'LLL d, yyyy, h:mm a';

    case Ne($):
      return 'LLLL d, yyyy, h:mm a';

    case Ne(Q):
      return 'EEEE, LLLL d, yyyy, h:mm a';

    case Ne(W):
      return 'M/d/yyyy, h:mm:ss a';

    case Ne(Y):
      return 'LLL d, yyyy, h:mm:ss a';

    case Ne(G):
      return 'EEE, d LLL yyyy, h:mm a';

    case Ne(B):
      return 'LLLL d, yyyy, h:mm:ss a';

    case Ne(K):
      return 'EEEE, LLLL d, yyyy, h:mm:ss a';

    default:
      return 'EEEE, LLLL d, yyyy, h:mm a';
  }
}

function Je(e, t) {
  for (var n, r = '', i = w(e); !(n = i()).done; ) {
    var o = n.value;
    if (o.literal) r += o.val;
    else r += t(o.val);
  }

  return r;
}

var Ye = {
    D: L,
    DD: x,
    DDD: F,
    DDDD: Z,
    t: A,
    tt: z,
    ttt: _,
    tttt: j,
    T: q,
    TT: H,
    TTT: U,
    TTTT: R,
    f: P,
    ff: J,
    fff: $,
    ffff: Q,
    F: W,
    FF: Y,
    FFF: B,
    FFFF: K,
  },
  Ge = (function () {
    function e(e, t) {
      this.opts = t;
      this.loc = e;
      this.systemLoc = null;
    }

    e.create = function (t, n) {
      if (undefined === n) n = {};
      return new e(t, n);
    };

    e.parseFormat = function (e) {
      for (var t = null, n = '', r = false, i = [], o = 0; o < e.length; o++) {
        var a = e.charAt(o);

        if ("'" === a) {
          if (n.length > 0)
            i.push({
              literal: r,
              val: n,
            });
          t = null;
          n = '';
          r = !r;
        } else if (r) n += a;
        else if (a === t) n += a;
        else {
          if (n.length > 0)
            i.push({
              literal: false,
              val: n,
            });
          n = a;
          t = a;
        }
      }

      if (n.length > 0)
        i.push({
          literal: r,
          val: n,
        });
      return i;
    };

    e.macroTokenToFormatOpts = function (e) {
      return Ye[e];
    };

    var t = e.prototype;

    t.formatWithSystemDefault = function (e, t) {
      if (null === this.systemLoc) this.systemLoc = this.loc.redefaultToSystem();
      return this.systemLoc.dtFormatter(e, module11({}, this.opts, t)).format();
    };

    t.formatDateTime = function (e, t) {
      if (undefined === t) t = {};
      return this.loc.dtFormatter(e, module11({}, this.opts, t)).format();
    };

    t.formatDateTimeParts = function (e, t) {
      if (undefined === t) t = {};
      return this.loc.dtFormatter(e, module11({}, this.opts, t)).formatToParts();
    };

    t.resolvedOptions = function (e, t) {
      if (undefined === t) t = {};
      return this.loc.dtFormatter(e, module11({}, this.opts, t)).resolvedOptions();
    };

    t.num = function (e, t) {
      if ((undefined === t && (t = 0), this.opts.forceSimple)) return ce(e, t);
      var n = module11({}, this.opts);
      if (t > 0) n.padTo = t;
      return this.loc.numberFormatter(n).format(e);
    };

    t.formatDateTimeFromString = function (t, n) {
      var r = this,
        i = 'en' === this.loc.listingMode(),
        o = this.loc.outputCalendar && 'gregory' !== this.loc.outputCalendar && re(),
        a = function (e, n) {
          return r.loc.extract(t, e, n);
        },
        u = function (e) {
          return t.isOffsetFixed && 0 === t.offset && e.allowZ ? 'Z' : t.isValid ? t.zone.formatOffset(t.ts, e.format) : '';
        },
        s = function (e, n) {
          return i
            ? Ue(t, e)
            : a(
                n
                  ? {
                      month: e,
                    }
                  : {
                      month: e,
                      day: 'numeric',
                    },
                'month'
              );
        },
        c = function (e, n) {
          return i
            ? He(t, e)
            : a(
                n
                  ? {
                      weekday: e,
                    }
                  : {
                      weekday: e,
                      month: 'long',
                      day: 'numeric',
                    },
                'weekday'
              );
        },
        l = function (n) {
          var i = e.macroTokenToFormatOpts(n);
          return i ? r.formatWithSystemDefault(t, i) : n;
        },
        f = function (e) {
          return i
            ? Re(t, e)
            : a(
                {
                  era: e,
                },
                'era'
              );
        };

      return Je(e.parseFormat(n), function (e) {
        switch (e) {
          case 'S':
            return r.num(t.millisecond);

          case 'u':
          case 'SSS':
            return r.num(t.millisecond, 3);

          case 's':
            return r.num(t.second);

          case 'ss':
            return r.num(t.second, 2);

          case 'm':
            return r.num(t.minute);

          case 'mm':
            return r.num(t.minute, 2);

          case 'h':
            return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12);

          case 'hh':
            return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);

          case 'H':
            return r.num(t.hour);

          case 'HH':
            return r.num(t.hour, 2);

          case 'Z':
            return u({
              format: 'narrow',
              allowZ: r.opts.allowZ,
            });

          case 'ZZ':
            return u({
              format: 'short',
              allowZ: r.opts.allowZ,
            });

          case 'ZZZ':
            return u({
              format: 'techie',
              allowZ: r.opts.allowZ,
            });

          case 'ZZZZ':
            return t.zone.offsetName(t.ts, {
              format: 'short',
              locale: r.loc.locale,
            });

          case 'ZZZZZ':
            return t.zone.offsetName(t.ts, {
              format: 'long',
              locale: r.loc.locale,
            });

          case 'z':
            return t.zoneName;

          case 'a':
            return i
              ? qe(t)
              : a(
                  {
                    hour: 'numeric',
                    hour12: true,
                  },
                  'dayperiod'
                );

          case 'd':
            return o
              ? a(
                  {
                    day: 'numeric',
                  },
                  'day'
                )
              : r.num(t.day);

          case 'dd':
            return o
              ? a(
                  {
                    day: '2-digit',
                  },
                  'day'
                )
              : r.num(t.day, 2);

          case 'c':
            return r.num(t.weekday);

          case 'ccc':
            return c('short', true);

          case 'cccc':
            return c('long', true);

          case 'ccccc':
            return c('narrow', true);

          case 'E':
            return r.num(t.weekday);

          case 'EEE':
            return c('short', false);

          case 'EEEE':
            return c('long', false);

          case 'EEEEE':
            return c('narrow', false);

          case 'L':
            return o
              ? a(
                  {
                    month: 'numeric',
                    day: 'numeric',
                  },
                  'month'
                )
              : r.num(t.month);

          case 'LL':
            return o
              ? a(
                  {
                    month: '2-digit',
                    day: 'numeric',
                  },
                  'month'
                )
              : r.num(t.month, 2);

          case 'LLL':
            return s('short', true);

          case 'LLLL':
            return s('long', true);

          case 'LLLLL':
            return s('narrow', true);

          case 'M':
            return o
              ? a(
                  {
                    month: 'numeric',
                  },
                  'month'
                )
              : r.num(t.month);

          case 'MM':
            return o
              ? a(
                  {
                    month: '2-digit',
                  },
                  'month'
                )
              : r.num(t.month, 2);

          case 'MMM':
            return s('short', false);

          case 'MMMM':
            return s('long', false);

          case 'MMMMM':
            return s('narrow', false);

          case 'y':
            return o
              ? a(
                  {
                    year: 'numeric',
                  },
                  'year'
                )
              : r.num(t.year);

          case 'yy':
            return o
              ? a(
                  {
                    year: '2-digit',
                  },
                  'year'
                )
              : r.num(t.year.toString().slice(-2), 2);

          case 'yyyy':
            return o
              ? a(
                  {
                    year: 'numeric',
                  },
                  'year'
                )
              : r.num(t.year, 4);

          case 'yyyyyy':
            return o
              ? a(
                  {
                    year: 'numeric',
                  },
                  'year'
                )
              : r.num(t.year, 6);

          case 'G':
            return f('short');

          case 'GG':
            return f('long');

          case 'GGGGG':
            return f('narrow');

          case 'kk':
            return r.num(t.weekYear.toString().slice(-2), 2);

          case 'kkkk':
            return r.num(t.weekYear, 4);

          case 'W':
            return r.num(t.weekNumber);

          case 'WW':
            return r.num(t.weekNumber, 2);

          case 'o':
            return r.num(t.ordinal);

          case 'ooo':
            return r.num(t.ordinal, 3);

          case 'q':
            return r.num(t.quarter);

          case 'qq':
            return r.num(t.quarter, 2);

          case 'X':
            return r.num(Math.floor(t.ts / 1e3));

          case 'x':
            return r.num(t.ts);

          default:
            return l(e);
        }
      });
    };

    t.formatDurationFromString = function (t, n) {
      var r,
        i = this,
        o = function (e) {
          switch (e[0]) {
            case 'S':
              return 'millisecond';

            case 's':
              return 'second';

            case 'm':
              return 'minute';

            case 'h':
              return 'hour';

            case 'd':
              return 'day';

            case 'M':
              return 'month';

            case 'y':
              return 'year';

            default:
              return null;
          }
        },
        a = e.parseFormat(n),
        u = a.reduce(function (e, t) {
          var n = t.literal,
            r = t.val;
          return n ? e : e.concat(r);
        }, []),
        s = t.shiftTo.apply(
          t,
          u.map(o).filter(function (e) {
            return e;
          })
        );

      return Je(
        a,
        ((r = s),
        function (e) {
          var t = o(e);
          return t ? i.num(r.get(t), e.length) : e;
        })
      );
    };

    return e;
  })(),
  $e = (function () {
    function e(e, t) {
      this.reason = e;
      this.explanation = t;
    }

    e.prototype.toMessage = function () {
      return this.explanation ? this.reason + ': ' + this.explanation : this.reason;
    };

    return e;
  })(),
  Be = (function () {
    function e() {}

    var t = e.prototype;

    t.offsetName = function (e, t) {
      throw new E();
    };

    t.formatOffset = function (e, t) {
      throw new E();
    };

    t.offset = function (e) {
      throw new E();
    };

    t.equals = function (e) {
      throw new E();
    };

    c(e, [
      {
        key: 'type',
        get: function () {
          throw new E();
        },
      },
      {
        key: 'name',
        get: function () {
          throw new E();
        },
      },
      {
        key: 'universal',
        get: function () {
          throw new E();
        },
      },
      {
        key: 'isValid',
        get: function () {
          throw new E();
        },
      },
    ]);
    return e;
  })(),
  Qe = null,
  Ke = (function (e) {
    function t() {
      return e.apply(this, arguments) || this;
    }

    l(t, e);
    var n = t.prototype;

    n.offsetName = function (e, t) {
      return we(e, t.format, t.locale);
    };

    n.formatOffset = function (e, t) {
      return be(this.offset(e), t);
    };

    n.offset = function (e) {
      return -new Date(e).getTimezoneOffset();
    };

    n.equals = function (e) {
      return 'local' === e.type;
    };

    c(
      t,
      [
        {
          key: 'type',
          get: function () {
            return 'local';
          },
        },
        {
          key: 'name',
          get: function () {
            return ne() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : 'local';
          },
        },
        {
          key: 'universal',
          get: function () {
            return false;
          },
        },
        {
          key: 'isValid',
          get: function () {
            return true;
          },
        },
      ],
      [
        {
          key: 'instance',
          get: function () {
            if (null === Qe) Qe = new t();
            return Qe;
          },
        },
      ]
    );
    return t;
  })(Be),
  Xe = RegExp('^' + Me.source + '$'),
  et = {};

var tt = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
};

function nt(e, t) {
  var n = e.format(t).replace(/\u200E/g, ''),
    r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
    i = r[1],
    o = r[2];
  return [r[3], i, o, r[4], r[5], r[6]];
}

function rt(e, t) {
  for (var n = e.formatToParts(t), r = [], i = 0; i < n.length; i++) {
    var o = n[i],
      a = o.type,
      u = o.value,
      s = tt[a];
    if (!X(s)) r[s] = parseInt(u, 10);
  }

  return r;
}

var it = {},
  ot = (function (e) {
    function t(n) {
      var r;
      (r = e.call(this) || this).zoneName = n;
      r.valid = t.isValidZone(n);
      return r;
    }

    l(t, e);

    t.create = function (e) {
      if (!it[e]) it[e] = new t(e);
      return it[e];
    };

    t.resetCache = function () {
      it = {};
      et = {};
    };

    t.isValidSpecifier = function (e) {
      return !(!e || !e.match(Xe));
    };

    t.isValidZone = function (e) {
      try {
        new Intl.DateTimeFormat('en-US', {
          timeZone: e,
        }).format();
        return true;
      } catch (e) {
        return false;
      }
    };

    t.parseGMTOffset = function (e) {
      if (e) {
        var t = e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
        if (t) return -60 * parseInt(t[1]);
      }

      return null;
    };

    var n = t.prototype;

    n.offsetName = function (e, t) {
      return we(e, t.format, t.locale, this.name);
    };

    n.formatOffset = function (e, t) {
      return be(this.offset(e), t);
    };

    n.offset = function (e) {
      var t = new Date(e);
      if (isNaN(t)) return NaN;
      if (!et[n])
        et[n] = new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: n,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      var n = this.name,
        r = et[n],
        i = r.formatToParts ? rt(r, t) : nt(r, t),
        o = i[0],
        a = i[1],
        u = i[2],
        s = i[3],
        c = i[4],
        l = i[5],
        f = +t,
        d = f % 1e3;
      return (
        (ve({
          year: o,
          month: a,
          day: u,
          hour: 24 === s ? 0 : s,
          minute: c,
          second: l,
          millisecond: 0,
        }) -
          (f -= d >= 0 ? d : 1e3 + d)) /
        6e4
      );
    };

    n.equals = function (e) {
      return 'iana' === e.type && e.name === this.name;
    };

    c(t, [
      {
        key: 'type',
        get: function () {
          return 'iana';
        },
      },
      {
        key: 'name',
        get: function () {
          return this.zoneName;
        },
      },
      {
        key: 'universal',
        get: function () {
          return false;
        },
      },
      {
        key: 'isValid',
        get: function () {
          return this.valid;
        },
      },
    ]);
    return t;
  })(Be),
  at = null,
  ut = (function (e) {
    function t(t) {
      var n;
      (n = e.call(this) || this).fixed = t;
      return n;
    }

    l(t, e);

    t.instance = function (e) {
      return 0 === e ? t.utcInstance : new t(e);
    };

    t.parseSpecifier = function (e) {
      if (e) {
        var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (n) return new t(ke(n[1], n[2]));
      }

      return null;
    };

    c(t, null, [
      {
        key: 'utcInstance',
        get: function () {
          if (null === at) at = new t(0);
          return at;
        },
      },
    ]);
    var n = t.prototype;

    n.offsetName = function () {
      return this.name;
    };

    n.formatOffset = function (e, t) {
      return be(this.fixed, t);
    };

    n.offset = function () {
      return this.fixed;
    };

    n.equals = function (e) {
      return 'fixed' === e.type && e.fixed === this.fixed;
    };

    c(t, [
      {
        key: 'type',
        get: function () {
          return 'fixed';
        },
      },
      {
        key: 'name',
        get: function () {
          return 0 === this.fixed ? 'UTC' : 'UTC' + be(this.fixed, 'narrow');
        },
      },
      {
        key: 'universal',
        get: function () {
          return true;
        },
      },
      {
        key: 'isValid',
        get: function () {
          return true;
        },
      },
    ]);
    return t;
  })(Be),
  st = (function (e) {
    function t(t) {
      var n;
      (n = e.call(this) || this).zoneName = t;
      return n;
    }

    l(t, e);
    var n = t.prototype;

    n.offsetName = function () {
      return null;
    };

    n.formatOffset = function () {
      return '';
    };

    n.offset = function () {
      return NaN;
    };

    n.equals = function () {
      return false;
    };

    c(t, [
      {
        key: 'type',
        get: function () {
          return 'invalid';
        },
      },
      {
        key: 'name',
        get: function () {
          return this.zoneName;
        },
      },
      {
        key: 'universal',
        get: function () {
          return false;
        },
      },
      {
        key: 'isValid',
        get: function () {
          return false;
        },
      },
    ]);
    return t;
  })(Be);

function ct(e, t) {
  var n;
  if (X(e) || null === e) return t;
  if (e instanceof Be) return e;

  if ('string' == typeof e) {
    var r = e.toLowerCase();
    return 'local' === r
      ? t
      : 'utc' === r || 'gmt' === r
      ? ut.utcInstance
      : null != (n = ot.parseGMTOffset(e))
      ? ut.instance(n)
      : ot.isValidSpecifier(r)
      ? ot.create(e)
      : ut.parseSpecifier(r) || new st(e);
  }

  return ee(e) ? ut.instance(e) : 'object' == typeof e && e.offset && 'number' == typeof e.offset ? e : new st(e);
}

var lt = function () {
    return Date.now();
  },
  ft = null,
  dt = null,
  ht = null,
  mt = null,
  yt = false,
  vt = (function () {
    function e() {}

    e.resetCaches = function () {
      Ct.resetCache();
      ot.resetCache();
    };

    c(e, null, [
      {
        key: 'now',
        get: function () {
          return lt;
        },
        set: function (e) {
          lt = e;
        },
      },
      {
        key: 'defaultZoneName',
        get: function () {
          return e.defaultZone.name;
        },
        set: function (e) {
          ft = e ? ct(e) : null;
        },
      },
      {
        key: 'defaultZone',
        get: function () {
          return ft || Ke.instance;
        },
      },
      {
        key: 'defaultLocale',
        get: function () {
          return dt;
        },
        set: function (e) {
          dt = e;
        },
      },
      {
        key: 'defaultNumberingSystem',
        get: function () {
          return ht;
        },
        set: function (e) {
          ht = e;
        },
      },
      {
        key: 'defaultOutputCalendar',
        get: function () {
          return mt;
        },
        set: function (e) {
          mt = e;
        },
      },
      {
        key: 'throwOnInvalid',
        get: function () {
          return yt;
        },
        set: function (e) {
          yt = e;
        },
      },
    ]);
    return e;
  })(),
  pt = {};

function gt(e, t) {
  if (undefined === t) t = {};
  var n = JSON.stringify([e, t]),
    r = pt[n];

  if (!r) {
    r = new Intl.DateTimeFormat(e, t);
    pt[n] = r;
  }

  return r;
}

var wt = {};

function kt(e, t) {
  if (undefined === t) t = {};
  var n = JSON.stringify([e, t]),
    r = wt[n];

  if (!r) {
    r = new Intl.NumberFormat(e, t);
    wt[n] = r;
  }

  return r;
}

var St = {};

function Tt(e, t) {
  if (undefined === t) t = {};
  var n = t,
    r = v(n, ['base']),
    i = JSON.stringify([e, r]),
    o = St[i];

  if (!o) {
    o = new Intl.RelativeTimeFormat(e, t);
    St[i] = o;
  }

  return o;
}

var bt = null;

function Ot() {
  if (bt) return bt;

  if (ne()) {
    var e = new Intl.DateTimeFormat().resolvedOptions().locale;
    bt = e && 'und' !== e ? e : 'en-US';
    return bt;
  }

  bt = 'en-US';
  return bt;
}

function Mt(e) {
  var t = e.indexOf('-u-');
  if (-1 === t) return [e];
  var n,
    r = e.substring(0, t);

  try {
    n = gt(e).resolvedOptions();
  } catch (e) {
    n = gt(r).resolvedOptions();
  }

  var i = n;
  return [r, i.numberingSystem, i.calendar];
}

function Nt(e, t, n) {
  return ne() ? (n || t ? ((e += '-u'), n && (e += '-ca-' + n), t && (e += '-nu-' + t), e) : e) : [];
}

function Et(e) {
  for (var t = [], n = 1; n <= 12; n++) {
    var r = Pr.utc(2016, n, 1);
    t.push(e(r));
  }

  return t;
}

function Dt(e) {
  for (var t = [], n = 1; n <= 7; n++) {
    var r = Pr.utc(2016, 11, 13 + n);
    t.push(e(r));
  }

  return t;
}

function It(e, t, n, r, i) {
  var o = e.listingMode(n);
  return 'error' === o ? null : 'en' === o ? r(t) : i(t);
}

var Vt = (function () {
    function e(e, t, n) {
      if (((this.padTo = n.padTo || 0), (this.floor = n.floor || false), !t && ne())) {
        var r = {
          useGrouping: false,
        };
        if (n.padTo > 0) r.minimumIntegerDigits = n.padTo;
        this.inf = kt(e, r);
      }
    }

    e.prototype.format = function (e) {
      if (this.inf) {
        var t = this.floor ? Math.floor(e) : e;
        return this.inf.format(t);
      }

      return ce(this.floor ? Math.floor(e) : de(e, 3), this.padTo);
    };

    return e;
  })(),
  Lt = (function () {
    function e(e, t, n) {
      var r;

      if (((this.opts = n), (this.hasIntl = ne()), e.zone.universal && this.hasIntl)) {
        var i = (e.offset / 60) * -1,
          o = i >= 0 ? 'Etc/GMT+' + i : 'Etc/GMT' + i,
          a = ot.isValidZone(o);

        if (0 !== e.offset && a) {
          r = o;
          this.dt = e;
        } else {
          r = 'UTC';
          if (n.timeZoneName) this.dt = e;
          else this.dt = 0 === e.offset ? e : Pr.fromMillis(e.ts + 60 * e.offset * 1e3);
        }
      } else 'local' === e.zone.type ? (this.dt = e) : ((this.dt = e), (r = e.zone.name));

      if (this.hasIntl) {
        var s = module11({}, this.opts);
        if (r) s.timeZone = r;
        this.dtf = gt(t, s);
      }
    }

    var t = e.prototype;

    t.format = function () {
      if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
      var e = We(this.opts),
        t = Ct.create('en-US');
      return Ge.create(t).formatDateTimeFromString(this.dt, e);
    };

    t.formatToParts = function () {
      return this.hasIntl && re() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
    };

    t.resolvedOptions = function () {
      return this.hasIntl
        ? this.dtf.resolvedOptions()
        : {
            locale: 'en-US',
            numberingSystem: 'latn',
            outputCalendar: 'gregory',
          };
    };

    return e;
  })(),
  xt = (function () {
    function e(e, t, n) {
      this.opts = module11(
        {
          style: 'long',
        },
        n
      );
      if (!t && ie()) this.rtf = Tt(e, n);
    }

    var t = e.prototype;

    t.format = function (e, t) {
      return this.rtf ? this.rtf.format(e, t) : Pe(t, e, this.opts.numeric, 'long' !== this.opts.style);
    };

    t.formatToParts = function (e, t) {
      return this.rtf ? this.rtf.formatToParts(e, t) : [];
    };

    return e;
  })(),
  Ct = (function () {
    function e(e, t, n, r) {
      var i = Mt(e),
        o = i[0],
        a = i[1],
        u = i[2];
      this.locale = o;
      this.numberingSystem = t || a || null;
      this.outputCalendar = n || u || null;
      this.intl = Nt(this.locale, this.numberingSystem, this.outputCalendar);
      this.weekdaysCache = {
        format: {},
        standalone: {},
      };
      this.monthsCache = {
        format: {},
        standalone: {},
      };
      this.meridiemCache = null;
      this.eraCache = {};
      this.specifiedLocale = r;
      this.fastNumbersCached = null;
    }

    e.fromOpts = function (t) {
      return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
    };

    e.create = function (t, n, r, i) {
      if (undefined === i) i = false;
      var o = t || vt.defaultLocale;
      return new e(o || (i ? 'en-US' : Ot()), n || vt.defaultNumberingSystem, r || vt.defaultOutputCalendar, o);
    };

    e.resetCache = function () {
      bt = null;
      pt = {};
      wt = {};
      St = {};
    };

    e.fromObject = function (t) {
      var n = undefined === t ? {} : t,
        r = n.locale,
        i = n.numberingSystem,
        o = n.outputCalendar;
      return e.create(r, i, o);
    };

    var t = e.prototype;

    t.listingMode = function (e) {
      if (undefined === e) e = true;
      var t = ne() && re(),
        n = this.isEnglish(),
        r = !((null !== this.numberingSystem && 'latn' !== this.numberingSystem) || (null !== this.outputCalendar && 'gregory' !== this.outputCalendar));
      return t || (n && r) || e ? (!t || (n && r) ? 'en' : 'intl') : 'error';
    };

    t.clone = function (t) {
      return t && 0 !== Object.getOwnPropertyNames(t).length
        ? e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || false)
        : this;
    };

    t.redefaultToEN = function (e) {
      if (undefined === e) e = {};
      return this.clone(
        module11({}, e, {
          defaultToEN: true,
        })
      );
    };

    t.redefaultToSystem = function (e) {
      if (undefined === e) e = {};
      return this.clone(
        module11({}, e, {
          defaultToEN: false,
        })
      );
    };

    t.months = function (e, t, n) {
      var r = this;
      if (undefined === t) t = false;
      if (undefined === n) n = true;
      return It(this, e, n, Ve, function () {
        var n = t
            ? {
                month: e,
                day: 'numeric',
              }
            : {
                month: e,
              },
          i = t ? 'format' : 'standalone';
        if (!r.monthsCache[i][e])
          r.monthsCache[i][e] = Et(function (e) {
            return r.extract(e, n, 'month');
          });
        return r.monthsCache[i][e];
      });
    };

    t.weekdays = function (e, t, n) {
      var r = this;
      if (undefined === t) t = false;
      if (undefined === n) n = true;
      return It(this, e, n, Fe, function () {
        var n = t
            ? {
                weekday: e,
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            : {
                weekday: e,
              },
          i = t ? 'format' : 'standalone';
        if (!r.weekdaysCache[i][e])
          r.weekdaysCache[i][e] = Dt(function (e) {
            return r.extract(e, n, 'weekday');
          });
        return r.weekdaysCache[i][e];
      });
    };

    t.meridiems = function (e) {
      var t = this;
      if (undefined === e) e = true;
      return It(
        this,
        undefined,
        e,
        function () {
          return Ze;
        },
        function () {
          if (!t.meridiemCache) {
            var e = {
              hour: 'numeric',
              hour12: true,
            };
            t.meridiemCache = [Pr.utc(2016, 11, 13, 9), Pr.utc(2016, 11, 13, 19)].map(function (n) {
              return t.extract(n, e, 'dayperiod');
            });
          }

          return t.meridiemCache;
        }
      );
    };

    t.eras = function (e, t) {
      var n = this;
      if (undefined === t) t = true;
      return It(this, e, t, je, function () {
        var t = {
          era: e,
        };
        if (!n.eraCache[e])
          n.eraCache[e] = [Pr.utc(-40, 1, 1), Pr.utc(2017, 1, 1)].map(function (e) {
            return n.extract(e, t, 'era');
          });
        return n.eraCache[e];
      });
    };

    t.extract = function (e, t, n) {
      var r = this.dtFormatter(e, t)
        .formatToParts()
        .find(function (e) {
          return e.type.toLowerCase() === n;
        });
      return r ? r.value : null;
    };

    t.numberFormatter = function (e) {
      if (undefined === e) e = {};
      return new Vt(this.intl, e.forceSimple || this.fastNumbers, e);
    };

    t.dtFormatter = function (e, t) {
      if (undefined === t) t = {};
      return new Lt(e, this.intl, t);
    };

    t.relFormatter = function (e) {
      if (undefined === e) e = {};
      return new xt(this.intl, this.isEnglish(), e);
    };

    t.isEnglish = function () {
      return 'en' === this.locale || 'en-us' === this.locale.toLowerCase() || (ne() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'));
    };

    t.equals = function (e) {
      return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    };

    c(e, [
      {
        key: 'fastNumbers',
        get: function () {
          var e;
          if (null == this.fastNumbersCached)
            this.fastNumbersCached =
              (!(e = this).numberingSystem || 'latn' === e.numberingSystem) &&
              ('latn' === e.numberingSystem || !e.locale || e.locale.startsWith('en') || (ne() && 'latn' === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem));
          return this.fastNumbersCached;
        },
      },
    ]);
    return e;
  })();

function Ft() {
  var r = args.reduce(function (e, t) {
    return e + t.source;
  }, '');
  return RegExp('^' + r + '$');
}

function Zt() {
  return function (e) {
    return args
      .reduce(
        function (t, n) {
          var r = t[0],
            i = t[1],
            o = t[2],
            a = n(e, o),
            s = a[0],
            c = a[1],
            l = a[2];
          return [module11(r, s), i || c, l];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
  };
}

function At(e) {
  if (null == e) return [null, null];

  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

  for (var i = 0, o = n; i < o.length; i++) {
    var a = o[i],
      u = a[0],
      s = a[1],
      c = u.exec(e);
    if (c) return s(c);
  }

  return [null, null];
}

function zt() {
  return function (e, n) {
    var r,
      i = {};

    for (r = 0; r < args.length; r++) i[args[r]] = le(e[n + r]);

    return [i, null, n + r];
  };
}

var _t = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  jt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  qt = RegExp('' + jt.source + _t.source + '?'),
  Ht = RegExp('(?:T' + qt.source + ')?'),
  Ut = zt('weekYear', 'weekNumber', 'weekDay'),
  Rt = zt('year', 'ordinal'),
  Pt = RegExp(jt.source + ' ?(?:' + _t.source + '|(' + Me.source + '))?'),
  Wt = RegExp('(?: ' + Pt.source + ')?');

function Jt(e, t, n) {
  var r = e[t];
  return X(r) ? n : le(r);
}

function Yt(e, t) {
  return [
    {
      year: Jt(e, t),
      month: Jt(e, t + 1, 1),
      day: Jt(e, t + 2, 1),
    },
    null,
    t + 3,
  ];
}

function Gt(e, t) {
  return [
    {
      hours: Jt(e, t, 0),
      minutes: Jt(e, t + 1, 0),
      seconds: Jt(e, t + 2, 0),
      milliseconds: fe(e[t + 3]),
    },
    null,
    t + 4,
  ];
}

function $t(e, t) {
  var n = !e[t] && !e[t + 1],
    r = ke(e[t + 1], e[t + 2]);
  return [{}, n ? null : ut.instance(r), t + 3];
}

function Bt(e, t) {
  return [{}, e[t] ? ot.create(e[t]) : null, t + 1];
}

var Qt = RegExp('^T?' + jt.source + '$'),
  Kt = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function Xt(e) {
  var t = e[0],
    n = e[1],
    r = e[2],
    i = e[3],
    o = e[4],
    a = e[5],
    u = e[6],
    s = e[7],
    c = e[8],
    l = '-' === t[0],
    f = s && '-' === s[0],
    d = function (e, t) {
      if (undefined === t) t = false;
      return undefined !== e && (t || (e && l)) ? -e : e;
    };

  return [
    {
      years: d(le(n)),
      months: d(le(r)),
      weeks: d(le(i)),
      days: d(le(o)),
      hours: d(le(a)),
      minutes: d(le(u)),
      seconds: d(le(s), '-0' === s),
      milliseconds: d(fe(c), f),
    },
  ];
}

var en = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480,
};

function tn(e, t, n, r, i, o, a) {
  var u = {
    year: 2 === t.length ? ge(le(t)) : le(t),
    month: De.indexOf(n) + 1,
    day: le(r),
    hour: le(i),
    minute: le(o),
  };
  if (a) u.second = le(a);
  if (e) u.weekday = e.length > 3 ? Le.indexOf(e) + 1 : xe.indexOf(e) + 1;
  return u;
}

var nn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function rn(e) {
  var t,
    n = e[1],
    r = e[2],
    i = e[3],
    o = e[4],
    a = e[5],
    u = e[6],
    s = e[7],
    c = e[8],
    l = e[9],
    f = e[10],
    d = e[11],
    h = tn(n, o, i, r, a, u, s);
  t = c ? en[c] : l ? 0 : ke(f, d);
  return [h, new ut(t)];
}

function on(e) {
  return e
    .replace(/\([^)]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .trim();
}

var an = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  un = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  sn = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function cn(e) {
  var t = e[1],
    n = e[2],
    r = e[3];
  return [tn(t, e[4], r, n, e[5], e[6], e[7]), ut.utcInstance];
}

function ln(e) {
  var t = e[1],
    n = e[2],
    r = e[3],
    i = e[4],
    o = e[5],
    a = e[6];
  return [tn(t, e[7], n, r, i, o, a), ut.utcInstance];
}

var fn = Ft(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ht),
  dn = Ft(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Ht),
  hn = Ft(/(\d{4})-?(\d{3})/, Ht),
  mn = Ft(qt),
  yn = Zt(Yt, Gt, $t),
  vn = Zt(Ut, Gt, $t),
  pn = Zt(Rt, Gt, $t),
  gn = Zt(Gt, $t);
var wn = Zt(Gt);
var kn = Ft(/(\d{4})-(\d\d)-(\d\d)/, Wt),
  Sn = Ft(Pt),
  Tn = Zt(Yt, Gt, $t, Bt),
  bn = Zt(Gt, $t, Bt);
var On = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 604800,
      milliseconds: 6048e5,
    },
    days: {
      hours: 24,
      minutes: 1440,
      seconds: 86400,
      milliseconds: 864e5,
    },
    hours: {
      minutes: 60,
      seconds: 3600,
      milliseconds: 36e5,
    },
    minutes: {
      seconds: 60,
      milliseconds: 6e4,
    },
    seconds: {
      milliseconds: 1e3,
    },
  },
  Mn = module11(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536e3,
        milliseconds: 31536e6,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 78624e5,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592e3,
        milliseconds: 2592e6,
      },
    },
    On
  ),
  Nn = module11(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52.1775,
        days: 365.2425,
        hours: 8765.82,
        minutes: 525949.2,
        seconds: 31556951.999999996,
        milliseconds: 31556951999.999996,
      },
      quarters: {
        months: 3,
        weeks: 13.044375,
        days: 91.310625,
        hours: 2191.455,
        minutes: 131487.3,
        seconds: 7889237.999999999,
        milliseconds: 7889237999.999999,
      },
      months: {
        weeks: 4.3481250000000005,
        days: 30.436875,
        hours: 730.485,
        minutes: 43829.1,
        seconds: 2629746,
        milliseconds: 2629746e3,
      },
    },
    On
  ),
  En = ['years', 'quarters', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'],
  Dn = En.slice(0).reverse();

function In(e, t, n) {
  if (undefined === n) n = false;
  var r = {
    values: n ? t.values : module11({}, e.values, t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
  };
  return new xn(r);
}

function Vn(e, t, n, r, i) {
  var o,
    a = e[i][n],
    u = t[n] / a,
    s = !(Math.sign(u) === Math.sign(r[i])) && 0 !== r[i] && Math.abs(u) <= 1 ? ((o = u) < 0 ? Math.floor(o) : Math.ceil(o)) : Math.trunc(u);
  r[i] += s;
  t[n] -= s * a;
}

function Ln(e, t) {
  Dn.reduce(function (n, r) {
    if (X(t[r])) return n;
    else {
      if (n) Vn(e, t, n, t, r);
      return r;
    }
  }, null);
}

var xn = (function () {
  function e(e) {
    var t = 'longterm' === e.conversionAccuracy || false;
    this.values = e.values;
    this.loc = e.loc || Ct.create();
    this.conversionAccuracy = t ? 'longterm' : 'casual';
    this.invalid = e.invalid || null;
    this.matrix = t ? Nn : Mn;
    this.isLuxonDuration = true;
  }

  e.fromMillis = function (t, n) {
    return e.fromObject(
      module11(
        {
          milliseconds: t,
        },
        n
      )
    );
  };

  e.fromObject = function (t) {
    if (null == t || 'object' != typeof t) throw new N('Duration.fromObject: argument expected to be an object, got ' + (null === t ? 'null' : typeof t));
    return new e({
      values: Te(t, e.normalizeUnit, ['locale', 'numberingSystem', 'conversionAccuracy', 'zone']),
      loc: Ct.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
    });
  };

  e.fromISO = function (t, n) {
    var r = At(t, [Kt, Xt])[0];

    if (r) {
      var i = module11(r, n);
      return e.fromObject(i);
    }

    return e.invalid('unparsable', 'the input "' + t + '" can\'t be parsed as ISO 8601');
  };

  e.fromISOTime = function (t, n) {
    var r = At(t, [Qt, wn])[0];

    if (r) {
      var i = module11(r, n);
      return e.fromObject(i);
    }

    return e.invalid('unparsable', 'the input "' + t + '" can\'t be parsed as ISO 8601');
  };

  e.invalid = function (t, n) {
    if ((undefined === n && (n = null), !t)) throw new N('need to specify a reason the Duration is invalid');
    var r = t instanceof $e ? t : new $e(t, n);
    if (vt.throwOnInvalid) throw new b(r);
    return new e({
      invalid: r,
    });
  };

  e.normalizeUnit = function (e) {
    var t = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds',
    }[e ? e.toLowerCase() : e];
    if (!t) throw new M(e);
    return t;
  };

  e.isDuration = function (e) {
    return e ? e.isLuxonDuration : false;
  };

  var t = e.prototype;

  t.toFormat = function (e, t) {
    if (undefined === t) t = {};
    var n = module11({}, t, {
      floor: false !== t.round && false !== t.floor,
    });
    return this.isValid ? Ge.create(this.loc, n).formatDurationFromString(this, e) : 'Invalid Duration';
  };

  t.toObject = function (e) {
    if ((undefined === e && (e = {}), !this.isValid)) return {};
    var t = module11({}, this.values);

    if (e.includeConfig) {
      t.conversionAccuracy = this.conversionAccuracy;
      t.numberingSystem = this.loc.numberingSystem;
      t.locale = this.loc.locale;
    }

    return t;
  };

  t.toISO = function () {
    if (!this.isValid) return null;
    var e = 'P';
    if (0 !== this.years) e += this.years + 'Y';
    if (!(0 === this.months && 0 === this.quarters)) e += this.months + 3 * this.quarters + 'M';
    if (0 !== this.weeks) e += this.weeks + 'W';
    if (0 !== this.days) e += this.days + 'D';
    if (!(0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds)) e += 'T';
    if (0 !== this.hours) e += this.hours + 'H';
    if (0 !== this.minutes) e += this.minutes + 'M';
    if (!(0 === this.seconds && 0 === this.milliseconds)) e += de(this.seconds + this.milliseconds / 1e3, 3) + 'S';
    if ('P' === e) e += 'T0S';
    return e;
  };

  t.toISOTime = function (e) {
    if ((undefined === e && (e = {}), !this.isValid)) return null;
    var t = this.toMillis();
    if (t < 0 || t >= 864e5) return null;
    e = module11(
      {
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: 'extended',
      },
      e
    );
    var n = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds'),
      r = 'basic' === e.format ? 'hhmm' : 'hh:mm';

    if (!(e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds)) {
      r += 'basic' === e.format ? 'ss' : ':ss';
      if (!(e.suppressMilliseconds && 0 === n.milliseconds)) r += '.SSS';
    }

    var i = n.toFormat(r);
    if (e.includePrefix) i = 'T' + i;
    return i;
  };

  t.toJSON = function () {
    return this.toISO();
  };

  t.toString = function () {
    return this.toISO();
  };

  t.toMillis = function () {
    return this.as('milliseconds');
  };

  t.valueOf = function () {
    return this.toMillis();
  };

  t.plus = function (e) {
    if (!this.isValid) return this;

    for (var t, n = Cn(e), r = {}, i = w(En); !(t = i()).done; ) {
      var o = t.value;
      if (ue(n.values, o) || ue(this.values, o)) r[o] = n.get(o) + this.get(o);
    }

    return In(
      this,
      {
        values: r,
      },
      true
    );
  };

  t.minus = function (e) {
    if (!this.isValid) return this;
    var t = Cn(e);
    return this.plus(t.negate());
  };

  t.mapUnits = function (e) {
    if (!this.isValid) return this;

    for (var t = {}, n = 0, r = Object.keys(this.values); n < r.length; n++) {
      var i = r[n];
      t[i] = Se(e(this.values[i], i));
    }

    return In(
      this,
      {
        values: t,
      },
      true
    );
  };

  t.get = function (t) {
    return this[e.normalizeUnit(t)];
  };

  t.set = function (t) {
    return this.isValid
      ? In(this, {
          values: module11(this.values, Te(t, e.normalizeUnit, [])),
        })
      : this;
  };

  t.reconfigure = function (e) {
    var t = undefined === e ? {} : e,
      n = t.locale,
      r = t.numberingSystem,
      i = t.conversionAccuracy,
      o = {
        loc: this.loc.clone({
          locale: n,
          numberingSystem: r,
        }),
      };
    if (i) o.conversionAccuracy = i;
    return In(this, o);
  };

  t.as = function (e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  };

  t.normalize = function () {
    if (!this.isValid) return this;
    var e = this.toObject();
    Ln(this.matrix, e);
    return In(
      this,
      {
        values: e,
      },
      true
    );
  };

  t.shiftTo = function (...args) {
    if (!this.isValid) return this;
    if (0 === args.length) return this;
    args = args.map(function (t) {
      return e.normalizeUnit(t);
    });

    for (var i, o, a = {}, u = {}, s = this.toObject(), c = w(En); !(o = c()).done; ) {
      var l = o.value;

      if (args.indexOf(l) >= 0) {
        i = l;
        var f = 0;

        for (var d in u) {
          f += this.matrix[d][l] * u[d];
          u[d] = 0;
        }

        if (ee(s[l])) f += s[l];
        var h = Math.trunc(f);

        for (var m in ((a[l] = h), (u[l] = f - h), s)) En.indexOf(m) > En.indexOf(l) && Vn(this.matrix, s, m, a, l);
      } else ee(s[l]) && (u[l] = s[l]);
    }

    for (var y in u) 0 !== u[y] && (a[i] += y === i ? u[y] : u[y] / this.matrix[i][y]);

    return In(
      this,
      {
        values: a,
      },
      true
    ).normalize();
  };

  t.negate = function () {
    if (!this.isValid) return this;

    for (var e = {}, t = 0, n = Object.keys(this.values); t < n.length; t++) {
      var r = n[t];
      e[r] = -this.values[r];
    }

    return In(
      this,
      {
        values: e,
      },
      true
    );
  };

  t.equals = function (e) {
    if (!this.isValid || !e.isValid) return false;
    if (!this.loc.equals(e.loc)) return false;

    for (var t, n = w(En); !(t = n()).done; ) {
      var r = t.value;
      if (((i = this.values[r]), (o = e.values[r]), !(undefined === i || 0 === i ? undefined === o || 0 === o : i === o))) return false;
    }

    var i, o;
    return true;
  };

  c(e, [
    {
      key: 'locale',
      get: function () {
        return this.isValid ? this.loc.locale : null;
      },
    },
    {
      key: 'numberingSystem',
      get: function () {
        return this.isValid ? this.loc.numberingSystem : null;
      },
    },
    {
      key: 'years',
      get: function () {
        return this.isValid ? this.values.years || 0 : NaN;
      },
    },
    {
      key: 'quarters',
      get: function () {
        return this.isValid ? this.values.quarters || 0 : NaN;
      },
    },
    {
      key: 'months',
      get: function () {
        return this.isValid ? this.values.months || 0 : NaN;
      },
    },
    {
      key: 'weeks',
      get: function () {
        return this.isValid ? this.values.weeks || 0 : NaN;
      },
    },
    {
      key: 'days',
      get: function () {
        return this.isValid ? this.values.days || 0 : NaN;
      },
    },
    {
      key: 'hours',
      get: function () {
        return this.isValid ? this.values.hours || 0 : NaN;
      },
    },
    {
      key: 'minutes',
      get: function () {
        return this.isValid ? this.values.minutes || 0 : NaN;
      },
    },
    {
      key: 'seconds',
      get: function () {
        return this.isValid ? this.values.seconds || 0 : NaN;
      },
    },
    {
      key: 'milliseconds',
      get: function () {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      },
    },
    {
      key: 'isValid',
      get: function () {
        return null === this.invalid;
      },
    },
    {
      key: 'invalidReason',
      get: function () {
        return this.invalid ? this.invalid.reason : null;
      },
    },
    {
      key: 'invalidExplanation',
      get: function () {
        return this.invalid ? this.invalid.explanation : null;
      },
    },
  ]);
  return e;
})();

function Cn(e) {
  if (ee(e)) return xn.fromMillis(e);
  if (xn.isDuration(e)) return e;
  if ('object' == typeof e) return xn.fromObject(e);
  throw new N('Unknown duration argument ' + e + ' of type ' + typeof e);
}

var Fn = 'Invalid Interval';

function Zn(e, t) {
  return e && e.isValid
    ? t && t.isValid
      ? t < e
        ? An.invalid('end before start', 'The end of an interval must be after its start, but you had start=' + e.toISO() + ' and end=' + t.toISO())
        : null
      : An.invalid('missing or invalid end')
    : An.invalid('missing or invalid start');
}

var An = (function () {
    function e(e) {
      this.s = e.start;
      this.e = e.end;
      this.invalid = e.invalid || null;
      this.isLuxonInterval = true;
    }

    e.invalid = function (t, n) {
      if ((undefined === n && (n = null), !t)) throw new N('need to specify a reason the Interval is invalid');
      var r = t instanceof $e ? t : new $e(t, n);
      if (vt.throwOnInvalid) throw new T(r);
      return new e({
        invalid: r,
      });
    };

    e.fromDateTimes = function (t, n) {
      var r = Wr(t),
        i = Wr(n),
        o = Zn(r, i);
      return null == o
        ? new e({
            start: r,
            end: i,
          })
        : o;
    };

    e.after = function (t, n) {
      var r = Cn(n),
        i = Wr(t);
      return e.fromDateTimes(i, i.plus(r));
    };

    e.before = function (t, n) {
      var r = Cn(n),
        i = Wr(t);
      return e.fromDateTimes(i.minus(r), i);
    };

    e.fromISO = function (t, n) {
      var r = (t || '').split('/', 2),
        i = r[0],
        o = r[1];

      if (i && o) {
        var a, u, s, c;

        try {
          u = (a = Pr.fromISO(i, n)).isValid;
        } catch (o) {
          u = false;
        }

        try {
          c = (s = Pr.fromISO(o, n)).isValid;
        } catch (o) {
          c = false;
        }

        if (u && c) return e.fromDateTimes(a, s);

        if (u) {
          var l = xn.fromISO(o, n);
          if (l.isValid) return e.after(a, l);
        } else if (c) {
          var f = xn.fromISO(i, n);
          if (f.isValid) return e.before(s, f);
        }
      }

      return e.invalid('unparsable', 'the input "' + t + '" can\'t be parsed as ISO 8601');
    };

    e.isInterval = function (e) {
      return e ? e.isLuxonInterval : false;
    };

    var t = e.prototype;

    t.length = function (e) {
      if (undefined === e) e = 'milliseconds';
      return this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN;
    };

    t.count = function (e) {
      if ((undefined === e && (e = 'milliseconds'), !this.isValid)) return NaN;
      var t = this.start.startOf(e),
        n = this.end.startOf(e);
      return Math.floor(n.diff(t, e).get(e)) + 1;
    };

    t.hasSame = function (e) {
      return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e));
    };

    t.isEmpty = function () {
      return this.s.valueOf() === this.e.valueOf();
    };

    t.isAfter = function (e) {
      return !!this.isValid && this.s > e;
    };

    t.isBefore = function (e) {
      return !!this.isValid && this.e <= e;
    };

    t.contains = function (e) {
      return !!this.isValid && this.s <= e && this.e > e;
    };

    t.set = function (t) {
      var n = undefined === t ? {} : t,
        r = n.start,
        i = n.end;
      return this.isValid ? e.fromDateTimes(r || this.s, i || this.e) : this;
    };

    t.splitAt = function (...args) {
      var t = this;
      if (!this.isValid) return [];

      for (
        var o = args
            .map(Wr)
            .filter(function (e) {
              return t.contains(e);
            })
            .sort(),
          a = [],
          u = this.s,
          s = 0;
        u < this.e;

      ) {
        var c = o[s] || this.e,
          l = +c > +this.e ? this.e : c;
        a.push(e.fromDateTimes(u, l));
        u = l;
        s += 1;
      }

      return a;
    };

    t.splitBy = function (t) {
      var n = Cn(t);
      if (!this.isValid || !n.isValid || 0 === n.as('milliseconds')) return [];

      for (var r, i = this.s, o = 1, a = []; i < this.e; ) {
        var u = this.start.plus(
          n.mapUnits(function (e) {
            return e * o;
          })
        );
        r = +u > +this.e ? this.e : u;
        a.push(e.fromDateTimes(i, r));
        i = r;
        o += 1;
      }

      return a;
    };

    t.divideEqually = function (e) {
      return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
    };

    t.overlaps = function (e) {
      return this.e > e.s && this.s < e.e;
    };

    t.abutsStart = function (e) {
      return !!this.isValid && +this.e == +e.s;
    };

    t.abutsEnd = function (e) {
      return !!this.isValid && +e.e == +this.s;
    };

    t.engulfs = function (e) {
      return !!this.isValid && this.s <= e.s && this.e >= e.e;
    };

    t.equals = function (e) {
      return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e);
    };

    t.intersection = function (t) {
      if (!this.isValid) return this;
      var n = this.s > t.s ? this.s : t.s,
        r = this.e < t.e ? this.e : t.e;
      return n >= r ? null : e.fromDateTimes(n, r);
    };

    t.union = function (t) {
      if (!this.isValid) return this;
      var n = this.s < t.s ? this.s : t.s,
        r = this.e > t.e ? this.e : t.e;
      return e.fromDateTimes(n, r);
    };

    e.merge = function (e) {
      var t = e
          .sort(function (e, t) {
            return e.s - t.s;
          })
          .reduce(
            function (e, t) {
              var n = e[0],
                r = e[1];
              return r ? (r.overlaps(t) || r.abutsStart(t) ? [n, r.union(t)] : [n.concat([r]), t]) : [n, t];
            },
            [[], null]
          ),
        n = t[0],
        r = t[1];
      if (r) n.push(r);
      return n;
    };

    e.xor = function (t) {
      for (
        var n,
          r,
          i = null,
          o = 0,
          a = [],
          u = t.map(function (e) {
            return [
              {
                time: e.s,
                type: 's',
              },
              {
                time: e.e,
                type: 'e',
              },
            ];
          }),
          s = w(
            (n = Array.prototype).concat.apply(n, u).sort(function (e, t) {
              return e.time - t.time;
            })
          );
        !(r = s()).done;

      ) {
        var c = r.value;
        if (1 === (o += 's' === c.type ? 1 : -1)) i = c.time;
        else {
          if (i && +i != +c.time) a.push(e.fromDateTimes(i, c.time));
          i = null;
        }
      }

      return e.merge(a);
    };

    t.difference = function (...args) {
      return e
        .xor([this].concat(args))
        .map(function (e) {
          return t.intersection(e);
        })
        .filter(function (e) {
          return e && !e.isEmpty();
        });
    };

    t.toString = function () {
      return this.isValid ? '[' + this.s.toISO() + ' \u2013 ' + this.e.toISO() + ')' : Fn;
    };

    t.toISO = function (e) {
      return this.isValid ? this.s.toISO(e) + '/' + this.e.toISO(e) : Fn;
    };

    t.toISODate = function () {
      return this.isValid ? this.s.toISODate() + '/' + this.e.toISODate() : Fn;
    };

    t.toISOTime = function (e) {
      return this.isValid ? this.s.toISOTime(e) + '/' + this.e.toISOTime(e) : Fn;
    };

    t.toFormat = function (e, t) {
      var n = (undefined === t ? {} : t).separator,
        r = undefined === n ? ' \u2013 ' : n;
      return this.isValid ? '' + this.s.toFormat(e) + r + this.e.toFormat(e) : Fn;
    };

    t.toDuration = function (e, t) {
      return this.isValid ? this.e.diff(this.s, e, t) : xn.invalid(this.invalidReason);
    };

    t.mapEndpoints = function (t) {
      return e.fromDateTimes(t(this.s), t(this.e));
    };

    c(e, [
      {
        key: 'start',
        get: function () {
          return this.isValid ? this.s : null;
        },
      },
      {
        key: 'end',
        get: function () {
          return this.isValid ? this.e : null;
        },
      },
      {
        key: 'isValid',
        get: function () {
          return null === this.invalidReason;
        },
      },
      {
        key: 'invalidReason',
        get: function () {
          return this.invalid ? this.invalid.reason : null;
        },
      },
      {
        key: 'invalidExplanation',
        get: function () {
          return this.invalid ? this.invalid.explanation : null;
        },
      },
    ]);
    return e;
  })(),
  zn = (function () {
    function e() {}

    e.hasDST = function (e) {
      if (undefined === e) e = vt.defaultZone;
      var t = Pr.now().setZone(e).set({
        month: 12,
      });
      return (
        !e.universal &&
        t.offset !==
          t.set({
            month: 6,
          }).offset
      );
    };

    e.isValidIANAZone = function (e) {
      return ot.isValidSpecifier(e) && ot.isValidZone(e);
    };

    e.normalizeZone = function (e) {
      return ct(e, vt.defaultZone);
    };

    e.months = function (e, t) {
      if (undefined === e) e = 'long';
      var n = undefined === t ? {} : t,
        r = n.locale,
        i = undefined === r ? null : r,
        o = n.numberingSystem,
        a = undefined === o ? null : o,
        u = n.locObj,
        s = undefined === u ? null : u,
        c = n.outputCalendar,
        l = undefined === c ? 'gregory' : c;
      return (s || Ct.create(i, a, l)).months(e);
    };

    e.monthsFormat = function (e, t) {
      if (undefined === e) e = 'long';
      var n = undefined === t ? {} : t,
        r = n.locale,
        i = undefined === r ? null : r,
        o = n.numberingSystem,
        a = undefined === o ? null : o,
        u = n.locObj,
        s = undefined === u ? null : u,
        c = n.outputCalendar,
        l = undefined === c ? 'gregory' : c;
      return (s || Ct.create(i, a, l)).months(e, true);
    };

    e.weekdays = function (e, t) {
      if (undefined === e) e = 'long';
      var n = undefined === t ? {} : t,
        r = n.locale,
        i = undefined === r ? null : r,
        o = n.numberingSystem,
        a = undefined === o ? null : o,
        u = n.locObj;
      return ((undefined === u ? null : u) || Ct.create(i, a, null)).weekdays(e);
    };

    e.weekdaysFormat = function (e, t) {
      if (undefined === e) e = 'long';
      var n = undefined === t ? {} : t,
        r = n.locale,
        i = undefined === r ? null : r,
        o = n.numberingSystem,
        a = undefined === o ? null : o,
        u = n.locObj;
      return ((undefined === u ? null : u) || Ct.create(i, a, null)).weekdays(e, true);
    };

    e.meridiems = function (e) {
      var t = (undefined === e ? {} : e).locale,
        n = undefined === t ? null : t;
      return Ct.create(n).meridiems();
    };

    e.eras = function (e, t) {
      if (undefined === e) e = 'short';
      var n = (undefined === t ? {} : t).locale,
        r = undefined === n ? null : n;
      return Ct.create(r, null, 'gregory').eras(e);
    };

    e.features = function () {
      var e = false,
        t = false,
        n = false,
        r = false;

      if (ne()) {
        e = true;
        t = re();
        r = ie();

        try {
          n =
            'America/New_York' ===
            new Intl.DateTimeFormat('en', {
              timeZone: 'America/New_York',
            }).resolvedOptions().timeZone;
        } catch (e) {
          n = false;
        }
      }

      return {
        intl: e,
        intlTokens: t,
        zones: n,
        relative: r,
      };
    };

    return e;
  })();

function _n(e, t) {
  var n = function (e) {
      return e
        .toUTC(0, {
          keepLocalTime: true,
        })
        .startOf('day')
        .valueOf();
    },
    r = n(t) - n(e);

  return Math.floor(xn.fromMillis(r).as('days'));
}

function jn(e, t, n) {
  for (
    var r,
      i,
      o = {},
      a = 0,
      u = [
        [
          'years',
          function (e, t) {
            return t.year - e.year;
          },
        ],
        [
          'quarters',
          function (e, t) {
            return t.quarter - e.quarter;
          },
        ],
        [
          'months',
          function (e, t) {
            return t.month - e.month + 12 * (t.year - e.year);
          },
        ],
        [
          'weeks',
          function (e, t) {
            var n = _n(e, t);

            return (n - (n % 7)) / 7;
          },
        ],
        ['days', _n],
      ];
    a < u.length;
    a++
  ) {
    var s = u[a],
      c = s[0],
      l = s[1];

    if (n.indexOf(c) >= 0) {
      var f;
      r = c;
      var d,
        h = l(e, t);

      if ((i = e.plus((((f = {})[c] = h), f))) > t) {
        e = e.plus((((d = {})[c] = h - 1), d));
        h -= 1;
      } else e = i;

      o[c] = h;
    }
  }

  return [e, o, i, r];
}

function qn(e, t, n, r) {
  var i = jn(e, t, n),
    o = i[0],
    a = i[1],
    s = i[2],
    c = i[3],
    l = t - o,
    f = n.filter(function (e) {
      return ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e) >= 0;
    });

  if (0 === f.length) {
    var d;
    if (s < t) s = o.plus((((d = {})[c] = 1), d));
    if (s !== o) a[c] = (a[c] || 0) + l / (s - o);
  }

  var h,
    m = xn.fromObject(module11(a, r));
  return f.length > 0 ? (h = xn.fromMillis(l, r)).shiftTo.apply(h, f).plus(m) : m;
}

var Hn = {
    arab: '[\u0660-\u0669]',
    arabext: '[\u06f0-\u06f9]',
    bali: '[\u1b50-\u1b59]',
    beng: '[\u09e6-\u09ef]',
    deva: '[\u0966-\u096f]',
    fullwide: '[\uff10-\uff19]',
    gujr: '[\u0ae6-\u0aef]',
    hanidec: '[\u3007|\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d]',
    khmr: '[\u17e0-\u17e9]',
    knda: '[\u0ce6-\u0cef]',
    laoo: '[\u0ed0-\u0ed9]',
    limb: '[\u1946-\u194f]',
    mlym: '[\u0d66-\u0d6f]',
    mong: '[\u1810-\u1819]',
    mymr: '[\u1040-\u1049]',
    orya: '[\u0b66-\u0b6f]',
    tamldec: '[\u0be6-\u0bef]',
    telu: '[\u0c66-\u0c6f]',
    thai: '[\u0e50-\u0e59]',
    tibt: '[\u0f20-\u0f29]',
    latn: '\\d',
  },
  Un = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  Rn = Hn.hanidec.replace(/[\[|\]]/g, '').split('');

function Pn(e) {
  var t = parseInt(e, 10);

  if (isNaN(t)) {
    t = '';

    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (-1 !== e[n].search(Hn.hanidec)) t += Rn.indexOf(e[n]);
      else
        for (var i in Un) {
          var o = Un[i],
            a = o[0],
            u = o[1];
          if (r >= a && r <= u) t += r - a;
        }
    }

    return parseInt(t, 10);
  }

  return t;
}

function Wn(e, t) {
  var n = e.numberingSystem;
  if (undefined === t) t = '';
  return new RegExp('' + Hn[n || 'latn'] + t);
}

var Jn = 'missing Intl.DateTimeFormat.formatToParts support';

function Yn(e, t) {
  if (undefined === t)
    t = function (e) {
      return e;
    };
  return {
    regex: e,
    deser: function (e) {
      var n = e[0];
      return t(Pn(n));
    },
  };
}

String.fromCharCode(160);
var Gn = '( |\xa0)',
  $n = new RegExp(Gn, 'g');

function Bn(e) {
  return e.replace(/\./g, '\\.?').replace($n, Gn);
}

function Qn(e) {
  return e.replace(/\./g, '').replace($n, ' ').toLowerCase();
}

function Kn(e, t) {
  return null === e
    ? null
    : {
        regex: RegExp(e.map(Bn).join('|')),
        deser: function (n) {
          var r = n[0];
          return (
            e.findIndex(function (e) {
              return Qn(r) === Qn(e);
            }) + t
          );
        },
      };
}

function Xn(e, t) {
  return {
    regex: e,
    deser: function (e) {
      return ke(e[1], e[2]);
    },
    groups: t,
  };
}

function er(e) {
  return {
    regex: e,
    deser: function (e) {
      return e[0];
    },
  };
}

var tr = {
  year: {
    '2-digit': 'yy',
    numeric: 'yyyyy',
  },
  month: {
    numeric: 'M',
    '2-digit': 'MM',
    short: 'MMM',
    long: 'MMMM',
  },
  day: {
    numeric: 'd',
    '2-digit': 'dd',
  },
  weekday: {
    short: 'EEE',
    long: 'EEEE',
  },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: {
    numeric: 'h',
    '2-digit': 'hh',
  },
  minute: {
    numeric: 'm',
    '2-digit': 'mm',
  },
  second: {
    numeric: 's',
    '2-digit': 'ss',
  },
};

function nr(e, t, n) {
  var r = e.type,
    i = e.value;
  if ('literal' === r)
    return {
      literal: true,
      val: i,
    };
  var o = n[r],
    a = tr[r];
  if ('object' == typeof a) a = a[o];
  return a
    ? {
        literal: false,
        val: a,
      }
    : undefined;
}

function rr(e) {
  return [
    '^' +
      e
        .map(function (e) {
          return e.regex;
        })
        .reduce(function (e, t) {
          return e + '(' + t.source + ')';
        }, '') +
      '$',
    e,
  ];
}

function ir(e, t, n) {
  var r = e.match(t);

  if (r) {
    var i = {},
      o = 1;

    for (var a in n)
      if (ue(n, a)) {
        var u = n[a],
          s = u.groups ? u.groups + 1 : 1;
        if (!u.literal && u.token) i[u.token.val[0]] = u.deser(r.slice(o, o + s));
        o += s;
      }

    return [r, i];
  }

  return [r, {}];
}

function or(e) {
  var t,
    n = function (e) {
      switch (e) {
        case 'S':
          return 'millisecond';

        case 's':
          return 'second';

        case 'm':
          return 'minute';

        case 'h':
        case 'H':
          return 'hour';

        case 'd':
          return 'day';

        case 'o':
          return 'ordinal';

        case 'L':
        case 'M':
          return 'month';

        case 'y':
          return 'year';

        case 'E':
        case 'c':
          return 'weekday';

        case 'W':
          return 'weekNumber';

        case 'k':
          return 'weekYear';

        case 'q':
          return 'quarter';

        default:
          return null;
      }
    };

  t = X(e.Z) ? (X(e.z) ? null : ot.create(e.z)) : new ut(e.Z);
  if (!X(e.q)) e.M = 3 * (e.q - 1) + 1;
  if (!X(e.h)) e.h < 12 && 1 === e.a ? (e.h += 12) : 12 === e.h && 0 === e.a && (e.h = 0);
  if (0 === e.G && e.y) e.y = -e.y;
  if (!X(e.u)) e.S = fe(e.u);
  return [
    Object.keys(e).reduce(function (t, r) {
      var i = n(r);
      if (i) t[i] = e[r];
      return t;
    }, {}),
    t,
  ];
}

var ar = null;

function ur(e, t) {
  if (e.literal) return e;
  var n = Ge.macroTokenToFormatOpts(e.val);
  if (!n) return e;
  var r = Ge.create(t, n)
    .formatDateTimeParts((ar || (ar = Pr.fromMillis(1555555555555)), ar))
    .map(function (e) {
      return nr(e, 0, n);
    });
  return r.includes(undefined) ? e : r;
}

function sr(e, t) {
  var n;
  return (n = Array.prototype).concat.apply(
    n,
    e.map(function (e) {
      return ur(e, t);
    })
  );
}

function cr(e, t, n) {
  var r = sr(Ge.parseFormat(n), e),
    i = r.map(function (t) {
      n = t;
      i = Wn((r = e));
      o = Wn(r, '{2}');
      a = Wn(r, '{3}');
      u = Wn(r, '{4}');
      s = Wn(r, '{6}');
      c = Wn(r, '{1,2}');
      l = Wn(r, '{1,3}');
      f = Wn(r, '{1,6}');
      d = Wn(r, '{1,9}');
      h = Wn(r, '{2,4}');
      m = Wn(r, '{4,6}');

      y = function (e) {
        return {
          regex: RegExp(((t = e.val), t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'))),
          deser: function (e) {
            return e[0];
          },
          literal: true,
        };
        var t;
      };

      (v = (function (e) {
        if (n.literal) return y(e);

        switch (e.val) {
          case 'G':
            return Kn(r.eras('short', false), 0);

          case 'GG':
            return Kn(r.eras('long', false), 0);

          case 'y':
            return Yn(f);

          case 'yy':
            return Yn(h, ge);

          case 'yyyy':
            return Yn(u);

          case 'yyyyy':
            return Yn(m);

          case 'yyyyyy':
            return Yn(s);

          case 'M':
            return Yn(c);

          case 'MM':
            return Yn(o);

          case 'MMM':
            return Kn(r.months('short', true, false), 1);

          case 'MMMM':
            return Kn(r.months('long', true, false), 1);

          case 'L':
            return Yn(c);

          case 'LL':
            return Yn(o);

          case 'LLL':
            return Kn(r.months('short', false, false), 1);

          case 'LLLL':
            return Kn(r.months('long', false, false), 1);

          case 'd':
            return Yn(c);

          case 'dd':
            return Yn(o);

          case 'o':
            return Yn(l);

          case 'ooo':
            return Yn(a);

          case 'HH':
            return Yn(o);

          case 'H':
            return Yn(c);

          case 'hh':
            return Yn(o);

          case 'h':
            return Yn(c);

          case 'mm':
            return Yn(o);

          case 'm':
          case 'q':
            return Yn(c);

          case 'qq':
            return Yn(o);

          case 's':
            return Yn(c);

          case 'ss':
            return Yn(o);

          case 'S':
            return Yn(l);

          case 'SSS':
            return Yn(a);

          case 'u':
            return er(d);

          case 'a':
            return Kn(r.meridiems(), 0);

          case 'kkkk':
            return Yn(u);

          case 'kk':
            return Yn(h, ge);

          case 'W':
            return Yn(c);

          case 'WW':
            return Yn(o);

          case 'E':
          case 'c':
            return Yn(i);

          case 'EEE':
            return Kn(r.weekdays('short', false, false), 1);

          case 'EEEE':
            return Kn(r.weekdays('long', false, false), 1);

          case 'ccc':
            return Kn(r.weekdays('short', true, false), 1);

          case 'cccc':
            return Kn(r.weekdays('long', true, false), 1);

          case 'Z':
          case 'ZZ':
            return Xn(new RegExp('([+-]' + c.source + ')(?::(' + o.source + '))?'), 2);

          case 'ZZZ':
            return Xn(new RegExp('([+-]' + c.source + ')(' + o.source + ')?'), 2);

          case 'z':
            return er(/[a-z_+-/]{1,256}?/i);

          default:
            return y(e);
        }
      })(n) || {
        invalidReason: Jn,
      }).token = n;
      return v;
      var n, r, i, o, a, u, s, c, l, f, d, h, m, y, v;
    }),
    o = i.find(function (e) {
      return e.invalidReason;
    });
  if (o)
    return {
      input: t,
      tokens: r,
      invalidReason: o.invalidReason,
    };
  var a = rr(i),
    u = a[0],
    s = a[1],
    c = RegExp(u, 'i'),
    l = ir(t, c, s),
    f = l[0],
    d = l[1],
    h = d ? or(d) : [null, null],
    m = h[0],
    y = h[1];
  if (ue(d, 'a') && ue(d, 'H')) throw new O("Can't include meridiem when specifying 24-hour format");
  return {
    input: t,
    tokens: r,
    regex: c,
    rawMatches: f,
    matches: d,
    result: m,
    zone: y,
  };
}

function lr(e, t, n) {
  var r = cr(e, t, n);
  return [r.result, r.zone, r.invalidReason];
}

var fr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  dr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function hr(e, t) {
  return new $e('unit out of range', 'you specified ' + t + ' (of type ' + typeof t + ') as a ' + e + ', which is invalid');
}

function mr(e, t, n) {
  var r = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
  return 0 === r ? 7 : r;
}

function yr(e, t, n) {
  return n + (he(e) ? dr : fr)[t - 1];
}

function vr(e, t) {
  var n = he(e) ? dr : fr,
    r = n.findIndex(function (e) {
      return e < t;
    });
  return {
    month: r + 1,
    day: t - n[r],
  };
}

function pr(e) {
  var t,
    n = e.year,
    r = e.month,
    i = e.day,
    o = yr(n, r, i),
    a = mr(n, r, i),
    s = Math.floor((o - a + 10) / 7);
  if (s < 1) s = pe((t = n - 1));
  else if (s > pe(n)) {
    t = n + 1;
    s = 1;
  } else t = n;
  return module11(
    {
      weekYear: t,
      weekNumber: s,
      weekday: a,
    },
    Oe(e)
  );
}

function gr(e) {
  var t,
    n = e.weekYear,
    r = e.weekNumber,
    i = e.weekday,
    o = mr(n, 1, 4),
    a = me(n),
    s = 7 * r + i - o - 3;
  if (s < 1) s += me((t = n - 1));
  else if (s > a) {
    t = n + 1;
    s -= me(n);
  } else t = n;
  var c = vr(t, s),
    l = c.month,
    f = c.day;
  return module11(
    {
      year: t,
      month: l,
      day: f,
    },
    Oe(e)
  );
}

function wr(e) {
  var t = e.year,
    n = yr(t, e.month, e.day);
  return module11(
    {
      year: t,
      ordinal: n,
    },
    Oe(e)
  );
}

function kr(e) {
  var t = e.year,
    n = vr(t, e.ordinal),
    r = n.month,
    i = n.day;
  return module11(
    {
      year: t,
      month: r,
      day: i,
    },
    Oe(e)
  );
}

function Sr(e) {
  var t = te(e.weekYear),
    n = se(e.weekNumber, 1, pe(e.weekYear)),
    r = se(e.weekday, 1, 7);
  return t ? (n ? !r && hr('weekday', e.weekday) : hr('week', e.week)) : hr('weekYear', e.weekYear);
}

function Tr(e) {
  var t = te(e.year),
    n = se(e.ordinal, 1, me(e.year));
  return t ? !n && hr('ordinal', e.ordinal) : hr('year', e.year);
}

function br(e) {
  var t = te(e.year),
    n = se(e.month, 1, 12),
    r = se(e.day, 1, ye(e.year, e.month));
  return t ? (n ? !r && hr('day', e.day) : hr('month', e.month)) : hr('year', e.year);
}

function Or(e) {
  var t = e.hour,
    n = e.minute,
    r = e.second,
    i = e.millisecond,
    o = se(t, 0, 23) || (24 === t && 0 === n && 0 === r && 0 === i),
    a = se(n, 0, 59),
    u = se(r, 0, 59),
    s = se(i, 0, 999);
  return o ? (a ? (u ? !s && hr('millisecond', i) : hr('second', r)) : hr('minute', n)) : hr('hour', t);
}

function Mr(e) {
  return new $e('unsupported zone', 'the zone "' + e.name + '" is not supported');
}

function Nr(e) {
  if (null === e.weekData) e.weekData = pr(e.c);
  return e.weekData;
}

function Er(e, t) {
  var n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new Pr(
    module11({}, n, t, {
      old: n,
    })
  );
}

function Dr(e, t, n) {
  var r = e - 60 * t * 1e3,
    i = n.offset(r);
  if (t === i) return [r, t];
  r -= 60 * (i - t) * 1e3;
  var o = n.offset(r);
  return i === o ? [r, i] : [e - 60 * i ** o * 1e3, i ** o];
}

function Ir(e, t) {
  var n = new Date((e += 60 * t * 1e3));
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds(),
  };
}

function Vr(e, t, n) {
  return Dr(ve(e), t, n);
}

function Lr(e, t) {
  var n = e.o,
    r = e.c.year + Math.trunc(t.years),
    i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
    o = module11({}, e.c, {
      year: r,
      month: i,
      day: e.c.day ** ye(r, i) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks),
    }),
    a = xn
      .fromObject({
        years: t.years - Math.trunc(t.years),
        quarters: t.quarters - Math.trunc(t.quarters),
        months: t.months - Math.trunc(t.months),
        weeks: t.weeks - Math.trunc(t.weeks),
        days: t.days - Math.trunc(t.days),
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
        milliseconds: t.milliseconds,
      })
      .as('milliseconds'),
    s = Dr(ve(o), n, e.zone),
    c = s[0],
    l = s[1];

  if (0 !== a) {
    c += a;
    l = e.zone.offset(c);
  }

  return {
    ts: c,
    o: l,
  };
}

function xr(e, t, n, r, i) {
  var o = n.setZone,
    a = n.zone;

  if (e && 0 !== Object.keys(e).length) {
    var s = t || a,
      c = Pr.fromObject(
        module11(e, n, {
          zone: s,
          setZone: undefined,
        })
      );
    return o ? c : c.setZone(a);
  }

  return Pr.invalid(new $e('unparsable', 'the input "' + i + '" can\'t be parsed as ' + r));
}

function Cr(e, t, n) {
  if (undefined === n) n = true;
  return e.isValid
    ? Ge.create(Ct.create('en-US'), {
        allowZ: n,
        forceSimple: true,
      }).formatDateTimeFromString(e, t)
    : null;
}

function Fr(e, t) {
  var n = t.suppressSeconds,
    r = undefined !== n && n,
    i = t.suppressMilliseconds,
    o = undefined !== i && i,
    a = t.includeOffset,
    u = t.includePrefix,
    s = undefined !== u && u,
    c = t.includeZone,
    l = undefined !== c && c,
    f = t.spaceZone,
    d = undefined !== f && f,
    h = t.format,
    m = undefined === h ? 'extended' : h,
    y = 'basic' === m ? 'HHmm' : 'HH:mm';

  if (!(r && 0 === e.second && 0 === e.millisecond)) {
    y += 'basic' === m ? 'ss' : ':ss';
    if (!(o && 0 === e.millisecond)) y += '.SSS';
  }

  if ((l || a) && d) y += ' ';
  if (l) y += 'z';
  else if (a) y += 'basic' === m ? 'ZZZ' : 'ZZ';
  var v = Cr(e, y);
  if (s) v = 'T' + v;
  return v;
}

var Zr = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  Ar = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  zr = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  _r = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
  jr = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'],
  qr = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

function Hr(e) {
  var t = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[e.toLowerCase()];
  if (!t) throw new M(e);
  return t;
}

function Ur(e, t) {
  for (var n, r = w(_r); !(n = r()).done; ) {
    var i = n.value;
    if (X(e[i])) e[i] = Zr[i];
  }

  var o = br(e) || Or(e);
  if (o) return Pr.invalid(o);
  var a = vt.now(),
    u = Vr(e, t.offset(a), t),
    s = u[0],
    c = u[1];
  return new Pr({
    ts: s,
    zone: t,
    o: c,
  });
}

function Rr(e, t, n) {
  var r = !!X(n.round) || n.round,
    i = function (e, i) {
      e = de(e, r || n.calendary ? 0 : 2, true);
      return t.loc.clone(n).relFormatter(n).format(e, i);
    },
    o = function (r) {
      return n.calendary ? (t.hasSame(e, r) ? 0 : t.startOf(r).diff(e.startOf(r), r).get(r)) : t.diff(e, r).get(r);
    };

  if (n.unit) return i(o(n.unit), n.unit);

  for (var a, u = w(n.units); !(a = u()).done; ) {
    var s = a.value,
      c = o(s);
    if (Math.abs(c) >= 1) return i(c, s);
  }

  return i(e > t ? -0 : 0, n.units[n.units.length - 1]);
}

var Pr = (function () {
  function e(e) {
    var t = e.zone || vt.defaultZone,
      n = e.invalid || (Number.isNaN(e.ts) ? new $e('invalid input') : null) || (t.isValid ? null : Mr(t));
    this.ts = X(e.ts) ? vt.now() : e.ts;
    var r = null,
      i = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
        var o = [e.old.c, e.old.o];
        r = o[0];
        i = o[1];
      } else {
        var a = t.offset(this.ts);
        r = Ir(this.ts, a);
        r = (n = Number.isNaN(r.year) ? new $e('invalid input') : null) ? null : r;
        i = n ? null : a;
      }
    this._zone = t;
    this.loc = e.loc || Ct.create();
    this.invalid = n;
    this.weekData = null;
    this.c = r;
    this.o = i;
    this.isLuxonDateTime = true;
  }

  e.now = function () {
    return new e({});
  };

  e.local = function (t, n, r, i, o, a, u) {
    return X(t)
      ? e.now()
      : Ur(
          {
            year: t,
            month: n,
            day: r,
            hour: i,
            minute: o,
            second: a,
            millisecond: u,
          },
          vt.defaultZone
        );
  };

  e.utc = function (t, n, r, i, o, a, u) {
    return X(t)
      ? new e({
          ts: vt.now(),
          zone: ut.utcInstance,
        })
      : Ur(
          {
            year: t,
            month: n,
            day: r,
            hour: i,
            minute: o,
            second: a,
            millisecond: u,
          },
          ut.utcInstance
        );
  };

  e.fromJSDate = function (t, n) {
    if (undefined === n) n = {};
    var r = t,
      i = '[object Date]' === Object.prototype.toString.call(r) ? t.valueOf() : NaN;
    if (Number.isNaN(i)) return e.invalid('invalid input');
    var o = ct(n.zone, vt.defaultZone);
    return o.isValid
      ? new e({
          ts: i,
          zone: o,
          loc: Ct.fromObject(n),
        })
      : e.invalid(Mr(o));
  };

  e.fromMillis = function (t, n) {
    if ((undefined === n && (n = {}), ee(t)))
      return t < -864e13 || t > 864e13
        ? e.invalid('Timestamp out of range')
        : new e({
            ts: t,
            zone: ct(n.zone, vt.defaultZone),
            loc: Ct.fromObject(n),
          });
    throw new N('fromMillis requires a numerical input, but received a ' + typeof t + ' with value ' + t);
  };

  e.fromSeconds = function (t, n) {
    if ((undefined === n && (n = {}), ee(t)))
      return new e({
        ts: 1e3 * t,
        zone: ct(n.zone, vt.defaultZone),
        loc: Ct.fromObject(n),
      });
    throw new N('fromSeconds requires a numerical input');
  };

  e.fromObject = function (t) {
    var n = ct(t.zone, vt.defaultZone);
    if (!n.isValid) return e.invalid(Mr(n));
    var r = vt.now(),
      i = n.offset(r),
      o = Te(t, Hr, ['zone', 'locale', 'outputCalendar', 'numberingSystem']),
      a = !X(o.ordinal),
      u = !X(o.year),
      s = !X(o.month) || !X(o.day),
      c = u || s,
      l = o.weekYear || o.weekNumber,
      f = Ct.fromObject(t);
    if ((c || a) && l) throw new O("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (s && a) throw new O("Can't mix ordinal dates with month/day");
    var d,
      h,
      m = l || (o.weekday && !c),
      y = Ir(r, i);

    if (m) {
      d = jr;
      h = Ar;
      y = pr(y);
    } else if (a) {
      d = qr;
      h = zr;
      y = wr(y);
    } else {
      d = _r;
      h = Zr;
    }

    for (var v, p = false, g = w(d); !(v = g()).done; ) {
      var k = v.value;
      if (X(o[k])) o[k] = p ? h[k] : y[k];
      else p = true;
    }

    var S = (m ? Sr(o) : a ? Tr(o) : br(o)) || Or(o);
    if (S) return e.invalid(S);
    var T = Vr(m ? gr(o) : a ? kr(o) : o, i, n),
      b = new e({
        ts: T[0],
        zone: n,
        o: T[1],
        loc: f,
      });
    return o.weekday && c && t.weekday !== b.weekday ? e.invalid('mismatched weekday', "you can't specify both a weekday of " + o.weekday + ' and a date of ' + b.toISO()) : b;
  };

  e.fromISO = function (e, t) {
    if (undefined === t) t = {};
    var n = At(e, [fn, yn], [dn, vn], [hn, pn], [mn, gn]);
    return xr(n[0], n[1], t, 'ISO 8601', e);
  };

  e.fromRFC2822 = function (e, t) {
    if (undefined === t) t = {};
    var n = At(on(e), [nn, rn]);
    return xr(n[0], n[1], t, 'RFC 2822', e);
  };

  e.fromHTTP = function (e, t) {
    if (undefined === t) t = {};
    var n = At(e, [an, cn], [un, cn], [sn, ln]);
    return xr(n[0], n[1], t, 'HTTP', t);
  };

  e.fromFormat = function (t, n, r) {
    if ((undefined === r && (r = {}), X(t) || X(n))) throw new N('fromFormat requires an input string and a format');
    var i = r,
      o = i.locale,
      a = undefined === o ? null : o,
      u = i.numberingSystem,
      s = undefined === u ? null : u,
      c = lr(
        Ct.fromOpts({
          locale: a,
          numberingSystem: s,
          defaultToEN: true,
        }),
        t,
        n
      ),
      l = c[0],
      f = c[1],
      d = c[2];
    return d ? e.invalid(d) : xr(l, f, r, 'format ' + n, t);
  };

  e.fromString = function (t, n, r) {
    if (undefined === r) r = {};
    return e.fromFormat(t, n, r);
  };

  e.fromSQL = function (e, t) {
    if (undefined === t) t = {};
    var n = At(e, [kn, Tn], [Sn, bn]);
    return xr(n[0], n[1], t, 'SQL', e);
  };

  e.invalid = function (t, n) {
    if ((undefined === n && (n = null), !t)) throw new N('need to specify a reason the DateTime is invalid');
    var r = t instanceof $e ? t : new $e(t, n);
    if (vt.throwOnInvalid) throw new S(r);
    return new e({
      invalid: r,
    });
  };

  e.isDateTime = function (e) {
    return e ? e.isLuxonDateTime : false;
  };

  var t = e.prototype;

  t.get = function (e) {
    return this[e];
  };

  t.resolvedLocaleOpts = function (e) {
    if (undefined === e) e = {};
    var t = Ge.create(this.loc.clone(e), e).resolvedOptions(this);
    return {
      locale: t.locale,
      numberingSystem: t.numberingSystem,
      outputCalendar: t.calendar,
    };
  };

  t.toUTC = function (e, t) {
    if (undefined === e) e = 0;
    if (undefined === t) t = {};
    return this.setZone(ut.instance(e), t);
  };

  t.toLocal = function () {
    return this.setZone(vt.defaultZone);
  };

  t.setZone = function (t, n) {
    var r = undefined === n ? {} : n,
      i = r.keepLocalTime,
      o = undefined !== i && i,
      a = r.keepCalendarTime,
      u = undefined !== a && a;
    if ((t = ct(t, vt.defaultZone)).equals(this.zone)) return this;

    if (t.isValid) {
      var s = this.ts;

      if (o || u) {
        var c = t.offset(this.ts);
        s = Vr(this.toObject(), c, t)[0];
      }

      return Er(this, {
        ts: s,
        zone: t,
      });
    }

    return e.invalid(Mr(t));
  };

  t.reconfigure = function (e) {
    var t = undefined === e ? {} : e,
      n = t.locale,
      r = t.numberingSystem,
      i = t.outputCalendar;
    return Er(this, {
      loc: this.loc.clone({
        locale: n,
        numberingSystem: r,
        outputCalendar: i,
      }),
    });
  };

  t.setLocale = function (e) {
    return this.reconfigure({
      locale: e,
    });
  };

  t.set = function (e) {
    if (!this.isValid) return this;
    var t,
      n = Te(e, Hr, []),
      r = !X(n.weekYear) || !X(n.weekNumber) || !X(n.weekday),
      i = !X(n.ordinal),
      o = !X(n.year),
      a = !X(n.month) || !X(n.day),
      s = o || a,
      c = n.weekYear || n.weekNumber;
    if ((s || i) && c) throw new O("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (a && i) throw new O("Can't mix ordinal dates with month/day");
    if (r) t = gr(module11(pr(this.c), n));
    else if (X(n.ordinal)) {
      t = module11(this.toObject(), n);
      if (X(n.day)) t.day = ye(t.year, t.month) ** t.day;
    } else t = kr(module11(wr(this.c), n));
    var l = Vr(t, this.o, this.zone);
    return Er(this, {
      ts: l[0],
      o: l[1],
    });
  };

  t.plus = function (e) {
    return this.isValid ? Er(this, Lr(this, Cn(e))) : this;
  };

  t.minus = function (e) {
    return this.isValid ? Er(this, Lr(this, Cn(e).negate())) : this;
  };

  t.startOf = function (e) {
    if (!this.isValid) return this;
    var t = {},
      n = xn.normalizeUnit(e);

    switch (n) {
      case 'years':
        t.month = 1;

      case 'quarters':
      case 'months':
        t.day = 1;

      case 'weeks':
      case 'days':
        t.hour = 0;

      case 'hours':
        t.minute = 0;

      case 'minutes':
        t.second = 0;

      case 'seconds':
        t.millisecond = 0;
    }

    if (('weeks' === n && (t.weekday = 1), 'quarters' === n)) {
      var r = Math.ceil(this.month / 3);
      t.month = 3 * (r - 1) + 1;
    }

    return this.set(t);
  };

  t.endOf = function (e) {
    var t;
    return this.isValid
      ? this.plus(((t = {}), (t[e] = 1), t))
          .startOf(e)
          .minus(1)
      : this;
  };

  t.toFormat = function (e, t) {
    if (undefined === t) t = {};
    return this.isValid ? Ge.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : 'Invalid DateTime';
  };

  t.toLocaleString = function (e) {
    if (undefined === e) e = L;
    return this.isValid ? Ge.create(this.loc.clone(e), e).formatDateTime(this) : 'Invalid DateTime';
  };

  t.toLocaleParts = function (e) {
    if (undefined === e) e = {};
    return this.isValid ? Ge.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  };

  t.toISO = function (e) {
    if (undefined === e) e = {};
    return this.isValid ? this.toISODate(e) + 'T' + this.toISOTime(e) : null;
  };

  t.toISODate = function (e) {
    var t = (undefined === e ? {} : e).format,
      n = 'basic' === (undefined === t ? 'extended' : t) ? 'yyyyMMdd' : 'yyyy-MM-dd';
    if (this.year > 9999) n = '+' + n;
    return Cr(this, n);
  };

  t.toISOWeekDate = function () {
    return Cr(this, "kkkk-'W'WW-c");
  };

  t.toISOTime = function (e) {
    var t = undefined === e ? {} : e,
      n = t.suppressMilliseconds,
      r = undefined !== n && n,
      i = t.suppressSeconds,
      o = undefined !== i && i,
      a = t.includeOffset,
      u = undefined === a || a,
      s = t.includePrefix,
      c = undefined !== s && s,
      l = t.format;
    return Fr(this, {
      suppressSeconds: o,
      suppressMilliseconds: r,
      includeOffset: u,
      includePrefix: c,
      format: undefined === l ? 'extended' : l,
    });
  };

  t.toRFC2822 = function () {
    return Cr(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', false);
  };

  t.toHTTP = function () {
    return Cr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  };

  t.toSQLDate = function () {
    return Cr(this, 'yyyy-MM-dd');
  };

  t.toSQLTime = function (e) {
    var t = undefined === e ? {} : e,
      n = t.includeOffset,
      r = undefined === n || n,
      i = t.includeZone;
    return Fr(this, {
      includeOffset: r,
      includeZone: undefined !== i && i,
      spaceZone: true,
    });
  };

  t.toSQL = function (e) {
    if (undefined === e) e = {};
    return this.isValid ? this.toSQLDate() + ' ' + this.toSQLTime(e) : null;
  };

  t.toString = function () {
    return this.isValid ? this.toISO() : 'Invalid DateTime';
  };

  t.valueOf = function () {
    return this.toMillis();
  };

  t.toMillis = function () {
    return this.isValid ? this.ts : NaN;
  };

  t.toSeconds = function () {
    return this.isValid ? this.ts / 1e3 : NaN;
  };

  t.toJSON = function () {
    return this.toISO();
  };

  t.toBSON = function () {
    return this.toJSDate();
  };

  t.toObject = function (e) {
    if ((undefined === e && (e = {}), !this.isValid)) return {};
    var t = module11({}, this.c);

    if (e.includeConfig) {
      t.outputCalendar = this.outputCalendar;
      t.numberingSystem = this.loc.numberingSystem;
      t.locale = this.loc.locale;
    }

    return t;
  };

  t.toJSDate = function () {
    return new Date(this.isValid ? this.ts : NaN);
  };

  t.diff = function (e, t, n) {
    if ((undefined === t && (t = 'milliseconds'), undefined === n && (n = {}), !this.isValid || !e.isValid))
      return xn.invalid(this.invalid || e.invalid, 'created by diffing an invalid DateTime');
    var r,
      i = module11(
        {
          locale: this.locale,
          numberingSystem: this.numberingSystem,
        },
        n
      ),
      o = ((r = t), Array.isArray(r) ? r : [r]).map(xn.normalizeUnit),
      a = e.valueOf() > this.valueOf(),
      s = qn(a ? this : e, a ? e : this, o, i);
    return a ? s.negate() : s;
  };

  t.diffNow = function (t, n) {
    if (undefined === t) t = 'milliseconds';
    if (undefined === n) n = {};
    return this.diff(e.now(), t, n);
  };

  t.until = function (e) {
    return this.isValid ? An.fromDateTimes(this, e) : this;
  };

  t.hasSame = function (e, t) {
    if (!this.isValid) return false;
    var n = e.valueOf(),
      r = this.setZone(e.zone, {
        keepLocalTime: true,
      });
    return r.startOf(t) <= n && n <= r.endOf(t);
  };

  t.equals = function (e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  };

  t.toRelative = function (t) {
    if ((undefined === t && (t = {}), !this.isValid)) return null;
    var n =
        t.base ||
        e.fromObject({
          zone: this.zone,
        }),
      r = t.padding ? (this < n ? -t.padding : t.padding) : 0,
      i = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
      o = t.unit;

    if (Array.isArray(t.unit)) {
      i = t.unit;
      o = undefined;
    }

    return Rr(
      n,
      this.plus(r),
      module11(t, {
        numeric: 'always',
        units: i,
        unit: o,
      })
    );
  };

  t.toRelativeCalendar = function (t) {
    if (undefined === t) t = {};
    return this.isValid
      ? Rr(
          t.base ||
            e.fromObject({
              zone: this.zone,
            }),
          this,
          module11(t, {
            numeric: 'auto',
            units: ['years', 'months', 'days'],
            calendary: true,
          })
        )
      : null;
  };

  e.min = function (...args) {
    if (!args.every(e.isDateTime)) throw new N('min requires all arguments be DateTimes');
    return oe(
      args,
      function (e) {
        return e.valueOf();
      },
      Math.min
    );
  };

  e.max = function (...args) {
    if (!args.every(e.isDateTime)) throw new N('max requires all arguments be DateTimes');
    return oe(
      args,
      function (e) {
        return e.valueOf();
      },
      Math.max
    );
  };

  e.fromFormatExplain = function (e, t, n) {
    if (undefined === n) n = {};
    var r = n,
      i = r.locale,
      o = undefined === i ? null : i,
      a = r.numberingSystem,
      u = undefined === a ? null : a;
    return cr(
      Ct.fromOpts({
        locale: o,
        numberingSystem: u,
        defaultToEN: true,
      }),
      e,
      t
    );
  };

  e.fromStringExplain = function (t, n, r) {
    if (undefined === r) r = {};
    return e.fromFormatExplain(t, n, r);
  };

  c(
    e,
    [
      {
        key: 'isValid',
        get: function () {
          return null === this.invalid;
        },
      },
      {
        key: 'invalidReason',
        get: function () {
          return this.invalid ? this.invalid.reason : null;
        },
      },
      {
        key: 'invalidExplanation',
        get: function () {
          return this.invalid ? this.invalid.explanation : null;
        },
      },
      {
        key: 'locale',
        get: function () {
          return this.isValid ? this.loc.locale : null;
        },
      },
      {
        key: 'numberingSystem',
        get: function () {
          return this.isValid ? this.loc.numberingSystem : null;
        },
      },
      {
        key: 'outputCalendar',
        get: function () {
          return this.isValid ? this.loc.outputCalendar : null;
        },
      },
      {
        key: 'zone',
        get: function () {
          return this._zone;
        },
      },
      {
        key: 'zoneName',
        get: function () {
          return this.isValid ? this.zone.name : null;
        },
      },
      {
        key: 'year',
        get: function () {
          return this.isValid ? this.c.year : NaN;
        },
      },
      {
        key: 'quarter',
        get: function () {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        },
      },
      {
        key: 'month',
        get: function () {
          return this.isValid ? this.c.month : NaN;
        },
      },
      {
        key: 'day',
        get: function () {
          return this.isValid ? this.c.day : NaN;
        },
      },
      {
        key: 'hour',
        get: function () {
          return this.isValid ? this.c.hour : NaN;
        },
      },
      {
        key: 'minute',
        get: function () {
          return this.isValid ? this.c.minute : NaN;
        },
      },
      {
        key: 'second',
        get: function () {
          return this.isValid ? this.c.second : NaN;
        },
      },
      {
        key: 'millisecond',
        get: function () {
          return this.isValid ? this.c.millisecond : NaN;
        },
      },
      {
        key: 'weekYear',
        get: function () {
          return this.isValid ? Nr(this).weekYear : NaN;
        },
      },
      {
        key: 'weekNumber',
        get: function () {
          return this.isValid ? Nr(this).weekNumber : NaN;
        },
      },
      {
        key: 'weekday',
        get: function () {
          return this.isValid ? Nr(this).weekday : NaN;
        },
      },
      {
        key: 'ordinal',
        get: function () {
          return this.isValid ? wr(this.c).ordinal : NaN;
        },
      },
      {
        key: 'monthShort',
        get: function () {
          return this.isValid
            ? zn.months('short', {
                locObj: this.loc,
              })[this.month - 1]
            : null;
        },
      },
      {
        key: 'monthLong',
        get: function () {
          return this.isValid
            ? zn.months('long', {
                locObj: this.loc,
              })[this.month - 1]
            : null;
        },
      },
      {
        key: 'weekdayShort',
        get: function () {
          return this.isValid
            ? zn.weekdays('short', {
                locObj: this.loc,
              })[this.weekday - 1]
            : null;
        },
      },
      {
        key: 'weekdayLong',
        get: function () {
          return this.isValid
            ? zn.weekdays('long', {
                locObj: this.loc,
              })[this.weekday - 1]
            : null;
        },
      },
      {
        key: 'offset',
        get: function () {
          return this.isValid ? +this.o : NaN;
        },
      },
      {
        key: 'offsetNameShort',
        get: function () {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
                format: 'short',
                locale: this.locale,
              })
            : null;
        },
      },
      {
        key: 'offsetNameLong',
        get: function () {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
                format: 'long',
                locale: this.locale,
              })
            : null;
        },
      },
      {
        key: 'isOffsetFixed',
        get: function () {
          return this.isValid ? this.zone.universal : null;
        },
      },
      {
        key: 'isInDST',
        get: function () {
          return (
            !this.isOffsetFixed &&
            (this.offset >
              this.set({
                month: 1,
              }).offset ||
              this.offset >
                this.set({
                  month: 5,
                }).offset)
          );
        },
      },
      {
        key: 'isInLeapYear',
        get: function () {
          return he(this.year);
        },
      },
      {
        key: 'daysInMonth',
        get: function () {
          return ye(this.year, this.month);
        },
      },
      {
        key: 'daysInYear',
        get: function () {
          return this.isValid ? me(this.year) : NaN;
        },
      },
      {
        key: 'weeksInWeekYear',
        get: function () {
          return this.isValid ? pe(this.weekYear) : NaN;
        },
      },
    ],
    [
      {
        key: 'DATE_SHORT',
        get: function () {
          return L;
        },
      },
      {
        key: 'DATE_MED',
        get: function () {
          return x;
        },
      },
      {
        key: 'DATE_MED_WITH_WEEKDAY',
        get: function () {
          return C;
        },
      },
      {
        key: 'DATE_FULL',
        get: function () {
          return F;
        },
      },
      {
        key: 'DATE_HUGE',
        get: function () {
          return Z;
        },
      },
      {
        key: 'TIME_SIMPLE',
        get: function () {
          return A;
        },
      },
      {
        key: 'TIME_WITH_SECONDS',
        get: function () {
          return z;
        },
      },
      {
        key: 'TIME_WITH_SHORT_OFFSET',
        get: function () {
          return _;
        },
      },
      {
        key: 'TIME_WITH_LONG_OFFSET',
        get: function () {
          return j;
        },
      },
      {
        key: 'TIME_24_SIMPLE',
        get: function () {
          return q;
        },
      },
      {
        key: 'TIME_24_WITH_SECONDS',
        get: function () {
          return H;
        },
      },
      {
        key: 'TIME_24_WITH_SHORT_OFFSET',
        get: function () {
          return U;
        },
      },
      {
        key: 'TIME_24_WITH_LONG_OFFSET',
        get: function () {
          return R;
        },
      },
      {
        key: 'DATETIME_SHORT',
        get: function () {
          return P;
        },
      },
      {
        key: 'DATETIME_SHORT_WITH_SECONDS',
        get: function () {
          return W;
        },
      },
      {
        key: 'DATETIME_MED',
        get: function () {
          return J;
        },
      },
      {
        key: 'DATETIME_MED_WITH_SECONDS',
        get: function () {
          return Y;
        },
      },
      {
        key: 'DATETIME_MED_WITH_WEEKDAY',
        get: function () {
          return G;
        },
      },
      {
        key: 'DATETIME_FULL',
        get: function () {
          return $;
        },
      },
      {
        key: 'DATETIME_FULL_WITH_SECONDS',
        get: function () {
          return B;
        },
      },
      {
        key: 'DATETIME_HUGE',
        get: function () {
          return Q;
        },
      },
      {
        key: 'DATETIME_HUGE_WITH_SECONDS',
        get: function () {
          return K;
        },
      },
    ]
  );
  return e;
})();

function Wr(e) {
  if (Pr.isDateTime(e)) return e;
  if (e && e.valueOf && ee(e.valueOf())) return Pr.fromJSDate(e);
  if (e && 'object' == typeof e) return Pr.fromObject(e);
  throw new N('Unknown datetime argument: ' + e + ', of type ' + typeof e);
}

exports.DateTime = Pr;
exports.Duration = xn;
exports.FixedOffsetZone = ut;
exports.IANAZone = ot;
exports.Info = zn;
exports.Interval = An;
exports.InvalidZone = st;
exports.LocalZone = Ke;
exports.Settings = vt;
exports.VERSION = '1.28.0';
exports.Zone = Be;
