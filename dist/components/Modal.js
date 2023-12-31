// eslint-disable-next-line strict
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
var _reactJss = require("react-jss");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useStyles = (0, _reactJss.createUseStyles)({
  "darkBG": {
    "background-color": "rgba(0, 0, 0, 0.2)",
    "width": "100%",
    "height": "100%",
    "overflow": "hidden",
    "z-index": "0",
    "position": "absolute",
    "top": "0",
    "left": "0"
  },
  "main-modal-div": {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)"
  },
  "content-div": {
    "border-radius": "0.75rem",
    "width": "auto",
    "height": "auto",
    "box-shadow": "0 2px 20px 0px #a6a6a6"
  },
  "close-button": {
    "position": "absolute",
    "background-color": "#3a33a4",
    "color": "#bad5ff",
    "top": "0",
    "right": "0",
    "padding-top": "0",
    "padding-bottom": "0",
    "padding-left": "0.5rem",
    "padding-right": "0.5rem",
    "margin-top": "-0.75rem",
    "margin-right": "-0.75rem",
    "align-self": "flex-end",
    "border-radius": "1rem",
    "border-width": "0",
    "font-size": "1.125rem",
    "line-height": "1.75rem",
    "font-weight": "500",
    "transition-property": "all",
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "300ms",
    "cursor": "pointer"
  },
  "close-button:hover": {
    "color": "#000000",
    "background-color": "#ffffff"
  },
  "text-left": {
    "text-align": "left"
  },
  "p-content": {
    "padding": "2rem",
    "border-radius": "0.25rem",
    "background-color": "#ffffff"
  }
});
function Modal(_ref) {
  let {
    setModalIsOpen,
    content
  } = _ref;
  const styles = useStyles();
  const handleClose = () => {
    setModalIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.darkBG,
    onClick: e => {
      e.target.className === styles.darkBG && setModalIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['main-modal-div']
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles['content-div']
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: styles['close-button'],
    "aria-label": "Close",
    title: "Close",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClose
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: styles['text-left']
  }, content))));
}