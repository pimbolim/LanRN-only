var PropTypes = require('prop-types'),
  module73 = require('./73'),
  n = {
    transform: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          perspective: PropTypes.number,
        }),
        PropTypes.shape({
          rotate: PropTypes.string,
        }),
        PropTypes.shape({
          rotateX: PropTypes.string,
        }),
        PropTypes.shape({
          rotateY: PropTypes.string,
        }),
        PropTypes.shape({
          rotateZ: PropTypes.string,
        }),
        PropTypes.shape({
          scale: PropTypes.number,
        }),
        PropTypes.shape({
          scaleX: PropTypes.number,
        }),
        PropTypes.shape({
          scaleY: PropTypes.number,
        }),
        PropTypes.shape({
          translateX: PropTypes.number,
        }),
        PropTypes.shape({
          translateY: PropTypes.number,
        }),
        PropTypes.shape({
          skewX: PropTypes.string,
        }),
        PropTypes.shape({
          skewY: PropTypes.string,
        }),
      ])
    ),
    transformMatrix: function (t, s, n) {
      if (t[s]) return new Error('The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.');
    },
    decomposedMatrix: function (t, s, n) {
      if (t[s]) return new Error('The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.');
    },
    scaleX: module73(PropTypes.number, 'Use the transform prop instead.'),
    scaleY: module73(PropTypes.number, 'Use the transform prop instead.'),
    rotation: module73(PropTypes.number, 'Use the transform prop instead.'),
    translateX: module73(PropTypes.number, 'Use the transform prop instead.'),
    translateY: module73(PropTypes.number, 'Use the transform prop instead.'),
  };

module.exports = n;
