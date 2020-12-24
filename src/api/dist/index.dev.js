"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("./request"));

var _vueUuid = require("vue-uuid");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ajaxUrl = '/ajax';
var ajax = {};

function executeProcedure(name, json_paramset, url) {
  var user_token, json_obj_request, json_obj_response, dataset;
  return regeneratorRuntime.async(function executeProcedure$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user_token = '';
          json_obj_request = {
            'id': _vueUuid.uuid.v1(),
            'version': '1.0.0.0',
            'time': (0, _moment["default"])().format('yyyy-MM-DD hh:mm:ss.SSS'),
            'token': user_token,
            'digest': '',
            'type': 'procedure',
            'procedure': {
              'name': name,
              'paramset': json_paramset || {}
            }
          };
          console.log('---------------------------------------------------------------------------------------------------------------------'); //

          _context.next = 5;
          return regeneratorRuntime.awrap((0, _request["default"])({
            url: url || ajaxUrl,
            method: 'post',
            data: json_obj_request
          }));

        case 5:
          json_obj_response = _context.sent;

          if (json_obj_response) {
            _context.next = 8;
            break;
          }

          throw new Error('json_obj_response is null');

        case 8:
          if (json_obj_response.procedure) {
            _context.next = 10;
            break;
          }

          throw new Error('json_obj_response.procedure is null');

        case 10:
          if (json_obj_response.procedure.dataset) {
            _context.next = 12;
            break;
          }

          throw new Error('json_obj_response.procedure.dataset is null');

        case 12:
          if (Array.isArray(json_obj_response.procedure.dataset)) {
            _context.next = 14;
            break;
          }

          throw new Error('json_obj_response.procedure.dataset is not type of array');

        case 14:
          console.log('json_obj_response:', json_obj_response);
          console.log('---------------------------------------------------------------------------------------------------------------------'); //

          dataset = json_obj_response.procedure.dataset;
          return _context.abrupt("return", dataset);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

ajax.p_user_login = function _callee(paramset) {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(executeProcedure('p_user_login', paramset, 'login'));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

ajax.p_task_node_query = function _callee2(paramset) {
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(executeProcedure('p_task_node_query', paramset));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

ajax.p_task_list_query = function _callee3(paramset) {
  return regeneratorRuntime.async(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(executeProcedure('p_task_list_query', paramset));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var _default = ajax;
exports["default"] = _default;