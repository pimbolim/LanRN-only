var n =
  (this && this.__importStar) ||
  function (n) {
    if (n && n.__esModule) return n;
    var t = {};
    if (null != n) for (var u in n) Object.hasOwnProperty.call(n, u) && (t[u] = n[u]);
    t.default = n;
    return t;
  };

var React = n(require('react'));

exports.Consumer = function (n) {
  var u = n.children,
    o = n.manager,
    f = React.useRef(undefined),
    l = function () {
      if (!o) throw new Error('No portal manager defined');
    };

  React.useEffect(
    function () {
      l();
      if (!(null === o || undefined === o)) o.update(f.current, u);
    },
    [u, o]
  );
  React.useEffect(function () {
    l();
    f.current = null === o || undefined === o ? undefined : o.mount(u);
    return function () {
      l();
      if (!(null === o || undefined === o)) o.unmount(f.current);
    };
  }, []);
  return null;
};
