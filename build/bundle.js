/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSpaceXLaunchClient = exports.fetchSpaceXLaunch = exports.fetchAdmins = exports.fetchCurrentUser = exports.fetchUsers = exports.MODIFY_SPACE_X_LAUNCH_DATA = exports.FETCH_ADMINS = exports.FETCH_CURRENT_USER = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = "FETCH_USERS";
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
var FETCH_ADMINS = exports.FETCH_ADMINS = "FETCH_ADMINS";

var MODIFY_SPACE_X_LAUNCH_DATA = exports.MODIFY_SPACE_X_LAUNCH_DATA = "MODIFY_SPACE_X_LAUNCH_DATA";

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/users");

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/current_user");

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get("/admins");

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchSpaceXLaunch = exports.fetchSpaceXLaunch = function fetchSpaceXLaunch() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "?limit=10";
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("xxxxxxxxxxxxxxxxxxxxx");
              console.log(param);
              _context4.next = 4;
              return api.get("/v3/launches" + param);

            case 4:
              res = _context4.sent;

              dispatch({
                type: MODIFY_SPACE_X_LAUNCH_DATA,
                payload: { launch_list: res.data }
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x11, _x12, _x13) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var fetchSpaceXLaunchClient = exports.fetchSpaceXLaunchClient = function fetchSpaceXLaunchClient() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "?limit=10";
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("xxxxxxxxxxxxxxxxxxxxx");
              console.log(param);
              _context5.next = 4;
              return _axios2.default.get("https://api.spacexdata.com/v3/launches" + param);

            case 4:
              res = _context5.sent;

              dispatch({
                type: MODIFY_SPACE_X_LAUNCH_DATA,
                payload: { launch_list: res.data }
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x15, _x16, _x17) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import UsersListPage from "./pages/UsersListPage";


var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AdminsListPage from "./pages/AdminsList";

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }),
  // {
  //   ...UsersListPage,
  //   path: "/users",
  //   exact: true,
  // },
  // {
  //   ...AdminsListPage,
  //   path: "/admins",
  //   exact: true,
  // },
  _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _expressHttpProxy = __webpack_require__(11);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(17);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;

// app.use(
//   "/api",
//   proxy("http://react-ssr-api.herokuapp.com", {
//     proxyReqOptDecorator(opts) {
//       opts.headers["x-forwarded-host"] = "localhost:8080";
//       return opts;
//     },
//   })
// );

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  }).catch(function (err) {
    // res.send(renderer(req, store));
  });
});

app.listen(port, function () {
  console.log("listening on port " + port);
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    { className: "wrapper" },
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
}

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _index.fetchCurrentUser)());
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var auth = _ref.auth;

  return _react2.default.createElement(
    "h2",
    null,
    "SpaceX Launch Programs"
  );
}

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _helpers = __webpack_require__(15);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.changePage = _this.changePage.bind(_this);
    _this.state = {
      limit: 10,
      launch_success: null,
      land_success: null,
      launch_year: null
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var limit = 10;
      var launch_success = null;
      var land_success = null;
      var launch_year = null;
      var result = (0, _helpers.getParamObj)(this.props.location.search);
      var param = "?";
      if (!!result.limit) {
        limit = result.limit;
        param += "limit=" + limit;
      }
      if (!!result.launch_success) {
        launch_success = result.launch_success;
        param += "launch_success=" + launch_success;
      }
      if (!!result.land_success) {
        land_success = result.land_success;
        param += "land_success=" + land_success;
      }
      if (!!result.launch_year) {
        launch_year = result.launch_year;
        param += "launch_year=" + launch_year;
      }

      this.setState({ limit: limit, launch_success: launch_success, launch_year: launch_year, result: result });

      this.props.fetchSpaceXLaunchClient(param);
    }
  }, {
    key: "changePage",
    value: function changePage() {
      this.props.history.push("?s=7");
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          limit = _state.limit,
          launch_success = _state.launch_success,
          launch_year = _state.launch_year,
          result = _state.result;
      var launch_list = this.props.launch_list;

      return _react2.default.createElement(
        "div",
        { className: "pageContent" },
        _react2.default.createElement(
          "div",
          { className: "pageLeft" },
          _react2.default.createElement(
            "div",
            { className: "filter" },
            _react2.default.createElement(
              "h3",
              null,
              "Filters"
            ),
            _react2.default.createElement(
              "h4",
              null,
              "Launch Year"
            ),
            _react2.default.createElement(
              "div",
              { className: "filterRow" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  {
                    className: launch_year == "2006" ? "activeFilterBtn" : "",
                    onClick: this.changePage
                  },
                  "2006"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "2007"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "2008"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "2009"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "2010"
                )
              )
            ),
            _react2.default.createElement(
              "h4",
              null,
              "Successful Launch"
            ),
            _react2.default.createElement(
              "div",
              { className: "filterRow" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "True"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "False"
                )
              )
            ),
            _react2.default.createElement(
              "h4",
              null,
              "Successful Landing"
            ),
            _react2.default.createElement(
              "div",
              { className: "filterRow" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "True"
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "button",
                  null,
                  "False"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "pageRight" },
          _react2.default.createElement(
            "div",
            { className: "itemGrid" },
            launch_list.map(function (mission, index) {
              return _react2.default.createElement(
                "div",
                { key: index, className: "col" },
                _react2.default.createElement(
                  "div",
                  { className: "item" },
                  _react2.default.createElement(
                    "div",
                    { className: "imageWrap" },
                    _react2.default.createElement("img", { src: mission.links.mission_patch_small })
                  ),
                  _react2.default.createElement(
                    "h3",
                    null,
                    mission.mission_name,
                    " #",
                    mission.flight_number
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "data" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Mission Ids : "
                    ),
                    _react2.default.createElement(
                      "ul",
                      null,
                      mission.mission_id.map(function (id, index) {
                        return _react2.default.createElement(
                          "li",
                          { key: id },
                          id
                        );
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "data" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Launch Year : "
                    ),
                    " ",
                    mission.launch_year
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "data" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Successful Launch : "
                    ),
                    " ",
                    mission.launch_success ? "True" : "False"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "data" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Successful Landing : "
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var spaceXLaunch = _ref.spaceXLaunch;
  return {
    launch_list: spaceXLaunch.launch_list
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchSpaceXLaunch: function fetchSpaceXLaunch(param) {
      return dispatch((0, _actions.fetchSpaceXLaunch)(param));
    },
    fetchSpaceXLaunchClient: function fetchSpaceXLaunchClient(param) {
      return dispatch((0, _actions.fetchSpaceXLaunchClient)(param));
    }
  };
};
exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchSpaceXLaunch)());
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getParamObj = exports.getParamObj = function getParamObj(paramString) {
  if (paramString === "") return {};
  var result = {};
  paramString.replace("?", "").split("&").forEach(function (str) {
    var arr = str.split("=");
    result[arr[0]] = !!arr[1] ? arr[1] : null;
  });

  return result;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Oops, route not found"
  );
}

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(19);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(20);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();
  return "\n    <html>\n    <head>\n    " + helmet.title.toString() + "\n    " + helmet.meta.toString() + "\n    </head>\n    <body>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\" />\n    <div id=\"root\">" + content + "</div>\n    <script>\n    window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n    </script>\n    <script src=\"bundle.js\"></script>\n    </body>\n    </html>\n    ";
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(23);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "https://api.spacexdata.com",
    headers: { cookie: req.get("cookie") || "" }
  });

  var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _spaceXLaunchReducer = __webpack_require__(24);

var _spaceXLaunchReducer2 = _interopRequireDefault(_spaceXLaunchReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  spaceXLaunch: _spaceXLaunchReducer2.default
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(4);

var INITIAL_SPACE_X_LAUNCH_STATE = {
  launch_list: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_SPACE_X_LAUNCH_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _index.MODIFY_SPACE_X_LAUNCH_DATA:
      return _extends({}, state, action.payload);
    default:
      return state;
  }
};

/***/ })
/******/ ]);