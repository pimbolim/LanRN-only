var module1012 = require('./1012'),
  module982 = require('./982'),
  module995 = require('./995');

module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new module1012(),
    map: new (module995 || module982)(),
    string: new module1012(),
  };
};
