"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      "data-testid": "jest",
      className: selectClass,
      id: id,
      onChange: function onChange(e) {
        return handleChange && handleChange(e);
      },
      children: arr.map(function (_ref2, index) {
        var value = _ref2.value,
            text = _ref2.text;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          "data-testid": "jest-option",
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