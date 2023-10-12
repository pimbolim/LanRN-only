var React = require('react'),
  ReactNative = require('react-native'),
  module1107 = require('./1107');

exports.useScrollable = function () {
  var c = React.useRef(null),
    t = React.useRef(null),
    u = module1107.useValue(0),
    s = React.useCallback(function (l) {
      var n, o;

      if ((null != (n = null == (o = c.current) ? undefined : o.id) ? n : null) !== l.id) {
        if (c.current) t.current = c.current;
        c.current = l;
      }
    }, []),
    f = React.useCallback(function (l) {
      var o, u;
      if (ReactNative.findNodeHandle(l.current) === (null != (o = null == (u = c.current) ? undefined : u.id) ? o : null)) c.current = t.current;
    }, []),
    v = React.useCallback(function () {
      var l,
        n,
        o,
        t,
        u = null != (l = null == (n = c.current) ? undefined : n.type) ? l : undefined,
        s = null != (o = null == (t = c.current) ? undefined : t.node) ? o : undefined;
      if (u && s)
        switch (u) {
          case 'FlatList':
            s.scrollToOffset({
              animated: false,
              offset: 0,
            });
            break;

          case 'ScrollView':
            s.scrollTo({
              y: 0,
              animated: false,
            });
            break;

          case 'SectionList':
            if (0 === s.props.sections.length) return;
            s.scrollToLocation({
              itemIndex: 0,
              sectionIndex: 0,
              viewPosition: 0,
              viewOffset: 1e3,
              animated: false,
            });
        }
    }, []),
    b = React.useCallback(function () {
      var l,
        n,
        o,
        t,
        u = null != (l = null == (n = c.current) ? undefined : n.type) ? l : undefined,
        s = null != (o = null == (t = c.current) ? undefined : t.node) ? o : undefined;
      if (u && s && s.flashScrollIndicators) s.flashScrollIndicators();
    }, []);
  return {
    scrollableRef: c,
    scrollableContentOffsetY: u,
    setScrollableRef: s,
    removeScrollableRef: f,
    scrollToTop: v,
    flashScrollableIndicators: b,
  };
};
