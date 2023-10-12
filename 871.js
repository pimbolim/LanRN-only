var module12 = require('./12'),
  React = require('react'),
  o = function (n, u) {
    for (var o = n.locationX, c = n.locationY, f = 0, l = Object.entries(u); f < l.length; f++) {
      var v = l[f],
        s = module12.default(v, 2),
        y = s[0],
        E = s[1],
        h = E.x,
        x = E.y,
        C = E.xEnd,
        _ = E.yEnd;
      if (h < o && o < C && x < c && c < _) return parseInt(y, 10);
    }

    return -1;
  };

exports.useClearByFocusCell = function (n) {
  var t = React.useRef(n),
    c = React.useRef({});
  t.current = n;

  var f = function (n) {
      var u = o(n, c.current);

      if (-1 !== u) {
        var f = t.current,
          l = f.value,
          v = f.setValue,
          s = (l || '').slice(0, u);
        setImmediate(function () {
          return v(s);
        });
      }
    },
    l = function (n) {
      return f(n.nativeEvent);
    };

  return [
    React.useMemo(function () {
      return {
        onTouchStart: l,
      };
    }, []),
    function (n) {
      return function (t) {
        var u = t.nativeEvent.layout,
          o = u.width,
          f = u.height,
          l = u.x,
          v = u.y,
          s = l + o,
          y = v + f;
        c.current['' + n] = {
          x: l,
          xEnd: s,
          y: v,
          yEnd: y,
        };
      };
    },
  ];
};
