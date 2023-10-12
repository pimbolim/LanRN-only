module.exports = {
  get BatchedBridge() {
    return require('./18');
  },

  get ExceptionsManager() {
    return require('./93');
  },

  get Platform() {
    return require('./49');
  },

  get RCTEventEmitter() {
    return require('./172');
  },

  get ReactNativeViewConfigRegistry() {
    return require('./173');
  },

  get TextInputState() {
    return require('./174');
  },

  get UIManager() {
    return require('./44');
  },

  get deepDiffer() {
    return require('./192');
  },

  get deepFreezeAndThrowOnMutationInDev() {
    return require('./28');
  },

  get flattenStyle() {
    return require('./81');
  },

  get ReactFiberErrorDialog() {
    return require('./193');
  },
};
