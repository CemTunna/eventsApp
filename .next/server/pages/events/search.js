"use strict";
(() => {
var exports = {};
exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 1595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(3812);
// EXTERNAL MODULE: ./config/index.ts
var config = __webpack_require__(8014);
// EXTERNAL MODULE: ./components/EventItem.tsx
var EventItem = __webpack_require__(3679);
// EXTERNAL MODULE: ./components/Title.tsx
var Title = __webpack_require__(4345);
;// CONCATENATED MODULE: external "qs"
const external_qs_namespaceObject = require("qs");
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Link.module.css
var Link_module = __webpack_require__(1775);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIos"
var ArrowBackIos_ = __webpack_require__(4195);
var ArrowBackIos_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIos_);
// EXTERNAL MODULE: ./components/EventsLink.tsx
var EventsLink = __webpack_require__(6130);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./pages/events/search.tsx











const SearchPage = ({ events  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Search Results",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                link: "/events",
                className: external_classnames_default()((Link_module_default()).btn, (Link_module_default()).btnActive),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIos_default()), {
                        style: {
                            color: "#fff",
                            marginRight: 10
                        }
                    }),
                    " Go Back"
                ]
            }),
            events.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                children: "No events to show"
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title/* default */.Z, {
                children: [
                    "Search Results for ",
                    router.query.term
                ]
            }),
            events.map((event)=>/*#__PURE__*/ jsx_runtime_.jsx(EventItem/* default */.Z, {
                    event: event
                }, event.id)
            )
        ]
    });
};
/* harmony default export */ const search = (SearchPage);
const getServerSideProps = async ({ query: { term  } ,  })=>{
    const query = external_qs_default().stringify({
        _where: {
            _or: [
                {
                    name_contains: term
                },
                {
                    performers_contains: term
                },
                {
                    description_contains: term
                },
                {
                    venue_contains: term
                }, 
            ]
        }
    });
    const res = await fetch(`${config/* API_URL */.T5}/events?${query}`);
    const events = await res.json();
    return {
        props: {
            events
        }
    };
};


/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIos");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Login");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,175,194,679], () => (__webpack_exec__(1595)));
module.exports = __webpack_exports__;

})();