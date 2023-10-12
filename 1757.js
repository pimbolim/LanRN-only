var module1681 = require('./1681').TYPE.WhiteSpace,
  n = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' ',
  });

module.exports = {
  name: 'WhiteSpace',
  structure: {
    value: String,
  },
  parse: function () {
    this.eat(module1681);
    return n;
  },
  generate: function (t) {
    this.chunk(t.value);
  },
};
