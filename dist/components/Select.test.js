"use strict";

var _Select = _interopRequireDefault(require("./Select"));

var _react = require("@testing-library/react");

require("@testing-library/jest-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Given a new package npm", function () {
  var array = [{
    value: "man",
    text: "Homme"
  }, {
    value: "woman",
    text: "Femme"
  }];
  describe("Testin Select component", function () {
    test("Should render component", function () {
      (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
        id: "idSelect",
        textLabel: "Votre sexe :",
        selectClass: "select-class",
        handleChange: function handleChange() {
          return null;
        },
        optionClass: "class-option",
        arr: array
      }));
      var textLabel = document.getElementById("idSelect");
      expect(textLabel).toBeInTheDocument();
    });
    test("Should show all options", function () {
      (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
        id: "idSelect",
        textLabel: "Votre sexe :",
        selectClass: "select-class",
        handleChange: function handleChange() {
          return null;
        },
        optionClass: "class-option",
        arr: array
      }));

      var firstOption = _react.screen.getAllByText("Homme");

      var secondOption = _react.screen.getAllByText("Femme");

      expect(firstOption).toBeTruthy();
      expect(secondOption).toBeTruthy();
    });
    test("Should call handleChange", function () {
      var mockChange = jest.fn();
      (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
        id: "idSelect",
        textLabel: "Votre sexe :",
        selectClass: "select-class",
        handleChange: mockChange,
        optionClass: "class-option",
        arr: array
      }));
      var select = document.getElementById("idSelect");

      _react.fireEvent.change(select);

      expect(mockChange.mock.calls.length).toBe(1);
    });
  });
});