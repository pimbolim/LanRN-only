var n;

exports.getShadowNodeFromRef = function (t) {
  if (undefined === n)
    try {
      n = require('./358').findHostInstance_DEPRECATED;
    } catch (t) {
      n = function (n) {
        return null;
      };
    }
  return n(t)._internalInstanceHandle.stateNode.node;
};
