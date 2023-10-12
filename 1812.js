var n =
  (this && this.__spreadArrays) ||
  function () {
    for (var n = 0, t = 0, u = arguments.length; t < u; t++) n += arguments[t].length;

    var s = Array(n),
      c = 0;

    for (t = 0; t < u; t++) for (var o = arguments[t], l = 0, f = o.length; l < f; l++, c++) s[c] = o[l];

    return s;
  };

var t = {
    equals: '',
    element: '~',
    start: '^',
    end: '$',
    any: '*',
    not: '!',
    hyphen: '|',
  },
  u = new Set(
    n(
      Object.keys(t)
        .map(function (n) {
          return t[n];
        })
        .filter(Boolean),
      [':', '[', ']', ' ', '\\']
    )
  );

function s(n) {
  return n.map(c).join(', ');
}

function c(n) {
  return n.map(o).join('');
}

function o(n) {
  switch (n.type) {
    case 'child':
      return ' > ';

    case 'parent':
      return ' < ';

    case 'sibling':
      return ' ~ ';

    case 'adjacent':
      return ' + ';

    case 'descendant':
      return ' ';

    case 'universal':
      return '*';

    case 'tag':
      return l(n.name);

    case 'pseudo-element':
      return '::' + l(n.name);

    case 'pseudo':
      return null === n.data ? ':' + l(n.name) : 'string' == typeof n.data ? ':' + l(n.name) + '(' + n.data + ')' : ':' + l(n.name) + '(' + s(n.data) + ')';

    case 'attribute':
      return 'exists' === n.action
        ? '[' + l(n.name) + ']'
        : 'id' !== n.name || 'equals' !== n.action || n.ignoreCase
        ? 'class' !== n.name || 'element' !== n.action || n.ignoreCase
          ? '[' + l(n.name) + t[n.action] + "='" + l(n.value) + "'" + (n.ignoreCase ? 'i' : '') + ']'
          : '.' + l(n.value)
        : '#' + l(n.value);
  }
}

function l(n) {
  return n
    .split('')
    .map(function (n) {
      return u.has(n) ? '\\' + n : n;
    })
    .join('');
}

exports.default = s;
