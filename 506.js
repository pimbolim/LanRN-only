exports.default = function (t) {
  return function () {
    if (undefined !== arguments[0])
      throw new Error(
        "Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API with React Navigation 5? See https://reactnavigation.org/docs/5.x/upgrading-from-4.x for migration guide."
      );
    return {
      Navigator: t,
      Screen: module507.default,
    };
  };
};

var module507 = require('./507');
