(() => {
var exports = {};
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "DashboardEvent_item__L29g9",
	"icons": "DashboardEvent_icons__YrkWZ",
	"icon": "DashboardEvent_icon__B4q4n",
	"itemName": "DashboardEvent_itemName__UrgCr"
};


/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2535);
/* harmony import */ var Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4__);





const SubTitle = ({ className , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        variant: "h6",
        className: !className ? (Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4___default().subTitle) : classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4___default().subTitle)),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);


/***/ }),

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ parseCookies)
});

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./helpers/index.ts

const parseCookies = (req)=>{
    return external_cookie_default().parse(req ? req.headers.cookie || "" : "");
};


/***/ }),

/***/ 8422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./components/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(3812);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./helpers/index.ts + 1 modules
var helpers = __webpack_require__(6166);
// EXTERNAL MODULE: ./config/index.ts
var config = __webpack_require__(8014);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/Title.tsx
var Title = __webpack_require__(4345);
// EXTERNAL MODULE: ./components/SubTitle.tsx
var SubTitle = __webpack_require__(7385);
;// CONCATENATED MODULE: external "@mui/icons-material/Edit"
const Edit_namespaceObject = require("@mui/icons-material/Edit");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Clear"
const Clear_namespaceObject = require("@mui/icons-material/Clear");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_namespaceObject);
// EXTERNAL MODULE: ./styles/DashboardEvent.module.css
var DashboardEvent_module = __webpack_require__(353);
var DashboardEvent_module_default = /*#__PURE__*/__webpack_require__.n(DashboardEvent_module);
// EXTERNAL MODULE: ./components/EventsLink.tsx
var EventsLink = __webpack_require__(6130);
;// CONCATENATED MODULE: ./components/DashboardEventItem.tsx







const DashboardEventItem = ({ event , handleClickOpen , setId ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            className: (DashboardEvent_module_default()).item,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                    link: `/events/${event.slug}`,
                    className: (DashboardEvent_module_default()).itemName,
                    children: event.name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    className: (DashboardEvent_module_default()).icons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                            link: `/events/edit/${event.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {
                                className: (DashboardEvent_module_default()).icon
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                            onClick: ()=>{
                                setId(event.id);
                                handleClickOpen();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Clear_default()), {
                                className: (DashboardEvent_module_default()).icon
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_DashboardEventItem = (DashboardEventItem);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@mui/material/Dialog"
const Dialog_namespaceObject = require("@mui/material/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogActions"
const DialogActions_namespaceObject = require("@mui/material/DialogActions");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogTitle"
const DialogTitle_namespaceObject = require("@mui/material/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Slide"
const Slide_namespaceObject = require("@mui/material/Slide");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_namespaceObject);
// EXTERNAL MODULE: ./styles/Link.module.css
var Link_module = __webpack_require__(1775);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Confirm.tsx









const Transition = /*#__PURE__*/ external_react_default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Slide_default()), {
        direction: "up",
        ref: ref,
        ...props
    });
});
const Confirm = ({ open , setConfirm , handleClose  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        open: open,
        TransitionComponent: Transition,
        keepMounted: true,
        onClose: handleClose,
        PaperProps: {
            style: {
                color: "#f64c72",
                width: "250px",
                padding: "2rem",
                backgroundColor: "#553d67"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                children: "Are You Sure ?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                        className: external_classnames_default()((Link_module_default()).btnConfirm, (Link_module_default()).btn),
                        onClick: ()=>{
                            setConfirm(true);
                            handleClose();
                        },
                        children: "Yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                        className: external_classnames_default()((Link_module_default()).btnConfirm, (Link_module_default()).btn),
                        onClick: ()=>{
                            setConfirm(false);
                            handleClose();
                        },
                        children: "No"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Confirm = (Confirm);

;// CONCATENATED MODULE: ./pages/account/dashboard.tsx












const DashboardPage = ({ events , token  })=>{
    const router = (0,router_.useRouter)();
    const [open, setOpen] = external_react_default().useState(false);
    const [confirm, setConfirm] = external_react_default().useState(false);
    const [id1, setId] = external_react_default().useState();
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const deleteEvent = async (id)=>{
        const res = await fetch(`${config/* API_URL */.T5}/events/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (!res.ok) {
            external_react_toastify_.toast.error(data.message);
        } else {
            router.reload();
        }
    };
    external_react_default().useMemo(()=>{
        if (confirm) {
            deleteEvent(id1);
        }
        return ()=>{
            setConfirm(false);
        };
    }, [
        confirm,
        id1
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Dashboard",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                    children: "Dashboard"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SubTitle/* default */.Z, {
                    children: "My events"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Confirm, {
                    open: open,
                    handleClose: handleClose,
                    setConfirm: setConfirm
                }),
                events && events.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(components_DashboardEventItem, {
                        event: item,
                        handleClickOpen: handleClickOpen,
                        setId: setId
                    }, item.id)
                )
            ]
        })
    });
};
/* harmony default export */ const dashboard = (DashboardPage);
const getServerSideProps = async ({ req  })=>{
    const { token  } = (0,helpers/* parseCookies */.j)(req);
    const res = await fetch(`${config/* API_URL */.T5}/events/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const events = await res.json();
    return {
        props: {
            events,
            token
        }
    };
};


/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,175,194], () => (__webpack_exec__(8422)));
module.exports = __webpack_exports__;

})();