(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 535:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Events_container__grOKZ"
};


/***/ }),

/***/ 8027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ events),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(3812);
// EXTERNAL MODULE: ./config/index.ts
var config = __webpack_require__(8014);
// EXTERNAL MODULE: ./components/EventItem.tsx
var EventItem = __webpack_require__(3679);
// EXTERNAL MODULE: ./components/Title.tsx
var Title = __webpack_require__(4345);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/EventsLink.tsx
var EventsLink = __webpack_require__(6130);
// EXTERNAL MODULE: ./styles/Link.module.css
var Link_module = __webpack_require__(1775);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIos"
var ArrowForwardIos_ = __webpack_require__(1658);
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIos"
var ArrowBackIos_ = __webpack_require__(4195);
var ArrowBackIos_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIos_);
;// CONCATENATED MODULE: ./components/Pagination.tsx








const Pagination = ({ total , page  })=>{
    const lastPage = Math.ceil(total / config/* PER_PAGE */.LZ);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            page > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                className: external_classnames_default()((Link_module_default()).btn, (Link_module_default()).btnpagination),
                link: `/events?page=${page - 1}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIos_default()), {
                        style: {
                            marginRight: 10
                        }
                    }),
                    " Prev"
                ]
            }),
            page < lastPage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                className: external_classnames_default()((Link_module_default()).btn, (Link_module_default()).btnpagination),
                link: `/events?page=${page + 1}`,
                children: [
                    "Next",
                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIos_default()), {
                        style: {
                            marginLeft: 10
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Pagination = (Pagination);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./styles/Events.module.css
var Events_module = __webpack_require__(535);
var Events_module_default = /*#__PURE__*/__webpack_require__.n(Events_module);
;// CONCATENATED MODULE: ./pages/events/index.tsx









const EventsPage = ({ start , events , total , page ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Events",
        children: [
            events.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                children: "No events to show"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                children: "Events"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                className: (Events_module_default()).container,
                children: events.map((event)=>/*#__PURE__*/ jsx_runtime_.jsx(EventItem/* default */.Z, {
                        event: event
                    }, event.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Pagination, {
                page: page,
                total: total
            })
        ]
    });
};
/* harmony default export */ const events = (EventsPage);
const getServerSideProps = async ({ query: { page =1  }  })=>{
    const start = +page === 1 ? 0 : (+page - 1) * config/* PER_PAGE */.LZ;
    // fetch total
    const totalRes = await fetch(`${config/* API_URL */.T5}/events/count`);
    const total = await totalRes.json();
    // fetch events
    const eventRes = await fetch(`${config/* API_URL */.T5}/events?_sort=date:ASC&_limit=${config/* PER_PAGE */.LZ}&_start=${start}`);
    const events = await eventRes.json();
    return {
        props: {
            events,
            page: +page,
            total,
            start
        }
    };
};


/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 4195:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowBackIos");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,175,194,679], () => (__webpack_exec__(8027)));
module.exports = __webpack_exports__;

})();