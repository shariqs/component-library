
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = _interopDefault(require('react'));

var styleReset = "\n  html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1.5;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nul,\nli {\n  list-style-type: none;\n}\nbutton {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: black;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n\n";

var shadow = '4px 4px 10px 0 rgba(0, 0, 0, 0.35)';
var createBoxStyles = function createBoxStyles() {
  return styled.css(["box-sizing:border-box;display:inline-block;background:", ";color:", ";"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.material;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.materialText;
  });
}; // TODO for flat box styles add checkered background when disabled (not solid color)

var createHatchedBackground = function createHatchedBackground(_ref6) {
  var _ref6$mainColor = _ref6.mainColor,
      mainColor = _ref6$mainColor === void 0 ? 'black' : _ref6$mainColor,
      _ref6$secondaryColor = _ref6.secondaryColor,
      secondaryColor = _ref6$secondaryColor === void 0 ? 'transparent' : _ref6$secondaryColor,
      _ref6$pixelSize = _ref6.pixelSize,
      pixelSize = _ref6$pixelSize === void 0 ? 2 : _ref6$pixelSize;
  return styled.css(["background-image:", ";background-color:", ";background-size:", ";background-position:0 0,", ";"], ["linear-gradient(\n      45deg,\n      ".concat(mainColor, " 25%,\n      transparent 25%,\n      transparent 75%,\n      ").concat(mainColor, " 75%\n    )"), "linear-gradient(\n      45deg,\n      ".concat(mainColor, " 25%,\n      transparent 25%,\n      transparent 75%,\n      ").concat(mainColor, " 75%\n    )")].join(','), secondaryColor, "".concat(pixelSize * 2, "px ").concat(pixelSize * 2, "px"), "".concat(pixelSize, "px ").concat(pixelSize, "px"));
};
var createFlatBoxStyles = function createFlatBoxStyles() {
  return styled.css(["position:relative;box-sizing:border-box;display:inline-block;color:", ";background:", ";border:2px solid ", ";outline:2px solid ", ";outline-offset:-4px;"], function (_ref7) {
    var theme = _ref7.theme;
    return theme.materialText;
  }, function (_ref8) {
    var theme = _ref8.theme,
        isDisabled = _ref8.isDisabled;
    return isDisabled ? theme.flatLight : theme.canvas;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.canvas;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.flatDark;
  });
};
var createBorderStyles = function createBorderStyles() {
  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref11$invert = _ref11.invert,
      invert = _ref11$invert === void 0 ? false : _ref11$invert,
      _ref11$windowBorders = _ref11.windowBorders,
      windowBorders = _ref11$windowBorders === void 0 ? false : _ref11$windowBorders;

  return invert ? styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref12) {
    var theme = _ref12.theme;
    return theme.borderDarkest;
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.borderDarkest;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.borderLightest;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.borderLightest;
  }, function (props) {
    return props.shadow && "".concat(shadow, ", ");
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.borderDark;
  }, function (_ref17) {
    var theme = _ref17.theme;
    return theme.borderLight;
  }) : styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref18) {
    var theme = _ref18.theme;
    return windowBorders ? theme.borderLight : theme.borderLightest;
  }, function (_ref19) {
    var theme = _ref19.theme;
    return windowBorders ? theme.borderLight : theme.borderLightest;
  }, function (_ref20) {
    var theme = _ref20.theme;
    return theme.borderDarkest;
  }, function (_ref21) {
    var theme = _ref21.theme;
    return theme.borderDarkest;
  }, function (props) {
    return props.shadow && "".concat(shadow, ", ");
  }, function (_ref22) {
    var theme = _ref22.theme;
    return windowBorders ? theme.borderLightest : theme.borderLight;
  }, function (_ref23) {
    var theme = _ref23.theme;
    return theme.borderDark;
  });
};

var nodeBtoa = function nodeBtoa(b) {
  return Buffer.from(b).toString('base64');
};

var base64encode = typeof btoa !== 'undefined' ? btoa : nodeBtoa;

var createTriangleSVG = function createTriangleSVG(color) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var svg = "<svg height=\"26\" width=\"26\" viewBox=\"0 0 26 26\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g transform=\"rotate(".concat(angle, " 13 13)\">\n      <polygon fill=\"").concat(color, "\" points=\"6,10 20,10 13,17\"/>\n    </g>\n  </svg>");
  var encoded = base64encode(svg);
  return "url(data:image/svg+xml;base64,".concat(encoded, ")");
};

var createScrollbars = function createScrollbars() {
  var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  return styled.css(["::-webkit-scrollbar{width:26px;height:26px;}::-webkit-scrollbar-track{", "}::-webkit-scrollbar-thumb{", " ", " outline-offset:-2px;}::-webkit-scrollbar-corner{background-color:", ";}::-webkit-scrollbar-button{", " ", " display:block;outline-offset:-2px;height:26px;width:26px;background-repeat:no-repeat;background-size:100%;background-position:0 0;}::-webkit-scrollbar-button:active,::-webkit-scrollbar-button:active{background-position:0 1px;", "}::-webkit-scrollbar-button:horizontal:increment:start,::-webkit-scrollbar-button:horizontal:decrement:end,::-webkit-scrollbar-button:vertical:increment:start,::-webkit-scrollbar-button:vertical:decrement:end{display:none;}::-webkit-scrollbar-button:horizontal:decrement{background-image:", ";}::-webkit-scrollbar-button:horizontal:increment{background-image:", ";}::-webkit-scrollbar-button:vertical:decrement{background-image:", ";}::-webkit-scrollbar-button:vertical:increment{background-image:", ";}"], function (_ref33) {
    var theme = _ref33.theme;
    return createHatchedBackground({
      mainColor: variant === 'flat' ? theme.flatLight : theme.material,
      secondaryColor: variant === 'flat' ? theme.canvas : theme.borderLightest
    });
  }, createBoxStyles(), variant === 'flat' ? createFlatBoxStyles() : createBorderStyles({
    windowBorders: true
  }), function (_ref34) {
    var theme = _ref34.theme;
    return theme.material;
  }, createBoxStyles(), variant === 'flat' ? createFlatBoxStyles() : createBorderStyles({
    windowBorders: true
  }), variant === 'default' && createBorderStyles({
    windowBorders: true,
    invert: true
  }), function (_ref35) {
    var theme = _ref35.theme;
    return createTriangleSVG(theme.materialText, 90);
  }, function (_ref36) {
    var theme = _ref36.theme;
    return createTriangleSVG(theme.materialText, 270);
  }, function (_ref37) {
    var theme = _ref37.theme;
    return createTriangleSVG(theme.materialText, 180);
  }, function (_ref38) {
    var theme = _ref38.theme;
    return createTriangleSVG(theme.materialText, 0);
  });
};

/* eslint-disable no-nested-ternary */
var StyledButton = styled__default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-xs2gyw-0"
})(["width:100px;height:100px;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"]);
var Button = /*#__PURE__*/React.forwardRef(function Button() {
  return /*#__PURE__*/React.createElement(StyledButton, null, "Hello World");
});

exports.Button = Button;
exports.createScrollbars = createScrollbars;
exports.styleReset = styleReset;
//# sourceMappingURL=index.js.map
