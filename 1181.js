var React = require('react'),
  module1182 = require('./1182'),
  module1153 = require('./1153');

exports.useBottomSheetModal = function () {
  var s = React.useMemo(function () {
      return module1182.nanoid();
    }, []),
    l = React.useContext(module1153.BottomSheetModalContext),
    u = l.present,
    c = l.dismiss,
    f = l.dismissAll,
    p = l.snapTo,
    C = l.expand,
    b = l.collapse;
  return {
    present: React.useCallback(
      function (n, o) {
        requestAnimationFrame(function () {
          u(s, n, o);
        });
      },
      [u, s]
    ),
    dismiss: React.useCallback(
      function () {
        c(s);
      },
      [c, s]
    ),
    dismissAll: f,
    snapTo: React.useCallback(
      function (n) {
        p(s, n);
      },
      [p, s]
    ),
    expand: React.useCallback(
      function () {
        C(s);
      },
      [C, s]
    ),
    collapse: React.useCallback(
      function () {
        b(s);
      },
      [b, s]
    ),
  };
};
