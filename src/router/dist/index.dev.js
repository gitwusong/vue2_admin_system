"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _menu = require("@/router/menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routerPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return routerPush.call(this, location)["catch"](function (error) {
    return error;
  });
};

var globalRouter = [{
  path: '/login',
  name: 'login',
  components: {
    globalView: function globalView() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/common/login'));
      });
    }
  },
  meta: {
    name: '登录',
    icon: '',
    icon_active: '',
    auth: false,
    menuId: '1',
    parentId: '0'
  }
}, {
  path: '/',
  redirect: '/home',
  meta: {},
  name: 'home'
}];

var _loadView = function _loadView(view) {
  return function (resolve) {
    return require(["@/views/modules".concat(view, "/index.vue")], resolve);
  };
};

var Header = function Header(resolve) {
  return require(['@/views/common/header.vue'], resolve);
};

function asyncRouters() {
  var menuList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var routerAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (menuList && Array.isArray(menuList)) {
    for (var i = 0; i < menuList.length; i++) {
      if (menuList[i].list && menuList[i].list.length) {
        routerAll.concat(asyncRouters(menuList[i].list, "".concat(baseUrl + menuList[i].url, "/"), routerAll));
      } else {
        routerAll.push({
          path: "/".concat(menuList[i].url),
          name: menuList[i].url,
          components: {
            headerView: Header,
            globalView: _loadView(baseUrl + menuList[i].url)
          },
          meta: {
            name: menuList[i].name,
            icon: menuList[i].icon,
            icon_active: menuList[i].icon_active,
            auth: menuList[i].auth,
            menuId: menuList[i].menuId,
            parentId: menuList[i].parentId
          }
        });
      }
    }

    return routerAll;
  }
}

var vueRouter = new _vueRouter["default"]({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: asyncRouters(_menu.menuList, '/', globalRouter)
});
vueRouter.beforeEach(function (to, from, next) {
  document.title = to.meta.name;
  var token = sessionStorage.getItem('robotUserName');

  if (token) {
    next();
  } else {
    to.path !== '/login' ? next('/login') : next();
  }
});
var _default = vueRouter;
exports["default"] = _default;