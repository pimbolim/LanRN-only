var React = require('react'),
  ReactNative = require('react-native'),
  module901 = require('./901'),
  module1107 = require('./1107'),
  module1135 = require('./1135');

exports.useScrollableInternal = function (c) {
  var f = React.useRef(0),
    s = module1107.useValue(0),
    b = React.useRef(null),
    v = module1135.useBottomSheetInternal(),
    S = v.scrollableContentOffsetY,
    h = v.setScrollableRef,
    C = v.removeScrollableRef,
    R = React.useMemo(function () {
      return module901.event([
        {
          nativeEvent: {
            contentOffset: {
              y: s,
            },
          },
        },
      ]);
    }, []),
    _ = React.useCallback(function () {
      S.setValue(f.current);
      var n = ReactNative.findNodeHandle(b.current);
      if (n)
        h({
          id: n,
          type: c,
          node: b.current.getNode(),
        });
      else console.warn("Couldn't find the scrollable node handle id!");
      return function () {
        C(b);
      };
    }, []);

  module901.useCode(function () {
    return module901.onChange(s, [
      module901.set(S, s),
      module901.call([s], function (n) {
        f.current = n[0];
      }),
    ]);
  }, []);
  return {
    scrollableRef: b,
    handleScrollEvent: R,
    handleSettingScrollable: _,
  };
};
