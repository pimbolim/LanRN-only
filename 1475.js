var module24 = require('./24'),
  module25 = require('./25'),
  module1476 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(s, f, l);
        else s[f] = t[f];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('./1476')),
  module1477 = require('./1477');

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var f = (function () {
  function t(o, s, c) {
    module24.default(this, t);
    this._action = o;
    this._icon = s;
    this._remoteInputs = [];
    this._showUserInterface = true;
    this._title = c;
  }

  module25.default(t, [
    {
      key: 'action',
      get: function () {
        return this._action;
      },
    },
    {
      key: 'allowGeneratedReplies',
      get: function () {
        return this._allowGeneratedReplies;
      },
    },
    {
      key: 'icon',
      get: function () {
        return this._icon;
      },
    },
    {
      key: 'remoteInputs',
      get: function () {
        return this._remoteInputs;
      },
    },
    {
      key: 'semanticAction',
      get: function () {
        return this._semanticAction;
      },
    },
    {
      key: 'showUserInterface',
      get: function () {
        return this._showUserInterface;
      },
    },
    {
      key: 'title',
      get: function () {
        return this._title;
      },
    },
    {
      key: 'addRemoteInput',
      value: function (t) {
        if (!(t instanceof module1476.default)) throw new Error("AndroidAction:addRemoteInput expects an 'RemoteInput' but got type " + typeof t);

        this._remoteInputs.push(t);

        return this;
      },
    },
    {
      key: 'setAllowGenerateReplies',
      value: function (t) {
        this._allowGeneratedReplies = t;
        return this;
      },
    },
    {
      key: 'setSemanticAction',
      value: function (t) {
        if (!Object.values(module1477.SemanticAction).includes(t)) throw new Error('AndroidAction:setSemanticAction Invalid Semantic Action: ' + t);
        this._semanticAction = t;
        return this;
      },
    },
    {
      key: 'setShowUserInterface',
      value: function (t) {
        this._showUserInterface = t;
        return this;
      },
    },
    {
      key: 'build',
      value: function () {
        if (!this._action) throw new Error('AndroidAction: Missing required `action` property');
        if (!this._icon) throw new Error('AndroidAction: Missing required `icon` property');
        if (!this._title) throw new Error('AndroidAction: Missing required `title` property');
        return {
          action: this._action,
          allowGeneratedReplies: this._allowGeneratedReplies,
          icon: this._icon,
          remoteInputs: this._remoteInputs.map(function (t) {
            return t.build();
          }),
          semanticAction: this._semanticAction,
          showUserInterface: this._showUserInterface,
          title: this._title,
        };
      },
    },
  ]);
  return t;
})();

exports.default = f;

exports.fromNativeAndroidAction = function (t) {
  var n = new f(t.action, t.icon, t.title);
  if (t.allowGeneratedReplies) n.setAllowGenerateReplies(t.allowGeneratedReplies);
  if (t.remoteInputs)
    t.remoteInputs.forEach(function (t) {
      n.addRemoteInput(module1476.fromNativeAndroidRemoteInput(t));
    });
  if (t.semanticAction) n.setSemanticAction(t.semanticAction);
  if (t.showUserInterface) n.setShowUserInterface(t.showUserInterface);
  return n;
};
