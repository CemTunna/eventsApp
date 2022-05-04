exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 9304:
/***/ ((module) => {

// Exports
module.exports = {
	"event": "EventItem_event__Wx_vC",
	"img": "EventItem_img__Zb9qq",
	"info": "EventItem_info__7rmEV"
};


/***/ }),

/***/ 3679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1775);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9304);
/* harmony import */ var Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EventsLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6130);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);








const EventItem = ({ event  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        className: (Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().event),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                className: (Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    width: 300,
                    height: 200,
                    src: event.image ? event.image.formats.thumbnail.url : "/images/event-default.png"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                style: {
                    marginBottom: "1rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    className: (Styles_EventItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            variant: "h6",
                            style: {
                                marginLeft: "1rem"
                            },
                            children: event.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: new Date(event.date).toLocaleDateString("en-US")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        marginRight: "0.2rem"
                                    },
                                    children: "at"
                                }),
                                " ",
                                event.time
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventsLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn), (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnEvents)),
                    link: `/events/${event.slug}`,
                    children: "Details"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventItem);


/***/ })

};
;