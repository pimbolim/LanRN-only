var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, s, u);
        else l[s] = t[s];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module472 = require('./472'),
  module1609 = require('./1609'),
  module474 = require('./474'),
  module1272 = require('./1272');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
  })(t);
}

function z() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var H = function (t, o) {
    return 'catalogueHorizCateg__' + t.descricao;
  },
  P = function (t, o) {
    return 'catalogueCateg__' + t.descricao;
  },
  E = (function (t) {
    module35.default(I, t);

    var module400 = I,
      b = z(),
      E = function () {
        var t,
          o = module34.default(module400);

        if (b) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, n);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function I(t) {
      var n;
      module24.default(this, I);
      (n = E.call(this, t)).state = {
        categories: n.categories,
        selectedCategory: n.selectedCategory,
        innerCategory: n.innerCategory,
      };
      n.categoryPressHandler = n.categoryPressHandler.bind(module39.default(n));
      n.renderHorizontalCategoryItem = n.renderHorizontalCategoryItem.bind(module39.default(n));
      n.renderCatalogueUpperImg = n.renderCatalogueUpperImg.bind(module39.default(n));
      n.renderCategory = n.renderCategory.bind(module39.default(n));
      n.horizontalCategoryPressHandler = n.horizontalCategoryPressHandler.bind(module39.default(n));
      return n;
    }

    module25.default(I, [
      {
        key: 'params',
        get: function () {
          try {
            return this.props.route.params || {};
          } catch (t) {
            return {};
          }
        },
      },
      {
        key: 'selectedCategory',
        get: function () {
          return this.params.selectedCategory || null;
        },
      },
      {
        key: 'categories',
        get: function () {
          return this.params.categories || [];
        },
      },
      {
        key: 'innerCategory',
        get: function () {
          return this.params.innerCategory || null;
        },
      },
      {
        key: 'catalogueTitle',
        get: function () {
          var t;
          return (null == (t = this.params.innerCategory) ? undefined : t.descricao) || '';
        },
      },
      {
        key: 'horizontalCategoryPressHandler',
        value: function (t) {
          var o = this.props.navigation;
          this.params.categoryPressCallBack(t);
          o.goBack();
        },
      },
      {
        key: 'renderHorizontalCategoryItem',
        value: function (t) {
          var o = this,
            n = t.item,
            l = module1609.CStyles(),
            c = this.state.selectedCategory;
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                return o.horizontalCategoryPressHandler(n);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  l.horizontalCategoryCardContainer,
                  c.descricao === n.descricao && {
                    borderBottomColor: module474.Color.black,
                    borderBottomWidth: module474.ms(1),
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: [
                    l.horizontalCategoryCardText,
                    c.descricao === n.descricao && {
                      color: 'black',
                    },
                  ],
                },
                n.descricao.toUpperCase()
              )
            )
          );
        },
      },
      {
        key: 'renderHorizontalCategories',
        value: function () {
          var t = this.state.categories,
            o = module1609.CStyles();
          return React.default.createElement(ReactNative.FlatList, {
            key: 'innerCategFlatList',
            keyExtractor: H,
            horizontal: true,
            style: {
              flexGrow: 0,
            },
            contentContainerStyle: o.horizontalCategoryFlatList,
            showsHorizontalScrollIndicator: false,
            renderItem: this.renderHorizontalCategoryItem,
            data: t,
          });
        },
      },
      {
        key: 'renderCatalogueUpperImg',
        value: function () {
          var t = module1609.CStyles(),
            o = this.state.selectedCategory;
          return o
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: t.categoryImageContainer,
                },
                React.default.createElement(module1272.default, {
                  resizeMode: 'cover',
                  source: {
                    uri: o.imagemsrc,
                  },
                  style: t.categoryImage,
                })
              )
            : React.default.createElement(React.default.Fragment, null);
        },
      },
      {
        key: 'categoryPressHandler',
        value: function (t) {
          var o = this.state,
            n = o.selectedCategory;
          o.categories;
          if (t.items)
            this.setState({
              selectedCategory: n,
              innerCategory: t,
            });
          else
            this.props.navigation.navigate('Products', {
              catalogueLink: t.link,
              catalogueTitle: t.descricao,
            });
        },
      },
      {
        key: 'renderCategory',
        value: function (t) {
          var o = this,
            n = t.item,
            l = module1609.CStyles();
          return React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {
                o.categoryPressHandler(n);
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: l.categoryTextContainer,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    fontFamily: module474.FontFamily.semiBold,
                    fontSize: module474.FontSize.l,
                    color: module474.Color.black,
                  },
                },
                n.descricao.toUpperCase()
              ),
              n.items &&
                React.default.createElement(module472.Icon, {
                  name: 'right',
                  size: module474.ms(22),
                  style: {
                    marginTop: -module474.ms(1),
                  },
                })
            )
          );
        },
      },
      {
        key: 'renderCatalogueCategories',
        value: function () {
          var t = this.state.innerCategory;
          if (t)
            return React.default.createElement(ReactNative.FlatList, {
              key: 'horizontalInnerCategFlatList',
              keyExtractor: P,
              style: {
                flexGrow: 0,
              },
              showsVerticalScrollIndicator: false,
              ListHeaderComponent: this.renderCatalogueUpperImg,
              ListHeaderComponentStyle: {
                marginBottom: module474.ms(10),
              },
              data: t.items,
              renderItem: this.renderCategory,
            });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = module1609.CStyles();
          return React.default.createElement(
            module472.Wrapper,
            {
              style: t.root,
              edges: ['left', 'right'],
            },
            React.default.createElement(module472.Header, {
              back: true,
              title: this.catalogueTitle,
            }),
            this.renderHorizontalCategories(),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                },
              },
              this.renderCatalogueCategories()
            )
          );
        },
      },
    ]);
    return I;
  })(React.Component),
  I = module400.connect(function (t) {
    return {
      language: t.language,
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(E);

exports.default = I;
