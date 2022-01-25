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
      value = _ref.value,
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
      value: value,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      children: arr.map(function (_ref2, index) {
        var val = _ref2.val,
            text = _ref2.text;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          className: optionClass,
          value: val,
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
  value: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  optionClass: _propTypes.default.string,
  arr: _propTypes.default.array.isRequired
};
var _default = Select;
exports.default = _default;