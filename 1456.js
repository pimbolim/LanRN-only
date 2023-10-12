var module24 = require('./24'),
  module25 = require('./25'),
  s = (function () {
    function n(t, s) {
      if ((module24.default(this, n), s < 0)) throw new Error('Timestamp nanoseconds out of range: ' + s);
      if (s >= 1e9) throw new Error('Timestamp nanoseconds out of range: ' + s);
      if (t < -62135596800) throw new Error('Timestamp seconds out of range: ' + t);
      if (t >= 253402300800) throw new Error('Timestamp seconds out of range: ' + t);
      this.seconds = t;
      this.nanoseconds = s;
    }

    module25.default(
      n,
      [
        {
          key: 'toDate',
          value: function () {
            return new Date(this.toMillis());
          },
        },
        {
          key: 'toMillis',
          value: function () {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          },
        },
        {
          key: 'isEqual',
          value: function (n) {
            return n.seconds === this.seconds && n.nanoseconds === this.nanoseconds;
          },
        },
        {
          key: 'toString',
          value: function () {
            return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
          },
        },
      ],
      [
        {
          key: 'now',
          value: function () {
            return n.fromMillis(Date.now());
          },
        },
        {
          key: 'fromDate',
          value: function (o) {
            return n.fromMillis(o.getTime());
          },
        },
        {
          key: 'fromMillis',
          value: function (o) {
            var t = Math.floor(o / 1e3);
            return new n(t, 1e6 * (o - 1e3 * t));
          },
        },
      ]
    );
    return n;
  })();

exports.default = s;
