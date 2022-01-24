"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Select = _ref => {
  let {
    id,
    textLabel,
    selectClass,
    value,
    handleChange,
    optionClass,
    arr
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "select-menu"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, textLabel), /*#__PURE__*/React.createElement("select", {
    className: selectClass,
    id: id,
    value: value,
    onChange: e => handleChange(e)
  }, arr.map((_ref2, index) => {
    let {
      val,
      text
    } = _ref2;
    return /*#__PURE__*/React.createElement("option", {
      className: optionClass,
      key: "index ".concat(index),
      value: val
    }, text);
  })));
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