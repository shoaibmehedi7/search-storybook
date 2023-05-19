"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lab = require("@mui/lab");
var _material = require("@mui/material");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SearchBar() {
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    searchData = _useState4[0],
    setSearchData = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    console.log(searchValue);
    fetchData();
  };
  var fetchData = function fetchData() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/".concat(searchValue), {
      method: "GET"
    }).then(function (response) {
      response.json().then(function (data) {
        setSearchData(data === null || data === void 0 ? void 0 : data.title);
        setLoading(false);
      });
    }).catch(function (error) {
      console.log("error", error);
      setLoading(false);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      component: "form",
      onSubmit: onSubmit,
      sx: {
        display: "flex"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
        required: true,
        value: searchValue,
        onChange: function onChange(e) {
          setSearchValue(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_lab.LoadingButton, {
        loading: loading,
        variant: "contained",
        children: "Search"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        mt: 2
      },
      children: ["Result : ", searchData !== null && searchData !== void 0 ? searchData : "N/A"]
    })]
  });
}
var _default = SearchBar;
exports.default = _default;