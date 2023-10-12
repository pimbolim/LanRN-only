var module64 = require('./64'),
  PropTypes = require('prop-types'),
  o = {
    shadowColor: module64,
    shadowOffset: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
  };

module.exports = o;
