var module1669 = require('./1669');

module.exports = function (c) {
  return {
    fromPlainObject: function (t) {
      c(t, {
        enter: function (c) {
          if (c.children && c.children instanceof module1669 == false) c.children = new module1669().fromArray(c.children);
        },
      });
      return t;
    },
    toPlainObject: function (t) {
      c(t, {
        leave: function (c) {
          if (c.children && c.children instanceof module1669) c.children = c.children.toArray();
        },
      });
      return t;
    },
  };
};
