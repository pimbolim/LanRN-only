var t =
  (this && this.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var n = {};
    if (null != t) for (var u in t) Object.hasOwnProperty.call(t, u) && (n[u] = t[u]);
    n.default = t;
    return n;
  };

var React = t(require('react'));

exports.useKey = function () {
  var t = React.useRef([]);
  return {
    generateKey: function () {
      for (var n = false, u = '', o = 0; !n && o < 3; ) {
        o++;
        u = 'portalize_' + Math.random().toString(36).substr(2, 16) + '-' + Math.random().toString(36).substr(2, 16) + '-' + Math.random().toString(36).substr(2, 16);
        if (!t.current.includes(u)) n = true;
      }

      if (!n) u = 'portalize_' + Date.now() + '_' + Math.floor(1e3 * Math.random());
      t.current.push(u);
      return u;
    },
    removeKey: function (n) {
      t.current = t.current.filter(function (t) {
        return t !== n;
      });
    },
  };
};
