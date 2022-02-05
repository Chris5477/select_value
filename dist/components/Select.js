"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Select = function Select(_ref) {
  var id = _ref.id,
      textLabel = _ref.textLabel,
      selectClass = _ref.selectClass,
      handleChange = _ref.handleChange,
      optionClass = _ref.optionClass,
      arr = _ref.arr;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      children: textLabel
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
      className: selectClass,
      id: id,
      value: "",
      onChange: function onChange(e) {
        return handleChange && handleChange(e);
      },
      children: arr.map(function (_ref2, index) {
        var value = _ref2.value,
            text = _ref2.text;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          className: optionClass,
          value: value,
          children: text
        }, "index ".concat(index));
      })
    })]
  });
};

Select.propTypes = {
  id: _propTypes.default.string,
  textLabel: _propTypes.default.string,
  selectClass: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  optionClass: _propTypes.default.string,
  arr: _propTypes.default.array.isRequired
};
var _default = Select;
exports.default = _default;