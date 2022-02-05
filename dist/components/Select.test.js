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
    beforeEach(function () {
      return (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, {
        id: "idSelect",
        textLabel: "Votre sexe :",
        selectClass: "select-class",
        optionClass: "class-option",
        arr: array
      }));
    });
    test("Should render component", function () {
      var textLabel = document.getElementById("idSelect");
      expect(textLabel).toBeInTheDocument();
    });
    test("Should show all options", function () {
      var firstOption = _react.screen.getAllByText("Homme");

      var secondOption = _react.screen.getAllByText("Femme");

      expect(firstOption).toBeTruthy();
      expect(secondOption).toBeTruthy();
    });
    test("Should change value of select", function () {
      var select = document.getElementById("idSelect");
      expect(select.value).toBe("man");

      _react.fireEvent.change(select, {
        target: {
          value: "woman"
        }
      });

      expect(select.value).toBe("woman");
    });
  });
});