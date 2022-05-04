(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 535:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Events_container__grOKZ"
};


/***/ }),

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3812);
/* harmony import */ var Config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8014);
/* harmony import */ var Components_EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3679);
/* harmony import */ var Components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4345);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1658);
/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Components_EventsLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6130);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1775);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var Styles_Events_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(535);
/* harmony import */ var Styles_Events_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(Styles_Events_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);











const Home = ({ events  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Home",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: "Upcoming Events"
            }),
            events.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: "No events to show"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                style: {
                    display: "flex",
                    flexWrap: "wrap"
                },
                className: (Styles_Events_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
                children: events.map((event)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EventItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        event: event
                    }, event.id)
                )
            }),
            events.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Components_EventsLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                link: "/events",
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn), (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_10___default().btnActive2)),
                children: [
                    "View All Events ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5___default()), {
                        style: {
                            marginLeft: 10
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const res = await fetch(`${Config_index__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}/events?_sort=date:ASC&_limit=3`);
    const events = await res.json();
    return {
        props: {
            events
        },
        revalidate: 1800
    };
};


/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 1658:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 7235:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Login");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 8017:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,175,194,679], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();