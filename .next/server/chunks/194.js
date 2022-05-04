exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 3971:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "EventsInput_input__qg7pX"
};


/***/ }),

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"link": "Footer_link__LnE0_"
};


/***/ }),

/***/ 5522:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__VYZ3G",
	"list": "Header_list__QDf5b",
	"regular": "Header_regular__EbXQt",
	"logo": "Header_logo__6vBZG",
	"title": "Header_title__UlymB"
};


/***/ }),

/***/ 2136:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__PwD36",
	"container": "Layout_container__S4aNf"
};


/***/ }),

/***/ 1775:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Link_link__vkB9E",
	"btn": "Link_btn__QyE_s",
	"btnActive": "Link_btnActive___yT_9",
	"btnActive2": "Link_btnActive2__VIIk6",
	"btnEvents": "Link_btnEvents__On_gF",
	"btnHeader": "Link_btnHeader__2T3GG",
	"btnConfirm": "Link_btnConfirm__YqCKb",
	"btnpagination": "Link_btnpagination__s4xS_"
};


/***/ }),

/***/ 2046:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Search_input__jBVVm"
};


/***/ }),

/***/ 7711:
/***/ ((module) => {

// Exports
module.exports = {
	"showcase": "Showcase_showcase__VZOKI"
};


/***/ }),

/***/ 2535:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Typography_title__U8KAE",
	"subTitle": "Typography_subTitle__I_DZZ",
	"text": "Typography_text__F4VPW"
};


/***/ }),

/***/ 7110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Styles_EventsInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3971);
/* harmony import */ var Styles_EventsInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Styles_EventsInput_module_css__WEBPACK_IMPORTED_MODULE_4__);





const EventsInput = ({ placeholder , className , onChange , type , value , name , id , icon ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Input, {
        autoComplete: "off",
        startAdornment: icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
            position: "start",
            children: icon
        }),
        name: name,
        id: id,
        value: value,
        type: type,
        disableUnderline: true,
        onChange: onChange,
        className: !className ? (Styles_EventsInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().input) : classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (Styles_EventsInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)),
        placeholder: placeholder
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsInput);


/***/ }),

/***/ 6130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1775);
/* harmony import */ var Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);






const EventsLink = ({ onClick , className , children , link , type ,  })=>{
    if (link && link.length !== 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: link,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: !className ? (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5___default().link) : classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5___default().link)),
                children: children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: type,
        onClick: onClick && onClick,
        className: !className ? (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn) : classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (Styles_Link_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn)),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsLink);


/***/ }),

/***/ 4345:
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





const Title = ({ size , className , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        variant: !size ? "h4" : size,
        className: !className ? (Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4___default().title) : classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (Styles_Typography_module_css__WEBPACK_IMPORTED_MODULE_4___default().title)),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(5522);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Search.module.css
var Search_module = __webpack_require__(2046);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: ./components/EventsInput.tsx
var EventsInput = __webpack_require__(7110);
// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
;// CONCATENATED MODULE: ./components/Search.tsx







const Search = ()=>{
    const { 0: term , 1: setTerm  } = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/events/search?term=${term}`);
        setTerm("");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ jsx_runtime_.jsx(EventsInput/* default */.Z, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                    style: {
                        color: "#fff"
                    },
                    fontSize: "medium"
                }),
                className: (Search_module_default()).input,
                type: "text",
                value: term,
                placeholder: "Search...",
                onChange: (e)=>setTerm(e.target.value)
            })
        })
    });
};
/* harmony default export */ const components_Search = (Search);

// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@mui/icons-material/Login"
var Login_ = __webpack_require__(7752);
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_);
// EXTERNAL MODULE: ./context/AuthContext.tsx
var AuthContext = __webpack_require__(175);
// EXTERNAL MODULE: external "@mui/icons-material/Dashboard"
var Dashboard_ = __webpack_require__(7235);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
// EXTERNAL MODULE: external "@mui/icons-material/Logout"
var Logout_ = __webpack_require__(9801);
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_);
// EXTERNAL MODULE: ./components/EventsLink.tsx
var EventsLink = __webpack_require__(6130);
// EXTERNAL MODULE: ./styles/Link.module.css
var Link_module = __webpack_require__(1775);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Header.tsx













const Header = ()=>{
    const context = (0,external_react_.useContext)(AuthContext/* default */.Z);
    if (!context) {
        return null;
    }
    const { user , logout  } = context;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                className: (Header_module_default()).logo,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                        link: "/",
                        className: (Header_module_default()).title,
                        children: "B.Events"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        style: {
                            marginTop: 10
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Search, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                    className: (Header_module_default()).list,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                                link: "/events",
                                className: (Header_module_default()).regular,
                                children: "Events"
                            })
                        }),
                        user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                                        link: "/events/add",
                                        className: (Header_module_default()).regular,
                                        children: [
                                            "Add Event",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {
                                                style: {
                                                    color: "#fff",
                                                    marginLeft: 5
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                                        link: "/account/dashboard",
                                        className: (Header_module_default()).regular,
                                        children: [
                                            "Dashboard",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Dashboard_default()), {
                                                style: {
                                                    color: "#fff",
                                                    marginLeft: 5
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                                        onClick: ()=>logout()
                                        ,
                                        className: external_classnames_default()((Link_module_default()).btn, (Link_module_default()).btnHeader),
                                        children: [
                                            "Logout",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                                                style: {
                                                    color: "#fff",
                                                    marginLeft: 5
                                                }
                                            })
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventsLink/* default */.Z, {
                                    link: "/account/login",
                                    className: external_classnames_default()((Link_module_default()).btn, (Link_module_default()).btnHeader),
                                    children: [
                                        "Login ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Login_default()), {
                                            style: {
                                                color: "#fff",
                                                marginLeft: 5
                                            }
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                style: {
                    color: "#fff"
                },
                children: "Copyright \xa9 B.Events 2022"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(EventsLink/* default */.Z, {
                    link: "/about",
                    className: (Footer_module_default()).link,
                    children: "About"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Showcase.module.css
var Showcase_module = __webpack_require__(7711);
var Showcase_module_default = /*#__PURE__*/__webpack_require__.n(Showcase_module);
;// CONCATENATED MODULE: ./components/Showcase.tsx




const Showcase = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        className: (Showcase_module_default()).showcase,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h1",
                children: "Welcome To The Party"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h2",
                children: "Find the hottest events"
            })
        ]
    });
};
/* harmony default export */ const components_Showcase = (Showcase);

;// CONCATENATED MODULE: ./components/layout/Layout.tsx









const Layout = ({ title , keywords , description , children ,  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        className: (Layout_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: !description ? "Find the latest and hottest parties" : description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: !keywords ? "events, parties" : keywords
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            router.pathname === "/" && /*#__PURE__*/ jsx_runtime_.jsx(components_Showcase, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                className: (Layout_module_default()).container,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;