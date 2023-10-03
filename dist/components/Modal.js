"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    setModalIsOpen,
    content
  } = _ref;
  const handleClose = () => {
    setModalIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'darkBG',
    onClick: e => {
      e.target.className === 'darkBG' && setModalIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-modal-div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-div"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    "aria-label": "Close",
    title: "Close",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClose
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-left"
  }, content))));
}